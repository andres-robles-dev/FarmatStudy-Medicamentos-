import { arbolAtc } from '../../datos/clasificacion-atc.js';
import { obtenerMedicamentosPorGrupo, obtenerMedicamentosPorSubgrupo } from '../../datos/medicamentos.js';
import { escapeHtml } from '../nucleo/utilidades.js';
import { navegarA } from '../nucleo/enrutador.js';
import { establecerEstado } from '../nucleo/estado.js';

let grupoExpandido = null;
let subgrupoSeleccionado = null;

function renderArbol() {
  const contenedor = document.getElementById('explorador-arbol');
  let html = '';
  arbolAtc.forEach(grupo => {
    const cant = obtenerMedicamentosPorGrupo(grupo.codigo).length;
    const expandido = grupoExpandido === grupo.codigo;
    const activo = subgrupoSeleccionado === grupo.codigo;
    html += `<div class="nodo-atc ${expandido ? 'nodo-atc--abierto' : ''}">
      <div class="nodo-atc__cabecera ${activo ? 'nodo-atc__cabecera--activo' : ''}" data-accion="grupo" data-codigo="${grupo.codigo}">
        <span class="nodo-atc__toggle">${expandido ? '▼' : '▶'}</span>
        <span class="nodo-atc__codigo">${grupo.codigo}</span>
        <span class="nodo-atc__nombre">${grupo.icono} ${escapeHtml(grupo.nombre)}</span>
        <span class="nodo-atc__contador">${cant}</span>
      </div>
      <div class="nodo-atc__hijos">
        ${grupo.hijos.map(h => {
          const cantH = obtenerMedicamentosPorSubgrupo(h.codigo).length;
          const activoH = subgrupoSeleccionado === h.codigo;
          return `<div class="nodo-atc__cabecera ${activoH ? 'nodo-atc__cabecera--activo' : ''}" data-accion="subgrupo" data-codigo="${h.codigo}" style="padding-left:24px;">
            <span class="nodo-atc__codigo">${h.codigo}</span>
            <span class="nodo-atc__nombre">${escapeHtml(h.nombre)}</span>
            <span class="nodo-atc__contador">${cantH}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });
  contenedor.innerHTML = html;
}

function renderLista(meds) {
  const contenedor = document.getElementById('explorador-resultados');
  if (!meds.length) {
    contenedor.innerHTML = `<div class="vacio"><div class="vacio__icono material-symbols-outlined">inbox</div><div class="vacio__texto">Selecciona un grupo ATC para ver sus medicamentos</div></div>`;
    return;
  }
  const html = meds.map(m => `
    <div class="med-card" data-id="${m.id}">
      <div class="med-card__info">
        <div class="med-card__nombre">${escapeHtml(m.nombre)}</div>
        <div class="med-card__detalle">
          <span>${escapeHtml(m.principioActivo)}</span>
          <span>•</span>
          <span>${escapeHtml(m.laboratorio)}</span>
          <span>•</span>
          <span>${m.presentacion}</span>
        </div>
      </div>
      <div class="med-card__badges">
        <span class="badge badge--${m.receta ? 'rojo' : 'verde'}">${m.receta ? 'Receta' : 'OTC'}</span>
        <span class="badge badge--${m.financiado ? 'azul' : 'gris'}">${m.financiado ? 'Financiado' : 'No financ.'}</span>
      </div>
    </div>
  `).join('');
  contenedor.innerHTML = `<div class="anim-aparecer">${html}</div>`;
  contenedor.querySelectorAll('.med-card').forEach(el => {
    el.addEventListener('click', () => {
      establecerEstado('medicamentoSeleccionado', el.dataset.id);
      navegarA('ficha');
    });
  });
}

function manejarClickArbol(e) {
  const cabecera = e.target.closest('.nodo-atc__cabecera');
  if (!cabecera) return;

  const accion = cabecera.dataset.accion;
  const codigo = cabecera.dataset.codigo;
  const info = document.getElementById('explorador-info');

  if (accion === 'grupo') {
    if (grupoExpandido === codigo) {
      grupoExpandido = null;
      subgrupoSeleccionado = null;
    } else {
      grupoExpandido = codigo;
      subgrupoSeleccionado = codigo;
    }
    renderArbol();
    if (subgrupoSeleccionado) {
      const meds = obtenerMedicamentosPorGrupo(codigo);
      info.textContent = `Grupo ${codigo} — ${meds.length} medicamentos`;
      renderLista(meds);
    }
  } else if (accion === 'subgrupo') {
    subgrupoSeleccionado = codigo;
    grupoExpandido = codigo.slice(0, 1);
    const meds = obtenerMedicamentosPorSubgrupo(codigo);
    info.textContent = `Subgrupo ${codigo} — ${meds.length} medicamentos`;
    renderLista(meds);
    renderArbol();
  }
}

export default {
  titulo: 'Explorador ATC',
  iniciar() {
    grupoExpandido = null;
    subgrupoSeleccionado = null;
    const area = document.getElementById('area-trabajo');
    area.innerHTML = `<div class="explorador">
      <div class="explorador__panel">
        <div id="explorador-arbol" class="explorador__arbol"></div>
        <div class="explorador__lista">
          <div id="explorador-info" class="explorador__info">Selecciona un grupo o subgrupo ATC</div>
          <div id="explorador-resultados" class="explorador__resultados">
            <div class="vacio"><div class="vacio__icono material-symbols-outlined">inbox</div><div class="vacio__texto">Selecciona un grupo ATC para ver sus medicamentos</div></div>
          </div>
        </div>
      </div>
    </div>`;
    renderArbol();
    const arbol = document.getElementById('explorador-arbol');
    arbol.addEventListener('click', manejarClickArbol);
  }
};

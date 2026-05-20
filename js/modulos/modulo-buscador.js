import { listaMedicamentos, buscarMedicamentos } from '../../datos/medicamentos.js';
import { escapeHtml } from '../nucleo/utilidades.js';
import { navegarA } from '../nucleo/enrutador.js';
import { obtenerEstado, establecerEstado } from '../nucleo/estado.js';

let timeoutBusqueda = null;

function renderResultados(meds, query) {
  const contenedor = document.getElementById('buscador-resultados');
  if (!meds.length) {
    contenedor.innerHTML = `<div class="vacio" style="padding:30px"><div class="vacio__icono material-symbols-outlined">search</div><div class="vacio__texto">${query ? 'No se encontraron resultados para "' + escapeHtml(query) + '"' : 'Escribe para buscar medicamentos, principios activos o laboratorios'}</div></div>`;
    return;
  }
  const info = document.getElementById('buscador-info');
  info.textContent = `${meds.length} resultado${meds.length !== 1 ? 's' : ''} para "${escapeHtml(query)}"`;
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
        <span class="badge badge--verde">${m.atc}</span>
        <span class="badge badge--${m.receta ? 'rojo' : 'verde'}">${m.receta ? 'Receta' : 'OTC'}</span>
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

export default {
  titulo: 'Buscador',
  iniciar() {
    const area = document.getElementById('area-trabajo');
    area.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-width:800px;margin:0 auto">
      <div class="seccion-titulo">Buscador de medicamentos</div>
      <div class="seccion-subtitulo">Busca por nombre, principio activo, laboratorio o indicación</div>
      <div class="buscador">
        <span class="material-symbols-outlined" style="font-size:20px">search</span>
        <input type="text" id="buscador-input" class="buscador__input" placeholder="Ej: omeprazol, amoxicilina, Bayer, dolor..." autofocus />
      </div>
      <div id="buscador-info" class="explorador__info">Escribe para buscar</div>
      <div id="buscador-resultados" class="explorador__resultados">
        <div class="vacio" style="padding:30px"><div class="vacio__icono material-symbols-outlined">search</div><div class="vacio__texto">Escribe para buscar medicamentos, principios activos o laboratorios</div></div>
      </div>
    </div>`;

    const input = document.getElementById('buscador-input');

    const estado = obtenerEstado();
    const busquedaPrevia = estado.busquedaRapida;
    if (busquedaPrevia) {
      input.value = busquedaPrevia;
      establecerEstado('busquedaRapida', null);
      const resultados = buscarMedicamentos(busquedaPrevia);
      renderResultados(resultados, busquedaPrevia);
    }

    input.addEventListener('input', () => {
      if (timeoutBusqueda) clearTimeout(timeoutBusqueda);
      timeoutBusqueda = setTimeout(() => {
        const texto = input.value;
        const resultados = texto.trim() ? buscarMedicamentos(texto) : [];
        renderResultados(resultados, texto);
      }, 200);
    });
  },
  destruir() {
    if (timeoutBusqueda) clearTimeout(timeoutBusqueda);
    timeoutBusqueda = null;
  }
};

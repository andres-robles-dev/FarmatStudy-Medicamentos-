import { obtenerEstado, suscribir, dessuscribir } from '../nucleo/estado.js';
import { obtenerMedicamentoPorId, obtenerMedicamentosPorPrincipio } from '../../datos/medicamentos.js';
import { arbolAtc } from '../../datos/clasificacion-atc.js';
import { escapeHtml } from '../nucleo/utilidades.js';
import { navegarA } from '../nucleo/enrutador.js';

let suscriptor = null;

function renderFicha(id) {
  const med = obtenerMedicamentoPorId(id);
  const area = document.getElementById('area-trabajo');
  if (!med) {
    area.innerHTML = `<div class="vacio"><div class="vacio__icono material-symbols-outlined">description</div><div class="vacio__texto">Selecciona un medicamento desde el Explorador ATC</div></div>`;
    return;
  }
  const grupo = arbolAtc.find(g => g.codigo === med.grupoAtc);
  const subgrupo = grupo?.hijos.find(h => h.codigo === med.subgrupoAtc);
  const relacionados = obtenerMedicamentosPorPrincipio(med.principioActivo).filter(m => m.id !== med.id);
  area.innerHTML = `<div class="ficha anim-aparecer">
    <div class="migas" style="margin-bottom:12px">
      <span class="migas__item" data-modulo="explorador">Explorador ATC</span>
      <span class="migas__sep">›</span>
      <span class="migas__item" data-modulo="explorador">${med.grupoAtc}</span>
      <span class="migas__sep">›</span>
      <span class="migas__item--actual">${escapeHtml(med.nombre)}</span>
    </div>
    <div class="ficha__cabecera">
      <div class="ficha__icono material-symbols-outlined">pill</div>
      <div class="ficha__titulos">
        <div class="ficha__nombre">${escapeHtml(med.nombre)}</div>
        <div class="ficha__principio">${escapeHtml(med.principioActivo)}</div>
        <div class="ficha__badges">
          <span class="badge badge--${med.receta ? 'rojo' : 'verde'}">${med.receta ? 'Con receta' : 'Sin receta'}</span>
          <span class="badge badge--${med.financiado ? 'azul' : 'gris'}">${med.financiado ? 'Financiado' : 'No financiado'}</span>
          <span class="badge badge--gris">${escapeHtml(med.tipo)}</span>
        </div>
      </div>
    </div>
    <div class="ficha__grid">
      <div class="ficha__campo">
        <div class="ficha__campo-etiqueta">Código ATC</div>
        <div class="ficha__campo-valor">${med.atc}</div>
      </div>
      <div class="ficha__campo">
        <div class="ficha__campo-etiqueta">Laboratorio</div>
        <div class="ficha__campo-valor">${escapeHtml(med.laboratorio)}</div>
      </div>
      <div class="ficha__campo ficha__campo--ancho">
        <div class="ficha__campo-etiqueta">Indicación</div>
        <div class="ficha__campo-valor">${escapeHtml(med.indicacion)}</div>
      </div>
      <div class="ficha__campo">
        <div class="ficha__campo-etiqueta">Dosis</div>
        <div class="ficha__campo-valor">${escapeHtml(med.dosis)}</div>
      </div>
      <div class="ficha__campo">
        <div class="ficha__campo-etiqueta">Presentación</div>
        <div class="ficha__campo-valor">${escapeHtml(med.presentacion)}</div>
      </div>
    </div>
    ${med.contraindicaciones ? `<div class="ficha__campo ficha__campo--ancho" style="margin-top:8px">
      <div class="ficha__campo-etiqueta">Contraindicaciones</div>
      <div class="ficha__campo-valor">${escapeHtml(med.contraindicaciones)}</div>
    </div>` : ''}
    ${med.efectosAdversarios ? `<div class="ficha__campo ficha__campo--ancho" style="margin-top:8px">
      <div class="ficha__campo-etiqueta">Efectos adversos</div>
      <div class="ficha__campo-valor">${escapeHtml(med.efectosAdversarios)}</div>
    </div>` : ''}
    <div class="ficha__atc-trace">
      <div class="ficha__campo-etiqueta" style="margin-bottom:6px">Traza ATC</div>
      <div class="ficha__atc-nivel"><span class="badge badge--verde">${med.grupoAtc}</span> <strong>${escapeHtml(grupo?.nombre || '')}</strong></div>
      <div class="ficha__atc-nivel"><span class="badge badge--azul">${med.subgrupoAtc}</span> <strong>${escapeHtml(subgrupo?.nombre || '')}</strong></div>
      <div class="ficha__atc-nivel"><span class="badge badge--gris">${med.atc}</span> <strong>Código completo ATC</strong></div>
    </div>
    ${relacionados.length ? `<div style="margin-top:8px">
      <div class="ficha__campo-etiqueta" style="margin-bottom:6px">Otros medicamentos con el mismo principio activo</div>
      <div class="ficha__marcas">${relacionados.map(r => `<span class="ficha__marca" data-id="${r.id}">${escapeHtml(r.nombre)}</span>`).join('')}</div>
    </div>` : ''}
  </div>`;

  area.querySelectorAll('.migas__item[data-modulo]').forEach(el => {
    el.addEventListener('click', () => navegarA(el.dataset.modulo));
  });
  area.querySelectorAll('.ficha__marca[data-id]').forEach(el => {
    el.addEventListener('click', () => {
      renderFicha(el.dataset.id);
    });
  });
}

export default {
  titulo: 'Ficha detalle',
  iniciar() {
    const estado = obtenerEstado();
    if (estado.medicamentoSeleccionado) {
      renderFicha(estado.medicamentoSeleccionado);
    } else {
      document.getElementById('area-trabajo').innerHTML = `<div class="vacio"><div class="vacio__icono material-symbols-outlined">description</div><div class="vacio__texto">Selecciona un medicamento desde el Explorador ATC</div></div>`;
    }
    if (!suscriptor) {
      suscriptor = suscribir('medicamentoSeleccionado', (id) => {
        if (id) renderFicha(id);
      });
    }
  },
  destruir() {
    if (suscriptor) {
      dessuscribir('medicamentoSeleccionado', suscriptor);
      suscriptor = null;
    }
  }
};

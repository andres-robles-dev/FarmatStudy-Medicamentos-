import { listaLaboratorios } from '../../datos/laboratorios.js';
import { listaMedicamentos } from '../../datos/medicamentos.js';
import { escapeHtml } from '../nucleo/utilidades.js';
import { obtenerModulo } from '../nucleo/enrutador.js';
import { establecerEstado } from '../nucleo/estado.js';
import { navegarA } from '../nucleo/enrutador.js';

function renderGrid() {
  const area = document.getElementById('area-trabajo');
  const html = listaLaboratorios.map(lab => {
    const meds = listaMedicamentos.filter(m => m.laboratorio === lab.nombre || m.laboratorio.includes(lab.nombre));
    return `<div class="lab-card" data-lab="${escapeHtml(lab.nombre)}">
      <div class="lab-card__nombre">${escapeHtml(lab.nombre)}</div>
      <div class="lab-card__detalle">${escapeHtml(lab.descripcion)}</div>
      <div class="lab-card__detalle"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">public</span> ${escapeHtml(lab.pais)}</div>
      <div style="margin-top:4px;display:flex;justify-content:space-between;align-items:center">
        <span class="badge badge--azul">${meds.length} medicamentos</span>
        ${lab.web ? `<a href="${escapeHtml(lab.web)}" target="_blank" rel="noopener noreferrer" class="lab-card__enlace" title="Abrir web de ${escapeHtml(lab.nombre)}"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">link</span> web</a>` : ''}
      </div>
    </div>`;
  }).join('');
  area.innerHTML = `<div class="anim-aparecer">
    <div class="seccion-titulo">Laboratorios farmacéuticos</div>
    <div class="seccion-subtitulo">${listaLaboratorios.length} laboratorios con presencia en España</div>
    <div class="lab-grid">${html}</div>
  </div>`;

  area.querySelectorAll('.lab-card').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.lab-card__enlace')) return;
      const nombreLab = el.dataset.lab;
      const lab = listaLaboratorios.find(l => l.nombre === nombreLab);
      const meds = listaMedicamentos.filter(m => m.laboratorio === nombreLab || m.laboratorio.includes(nombreLab));
      if (!meds.length) return;
      const medHtml = meds.map(m => `
        <div class="med-card" data-id="${m.id}" style="animation:none">
          <div class="med-card__info">
            <div class="med-card__nombre">${escapeHtml(m.nombre)}</div>
            <div class="med-card__detalle">
              <span>${escapeHtml(m.principioActivo)}</span>
              <span>•</span>
              <span>${m.atc}</span>
            </div>
          </div>
          <div class="med-card__badges">
            <span class="badge badge--${m.receta ? 'rojo' : 'verde'}">${m.receta ? 'Receta' : 'OTC'}</span>
          </div>
        </div>
      `).join('');
      area.innerHTML = `<div class="anim-aparecer">
        <div class="migas" style="margin-bottom:12px">
          <span class="migas__item" data-volver="labs"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">arrow_back</span> Laboratorios</span>
          <span class="migas__sep">›</span>
          <span class="migas__item--actual">${escapeHtml(lab.nombre)}</span>
        </div>
        <div class="seccion-titulo">${escapeHtml(lab.nombre)}</div>
        <div class="seccion-subtitulo" style="margin-bottom:4px">${escapeHtml(lab.descripcion)}</div>
        <div style="display:flex;gap:12px;margin-bottom:12px;flex-wrap:wrap">
          <span class="badge badge--gris"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">public</span> ${escapeHtml(lab.pais)}</span>
          ${lab.web ? `<a href="${escapeHtml(lab.web)}" target="_blank" rel="noopener noreferrer" class="boton boton--pequeno" style="text-decoration:none"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">link</span> Ir a la web</a>` : ''}
        </div>
        <div style="font-size:13px;color:var(--gris-texto);margin-bottom:8px">${meds.length} medicamento${meds.length !== 1 ? 's' : ''}</div>
        <div class="explorador__resultados" style="max-height:calc(100vh - 320px);overflow-y:auto">
          ${medHtml}
        </div>
      </div>`;
      area.querySelector('[data-volver="labs"]').addEventListener('click', () => {
        const modulo = obtenerModulo('laboratorios');
        if (modulo && modulo.iniciar) modulo.iniciar();
      });
      area.querySelectorAll('.med-card[data-id]').forEach(el => {
        el.addEventListener('click', () => {
          establecerEstado('medicamentoSeleccionado', el.dataset.id);
          navegarA('ficha');
        });
      });
    });
  });
}

export default {
  titulo: 'Laboratorios',
  iniciar() {
    renderGrid();
  }
};

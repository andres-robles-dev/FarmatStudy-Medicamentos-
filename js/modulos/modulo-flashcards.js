// FARMASTUDY - FLASHCARDS

import { listaMedicamentos } from '../../datos/medicamentos.js';
import { escapeHtml, mezclarArray } from '../nucleo/utilidades.js';

let baraja = [];
let indiceActual = 0;
let girada = false;
let modoActual = 'principio'; // principio | laboratorio | indicacion

function getPregunta(med, modo) {
  switch (modo) {
    case 'principio': return med.nombre;
    case 'laboratorio': return `${med.nombre} — ¿De qué laboratorio es?`;
    case 'indicacion': return `${med.nombre} — ¿Cuál es su indicación?`;
    default: return med.nombre;
  }
}

function getRespuesta(med, modo) {
  switch (modo) {
    case 'principio': return med.principioActivo;
    case 'laboratorio': return med.laboratorio;
    case 'indicacion': return med.indicacion;
    default: return med.principioActivo;
  }
}

function renderFlashcard() {
  if (!baraja.length || indiceActual >= baraja.length) {
    document.getElementById('area-trabajo').innerHTML = `<div class="vacio"><div class="vacio__icono material-symbols-outlined">celebration</div><div class="vacio__texto">¡Has completado todas las tarjetas!<br><br><button class="boton boton--primario" id="flashcards-reiniciar">Reiniciar</button></div></div>`;
    document.getElementById('flashcards-reiniciar')?.addEventListener('click', () => {
      iniciarFlashcards();
    });
    return;
  }
  girada = false;
  const med = baraja[indiceActual];
  const total = baraja.length;
  const pct = ((indiceActual + 1) / total) * 100;
  const area = document.getElementById('area-trabajo');
  area.innerHTML = `<div class="flashcards">
    <div class="flashcards__controles">
      <button class="boton boton--icono" id="fc-prev" ${indiceActual === 0 ? 'disabled' : ''}>◀</button>
      <span class="flashcards__contador">${indiceActual + 1} / ${total}</span>
      <button class="boton boton--icono" id="fc-next">▶</button>
      <button class="boton" id="fc-reiniciar"><span class="material-symbols-outlined" style="font-size:16px">refresh</span> Reiniciar</button>
      <span style="font-size:12px;color:var(--gris-texto)">Modo:</span>
      <select id="fc-modo" style="font-family:var(--fuente);font-size:12px;padding:4px 8px;border:1px solid var(--gris-borde);border-radius:4px">
        <option value="principio" ${modoActual === 'principio' ? 'selected' : ''}>Principio activo</option>
        <option value="laboratorio" ${modoActual === 'laboratorio' ? 'selected' : ''}>Laboratorio</option>
        <option value="indicacion" ${modoActual === 'indicacion' ? 'selected' : ''}>Indicación</option>
      </select>
    </div>
    <div class="flashcards__progreso"><div class="flashcards__barra" style="width:${pct}%"></div></div>
    <div class="flashcard ${girada ? 'flashcard--girada' : ''}" id="flashcard">
      <div class="flashcard__interior">
        <div class="flashcard__cara flashcard__cara--delante">
          <div class="flashcard__pregunta">${escapeHtml(getPregunta(med, modoActual))}</div>
          <div class="flashcard__ayuda">Haz clic en la tarjeta para ver la respuesta</div>
          <div class="flashcard__girar"><span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle">touch_app</span> Toca para girar</div>
        </div>
        <div class="flashcard__cara flashcard__cara--atras">
          <div class="flashcard__label">Respuesta</div>
          <div class="flashcard__principio">${escapeHtml(getRespuesta(med, modoActual))}</div>
          <div class="flashcard__linea"><strong>Indicación:</strong> ${escapeHtml(med.indicacion)}</div>
          <div class="flashcard__linea"><strong>Presentación:</strong> ${escapeHtml(med.presentacion)}</div>
          <div class="flashcard__linea"><strong>ATC:</strong> ${med.atc}</div>
        </div>
      </div>
    </div>
  </div>`;

  document.getElementById('flashcard').addEventListener('click', () => {
    girada = !girada;
    document.getElementById('flashcard').classList.toggle('flashcard--girada', girada);
  });
  document.getElementById('fc-next').addEventListener('click', () => {
    if (indiceActual < baraja.length - 1) { indiceActual++; renderFlashcard(); }
  });
  document.getElementById('fc-prev').addEventListener('click', () => {
    if (indiceActual > 0) { indiceActual--; renderFlashcard(); }
  });
  document.getElementById('fc-reiniciar').addEventListener('click', () => {
    indiceActual = 0;
    baraja = mezclarArray(listaMedicamentos);
    renderFlashcard();
  });
  document.getElementById('fc-modo').addEventListener('change', (e) => {
    modoActual = e.target.value;
    renderFlashcard();
  });
}

function iniciarFlashcards() {
  baraja = mezclarArray(listaMedicamentos);
  indiceActual = 0;
  renderFlashcard();
}

export default {
  titulo: 'Flashcards',
  iniciar() {
    iniciarFlashcards();
  },
  destruir() {
    baraja = [];
    indiceActual = 0;
    girada = false;
  }
};

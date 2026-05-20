// FARMASTUDY - TEST

import { listaMedicamentos } from '../../datos/medicamentos.js';
import { escapeHtml, mezclarArray } from '../nucleo/utilidades.js';
import { obtenerEstado, establecerEstado } from '../nucleo/estado.js';

let preguntas = [];
let indice = 0;
let aciertos = 0;
let respondido = false;

function generarPreguntas(cantidad = 10) {
  const seleccionados = mezclarArray(listaMedicamentos).slice(0, cantidad);
  return seleccionados.map(med => {
    const tipo = Math.floor(Math.random() * 3);
    let pregunta, respuestaCorrecta, opciones;
    const distractores = mezclarArray(listaMedicamentos.filter(m => m.id !== med.id));

    if (tipo === 0) {
      pregunta = `¿Cuál es el principio activo de ${med.nombre}?`;
      respuestaCorrecta = med.principioActivo;
      opciones = mezclarArray([respuestaCorrecta, ...distractores.slice(0, 3).map(d => d.principioActivo)]).slice(0, 4);
    } else if (tipo === 1) {
      pregunta = `¿De qué laboratorio es ${med.nombre}?`;
      respuestaCorrecta = med.laboratorio;
      opciones = mezclarArray([respuestaCorrecta, ...distractores.slice(0, 3).map(d => d.laboratorio)]).slice(0, 4);
    } else {
      pregunta = `¿Para qué indicación se usa ${med.nombre}?`;
      respuestaCorrecta = med.indicacion;
      opciones = mezclarArray([respuestaCorrecta, ...distractores.slice(0, 3).map(d => d.indicacion)]).slice(0, 4);
    }
    if (opciones.length < 4) {
      while (opciones.length < 4) opciones.push('Ninguna de las anteriores');
      opciones = mezclarArray(opciones);
    }
    return { med, pregunta, respuestaCorrecta, opciones };
  });
}

function renderPregunta() {
  if (indice >= preguntas.length) {
    const pct = Math.round((aciertos / preguntas.length) * 100);
    const area = document.getElementById('area-trabajo');
    area.innerHTML = `<div class="test anim-aparecer">
      <div class="test__resultado">
        <div class="test__resultado-nota">${aciertos}/${preguntas.length}</div>
        <div class="test__resultado-texto">${pct >= 80 ? '<span class="material-symbols-outlined" style="font-size:20px;vertical-align:middle">celebration</span> ¡Excelente!' : pct >= 60 ? '<span class="material-symbols-outlined" style="font-size:20px;vertical-align:middle">thumb_up</span> Bien, sigue practicando' : '<span class="material-symbols-outlined" style="font-size:20px;vertical-align:middle">fitness_center</span> Sigue estudiando, lo conseguirás'}</div>
        <div style="margin-top:16px;font-size:14px;color:var(--gris-texto)">${pct}% de aciertos</div>
        <div style="margin-top:16px"><button class="boton boton--primario" id="test-reiniciar"><span class="material-symbols-outlined" style="font-size:16px">refresh</span> Nuevo test</button></div>
      </div>
    </div>`;
    document.getElementById('test-reiniciar').addEventListener('click', () => iniciarTest());
    return;
  }

  respondido = false;
  const q = preguntas[indice];
  const area = document.getElementById('area-trabajo');
  area.innerHTML = `<div class="test anim-aparecer">
    <div class="test__info">
      <span>Pregunta ${indice + 1} de ${preguntas.length}</span>
      <span>|</span>
      <span>Aciertos: ${aciertos}</span>
    </div>
    <div class="test__pregunta">${escapeHtml(q.pregunta)}</div>
    <div class="test__opciones" id="test-opciones">
      ${q.opciones.map((op, i) => `<button class="test__opcion" data-index="${i}">${escapeHtml(op)}</button>`).join('')}
    </div>
    <div id="test-feedback"></div>
    <div id="test-siguiente"></div>
  </div>`;

  area.querySelectorAll('.test__opcion').forEach(btn => {
    btn.addEventListener('click', () => {
      if (respondido) return;
      respondido = true;
      const seleccion = q.opciones[parseInt(btn.dataset.index)];
      const correcta = seleccion === q.respuestaCorrecta;
      if (correcta) aciertos++;

      area.querySelectorAll('.test__opcion').forEach(b => {
        b.classList.add('test__opcion--deshabilitada');
        const val = q.opciones[parseInt(b.dataset.index)];
        if (val === q.respuestaCorrecta) b.classList.add('test__opcion--correcta');
        if (b === btn && !correcta) b.classList.add('test__opcion--incorrecta');
      });

      const feedback = document.getElementById('test-feedback');
      feedback.innerHTML = `<div class="test__feedback ${correcta ? 'test__feedback--correcto' : 'test__feedback--incorrecto'}">
        ${correcta ? '<span class="material-symbols-outlined" style="font-size:18px;vertical-align:middle">check_circle</span> ¡Correcto!' : '<span class="material-symbols-outlined" style="font-size:18px;vertical-align:middle">cancel</span> Incorrecto'}
        ${!correcta ? `<br><span style="font-weight:400">Respuesta: ${escapeHtml(q.respuestaCorrecta)}</span>` : ''}
      </div>`;

      document.getElementById('test-siguiente').innerHTML = `<button class="boton boton--primario test__siguiente" id="test-sig-btn">${indice < preguntas.length - 1 ? 'Siguiente <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>' : 'Ver resultado'}</button>`;
      document.getElementById('test-sig-btn').addEventListener('click', () => {
        indice++;
        renderPregunta();
      });
    });
  });
}

function iniciarTest() {
  preguntas = generarPreguntas(10);
  indice = 0;
  aciertos = 0;
  renderPregunta();
}

export default {
  titulo: 'Test',
  iniciar() {
    iniciarTest();
  },
  destruir() {
    preguntas = [];
    indice = 0;
    aciertos = 0;
    respondido = false;
  }
};

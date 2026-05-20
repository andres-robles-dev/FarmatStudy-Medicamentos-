// FARMASTUDY - ARCHIVO PRINCIPAL (BOOTSTRAP)

import { registrarModulo, initEnrutador, navegarA } from './nucleo/enrutador.js';
import { listaMedicamentos } from '../datos/medicamentos.js';
import { establecerEstado } from './nucleo/estado.js';
import moduloExplorador from './modulos/modulo-explorador.js';
import moduloFicha from './modulos/modulo-ficha.js';
import moduloBuscador from './modulos/modulo-buscador.js';
import moduloFlashcards from './modulos/modulo-flashcards.js';
import moduloTest from './modulos/modulo-test.js';
import moduloLaboratorios from './modulos/modulo-laboratorios.js';
import moduloAcerca from './modulos/modulo-acerca.js';

function iniciarReloj() {
  function actualizar() {
    const ahora = new Date();
    const h = String(ahora.getHours()).padStart(2, '0');
    const m = String(ahora.getMinutes()).padStart(2, '0');
    const s = String(ahora.getSeconds()).padStart(2, '0');
    const barra = document.getElementById('estado-texto');
    if (barra) {
      const texto = barra.textContent;
      if (!texto.startsWith('Módulo:')) {
        barra.textContent = `${h}:${m}:${s}`;
      }
    }
  }
  actualizar();
  setInterval(actualizar, 1000);
}

function mostrarContador() {
  const el = document.getElementById('contador-medicamentos');
  if (el) el.textContent = `${listaMedicamentos.length} medicamentos`;
}

function configurarBusquedaRapida() {
  const input = document.getElementById('busqueda-rapida');
  if (!input) return;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      establecerEstado('busquedaRapida', input.value.trim());
      input.value = '';
      navegarA('buscador');
    }
  });
}

function init() {
  registrarModulo('explorador', moduloExplorador);
  registrarModulo('ficha', moduloFicha);
  registrarModulo('buscador', moduloBuscador);
  registrarModulo('flashcards', moduloFlashcards);
  registrarModulo('test', moduloTest);
  registrarModulo('laboratorios', moduloLaboratorios);
  registrarModulo('acerca', moduloAcerca);
  initEnrutador();
  iniciarReloj();
  mostrarContador();
  configurarBusquedaRapida();
  navegarA('explorador');
}

document.addEventListener('DOMContentLoaded', init);

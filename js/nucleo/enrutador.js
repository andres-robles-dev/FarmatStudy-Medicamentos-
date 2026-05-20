// FARMASTUDY - ENRUTADOR SPA

import { obtenerEstado, establecerEstado, suscribir } from './estado.js';

const modulos = {};

export function registrarModulo(nombre, controlador) {
  modulos[nombre] = controlador;
}

export function obtenerModulo(nombre) {
  return modulos[nombre] || null;
}

export function navegarA(nombre) {
  const estado = obtenerEstado();
  if (estado.moduloActivo === nombre) return;
  const moduloAnterior = modulos[estado.moduloActivo];
  if (moduloAnterior && moduloAnterior.destruir) moduloAnterior.destruir();
  establecerEstado('moduloActivo', nombre);
  const modulo = modulos[nombre];
  if (modulo && modulo.iniciar) modulo.iniciar();
  const titulo = document.getElementById('titulo-modulo');
  if (titulo) titulo.textContent = modulo?.titulo || 'FarmaStudy';
  const items = document.querySelectorAll('.menu__item');
  items.forEach(item => {
    item.classList.toggle('menu__item--activo', item.dataset.modulo === nombre);
  });
  const barra = document.getElementById('estado-texto');
  if (barra) barra.textContent = `Módulo: ${modulo?.titulo || nombre}`;
}

export function initEnrutador() {
  document.querySelectorAll('.menu__item[data-modulo]').forEach(btn => {
    btn.addEventListener('click', () => navegarA(btn.dataset.modulo));
  });
  document.getElementById('boton-menu')?.addEventListener('click', () => {
    const menu = document.getElementById('menu-lateral');
    const abierto = menu.classList.toggle('menu--cerrado');
    establecerEstado('menuAbierto', !abierto);
  });
}

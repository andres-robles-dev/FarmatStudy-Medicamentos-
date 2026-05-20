// FARMASTUDY - UTILIDADES GENERALES

export function formatearReceta(receta) {
  return receta ? 'Con receta' : 'Sin receta';
}

export function formatearFinanciado(financiado) {
  return financiado ? 'Financiado' : 'No financiado';
}

export function mezclarArray(arr) {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function busquedaFuzzy(texto, coleccion, campos) {
  const t = texto.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (!t) return [];
  return coleccion.filter(item => {
    return campos.some(campo => {
      const valor = String(item[campo]).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return valor.includes(t);
    });
  });
}

export function escapeHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

export function mostrarNotificacion(mensaje, duracion = 2000) {
  const existente = document.querySelector('.notificacion');
  if (existente) existente.remove();
  const el = document.createElement('div');
  el.className = 'notificacion';
  el.textContent = mensaje;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), duracion);
}

export function crearElemento(tag, clases = [], atributos = {}, contenido = '') {
  const el = document.createElement(tag);
  if (clases.length) el.className = clases.join(' ');
  Object.entries(atributos).forEach(([k, v]) => el.setAttribute(k, v));
  if (contenido) el.innerHTML = contenido;
  return el;
}

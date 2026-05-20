// FARMASTUDY - ESTADO GLOBAL DE LA APLICACIÓN

const estado = {
  moduloActivo: 'explorador',
  medicamentoSeleccionado: null,
  grupoAtcSeleccionado: null,
  subgrupoAtcSeleccionado: null,
  testEnProgreso: false,
  testPreguntaActual: 0,
  testAciertos: 0,
  testTotal: 0,
  testPreguntas: [],
  menuAbierto: true,
};

const suscriptores = {};

export function obtenerEstado() {
  return estado;
}

export function establecerEstado(clave, valor) {
  estado[clave] = valor;
  notificar(clave, valor);
}

export function suscribir(clave, fn) {
  if (!suscriptores[clave]) suscriptores[clave] = [];
  suscriptores[clave].push(fn);
  return fn;
}

export function dessuscribir(clave, fn) {
  const lista = suscriptores[clave];
  if (lista) suscriptores[clave] = lista.filter(f => f !== fn);
}

function notificar(clave, valor) {
  const lista = suscriptores[clave];
  if (lista) lista.forEach(fn => fn(valor));
}

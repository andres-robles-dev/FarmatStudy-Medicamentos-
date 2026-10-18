(function() {
  // FARMASTUDY - Estado global reactivo (pub/sub)
  // Los módulos comparten estado a través de este sistema.
  // Cuando una clave cambia, todos los módulos suscritos reciben el nuevo valor.

  var estado = {
    moduloActivo: null,
    medicamentoSeleccionado: null,
    grupoAtcSeleccionado: null,
    subgrupoAtcSeleccionado: null,
    testEnProgreso: false,
    testPreguntaActual: 0,
    testAciertos: 0,
    testTotal: 0,
    testPreguntas: [],
    menuAbierto: true,
    moduloOrigen: null,
    estadoExplorador: null
  };

  var suscriptores = {};

  window.obtenerEstado = function obtenerEstado() {
    return estado;
  };

  window.establecerEstado = function establecerEstado(clave, valor) {
    estado[clave] = valor;
    notificar(clave, valor);
  };

  window.suscribir = function suscribir(clave, fn) {
    if (!suscriptores[clave]) suscriptores[clave] = [];
    suscriptores[clave].push(fn);
    return fn;
  };

  window.desuscribir = function desuscribir(clave, fn) {
    var lista = suscriptores[clave];
    if (lista) suscriptores[clave] = lista.filter(function(f) { return f !== fn; });
  };

  function notificar(clave, valor) {
    var lista = suscriptores[clave];
    if (lista) lista.forEach(function(fn) { fn(valor); });
  }
})();

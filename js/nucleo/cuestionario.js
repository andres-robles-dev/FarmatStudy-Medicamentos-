(function() {

window.generarPreguntasEstudio = function(productos, cantidad) {
  cantidad = cantidad === undefined ? 10 : cantidad;
  var medicamentos = productos.filter(function(p) { return p.tipo === 'Medicamento'; });
  var normalizar = function(texto) {
    return texto.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  var campos = ['principioActivo', 'laboratorio', 'indicacion'];
  var preguntas = window.mezclarArray(medicamentos).map(function(med) {
    var campo = campos[Math.floor(Math.random() * campos.length)];
    var respuesta = med[campo];
    if (typeof respuesta !== 'string' || !respuesta.trim()) return null;
    var usados = new Set([normalizar(respuesta)]);
    var distractores = [];
    window.mezclarArray(medicamentos).forEach(function(otro) {
      var texto = otro[campo];
      if (typeof texto !== 'string' || !texto.trim()) return;
      var clave = normalizar(texto);
      if (usados.has(clave)) return;
      usados.add(clave);
      distractores.push(texto);
    });
    if (distractores.length < 3) return null;
    var textos = {
      principioActivo: '¿Cuál es el principio activo de ' + med.nombre + '?',
      laboratorio: '¿De qué laboratorio es ' + med.nombre + '?',
      indicacion: '¿Qué indicación recoge el catálogo para ' + med.nombre + '?',
    };
    return {
      med: med,
      pregunta: textos[campo],
      respuestaCorrecta: respuesta,
      opciones: window.mezclarArray([respuesta].concat(distractores.slice(0, 3))),
    };
  }).filter(Boolean);
  return preguntas.slice(0, Math.max(0, cantidad));
};

})();

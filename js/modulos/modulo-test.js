(function() {

var FarmaData = window.FarmaData;
var listaMedicamentos = FarmaData ? FarmaData.todos : [];
var escapeHtml = window.escapeHtml;

var preguntas = [];
var indice = 0;
var aciertos = 0;
var respondido = false;

function renderPregunta() {
  if (!preguntas.length) {
    document.getElementById('area-trabajo').innerHTML = '<div class="vacio">No hay suficientes datos distintos para generar un test.</div>';
    return;
  }
  if (indice >= preguntas.length) {
    var pct = Math.round((aciertos / preguntas.length) * 100);
    var area = document.getElementById('area-trabajo');
    area.innerHTML = '<div class="test anim-aparecer">' +
      '<div class="test__resultado">' +
        '<div class="test__resultado-nota">' + aciertos + '/' + preguntas.length + '</div>' +
        '<div class="test__resultado-texto">' + (pct >= 80 ? '<span class="material-symbols-outlined" style="font-size:20px;vertical-align:middle">celebration</span> ¡Excelente!' : pct >= 60 ? '<span class="material-symbols-outlined" style="font-size:20px;vertical-align:middle">thumb_up</span> Bien, sigue practicando' : '<span class="material-symbols-outlined" style="font-size:20px;vertical-align:middle">fitness_center</span> Sigue estudiando, lo conseguirás') + '</div>' +
        '<div style="margin-top:16px;font-size:14px;color:var(--gris-texto)">' + pct + '% de aciertos</div>' +
        '<div style="margin-top:16px"><button class="boton boton--primario" id="test-reiniciar"><span class="material-symbols-outlined" style="font-size:16px">refresh</span> Nuevo test</button></div>' +
      '</div>' +
    '</div>';
    document.getElementById('test-reiniciar').addEventListener('click', function() { iniciarTest(); });
    return;
  }

  respondido = false;
  var q = preguntas[indice];
  var area = document.getElementById('area-trabajo');
  area.innerHTML = '<div class="test anim-aparecer">' +
    '<div class="test__info">' +
      '<span>Pregunta ' + (indice + 1) + ' de ' + preguntas.length + '</span>' +
      '<span> | </span>' +
      '<span>Aciertos: ' + aciertos + '</span>' +
    '</div>' +
    '<div class="test__pregunta">' + escapeHtml(q.pregunta) + '</div>' +
    '<div class="test__opciones" id="test-opciones">' +
      q.opciones.map(function(op, i) { return '<button class="test__opcion" data-index="' + i + '">' + escapeHtml(op) + '</button>'; }).join('') +
    '</div>' +
    '<div id="test-feedback"></div>' +
    '<div id="test-siguiente"></div>' +
  '</div>';

  area.querySelectorAll('.test__opcion').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (respondido) return;
      respondido = true;
      var seleccion = q.opciones[parseInt(btn.dataset.index)];
      var correcta = seleccion === q.respuestaCorrecta;
      if (correcta) aciertos++;

      area.querySelectorAll('.test__opcion').forEach(function(b) {
        b.disabled = true;
        b.classList.add('test__opcion--deshabilitada');
        var val = q.opciones[parseInt(b.dataset.index)];
        if (val === q.respuestaCorrecta) b.classList.add('test__opcion--correcta');
        if (b === btn && !correcta) b.classList.add('test__opcion--incorrecta');
      });

      var feedback = document.getElementById('test-feedback');
      feedback.innerHTML = '<div class="test__feedback ' + (correcta ? 'test__feedback--correcto' : 'test__feedback--incorrecto') + '">' +
        (correcta ? '<span class="material-symbols-outlined" style="font-size:18px;vertical-align:middle">check_circle</span> ¡Correcto!' : '<span class="material-symbols-outlined" style="font-size:18px;vertical-align:middle">cancel</span> Incorrecto') +
        (!correcta ? '<br><span style="font-weight:400">Respuesta: ' + escapeHtml(q.respuestaCorrecta) + '</span>' : '') +
      '</div>';

      document.getElementById('test-siguiente').innerHTML = '<button class="boton boton--primario test__siguiente" id="test-sig-btn">' + (indice < preguntas.length - 1 ? 'Siguiente <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>' : 'Ver resultado') + '</button>';
      document.getElementById('test-sig-btn').addEventListener('click', function() {
        indice++;
        renderPregunta();
      });
    });
  });
}

function iniciarTest() {
  preguntas = window.generarPreguntasEstudio(listaMedicamentos, 10);
  indice = 0;
  aciertos = 0;
  renderPregunta();
}

window.ModuloTest = {
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

})();

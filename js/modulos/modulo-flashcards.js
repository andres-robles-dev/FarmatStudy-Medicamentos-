(function() {

var FarmaData = window.FarmaData;
var listaMedicamentos = FarmaData ? FarmaData.todos : [];
var escapeHtml = window.escapeHtml;
var mezclarArray = window.mezclarArray;

var baraja = [];
var indiceActual = 0;
var girada = false;
var modoActual = 'principio';
var direccion = 1;
var touchStartX = 0;
var activo = false;

function getPregunta(med, modo) {
  switch (modo) {
    case 'principio': return med.nombre;
    case 'laboratorio': return med.nombre + ' — ¿De qué laboratorio es?';
    case 'indicacion': return med.nombre + ' — ¿Cuál es su indicación?';
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

function navegar(delta) {
  if (!baraja.length) return;
  var nuevo = indiceActual + delta;
  if (nuevo < 0 || nuevo >= baraja.length) return;
  direccion = delta;
  indiceActual = nuevo;
  girada = false;
  renderFlashcard();
}

function girar() {
  girada = !girada;
  var el = document.getElementById('flashcard');
  if (el) {
    el.classList.toggle('flashcard--girada', girada);
    el.setAttribute('aria-pressed', String(girada));
  }
}

function manejarKeydown(e) {
  if (!activo) return;
  if (e.target.closest && e.target.closest('button, input, select, textarea, a')) return;
  if (e.key === 'ArrowLeft') { e.preventDefault(); navegar(-1); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); navegar(1); }
  else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); girar(); }
}

function renderFlashcard() {
  activo = true;
  if (!baraja.length || indiceActual >= baraja.length) {
    document.getElementById('area-trabajo').innerHTML = '<div class="vacio"><div class="vacio__icono material-symbols-outlined">celebration</div><div class="vacio__texto">¡Has completado todas las tarjetas!<br><br><button class="boton boton--primario" id="flashcards-reiniciar">Reiniciar</button></div></div>';
    document.getElementById('flashcards-reiniciar')?.addEventListener('click', iniciarFlashcards);
    return;
  }

  var med = baraja[indiceActual];
  var total = baraja.length;
  var pct = ((indiceActual + 1) / total) * 100;
  var dirClase = direccion > 0 ? 'flashcard--desde-derecha' : 'flashcard--desde-izquierda';

  var area = document.getElementById('area-trabajo');
  area.innerHTML = '<div class="flashcards">' +
    '<div class="flashcards__top">' +
      '<span class="flashcards__contador">' + (indiceActual + 1) + ' / ' + total + '</span>' +
      '<div class="flashcards__top-derecha">' +
        '<select class="flashcards__modo" id="fc-modo" aria-label="Modo de estudio">' +
          '<option value="principio"' + (modoActual === 'principio' ? ' selected' : '') + '>Principio activo</option>' +
          '<option value="laboratorio"' + (modoActual === 'laboratorio' ? ' selected' : '') + '>Laboratorio</option>' +
          '<option value="indicacion"' + (modoActual === 'indicacion' ? ' selected' : '') + '>Indicación</option>' +
        '</select>' +
        '<button class="flashcards__reiniciar" id="fc-reiniciar" title="Reiniciar" aria-label="Reiniciar tarjetas">' +
          '<span class="material-symbols-outlined" style="font-size:18px">refresh</span>' +
        '</button>' +
      '</div>' +
    '</div>' +

    '<div class="flashcards__zona" id="fc-zona">' +
      '<div class="flashcards__anterior" id="fc-anterior" title="Anterior" role="button" tabindex="0" aria-label="Tarjeta anterior">' +
        '<span class="flashcards__overlay">' +
          '<span class="material-symbols-outlined">chevron_left</span>' +
        '</span>' +
      '</div>' +

      '<div class="flashcard-wrapper" id="fc-wrapper">' +
        '<div class="flashcard ' + dirClase + '" id="flashcard" role="button" tabindex="0" aria-label="Girar tarjeta" aria-pressed="false">' +
          '<div class="flashcard__interior">' +
            '<div class="flashcard__cara flashcard__cara--delante">' +
              '<div class="flashcard__pregunta">' + escapeHtml(getPregunta(med, modoActual)) + '</div>' +
              '<div class="flashcard__ayuda">Toca la tarjeta para ver la respuesta</div>' +
            '</div>' +
            '<div class="flashcard__cara flashcard__cara--atras">' +
              '<div class="flashcard__label">Respuesta</div>' +
              '<div class="flashcard__principio">' + escapeHtml(getRespuesta(med, modoActual)) + '</div>' +
              '<div class="flashcard__linea"><strong>Indicación:</strong> ' + escapeHtml(med.indicacion) + '</div>' +
              '<div class="flashcard__linea"><strong>Presentación:</strong> ' + escapeHtml(med.presentacion) + '</div>' +
              '<div class="flashcard__linea"><strong>ATC:</strong> ' + med.atc + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="flashcards__siguiente" id="fc-siguiente" title="Siguiente" role="button" tabindex="0" aria-label="Tarjeta siguiente">' +
        '<span class="flashcards__overlay">' +
          '<span class="material-symbols-outlined">chevron_right</span>' +
        '</span>' +
      '</div>' +
    '</div>' +

    '<div class="flashcards__progreso">' +
      '<div class="flashcards__barra" style="width:' + pct + '%"></div>' +
    '</div>' +
  '</div>';

  document.getElementById('flashcard').addEventListener('click', girar);
  document.getElementById('fc-anterior').addEventListener('click', function() { navegar(-1); });
  document.getElementById('fc-siguiente').addEventListener('click', function() { navegar(1); });
  ['fc-anterior', 'fc-siguiente'].forEach(function(id) {
    document.getElementById(id).addEventListener('keydown', function(e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      e.stopPropagation();
      navegar(id === 'fc-anterior' ? -1 : 1);
    });
  });

  var zona = document.getElementById('fc-zona');

  zona.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  zona.addEventListener('touchend', function(e) {
    var deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 30) {
      navegar(deltaX > 0 ? -1 : 1);
    }
  }, { passive: true });

  document.getElementById('fc-modo').addEventListener('change', function(e) {
    modoActual = e.target.value;
    direccion = 1;
    girada = false;
    renderFlashcard();
  });

  document.getElementById('fc-reiniciar').addEventListener('click', iniciarFlashcards);
}

function iniciarFlashcards() {
  baraja = mezclarArray(listaMedicamentos);
  indiceActual = 0;
  direccion = 1;
  girada = false;
  renderFlashcard();
}

window.ModuloFlashcards = {
  titulo: 'Flashcards',
  iniciar() {
    document.addEventListener('keydown', manejarKeydown);
    iniciarFlashcards();
  },
  destruir() {
    activo = false;
    document.removeEventListener('keydown', manejarKeydown);
    baraja = [];
    indiceActual = 0;
    girada = false;
  }
};

})();

(function() {

var arbolAtc = window.arbolAtc;
var obtenerMedicamentosPorGrupo = window.obtenerMedicamentosPorGrupo;
var obtenerMedicamentosPorSubgrupo = window.obtenerMedicamentosPorSubgrupo;
var escapeHtml = window.escapeHtml;
var navegarA = window.navegarA;
var establecerEstado = window.establecerEstado;
var obtenerEstado = window.obtenerEstado;

var grupoExpandido = null;
var subgrupoSeleccionado = null;

function renderArbol() {
  var contenedor = document.getElementById('explorador-arbol');
  var html = '';
  arbolAtc.forEach(function(grupo) {
    var cant = obtenerMedicamentosPorGrupo(grupo.codigo).length;
    var expandido = grupoExpandido === grupo.codigo;
    var activo = subgrupoSeleccionado === grupo.codigo;
    var hijosHtml = grupo.hijos.map(function(h) {
      var cantH = obtenerMedicamentosPorSubgrupo(h.codigo).length;
      var activoH = subgrupoSeleccionado === h.codigo;
      return '<div class="nodo-atc__cabecera' + (activoH ? ' nodo-atc__cabecera--activo' : '') + '" role="button" tabindex="0" data-accion="subgrupo" data-codigo="' + h.codigo + '" style="padding-left:24px;">' +
        '<span class="nodo-atc__codigo">' + h.codigo + '</span>' +
        '<span class="nodo-atc__nombre">' + escapeHtml(h.nombre) + '</span>' +
        '<span class="nodo-atc__contador">' + cantH + '</span>' +
      '</div>';
    }).join('');

    html += '<div class="nodo-atc' + (expandido ? ' nodo-atc--abierto' : '') + '">' +
      '<div class="nodo-atc__cabecera' + (activo ? ' nodo-atc__cabecera--activo' : '') + '" role="button" tabindex="0" aria-expanded="' + expandido + '" data-accion="grupo" data-codigo="' + grupo.codigo + '">' +
        '<span class="nodo-atc__toggle">' + (expandido ? '\u25bc' : '\u25b6') + '</span>' +
        '<span class="nodo-atc__codigo">' + grupo.codigo + '</span>' +
        '<span class="nodo-atc__nombre">' + grupo.icono + ' ' + escapeHtml(grupo.nombre) + '</span>' +
        '<span class="nodo-atc__contador">' + cant + '</span>' +
      '</div>' +
      '<div class="nodo-atc__hijos">' + hijosHtml + '</div>' +
    '</div>';
  });
  contenedor.innerHTML = html;
}

function renderLista(meds) {
  var contenedor = document.getElementById('explorador-resultados');
  if (!meds.length) {
    contenedor.innerHTML = '<div class="vacio"><div class="vacio__icono material-symbols-outlined">inbox</div><div class="vacio__texto">Selecciona un grupo ATC para ver sus medicamentos</div></div>';
    return;
  }
  var html = meds.map(function(m) {
    var esPF = m.tipo === 'Parafarmacia';
    return '<div class="med-card" role="button" tabindex="0" aria-label="Abrir ficha de ' + escapeHtml(m.nombre) + '" data-id="' + m.id + '">' +
      '<div class="med-card__info">' +
        '<div class="med-card__nombre">' + escapeHtml(m.nombre) + '</div>' +
        '<div class="med-card__detalle">' +
          '<span>' + escapeHtml(m.principioActivo) + '</span>' +
          '<span> \u2022 </span>' +
          '<span>' + escapeHtml(m.laboratorio) + '</span>' +
          '<span> \u2022 </span>' +
          '<span>' + escapeHtml(m.presentacion) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="med-card__badges">' +
        (esPF
          ? '<span class="badge badge--morado">Parafarmacia</span>'
          : '<span class="badge badge--' + (m.receta ? 'rojo' : 'verde') + '">' + (m.receta ? 'Receta' : 'OTC') + '</span>' +
            '<span class="badge badge--' + (m.financiado ? 'azul' : 'gris') + '">' + (m.financiado ? 'Financiado' : 'No financ.') + '</span>') +
      '</div>' +
    '</div>';
  }).join('');
  contenedor.innerHTML = '<div class="anim-aparecer">' + html + '</div>';
  contenedor.querySelectorAll('.med-card').forEach(function(el) {
    el.addEventListener('keydown', function(e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      el.click();
    });
    el.addEventListener('click', function() {
      establecerEstado('medicamentoSeleccionado', el.dataset.id);
      navegarA('ficha');
    });
  });
}

function manejarClickArbol(e) {
  var cabecera = e.target.closest('.nodo-atc__cabecera');
  if (!cabecera) return;

  var accion = cabecera.dataset.accion;
  var codigo = cabecera.dataset.codigo;
  var info = document.getElementById('explorador-info');

  if (accion === 'grupo') {
    if (grupoExpandido === codigo) {
      grupoExpandido = null;
      subgrupoSeleccionado = null;
    } else {
      grupoExpandido = codigo;
      subgrupoSeleccionado = codigo;
    }
    renderArbol();
    if (subgrupoSeleccionado) {
      var meds = obtenerMedicamentosPorGrupo(codigo);
      info.textContent = 'Grupo ' + codigo + ' \u2014 ' + meds.length + ' medicamentos';
      renderLista(meds);
    } else {
      info.textContent = 'Selecciona un grupo o subgrupo ATC';
      renderLista([]);
    }
  } else if (accion === 'subgrupo') {
    subgrupoSeleccionado = codigo;
    grupoExpandido = arbolAtc.find(function(grupo) {
      return grupo.hijos.some(function(hijo) { return hijo.codigo === codigo; });
    }).codigo;
    var meds = obtenerMedicamentosPorSubgrupo(codigo);
    info.textContent = 'Subgrupo ' + codigo + ' \u2014 ' + meds.length + ' medicamentos';
    renderLista(meds);
    renderArbol();
  }
}

window.ModuloExplorador = {
  titulo: 'Explorador ATC',
  iniciar() {
    var estado = obtenerEstado();
    var guardado = estado.estadoExplorador;
    if (guardado) {
      grupoExpandido = guardado.grupoExpandido;
      subgrupoSeleccionado = guardado.subgrupoSeleccionado;
    } else {
      grupoExpandido = null;
      subgrupoSeleccionado = null;
    }
    var area = document.getElementById('area-trabajo');
    area.innerHTML = '<div class="explorador">' +
      '<div class="explorador__panel">' +
        '<div id="explorador-arbol" class="explorador__arbol"></div>' +
        '<div class="explorador__lista">' +
          '<div id="explorador-info" class="explorador__info">Selecciona un grupo o subgrupo ATC</div>' +
          '<div id="explorador-resultados" class="explorador__resultados">' +
            '<div class="vacio"><div class="vacio__icono material-symbols-outlined">inbox</div><div class="vacio__texto">Selecciona un grupo ATC para ver sus medicamentos</div></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
    renderArbol();
    if (subgrupoSeleccionado) {
      var esGrupo = arbolAtc.some(function(grupo) { return grupo.codigo === subgrupoSeleccionado; });
      var meds = esGrupo ? obtenerMedicamentosPorGrupo(subgrupoSeleccionado) : obtenerMedicamentosPorSubgrupo(subgrupoSeleccionado);
      var info = document.getElementById('explorador-info');
      if (info) info.textContent = (esGrupo ? 'Grupo ' : 'Subgrupo ') + subgrupoSeleccionado + ' \u2014 ' + meds.length + ' productos';
      renderLista(meds);
    }
    var arbol = document.getElementById('explorador-arbol');
    arbol.addEventListener('click', manejarClickArbol);
    arbol.addEventListener('keydown', function(e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var cabecera = e.target.closest('.nodo-atc__cabecera');
      if (!cabecera) return;
      e.preventDefault();
      cabecera.click();
    });
  },
  destruir() {
    establecerEstado('estadoExplorador', {
      grupoExpandido: grupoExpandido,
      subgrupoSeleccionado: subgrupoSeleccionado,
    });
  }
};

})();

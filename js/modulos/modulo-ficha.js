(function() {

var obtenerEstado = window.obtenerEstado;
var suscribir = window.suscribir;
var desuscribir = window.desuscribir;
var obtenerMedicamentoPorId = window.obtenerMedicamentoPorId;
var obtenerMedicamentosPorPrincipio = window.obtenerMedicamentosPorPrincipio;
var arbolAtc = window.arbolAtc;
var escapeHtml = window.escapeHtml;
var navegarA = window.navegarA;

var suscriptor = null;

var NOMBRES_MODULOS = {
  consulta: 'Consulta R\u00e1pida',
  explorador: 'Explorador ATC',
  laboratorios: 'Laboratorios',
};

function esParafarmacia(med) {
  return med.tipo === 'Parafarmacia';
}

function renderFicha(id) {
  var med = obtenerMedicamentoPorId(id);
  var area = document.getElementById('area-trabajo');
  if (!med) {
    area.innerHTML = '<div class="vacio"><div class="vacio__icono material-symbols-outlined">description</div><div class="vacio__texto">Selecciona un medicamento</div></div>';
    return;
  }
  var grupo = arbolAtc.find(function(g) { return g.codigo === med.grupoAtc; });
  var subgrupo = grupo && grupo.hijos.find(function(h) { return h.codigo === med.subgrupoAtc; });
  var relacionados = obtenerMedicamentosPorPrincipio(med.principioActivo).filter(function(m) { return m.id !== med.id; });

  var estado = obtenerEstado();
  var origen = estado.moduloOrigen || 'explorador';
  var nombreOrigen = NOMBRES_MODULOS[origen] || 'Atr\u00e1s';

  area.innerHTML = '<div class="ficha anim-aparecer">' +
    '<div class="migas" style="margin-bottom:12px">' +
      '<span class="migas__item" data-volver="' + origen + '">' +
        '<span class="material-symbols-outlined" style="font-size:14px;vertical-align:middle;margin-right:2px">arrow_back</span>' +
        nombreOrigen +
      '</span>' +
      '<span class="migas__sep"> › </span>' +
      '<span class="migas__item--actual">' + escapeHtml(med.nombre) + '</span>' +
    '</div>' +
    '<div class="ficha__cabecera">' +
      '<div class="ficha__icono material-symbols-outlined">' + (esParafarmacia(med) ? 'spa' : 'pill') + '</div>' +
      '<div class="ficha__titulos">' +
        '<div class="ficha__nombre">' + escapeHtml(med.nombre) + '</div>' +
        '<div class="ficha__principio">' + escapeHtml(med.principioActivo) + '</div>' +
        '<div class="ficha__badges">' +
          (esParafarmacia(med)
            ? '<span class="badge badge--morado">Producto de Parafarmacia</span>'
            : '<span class="badge badge--' + (med.receta ? 'rojo' : 'verde') + '">' + (med.receta ? 'Con receta' : 'Sin receta') + '</span>' +
              '<span class="badge badge--' + (med.financiado ? 'azul' : 'gris') + '">' + (med.financiado ? 'Financiado' : 'No financiado') + '</span>') +
          '<span class="badge badge--gris">' + (esParafarmacia(med) ? 'Parafarmacia' : escapeHtml(med.tipo)) + '</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="ficha__grid">' +
      '<div class="ficha__campo">' +
        '<div class="ficha__campo-etiqueta">C\u00f3digo ATC</div>' +
        '<div class="ficha__campo-valor">' + med.atc + '</div>' +
      '</div>' +
      '<div class="ficha__campo">' +
        '<div class="ficha__campo-etiqueta">Laboratorio</div>' +
        '<div class="ficha__campo-valor">' + escapeHtml(med.laboratorio) + '</div>' +
      '</div>' +
      '<div class="ficha__campo ficha__campo--ancho">' +
        '<div class="ficha__campo-etiqueta">Indicaci\u00f3n</div>' +
        '<div class="ficha__campo-valor">' + escapeHtml(med.indicacion) + '</div>' +
      '</div>' +
      '<div class="ficha__campo">' +
        '<div class="ficha__campo-etiqueta">Dosis</div>' +
        '<div class="ficha__campo-valor">' + escapeHtml(med.dosis) + '</div>' +
      '</div>' +
      '<div class="ficha__campo">' +
        '<div class="ficha__campo-etiqueta">Presentaci\u00f3n</div>' +
        '<div class="ficha__campo-valor">' + escapeHtml(med.presentacion) + '</div>' +
      '</div>' +
    '</div>' +
    (med.contraindicaciones ? '<div class="ficha__campo ficha__campo--ancho" style="margin-top:8px">' +
      '<div class="ficha__campo-etiqueta">Contraindicaciones</div>' +
      '<div class="ficha__campo-valor">' + escapeHtml(med.contraindicaciones) + '</div>' +
    '</div>' : '') +
    (med.efectosAdversos ? '<div class="ficha__campo ficha__campo--ancho" style="margin-top:8px">' +
      '<div class="ficha__campo-etiqueta">Efectos adversos</div>' +
      '<div class="ficha__campo-valor">' + escapeHtml(med.efectosAdversos) + '</div>' +
    '</div>' : '') +
    (esParafarmacia(med)
      ? '<div class="ficha__atc-trace">' +
        '<div class="ficha__campo-etiqueta" style="margin-bottom:6px">Clasificaci\u00f3n</div>' +
        '<div class="ficha__atc-nivel"><span class="badge badge--morado">' + med.grupoAtc + '</span> <strong>' + escapeHtml(grupo ? grupo.nombre : 'Parafarmacia') + '</strong></div>' +
        (subgrupo ? '<div class="ficha__atc-nivel"><span class="badge badge--morado">' + med.subgrupoAtc + '</span> <strong>' + escapeHtml(subgrupo.nombre) + '</strong></div>' : '') +
      '</div>'
      : '<div class="ficha__atc-trace">' +
        '<div class="ficha__campo-etiqueta" style="margin-bottom:6px">Traza ATC</div>' +
        '<div class="ficha__atc-nivel"><span class="badge badge--verde">' + med.grupoAtc + '</span> <strong>' + escapeHtml(grupo ? grupo.nombre : '') + '</strong></div>' +
        '<div class="ficha__atc-nivel"><span class="badge badge--azul">' + med.subgrupoAtc + '</span> <strong>' + escapeHtml(subgrupo ? subgrupo.nombre : '') + '</strong></div>' +
        '<div class="ficha__atc-nivel"><span class="badge badge--gris">' + med.atc + '</span> <strong>C\u00f3digo completo ATC</strong></div>' +
      '</div>') +
    (relacionados.length ? '<div style="margin-top:8px">' +
      '<div class="ficha__campo-etiqueta" style="margin-bottom:6px">Otros medicamentos con el mismo principio activo</div>' +
      '<div class="ficha__marcas">' + relacionados.map(function(r) { return '<span class="ficha__marca" data-id="' + r.id + '">' + escapeHtml(r.nombre) + '</span>'; }).join('') + '</div>' +
    '</div>' : '') +
  '</div>';

  area.querySelectorAll('[data-volver]').forEach(function(el) {
    el.addEventListener('click', function() {
      navegarA(el.dataset.volver);
    });
  });
  area.querySelectorAll('.ficha__marca[data-id]').forEach(function(el) {
    el.addEventListener('click', function() {
      renderFicha(el.dataset.id);
    });
  });
}

window.ModuloFicha = {
  titulo: 'Ficha detalle',
  iniciar() {
    var estado = obtenerEstado();
    if (estado.medicamentoSeleccionado) {
      renderFicha(estado.medicamentoSeleccionado);
    } else {
      document.getElementById('area-trabajo').innerHTML = '<div class="vacio"><div class="vacio__icono material-symbols-outlined">description</div><div class="vacio__texto">Selecciona un medicamento</div></div>';
    }
    if (!suscriptor) {
      suscriptor = suscribir('medicamentoSeleccionado', function(id) {
        if (id) renderFicha(id);
      });
    }
  },
  destruir() {
    if (suscriptor) {
      desuscribir('medicamentoSeleccionado', suscriptor);
      suscriptor = null;
    }
  }
};

})();

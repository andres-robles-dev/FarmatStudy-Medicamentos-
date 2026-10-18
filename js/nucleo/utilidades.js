(function() {
  // FARMASTUDY - Utilidades generales
  // Funciones auxiliares compartidas entre todos los módulos

  // ─── Formateo ───
  window.formatearReceta = function formatearReceta(receta) {
    return receta ? 'Con receta' : 'Sin receta';
  };

  window.formatearFinanciado = function formatearFinanciado(financiado) {
    return financiado ? 'Financiado' : 'No financiado';
  };

  // ─── Arrays ───
  window.mezclarArray = function mezclarArray(arr) {
    var copia = arr.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copia[i];
      copia[i] = copia[j];
      copia[j] = temp;
    }
    return copia;
  };

  // ─── Búsqueda y texto ───
  window.busquedaFuzzy = function busquedaFuzzy(texto, coleccion, campos) {
    var t = texto.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (!t) return [];
    return coleccion.filter(function(item) {
      return campos.some(function(campo) {
        var valor = String(item[campo]).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return valor.indexOf(t) !== -1;
      });
    });
  };

  window.escapeHtml = function escapeHtml(texto) {
    return String(texto == null ? '' : texto).replace(/[&<>"']/g, function(caracter) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[caracter];
    });
  };

  // ─── DOM ───
  window.mostrarNotificacion = function mostrarNotificacion(mensaje, duracion) {
    if (duracion === undefined) duracion = 2000;
    var existente = document.querySelector('.notificacion');
    if (existente) existente.remove();
    var el = document.createElement('div');
    el.className = 'notificacion';
    el.textContent = mensaje;
    document.body.appendChild(el);
    setTimeout(function() { el.remove(); }, duracion);
  };

  window.crearElemento = function crearElemento(tag, clases, atributos, contenido) {
    if (clases === undefined) clases = [];
    if (atributos === undefined) atributos = {};
    if (contenido === undefined) contenido = '';
    var el = document.createElement(tag);
    if (clases.length) el.className = clases.join(' ');
    Object.keys(atributos).forEach(function(k) { el.setAttribute(k, atributos[k]); });
    if (contenido) el.innerHTML = contenido;
    return el;
  };

  // ─── Búsqueda en datos (delega en FarmaData) ───

  window.obtenerMedicamentoPorId = function(id) {
    return (window.FarmaData && window.FarmaData.buscarPorId(id)) || null;
  };

  window.obtenerMedicamentosPorGrupo = function(grupo) {
    return window.FarmaData ? window.FarmaData.buscarPorGrupo(grupo) : [];
  };

  window.obtenerMedicamentosPorSubgrupo = function(subgrupo) {
    return window.FarmaData ? window.FarmaData.buscarPorSubgrupo(subgrupo) : [];
  };

  window.obtenerMedicamentosPorPrincipio = function(principio) {
    return window.FarmaData ? window.FarmaData.buscarPorPrincipio(principio) : [];
  };

  window.obtenerMedicamentosPorLaboratorio = function(lab) {
    return window.FarmaData ? window.FarmaData.buscarPorLaboratorio(lab) : [];
  };

  window.buscarMedicamentos = function(texto) {
    return window.FarmaData ? window.FarmaData.buscarPorTexto(texto) : [];
  };
})();

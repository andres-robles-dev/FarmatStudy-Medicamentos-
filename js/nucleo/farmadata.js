(function() {

  var fuentes = [];

  function normalizar(texto) {
    return String(texto || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function normalizarLaboratorio(nombre) {
    var alias = { expanscience: 'Laboratoires Expanscience', thea: 'Laboratoires Théa' };
    return alias[normalizar(nombre)] || nombre;
  }

  function validarProducto(p) {
    var campos = ['id', 'nombre', 'principioActivo', 'laboratorio', 'atc',
      'indicacion', 'dosis', 'presentacion', 'tipo',
      'contraindicaciones', 'efectosAdversos'];
    var faltan = campos.filter(function(c) { return !p[c]; });
    if (faltan.length) {
      console.warn('[FarmaData] Producto ' + p.id + ' — faltan: ' + faltan.join(', '));
    }
  }

  window.FarmaData = {
    registrarFuente: function(nombre, datos) {
      datos.forEach(validarProducto);
      fuentes.push({ nombre: nombre, datos: datos.map(function(p) {
        return Object.assign({}, p, { laboratorio: normalizarLaboratorio(p.laboratorio) });
      }) });
    },

    get todos() {
      var resultado = [];
      fuentes.forEach(function(f) {
        f.datos.forEach(function(d) { resultado.push(d); });
      });
      return resultado;
    },

    buscarPorId: function(id) {
      var encontrado = null;
      for (var i = 0; i < fuentes.length; i++) {
        for (var j = 0; j < fuentes[i].datos.length; j++) {
          if (fuentes[i].datos[j].id === id) {
            encontrado = fuentes[i].datos[j];
            break;
          }
        }
        if (encontrado) break;
      }
      return encontrado;
    },

    buscarPorGrupo: function(codigo) {
      if (!codigo || codigo === 'todos') return this.todos;
      var resultado = [];
      fuentes.forEach(function(f) {
        f.datos.forEach(function(d) {
          if (d.grupoAtc === codigo) resultado.push(d);
        });
      });
      return resultado;
    },

    buscarPorSubgrupo: function(codigo) {
      if (!codigo) return [];
      var resultado = [];
      fuentes.forEach(function(f) {
        f.datos.forEach(function(d) {
          if (d.subgrupoAtc === codigo) resultado.push(d);
        });
      });
      return resultado;
    },

    buscarPorPrincipio: function(principio) {
      if (!principio) return [];
      var t = normalizar(principio);
      var resultado = [];
      fuentes.forEach(function(f) {
        f.datos.forEach(function(d) {
          if (d.principioActivo && normalizar(d.principioActivo).indexOf(t) !== -1) {
            resultado.push(d);
          }
        });
      });
      return resultado;
    },

    buscarPorLaboratorio: function(lab) {
      if (!lab) return [];
      var t = normalizar(normalizarLaboratorio(lab));
      var resultado = [];
      fuentes.forEach(function(f) {
        f.datos.forEach(function(d) {
          if (d.laboratorio && normalizar(d.laboratorio).indexOf(t) !== -1) {
            resultado.push(d);
          }
        });
      });
      return resultado;
    },

    buscarPorTexto: function(texto) {
      if (!texto) return [];
      var t = normalizar(texto);
      var resultado = [];
      fuentes.forEach(function(f) {
        f.datos.forEach(function(d) {
          if ([d.nombre, d.principioActivo, d.laboratorio, d.indicacion, d.id].some(function(valor) {
            return normalizar(valor).indexOf(t) !== -1;
          })) {
            resultado.push(d);
          }
        });
      });
      return resultado;
    }
  };

})();

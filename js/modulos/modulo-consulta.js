(function() {

var FarmaData = window.FarmaData;
var listaMedicamentos = FarmaData ? FarmaData.todos : [];
var escapeHtml = window.escapeHtml;
var navegarA = window.navegarA;
var establecerEstado = window.establecerEstado;
var orquestador = window.IaOrquestador;

var MAX_RESULTADOS = 6;

var STOPWORDS = new Set([
  'a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'durante',
  'e', 'el', 'en', 'entre', 'hacia', 'hasta', 'mediante', 'para', 'por',
  'que', 'segun', 'sin', 'so', 'sobre', 'tras', 'y', 'o', 'u', 'la', 'las',
  'los', 'lo', 'le', 'les', 'se', 'me', 'te', 'tu', 'un', 'una', 'unos',
  'unas', 'al', 'del', 'este', 'esta', 'estos', 'estas', 'ese', 'esa',
  'esos', 'esas', 'aquel', 'aquella', 'aquellos', 'aquellas', 'su', 'sus',
  'mi', 'mis', 'tu', 'tus', 'muy', 'mucho', 'poco', 'mas', 'menos',
  'tambien', 'cuando', 'como', 'cual', 'quien', 'donde', 'cuyo', 'cada',
  'solo', 'aun', 'aunque', 'pero', 'sino', 'pues', 'tanto', 'tan',
  'asi', 'aqui', 'alli', 'ahora', 'despues', 'siempre', 'nunca', 'jamas',
  'algo', 'nada', 'todo', 'otro', 'mismo', 'propio', 'tan', 'tal',
  'dice', 'dijo', 'tiene', 'tenia', 'tener', 'hace', 'hacia', 'hacer',
  'puede', 'podria', 'debe', 'deberia', 'ser', 'era', 'fue', 'sido',
  'lleva', 'llevar', 'estar', 'esta', 'siente', 'nota', 'notar',
  'cree', 'creer', 'parece', 'parecer', 'tipo', 'forma',
  'ayer', 'hoy', 'manana', 'semana', 'tiempo', 'rato',
  'puedo', 'recetar', 'recomendar', 'recomiendas', 'tomar', 'usar', 'necesito',
  'tengo', 'quiero', 'aliviar', 'medicamento', 'medicamentos', 'producto', 'productos',
]);

var SINONIMOS = {
  cefalea: ['migraña', 'craneal'],
  cabeza: ['cefalea', 'migraña', 'craneal'],
  estomago: ['gastrico', 'gastroesofagico', 'digestivo', 'abdominal', 'epigastrio'],
  vientre: ['abdominal', 'intestinal', 'colon'],
  tripa: ['intestinal', 'digestivo', 'abdominal'],
  vomito: ['emesis', 'nausea', 'arcada', 'nauseas'],
  nausea: ['nauseas', 'emesis', 'vomito'],
  mareo: ['vertigo', 'inestabilidad', 'vahido'],
  tos: ['expectoracion', 'bronquial'],
  garganta: ['faringeo', 'faringitis', 'amigdalitis', 'faringea'],
  nariz: ['nasal', 'rinitis', 'rinitico', 'rinosinusitis'],
  pecho: ['toracico', 'bronquial', 'bronquitis', 'pulmonar'],
  respiracion: ['disnea', 'broncoespasmo', 'asma', 'respiratorio'],
  moco: ['expectoracion', 'flema', 'secrecion'],
  resfriado: ['catarro', 'rinitis', 'gripe', 'rinofaringitis'],
  catarro: ['resfriado', 'rinitis', 'gripe'],
  fiebre: ['febril', 'hipertermia'],
  calentura: ['fiebre', 'febril'],
  raspadura: ['herida', 'abrasion', 'contusion', 'escoriacion'],
  sangrado: ['hemorragia', 'sangrante'],
  rodilla: ['articular', 'articulacion'],
  picor: ['prurito', 'comezon'],
  piel: ['cutanea', 'topico', 'dermica'],
  grano: ['acne', 'erupcion', 'lesion'],
  herida: ['ulcera', 'llaga'],
  hinchazon: ['edema', 'inflamacion', 'tumefaccion'],
  inflamado: ['inflamacion', 'antiinflamatorio'],
  quemazon: ['ardor', 'pirosis'],
  acidez: ['ardor', 'pirosis', 'agruras'],
  gases: ['flatulencia', 'meteorismo', 'distension'],
  pesadez: ['digestion', 'dispepsia', 'digestiva'],
  estreñido: ['estreñimiento', 'constipacion'],
  sueño: ['insomnio', 'somnolencia', 'hipersomnia'],
  cansancio: ['fatiga', 'astenia', 'debilidad'],
  golpe: ['contusion', 'hematoma', 'traumatismo'],
  moreton: ['hematoma'],
  ojo: ['ocular', 'oftalmico', 'conjuntivitis'],
  oido: ['otico', 'otitis'],
  boca: ['oral', 'bucal', 'estomatitis'],
  ansiedad: ['nerviosismo', 'estres', 'ansiolitico'],
  nervios: ['ansiedad', 'nerviosismo'],
  tristeza: ['depresion', 'animo'],
  caida: ['alopecia', 'calvicie'],
  grasa: ['colesterol', 'lipidos', 'trigliceridos', 'lipidico'],
  azucar: ['glucosa', 'diabetes', 'hipoglucemiante', 'glucemia'],
  infeccion: ['infeccioso', 'bacteriana', 'antibiotico'],
  alergia: ['alergico', 'hipersensibilidad'],
  corazon: ['cardiaco', 'cardiovascular', 'cardiopatia'],
  presion: ['hipertension', 'hipotension', 'tension'],
  regla: ['menstrual', 'menstruacion', 'dismenorrea'],
  memoria: ['cognitivo', 'alzheimer', 'demencia'],
  orina: ['urinario', 'orinar', 'diuresis', 'miccion'],
  pastilla: ['comprimido', 'capsula', 'tableta', 'gragea'],
  jarabe: ['suspension', 'solucion', 'elixir'],
  inyeccion: ['parenteral', 'subcutanea', 'intramuscular', 'intravenosa'],
  crema: ['unguento', 'pomada', 'topico', 'emulsion'],
  pomada: ['unguento', 'crema', 'topico'],
  colirio: ['gotas', 'ocular', 'oftalmico'],
  spray: ['aerosol', 'inhalador', 'nebulizador'],
  antibiotico: ['antibiotico', 'bactericida', 'bacteriostatico'],
  antiinflamatorio: ['aine', 'antiinflamatorio', 'nsaids'],
  analgesico: ['analgesico', 'calmante', 'antidoloroso'],
};

var ETIQUETAS = {
  parafarmacia: { icono: 'spa', badge: 'badge--morado', texto: 'PARAFARMACIA', titulo: 'Parafarmacia' },
  otc: { icono: 'medication', badge: 'badge--ambar', texto: 'SIN RECETA', titulo: 'Sin receta (OTC)' },
  receta: { icono: 'prescriptions', badge: 'badge--rojo', texto: 'CON RECETA', titulo: 'Con receta médica' },
};

var historialIA = [];
var ID_LOADING = null;
var procesando = false;
var controlador = null;
var historialVista = [];
var activo = false;
var secuencia = 0;
var privacidad = window.PrivacidadConsulta;

function normalizar(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function stemEs(p) {
  if (p.length < 5) return p;
  var r = p;
  if (r.slice(-5) === 'mente') r = r.slice(0, -5);
  var sufijos = [
    'ciones', 'siones', 'mientos', 'dades', 'uras',
    'atorio', 'atoria', 'atorios', 'atorias',
    'torio', 'toria', 'torios', 'torias',
    'acion', 'icion',
    'cion', 'sion', 'ion', 'miento', 'dad', 'ura', 'tad', 'ismo', 'ista', 'itis',
    'nte',
  ];
  for (var i = 0; i < sufijos.length; i++) {
    var s = sufijos[i];
    if (r.length > s.length + 2 && r.slice(-s.length) === s) {
      r = r.slice(0, -s.length);
      break;
    }
  }
  if (r.slice(-3) === 'oes') r = r.slice(0, -2);
  else if (r.slice(-2) === 'es') r = r.slice(0, -2);
  else if (r.slice(-1) === 's' && r.length > 4) r = r.slice(0, -1);
  var adj = ['ado', 'ada', 'ido', 'ida', 'al', 'ico', 'ica', 'oso', 'osa', 'ivo', 'iva', 'il', 'ble'];
  for (var j = 0; j < adj.length; j++) {
    var a = adj[j];
    if (r.length > a.length + 2 && r.slice(-a.length) === a) {
      r = r.slice(0, -a.length);
      break;
    }
  }
  if (r.length > 4) {
    if (r.slice(-1) === 'o' || r.slice(-1) === 'a') r = r.slice(0, -1);
  }
  return r;
}

function clasificar(med) {
  if (med.tipo === 'Parafarmacia') return 'parafarmacia';
  return med.receta ? 'receta' : 'otc';
}

function tokenizar(texto) {
  return normalizar(texto)
    .replace(/\bdolor(?:es)?\s+(?:de\s+)?cabeza\b/g, 'cefalea')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(function(p) { return p.length > 1 && !STOPWORDS.has(p); });
}

function expandirTokens(tokens) {
  var expandidos = new Set(tokens);
  tokens.forEach(function(t) {
    if (SINONIMOS[t]) {
      SINONIMOS[t].forEach(function(s) { expandidos.add(normalizar(s)); });
    }
  });
  var arr = [];
  expandidos.forEach(function(e) { arr.push(e); });
  return arr;
}

var indiceCache = null;

function construirIndice() {
  var items = [];
  var idx = {};
  var N = listaMedicamentos.length;

  listaMedicamentos.forEach(function(med, i) {
    var nombre = normalizar(med.nombre);
    var pa = normalizar(med.principioActivo);
    var lab = normalizar(med.laboratorio || '');
    var textoCompleto = normalizar([
      med.indicacion, med.nombre, med.principioActivo,
      med.laboratorio, med.presentacion
    ].join(' ')).replace(/[^a-z0-9\s]/g, ' ');
    var contra = normalizar(med.contraindicaciones || '').replace(/[^a-z0-9\s]/g, ' ');

    var stemsProducto = new Set();
    textoCompleto.split(/\s+/).forEach(function(t) {
      if (t.length > 1) stemsProducto.add(stemEs(t));
    });

    var stemsContra = new Set();
    contra.split(/\s+/).forEach(function(t) {
      if (t.length > 1) stemsContra.add(stemEs(t));
    });

    items.push({
      med: med,
      stemsProducto: stemsProducto,
      stemsContra: stemsContra,
    });

    var vistos = new Set();
    textoCompleto.split(/\s+/).forEach(function(t) {
      if (t.length <= 1) return;
      if (vistos.has(t)) return;
      vistos.add(t);

      var stem = stemEs(t);
      var peso = 1;
      if (tienePalabraExacta(nombre, t) || tienePalabraExacta(pa, t)) {
        peso = 3;
      } else if (tienePalabraExacta(lab, t)) {
        peso = 2;
      }

      if (!idx[stem]) idx[stem] = [];
      var pList = idx[stem];
      var found = false;
      for (var j = 0; j < pList.length; j++) {
        if (pList[j].i === i) {
          if (peso > pList[j].peso) pList[j].peso = peso;
          found = true;
          break;
        }
      }
      if (!found) pList.push({ i: i, peso: peso });
    });
  });

  return { items: items, idx: idx, N: N };
}

function analizarSintomas(texto) {
  var tokens = tokenizar(texto);
  if (!tokens.length) return [];
  var expandidos = expandirTokens(tokens);
  if (!expandidos.length) return [];

  if (!indiceCache) indiceCache = construirIndice();

  var idx = indiceCache.idx;
  var items = indiceCache.items;
  var N = indiceCache.N;

  var scores = {};
  expandidos.forEach(function(t) {
    var s = stemEs(t);
    var postings = idx[s];
    if (!postings) return;
    var idf = Math.log((N + 0.5) / (postings.length + 0.5));
    postings.forEach(function(p) {
      if (!scores[p.i]) scores[p.i] = 0;
      scores[p.i] += p.peso * idf;
    });
  });

  var inds = Object.keys(scores).map(Number);
  if (!inds.length) return [];

  var maxScore = 0;
  var resultados = [];

  inds.forEach(function(i) {
    var item = items[i];
    var score = scores[i];

    var tokenosMatchCount = 0;
    tokens.forEach(function(ot) {
      var candidatos = [ot].concat(SINONIMOS[ot] || []).map(normalizar);
      if (candidatos.some(function(c) { return item.stemsProducto.has(stemEs(c)); })) tokenosMatchCount++;
    });
    if (tokens.length >= 2 && tokenosMatchCount < 2) score *= 0.2;

    if (score <= 0) return;

    var contraAciertos = 0;
    expandidos.forEach(function(t) {
      if (item.stemsContra.has(stemEs(t))) contraAciertos++;
    });

    var tokensMatch = tokens.filter(function(ot) {
      var candidatos = [ot].concat(SINONIMOS[ot] || []).map(normalizar);
      return candidatos.some(function(c) { return item.stemsProducto.has(stemEs(c)); });
    });

    if (score > maxScore) maxScore = score;
    resultados.push({
      med: item.med,
      score: score,
      contra: contraAciertos > 0,
      tokensMatch: tokensMatch,
    });
  });

  resultados.sort(function(a, b) { return b.score - a.score || a.med.nombre.localeCompare(b.med.nombre); });
  var minScore = Math.max(1.0, maxScore * 0.5);
  return resultados.filter(function(r) { return r.score >= minScore; }).slice(0, 15);
}

function tienePalabraExacta(texto, palabra) {
  if (!texto || !palabra) return false;
  return texto.split(/\s+/).indexOf(palabra) !== -1;
}

function extraerTokensBusqueda(termino) {
  return termino.split(/\s+/).filter(function(t) {
    return t.length > 2 && isNaN(parseInt(t));
  });
}

function buscarPorRecomendaciones(principios, textoSintomas) {
  if (!principios || !principios.length) return { encontrados: [], noEncontrados: [] };
  var tokensSintomas = tokenizar(textoSintomas);
  var encontrados = [];
  var ids = new Set();

  principios.forEach(function(pr) {
    var tokensPr = extraerTokensBusqueda(pr);

    listaMedicamentos.forEach(function(med) {
      if (ids.has(med.id)) return;
      var paNorm = normalizar(med.principioActivo);
      var nombreNorm = normalizar(med.nombre);

      var nivel = 0;
      if (nombreNorm === pr || paNorm === pr) {
        nivel = 4;
      } else {
        tokensPr.forEach(function(t) {
          if (nombreNorm === t || paNorm === t) {
            nivel = Math.max(nivel, 4);
          } else if (tienePalabraExacta(nombreNorm, t) || tienePalabraExacta(paNorm, t)) {
            nivel = Math.max(nivel, 3);
          }
        });
      }

      if (nivel > 0) {
        var contraTexto = normalizar(med.contraindicaciones || '');
        var contra = tokensSintomas.some(function(t) {
          return contraTexto.indexOf(t) !== -1;
        });
        encontrados.push({
          med: med,
          score: nivel,
          contra: contra,
          tokensMatch: [],
          recomendadoPorIA: true,
          exacto: nivel >= 3,
        });
        ids.add(med.id);
      }
    });
  });

  encontrados.sort(function(a, b) { return b.score - a.score; });

  var noEncontrados = principios.filter(function(pr) {
    var tokensPr = extraerTokensBusqueda(pr);
    return !encontrados.some(function(e) {
      var paNorm = normalizar(e.med.principioActivo);
      var nombreNorm = normalizar(e.med.nombre);
      return tokensPr.some(function(t) {
        return tienePalabraExacta(paNorm, t) || tienePalabraExacta(nombreNorm, t);
      });
    });
  });

  return { encontrados: encontrados, noEncontrados: noEncontrados };
}

function renderAviso() {
  return '<div class="consulta__aviso">' +
    '<span class="consulta__aviso-icono material-symbols-outlined">warning</span>' +
    '<div>Proyecto de programación <strong>exclusivamente educativo</strong>. El catálogo y la IA pueden contener errores. Las coincidencias de texto no son recomendaciones de tratamiento. No utilizar para diagnosticar, prescribir ni decidir tratamientos.</div>' +
  '</div>';
}

function renderResultados(items, validacion) {
  validacion = validacion || {};
  var approved = validacion.approved || [];
  var alternatives = validacion.alternatives || [];

  var agrupados = { parafarmacia: [], otc: [], receta: [] };

  items.forEach(function(r) {
    var med = r.med || r;
    var id = med.id;

    var esAlternativa = alternatives.some(function(a) { return a.alternativePrinciple && tienePalabraExacta(normalizar(med.principioActivo), normalizar(a.alternativePrinciple)); });
    var esAprobado = approved.indexOf(id) !== -1;

    var item = {
      r: r,
      med: med,
      validado: esAprobado,
      alternativa: esAlternativa,
    };
    agrupados[clasificar(med)].push(item);
  });

  var html = '<div style="padding:8px 14px 2px;font-size:11px;font-weight:600;color:var(--gris-texto);text-transform:uppercase;letter-spacing:0.3px">Medicamentos disponibles en catálogo</div>';

  ['parafarmacia', 'otc', 'receta'].forEach(function(cat) {
    var lista = agrupados[cat];
    if (!lista.length) return;
    var info = ETIQUETAS[cat];

    html += '<div class="consulta__grupo">' +
      '<div class="consulta__grupo-titulo">' +
        '<span class="material-symbols-outlined" style="font-size:14px">' + info.icono + '</span>' +
        info.titulo +
        '<span class="badge ' + info.badge + '">' + lista.length + '</span>' +
      '</div>';

    html += lista.slice(0, MAX_RESULTADOS).map(function(item) {
      var med = item.med;
      var r = item.r;
      var indicacion = med.indicacion.length > 55
        ? escapeHtml(med.indicacion.substring(0, 55)) + '…'
        : escapeHtml(med.indicacion);

      var badges = '';
      if (item.alternativa) {
        var nota = r.notaAlternativa || 'Alternativa sugerida por IA';
        badges += '<span class="consulta__badge-alternativa" title="' + escapeHtml(nota) + '">Alternativa</span>';
      }
      if (r.recomendadoPorIA) {
        badges += '<span class="badge badge--ia">Coincidencia experimental de IA</span>';
      }

      var tags = r.tokensMatch && r.tokensMatch.length
        ? '<div class="consulta__resultado-tags">' + r.tokensMatch.map(function(t) { return '<span class="consulta__tag">' + escapeHtml(t) + '</span>'; }).join('') + '</div>'
        : '';

      var claseExacto = r.exacto ? 'consulta__resultado--exacto' : '';

      return '<div class="consulta__resultado ' + claseExacto + '" data-id="' + med.id + '">' +
        '<div class="consulta__resultado-info">' +
          '<div class="consulta__resultado-nombre">' +
            escapeHtml(med.nombre) +
            badges +
            '<span class="badge ' + info.badge + '" style="font-size:9px;margin-left:6px">' + info.texto + '</span>' +
          '</div>' +
          '<div class="consulta__resultado-detalle">' + escapeHtml(med.principioActivo) + ' — ' + indicacion + '</div>' +
          tags +
        '</div>' +
      '</div>';
    }).join('');

    if (lista.length > MAX_RESULTADOS) {
      html += '<div class="consulta__vacio" style="padding:6px 14px;font-size:12px">... y ' + (lista.length - MAX_RESULTADOS) + ' más</div>';
    }
    html += '</div>';
  });

  return html;
}

function renderBienvenida() {
  return '<div class="consulta__burbuja consulta__burbuja--sistema">' +
    '<div class="consulta__saludo-icono material-symbols-outlined">chat</div>' +
    '<div class="consulta__saludo-titulo">Consulta Rápida</div>' +
    '<p style="margin:0 0 8px">Busca productos en el catálogo o prueba un caso ficticio para explorar cómo funciona el buscador.</p>' +
    renderAviso() +
    '<p style="margin:8px 0 0;font-size:13px;color:var(--gris-texto)">Describe síntomas o busca un medicamento. Ej: <em>"Dolor de cabeza y fiebre"</em> o <em>"Ibuprofeno"</em></p>' +
  '</div>';
}

function renderCargando(fase) {
  var textos = {
    analizando: 'Analizando consulta',
    consultando: 'Consultando IA',
    buscando: 'Buscando en catálogo',
    validando: 'Comparando coincidencias (no es validación clínica)',
  };
  var texto = textos[fase] || 'Analizando';
  return '<div class="consulta__burbuja consulta__burbuja--cargando">' +
    '<span class="consulta__cargando-texto">' + texto + '</span>' +
    '<span class="consulta__punto"></span>' +
    '<span class="consulta__punto"></span>' +
    '<span class="consulta__punto"></span>' +
  '</div>';
}

function renderRespuestaUnificada(textoIA, resultados, idContenedor, principiosNoEncontrados, esRecomendacionIA, validacion) {
  var textoSeguro = escapeHtml(textoIA).replace(/\n/g, '<br>');
  var textoRecomendaciones = textoSeguro.replace(/\[RECOMENDACIONES:[^\]]*\]/gi, '');

  var html = '<div class="consulta__respuesta-unificada">' +
    '<div class="consulta__ia-cabecera">' +
      '<span class="material-symbols-outlined" style="font-size:16px">auto_awesome</span>' +
      ' Respuesta experimental de IA' +
    '</div>' +
    '<div class="consulta__ia-contenido">' + textoRecomendaciones + '</div>' +
    '<div class="consulta__aviso consulta__aviso--compacto">' +
      '<span class="material-symbols-outlined" style="font-size:14px">warning</span>' +
      ' Puede contener errores. No es validación clínica ni una recomendación de tratamiento.' +
    '</div>';

  if (validacion && validacion.sinValidar) {
    html += '<p class="consulta__estado">No se pudo completar la comparación de productos. No se muestran sugerencias sin comprobar.</p>';
    if (validacion.errorIA) html += '<p class="consulta__estado">' + escapeHtml(validacion.errorIA.mensaje) + '</p>';
  }

  if (principiosNoEncontrados && principiosNoEncontrados.length > 0) {
    html += '<div class="consulta__no-encontrados">' +
      '<span class="material-symbols-outlined" style="font-size:14px">info</span>' +
      ' La IA mencion\u00f3 <strong>' + escapeHtml(principiosNoEncontrados.join(', ')) + '</strong> que no est\u00e1 disponible en nuestro cat\u00e1logo actual.' +
    '</div>';
  }

  if (resultados && resultados.length > 0) {
    var total = resultados.length;
    var etiqueta = esRecomendacionIA ? 'Coincidencias experimentales en el catálogo' : 'Resultados en el catálogo';
    html += '<button class="consulta__toggle-productos" data-target="' + idContenedor + '">' +
      '<span class="material-symbols-outlined consulta__toggle-icono">expand_more</span>' +
      ' ' + etiqueta + ' <span class="consulta__toggle-contador">(' + total + ')</span>' +
    '</button>' +
    '<div class="consulta__contenedor-productos consulta__contenedor-productos--oculto" id="' + idContenedor + '">' +
      renderResultados(resultados, validacion) +
    '</div>';
  }

  html += '</div>';
  return html;
}

function guardarHistorial(contenedor) {
  var bubbles = contenedor.querySelectorAll('.consulta__burbuja');
  historialVista = Array.from(bubbles).map(function(el) {
    return {
      t: el.classList.contains('consulta__burbuja--usuario') ? 'u' : 's',
      h: el.innerHTML,
    };
  }).slice(-30);
  historialIA = historialIA.slice(-10);
}

function restaurarHistorial(contenedor) {
  if (!historialVista.length) return false;
  historialVista.forEach(function(msg) {
    var tipo = msg.t === 'u' ? 'usuario' : 'sistema';
    contenedor.insertAdjacentHTML('beforeend',
      '<div class="consulta__burbuja consulta__burbuja--' + tipo + '">' + msg.h + '</div>');
  });
  return true;
}

window.ModuloConsulta = {
  titulo: 'Consulta Rápida',
  buscarLocal: analizarSintomas,
  iniciar() {
    activo = true;
    var area = document.getElementById('area-trabajo');
    area.innerHTML = '<div class="consulta anim-aparecer">' +
      '<div class="consulta__mensajes" id="consulta-mensajes" role="log" aria-live="polite" aria-label="Conversación educativa"></div>' +
      '<div class="consulta__input-area">' +
        '<div class="consulta__input-fila">' +
          '<button id="consulta-reiniciar" class="consulta__reiniciar" title="Borrar conversación" aria-label="Borrar conversación e historiales antiguos">' +
            '<span class="material-symbols-outlined" style="font-size:18px">refresh</span>' +
          '</button>' +
          '<input type="text" id="consulta-input" class="consulta__input" maxlength="2000" aria-label="Consulta educativa" placeholder="Busca un producto o plantea un caso ficticio..."' + (window.innerWidth < 768 ? '' : ' autofocus') + ' />' +
          '<button id="consulta-enviar" class="consulta__enviar" title="Enviar" aria-label="Enviar consulta">' +
            '<span class="material-symbols-outlined" style="font-size:18px">arrow_upward</span>' +
          '</button>' +
        '</div>' +
        '<label class="consulta__opcion-ia"><input type="checkbox" id="consulta-usar-ia" aria-describedby="consulta-privacidad"' + (privacidad.iaActiva ? ' checked' : '') + (privacidad.iaDisponible ? '' : ' disabled') + '> Activar IA experimental con Groq (opcional)</label>' +
        '<p id="consulta-privacidad" class="consulta__input-aviso">Al activarla, la consulta y parte del contexto se envían a Groq. Usa solo ejemplos ficticios, sin datos personales. La conversación nueva no se guarda en el navegador; se pierde al recargar. El botón borrar también elimina historiales de versiones anteriores.</p>' +
        '<p id="consulta-estado" class="consulta__estado" role="status"></p>' +
      '</div>' +
    '</div>';

    var mensajes = document.getElementById('consulta-mensajes');
    var input = document.getElementById('consulta-input');
    var enviar = document.getElementById('consulta-enviar');
    var opcionIA = document.getElementById('consulta-usar-ia');
    var estadoConsulta = document.getElementById('consulta-estado');
    function actualizarModo() {
      privacidad.iaActiva = privacidad.iaDisponible && opcionIA.checked;
      estadoConsulta.textContent = privacidad.iaActiva
        ? 'IA activada voluntariamente. No utilizar para decisiones sanitarias.'
        : 'Modo local: las consultas no se envían a Groq.' + (privacidad.iaDisponible ? '' : ' IA no configurada o desactivada en el servidor.');
    }
    opcionIA.addEventListener('change', actualizarModo);
    actualizarModo();

    if (!restaurarHistorial(mensajes)) {
      mensajes.innerHTML = renderBienvenida();
    }

    function detectarIntencion(t) {
      var nt = normalizar(t).trim();

      var saludos = ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey', 'gracias', 'muchas gracias', 'vale', 'ok', 'de acuerdo', 'entendido', 'perfecto'];
      if (saludos.some(function(s) { return nt === s || nt.indexOf(s + ' ') === 0; })) return 'saludo';

      var patronesPregunta = [
        'que es', 'que son', 'que es un', 'que es una',
        'para que sirve', 'para que se usa',
        'como se usa', 'como se toma', 'como se administra',
        'cual es', 'cuales son',
        'diferencia entre', 'diferencia',
        'interaccion', 'contraindicacion',
        'efectos secundarios', 'efectos adversos',
        'dosis', 'cuanto', 'cuanta',
        'que pasa si', 'puedo tomar',
        'esta indicado', 'esta contraindicado',
      ];
      if (nt.indexOf('?') !== -1 || nt.indexOf('\u00bf') !== -1) return 'pregunta';
      if (patronesPregunta.some(function(p) { return nt.indexOf(p) !== -1; })) return 'pregunta';

      if (nt.length > 2) {
        for (var i = 0; i < listaMedicamentos.length; i++) {
          var med = listaMedicamentos[i];
          var nombreNorm = normalizar(med.nombre);
          var paNorm = normalizar(med.principioActivo);
          if (nombreNorm === nt || paNorm === nt) return 'producto';
        }
      }

      return 'sintomas';
    }

    function actualizarCarga(fase) {
      var el = document.getElementById(ID_LOADING);
      if (el) el.innerHTML = renderCargando(fase);
    }

    async function procesar() {
      if (procesando || !activo) return;
      var texto = input.value.trim();
      if (!texto || texto.length > 2000) return;

      procesando = true;
      var solicitud = ++secuencia;

      mensajes.insertAdjacentHTML('beforeend',
        '<div class="consulta__burbuja consulta__burbuja--usuario">' + escapeHtml(texto) + '</div>');
      input.value = '';
      enviar.disabled = true;
      mensajes.scrollTo({ top: mensajes.scrollHeight, behavior: 'smooth' });

      var intencion = detectarIntencion(texto);
      if (intencion === 'saludo') {
        var respuestas = {
          'hola': '¡Hola! Soy FarmaStudy, un proyecto educativo. Busca un producto o prueba un caso ficticio.',
          'gracias': 'De nada. Puedes seguir explorando el catálogo educativo.',
          'buenas': '¡Buenas! ¿En qué puedo ayudarte hoy?',
        };
        var palabra = texto.toLowerCase().trim().split(' ')[0];
        var respuesta = respuestas[palabra] || '¡Hola! Busca un producto o plantea un caso ficticio para estudiar.';
        mensajes.insertAdjacentHTML('beforeend',
          '<div class="consulta__burbuja consulta__burbuja--sistema"><div style="padding:4px 0">' + escapeHtml(respuesta) + '</div></div>');
        mensajes.scrollTo({ top: mensajes.scrollHeight, behavior: 'smooth' });
        guardarHistorial(mensajes);
        procesando = false;
        enviar.disabled = false;
        input.focus();
        return;
      }

      ID_LOADING = 'carga-' + Date.now();
      mensajes.insertAdjacentHTML('beforeend', '<div id="' + ID_LOADING + '">' + renderCargando('analizando') + '</div>');
      mensajes.scrollTo({ top: mensajes.scrollHeight, behavior: 'smooth' });
      opcionIA.disabled = true;

      try {
        if (controlador) controlador.abort();
        controlador = new AbortController();
        var signal = controlador.signal;

        var respuestaIA = null;
        var principiosRecomendados = [];
        var encontrados = [];
        var noEncontrados = [];
        var errorConsulta = null;

        // --- FASE 1: Consultar a la IA ---
        actualizarCarga(privacidad.iaActiva ? 'consultando' : 'buscando');

        var ultimosMedicamentos = historialIA
          .filter(function(m) { return m.role === 'user' && m.content.indexOf('Productos mostrados') !== -1; })
          .slice(-2)
          .map(function(m) {
            var partes = m.content.match(/Productos mostrados al usuario:\s*(.+?)$/);
            return partes ? partes[1].trim() : '';
          })
          .filter(function(p) { return p && p !== 'No se mostraron productos del catálogo.'; })
          .join(' | ');

        if (privacidad.iaActiva) {
          var resultadoIA = await orquestador.consultar(texto, intencion, historialIA, ultimosMedicamentos || null, signal);
          if (signal.aborted || !activo || solicitud !== secuencia) return;
          respuestaIA = resultadoIA.textoIA;
          principiosRecomendados = resultadoIA.principiosRecomendados;
          if (!respuestaIA) {
            errorConsulta = resultadoIA.errorIA || { mensaje: 'La IA no pudo responder. Inténtalo de nuevo.' };
            estadoConsulta.textContent = errorConsulta.mensaje;
          } else {
            estadoConsulta.textContent = 'Respuesta recibida de Groq. Contenido educativo, no validado para uso clínico.';
          }
        }

        // --- FASE 2: Buscar en el catálogo ---
        if (principiosRecomendados.length > 0) {
          actualizarCarga('buscando');

          var resultadosBusqueda = buscarPorRecomendaciones(principiosRecomendados, texto);
          encontrados = resultadosBusqueda.encontrados;
          noEncontrados = resultadosBusqueda.noEncontrados;
        }

        // --- FASE 3: Validar productos con IA ---
        var validacion = null;
        if (respuestaIA && encontrados.length > 0) {
          actualizarCarga('validando');
          var encontradosTop = encontrados
            .sort(function(a, b) { return (b.exacto ? 1 : 0) - (a.exacto ? 1 : 0) || b.score - a.score; })
            .slice(0, 10);
          validacion = await orquestador.validarProductos(texto, principiosRecomendados, encontradosTop, noEncontrados, signal);
          if (signal.aborted || !activo || solicitud !== secuencia) return;
        }

        // --- FASE 4: Aplicar validación ---
        var resultadosFinales = [];
        var principiosNoEncontrados = noEncontrados.slice();

        if (validacion) {
          var approvedSet = {};
          validacion.approved.forEach(function(id) { approvedSet[id] = true; });

          encontrados.forEach(function(item) {
            if (approvedSet[item.med.id]) {
              resultadosFinales.push(item);
            }
          });

        } else if (respuestaIA && encontrados.length > 0) {
          resultadosFinales = [];
        } else if (!respuestaIA) {
          var fallback = analizarSintomas(texto);
          resultadosFinales = fallback;
        } else if (intencion === 'producto' && encontrados.length === 0) {
          var fallback = analizarSintomas(texto);
          resultadosFinales = fallback;
        } else if (intencion !== 'pregunta') {
          resultadosFinales = encontrados;
        }

        // --- FASE 5: Notificar contexto a la IA ---
        if (respuestaIA) {
          historialIA.push({ role: 'user', content: texto });
          historialIA.push({ role: 'assistant', content: respuestaIA });
          orquestador.notificarContexto(historialIA, resultadosFinales);
        }

        // --- RENDERIZAR ---
        document.getElementById(ID_LOADING)?.remove();
        ID_LOADING = null;

        if (respuestaIA) {
          var idContenedor = 'productos-' + Date.now();
          var htmlUnificado = renderRespuestaUnificada(
            respuestaIA, resultadosFinales, idContenedor,
            principiosNoEncontrados, !!validacion && !validacion.sinValidar, validacion
          );
          mensajes.insertAdjacentHTML('beforeend',
            '<div class="consulta__burbuja consulta__burbuja--sistema">' + htmlUnificado + '</div>');
        } else {
          var avisoError = errorConsulta
            ? '<div class="consulta__aviso" role="status"><div><strong>No se recibió una respuesta de IA.</strong> ' + escapeHtml(errorConsulta.mensaje) + ' Puedes seguir buscando en el catálogo local.</div></div>'
            : '';
          var htmlLocal = resultadosFinales.length
            ? renderAviso() + renderResultados(resultadosFinales, null)
            : '<div class="consulta__vacio">' +
                '<div class="consulta__vacio-icono material-symbols-outlined">search</div>' +
                '<div class="consulta__vacio-texto">No se encontraron medicamentos para <strong>"' + escapeHtml(texto) + '"</strong>.</div>' +
                '<div class="consulta__vacio-ayuda">Prueba a reformular con síntomas más concretos o busca por nombre de medicamento.</div>' +
                '<div class="consulta__vacio-ejemplos">' +
                  '<button class="consulta__ejemplo" data-ejemplo="dolor de cabeza">Dolor de cabeza</button>' +
                  '<button class="consulta__ejemplo" data-ejemplo="fiebre y tos">Fiebre y tos</button>' +
                  '<button class="consulta__ejemplo" data-ejemplo="ibuprofeno">Ibuprofeno</button>' +
                  '<button class="consulta__ejemplo" data-ejemplo="dolor muscular">Dolor muscular</button>' +
                '</div>' +
              '</div>';
          mensajes.insertAdjacentHTML('beforeend',
            '<div class="consulta__burbuja consulta__burbuja--sistema">' + avisoError + htmlLocal + '</div>');
        }

        mensajes.scrollTo({ top: mensajes.scrollHeight, behavior: 'smooth' });
        guardarHistorial(mensajes);

      } catch (e) {
        if (!activo || solicitud !== secuencia || (controlador && controlador.signal.aborted)) return;
        console.warn('[ModuloConsulta] Error en procesar:', e.message);
        var fallbackError = analizarSintomas(texto);
        document.getElementById(ID_LOADING)?.remove();
        ID_LOADING = null;

        var htmlError = fallbackError.length
          ? renderAviso() + renderResultados(fallbackError, null)
          : '<div class="consulta__vacio">' +
              '<div class="consulta__vacio-icono material-symbols-outlined">error</div>' +
              '<div class="consulta__vacio-texto">Ocurri\u00f3 un error al procesar tu consulta.</div>' +
            '</div>';
        mensajes.insertAdjacentHTML('beforeend',
          '<div class="consulta__burbuja consulta__burbuja--sistema">' + htmlError + '</div>');
        mensajes.scrollTo({ top: mensajes.scrollHeight, behavior: 'smooth' });
      } finally {
        if (activo && solicitud === secuencia) {
          document.getElementById(ID_LOADING)?.remove();
          ID_LOADING = null;
          procesando = false;
          enviar.disabled = false;
          opcionIA.disabled = !privacidad.iaDisponible;
          input.focus();
        }
      }
    }

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        procesar();
      }
    });

    enviar.addEventListener('click', procesar);

    document.getElementById('consulta-reiniciar').addEventListener('click', function() {
      secuencia++;
      if (controlador) controlador.abort();
      procesando = false;
      ID_LOADING = null;
      enviar.disabled = false;
      opcionIA.disabled = !privacidad.iaDisponible;
      historialIA.length = 0;
      historialVista.length = 0;
      try {
        localStorage.removeItem('consulta-msg');
        localStorage.removeItem('consulta-ia-ctx');
      } catch (e) { /* Almacenamiento bloqueado por el navegador. */ }
      mensajes.innerHTML = renderBienvenida();
      actualizarModo();
      input.value = '';
      input.focus();
    });

    mensajes.addEventListener('click', function(e) {
      var card = e.target.closest('.consulta__resultado');
      if (card) {
        establecerEstado('medicamentoSeleccionado', card.dataset.id);
        navegarA('ficha');
        return;
      }
      var btn = e.target.closest('.consulta__ejemplo');
      if (btn) {
        input.value = btn.dataset.ejemplo;
        procesar();
        return;
      }
      var toggle = e.target.closest('.consulta__toggle-productos');
      if (toggle) {
        var targetId = toggle.dataset.target;
        var contenedor = document.getElementById(targetId);
        if (contenedor) {
          var oculto = contenedor.classList.toggle('consulta__contenedor-productos--oculto');
          toggle.classList.toggle('consulta__toggle-productos--abierto', !oculto);
          var icono = toggle.querySelector('.consulta__toggle-icono');
          if (icono) icono.textContent = oculto ? 'expand_more' : 'expand_less';
        }
        return;
      }
    });
  },
  destruir() {
    activo = false;
    secuencia++;
    if (controlador) controlador.abort();
    procesando = false;
    document.getElementById(ID_LOADING)?.remove();
    ID_LOADING = null;
    var area = document.getElementById('area-trabajo');
    var mensajes = area?.querySelector('#consulta-mensajes');
    if (mensajes) guardarHistorial(mensajes);
  },
};

})();

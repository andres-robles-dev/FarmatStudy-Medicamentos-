(function() {

  var API_URL = 'php/api-groq.php';
  var ERRORES = {
    certificado_tls: 'PHP no puede verificar el certificado HTTPS de Groq. Revisa los certificados del servidor.',
    configuracion_tls: 'El archivo de certificados del servidor no está disponible.',
    autenticacion_groq: 'Groq rechazó la clave configurada. Revisa si está activa y corresponde al proyecto.',
    permisos_groq: 'Groq denegó el acceso. Revisa los permisos del proyecto y del modelo.',
    cuota_groq: 'Se alcanzó una cuota de Groq. Espera y revisa los límites de tu cuenta.',
    limite_local: 'Se alcanzó el límite de uso de esta demo. Espera antes de consultar de nuevo.',
    tiempo_agotado: 'Groq tardó demasiado en responder. Inténtalo de nuevo.',
    conexion_groq: 'El servidor no pudo conectarse con Groq. Revisa su conexión de red.',
    conexion_navegador: 'El navegador no pudo conectar con el servidor. Comprueba que PHP sigue ejecutándose.',
    ia_no_configurada: 'La IA está desactivada o falta su configuración en el servidor.',
    configuracion_ia: 'No se pudo cargar la configuración de IA del servidor.',
    control_uso: 'El servidor no pudo preparar el control de uso. Revisa los permisos de la carpeta privada.',
    modelo_groq: 'El modelo configurado no está disponible en Groq.',
    solicitud_groq: 'Groq rechazó la solicitud. Borra la conversación y vuelve a intentarlo.',
    solicitud_invalida: 'La consulta supera los límites permitidos o tiene un formato inválido. Borra la conversación y reintenta.',
    respuesta_groq: 'No se pudo interpretar la respuesta de Groq.',
    servicio_groq: 'El servicio de IA no está disponible temporalmente. Inténtalo más tarde.',
  };

  function registrarError(opciones, codigo) {
    codigo = Object.prototype.hasOwnProperty.call(ERRORES, codigo) ? codigo : 'servicio_groq';
    opciones.error = { codigo: codigo, mensaje: ERRORES[codigo] };
    return null;
  }

  var PROMPT_SISTEMA = [
    'Eres FarmaStudy, un asistente educativo experimental para un proyecto de programación.',
    'Trabaja solo con ejemplos ficticios. No eres un profesional sanitario ni realizas validación clínica.',
    'No diagnostiques ni indiques tratamientos o pautas personalizadas. No solicites datos personales.',
    'Si la consulta describe una urgencia, indica que se contacte con emergencias sin sugerir productos.',
    '',
    'El catálogo local es limitado y puede contener errores.',
    'Al mencionar ejemplos del catálogo, USA SIEMPRE principios',
    'activos específicos, nunca marcas comerciales.',
    '',
    'Responde según el caso (siempre máximo 3-4 líneas).',
    'Sé directo, ve al grano. No uses frases de cortesía ni disculpas.',
    '',
    '• PREGUNTA (dosis, usos, interacciones...):',
    '  Responde directo y técnico. Máximo 3 líneas.',
    '',
    '• SÍNTOMAS de un paciente:',
    '  - Explica conceptos generales de un caso ficticio, sin hablar como profesional sanitario.',
    '  - Máximo 4 líneas. Natural y profesional.',
    '  - Si procede, menciona opciones con su principio activo.',
    '  - Termina aconsejando acudir al médico si persiste.',
    '  - Al final incluye [RECOMENDACIONES: principio1, principio2]',
    '    IMPORTANTE: solo principios activos, sin dosis, sin marcas,',
    '    sin frases adicionales.',
    '',
    '• MEDICAMENTO concreto:',
    '  Información técnica breve. Máximo 3 líneas.',
    '',
    'Si no hay productos que recomendar, omite [RECOMENDACIONES].',
    '',
    '--- COLABORACIÓN CON EL MOTOR ---',
    'Después de tu respuesta, el motor buscará en el catálogo los',
    'principios que recomendaste y te pedirá validar los resultados.',
    'Los mensajes con prefijo [ENGINE] son notificaciones internas',
    'del sistema. No respondas a ellos, úsalos como contexto.',
    'La comprobación es experimental y NO garantiza precisión ni seguridad clínica.',
  ].join('\n');

  var PROMPT_VALIDACION = [
    'Eres FarmaStudy, comparando coincidencias de un catálogo educativo no validado.',
    'Debes responder EXACTAMENTE en el formato JSON solicitado,',
    'sin texto adicional, sin explicaciones, solo JSON.',
    'Esta comparación NO es validación clínica y puede contener errores.',
  ].join('\n');

  async function llamarAPI(mensajes, opciones) {
    if (!window.PrivacidadConsulta || !window.PrivacidadConsulta.iaActiva || !window.PrivacidadConsulta.iaDisponible) return null;
    opciones = opciones || {};
    try {
      var fetchOpts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mensajes: mensajes,
          max_tokens: opciones.maxTokens || 250,
          temperature: opciones.temperature === undefined ? 0.7 : opciones.temperature,
        }),
      };
      if (opciones.signal) fetchOpts.signal = opciones.signal;

      var res = await fetch(API_URL, fetchOpts);
      if (!res.ok) {
        var detalle = null;
        try { detalle = await res.json(); } catch (e) { /* El servidor puede devolver HTML en un error. */ }
        return registrarError(opciones, detalle && detalle.codigo ? detalle.codigo :
          (res.status === 429 ? 'limite_local' : 'servicio_groq'));
      }
      var data;
      try { data = await res.json(); } catch (e) { return registrarError(opciones, 'respuesta_groq'); }
      var contenido = data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : null;
      return typeof contenido === 'string' && contenido.trim() ? contenido : registrarError(opciones, 'respuesta_groq');
    } catch (e) {
      if (e.name === 'AbortError') return null;
      return registrarError(opciones, 'conexion_navegador');
    }
  }

  function normalizar(s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function parsearRecomendaciones(textoIA) {
    if (!textoIA) return [];
    var PALABRAS_INVALIDAS = ['acuda', 'consulte', 'medico', 'doctor', 'receta', 'farmacia', 'urgencias', 'hospital'];
    var match = textoIA.match(/\[RECOMENDACIONES:\s*([\s\S]*?)\]/i);
    if (!match) return [];
    return match[1].split(/[,\n]+/).map(function(p) {
      return p.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/^[-*]\s*/, '');
    }).filter(function(p) {
      if (p.length < 2 || p.length > 40) return false;
      if (PALABRAS_INVALIDAS.some(function(w) { return p.indexOf(w) !== -1; })) return false;
      return true;
    });
  }

  function parsearValidacion(textoIA) {
    if (!textoIA) return null;
    var start = textoIA.indexOf('{');
    if (start === -1) return null;
    var end = textoIA.lastIndexOf('}');
    if (end === -1) return null;
    try {
      var parsed = JSON.parse(textoIA.substring(start, end + 1));
      if (!Array.isArray(parsed.approved) || !parsed.approved.every(function(id) { return typeof id === 'string'; }) ||
          !Array.isArray(parsed.rejected) || !parsed.rejected.every(function(r) {
            return r && typeof r.id === 'string' && typeof r.reason === 'string';
          }) || !Array.isArray(parsed.alternatives)) return null;
      if (parsed.approved.some(function(id) {
        return parsed.rejected.some(function(r) { return r.id === id; });
      })) return null;
      return {
        approved: Array.from(new Set(parsed.approved)),
        rejected: parsed.rejected,
        alternatives: [],
      };
    } catch (e) {
      console.warn('[IaOrquestador] Respuesta de comparación no interpretable.');
      return null;
    }
  }

  window.IaOrquestador = {

    consultar: async function(texto, tipo, historial, medicamentosPrevios, signal) {
      var mensajes = [
        { role: 'system', content: PROMPT_SISTEMA },
      ];

      if (historial && historial.length > 0) {
        mensajes = mensajes.concat(historial.slice(-10));
      }

      var contenidoUsuario = '';
      if (tipo === 'sintomas') {
        contenidoUsuario = 'Caso ficticio para estudiar conceptos, no para tratar pacientes: "' + texto + '"';
      } else if (tipo === 'pregunta') {
        contenidoUsuario = 'Pregunta educativa general: "' + texto + '"';
      } else if (tipo === 'producto') {
        contenidoUsuario = 'Explicación educativa sobre: "' + texto + '". No indiques pautas personalizadas.';
      } else {
        contenidoUsuario = texto;
      }

      if (medicamentosPrevios) {
        contenidoUsuario += '\n\nMedicamentos ya mencionados antes en esta conversación: ' + medicamentosPrevios;
      }

      mensajes.push({ role: 'user', content: contenidoUsuario });

      var opciones = { maxTokens: 400, temperature: 0.5, signal: signal };
      var respuesta = await llamarAPI(mensajes, opciones);
      var principios = respuesta ? parsearRecomendaciones(respuesta) : [];

      return {
        textoIA: respuesta,
        principiosRecomendados: principios,
        errorIA: opciones.error || null,
      };
    },

    validarProductos: async function(consultaOriginal, principios, encontrados, noEncontrados, signal) {
      if (!encontrados || !encontrados.length) {
        return { approved: [], rejected: [], alternatives: [] };
      }

      var descProductos = encontrados.map(function(p) {
        var med = p.med || p;
        return '- ID:' + med.id + ' | Nombre: ' + med.nombre + ' | Principio: ' + med.principioActivo + ' | Indicación: ' + med.indicacion + ' | Presentación: ' + med.presentacion + ' | Contraindicaciones: ' + (med.contraindicaciones || 'Ninguna') + ' | Tipo: ' + (med.tipo || 'Medicamento');
      }).join('\n');

      var descNoEncontrados = noEncontrados && noEncontrados.length > 0
        ? noEncontrados.join(', ')
        : '(ninguno)';

      var prompt = [
        '[VALIDACIÓN REQUERIDA]',
        '',
        'Consulta del usuario: "' + consultaOriginal + '"',
        '',
        'Tus recomendaciones (principios activos): ' + (principios && principios.length > 0 ? principios.join(', ') : '(ninguno)'),
        '',
        'Productos ENCONTRADOS en nuestro catálogo:',
        descProductos,
        '',
        'NO encontrados en catálogo: ' + descNoEncontrados,
        '',
        'Responde ÚNICAMENTE con el siguiente JSON, sin texto adicional ni explicaciones:',
        '{',
        '  "approved": ["id1", "id2", ...],',
        '  "rejected": [{"id": "id3", "reason": "motivo del rechazo"}],',
        '  "alternatives": []',
        '}',
        '',
        'Reglas:',
        '- "approved": IDs de productos que SÍ son relevantes para la consulta.',
        '- "rejected": IDs de productos que NO son relevantes, con el motivo.',
        '- "alternatives": siempre vacío. No propongas sustituciones ni tratamientos alternativos.',
        '- No incluyas un producto en approved y rejected simultáneamente.',
        '- Si todos los productos son válidos, approved tiene todos los IDs y rejected vacío.',
        '',
        'ATENCIÓN: No confundas principios activos con nombres similares.',
        'Ejemplo: "ácido salicílico" NO es lo mismo que "ácido acetilsalicílico".',
        'Verifica que el principio activo del producto coincida EXACTAMENTE',
        'con el principio recomendado, no solo parcialmente.',
        '',
        'Verifica también que las CONTRAINDICACIONES del producto no contradigan',
        'los síntomas del usuario. Si un producto está contraindicado para los',
        'síntomas descritos, debe ir en "rejected".',
      ].join('\n');

      var opciones = { maxTokens: 500, temperature: 0.1, signal: signal };
      var respuesta = await llamarAPI([
        { role: 'system', content: PROMPT_VALIDACION },
        { role: 'user', content: prompt },
      ], opciones);

      var validacion = respuesta ? parsearValidacion(respuesta) : null;

      if (!validacion) {
        return {
          approved: [],
          rejected: [],
          alternatives: [],
          sinValidar: true,
          errorIA: opciones.error || null,
        };
      }

      var ids = encontrados.map(function(p) { return (p.med || p).id; });
      validacion.approved = validacion.approved.filter(function(id) { return ids.indexOf(id) !== -1; });
      validacion.rejected = validacion.rejected.filter(function(r) { return ids.indexOf(r.id) !== -1; });
      return validacion;
    },

    notificarContexto: function(historial, productosMostrados) {
      if (!historial) return;
      var resumen = productosMostrados && productosMostrados.length > 0
        ? 'Productos mostrados al usuario: ' + productosMostrados.map(function(p) { return (p.med || p).nombre; }).join(', ')
        : 'No se mostraron productos del catálogo.';
      historial.push({
        role: 'user',
        content: '[ENGINE] ' + resumen,
      });
    },
  };

})();

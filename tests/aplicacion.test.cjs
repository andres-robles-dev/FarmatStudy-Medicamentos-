const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const raiz = path.resolve(__dirname, '..');

function cargar(extra = {}) {
  const contexto = vm.createContext({ console, ...extra });
  contexto.window = contexto;
  for (const archivo of [
    'js/nucleo/utilidades.js', 'js/nucleo/farmadata.js',
    'datos/medicamentos.js', 'datos/parafarmacia.js',
    'datos/laboratorios.js', 'datos/clasificacion-atc.js',
    'js/nucleo/privacidad.js', 'js/nucleo/cuestionario.js', 'js/nucleo/ia-orquestador.js',
    'js/modulos/modulo-consulta.js',
  ]) {
    vm.runInContext(fs.readFileSync(path.join(raiz, archivo), 'utf8'), contexto, { filename: archivo });
  }
  return contexto;
}

test('el catálogo tiene identificadores únicos, campos y relaciones estructurales coherentes', () => {
  const app = cargar();
  const productos = Array.from(app.FarmaData.todos);
  assert.ok(productos.length > 0);
  assert.equal(new Set(productos.map(p => p.id)).size, productos.length);
  const grupos = new Map(app.arbolAtc.map(g => [g.codigo, new Set(g.hijos.map(s => s.codigo))]));
  const laboratorios = new Set(app.listaLaboratorios.map(l => l.nombre));
  const colectivos = new Set(['Diversos', 'Diversos laboratorios', 'GSK/Sanofi/MSD']);
  const campos = ['id', 'nombre', 'principioActivo', 'laboratorio', 'atc', 'grupoAtc',
    'subgrupoAtc', 'indicacion', 'dosis', 'presentacion', 'tipo', 'contraindicaciones', 'efectosAdversos'];
  for (const p of productos) {
    assert.match(p.id, /^(MED|PF)\d+$/);
    for (const campo of campos) assert.equal(typeof p[campo], 'string', `${p.id}: ${campo}`);
    for (const campo of campos) assert.ok(p[campo].trim(), `${p.id}: ${campo} vacío`);
    assert.equal(typeof p.receta, 'boolean');
    assert.equal(typeof p.financiado, 'boolean');
    assert.ok(grupos.get(p.grupoAtc)?.has(p.subgrupoAtc), `${p.id}: grupo/subgrupo`);
    assert.ok(laboratorios.has(p.laboratorio) || colectivos.has(p.laboratorio), `${p.id}: laboratorio`);
  }
});

test('búsqueda sin diferencias de acentos/mayúsculas y alias de laboratorio', () => {
  const { FarmaData } = cargar();
  const ids = lista => Array.from(lista, p => p.id).sort();
  assert.deepEqual(ids(FarmaData.buscarPorTexto(' ÁCIDO ')), ids(FarmaData.buscarPorTexto('acido')));
  assert.ok(FarmaData.buscarPorTexto('ibuprofeno').length > 0);
  assert.deepEqual(ids(FarmaData.buscarPorLaboratorio('Théa')), ids(FarmaData.buscarPorLaboratorio('Laboratoires Théa')));
  assert.ok(FarmaData.buscarPorLaboratorio('Expanscience').length > 0);
  assert.equal(FarmaData.buscarPorTexto('').length, 0);
  assert.equal(FarmaData.buscarPorId('NO_EXISTE'), null);
});

test('cada pregunta contiene cuatro opciones distintas y una única respuesta correcta', () => {
  const app = cargar();
  const normalizar = s => s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  for (let intento = 0; intento < 100; intento++) {
    const preguntas = app.generarPreguntasEstudio(app.FarmaData.todos, 10);
    assert.equal(preguntas.length, 10);
    assert.equal(new Set(preguntas.map(p => p.med.id)).size, 10);
    for (const p of preguntas) {
      assert.equal(p.med.tipo, 'Medicamento');
      assert.equal(p.opciones.length, 4);
      assert.equal(new Set(p.opciones.map(normalizar)).size, 4);
      assert.equal(p.opciones.filter(op => op === p.respuestaCorrecta).length, 1);
    }
  }
  assert.equal(app.generarPreguntasEstudio([], 10).length, 0);
  assert.equal(app.generarPreguntasEstudio(app.FarmaData.todos.slice(0, 1), 10).length, 0);
});

test('escapeHtml protege texto y comillas de atributos sin depender del DOM', () => {
  const app = cargar();
  assert.equal(app.escapeHtml('<img onerror="x">&\''), '&lt;img onerror=&quot;x&quot;&gt;&amp;&#39;');
  assert.equal(app.escapeHtml(null), '');
});

test('la IA requiere disponibilidad y consentimiento, sin peticiones por defecto', async () => {
  let peticiones = 0;
  const app = cargar({ FarmaStudyConfig: { iaDisponible: true }, fetch: async () => { peticiones++; throw new Error('No debe llamarse'); } });
  assert.equal(app.PrivacidadConsulta.iaActiva, false);
  const resultado = await app.IaOrquestador.consultar('ejemplo ficticio', 'producto', [], null);
  assert.equal(resultado.textoIA, null);
  assert.equal(peticiones, 0);
});

test('una comparación fallida no aprueba productos; el servidor puede rechazar la petición', async () => {
  const app = cargar({ FarmaStudyConfig: { iaDisponible: true }, fetch: async () => ({ ok: false, status: 429 }) });
  app.PrivacidadConsulta.iaActiva = true;
  const resultado = await app.IaOrquestador.validarProductos('caso ficticio', ['x'], [app.FarmaData.todos[0]], []);
  assert.equal(resultado.approved.length, 0);
  assert.equal(resultado.sinValidar, true);
});

test('la comparación filtra IDs inventados y no incorpora alternativas automáticamente', async () => {
  const app = cargar({
    FarmaStudyConfig: { iaDisponible: true },
    fetch: async () => ({ ok: true, json: async () => ({ choices: [{ message: { content: JSON.stringify({
      approved: ['MED001', 'INVENTADO'], rejected: [],
      alternatives: [{ original: 'x', alternativePrinciple: 'inventado', note: '<script>' }],
    }) } }] }) }),
  });
  app.PrivacidadConsulta.iaActiva = true;
  const resultado = await app.IaOrquestador.validarProductos('ejemplo', [], [app.FarmaData.todos[0]], []);
  assert.deepEqual(Array.from(resultado.approved), ['MED001']);
  assert.equal(resultado.alternatives.length, 0);
});

test('una respuesta con el mismo ID aprobado y rechazado falla de forma segura', async () => {
  const app = cargar({
    FarmaStudyConfig: { iaDisponible: true },
    fetch: async () => ({ ok: true, json: async () => ({ choices: [{ message: { content:
      '{"approved":["MED001"],"rejected":[{"id":"MED001","reason":"conflicto"}],"alternatives":[]}'
    } }] }) }),
  });
  app.PrivacidadConsulta.iaActiva = true;
  const resultado = await app.IaOrquestador.validarProductos('ejemplo', [], [app.FarmaData.todos[0]], []);
  assert.equal(resultado.approved.length, 0);
  assert.equal(resultado.sinValidar, true);
});

test('el chat distingue certificados, credenciales y cuotas sin mostrar el error crudo del servidor', async () => {
  for (const codigo of ['certificado_tls', 'autenticacion_groq', 'cuota_groq', 'limite_local']) {
    const app = cargar({
      FarmaStudyConfig: { iaDisponible: true },
      fetch: async () => ({ ok: false, status: codigo.includes('cuota') || codigo.includes('limite') ? 429 : 502,
        json: async () => ({ codigo, error: 'Detalle interno que no debe mostrarse' }) }),
    });
    app.PrivacidadConsulta.iaActiva = true;
    const resultado = await app.IaOrquestador.consultar('Ejemplo ficticio', 'pregunta', [], null);
    assert.equal(resultado.textoIA, null);
    assert.equal(resultado.errorIA.codigo, codigo);
    assert.ok(resultado.errorIA.mensaje.length > 0);
    assert.doesNotMatch(resultado.errorIA.mensaje, /Detalle interno/);
  }
});

test('el chat recibe una respuesta simulada sin perder el texto ni producir un error', async () => {
  const app = cargar({ FarmaStudyConfig: { iaDisponible: true },
    fetch: async () => ({ ok: true, json: async () => ({ choices: [{ message: { content: 'Respuesta educativa simulada.' } }] }) }),
  });
  app.PrivacidadConsulta.iaActiva = true;
  const resultado = await app.IaOrquestador.consultar('Explica qué es un principio activo', 'pregunta', [], null);
  assert.equal(resultado.textoIA, 'Respuesta educativa simulada.');
  assert.equal(resultado.errorIA, null);
});

test('un JSON inválido con HTTP 200 no se confunde con un fallo de red', async () => {
  const app = cargar({ FarmaStudyConfig: { iaDisponible: true },
    fetch: async () => ({ ok: true, json: async () => { throw new SyntaxError('JSON inválido'); } }),
  });
  app.PrivacidadConsulta.iaActiva = true;
  const resultado = await app.IaOrquestador.consultar('Pregunta educativa', 'pregunta', [], null);
  assert.equal(resultado.textoIA, null);
  assert.equal(resultado.errorIA.codigo, 'respuesta_groq');
});

test('dolor de cabeza no coincide con cabezal de cepillo y se mantiene la búsqueda por producto', () => {
  const app = cargar();
  for (const consulta of ['dolor de cabeza', 'que puedo recetar para el dolor de cabeza', 'dolores de cabeza']) {
    const resultados = app.ModuloConsulta.buscarLocal(consulta);
    assert.ok(resultados.length > 0, consulta);
    assert.equal(resultados.some(r => /cepillo|cabezal/i.test(r.med.nombre + ' ' + r.med.principioActivo)), false, consulta);
  }
  assert.ok(app.ModuloConsulta.buscarLocal('ibuprofeno').length > 0);
  assert.ok(app.ModuloConsulta.buscarLocal('cepillo').some(r => /cepillo/i.test(r.med.nombre)));
});

test('no quedan credenciales Groq incrustadas en los archivos públicos de código', () => {
  function revisar(directorio) {
    for (const entrada of fs.readdirSync(directorio, { withFileTypes: true })) {
      const archivo = path.join(directorio, entrada.name);
      if (entrada.isDirectory() && entrada.name !== '.git') revisar(archivo);
      else if (/\.(php|js|cjs|md|css)$/.test(entrada.name)) {
        assert.equal(/gsk_[A-Za-z0-9]{20,}/.test(fs.readFileSync(archivo, 'utf8')), false,
          `Revisar posible credencial en ${path.relative(raiz, archivo)} (valor oculto)`);
      }
    }
  }
  revisar(raiz);
});

test('los enlaces locales y las capturas de la documentación existen', () => {
  const documentos = ['README.md', ...fs.readdirSync(path.join(raiz, 'docs'))
    .filter(nombre => nombre.endsWith('.md')).map(nombre => `docs/${nombre}`)];
  for (const documento of documentos) {
    const texto = fs.readFileSync(path.join(raiz, documento), 'utf8');
    const rutas = [...texto.matchAll(/\[[^\]]*\]\(([^)]+)\)|<img[^>]*src="([^"]+)"/g)]
      .map(coincidencia => coincidencia[1] || coincidencia[2]);
    for (const ruta of rutas) {
      if (/^(https?:|#)/.test(ruta)) continue;
      assert.ok(fs.existsSync(path.resolve(raiz, path.dirname(documento), ruta.split('#')[0])), `${documento}: enlace roto ${ruta}`);
    }
  }
});

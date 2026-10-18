const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const net = require('node:net');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { setTimeout: esperar } = require('node:timers/promises');

const raiz = path.resolve(__dirname, '..');
const entrada = { mensajes: [{ role: 'system', content: 'Prueba ficticia' }, { role: 'user', content: 'Ejemplo' }] };

async function arrancar(t, entorno = {}) {
  const reserva = net.createServer();
  await new Promise(resolve => reserva.listen(0, '127.0.0.1', resolve));
  const puerto = reserva.address().port;
  await new Promise(resolve => reserva.close(resolve));
  const servidor = spawn('php', ['-S', `127.0.0.1:${puerto}`, '-t', '.', 'router.php'], {
    cwd: raiz,
    env: { ...process.env, FARMASTUDY_AI_ENABLED: '0', GROQ_API_KEY: '', ...entorno },
    stdio: 'ignore', windowsHide: true,
  });
  let errorInicio;
  servidor.on('error', error => { errorInicio = error; });
  t.after(() => {
    if (servidor.exitCode !== null || servidor.signalCode !== null) return;
    return new Promise(resolve => {
      servidor.once('exit', resolve);
      servidor.kill();
    });
  });
  const base = `http://127.0.0.1:${puerto}`;
  for (let i = 0; i < 60; i++) {
    if (errorInicio) throw errorInicio;
    if (servidor.exitCode !== null) throw new Error('PHP no pudo iniciar el servidor de pruebas.');
    try { await fetch(base); return base; } catch { await esperar(50); }
  }
  throw new Error('El servidor PHP no respondió a tiempo.');
}

test('HTTP: arranque sin IA, rutas privadas bloqueadas y errores JSON controlados', async t => {
  const base = await arrancar(t);
  const pagina = await fetch(base);
  const html = await pagina.text();
  assert.equal(pagina.status, 200);
  assert.match(html, /"iaDisponible":false/);
  assert.equal(pagina.headers.get('cache-control'), 'no-store');
  assert.doesNotMatch(html, /gsk_[A-Za-z0-9]{20,}/);
  assert.equal((await fetch(`${base}/js/nucleo/privacidad.js`)).status, 200);
  for (const ruta of ['/.gitignore', '/.htaccess', '/php/config.php', '/php/config.example.php', '/php/seguridad.php', '/php/groq-transporte.php', '/tests/seguridad.php', '/README.md']) {
    assert.equal((await fetch(base + ruta)).status, 404, ruta);
  }
  const url = `${base}/php/api-groq.php`;
  assert.equal((await fetch(url)).status, 405);
  const post = (body, headers = { 'Content-Type': 'application/json' }) => fetch(url, { method: 'POST', headers, body });
  assert.equal((await post('{}', { 'Content-Type': 'text/plain' })).status, 415);
  assert.equal((await post('{roto')).status, 400);
  assert.equal((await post(JSON.stringify({ mensajes: [] }))).status, 400);
  assert.equal((await post(JSON.stringify(entrada), { 'Content-Type': 'application/json', Origin: 'https://otro.invalid' })).status, 403);
  assert.equal((await post('x'.repeat(65537))).status, 413);
  const sinIA = await post(JSON.stringify(entrada));
  assert.equal(sinIA.status, 503);
  assert.equal(sinIA.headers.get('cache-control'), 'no-store');
  assert.equal(sinIA.headers.get('access-control-allow-origin'), null);
  const respuesta = await sinIA.json();
  assert.equal(typeof respuesta.error, 'string');
  assert.equal(respuesta.codigo, 'ia_no_configurada');
});

test('HTTP: cuota agotada devuelve 429 antes de contactar con el proveedor', async t => {
  const temporal = process.platform === 'win32'
    ? path.join(process.env.LOCALAPPDATA, 'Temp', 'opencode') : os.tmpdir();
  const directorio = await fs.mkdtemp(path.join(temporal, 'farmastudy-http-'));
  const estado = { global_dia: { ventana: Math.floor(Date.now() / 86400000), total: 200 }, ips: {} };
  await fs.writeFile(path.join(directorio, 'groq.json'), JSON.stringify(estado));
  t.after(async () => {
    await fs.unlink(path.join(directorio, 'groq.json'));
    await fs.rmdir(directorio);
  });
  const base = await arrancar(t, {
    FARMASTUDY_AI_ENABLED: '1', GROQ_API_KEY: 'clave-ficticia-solo-pruebas', FARMASTUDY_RATE_DIR: directorio,
  });
  const res = await fetch(`${base}/php/api-groq.php`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(entrada),
  });
  assert.equal(res.status, 429);
  assert.ok(Number(res.headers.get('retry-after')) > 0);
  assert.equal((await res.json()).codigo, 'limite_local');
});

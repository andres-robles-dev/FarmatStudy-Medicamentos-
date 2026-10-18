const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const net = require('node:net');
const { setTimeout: esperar } = require('node:timers/promises');

const raiz = path.resolve(__dirname, '..');

async function puertoLibre() {
  const servidor = net.createServer();
  await new Promise(resolve => servidor.listen(0, '127.0.0.1', resolve));
  const puerto = servidor.address().port;
  await new Promise(resolve => servidor.close(resolve));
  return puerto;
}

async function esperarDato(operacion) {
  for (let intento = 0; intento < 120; intento++) {
    try {
      const resultado = await operacion();
      if (resultado) return resultado;
    } catch { /* Esperar únicamente a procesos creados por esta prueba. */ }
    await esperar(50);
  }
  throw new Error('Tiempo agotado al preparar la prueba de interfaz.');
}

async function detener(proceso) {
  if (!proceso || proceso.exitCode !== null || proceso.signalCode !== null) return;
  await new Promise(resolve => {
    proceso.once('exit', resolve);
    proceso.kill();
  });
}

async function ejecutar() {
  const candidatos = [process.env.CHROME_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', '/usr/bin/google-chrome', '/usr/bin/chromium'];
  let navegador;
  for (const candidato of candidatos.filter(Boolean)) {
    try { await fs.access(candidato); navegador = candidato; break; } catch { /* Probar otra ubicación. */ }
  }
  if (!navegador) throw new Error('Instala Chrome/Chromium o define CHROME_PATH para esta prueba opcional.');
  const temporal = process.platform === 'win32' ? path.join(process.env.LOCALAPPDATA, 'Temp', 'opencode') : os.tmpdir();
  const perfil = await fs.mkdtemp(path.join(temporal, 'farmastudy-interfaz-'));
  let php;
  let chrome;
  let socket;
  try {
    const puerto = await puertoLibre();
    const base = `http://127.0.0.1:${puerto}`;
    php = spawn('php', ['-S', `127.0.0.1:${puerto}`, '-t', '.', 'router.php'], {
      cwd: raiz, stdio: 'ignore', windowsHide: true,
      env: { ...process.env, FARMASTUDY_AI_ENABLED: '0', GROQ_API_KEY: '' },
    });
    let falloProceso;
    php.on('error', error => { falloProceso = error; });
    await esperarDato(async () => {
      if (falloProceso) throw falloProceso;
      return (await fetch(base)).ok;
    });
    chrome = spawn(navegador, ['--headless=new', '--remote-debugging-port=0', '--remote-debugging-address=127.0.0.1',
      `--user-data-dir=${perfil}`, '--disable-background-networking', '--disable-extensions',
      '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore', windowsHide: true });
    chrome.on('error', error => { falloProceso = error; });
    const puertoCDP = await esperarDato(async () => {
      if (falloProceso) throw falloProceso;
      return Number((await fs.readFile(path.join(perfil, 'DevToolsActivePort'), 'utf8')).split('\n')[0]);
    });
    const paginas = await (await fetch(`http://127.0.0.1:${puertoCDP}/json/list`)).json();
    const pagina = paginas.find(p => p.type === 'page');
    socket = new WebSocket(pagina.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
    const pendientes = new Map();
    let id = 0;
    socket.addEventListener('message', evento => {
      const mensaje = JSON.parse(evento.data);
      const pendiente = pendientes.get(mensaje.id);
      if (!pendiente) return;
      pendientes.delete(mensaje.id);
      mensaje.error ? pendiente.reject(new Error(mensaje.error.message)) : pendiente.resolve(mensaje.result);
    });
    const llamar = (method, params = {}) => new Promise((resolve, reject) => {
      pendientes.set(++id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
    const evaluar = async expression => {
      const resultado = await llamar('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (resultado.exceptionDetails) throw new Error(resultado.exceptionDetails.text);
      return resultado.result.value;
    };
    await llamar('Page.enable');
    await llamar('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    await llamar('Page.navigate', { url: base });
    await esperarDato(() => evaluar('!!document.getElementById("consulta-input")'));
    assert.equal(await evaluar('window.PrivacidadConsulta.iaActiva'), false);
    assert.equal(await evaluar('window.PrivacidadConsulta.iaDisponible'), false);
    await evaluar('document.getElementById("consulta-input").value="ibuprofeno"; document.getElementById("consulta-enviar").click();');
    assert.ok(await evaluar('document.querySelectorAll(".consulta__resultado").length>0'));
    assert.equal(await evaluar('performance.getEntriesByType("resource").filter(r=>r.name.includes("api-groq.php")).length'), 0);
    assert.equal(await evaluar('localStorage.getItem("consulta-msg")'), null);

    await evaluar(`window.fetch=async function(){return {ok:false,status:502,json:async function(){return {codigo:'certificado_tls',error:'detalle interno oculto'};}};};
      window.PrivacidadConsulta.iaDisponible=true;
      var opcionIA=document.getElementById('consulta-usar-ia'); opcionIA.disabled=false; opcionIA.checked=true; opcionIA.dispatchEvent(new Event('change'));
      document.getElementById('consulta-input').value='que puedo recetar para el dolor de cabeza'; document.getElementById('consulta-enviar').click();`);
    await esperarDato(() => evaluar('!document.getElementById("consulta-enviar").disabled'));
    assert.match(await evaluar('document.getElementById("consulta-estado").textContent'), /certificado HTTPS/);
    assert.doesNotMatch(await evaluar('document.getElementById("consulta-mensajes").textContent'), /detalle interno oculto|Oral-B/);
    await evaluar(`window.fetch=async function(){return {ok:true,json:async function(){return {choices:[{message:{content:'Respuesta educativa simulada para verificar el chat.'}}]};}};};
      document.getElementById('consulta-input').value='Explica qué es un principio activo'; document.getElementById('consulta-enviar').click();`);
    await esperarDato(() => evaluar('!document.getElementById("consulta-enviar").disabled'));
    assert.match(await evaluar('document.getElementById("consulta-mensajes").textContent'), /Respuesta educativa simulada para verificar el chat/);
    assert.match(await evaluar('document.getElementById("consulta-estado").textContent'), /Respuesta recibida de Groq/);
    await evaluar(`document.getElementById('consulta-reiniciar').click();
      var opcionIA=document.getElementById('consulta-usar-ia'); opcionIA.checked=false; opcionIA.dispatchEvent(new Event('change'));
      window.PrivacidadConsulta.iaDisponible=false; opcionIA.disabled=true;`);

    await evaluar('window.navegarA("explorador"); document.querySelector("[data-accion=grupo][data-codigo=PF]").click(); document.querySelector("[data-accion=subgrupo][data-codigo=PF06]").click();');
    const antes = await evaluar('document.querySelectorAll(".med-card").length');
    await evaluar('window.navegarA("flashcards"); window.navegarA("explorador");');
    assert.equal(await evaluar('document.querySelectorAll(".med-card").length'), antes);
    assert.equal(await evaluar('document.querySelector("[data-accion=grupo][data-codigo=PF]").getAttribute("aria-expanded")'), 'true');

    const capturar = async nombre => {
      await evaluar('document.fonts.ready');
      await esperar(350);
      const imagen = await llamar('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      const destino = process.argv.includes('--capturas') ? path.join(raiz, 'docs/capturas') : perfil;
      await fs.writeFile(path.join(destino, nombre), Buffer.from(imagen.data, 'base64'));
    };
    await evaluar('document.querySelector("[data-accion=grupo][data-codigo=N]").click(); document.querySelector("[data-accion=subgrupo][data-codigo=N02]").click();');
    await capturar('explorador.png');
    await evaluar('window.navegarA("flashcards");');
    await capturar('flashcards.png');
    await evaluar('document.getElementById("flashcard").focus(); document.getElementById("flashcard").dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:true}));');
    assert.equal(await evaluar('document.getElementById("flashcard").getAttribute("aria-pressed")'), 'true');

    await evaluar(`window.navegarA('test'); for(var n=0;n<10;n++) {
      var texto=document.querySelector('.test__pregunta').textContent;
      var med=window.FarmaData.todos.find(p=>texto.endsWith(p.nombre+'?'));
      var campo=texto.includes('principio activo')?'principioActivo':texto.includes('laboratorio')?'laboratorio':'indicacion';
      Array.from(document.querySelectorAll('.test__opcion')).find(b=>b.textContent===med[campo]).click();
      document.getElementById('test-sig-btn').click();
    }`);
    assert.equal(await evaluar('document.querySelector(".test__resultado-nota").textContent'), '10/10');

    await llamar('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    await llamar('Emulation.setTouchEmulationEnabled', { enabled: true });
    await evaluar('window.navegarA("consulta"); document.getElementById("consulta-reiniciar").click();');
    assert.equal(await evaluar('innerWidth'), 390);
    const limites = await evaluar('({derecha:document.getElementById("consulta-input").getBoundingClientRect().right,ancho:innerWidth,alto:document.getElementById("consulta-input").getBoundingClientRect().bottom,altoPantalla:innerHeight})');
    assert.ok(limites.derecha <= limites.ancho && limites.alto < limites.altoPantalla, 'El input debe quedar dentro de la pantalla móvil.');
    await evaluar('document.getElementById("boton-menu").click();');
    assert.equal(await evaluar('document.getElementById("boton-menu").getAttribute("aria-expanded")'), 'true');
    await evaluar('document.querySelector("[data-modulo=flashcards]").click();');
    assert.equal(await evaluar('document.getElementById("boton-menu").getAttribute("aria-expanded")'), 'false');
    await evaluar('window.navegarA("consulta");');
    await capturar('consulta-movil.png');
    console.log('OK: escritorio/móvil, chat simulado con error TLS y recuperación, búsqueda sin falsos positivos, navegación PF, teclado y test 10/10.');
    if (process.argv.includes('--capturas')) console.log('Capturas guardadas en docs/capturas/.');
  } finally {
    if (socket) socket.close();
    await detener(chrome);
    await detener(php);
    await esperar(300);
    await fs.rm(perfil, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
}

ejecutar().catch(error => { console.error(error.message); process.exitCode = 1; });

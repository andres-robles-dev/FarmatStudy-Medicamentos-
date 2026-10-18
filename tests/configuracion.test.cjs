const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');

test('configuración: prioridad del entorno, archivo exterior y desactivación explícita', async () => {
  const temporal = process.platform === 'win32'
    ? path.join(process.env.LOCALAPPDATA, 'Temp', 'opencode') : os.tmpdir();
  const directorio = await fs.mkdtemp(path.join(temporal, 'farmastudy-config-'));
  const archivo = path.join(directorio, 'config.php');
  await fs.writeFile(archivo, "<?php define('GROQ_API_KEY', 'clave-ficticia-archivo');");
  function comprobar(entorno = {}, ruta = archivo) {
    const env = { ...process.env, FARMASTUDY_AI_ENABLED: '1', FARMASTUDY_CONFIG_FILE: ruta, ...entorno };
    if (!Object.hasOwn(entorno, 'GROQ_API_KEY')) delete env.GROQ_API_KEY;
    const resultado = spawnSync('php', ['-r', "$c=require 'php/config.php'; echo json_encode(['clave'=>$c['groq_api_key']]);"], {
      cwd: path.resolve(__dirname, '..'), env, encoding: 'utf8', windowsHide: true,
    });
    assert.equal(resultado.status, 0);
    return JSON.parse(resultado.stdout).clave;
  }
  try {
    assert.equal(comprobar(), 'clave-ficticia-archivo');
    assert.equal(comprobar({ GROQ_API_KEY: 'clave-ficticia-entorno' }), 'clave-ficticia-entorno');
    assert.equal(comprobar({ GROQ_API_KEY: '' }), '');
    assert.equal(comprobar({ FARMASTUDY_AI_ENABLED: '0' }), '');
    assert.equal(comprobar({ FARMASTUDY_AI_ENABLED: '0', GROQ_API_KEY: 'clave-ficticia-entorno' }), '');
    assert.equal(comprobar({}, path.join(directorio, 'no-existe.php')), '');
    assert.equal(comprobar({}, path.resolve(__dirname, '../php/config.example.php')), '');
  } finally {
    await fs.unlink(archivo);
    await fs.rmdir(directorio);
  }
});

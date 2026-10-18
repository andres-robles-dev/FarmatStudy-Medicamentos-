<?php
header('Cache-Control: no-store');
$iaDisponible = false;
try {
  $config = require __DIR__ . '/php/config.php';
  $iaDisponible = $config['ia_disponible'];
  unset($config);
} catch (Throwable $error) {
  $iaDisponible = false;
}
function version($archivo) {
  $ruta = __DIR__ . '/' . ltrim($archivo, '/');
  return file_exists($ruta) ? '?v=' . filemtime($ruta) : '';
}
?><!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="description" content="FarmaStudy: proyecto personal de aprendizaje con JavaScript y PHP. Catálogo educativo, flashcards y cuestionarios. No apto para uso clínico." />
  <title>FarmaStudy - Plataforma de Estudio Farmacológico</title>
  <link rel="icon" type="image/svg+xml" href="iconos/favicon.svg<?= version('iconos/favicon.svg') ?>" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="estilo/principal.css<?= version('estilo/principal.css') ?>" />
  <link rel="stylesheet" href="estilo/componentes.css<?= version('estilo/componentes.css') ?>" />
  <link rel="stylesheet" href="estilo/explorador.css<?= version('estilo/explorador.css') ?>" />
  <link rel="stylesheet" href="estilo/estudio.css<?= version('estilo/estudio.css') ?>" />
  <link rel="stylesheet" href="estilo/consulta.css<?= version('estilo/consulta.css') ?>" />
</head>
<body>
  <div id="app">
    <!-- PANTALLA DE CARGA -->
    <div id="pantalla-carga" class="pantalla-carga">
      <img class="pantalla-carga__logo" src="recursos/logo/farmastudy_logo.png" alt="FarmaStudy">
      <p class="pantalla-carga__subtitulo">Plataforma de Estudio Farmacológico</p>
      <div class="pantalla-carga__barra"><div></div></div>
    </div>
    <!-- CABECERA -->
    <header id="cabecera" class="cabecera">
      <div class="cabecera__izquierda">
        <button id="boton-menu" class="cabecera__boton-menu" title="Menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="cabecera__centro">
        <img class="cabecera__logo-img" src="recursos/logo/farmastudy_logo.png" alt="FarmaStudy">
      </div>
      <div class="cabecera__derecha">
        <span class="cabecera__contador" id="contador-medicamentos">0 medicamentos</span>
      </div>
    </header>

    <!-- OVERLAY MENÚ MÓVIL -->
    <div id="menu-overlay" class="menu-overlay"></div>

    <!-- CUERPO -->
    <div id="cuerpo" class="cuerpo">
      <!-- MENÚ LATERAL -->
      <nav id="menu-lateral" class="menu">
        <div class="menu__grupo">
          <span class="menu__etiqueta">ESTUDIO</span>
          <button class="menu__item menu__item--activo" data-modulo="consulta" title="Buscar en el catálogo educativo">
            <span class="menu__icono material-symbols-outlined">chat</span>
            <span class="menu__texto">Consulta Rápida</span>
          </button>
          <button class="menu__item" data-modulo="explorador" title="Explorar por clasificación ATC">
            <span class="menu__icono material-symbols-outlined">account_tree</span>
            <span class="menu__texto">Explorador ATC</span>
          </button>
          <button class="menu__item" data-modulo="flashcards" title="Modo estudio con tarjetas">
            <span class="menu__icono material-symbols-outlined">style</span>
            <span class="menu__texto">Flashcards</span>
          </button>
          <button class="menu__item" data-modulo="test" title="Ponte a prueba con tests">
            <span class="menu__icono material-symbols-outlined">edit_note</span>
            <span class="menu__texto">Test</span>
          </button>
        </div>
        <div class="menu__grupo">
          <span class="menu__etiqueta">CONSULTA</span>
          <button class="menu__item" data-modulo="laboratorios" title="Laboratorios farmacéuticos">
            <span class="menu__icono material-symbols-outlined">business</span>
            <span class="menu__texto">Laboratorios</span>
          </button>
        </div>
        <div class="menu__grupo">
          <span class="menu__etiqueta">INFORMACIÓN</span>
          <button class="menu__item" data-modulo="acerca" title="Acerca de FarmaStudy">
            <span class="menu__icono material-symbols-outlined">info</span>
            <span class="menu__texto">Acerca de</span>
          </button>
        </div>
      </nav>

      <!-- ÁREA DE TRABAJO -->
      <main id="area-trabajo" class="area-trabajo">
      </main>
    </div>

    <!-- BARRA DE ESTADO -->
    <footer id="barra-estado" class="barra-estado">
      <span id="estado-texto" class="barra-estado__texto">Listo</span>
      <span class="barra-estado__texto">FarmaStudy v1.0</span>
    </footer>
  </div>

  <!-- SCRIPTS -->
  <script>window.FarmaStudyConfig = <?= json_encode(['iaDisponible' => $iaDisponible]) ?>;</script>
  <script src="js/nucleo/estado.js<?= version('js/nucleo/estado.js') ?>"></script>
  <script src="js/nucleo/utilidades.js<?= version('js/nucleo/utilidades.js') ?>"></script>
  <script src="js/nucleo/enrutador.js<?= version('js/nucleo/enrutador.js') ?>"></script>
  <script src="js/nucleo/privacidad.js<?= version('js/nucleo/privacidad.js') ?>"></script>
  <script src="js/nucleo/ia-orquestador.js<?= version('js/nucleo/ia-orquestador.js') ?>"></script>
  <script src="js/nucleo/cuestionario.js<?= version('js/nucleo/cuestionario.js') ?>"></script>
  <script src="js/nucleo/farmadata.js<?= version('js/nucleo/farmadata.js') ?>"></script>
  <script src="datos/medicamentos.js<?= version('datos/medicamentos.js') ?>"></script>
  <script src="datos/parafarmacia.js<?= version('datos/parafarmacia.js') ?>"></script>
  <script src="datos/laboratorios.js<?= version('datos/laboratorios.js') ?>"></script>
  <script src="datos/clasificacion-atc.js<?= version('datos/clasificacion-atc.js') ?>"></script>
  <script src="js/modulos/modulo-explorador.js<?= version('js/modulos/modulo-explorador.js') ?>"></script>
  <script src="js/modulos/modulo-ficha.js<?= version('js/modulos/modulo-ficha.js') ?>"></script>
  <script src="js/modulos/modulo-consulta.js<?= version('js/modulos/modulo-consulta.js') ?>"></script>
  <script src="js/modulos/modulo-flashcards.js<?= version('js/modulos/modulo-flashcards.js') ?>"></script>
  <script src="js/modulos/modulo-test.js<?= version('js/modulos/modulo-test.js') ?>"></script>
  <script src="js/modulos/modulo-laboratorios.js<?= version('js/modulos/modulo-laboratorios.js') ?>"></script>
  <script src="js/modulos/modulo-acerca.js<?= version('js/modulos/modulo-acerca.js') ?>"></script>
  <script src="js/principal.js<?= version('js/principal.js') ?>"></script>
</body>
</html>

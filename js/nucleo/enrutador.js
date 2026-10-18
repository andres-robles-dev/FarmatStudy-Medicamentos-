(function() {
  // FARMASTUDY - Enrutador SPA
  // Gestiona el registro de módulos y la navegación entre ellos.
  // También controla el menú lateral, ya que está ligado a la navegación.

  var modulos = {};

  // ─── Registro y consulta de módulos ───
  window.registrarModulo = function registrarModulo(nombre, controlador) {
    modulos[nombre] = controlador;
  };

  window.obtenerModulo = function obtenerModulo(nombre) {
    return modulos[nombre] || null;
  };

  // ─── Navegación ───
  window.navegarA = function navegarA(nombre) {
    var estado = obtenerEstado();
    if (estado.moduloActivo === nombre) return;
    var origen = estado.moduloActivo;
    var moduloAnterior = modulos[origen];
    if (moduloAnterior && moduloAnterior.destruir) moduloAnterior.destruir();
    if (nombre === 'ficha' && origen) {
      establecerEstado('moduloOrigen', origen);
    }
    establecerEstado('moduloActivo', nombre);
    var modulo = modulos[nombre];
    if (modulo && modulo.iniciar) modulo.iniciar();
    var titulo = document.getElementById('titulo-modulo');
    if (titulo) titulo.textContent = modulo && modulo.titulo ? modulo.titulo : 'FarmaStudy';
    var items = document.querySelectorAll('.menu__item');
    items.forEach(function(item) {
      item.classList.toggle('menu__item--activo', item.dataset.modulo === nombre);
    });
    var barra = document.getElementById('estado-texto');
    if (barra) barra.textContent = 'M\u00f3dulo: ' + (modulo && modulo.titulo ? modulo.titulo : nombre);
  };

  // ─── Menú móvil ───
  function toggleScrollLock(bloquear) {
    document.body.classList.toggle('scroll-lock', bloquear);
  }

  function cerrarMenuMobile() {
    var menu = document.getElementById('menu-lateral');
    var overlay = document.getElementById('menu-overlay');
    var boton = document.getElementById('boton-menu');
    if (menu) menu.classList.remove('menu--abierto-mobile');
    if (overlay) overlay.classList.remove('menu-overlay--visible');
    if (boton) boton.setAttribute('aria-expanded', 'false');
    toggleScrollLock(false);
  }

  function esMovil() {
    return window.innerWidth < 768;
  }

  function sincronizarMenu() {
    var menu = document.getElementById('menu-lateral');
    if (!menu) return;
    if (!esMovil()) {
      menu.classList.remove('menu--abierto-mobile');
      menu.classList.remove('menu--cerrado');
      toggleScrollLock(false);
    }
  }

  window.addEventListener('resize', sincronizarMenu, { passive: true });

  // ─── Inicialización ───
  window.initEnrutador = function initEnrutador() {
    document.querySelectorAll('.menu__item[data-modulo]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (esMovil()) cerrarMenuMobile();
        navegarA(btn.dataset.modulo);
      });
    });

    var botonMenu = document.getElementById('boton-menu');
    if (botonMenu) {
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.setAttribute('aria-label', 'Abrir men\u00fa');
      botonMenu.setAttribute('aria-controls', 'menu-lateral');

      botonMenu.addEventListener('click', function() {
        var menu = document.getElementById('menu-lateral');
        if (esMovil()) {
          if (menu) {
            var abierto = menu.classList.toggle('menu--abierto-mobile');
            var overlay = document.getElementById('menu-overlay');
            if (overlay) overlay.classList.toggle('menu-overlay--visible', abierto);
            botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
            botonMenu.setAttribute('aria-label', abierto ? 'Cerrar men\u00fa' : 'Abrir men\u00fa');
            toggleScrollLock(abierto);
          }
        } else {
          if (menu) {
            var abierto = !menu.classList.contains('menu--cerrado');
            menu.classList.toggle('menu--cerrado');
            establecerEstado('menuAbierto', !abierto);
          }
        }
      });
    }

    var menuOverlay = document.getElementById('menu-overlay');
    if (menuOverlay) {
      menuOverlay.addEventListener('click', cerrarMenuMobile);
      menuOverlay.addEventListener('touchstart', function(e) {
        cerrarMenuMobile();
      }, { passive: true });
    }
  };
})();

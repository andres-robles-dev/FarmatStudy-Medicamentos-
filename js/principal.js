(function() {

var registrarModulo = window.registrarModulo;
var initEnrutador = window.initEnrutador;
var navegarA = window.navegarA;
var FarmaData = window.FarmaData;
var ModuloConsulta = window.ModuloConsulta;
var ModuloExplorador = window.ModuloExplorador;
var ModuloFicha = window.ModuloFicha;
var ModuloFlashcards = window.ModuloFlashcards;
var ModuloTest = window.ModuloTest;
var ModuloLaboratorios = window.ModuloLaboratorios;
var ModuloAcerca = window.ModuloAcerca;

function iniciarReloj() {
  function actualizar() {
    var ahora = new Date();
    var h = String(ahora.getHours()).padStart(2, '0');
    var m = String(ahora.getMinutes()).padStart(2, '0');
    var s = String(ahora.getSeconds()).padStart(2, '0');
    var barra = document.getElementById('estado-texto');
    if (barra) {
      var texto = barra.textContent;
      if (texto.indexOf('Módulo:') !== 0) {
        barra.textContent = h + ':' + m + ':' + s;
      }
    }
  }
  actualizar();
  setInterval(actualizar, 1000);
}

function mostrarContador() {
  var el = document.getElementById('contador-medicamentos');
  if (el && FarmaData) el.textContent = FarmaData.todos.length + ' productos';
}

function init() {
  registrarModulo('consulta', ModuloConsulta);
  registrarModulo('explorador', ModuloExplorador);
  registrarModulo('ficha', ModuloFicha);
  registrarModulo('flashcards', ModuloFlashcards);
  registrarModulo('test', ModuloTest);
  registrarModulo('laboratorios', ModuloLaboratorios);
  registrarModulo('acerca', ModuloAcerca);
  initEnrutador();
  iniciarReloj();
  mostrarContador();
  setTimeout(function() {
    var splash = document.getElementById('pantalla-carga');
    if (splash) splash.remove();
    navegarA('consulta');
  }, 1500);
}

document.addEventListener('DOMContentLoaded', init);

})();

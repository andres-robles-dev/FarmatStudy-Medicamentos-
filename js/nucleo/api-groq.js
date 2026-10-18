(function() {

window.consultarIA = async function(datos) {
  if (!window.IaOrquestador) return null;
  var resultado = await window.IaOrquestador.consultar(
    datos.texto, datos.tipo, datos.historial, datos.medicamentosPrevios, datos.signal
  );
  return resultado.textoIA;
};

})();

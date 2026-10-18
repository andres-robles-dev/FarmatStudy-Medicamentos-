(function() {

window.ModuloAcerca = {
  titulo: 'Acerca de',
  iniciar() {
    const area = document.getElementById('area-trabajo');
    area.innerHTML = `<div class="acerca anim-aparecer">
      <div class="acerca__icono material-symbols-outlined">menu_book</div>
      <div class="acerca__titulo">FarmaStudy</div>
      <div class="acerca__version">v1.0.0</div>
      <div class="acerca__texto">
        <p>Proyecto personal de aprendizaje de programación con temática farmacológica, desarrollado por Andrés Robles como parte de su portafolio.</p>
        <br>
        <p>Incluye <strong>${window.FarmaData.todos.length} productos</strong> en un catálogo local de medicamentos y parafarmacia, con fichas, grupos ATC y categorías educativas.</p>
        <br>
        <p>Su objetivo es practicar JavaScript modular, manipulación del DOM, estado compartido, CSS adaptable y comunicación con un servidor PHP.</p>
        <br>
        <p><strong>Módulos disponibles:</strong></p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">account_tree</span> Explorador ATC — Navega por la clasificación anatómico-terapéutica</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">chat</span> Consulta rápida — Búsqueda local e IA experimental opcional con Groq</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">style</span> Flashcards — Modo estudio con tarjetas interactivas</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">edit_note</span> Test — Pon a prueba tus conocimientos</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">business</span> Laboratorios — Explora los laboratorios farmacéuticos</p>
        <br>
        <p><strong>Solo para demostración y aprendizaje.</strong> Los datos y las respuestas de IA pueden contener errores; no están validados para uso clínico. No utilizar para diagnosticar, prescribir ni decidir tratamientos.</p>
        <br>
        <p>La IA requiere activación voluntaria y envía la consulta y parte del contexto a Groq. No introduzcas datos personales ni casos reales. La conversación nueva permanece solo en memoria y se pierde al recargar.</p>
        <br>
        <p style="font-size:12px;color:#999">FarmaStudy © 2026</p>
      </div>
    </div>`;
  }
};

})();

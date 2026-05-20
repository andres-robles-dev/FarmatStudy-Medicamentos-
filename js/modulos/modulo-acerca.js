// FARMASTUDY - ACERCA DE

export default {
  titulo: 'Acerca de',
  iniciar() {
    const area = document.getElementById('area-trabajo');
    area.innerHTML = `<div class="acerca anim-aparecer">
      <div class="acerca__icono material-symbols-outlined">menu_book</div>
      <div class="acerca__titulo">FarmaStudy</div>
      <div class="acerca__version">v1.0.0</div>
      <div class="acerca__texto">
        <p>Plataforma de estudio farmacológico diseñada para estudiantes de Farmacia.</p>
        <br>
        <p>Incluye <strong>100 medicamentos reales</strong> del mercado español con su clasificación ATC completa, principios activos, laboratorios, indicaciones y presentaciones.</p>
        <br>
        <p><strong>Módulos disponibles:</strong></p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">account_tree</span> Explorador ATC — Navega por la clasificación anatómico-terapéutica</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">search</span> Buscador — Encuentra medicamentos por nombre, principio activo o laboratorio</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">style</span> Flashcards — Modo estudio con tarjetas interactivas</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">edit_note</span> Test — Pon a prueba tus conocimientos</p>
        <p><span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">business</span> Laboratorios — Explora los laboratorios farmacéuticos</p>
        <br>
        <p>Datos basados en la clasificación ATC/DDD de la OMS y el mercado farmacéutico español.</p>
        <br>
        <p style="font-size:12px;color:#999">FarmaStudy © 2026</p>
      </div>
    </div>`;
  }
};

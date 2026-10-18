(function() {
  // FARMASTUDY - Clasificación ATC completa
  // 14 grupos anatómicos (nivel 1) con sus subgrupos (nivel 2)
  window.arbolAtc = [
    {
      codigo: "A", nombre: "Tracto alimentario y metabolismo", icono: "<span class=\"material-symbols-outlined\">restaurant</span>",
      hijos: [
        { codigo: "A01", nombre: "Preparados estomatol\u00f3gicos", nivel: 2 },
        { codigo: "A02", nombre: "Anti\u00e1cidos, antiflatulentos y antiulcerosos", nivel: 2 },
        { codigo: "A03", nombre: "Antiespasm\u00f3dicos y anticolin\u00e9rgicos", nivel: 2 },
        { codigo: "A04", nombre: "Antiem\u00e9ticos y antin\u00e1useas", nivel: 2 },
        { codigo: "A05", nombre: "Terapia biliar y hep\u00e1tica", nivel: 2 },
        { codigo: "A06", nombre: "Laxantes", nivel: 2 },
        { codigo: "A07", nombre: "Antidiarreicos y antiinflamatorios intestinales", nivel: 2 },
        { codigo: "A08", nombre: "Antiobesidad (excl. diet\u00e9ticos)", nivel: 2 },
        { codigo: "A09", nombre: "Digestivos (incl. enzimas)", nivel: 2 },
        { codigo: "A10", nombre: "Antidiab\u00e9ticos", nivel: 2 },
        { codigo: "A11", nombre: "Vitaminas", nivel: 2 },
        { codigo: "A12", nombre: "Suplementos minerales", nivel: 2 },
        { codigo: "A14", nombre: "Agentes anab\u00f3licos sist\u00e9micos", nivel: 2 },
        { codigo: "A16", nombre: "Otros productos para tracto alimentario", nivel: 2 },
      ]
    },
    {
      codigo: "B", nombre: "Sangre y \u00f3rganos hematopoy\u00e9ticos", icono: "<span class=\"material-symbols-outlined\">water_drop</span>",
      hijos: [
        { codigo: "B01", nombre: "Anticoagulantes y antiagregantes", nivel: 2 },
        { codigo: "B02", nombre: "Antihemorr\u00e1gicos", nivel: 2 },
        { codigo: "B03", nombre: "Antian\u00e9micos (hierro, \u00e1cido f\u00f3lico, B12)", nivel: 2 },
        { codigo: "B05", nombre: "Sustitutos del plasma y soluciones intravenosas", nivel: 2 },
        { codigo: "B06", nombre: "Otros preparados hematol\u00f3gicos", nivel: 2 },
      ]
    },
    {
      codigo: "C", nombre: "Sistema cardiovascular", icono: "<span class=\"material-symbols-outlined\">favorite</span>",
      hijos: [
        { codigo: "C01", nombre: "Cardiot\u00f3nicos y antiarr\u00edtmicos", nivel: 2 },
        { codigo: "C02", nombre: "Antihipertensivos", nivel: 2 },
        { codigo: "C03", nombre: "Diur\u00e9ticos", nivel: 2 },
        { codigo: "C04", nombre: "Vasodilatadores perif\u00e9ricos", nivel: 2 },
        { codigo: "C05", nombre: "Vasoprotectores y antivaricosos", nivel: 2 },
        { codigo: "C07", nombre: "Betabloqueantes", nivel: 2 },
        { codigo: "C08", nombre: "Bloqueantes de canales de calcio", nivel: 2 },
        { codigo: "C09", nombre: "IECA y ARA-II", nivel: 2 },
        { codigo: "C10", nombre: "Hipolipemiantes (estatinas, fibratos)", nivel: 2 },
      ]
    },
    {
      codigo: "D", nombre: "Dermatol\u00f3gicos", icono: "<span class=\"material-symbols-outlined\">spa</span>",
      hijos: [
        { codigo: "D01", nombre: "Antif\u00fangicos dermatol\u00f3gicos", nivel: 2 },
        { codigo: "D02", nombre: "Emolientes y protectores", nivel: 2 },
        { codigo: "D03", nombre: "Cicatrizantes", nivel: 2 },
        { codigo: "D04", nombre: "Antipruriginosos", nivel: 2 },
        { codigo: "D05", nombre: "Antipsori\u00e1sicos", nivel: 2 },
        { codigo: "D06", nombre: "Antibi\u00f3ticos y antis\u00e9pticos dermatol\u00f3gicos", nivel: 2 },
        { codigo: "D07", nombre: "Corticoides dermatol\u00f3gicos", nivel: 2 },
        { codigo: "D08", nombre: "Antis\u00e9pticos y desinfectantes", nivel: 2 },
        { codigo: "D10", nombre: "Preparados antiacn\u00e9", nivel: 2 },
        { codigo: "D11", nombre: "Otros dermatol\u00f3gicos", nivel: 2 },
      ]
    },
    {
      codigo: "G", nombre: "Sistema genitourinario y hormonas sexuales", icono: "<span class=\"material-symbols-outlined\">science</span>",
      hijos: [
        { codigo: "G01", nombre: "Antiinfecciosos ginecol\u00f3gicos", nivel: 2 },
        { codigo: "G02", nombre: "Otros productos ginecol\u00f3gicos", nivel: 2 },
        { codigo: "G03", nombre: "Hormonas sexuales y anticonceptivos", nivel: 2 },
        { codigo: "G04", nombre: "Urol\u00f3gicos (HPB, incontinencia)", nivel: 2 },
      ]
    },
    {
      codigo: "H", nombre: "Preparados hormonales sist\u00e9micos", icono: "<span class=\"material-symbols-outlined\">biotech</span>",
      hijos: [
        { codigo: "H01", nombre: "Hormonas hipotal\u00e1micas e hipofisarias", nivel: 2 },
        { codigo: "H02", nombre: "Corticoides sist\u00e9micos", nivel: 2 },
        { codigo: "H03", nombre: "Hormonas tiroideas y antitiroideos", nivel: 2 },
        { codigo: "H04", nombre: "Hormonas pancre\u00e1ticas", nivel: 2 },
        { codigo: "H05", nombre: "Homeostasis del calcio", nivel: 2 },
      ]
    },
    {
      codigo: "J", nombre: "Antiinfecciosos generales", icono: "<span class=\"material-symbols-outlined\">pill</span>",
      hijos: [
        { codigo: "J01", nombre: "Antibacterianos sist\u00e9micos", nivel: 2 },
        { codigo: "J02", nombre: "Antif\u00fangicos sist\u00e9micos", nivel: 2 },
        { codigo: "J04", nombre: "Antimicobacterianos", nivel: 2 },
        { codigo: "J05", nombre: "Antivirales sist\u00e9micos", nivel: 2 },
        { codigo: "J06", nombre: "Inmunoglobulinas y anticuerpos", nivel: 2 },
        { codigo: "J07", nombre: "Vacunas", nivel: 2 },
      ]
    },
    {
      codigo: "L", nombre: "Antineopl\u00e1sicos e inmunomoduladores", icono: "<span class=\"material-symbols-outlined\">healing</span>",
      hijos: [
        { codigo: "L01", nombre: "Antineopl\u00e1sicos (quimioterapia)", nivel: 2 },
        { codigo: "L02", nombre: "Terapia hormonal oncol\u00f3gica", nivel: 2 },
        { codigo: "L03", nombre: "Inmunoestimulantes", nivel: 2 },
        { codigo: "L04", nombre: "Inmunosupresores", nivel: 2 },
      ]
    },
    {
      codigo: "M", nombre: "Sistema musculoesquel\u00e9tico", icono: "<span class=\"material-symbols-outlined\">accessibility_new</span>",
      hijos: [
        { codigo: "M01", nombre: "Antiinflamatorios y antirreum\u00e1ticos", nivel: 2 },
        { codigo: "M02", nombre: "T\u00f3picos para dolor musculoesquel\u00e9tico", nivel: 2 },
        { codigo: "M03", nombre: "Relajantes musculares", nivel: 2 },
        { codigo: "M04", nombre: "Antigotosos", nivel: 2 },
        { codigo: "M05", nombre: "F\u00e1rmacos para enfermedades \u00f3seas", nivel: 2 },
        { codigo: "M09", nombre: "Otros musculoesquel\u00e9ticos", nivel: 2 },
      ]
    },
    {
      codigo: "N", nombre: "Sistema nervioso", icono: "<span class=\"material-symbols-outlined\">psychology</span>",
      hijos: [
        { codigo: "N01", nombre: "Anest\u00e9sicos", nivel: 2 },
        { codigo: "N02", nombre: "Analg\u00e9sicos y antipir\u00e9ticos", nivel: 2 },
        { codigo: "N03", nombre: "Antiepil\u00e9pticos", nivel: 2 },
        { codigo: "N04", nombre: "Antiparkinsonianos", nivel: 2 },
        { codigo: "N05", nombre: "Psicol\u00e9pticos (ansiol\u00edticos, antipsic\u00f3ticos, hipn\u00f3ticos)", nivel: 2 },
        { codigo: "N06", nombre: "Psicoanal\u00e9pticos (antidepresivos, estimulantes)", nivel: 2 },
        { codigo: "N07", nombre: "Otros nerviosos (antivertiginosos, antidemencia)", nivel: 2 },
      ]
    },
    {
      codigo: "P", nombre: "Antiparasitarios", icono: "<span class=\"material-symbols-outlined\">pest_control</span>",
      hijos: [
        { codigo: "P01", nombre: "Antiprotozoarios", nivel: 2 },
        { codigo: "P02", nombre: "Antihelm\u00ednticos", nivel: 2 },
        { codigo: "P03", nombre: "Ectoparasiticidas (piojos, sarna)", nivel: 2 },
      ]
    },
    {
      codigo: "R", nombre: "Sistema respiratorio", icono: "<span class=\"material-symbols-outlined\">air</span>",
      hijos: [
        { codigo: "R01", nombre: "Nasales (descongestivos, corticoides)", nivel: 2 },
        { codigo: "R02", nombre: "Faringe (antis\u00e9pticos, anest\u00e9sicos)", nivel: 2 },
        { codigo: "R03", nombre: "Antiasm\u00e1ticos y EPOC (broncodilatadores, corticoides)", nivel: 2 },
        { codigo: "R05", nombre: "Antitusivos y expectorantes", nivel: 2 },
        { codigo: "R06", nombre: "Antihistam\u00ednicos sist\u00e9micos", nivel: 2 },
        { codigo: "R07", nombre: "Otros respiratorios", nivel: 2 },
      ]
    },
    {
      codigo: "S", nombre: "\u00d3rganos de los sentidos", icono: "<span class=\"material-symbols-outlined\">visibility</span>",
      hijos: [
        { codigo: "S01", nombre: "Oftalmol\u00f3gicos", nivel: 2 },
        { codigo: "S02", nombre: "Otol\u00f3gicos (o\u00eddos)", nivel: 2 },
        { codigo: "S03", nombre: "Preparados para ojos y o\u00eddos combinados", nivel: 2 },
      ]
    },
    {
      codigo: "V", nombre: "Varios", icono: "<span class=\"material-symbols-outlined\">construction</span>",
      hijos: [
        { codigo: "V01", nombre: "Al\u00e9rgenos", nivel: 2 },
        { codigo: "V03", nombre: "Ant\u00eddotos y quelantes", nivel: 2 },
        { codigo: "V04", nombre: "Diagn\u00f3sticos", nivel: 2 },
        { codigo: "V06", nombre: "Nutrientes generales", nivel: 2 },
        { codigo: "V07", nombre: "Soluciones intravenosas y sueros", nivel: 2 },
        { codigo: "V08", nombre: "Medios de contraste", nivel: 2 },
        { codigo: "V20", nombre: "Vendajes quir\u00fargicos", nivel: 2 },
      ]
    },
    {
      codigo: "PF", nombre: "Parafarmacia y cuidado personal", icono: "<span class=\"material-symbols-outlined\">spa</span>",
      hijos: [
        { codigo: "PF01", nombre: "Dermocosm\u00e9tica facial", nivel: 2 },
        { codigo: "PF02", nombre: "Dermocosm\u00e9tica corporal", nivel: 2 },
        { codigo: "PF03", nombre: "Higiene e higiene \u00edntima", nivel: 2 },
        { codigo: "PF04", nombre: "Cuidado capilar", nivel: 2 },
        { codigo: "PF05", nombre: "Higiene bucodental", nivel: 2 },
        { codigo: "PF06", nombre: "Cuidado del beb\u00e9", nivel: 2 },
        { codigo: "PF07", nombre: "Complementos alimenticios", nivel: 2 },
        { codigo: "PF08", nombre: "Cuidado ocular", nivel: 2 },
        { codigo: "PF09", nombre: "Material sanitario y ortopedia", nivel: 2 },
      ]
    }
  ];
})();

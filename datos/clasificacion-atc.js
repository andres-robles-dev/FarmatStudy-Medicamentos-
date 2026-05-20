// FARMASTUDY - CLASIFICACIÓN ATC (Anatomical Therapeutic Chemical)
// Nivel 1 (14 grupos anatómicos) + Nivel 2 (subgrupos terapéuticos) + Nivel 3 (subgrupos farmacológicos)

export const arbolAtc = [
  {
    codigo: "A", nombre: "Tracto alimentario y metabolismo", icono: "<span class=\"material-symbols-outlined\">restaurant</span>",
    hijos: [
      { codigo: "A01", nombre: "Preparados estomatológicos", nivel: 2 },
      { codigo: "A02", nombre: "Antiácidos, antiflatulentos y antiulcerosos", nivel: 2 },
      { codigo: "A03", nombre: "Antiespasmódicos y anticolinérgicos", nivel: 2 },
      { codigo: "A04", nombre: "Antieméticos y antináuseas", nivel: 2 },
      { codigo: "A05", nombre: "Terapia biliar y hepática", nivel: 2 },
      { codigo: "A06", nombre: "Laxantes", nivel: 2 },
      { codigo: "A07", nombre: "Antidiarreicos y antiinflamatorios intestinales", nivel: 2 },
      { codigo: "A08", nombre: "Antiobesidad (excl. dietéticos)", nivel: 2 },
      { codigo: "A09", nombre: "Digestivos (incl. enzimas)", nivel: 2 },
      { codigo: "A10", nombre: "Antidiabéticos", nivel: 2 },
      { codigo: "A11", nombre: "Vitaminas", nivel: 2 },
      { codigo: "A12", nombre: "Suplementos minerales", nivel: 2 },
      { codigo: "A14", nombre: "Agentes anabólicos sistémicos", nivel: 2 },
      { codigo: "A16", nombre: "Otros productos para tracto alimentario", nivel: 2 },
    ]
  },
  {
    codigo: "B", nombre: "Sangre y órganos hematopoyéticos", icono: "<span class=\"material-symbols-outlined\">water_drop</span>",
    hijos: [
      { codigo: "B01", nombre: "Anticoagulantes y antiagregantes", nivel: 2 },
      { codigo: "B02", nombre: "Antihemorrágicos", nivel: 2 },
      { codigo: "B03", nombre: "Antianémicos (hierro, ácido fólico, B12)", nivel: 2 },
      { codigo: "B05", nombre: "Sustitutos del plasma y soluciones intravenosas", nivel: 2 },
      { codigo: "B06", nombre: "Otros preparados hematológicos", nivel: 2 },
    ]
  },
  {
    codigo: "C", nombre: "Sistema cardiovascular", icono: "<span class=\"material-symbols-outlined\">favorite</span>",
    hijos: [
      { codigo: "C01", nombre: "Cardiotónicos y antiarrítmicos", nivel: 2 },
      { codigo: "C02", nombre: "Antihipertensivos", nivel: 2 },
      { codigo: "C03", nombre: "Diuréticos", nivel: 2 },
      { codigo: "C04", nombre: "Vasodilatadores periféricos", nivel: 2 },
      { codigo: "C05", nombre: "Vasoprotectores y antivaricosos", nivel: 2 },
      { codigo: "C07", nombre: "Betabloqueantes", nivel: 2 },
      { codigo: "C08", nombre: "Bloqueantes de canales de calcio", nivel: 2 },
      { codigo: "C09", nombre: "IECA y ARA-II", nivel: 2 },
      { codigo: "C10", nombre: "Hipolipemiantes (estatinas, fibratos)", nivel: 2 },
    ]
  },
  {
    codigo: "D", nombre: "Dermatológicos", icono: "<span class=\"material-symbols-outlined\">spa</span>",
    hijos: [
      { codigo: "D01", nombre: "Antifúngicos dermatológicos", nivel: 2 },
      { codigo: "D02", nombre: "Emolientes y protectores", nivel: 2 },
      { codigo: "D03", nombre: "Cicatrizantes", nivel: 2 },
      { codigo: "D04", nombre: "Antipruriginosos", nivel: 2 },
      { codigo: "D05", nombre: "Antipsoriásicos", nivel: 2 },
      { codigo: "D06", nombre: "Antibióticos y antisépticos dermatológicos", nivel: 2 },
      { codigo: "D07", nombre: "Corticoides dermatológicos", nivel: 2 },
      { codigo: "D08", nombre: "Antisépticos y desinfectantes", nivel: 2 },
      { codigo: "D10", nombre: "Preparados antiacné", nivel: 2 },
      { codigo: "D11", nombre: "Otros dermatológicos", nivel: 2 },
    ]
  },
  {
    codigo: "G", nombre: "Sistema genitourinario y hormonas sexuales", icono: "<span class=\"material-symbols-outlined\">science</span>",
    hijos: [
      { codigo: "G01", nombre: "Antiinfecciosos ginecológicos", nivel: 2 },
      { codigo: "G02", nombre: "Otros productos ginecológicos", nivel: 2 },
      { codigo: "G03", nombre: "Hormonas sexuales y anticonceptivos", nivel: 2 },
      { codigo: "G04", nombre: "Urológicos (HPB, incontinencia)", nivel: 2 },
    ]
  },
  {
    codigo: "H", nombre: "Preparados hormonales sistémicos", icono: "<span class=\"material-symbols-outlined\">biotech</span>",
    hijos: [
      { codigo: "H01", nombre: "Hormonas hipotalámicas e hipofisarias", nivel: 2 },
      { codigo: "H02", nombre: "Corticoides sistémicos", nivel: 2 },
      { codigo: "H03", nombre: "Hormonas tiroideas y antitiroideos", nivel: 2 },
      { codigo: "H04", nombre: "Hormonas pancreáticas", nivel: 2 },
      { codigo: "H05", nombre: "Homeostasis del calcio", nivel: 2 },
    ]
  },
  {
    codigo: "J", nombre: "Antiinfecciosos generales", icono: "<span class=\"material-symbols-outlined\">pill</span>",
    hijos: [
      { codigo: "J01", nombre: "Antibacterianos sistémicos", nivel: 2 },
      { codigo: "J02", nombre: "Antifúngicos sistémicos", nivel: 2 },
      { codigo: "J04", nombre: "Antimicobacterianos", nivel: 2 },
      { codigo: "J05", nombre: "Antivirales sistémicos", nivel: 2 },
      { codigo: "J06", nombre: "Inmunoglobulinas y anticuerpos", nivel: 2 },
      { codigo: "J07", nombre: "Vacunas", nivel: 2 },
    ]
  },
  {
    codigo: "L", nombre: "Antineoplásicos e inmunomoduladores", icono: "<span class=\"material-symbols-outlined\">healing</span>",
    hijos: [
      { codigo: "L01", nombre: "Antineoplásicos (quimioterapia)", nivel: 2 },
      { codigo: "L02", nombre: "Terapia hormonal oncológica", nivel: 2 },
      { codigo: "L03", nombre: "Inmunoestimulantes", nivel: 2 },
      { codigo: "L04", nombre: "Inmunosupresores", nivel: 2 },
    ]
  },
  {
    codigo: "M", nombre: "Sistema musculoesquelético", icono: "<span class=\"material-symbols-outlined\">accessibility_new</span>",
    hijos: [
      { codigo: "M01", nombre: "Antiinflamatorios y antirreumáticos", nivel: 2 },
      { codigo: "M02", nombre: "Tópicos para dolor musculoesquelético", nivel: 2 },
      { codigo: "M03", nombre: "Relajantes musculares", nivel: 2 },
      { codigo: "M04", nombre: "Antigotosos", nivel: 2 },
      { codigo: "M05", nombre: "Fármacos para enfermedades óseas", nivel: 2 },
      { codigo: "M09", nombre: "Otros musculoesqueléticos", nivel: 2 },
    ]
  },
  {
    codigo: "N", nombre: "Sistema nervioso", icono: "<span class=\"material-symbols-outlined\">psychology</span>",
    hijos: [
      { codigo: "N01", nombre: "Anestésicos", nivel: 2 },
      { codigo: "N02", nombre: "Analgésicos y antipiréticos", nivel: 2 },
      { codigo: "N03", nombre: "Antiepilépticos", nivel: 2 },
      { codigo: "N04", nombre: "Antiparkinsonianos", nivel: 2 },
      { codigo: "N05", nombre: "Psicolépticos (ansiolíticos, antipsicóticos, hipnóticos)", nivel: 2 },
      { codigo: "N06", nombre: "Psicoanalépticos (antidepresivos, estimulantes)", nivel: 2 },
      { codigo: "N07", nombre: "Otros nerviosos (antivertiginosos, antidemencia)", nivel: 2 },
    ]
  },
  {
    codigo: "P", nombre: "Antiparasitarios", icono: "<span class=\"material-symbols-outlined\">pest_control</span>",
    hijos: [
      { codigo: "P01", nombre: "Antiprotozoarios", nivel: 2 },
      { codigo: "P02", nombre: "Antihelmínticos", nivel: 2 },
      { codigo: "P03", nombre: "Ectoparasiticidas (piojos, sarna)", nivel: 2 },
    ]
  },
  {
    codigo: "R", nombre: "Sistema respiratorio", icono: "<span class=\"material-symbols-outlined\">air</span>",
    hijos: [
      { codigo: "R01", nombre: "Nasales (descongestivos, corticoides)", nivel: 2 },
      { codigo: "R02", nombre: "Faringe (antisépticos, anestésicos)", nivel: 2 },
      { codigo: "R03", nombre: "Antiasmáticos y EPOC (broncodilatadores, corticoides)", nivel: 2 },
      { codigo: "R05", nombre: "Antitusivos y expectorantes", nivel: 2 },
      { codigo: "R06", nombre: "Antihistamínicos sistémicos", nivel: 2 },
      { codigo: "R07", nombre: "Otros respiratorios", nivel: 2 },
    ]
  },
  {
    codigo: "S", nombre: "Órganos de los sentidos", icono: "<span class=\"material-symbols-outlined\">visibility</span>",
    hijos: [
      { codigo: "S01", nombre: "Oftalmológicos", nivel: 2 },
      { codigo: "S02", nombre: "Otológicos (oídos)", nivel: 2 },
      { codigo: "S03", nombre: "Preparados para ojos y oídos combinados", nivel: 2 },
    ]
  },
  {
    codigo: "V", nombre: "Varios", icono: "<span class=\"material-symbols-outlined\">construction</span>",
    hijos: [
      { codigo: "V01", nombre: "Alérgenos", nivel: 2 },
      { codigo: "V03", nombre: "Antídotos y quelantes", nivel: 2 },
      { codigo: "V04", nombre: "Diagnósticos", nivel: 2 },
      { codigo: "V06", nombre: "Nutrientes generales", nivel: 2 },
      { codigo: "V07", nombre: "Soluciones intravenosas y sueros", nivel: 2 },
      { codigo: "V08", nombre: "Medios de contraste", nivel: 2 },
      { codigo: "V20", nombre: "Vendajes quirúrgicos", nivel: 2 },
    ]
  }
];

export function obtenerGrupoAtc(codigo) {
  return arbolAtc.find(g => g.codigo === codigo) || null;
}

export function obtenerSubgrupoAtc(codigo) {
  for (const grupo of arbolAtc) {
    const encontrado = grupo.hijos.find(h => h.codigo === codigo);
    if (encontrado) return { ...encontrado, grupoPadre: grupo.codigo, grupoNombre: grupo.nombre };
  }
  return null;
}

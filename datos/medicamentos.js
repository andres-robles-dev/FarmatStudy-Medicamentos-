// ==========================================
// FARMASTUDY - MEDICAMENTOS DE ESPAÑA
// 100 medicamentos reales con datos completos
// Clasificación ATC, principios activos, laboratorios
// ==========================================

export const listaMedicamentos = [
  // ========== GRUPO A: TRACTO ALIMENTARIO Y METABOLISMO ==========
  {
    id: "MED001", nombre: "Omeprazol Normon", principioActivo: "Omeprazol",
    laboratorio: "Normon", atc: "A02BC01", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Úlcera gástrica y duodenal, reflujo gastroesofágico, erradicación Helicobacter pylori",
    dosis: "20 mg/día", presentacion: "Cápsulas 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad, uso concomitante con nelfinavir", efectosAdversarios: "Cefalea, dolor abdominal, diarrea"
  },
  {
    id: "MED002", nombre: "Pantoprazol Cinfa", principioActivo: "Pantoprazol",
    laboratorio: "Cinfa", atc: "A02BC02", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Reflujo gastroesofágico, úlcera péptica, síndrome de Zollinger-Ellison",
    dosis: "40 mg/día", presentacion: "Comprimidos 40 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad, cirrosis hepática severa"
  },
  {
    id: "MED003", nombre: "Esomeprazol STADA", principioActivo: "Esomeprazol",
    laboratorio: "STADA", atc: "A02BC05", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Enfermedad por reflujo gastroesofágico, úlcera péptica",
    dosis: "20-40 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED004", nombre: "Metformina Normon", principioActivo: "Metformina",
    laboratorio: "Normon", atc: "A10BA02", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2", dosis: "850 mg/8-12h", presentacion: "Comprimidos 850 mg",
    tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Insuficiencia renal, acidosis metabólica aguda"
  },
  {
    id: "MED005", nombre: "Januvia", principioActivo: "Sitagliptina",
    laboratorio: "MSD", atc: "A10BH01", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2 en combinación con metformina",
    dosis: "100 mg/día", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED006", nombre: "Insulina Humana NPH", principioActivo: "Insulina humana NPH (isofánica)",
    laboratorio: "Novo Nordisk", atc: "A10AC01", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 1 y 2", dosis: "Según perfil glucémico",
    presentacion: "Suspensión inyectable 100 UI/ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED007", nombre: "Hidroferol", principioActivo: "Calcifediol (25-hidroxivitamina D3)",
    laboratorio: "Faes Farma", atc: "A11CC05", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Déficit de vitamina D, prevención de osteoporosis", dosis: "0.266 mg/día",
    presentacion: "Cápsulas blandas 0.266 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED008", nombre: "Pylera", principioActivo: "Subcitrato de bismuto potasio + Metronidazol + Tetraciclina clorhidrato",
    laboratorio: "Laboratoires Juvise Pharmaceuticals", atc: "A02BD08", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Erradicación de Helicobacter pylori (en combinación con omeprazol)",
    dosis: "3 cápsulas 4 veces/día tras comidas y al acostarse", presentacion: "Cápsulas 140/125/125 mg",
    tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED009", nombre: "Fortasec", principioActivo: "Loperamida",
    laboratorio: "Italchimici", atc: "A07DA03", grupoAtc: "A", subgrupoAtc: "A07",
    indicacion: "Diarrea aguda y crónica", dosis: "2 mg tras cada deposición (máx 8 mg/día)",
    presentacion: "Cápsulas 2 mg", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED010", nombre: "Sal de Fruta Eno", principioActivo: "Bicarbonato sódico + Ácido cítrico",
    laboratorio: "Bayer", atc: "A02AH", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Pirosis, acidez de estómago, indigestión", dosis: "1 sobre después de las comidas",
    presentacion: "Sobres efervescentes", tipo: "Parafarmacia", receta: false, financiado: false
  },
  {
    id: "MED011", nombre: "Dulcolax", principioActivo: "Bisacodilo",
    laboratorio: "Sanofi", atc: "A06AB02", grupoAtc: "A", subgrupoAtc: "A06",
    indicacion: "Estreñimiento ocasional", dosis: "5-10 mg/día", presentacion: "Comprimidos 5 mg",
    tipo: "Medicamento", receta: false, financiado: false
  },

  // ========== GRUPO B: SANGRE Y ÓRGANOS HEMATOPOYÉTICOS ==========
  {
    id: "MED012", nombre: "Sintrom", principioActivo: "Acenocumarol",
    laboratorio: "Novartis", atc: "B01AA07", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de tromboembolismo, fibrilación auricular, prótesis valvulares",
    dosis: "Según INR (1-8 mg/día)", presentacion: "Comprimidos 1 mg y 4 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED013", nombre: "Adiro", principioActivo: "Ácido acetilsalicílico",
    laboratorio: "Bayer", atc: "B01AC06", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de eventos cardiovasculares, especialmente tras infarto",
    dosis: "100-300 mg/día", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED014", nombre: "Plavix", principioActivo: "Clopidogrel",
    laboratorio: "Sanofi", atc: "B01AC04", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de eventos aterotrombóticos en pacientes con síndrome coronario agudo",
    dosis: "75 mg/día", presentacion: "Comprimidos 75 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED015", nombre: "Hemoal", principioActivo: "Sales de hierro (glicina sulfato ferroso)",
    laboratorio: "Italchimici", atc: "B03AA07", grupoAtc: "B", subgrupoAtc: "B03",
    indicacion: "Anemia ferropénica, déficit de hierro", dosis: "1-2 comprimidos/día",
    presentacion: "Comprimidos", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED016", nombre: "Ácido Fólico Cinfa", principioActivo: "Ácido fólico",
    laboratorio: "Cinfa", atc: "B03BB01", grupoAtc: "B", subgrupoAtc: "B03",
    indicacion: "Prevención de defectos del tubo neural en el embarazo, anemia megaloblástica",
    dosis: "0.4-5 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO C: SISTEMA CARDIOVASCULAR ==========
  {
    id: "MED017", nombre: "Enalapril Cinfa", principioActivo: "Enalapril",
    laboratorio: "Cinfa", atc: "C09AA02", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial, insuficiencia cardíaca, prevención de eventos cardiovasculares",
    dosis: "5-20 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED018", nombre: "Simvastatina Normon", principioActivo: "Simvastatina",
    laboratorio: "Normon", atc: "C10AA01", grupoAtc: "C", subgrupoAtc: "C10",
    indicacion: "Hipercolesterolemia, prevención de enfermedad cardiovascular",
    dosis: "20-40 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED019", nombre: "Atorvastatina STADA", principioActivo: "Atorvastatina",
    laboratorio: "STADA", atc: "C10AA05", grupoAtc: "C", subgrupoAtc: "C10",
    indicacion: "Hipercolesterolemia, hiperlipidemia combinada, prevención cardiovascular",
    dosis: "10-80 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED020", nombre: "Amlodipino Normon", principioActivo: "Amlodipino",
    laboratorio: "Normon", atc: "C08CA01", grupoAtc: "C", subgrupoAtc: "C08",
    indicacion: "Hipertensión arterial, angina de pecho", dosis: "5-10 mg/día",
    presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED021", nombre: "Losartán Cinfa", principioActivo: "Losartán",
    laboratorio: "Cinfa", atc: "C09CA01", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial, nefropatía diabética, prevención de ictus",
    dosis: "50-100 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED022", nombre: "Bisoprolol Normon", principioActivo: "Bisoprolol",
    laboratorio: "Normon", atc: "C07AB07", grupoAtc: "C", subgrupoAtc: "C07",
    indicacion: "Hipertensión arterial, angina de pecho, insuficiencia cardíaca crónica",
    dosis: "2.5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED023", nombre: "Furosemida Cinfa", principioActivo: "Furosemida",
    laboratorio: "Cinfa", atc: "C03CA01", grupoAtc: "C", subgrupoAtc: "C03",
    indicacion: "Edema asociado a insuficiencia cardíaca, cirrosis hepática, enfermedad renal",
    dosis: "20-80 mg/día", presentacion: "Comprimidos 40 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED024", nombre: "Digoxina", principioActivo: "Digoxina",
    laboratorio: "Zambon", atc: "C01AA05", grupoAtc: "C", subgrupoAtc: "C01",
    indicacion: "Insuficiencia cardíaca, fibrilación auricular", dosis: "0.0625-0.25 mg/día",
    presentacion: "Comprimidos 0.25 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED025", nombre: "Cafinitrina", principioActivo: "Nitroglicerina + Cafeína citrato",
    laboratorio: "Kern Pharma", atc: "C01DA52", grupoAtc: "C", subgrupoAtc: "C01",
    indicacion: "Crisis de angina de pecho, prevención de angina", dosis: "0.5-1 mg sublingual",
    presentacion: "Comprimidos sublinguales 0.5 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO D: DERMATOLÓGICOS ==========
  {
    id: "MED026", nombre: "Clotrimazol Cinfa", principioActivo: "Clotrimazol",
    laboratorio: "Cinfa", atc: "D01AC01", grupoAtc: "D", subgrupoAtc: "D01",
    indicacion: "Infecciones cutáneas por hongos (candidiasis, dermatofitosis)",
    dosis: "Aplicar 2-3 veces/día", presentacion: "Crema 1% 30g", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED027", nombre: "Mometasona Cinfa", principioActivo: "Mometasona furoato",
    laboratorio: "Cinfa", atc: "D07AC13", grupoAtc: "D", subgrupoAtc: "D07",
    indicacion: "Dermatitis atópica, psoriasis, eczema de contacto", dosis: "1 vez/día",
    presentacion: "Crema 0.1% 30g", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED028", nombre: "Hidrocortisona Cinfa", principioActivo: "Hidrocortisona",
    laboratorio: "Cinfa", atc: "D07AA02", grupoAtc: "D", subgrupoAtc: "D07",
    indicacion: "Dermatitis leve, eczema, picaduras de insecto, alergia cutánea",
    dosis: "1-2 veces/día", presentacion: "Crema 0.5% 30g", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED029", nombre: "Isdin Hidrosis", principioActivo: "Agua de mar + Gluconato de cobre + Gluconato de zinc",
    laboratorio: "ISDIN", atc: "D08AX", grupoAtc: "D", subgrupoAtc: "D08",
    indicacion: "Higiene y cuidado de la piel irritada, dermatitis del pañal",
    dosis: "Aplicar en cada cambio", presentacion: "Solución 200 ml", tipo: "Parafarmacia", receta: false, financiado: false
  },
  {
    id: "MED030", nombre: "Fusicutan", principioActivo: "Ácido fusídico",
    laboratorio: "LEO Pharma", atc: "D06AX01", grupoAtc: "D", subgrupoAtc: "D06",
    indicacion: "Infecciones cutáneas bacterianas (impétigo, foliculitis)",
    dosis: "3-4 veces/día", presentacion: "Crema 2% 15g", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO G: GENITOURINARIO ==========
  {
    id: "MED031", nombre: "Omnic", principioActivo: "Tamsulosina",
    laboratorio: "Astellas Pharma", atc: "G04CA02", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Síntomas de hiperplasia benigna de próstata", dosis: "0.4 mg/día",
    presentacion: "Cápsulas 0.4 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED032", nombre: "Proscar", principioActivo: "Finasterida",
    laboratorio: "MSD", atc: "G04CB01", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Hiperplasia benigna de próstata", dosis: "5 mg/día",
    presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED033", nombre: "Yasmin", principioActivo: "Drospirenona + Etinilestradiol",
    laboratorio: "Bayer", atc: "G03AA12", grupoAtc: "G", subgrupoAtc: "G03",
    indicacion: "Anticoncepción oral", dosis: "1 comprimido/día 21 días",
    presentacion: "Comprimidos 3 mg/0.03 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED034", nombre: "Canesten óvulos", principioActivo: "Clotrimazol",
    laboratorio: "Bayer", atc: "G01AF02", grupoAtc: "G", subgrupoAtc: "G01",
    indicacion: "Candidiasis vaginal", dosis: "1 óvulo/día durante 6 días",
    presentacion: "Óvulos vaginales 100 mg", tipo: "Medicamento", receta: false, financiado: true
  },

  // ========== GRUPO H: HORMONAS ==========
  {
    id: "MED035", nombre: "Eutirox", principioActivo: "Levotiroxina sódica",
    laboratorio: "Merck", atc: "H03AA01", grupoAtc: "H", subgrupoAtc: "H03",
    indicacion: "Hipotiroidismo, bocio eutiroideo, terapia supresora TSH",
    dosis: "50-200 µg/día", presentacion: "Comprimidos 100 µg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED036", nombre: "Prednisona Cinfa", principioActivo: "Prednisona",
    laboratorio: "Cinfa", atc: "H02AB07", grupoAtc: "H", subgrupoAtc: "H02",
    indicacion: "Enfermedades inflamatorias y autoinmunes, alergias graves, asma severo",
    dosis: "5-60 mg/día (descendente)", presentacion: "Comprimidos 30 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED037", nombre: "Urbason", principioActivo: "Metilprednisolona",
    laboratorio: "Sanofi", atc: "H02AB04", grupoAtc: "H", subgrupoAtc: "H02",
    indicacion: "Procesos inflamatorios severos, enfermedades autoinmunes, asma agudo",
    dosis: "4-40 mg/día", presentacion: "Comprimidos 16 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO J: ANTIINFECCIOSOS ==========
  {
    id: "MED038", nombre: "Amoxicilina Cinfa", principioActivo: "Amoxicilina",
    laboratorio: "Cinfa", atc: "J01CA04", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, urinarias, otitis, sinusitis, faringitis bacteriana",
    dosis: "500 mg cada 8h", presentacion: "Cápsulas 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED039", nombre: "Augmentine", principioActivo: "Amoxicilina + Ácido clavulánico",
    laboratorio: "GSK", atc: "J01CR02", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones bacterianas resistentes a amoxicilina sola",
    dosis: "500/125 mg cada 8h", presentacion: "Comprimidos 500/125 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED040", nombre: "Azitromicina Normon", principioActivo: "Azitromicina",
    laboratorio: "Normon", atc: "J01FA10", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, infecciones de piel y tejidos blandos, uretritis",
    dosis: "500 mg/día 3 días", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED041", nombre: "Clamoxyl", principioActivo: "Amoxicilina",
    laboratorio: "GSK", atc: "J01CA04", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, genitourinarias, gastrointestinales",
    dosis: "500 mg cada 8h", presentacion: "Suspensión oral 250 mg/5ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED042", nombre: "Doxiciclina Cinfa", principioActivo: "Doxiciclina",
    laboratorio: "Cinfa", atc: "J01AA02", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones por bacterias atípicas, acné, enfermedad de Lyme, brucelosis",
    dosis: "100 mg/12h", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED043", nombre: "Ciprofloxacino Normon", principioActivo: "Ciprofloxacino",
    laboratorio: "Normon", atc: "J01MA02", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones urinarias complicadas, respiratorias, gastrointestinales, óseas",
    dosis: "250-750 mg/12h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED044", nombre: "Valtrex", principioActivo: "Valaciclovir",
    laboratorio: "GSK", atc: "J05AB11", grupoAtc: "J", subgrupoAtc: "J05",
    indicacion: "Herpes zóster, herpes genital, herpes labial",
    dosis: "500 mg-1g/12h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED045", nombre: "Zelitrex", principioActivo: "Valaciclovir",
    laboratorio: "GSK", atc: "J05AB11", grupoAtc: "J", subgrupoAtc: "J05",
    indicacion: "Herpes zóster, herpes genital", dosis: "500 mg/12h",
    presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED046", nombre: "Fluconazol Cinfa", principioActivo: "Fluconazol",
    laboratorio: "Cinfa", atc: "J02AC01", grupoAtc: "J", subgrupoAtc: "J02",
    indicacion: "Candidiasis sistémica, criptococosis, candidiasis vaginal recurrente",
    dosis: "150 mg/semana o 50-400 mg/día", presentacion: "Cápsulas 150 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO M: MUSCULOESQUELÉTICO ==========
  {
    id: "MED047", nombre: "Ibuprofeno Cinfa", principioActivo: "Ibuprofeno",
    laboratorio: "Cinfa", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre, inflamación (artritis, lumbalgia, dismenorrea)",
    dosis: "400-600 mg cada 6-8h", presentacion: "Comprimidos 600 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED048", nombre: "Enantyum", principioActivo: "Dexketoprofeno",
    laboratorio: "Menarini", atc: "M01AE17", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor agudo leve a moderado (muscular, dental, postoperatorio)",
    dosis: "25 mg cada 8h", presentacion: "Comprimidos 25 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED049", nombre: "Naproxeno Cinfa", principioActivo: "Naproxeno",
    laboratorio: "Cinfa", atc: "M01AE02", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artritis reumatoide, osteoartritis, dolor musculoesquelético, dismenorrea",
    dosis: "500-1000 mg/día", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED050", nombre: "Nolotil", principioActivo: "Metamizol magnésico",
    laboratorio: "Boehringer Ingelheim", atc: "N02BB02", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor agudo intenso (cólico renal, dolor postquirúrgico), fiebre alta",
    dosis: "500-1000 mg cada 6-8h", presentacion: "Cápsulas 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED051", nombre: "Voltaren", principioActivo: "Diclofenaco",
    laboratorio: "Novartis", atc: "M01AB05", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor e inflamación musculoesquelética, artritis, gota aguda",
    dosis: "75-150 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED052", nombre: "Voltaren Emulgel", principioActivo: "Diclofenaco dietilamino",
    laboratorio: "Novartis", atc: "M02AA15", grupoAtc: "M", subgrupoAtc: "M02",
    indicacion: "Dolor localizado muscular y articular, contusiones, torceduras",
    dosis: "Aplicar 3-4 veces/día", presentacion: "Gel 1% 60g", tipo: "Medicamento", receta: false, financiado: false
  },

  // ========== GRUPO N: SISTEMA NERVIOSO ==========
  {
    id: "MED053", nombre: "Paracetamol Cinfa", principioActivo: "Paracetamol",
    laboratorio: "Cinfa", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, fiebre", dosis: "500-1000 mg cada 6-8h (máx 4g/día)",
    presentacion: "Comprimidos 650 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED054", nombre: "Gelocatil", principioActivo: "Paracetamol",
    laboratorio: "Gebro Pharma", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, fiebre", dosis: "500-1000 mg cada 6-8h",
    presentacion: "Comprimidos 650 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED055", nombre: "Apiretal", principioActivo: "Paracetamol",
    laboratorio: "ERN", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado y fiebre en niños", dosis: "Según peso (15 mg/kg cada 6h)",
    presentacion: "Solución oral 100 mg/ml", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED056", nombre: "Tramadol Cinfa", principioActivo: "Tramadol",
    laboratorio: "Cinfa", atc: "N02AX02", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor moderado a severo", dosis: "50-100 mg cada 6-8h",
    presentacion: "Cápsulas 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED057", nombre: "Orfidal", principioActivo: "Lorazepam",
    laboratorio: "Pfizer", atc: "N05BA06", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Ansiedad, trastorno de pánico, insomnio de corta duración",
    dosis: "1-5 mg/día", presentacion: "Comprimidos 1 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED058", nombre: "Diazepam Cinfa", principioActivo: "Diazepam",
    laboratorio: "Cinfa", atc: "N05BA01", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Ansiedad, espasmos musculares, epilepsia, alcoholismo agudo",
    dosis: "5-30 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED059", nombre: "Fluoxetina Normon", principioActivo: "Fluoxetina",
    laboratorio: "Normon", atc: "N06AB03", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Depresión mayor, trastorno obsesivo-compulsivo, bulimia nerviosa",
    dosis: "20-80 mg/día", presentacion: "Cápsulas 20 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED060", nombre: "Sertralina Cinfa", principioActivo: "Sertralina",
    laboratorio: "Cinfa", atc: "N06AB06", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Depresión, trastorno obsesivo-compulsivo, trastorno de angustia, fobia social",
    dosis: "50-200 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED061", nombre: "Alprazolam Normon", principioActivo: "Alprazolam",
    laboratorio: "Normon", atc: "N05BA12", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Trastorno de ansiedad, trastorno de pánico", dosis: "0.75-3 mg/día",
    presentacion: "Comprimidos 0.5 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED062", nombre: "Metadona", principioActivo: "Metadona",
    laboratorio: "Diversos laboratorios", atc: "N07BC02", grupoAtc: "N", subgrupoAtc: "N07",
    indicacion: "Tratamiento de la dependencia a opiáceos, dolor crónico severo",
    dosis: "20-120 mg/día", presentacion: "Solución oral 5 mg/5ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED063", nombre: "Rivotril", principioActivo: "Clonazepam",
    laboratorio: "Roche", atc: "N03AE01", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Epilepsia (crisis generalizadas, ausencias), trastorno de pánico",
    dosis: "1-4 mg/día", presentacion: "Comprimidos 2 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED064", nombre: "Deprax", principioActivo: "Trazodona",
    laboratorio: "Angelini", atc: "N06AX05", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Depresión mayor, especialmente con componente de ansiedad e insomnio",
    dosis: "150-300 mg/día", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO R: SISTEMA RESPIRATORIO ==========
  {
    id: "MED065", nombre: "Salbutamol Aldo-Union", principioActivo: "Salbutamol",
    laboratorio: "Aldo-Union", atc: "R03AC02", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma bronquial, EPOC, broncoespasmo", dosis: "1-2 inhalaciones cada 4-6h",
    presentacion: "Inhalador 200 dosis (100 µg/dosis)", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED066", nombre: "Pulmicort", principioActivo: "Budesonida",
    laboratorio: "AstraZeneca", atc: "R03BA02", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente, EPOC, rinitis alérgica", dosis: "200-800 µg/día",
    presentacion: "Inhalador 200 dosis (200 µg/dosis)", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED067", nombre: "Seretide", principioActivo: "Salmeterol + Fluticasona",
    laboratorio: "GSK", atc: "R03AK06", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente moderada a severa, EPOC",
    dosis: "1 inhalación cada 12h", presentacion: "Inhalador 120 dosis (50/500 µg)", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED068", nombre: "Loratadina Cinfa", principioActivo: "Loratadina",
    laboratorio: "Cinfa", atc: "R06AX13", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Rinitis alérgica, urticaria crónica, alergias estacionales",
    dosis: "10 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED069", nombre: "Ebastel", principioActivo: "Ebastina",
    laboratorio: "Almirall", atc: "R06AX22", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Rinitis alérgica estacional y perenne, urticaria",
    dosis: "10-20 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED070", nombre: "Montelukast Cinfa", principioActivo: "Montelukast",
    laboratorio: "Cinfa", atc: "R03DC03", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma bronquial persistente leve-moderada, rinitis alérgica",
    dosis: "10 mg/día (adultos)", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED071", nombre: "Bisolvex", principioActivo: "Ambroxol",
    laboratorio: "Cinfa", atc: "R05CB06", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Expectorante en enfermedades respiratorias con exceso de moco",
    dosis: "30 mg cada 8h", presentacion: "Comprimidos 30 mg", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED072", nombre: "Flutox", principioActivo: "Dextrometorfano",
    laboratorio: "Cinfa", atc: "R05DA09", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Tos seca irritativa improductiva", dosis: "15 mg cada 6-8h",
    presentacion: "Cápsulas 15 mg", tipo: "Medicamento", receta: false, financiado: false
  },

  // ========== GRUPO S: ÓRGANOS DE LOS SENTIDOS ==========
  {
    id: "MED073", nombre: "Colircusi Gentamicina", principioActivo: "Gentamicina",
    laboratorio: "Alcon", atc: "S01AA11", grupoAtc: "S", subgrupoAtc: "S01",
    indicacion: "Infecciones oculares bacterianas (conjuntivitis, blefaritis)",
    dosis: "1 gota cada 2-4h", presentacion: "Colirio 5 ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED074", nombre: "Tobrex", principioActivo: "Tobramicina",
    laboratorio: "Novartis", atc: "S01AA12", grupoAtc: "S", subgrupoAtc: "S01",
    indicacion: "Infecciones oculares bacterianas severas", dosis: "1 gota cada 4h",
    presentacion: "Colirio 5 ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED075", nombre: "Lágrimas artificiales", principioActivo: "Hipromelosa + Carbómero",
    laboratorio: "Diversos", atc: "S01XA20", grupoAtc: "S", subgrupoAtc: "S01",
    indicacion: "Ojo seco, irritación ocular leve por sequedad",
    dosis: "1-2 gotas según necesidad", presentacion: "Colirio 10 ml", tipo: "Parafarmacia", receta: false, financiado: false
  },

  // ========== GRUPO P: ANTIPARASITARIOS ==========
  {
    id: "MED076", nombre: "Mebendazol Cinfa", principioActivo: "Mebendazol",
    laboratorio: "Cinfa", atc: "P02CA01", grupoAtc: "P", subgrupoAtc: "P02",
    indicacion: "Oxuriasis, ascariasis, tricocefalosis, anquilostomiasis",
    dosis: "100-500 mg según parásito", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED077", nombre: "Albendazol Cinfa", principioActivo: "Albendazol",
    laboratorio: "Cinfa", atc: "P02CA03", grupoAtc: "P", subgrupoAtc: "P02",
    indicacion: "Parasitosis intestinales, equinococosis, neurocisticercosis",
    dosis: "400 mg/día", presentacion: "Comprimidos 400 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO L: ANTINEOPLÁSICOS ==========
  {
    id: "MED078", nombre: "Tamoxifeno Cinfa", principioActivo: "Tamoxifeno",
    laboratorio: "Cinfa", atc: "L02BA01", grupoAtc: "L", subgrupoAtc: "L02",
    indicacion: "Cáncer de mama con receptores hormonales positivos",
    dosis: "20 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED079", nombre: "Metotrexato Cinfa", principioActivo: "Metotrexato",
    laboratorio: "Cinfa", atc: "L01BA01", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Artritis reumatoide severa, psoriasis, leucemia, linfoma",
    dosis: "7.5-25 mg/semana (artritis reumatoide)", presentacion: "Comprimidos 2.5 mg",
    tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== GRUPO V: VARIOS ==========
  {
    id: "MED080", nombre: "Suero fisiológico Braun", principioActivo: "Cloruro sódico 0.9%",
    laboratorio: "B. Braun", atc: "V07AB", grupoAtc: "V", subgrupoAtc: "V07",
    indicacion: "Reposición hidroelectrolítica, vehículo de medicamentos, limpieza nasal",
    dosis: "Según necesidad", presentacion: "Solución 500 ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED081", nombre: "Solución Ringer Lactato", principioActivo: "Sodio, potasio, calcio, cloruro, lactato",
    laboratorio: "B. Braun", atc: "V07AB", grupoAtc: "V", subgrupoAtc: "V07",
    indicacion: "Reposición de líquidos y electrolitos, acidosis metabólica leve",
    dosis: "Según necesidad", presentacion: "Solución 500 ml", tipo: "Medicamento", receta: true, financiado: true
  },

  // ========== PARAFARMACIA ADICIONAL ==========
  {
    id: "MED082", nombre: "Frenadol", principioActivo: "Paracetamol + Clorfenamina + Dextrometorfano + Cafeína",
    laboratorio: "Cinfa", atc: "N02BE51", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Síntomas del resfriado común (fiebre, dolor, congestión, tos)",
    dosis: "1 sobre cada 6-8h", presentacion: "Sobres efervescentes", tipo: "Parafarmacia", receta: false, financiado: false
  },
  {
    id: "MED083", nombre: "Aspirina", principioActivo: "Ácido acetilsalicílico",
    laboratorio: "Bayer", atc: "N02BA01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, fiebre, inflamación", dosis: "500 mg cada 6-8h",
    presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED084", nombre: "Bisolvon", principioActivo: "Bromhexina",
    laboratorio: "Sanofi", atc: "R05CB02", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Tos productiva, enfermedades respiratorias con moco",
    dosis: "8 mg cada 8h", presentacion: "Comprimidos 8 mg", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED085", nombre: "Vitamina C Cinfa", principioActivo: "Ácido ascórbico",
    laboratorio: "Cinfa", atc: "A11GA01", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Prevención y tratamiento del déficit de vitamina C, antioxidante",
    dosis: "1g/día", presentacion: "Comprimidos efervescentes 1g", tipo: "Parafarmacia", receta: false, financiado: false
  },
  {
    id: "MED086", nombre: "Aquilea Magnesio", principioActivo: "Magnesio",
    laboratorio: "Aquilea", atc: "A12CC", grupoAtc: "A", subgrupoAtc: "A12",
    indicacion: "Cansancio físico y mental, calambres musculares, déficit de magnesio",
    dosis: "1 sobre/día", presentacion: "Sobres efervescentes", tipo: "Parafarmacia", receta: false, financiado: false
  },
  {
    id: "MED087", nombre: "Iberogast", principioActivo: "Extractos de 9 plantas medicinales",
    laboratorio: "Bayer", atc: "A03AX", grupoAtc: "A", subgrupoAtc: "A03",
    indicacion: "Trastornos funcionales digestivos (dispepsia, colon irritable)",
    dosis: "20 gotas 3 veces/día", presentacion: "Solución oral 50 ml", tipo: "Parafarmacia", receta: false, financiado: false
  },
  {
    id: "MED088", nombre: "Dalsy", principioActivo: "Ibuprofeno",
    laboratorio: "Cinfa", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Fiebre y dolor en niños", dosis: "Según peso (7.5-10 mg/kg cada 8h)",
    presentacion: "Suspensión oral 100 mg/5ml", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED089", nombre: "Espidifen", principioActivo: "Ibuprofeno (arginina)",
    laboratorio: "Zambon", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre (acción rápida)", dosis: "400-600 mg cada 8h",
    presentacion: "Sobres 600 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED090", nombre: "Almax", principioActivo: "Almagato",
    laboratorio: "Almirall", atc: "A02AD", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Hiperacidez gástrica, pirosis, reflujo gastroesofágico",
    dosis: "1-2 comprimidos después de las comidas", presentacion: "Comprimidos masticables",
    tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED091", nombre: "Vaccines", principioActivo: "Vacunas diversas",
    laboratorio: "GSK/Sanofi/MSD", atc: "J07", grupoAtc: "J", subgrupoAtc: "J07",
    indicacion: "Prevención de enfermedades infecciosas", dosis: "Según calendario vacunal",
    presentacion: "Solución inyectable", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED092", nombre: "Clexane", principioActivo: "Enoxaparina",
    laboratorio: "Sanofi", atc: "B01AB05", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de tromboembolismo venoso, tratamiento de trombosis",
    dosis: "20-40 mg/día (profilaxis) o 1.5 mg/kg/día (tratamiento)",
    presentacion: "Jeringas precargadas 40 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED093", nombre: "Primperan", principioActivo: "Metoclopramida",
    laboratorio: "Sanofi", atc: "A03FA01", grupoAtc: "A", subgrupoAtc: "A03",
    indicacion: "Náuseas y vómitos, gastroparesia, reflujo gastroesofágico",
    dosis: "10 mg cada 8h", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED094", nombre: "Biodramina", principioActivo: "Dimenhidrinato",
    laboratorio: "Uriach", atc: "A04AB02", grupoAtc: "A", subgrupoAtc: "A04",
    indicacion: "Cinetosis (mareo en viajes), náuseas y vómitos",
    dosis: "50 mg cada 4-6h antes del viaje", presentacion: "Comprimidos 50 mg",
    tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED095", nombre: "Colchimax", principioActivo: "Colchicina + Timetil + Extracto de belladona",
    laboratorio: "Faes Farma", atc: "M04AC01", grupoAtc: "M", subgrupoAtc: "M04",
    indicacion: "Crisis de gota aguda, prevención de ataques recurrentes de gota",
    dosis: "1 mg (2 comprimidos) en crisis aguda", presentacion: "Comprimidos 0.5 mg",
    tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED096", nombre: "Actonel", principioActivo: "Risedronato sódico",
    laboratorio: "Warner Chilcott", atc: "M05BA07", grupoAtc: "M", subgrupoAtc: "M05",
    indicacion: "Osteoporosis posmenopáusica, osteoporosis inducida por corticoides",
    dosis: "35 mg/semana", presentacion: "Comprimidos 35 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED097", nombre: "Diclofenaco Normon", principioActivo: "Diclofenaco",
    laboratorio: "Normon", atc: "M01AB05", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artritis reumatoide, osteoartritis, espondilitis anquilosante",
    dosis: "75-150 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED098", nombre: "Dormidina", principioActivo: "Doxilamina",
    laboratorio: "Krka", atc: "R06AA09", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Insomnio ocasional de corta duración", dosis: "12.5-25 mg 30 min antes de acostarse",
    presentacion: "Comprimidos 12.5 mg", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED099", nombre: "Brumixol", principioActivo: "Bromazepam",
    laboratorio: "Normon", atc: "N05BA08", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Trastornos de ansiedad generalizada, tensión emocional",
    dosis: "3-6 mg/día", presentacion: "Comprimidos 3 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED100", nombre: "Neobrufen", principioActivo: "Ibuprofeno",
    laboratorio: "Normon", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre, inflamación", dosis: "400-600 mg cada 6-8h",
    presentacion: "Comprimidos 400 mg", tipo: "Medicamento", receta: false, financiado: true
  },

  // ========== NUEVOS 52 MEDICAMENTOS (MED101-MED152) ==========

  // --- BAYER (+6) ---
  {
    id: "MED101", nombre: "Xarelto", principioActivo: "Rivaroxabán",
    laboratorio: "Bayer", atc: "B01AF01", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de ictus y embolia sistémica en fibrilación auricular no valvular, tratamiento de TVP y EP",
    dosis: "20 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED102", nombre: "Alka-Seltzer", principioActivo: "Bicarbonato sódico + Ácido cítrico",
    laboratorio: "Bayer", atc: "A02AH", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Acidez de estómago, indigestión ácida",
    dosis: "1-2 comprimidos efervescentes después de las comidas", presentacion: "Comprimidos efervescentes 2.1g", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED103", nombre: "Rennie", principioActivo: "Carbonato de calcio + Carbonato de magnesio",
    laboratorio: "Bayer", atc: "A02AX", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Acidez de estómago, regurgitación ácida, indigestión",
    dosis: "1-2 comprimidos masticables después de las comidas", presentacion: "Comprimidos masticables 680/80 mg", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED104", nombre: "Bepanthen", principioActivo: "Dexpantenol",
    laboratorio: "Bayer", atc: "D03AX", grupoAtc: "D", subgrupoAtc: "D03",
    indicacion: "Dermatitis del pañal, piel irritada, cicatrización de heridas superficiales",
    dosis: "Aplicar 1-2 veces/día", presentacion: "Pomada 5% 30g", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED105", nombre: "Redoxon", principioActivo: "Ácido ascórbico",
    laboratorio: "Bayer", atc: "A11GA01", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Déficit de vitamina C, aumento de defensas, cansancio",
    dosis: "1g/día", presentacion: "Comprimidos efervescentes 1g", tipo: "Parafarmacia", receta: false, financiado: false
  },
  {
    id: "MED106", nombre: "Berocca", principioActivo: "Complejo B + Vitamina C + Minerales",
    laboratorio: "Bayer", atc: "A11EA", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Fatiga, cansancio, aumento de necesidades nutricionales",
    dosis: "1 comprimido/día", presentacion: "Comprimidos efervescentes", tipo: "Parafarmacia", receta: false, financiado: false
  },

  // --- GSK (+5) ---
  {
    id: "MED107", nombre: "Relvar Ellipta", principioActivo: "Furoato de fluticasona + Vilanterol",
    laboratorio: "GSK", atc: "R03AK10", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Tratamiento regular del asma y EPOC",
    dosis: "1 inhalación/día (92/22 µg o 184/22 µg)", presentacion: "Inhalador 30 dosis", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED108", nombre: "Avidart", principioActivo: "Dutasterida",
    laboratorio: "GSK", atc: "G04CB02", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Hiperplasia benigna de próstata",
    dosis: "0.5 mg/día", presentacion: "Cápsulas blandas 0.5 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED109", nombre: "Imigran", principioActivo: "Sumatriptán",
    laboratorio: "GSK", atc: "N02CC01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Migraña aguda con o sin aura, cefalea en racimos",
    dosis: "50-100 mg al inicio de la crisis", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED110", nombre: "Lamictal", principioActivo: "Lamotrigina",
    laboratorio: "GSK", atc: "N03AX09", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Epilepsia (crisis parciales y generalizadas), trastorno bipolar",
    dosis: "100-200 mg/día (escalada progresiva)", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED111", nombre: "Avamys", principioActivo: "Furoato de fluticasona",
    laboratorio: "GSK", atc: "R01AD12", grupoAtc: "R", subgrupoAtc: "R01",
    indicacion: "Rinitis alérgica estacional y perenne",
    dosis: "2 pulverizaciones cada fosa nasal/día", presentacion: "Suspensión nasal 120 dosis", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- PFIZER (+4) ---
  {
    id: "MED112", nombre: "Champix", principioActivo: "Vareniclina",
    laboratorio: "Pfizer", atc: "N07BA03", grupoAtc: "N", subgrupoAtc: "N07",
    indicacion: "Deshabituación tabáquica en adultos",
    dosis: "0.5-2 mg/día (escalada progresiva)", presentacion: "Comprimidos 1 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED113", nombre: "Eliquis", principioActivo: "Apixabán",
    laboratorio: "Pfizer", atc: "B01AF02", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de ictus en fibrilación auricular no valvular, tratamiento de TVP y EP",
    dosis: "5 mg/12h", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED114", nombre: "Diflucan", principioActivo: "Fluconazol",
    laboratorio: "Pfizer", atc: "J02AC01", grupoAtc: "J", subgrupoAtc: "J02",
    indicacion: "Candidiasis vaginal, meningitis criptocócica, dermatomicosis",
    dosis: "150 mg dosis única (candidiasis vaginal)", presentacion: "Cápsulas 150 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED115", nombre: "Zitromax", principioActivo: "Azitromicina",
    laboratorio: "Pfizer", atc: "J01FA10", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, infecciones cutáneas, uretritis",
    dosis: "500 mg/día 3 días", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- NOVARTIS (+3) ---
  {
    id: "MED116", nombre: "Sandimmun Neoral", principioActivo: "Ciclosporina",
    laboratorio: "Novartis", atc: "L04AD01", grupoAtc: "L", subgrupoAtc: "L04",
    indicacion: "Prevención de rechazo en trasplante de órgano sólido, artritis reumatoide grave, psoriasis grave",
    dosis: "2-5 mg/kg/día en 2 dosis", presentacion: "Cápsulas 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED117", nombre: "Tegretol", principioActivo: "Carbamazepina",
    laboratorio: "Novartis", atc: "N03AF01", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Epilepsia (crisis parciales y tónico-clónicas), neuralgia del trigémino, trastorno bipolar",
    dosis: "600-1200 mg/día en dosis divididas", presentacion: "Comprimidos 200 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED118", nombre: "Lioresal", principioActivo: "Baclofeno",
    laboratorio: "Novartis", atc: "M03BX01", grupoAtc: "M", subgrupoAtc: "M03",
    indicacion: "Espasticidad muscular de origen cerebral y medular, especialmente en esclerosis múltiple",
    dosis: "15-60 mg/día (escalada progresiva)", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- SANOFI (+3) ---
  {
    id: "MED119", nombre: "Aprovel", principioActivo: "Irbesartán",
    laboratorio: "Sanofi", atc: "C09CA04", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial esencial, nefropatía en hipertensos con DM2",
    dosis: "150-300 mg/día", presentacion: "Comprimidos 150 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED120", nombre: "Amaryl", principioActivo: "Glimepirida",
    laboratorio: "Sanofi", atc: "A10BB12", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2 cuando dieta y ejercicio no controlan la glucemia",
    dosis: "1-4 mg/día", presentacion: "Comprimidos 4 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED121", nombre: "Tavanic", principioActivo: "Levofloxacino",
    laboratorio: "Sanofi", atc: "J01MA12", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones bacterianas: sinusitis, neumonía, pielonefritis, prostatitis, infecciones de piel",
    dosis: "500 mg 1-2 veces/día", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- ROCHE (+3) ---
  {
    id: "MED122", nombre: "CellCept", principioActivo: "Micofenolato mofetilo",
    laboratorio: "Roche", atc: "L04AA06", grupoAtc: "L", subgrupoAtc: "L04",
    indicacion: "Profilaxis del rechazo agudo en trasplante alogénico renal, cardíaco o hepático",
    dosis: "1-1.5 g/12h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED123", nombre: "Xenical", principioActivo: "Orlistat",
    laboratorio: "Roche", atc: "A08AB01", grupoAtc: "A", subgrupoAtc: "A08",
    indicacion: "Obesidad (IMC >= 30 kg/m²) y sobrepeso con factores de riesgo, en combinación con dieta hipocalórica",
    dosis: "120 mg 3 veces/día con las comidas", presentacion: "Cápsulas 120 mg", tipo: "Medicamento", receta: true, financiado: false
  },
  {
    id: "MED124", nombre: "Herceptin", principioActivo: "Trastuzumab",
    laboratorio: "Roche", atc: "L01FD01", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Cáncer de mama temprano y metastásico HER2+, cáncer gástrico metastásico HER2+",
    dosis: "6 mg/kg cada 3 semanas IV", presentacion: "Vial 440 mg polvo liofilizado", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- ASTRAZENECA (+4) ---
  {
    id: "MED125", nombre: "Forxiga", principioActivo: "Dapagliflozina",
    laboratorio: "AstraZeneca", atc: "A10BK01", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2, insuficiencia cardíaca con fracción de eyección reducida, ERC",
    dosis: "10 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED126", nombre: "Symbicort Turbuhaler", principioActivo: "Budesonida + Formoterol",
    laboratorio: "AstraZeneca", atc: "R03AK07", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma bronquial persistente, EPOC sintomática",
    dosis: "1-2 inhalaciones/12h", presentacion: "Inhalador 160/4.5 µg 120 dosis", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED127", nombre: "Brilique", principioActivo: "Ticagrelor",
    laboratorio: "AstraZeneca", atc: "B01AC24", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de eventos aterotrombóticos en síndrome coronario agudo y antecedentes de IAM",
    dosis: "60-90 mg/12h", presentacion: "Comprimidos 60 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED128", nombre: "Tagrisso", principioActivo: "Osimertinib",
    laboratorio: "AstraZeneca", atc: "L01EB04", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Cáncer de pulmón no microcítico avanzado con mutación del EGFR",
    dosis: "80 mg/día", presentacion: "Comprimidos 80 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- MSD (+3) ---
  {
    id: "MED129", nombre: "Keytruda", principioActivo: "Pembrolizumab",
    laboratorio: "MSD", atc: "L01FF02", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Melanoma avanzado, CPNM, carcinoma urotelial, linfoma de Hodgkin, carcinoma escamoso de cabeza y cuello",
    dosis: "200 mg cada 3 semanas IV", presentacion: "Vial 100 mg/4ml concentrado", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED130", nombre: "Singulair", principioActivo: "Montelukast",
    laboratorio: "MSD", atc: "R03DC03", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente leve-moderado, profilaxis de broncoconstricción por ejercicio, rinitis alérgica",
    dosis: "10 mg/día por la noche", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED131", nombre: "Cozaar", principioActivo: "Losartán potásico",
    laboratorio: "MSD", atc: "C09CA01", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión esencial, reducción del riesgo de ictus en hipertensos con HVI, nefropatía diabética",
    dosis: "50-100 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- ALMIRALL (+2) ---
  {
    id: "MED132", nombre: "Sativex", principioActivo: "Delta-9-tetrahidrocannabinol + Cannabidiol",
    laboratorio: "Almirall", atc: "N02BG10", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Espasticidad moderada a grave en pacientes con esclerosis múltiple",
    dosis: "1-12 pulverizaciones/día vía bucal (flexible)", presentacion: "Solución bucal 10 ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED133", nombre: "Klisyri", principioActivo: "Tirbanibulina",
    laboratorio: "Almirall", atc: "D06BX03", grupoAtc: "D", subgrupoAtc: "D06",
    indicacion: "Tratamiento tópico de queratosis actínica de la cara o cuero cabelludo",
    dosis: "1 capa fina/día durante 5 días consecutivos", presentacion: "Pomada 10 mg/g, 5 sobres monodosis", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- MENARINI (+3) ---
  {
    id: "MED134", nombre: "Fastum", principioActivo: "Ketoprofeno",
    laboratorio: "Menarini", atc: "M01AE04", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artritis reumatoide, artrosis, dolor musculoesquelético agudo, dismenorrea primaria",
    dosis: "50 mg cada 8h", presentacion: "Cápsulas 50 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED135", nombre: "Adenuric", principioActivo: "Febuxostat",
    laboratorio: "Menarini", atc: "M04AA03", grupoAtc: "M", subgrupoAtc: "M04",
    indicacion: "Hiperuricemia crónica con depósito de urato (gota con tofos o artritis gotosa)",
    dosis: "80-120 mg/día", presentacion: "Comprimidos 80 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED136", nombre: "Spasmocytil", principioActivo: "Otilonio bromuro",
    laboratorio: "Menarini", atc: "A03AB06", grupoAtc: "A", subgrupoAtc: "A03",
    indicacion: "Espasmos del tracto gastrointestinal y dolor abdominal asociado al síndrome del intestino irritable",
    dosis: "40 mg 2-3 veces/día", presentacion: "Grageas 40 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- BOEHRINGER INGELHEIM (+2) ---
  {
    id: "MED137", nombre: "Pradaxa", principioActivo: "Dabigatrán etexilato",
    laboratorio: "Boehringer Ingelheim", atc: "B01AE07", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de ictus y embolia sistémica en FA no valvular, tratamiento de TVP y EP",
    dosis: "150 mg/12h", presentacion: "Cápsulas 150 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED138", nombre: "Micardis", principioActivo: "Telmisartán",
    laboratorio: "Boehringer Ingelheim", atc: "C09CA07", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión esencial, reducción de morbilidad cardiovascular en pacientes de alto riesgo",
    dosis: "40-80 mg/día", presentacion: "Comprimidos 40 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- MERCK (+2) ---
  {
    id: "MED139", nombre: "Emconcor (Concor)", principioActivo: "Bisoprolol fumarato",
    laboratorio: "Merck", atc: "C07AB07", grupoAtc: "C", subgrupoAtc: "C07",
    indicacion: "Hipertensión arterial, angina de pecho crónica estable, insuficiencia cardíaca crónica estable",
    dosis: "2.5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED140", nombre: "Tirozol", principioActivo: "Tiamazol (Metimazol)",
    laboratorio: "Merck", atc: "H03BB02", grupoAtc: "H", subgrupoAtc: "H03",
    indicacion: "Hipertiroidismo, crisis tirotóxica, preparación para tiroidectomía",
    dosis: "15-60 mg/día inicial (descendente según respuesta)", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- NOVO NORDISK (+2) ---
  {
    id: "MED141", nombre: "NovoRapid", principioActivo: "Insulina asparta",
    laboratorio: "Novo Nordisk", atc: "A10AB05", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 1 y 2 (insulina de acción rápida), administración inmediatamente antes de las comidas",
    dosis: "Individual, 0.5-1 U/kg/día en régimen bolo-basal", presentacion: "Pluma FlexPen 100 U/ml 3ml", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED142", nombre: "Victoza", principioActivo: "Liraglutida",
    laboratorio: "Novo Nordisk", atc: "A10BJ02", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2 para mejorar control glucémico, reduce riesgo cardiovascular",
    dosis: "0.6-1.8 mg/día subcutáneo (escalada progresiva)", presentacion: "Pluma precargada 6 mg/ml 3ml", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- KERN PHARMA (+3) ---
  {
    id: "MED143", nombre: "Omeprazol Kern Pharma", principioActivo: "Omeprazol",
    laboratorio: "Kern Pharma", atc: "A02BC01", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Úlcera gástrica y duodenal, ERGE, erradicación de Helicobacter pylori, síndrome de Zollinger-Ellison",
    dosis: "20 mg/día", presentacion: "Cápsulas 20 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED144", nombre: "Paracetamol Kern Pharma", principioActivo: "Paracetamol",
    laboratorio: "Kern Pharma", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, estados febriles en adultos y adolescentes",
    dosis: "500-1000 mg cada 6-8h (máx 3g/día)", presentacion: "Comprimidos 1g", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED145", nombre: "Ibuprofeno Kern Pharma", principioActivo: "Ibuprofeno",
    laboratorio: "Kern Pharma", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre, inflamación (artritis, dismenorrea, migraña)",
    dosis: "400-600 mg cada 6-8h (máx 1200 mg/día)", presentacion: "Comprimidos 400 mg", tipo: "Medicamento", receta: false, financiado: true
  },

  // --- ZAMBON (+3) ---
  {
    id: "MED146", nombre: "Fluimucil Forte", principioActivo: "Acetilcisteína",
    laboratorio: "Zambon", atc: "R05CB01", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Procesos catarrales y gripales con secreciones mucosas espesas",
    dosis: "600 mg/día en una sola toma", presentacion: "Comprimidos efervescentes 600 mg", tipo: "Medicamento", receta: false, financiado: true
  },
  {
    id: "MED147", nombre: "Ultra-Levura", principioActivo: "Saccharomyces boulardii CNCM I-745",
    laboratorio: "Zambon", atc: "A07FA02", grupoAtc: "A", subgrupoAtc: "A07",
    indicacion: "Tratamiento sintomático de diarrea aguda inespecífica, prevención de diarrea por antibióticos",
    dosis: "250-500 mg/día en 2 tomas", presentacion: "Suspensión oral 250 mg", tipo: "Medicamento", receta: false, financiado: false
  },
  {
    id: "MED148", nombre: "Ursochol", principioActivo: "Ácido ursodesoxicólico",
    laboratorio: "Zambon", atc: "A05AA02", grupoAtc: "A", subgrupoAtc: "A05",
    indicacion: "Disolución de cálculos biliares de colesterol, tratamiento de cirrosis biliar primaria",
    dosis: "8-10 mg/kg/día en 2 tomas", presentacion: "Comprimidos 150 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- GRUNENTHAL (+3) ---
  {
    id: "MED149", nombre: "Zaldiar", principioActivo: "Tramadol + Paracetamol",
    laboratorio: "Grunenthal", atc: "N02AJ13", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor de intensidad moderada a intensa que requiere la combinación de tramadol y paracetamol",
    dosis: "1-2 comprimidos cada 6-8h (máx 8 comprimidos/día)", presentacion: "Comprimidos 37.5/325 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED150", nombre: "Adolonta Retard", principioActivo: "Tramadol hidrocloruro",
    laboratorio: "Grunenthal", atc: "N02AX02", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor moderado a intenso en adultos y adolescentes mayores de 12 años",
    dosis: "100 mg/12h (liberación prolongada)", presentacion: "Comprimidos LP 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },
  {
    id: "MED151", nombre: "Palexia Retard", principioActivo: "Tapentadol hidrocloruro",
    laboratorio: "Grunenthal", atc: "N02AX06", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Control del dolor crónico intenso que solo puede tratarse adecuadamente con un opioide",
    dosis: "50-100 mg/12h (liberación prolongada)", presentacion: "Comprimidos LP 100 mg", tipo: "Medicamento", receta: true, financiado: true
  },

  // --- FAES FARMA (+1) ---
  {
    id: "MED152", nombre: "Venosmil", principioActivo: "Hidrosmina",
    laboratorio: "Faes Farma", atc: "C05CA05", grupoAtc: "C", subgrupoAtc: "C05",
    indicacion: "Trastornos venosos (varices, sensación de piernas cansadas, edemas periféricos, hemorroides)",
    dosis: "200 mg/12h", presentacion: "Cápsulas 200 mg", tipo: "Medicamento", receta: false, financiado: false
  }
];

// Exportar utilidades de búsqueda
export function obtenerMedicamentoPorId(id) {
  return listaMedicamentos.find(m => m.id === id) || null;
}

export function obtenerMedicamentosPorGrupo(grupo) {
  if (!grupo || grupo === 'todos') return [...listaMedicamentos];
  return listaMedicamentos.filter(m => m.grupoAtc === grupo);
}

export function obtenerMedicamentosPorSubgrupo(subgrupo) {
  if (!subgrupo) return [];
  return listaMedicamentos.filter(m => m.subgrupoAtc === subgrupo);
}

export function obtenerMedicamentosPorPrincipio(principio) {
  const t = principio.toLowerCase().trim();
  return listaMedicamentos.filter(m => m.principioActivo.toLowerCase().includes(t));
}

export function obtenerMedicamentosPorLaboratorio(lab) {
  const t = lab.toLowerCase().trim();
  return listaMedicamentos.filter(m => m.laboratorio.toLowerCase().includes(t));
}

export function buscarMedicamentos(texto) {
  const t = texto.toLowerCase().trim();
  if (!t) return [];
  return listaMedicamentos.filter(m =>
    m.nombre.toLowerCase().includes(t) ||
    m.principioActivo.toLowerCase().includes(t) ||
    m.laboratorio.toLowerCase().includes(t) ||
    m.indicacion.toLowerCase().includes(t) ||
    m.id.toLowerCase().includes(t)
  );
}

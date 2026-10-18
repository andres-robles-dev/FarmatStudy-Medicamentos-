(function() {
// FARMASTUDY - Lista completa de medicamentos (fichas farmacológicas)
// Catálogo educativo: no validado para uso clínico. Ver docs/DATOS.md.
FarmaData.registrarFuente('medicamentos', [
  {
    id: "MED001", nombre: "Omeprazol Normon", principioActivo: "Omeprazol",
    laboratorio: "Normon", atc: "A02BC01", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Úlcera gástrica y duodenal, reflujo gastroesofágico, erradicación Helicobacter pylori",
    dosis: "20 mg/día", presentacion: "Cápsulas 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a omeprazol o benzimidazoles. Uso concomitante con nelfinavir. No recomendado en insuficiencia hepática grave.", efectosAdversos: "Cefalea, dolor abdominal, diarrea, náuseas, estreñimiento, flatulencia. Riesgo de hipomagnesemia y déficit de vitamina B12 en tratamientos prolongados. Raramente: leucopenia, trombocitopenia."
  },
  {
    id: "MED002", nombre: "Pantoprazol Cinfa", principioActivo: "Pantoprazol",
    laboratorio: "Cinfa", atc: "A02BC02", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Reflujo gastroesofágico, úlcera péptica, síndrome de Zollinger-Ellison",
    dosis: "40 mg/día", presentacion: "Comprimidos 40 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a pantoprazol, benzimidazoles o excipientes.", efectosAdversos: "Cefalea, diarrea, náuseas, dolor abdominal, flatulencia. Raramente: aumento de enzimas hepáticas, trastornos del sueño, hipomagnesemia en tratamientos prolongados."
  },
  {
    id: "MED003", nombre: "Esomeprazol STADA", principioActivo: "Esomeprazol",
    laboratorio: "STADA", atc: "A02BC05", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Enfermedad por reflujo gastroesofágico, úlcera péptica",
    dosis: "20-40 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a esomeprazol, benzimidazoles o excipientes. Administración concomitante con nelfinavir.", efectosAdversos: "Cefalea, dolor abdominal, diarrea, náuseas. Riesgo de hipomagnesemia en tratamientos prolongados. Raramente: leucopenia, trombocitopenia, reacciones de hipersensibilidad."
  },
  {
    id: "MED004", nombre: "Metformina Normon", principioActivo: "Metformina",
    laboratorio: "Normon", atc: "A10BA02", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2",
    dosis: "850 mg/8-12h", presentacion: "Comprimidos 850 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a metformina o excipientes. Acidosis metabólica aguda, cetoacidosis diabética. Insuficiencia renal grave (TFG <30 ml/min). Insuficiencia hepática. Alcoholismo.", efectosAdversos: "Náuseas, vómitos, diarrea, dolor abdominal, pérdida de apetito (al inicio). Riesgo de acidosis láctica (raro pero grave). Disminución de vitamina B12 en uso prolongado."
  },
  {
    id: "MED005", nombre: "Januvia", principioActivo: "Sitagliptina",
    laboratorio: "MSD", atc: "A10BH01", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2 en combinación con metformina",
    dosis: "100 mg/día", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a sitagliptina o excipientes.", efectosAdversos: "Cefalea, nasofaringitis, infección respiratoria alta. Raramente: pancreatitis, reacciones de hipersensibilidad, artralgia."
  },
  {
    id: "MED006", nombre: "Insulina Humana NPH", principioActivo: "Insulina humana NPH (isofánica)",
    laboratorio: "Novo Nordisk", atc: "A10AC01", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 1 y 2",
    dosis: "Según perfil glucémico", presentacion: "Suspensión inyectable 100 UI/ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a insulina humana o excipientes. Hipoglucemia.", efectosAdversos: "Hipoglucemia (la más frecuente). Reacciones en lugar de inyección (lipodistrofia, dolor, eritema). Edema transitorio al inicio. Raramente: reacciones alérgicas."
  },
  {
    id: "MED007", nombre: "Hidroferol", principioActivo: "Calcifediol (25-hidroxivitamina D3)",
    laboratorio: "Faes Farma", atc: "A11CC05", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Déficit de vitamina D, prevención de osteoporosis",
    dosis: "0.266 mg/día", presentacion: "Cápsulas blandas 0.266 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a calcifediol o excipientes. Hipercalcemia, hipercalciuria. Litiasis cálcica. Hipervitaminosis D. Enfermedades granulomatosas.", efectosAdversos: "Hipercalcemia e hipercalciuria (por sobredosificación). Raramente: reacciones de hipersensibilidad, estreñimiento, náuseas."
  },
  {
    id: "MED008", nombre: "Pylera", principioActivo: "Subcitrato de bismuto potasio + Metronidazol + Tetraciclina clorhidrato",
    laboratorio: "Laboratoires Juvise Pharmaceuticals", atc: "A02BD08", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Erradicación de Helicobacter pylori (en combinación con omeprazol)",
    dosis: "3 cápsulas 4 veces/día tras comidas y al acostarse", presentacion: "Cápsulas 140/125/125 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a los principios activos. Embarazo y lactancia. Insuficiencia renal o hepática. Niños <12 años. Síndrome de Cockayne.", efectosAdversos: "Heces anormales (negras), diarrea, náuseas, disgeusia (sabor metálico). Raramente: colitis pseudomembranosa, neuropatía periférica, Síndrome de Stevens-Johnson."
  },
  {
    id: "MED009", nombre: "Fortasec", principioActivo: "Loperamida",
    laboratorio: "Italchimici", atc: "A07DA03", grupoAtc: "A", subgrupoAtc: "A07",
    indicacion: "Diarrea aguda y crónica",
    dosis: "2 mg tras cada deposición (máx 8 mg/día)", presentacion: "Cápsulas 2 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a loperamida o excipientes. Niños <12 años. Disentería aguda con sangre y fiebre. Colitis ulcerosa aguda. Íleo, distensión abdominal.", efectosAdversos: "Estreñimiento, flatulencia, náuseas, dolor de cabeza, mareos. Raramente: íleo paralítico, distensión abdominal, reacciones de hipersensibilidad."
  },
  {
    id: "MED010", nombre: "Sal de Fruta Eno", principioActivo: "Bicarbonato sódico + Ácido cítrico",
    laboratorio: "Bayer", atc: "A02AH", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Pirosis, acidez de estómago, indigestión",
    dosis: "1 sobre después de las comidas", presentacion: "Sobres efervescentes", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a los principios activos. Insuficiencia renal o hepática. Dietas bajas en sodio. Alcalosis metabólica.", efectosAdversos: "Eructos, flatulencia, distensión abdominal. Uso prolongado: riesgo de alcalosis metabólica, hipernatremia, efecto rebote."
  },
  {
    id: "MED011", nombre: "Dulcolax", principioActivo: "Bisacodilo",
    laboratorio: "Sanofi", atc: "A06AB02", grupoAtc: "A", subgrupoAtc: "A06",
    indicacion: "Estreñimiento ocasional",
    dosis: "5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a bisacodilo o excipientes. Dolor abdominal de origen desconocido, obstrucción intestinal, íleo, apendicitis. Hemorragia digestiva. Enfermedad inflamatoria intestinal. Niños <10 años.", efectosAdversos: "Dolor abdominal, calambres, diarrea. Uso prolongado: alteraciones hidroelectrolíticas. Raramente: reacciones de hipersensibilidad, mareos."
  },
  {
    id: "MED012", nombre: "Sintrom", principioActivo: "Acenocumarol",
    laboratorio: "Novartis", atc: "B01AA07", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de tromboembolismo, fibrilación auricular, prótesis valvulares",
    dosis: "Según INR (1-8 mg/día)", presentacion: "Comprimidos 1 mg y 4 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a acenocumarol o cumarínicos. Embarazo. Diátesis hemorrágica. Úlcera péptica activa. Hipertensión grave. Insuficiencia hepática o renal grave. Cirugía reciente SNC u oftalmológica.", efectosAdversos: "Hemorragia (la más frecuente, riesgo aumentado si INR elevado). Raramente: necrosis cutánea, vasculitis, alopecia, elevación de enzimas hepáticas."
  },
  {
    id: "MED013", nombre: "Adiro", principioActivo: "Ácido acetilsalicílico",
    laboratorio: "Bayer", atc: "B01AC06", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de eventos cardiovasculares, especialmente tras infarto",
    dosis: "100-300 mg/día", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a AAS, salicilatos o AINE. Asma. Úlcera gastroduodenal activa. Diátesis hemorrágica. Insuficiencia renal, hepática o cardíaca grave. Niños <16 años con fiebre (Síndrome de Reye). Tercer trimestre embarazo. Metotrexato >15 mg/semana.", efectosAdversos: "Irritación gástrica, úlcera péptica, hemorragia gastrointestinal. Raramente: broncoespasmo, reacciones alérgicas, tinnitus (con sobredosis)."
  },
  {
    id: "MED014", nombre: "Plavix", principioActivo: "Clopidogrel",
    laboratorio: "Sanofi", atc: "B01AC04", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de eventos aterotrombóticos en pacientes con síndrome coronario agudo",
    dosis: "75 mg/día", presentacion: "Comprimidos 75 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a clopidogrel o excipientes. Insuficiencia hepática grave. Hemorragia activa (úlcera péptica, hemorragia intracraneal).", efectosAdversos: "Hemorragia (la más frecuente, especialmente gastrointestinal). Disnea. Raramente: púrpura trombótica trombocitopénica, neutropenia, reacciones de hipersensibilidad."
  },
  {
    id: "MED015", nombre: "Hemoal", principioActivo: "Sales de hierro (glicina sulfato ferroso)",
    laboratorio: "Italchimici", atc: "B03AA07", grupoAtc: "B", subgrupoAtc: "B03",
    indicacion: "Anemia ferropénica, déficit de hierro",
    dosis: "1-2 comprimidos/día", presentacion: "Comprimidos", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a sales de hierro o excipientes. Hemocromatosis. Anemia no ferropénica. Talasemia. Sobrecarga de hierro. Úlcera péptica activa.", efectosAdversos: "Náuseas, estreñimiento, dolor abdominal, heces oscuras. Raramente: reacciones alérgicas, manchas en dientes (líquidos)."
  },
  {
    id: "MED016", nombre: "Ácido Fólico Cinfa", principioActivo: "Ácido fólico",
    laboratorio: "Cinfa", atc: "B03BB01", grupoAtc: "B", subgrupoAtc: "B03",
    indicacion: "Prevención de defectos del tubo neural en el embarazo, anemia megaloblástica",
    dosis: "0.4-5 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a ácido fólico o excipientes. Anemia perniciosa no tratada (puede enmascarar el diagnóstico).", efectosAdversos: "Raramente: reacciones alérgicas (erupción cutánea, prurito). Generalmente bien tolerado."
  },
  {
    id: "MED017", nombre: "Enalapril Cinfa", principioActivo: "Enalapril",
    laboratorio: "Cinfa", atc: "C09AA02", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial, insuficiencia cardíaca, prevención de eventos cardiovasculares",
    dosis: "5-20 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a enalapril, IECA o excipientes. Antecedentes de angioedema. Embarazo (2º y 3er trimestre). Uso concomitante con aliskirén en DM o IR. Uso con sacubitril/valsartán.", efectosAdversos: "Tos seca (la más frecuente). Mareos, hipotensión. Raramente: angioedema, hiperpotasemia, insuficiencia renal, neutropenia."
  },
  {
    id: "MED018", nombre: "Simvastatina Normon", principioActivo: "Simvastatina",
    laboratorio: "Normon", atc: "C10AA01", grupoAtc: "C", subgrupoAtc: "C10",
    indicacion: "Hipercolesterolemia, prevención de enfermedad cardiovascular",
    dosis: "20-40 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a simvastatina o excipientes. Enfermedad hepática activa. Embarazo y lactancia. Uso concomitante con inhibidores potentes CYP3A4 (itraconazol, ketoconazol, eritromicina, VIH proteasas). Uso con gemfibrozilo, ciclosporina.", efectosAdversos: "Dolor muscular, mialgia. Riesgo de miopatía/rabdomiólisis. Elevación de transaminasas. Raramente: neuropatía periférica, pancreatitis."
  },
  {
    id: "MED019", nombre: "Atorvastatina STADA", principioActivo: "Atorvastatina",
    laboratorio: "STADA", atc: "C10AA05", grupoAtc: "C", subgrupoAtc: "C10",
    indicacion: "Hipercolesterolemia, hiperlipidemia combinada, prevención cardiovascular",
    dosis: "10-80 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a atorvastatina o excipientes. Enfermedad hepática activa. Embarazo y lactancia. Mujeres en edad fértil sin anticoncepción. Uso con glecaprevir/pibrentasvir.", efectosAdversos: "Dolor muscular, mialgia, diarrea, náuseas. Riesgo de miopatía/rabdomiólisis. Elevación de transaminasas. Raramente: neuropatía periférica."
  },
  {
    id: "MED020", nombre: "Amlodipino Normon", principioActivo: "Amlodipino",
    laboratorio: "Normon", atc: "C08CA01", grupoAtc: "C", subgrupoAtc: "C08",
    indicacion: "Hipertensión arterial, angina de pecho",
    dosis: "5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a amlodipino, dihidropiridinas o excipientes. Hipotensión grave. Shock cardiogénico. Estenosis aórtica grave. Insuficiencia cardíaca inestable post-IAM.", efectosAdversos: "Edema de tobillos (frecuente). Cefalea, mareos, sofocos, palpitaciones, fatiga. Raramente: hiperplasia gingival, depresión, elevación de enzimas hepáticas."
  },
  {
    id: "MED021", nombre: "Losartán Cinfa", principioActivo: "Losartán",
    laboratorio: "Cinfa", atc: "C09CA01", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial, nefropatía diabética, prevención de ictus",
    dosis: "50-100 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a losartán o excipientes. Embarazo (2º y 3er trimestre). Insuficiencia hepática grave. Uso concomitante con aliskirén en DM o IR.", efectosAdversos: "Mareos (frecuente). Hipotensión. Raramente: hiperpotasemia, insuficiencia renal, angioedema, anemia."
  },
  {
    id: "MED022", nombre: "Bisoprolol Normon", principioActivo: "Bisoprolol",
    laboratorio: "Normon", atc: "C07AB07", grupoAtc: "C", subgrupoAtc: "C07",
    indicacion: "Hipertensión arterial, angina de pecho, insuficiencia cardíaca crónica",
    dosis: "2.5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a bisoprolol o excipientes. Insuficiencia cardíaca aguda/descompensada. Shock cardiogénico. Bloqueo AV 2º/3er grado. Bradicardia sintomática. Hipotensión. Asma grave. EPOC grave. Síndrome de Raynaud grave. Acidosis metabólica.", efectosAdversos: "Bradicardia, fatiga, mareos, cefalea. Empeoramiento de insuficiencia cardíaca (al inicio). Raramente: broncoespasmo, trastornos del sueño, extremidades frías."
  },
  {
    id: "MED023", nombre: "Furosemida Cinfa", principioActivo: "Furosemida",
    laboratorio: "Cinfa", atc: "C03CA01", grupoAtc: "C", subgrupoAtc: "C03",
    indicacion: "Edema asociado a insuficiencia cardíaca, cirrosis hepática, enfermedad renal",
    dosis: "20-80 mg/día", presentacion: "Comprimidos 40 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a furosemida o excipientes (alergia cruzada con sulfonamidas). Hipovolemia/deshidratación. Insuficiencia renal anúrica. Hipopotasemia grave. Hiponatremia grave. Encefalopatía hepática. Lactancia.", efectosAdversos: "Alteraciones electrolíticas (hipopotasemia, hiponatremia), deshidratación, hipotensión ortostática. Raramente: ototoxicidad, gota, hiperglucemia, pancreatitis."
  },
  {
    id: "MED024", nombre: "Digoxina", principioActivo: "Digoxina",
    laboratorio: "Zambon", atc: "C01AA05", grupoAtc: "C", subgrupoAtc: "C01",
    indicacion: "Insuficiencia cardíaca, fibrilación auricular",
    dosis: "0.0625-0.25 mg/día", presentacion: "Comprimidos 0.25 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a digoxina o digitálicos. Bloqueo AV 2º grado. Síndrome de WPW. Arritmias por intoxicación digitálica. Cardiomiopatía hipertrófica obstructiva. Taquicardia ventricular.", efectosAdversos: "Arritmias cardíacas (por toxicidad, margen terapéutico estrecho). Náuseas, vómitos, anorexia. Raramente: visión borrosa, confusión, ginecomastia."
  },
  {
    id: "MED025", nombre: "Cafinitrina", principioActivo: "Nitroglicerina + Cafeína citrato",
    laboratorio: "Kern Pharma", atc: "C01DA52", grupoAtc: "C", subgrupoAtc: "C01",
    indicacion: "Crisis de angina de pecho, prevención de angina",
    dosis: "0.5-1 mg sublingual", presentacion: "Comprimidos sublinguales 0.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a nitroglicerina, nitroderivados o excipientes. Anemia grave. Hemorragia cerebral. Hipotensión grave. Miocardiopatía obstructiva. Uso con inhibidores PDE5 (sildenafilo). Uso con riociguat.", efectosAdversos: "Cefalea intensa (frecuente). Hipotensión ortostática, mareos, taquicardia, rubefacción. Raramente: metahemoglobinemia (con dosis altas), síncope."
  },
  {
    id: "MED026", nombre: "Clotrimazol Cinfa", principioActivo: "Clotrimazol",
    laboratorio: "Cinfa", atc: "D01AC01", grupoAtc: "D", subgrupoAtc: "D01",
    indicacion: "Infecciones cutáneas por hongos (candidiasis, dermatofitosis)",
    dosis: "Aplicar 2-3 veces/día", presentacion: "Crema 1% 30g", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a clotrimazol o excipientes.", efectosAdversos: "Irritación local, prurito, ardor, eritema. Raramente: reacciones alérgicas cutáneas."
  },
  {
    id: "MED027", nombre: "Mometasona Cinfa", principioActivo: "Mometasona furoato",
    laboratorio: "Cinfa", atc: "D07AC13", grupoAtc: "D", subgrupoAtc: "D07",
    indicacion: "Dermatitis atópica, psoriasis, eczema de contacto",
    dosis: "1 vez/día", presentacion: "Crema 0.1% 30g", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a mometasona, corticosteroides o excipientes. Tuberculosis cutánea. Infecciones cutáneas víricas, fúngicas o bacterianas no tratadas. Acné vulgar, rosácea. Dermatitis perioral.", efectosAdversos: "Atrofia cutánea, estrías, hipertricosis, dermatitis de contacto. Uso prolongado: supresión adrenal. Raramente: hiperpigmentación."
  },
  {
    id: "MED028", nombre: "Hidrocortisona Cinfa", principioActivo: "Hidrocortisona",
    laboratorio: "Cinfa", atc: "D07AA02", grupoAtc: "D", subgrupoAtc: "D07",
    indicacion: "Dermatitis leve, eczema, picaduras de insecto, alergia cutánea",
    dosis: "1-2 veces/día", presentacion: "Crema 0.5% 30g", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a hidrocortisona o excipientes. Infecciones cutáneas víricas, fúngicas o bacterianas no tratadas. Úlceras. Rosácea, acné vulgar.", efectosAdversos: "Atrofia cutánea, telangiectasias (uso prolongado). Raramente: dermatitis alérgica de contacto, hipertricosis."
  },
  {
    id: "MED029", nombre: "Isdin Hidrosis", principioActivo: "Agua de mar + Gluconato de cobre + Gluconato de zinc",
    laboratorio: "ISDIN", atc: "D08AX", grupoAtc: "D", subgrupoAtc: "D08",
    indicacion: "Higiene y cuidado de la piel irritada, dermatitis del pañal",
    dosis: "Aplicar en cada cambio", presentacion: "Solución 200 ml", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a los principios activos o excipientes.", efectosAdversos: "Raramente: irritación local leve. Generalmente bien tolerado."
  },
  {
    id: "MED030", nombre: "Fusicutan", principioActivo: "Ácido fusídico",
    laboratorio: "LEO Pharma", atc: "D06AX01", grupoAtc: "D", subgrupoAtc: "D06",
    indicacion: "Infecciones cutáneas bacterianas (impétigo, foliculitis)",
    dosis: "3-4 veces/día", presentacion: "Crema 2% 15g", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a ácido fusídico o excipientes. Infecciones fúngicas o víricas cutáneas primarias no tratadas. Tuberculosis cutánea. Niños <2 años (asociado a corticoide).", efectosAdversos: "Irritación local, prurito, eritema, dermatitis de contacto. Raramente: reacciones alérgicas."
  },
  {
    id: "MED031", nombre: "Omnic", principioActivo: "Tamsulosina",
    laboratorio: "Astellas Pharma", atc: "G04CA02", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Síntomas de hiperplasia benigna de próstata",
    dosis: "0.4 mg/día", presentacion: "Cápsulas 0.4 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a tamsulosina o excipientes. Hipotensión ortostática. Insuficiencia hepática grave.", efectosAdversos: "Mareos, eyaculación retrógrada/anejaculación. Raramente: hipotensión ortostática, síncope, rinitis. Asociado a Síndrome del Iris Flácido Intraoperatorio (IFIS) en cirugía de cataratas."
  },
  {
    id: "MED032", nombre: "Proscar", principioActivo: "Finasterida",
    laboratorio: "MSD", atc: "G04CB01", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Hiperplasia benigna de próstata",
    dosis: "5 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a finasterida o excipientes. Mujeres embarazadas o que puedan estarlo (riesgo de alteraciones en feto varón). Niños.", efectosAdversos: "Impotencia, disminución de la libido, trastornos de la eyaculación. Raramente: depresión, ginecomastia. Falsas reducciones de PSA."
  },
  {
    id: "MED033", nombre: "Yasmin", principioActivo: "Drospirenona + Etinilestradiol",
    laboratorio: "Bayer", atc: "G03AA12", grupoAtc: "G", subgrupoAtc: "G03",
    indicacion: "Anticoncepción oral",
    dosis: "1 comprimido/día 21 días", presentacion: "Comprimidos 3 mg/0.03 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a los principios activos. Tromboembolismo venoso actual o antecedentes. Riesgo elevado de TEV/TEA. Enfermedad hepática grave. Insuficiencia renal grave. Tumores hepáticos. Neoplasias dependientes de hormonas. Migraña con aura. Embarazo y lactancia.", efectosAdversos: "Náuseas, dolor abdominal, cefalea, cambios de peso, tensión mamaria. Riesgo de tromboembolismo venoso (raro). Raramente: cloasma, alteraciones del humor. Posible retención de potasio por drospirenona."
  },
  {
    id: "MED034", nombre: "Canesten óvulos", principioActivo: "Clotrimazol",
    laboratorio: "Bayer", atc: "G01AF02", grupoAtc: "G", subgrupoAtc: "G01",
    indicacion: "Candidiasis vaginal",
    dosis: "1 óvulo/día durante 6 días", presentacion: "Óvulos vaginales 100 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a clotrimazol o excipientes.", efectosAdversos: "Irritación local, prurito, ardor, eritema. Raramente: reacciones alérgicas cutáneas."
  },
  {
    id: "MED035", nombre: "Eutirox", principioActivo: "Levotiroxina sódica",
    laboratorio: "Merck", atc: "H03AA01", grupoAtc: "H", subgrupoAtc: "H03",
    indicacion: "Hipotiroidismo, bocio eutiroideo, terapia supresora TSH",
    dosis: "50-200 µg/día", presentacion: "Comprimidos 100 µg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a levotiroxina o excipientes. Insuficiencia adrenal no tratada. Tirotoxicosis no tratada. Infarto agudo de miocardio, miocarditis aguda.", efectosAdversos: "Síntomas de hipertiroidismo si sobredosis: taquicardia, palpitaciones, ansiedad, temblor, insomnio, pérdida de peso. Raramente: reacciones alérgicas cutáneas."
  },
  {
    id: "MED036", nombre: "Prednisona Cinfa", principioActivo: "Prednisona",
    laboratorio: "Cinfa", atc: "H02AB07", grupoAtc: "H", subgrupoAtc: "H02",
    indicacion: "Enfermedades inflamatorias y autoinmunes, alergias graves, asma severo",
    dosis: "5-60 mg/día (descendente)", presentacion: "Comprimidos 30 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a prednisona o excipientes. Infecciones víricas agudas (herpes, varicela). Vacunación reciente con virus vivos. (En tratamientos cortos no hay contraindicaciones absolutas). En tratamientos prolongados: úlcera péptica, osteoporosis, diabetes grave, psicosis, tuberculosis activa, infecciones fúngicas.", efectosAdversos: "Síndrome de Cushing, osteoporosis, hiperglucemia, retención de sodio/pérdida de potasio, cataratas, glaucoma. Raramente: pancreatitis, necrosis aséptica ósea. Supresión adrenal al suspender."
  },
  {
    id: "MED037", nombre: "Urbason", principioActivo: "Metilprednisolona",
    laboratorio: "Sanofi", atc: "H02AB04", grupoAtc: "H", subgrupoAtc: "H02",
    indicacion: "Procesos inflamatorios severos, enfermedades autoinmunes, asma agudo",
    dosis: "4-40 mg/día", presentacion: "Comprimidos 16 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a metilprednisolona, glucocorticoides o excipientes. Úlcera péptica activa. Osteoporosis grave. Glaucoma. Queratitis herpética. Infecciones víricas agudas. Tuberculosis activa. Micosis sistémica.", efectosAdversos: "Síndrome de Cushing, osteoporosis, hiperglucemia, retención de sodio, inmunosupresión. Supresión adrenal al suspender. Raramente: pancreatitis, cataratas, glaucoma."
  },
  {
    id: "MED038", nombre: "Amoxicilina Cinfa", principioActivo: "Amoxicilina",
    laboratorio: "Cinfa", atc: "J01CA04", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, urinarias, otitis, sinusitis, faringitis bacteriana",
    dosis: "500 mg cada 8h", presentacion: "Cápsulas 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a amoxicilina, penicilinas o excipientes. Antecedentes de reacción anafiláctica a betalactámicos.", efectosAdversos: "Diarrea, náuseas, erupción cutánea. Raramente: colitis pseudomembranosa, leucopenia, trombocitopenia, reacciones alérgicas graves (anafilaxia), Síndrome de Stevens-Johnson."
  },
  {
    id: "MED039", nombre: "Augmentine", principioActivo: "Amoxicilina + Ácido clavulánico",
    laboratorio: "GSK", atc: "J01CR02", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones bacterianas resistentes a amoxicilina sola",
    dosis: "500/125 mg cada 8h", presentacion: "Comprimidos 500/125 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a amoxicilina, ácido clavulánico, penicilinas o excipientes. Antecedentes de reacción anafiláctica a betalactámicos. Antecedentes de ictericia o insuficiencia hepática por amoxicilina/clavulánico.", efectosAdversos: "Diarrea (frecuente), náuseas, vómitos, erupción cutánea. Raramente: colitis pseudomembranosa, hepatitis, leucopenia, reacciones alérgicas graves."
  },
  {
    id: "MED040", nombre: "Azitromicina Normon", principioActivo: "Azitromicina",
    laboratorio: "Normon", atc: "J01FA10", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, infecciones de piel y tejidos blandos, uretritis",
    dosis: "500 mg/día 3 días", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a azitromicina, eritromicina, macrólidos, ketólidos o excipientes.", efectosAdversos: "Diarrea, náuseas, dolor abdominal, cefalea, vómitos. Raramente: prolongación QT, torsade de pointes, colitis pseudomembranosa, hepatitis, reacciones alérgicas graves, Síndrome de Stevens-Johnson."
  },
  {
    id: "MED041", nombre: "Clamoxyl", principioActivo: "Amoxicilina",
    laboratorio: "GSK", atc: "J01CA04", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, genitourinarias, gastrointestinales",
    dosis: "500 mg cada 8h", presentacion: "Suspensión oral 250 mg/5ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a amoxicilina, penicilinas o excipientes. Antecedentes de reacción anafiláctica a betalactámicos.", efectosAdversos: "Diarrea, náuseas, erupción cutánea. Raramente: colitis pseudomembranosa, leucopenia, trombocitopenia, reacciones alérgicas graves (anafilaxia), Síndrome de Stevens-Johnson."
  },
  {
    id: "MED042", nombre: "Doxiciclina Cinfa", principioActivo: "Doxiciclina",
    laboratorio: "Cinfa", atc: "J01AA02", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones por bacterias atípicas, acné, enfermedad de Lyme, brucelosis",
    dosis: "100 mg/12h", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a doxiciclina, tetraciclinas o excipientes. Niños <8 años (depósito en huesos y dientes). Embarazo y lactancia.", efectosAdversos: "Náuseas, fotosensibilidad, esofagitis. Raramente: colitis pseudomembranosa, hipertensión intracraneal benigna, hepatotoxicidad."
  },
  {
    id: "MED043", nombre: "Ciprofloxacino Normon", principioActivo: "Ciprofloxacino",
    laboratorio: "Normon", atc: "J01MA02", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones urinarias complicadas, respiratorias, gastrointestinales, óseas",
    dosis: "250-750 mg/12h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a ciprofloxacino, quinolonas o excipientes. Administración concomitante con tizanidina. Epilepsia. Antecedentes de tendinopatía por quinolonas. Niños y adolescentes (salvo excepciones).", efectosAdversos: "Náuseas, diarrea. Raramente: tendinitis/rotura tendinosa, neuropatía periférica, convulsiones, prolongación QT, colitis pseudomembranosa, fotosensibilidad. Puede empeorar miastenia gravis."
  },
  {
    id: "MED044", nombre: "Valtrex", principioActivo: "Valaciclovir",
    laboratorio: "GSK", atc: "J05AB11", grupoAtc: "J", subgrupoAtc: "J05",
    indicacion: "Herpes zóster, herpes genital, herpes labial",
    dosis: "500 mg-1g/12h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a valaciclovir, aciclovir o excipientes.", efectosAdversos: "Cefalea, náuseas. Raramente: confusión, alucinaciones (especialmente en ancianos o insuficiencia renal), insuficiencia renal aguda, leucopenia, reacciones cutáneas graves."
  },
  {
    id: "MED045", nombre: "Zelitrex", principioActivo: "Valaciclovir",
    laboratorio: "GSK", atc: "J05AB11", grupoAtc: "J", subgrupoAtc: "J05",
    indicacion: "Herpes zóster, herpes genital",
    dosis: "500 mg/12h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a valaciclovir, aciclovir o excipientes.", efectosAdversos: "Cefalea, náuseas. Raramente: confusión, alucinaciones (especialmente en ancianos o insuficiencia renal), insuficiencia renal aguda, leucopenia, reacciones cutáneas graves."
  },
  {
    id: "MED046", nombre: "Fluconazol Cinfa", principioActivo: "Fluconazol",
    laboratorio: "Cinfa", atc: "J02AC01", grupoAtc: "J", subgrupoAtc: "J02",
    indicacion: "Candidiasis sistémica, criptococosis, candidiasis vaginal recurrente",
    dosis: "150 mg/semana o 50-400 mg/día", presentacion: "Cápsulas 150 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a fluconazol, azoles o excipientes. Coadministración con terfenadina (si fluconazol >=400 mg/día). Coadministración con cisaprida, astemizol, pimozida, quinidina, eritromicina.", efectosAdversos: "Cefalea, dolor abdominal, diarrea, náuseas. Raramente: hepatotoxicidad, prolongación QT, torsade de pointes, reacciones cutáneas graves (DRESS, Stevens-Johnson), anafilaxia."
  },
  {
    id: "MED047", nombre: "Ibuprofeno Cinfa", principioActivo: "Ibuprofeno",
    laboratorio: "Cinfa", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre, inflamación (artritis, lumbalgia, dismenorrea)",
    dosis: "400-600 mg cada 6-8h", presentacion: "Comprimidos 600 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a ibuprofeno, AINE, salicilatos o excipientes. Úlcera péptica/hemorragia gastrointestinal activa o antecedentes. Insuficiencia renal grave (FG <30). Insuficiencia hepática grave. Insuficiencia cardíaca grave (NYHA IV). 3er trimestre embarazo.", efectosAdversos: "Dispepsia, dolor abdominal, náuseas, diarrea. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: insuficiencia renal, elevación de transaminasas, reacciones alérgicas (broncoespasmo, angioedema)."
  },
  {
    id: "MED048", nombre: "Enantyum", principioActivo: "Dexketoprofeno",
    laboratorio: "Menarini", atc: "M01AE17", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor agudo leve a moderado (muscular, dental, postoperatorio)",
    dosis: "25 mg cada 8h", presentacion: "Comprimidos 25 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a dexketoprofeno, AINE o excipientes. Úlcera péptica activa o antecedentes. Hemorragia gastrointestinal. Insuficiencia cardíaca, renal o hepática grave. 3er trimestre embarazo. Enfermedad de Crohn o colitis ulcerosa activa.", efectosAdversos: "Náuseas, vómitos, dolor abdominal. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: insuficiencia renal, reacciones cutáneas, broncoespasmo."
  },
  {
    id: "MED049", nombre: "Naproxeno Cinfa", principioActivo: "Naproxeno",
    laboratorio: "Cinfa", atc: "M01AE02", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artritis reumatoide, osteoartritis, dolor musculoesquelético, dismenorrea",
    dosis: "500-1000 mg/día", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a naproxeno, AINE o excipientes. Úlcera péptica activa. Antecedentes de hemorragia GI por AINE. Insuficiencia renal, hepática o cardíaca grave. 3er trimestre embarazo.", efectosAdversos: "Dispepsia, náuseas, dolor abdominal. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: edema, insuficiencia renal, reacciones cutáneas."
  },
  {
    id: "MED050", nombre: "Nolotil", principioActivo: "Metamizol magnésico",
    laboratorio: "Boehringer Ingelheim", atc: "N02BB02", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor agudo intenso (cólico renal, dolor postquirúrgico), fiebre alta",
    dosis: "500-1000 mg cada 6-8h", presentacion: "Cápsulas 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a metamizol, pirazolonas, pirazolidinas o excipientes. Agranulocitosis previa por metamizol. Alteraciones de médula ósea. Déficit de G6PD. Porfiria hepática. Asma por analgésicos. 3er trimestre embarazo. Hipotensión.", efectosAdversos: "Riesgo de agranulocitosis (raro pero grave). Reacciones de hipersensibilidad (anafilaxia). Hipotensión, especialmente tras administración IV. Raramente: broncoespasmo."
  },
  {
    id: "MED051", nombre: "Voltaren", principioActivo: "Diclofenaco",
    laboratorio: "Novartis", atc: "M01AB05", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor e inflamación musculoesquelética, artritis, gota aguda",
    dosis: "75-150 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a diclofenaco, AINE o excipientes. Úlcera péptica activa. Hemorragia gastrointestinal. Insuficiencia hepática, renal o cardíaca grave. Enfermedad de Crohn o colitis ulcerosa activa. 3er trimestre embarazo. Cardiopatía isquémica.", efectosAdversos: "Dispepsia, dolor abdominal, náuseas. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: hepatotoxicidad, insuficiencia renal, reacciones cutáneas graves, eventos cardiovasculares."
  },
  {
    id: "MED052", nombre: "Voltaren Emulgel", principioActivo: "Diclofenaco dietilamino",
    laboratorio: "Novartis", atc: "M02AA15", grupoAtc: "M", subgrupoAtc: "M02",
    indicacion: "Dolor localizado muscular y articular, contusiones, torceduras",
    dosis: "Aplicar 3-4 veces/día", presentacion: "Gel 1% 60g", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a diclofenaco, AINE o excipientes. No aplicar sobre heridas, mucosas, quemaduras, lesiones eczematosas. 3er trimestre embarazo. Niños <14 años.", efectosAdversos: "Eritema local, prurito, dermatitis de contacto. Raramente: reacciones alérgicas, fotosensibilidad."
  },
  {
    id: "MED053", nombre: "Paracetamol Cinfa", principioActivo: "Paracetamol",
    laboratorio: "Cinfa", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, fiebre",
    dosis: "500-1000 mg cada 6-8h (máx 4g/día)", presentacion: "Comprimidos 650 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a paracetamol o excipientes. Insuficiencia hepática grave.", efectosAdversos: "Raramente: hepatotoxicidad (especialmente a dosis altas >4 g/día o en alcoholismo). Reacciones alérgicas cutáneas. Muy raramente: trombocitopenia, leucopenia, hipoglucemia."
  },
  {
    id: "MED054", nombre: "Gelocatil", principioActivo: "Paracetamol",
    laboratorio: "Gebro Pharma", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, fiebre",
    dosis: "500-1000 mg cada 6-8h", presentacion: "Comprimidos 650 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a paracetamol o excipientes. Insuficiencia hepática grave.", efectosAdversos: "Raramente: hepatotoxicidad (especialmente a dosis altas >4 g/día o en alcoholismo). Reacciones alérgicas cutáneas. Muy raramente: trombocitopenia, leucopenia, hipoglucemia."
  },
  {
    id: "MED055", nombre: "Apiretal", principioActivo: "Paracetamol",
    laboratorio: "ERN", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado y fiebre en niños",
    dosis: "Según peso (15 mg/kg cada 6h)", presentacion: "Solución oral 100 mg/ml", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a paracetamol o excipientes. Insuficiencia hepática grave.", efectosAdversos: "Raramente: hepatotoxicidad (especialmente a dosis altas >4 g/día o en alcoholismo). Reacciones alérgicas cutáneas. Muy raramente: trombocitopenia, leucopenia, hipoglucemia."
  },
  {
    id: "MED056", nombre: "Tramadol Cinfa", principioActivo: "Tramadol",
    laboratorio: "Cinfa", atc: "N02AX02", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor moderado a severo",
    dosis: "50-100 mg cada 6-8h", presentacion: "Cápsulas 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a tramadol o excipientes. Intoxicación aguda por alcohol, hipnóticos, opioides o psicótropos. IMAO (actual o últimos 14 días). Epilepsia no controlada. Síndrome de abstinencia a opioides.", efectosAdversos: "Náuseas, mareos (muy frecuentes). Somnolencia, cefalea, estreñimiento. Raramente: convulsiones, depresión respiratoria, síndrome serotoninérgico, dependencia."
  },
  {
    id: "MED057", nombre: "Orfidal", principioActivo: "Lorazepam",
    laboratorio: "Pfizer", atc: "N05BA06", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Ansiedad, trastorno de pánico, insomnio de corta duración",
    dosis: "1-5 mg/día", presentacion: "Comprimidos 1 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a lorazepam, benzodiazepinas o excipientes. Miastenia gravis. Insuficiencia respiratoria grave. Síndrome de apnea del sueño. Insuficiencia hepática grave.", efectosAdversos: "Somnolencia, sedación, mareos, ataxia, debilidad muscular. Riesgo de dependencia y tolerancia. Raramente: amnesia anterógrada, reacciones paradójicas (agitación, irritabilidad), depresión respiratoria."
  },
  {
    id: "MED058", nombre: "Diazepam Cinfa", principioActivo: "Diazepam",
    laboratorio: "Cinfa", atc: "N05BA01", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Ansiedad, espasmos musculares, epilepsia, alcoholismo agudo",
    dosis: "5-30 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a diazepam, benzodiazepinas o excipientes. Miastenia gravis. Insuficiencia respiratoria grave. Síndrome de apnea del sueño. Insuficiencia hepática grave. Enfermedad psicótica. Depresión severa (riesgo de suicidio).", efectosAdversos: "Somnolencia, fatiga, debilidad muscular, ataxia, mareos. Riesgo de dependencia y tolerancia. Raramente: amnesia anterógrada, reacciones paradójicas (agitación, hostilidad), depresión respiratoria."
  },
  {
    id: "MED059", nombre: "Fluoxetina Normon", principioActivo: "Fluoxetina",
    laboratorio: "Normon", atc: "N06AB03", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Depresión mayor, trastorno obsesivo-compulsivo, bulimia nerviosa",
    dosis: "20-80 mg/día", presentacion: "Cápsulas 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a fluoxetina o excipientes. Uso concomitante con IMAO (actual o últimos 14 días). Combinación con metoprolol en insuficiencia cardíaca. Uso con tamoxifeno (posible interacción).", efectosAdversos: "Náuseas, insomnio, fatiga, ansiedad. Disfunción sexual. Raramente: síndrome serotoninérgico, convulsiones, hiponatremia, reacciones cutáneas, ideación suicida al inicio."
  },
  {
    id: "MED060", nombre: "Sertralina Cinfa", principioActivo: "Sertralina",
    laboratorio: "Cinfa", atc: "N06AB06", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Depresión, trastorno obsesivo-compulsivo, trastorno de angustia, fobia social",
    dosis: "50-200 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a sertralina o excipientes. Uso concomitante con IMAO (actual o últimos 14 días). Uso con pimozida.", efectosAdversos: "Náuseas (más frecuente), insomnio, diarrea, disfunción sexual. Raramente: síndrome serotoninérgico, hiponatremia, pancreatitis, convulsiones."
  },
  {
    id: "MED061", nombre: "Alprazolam Normon", principioActivo: "Alprazolam",
    laboratorio: "Normon", atc: "N05BA12", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Trastorno de ansiedad, trastorno de pánico",
    dosis: "0.75-3 mg/día", presentacion: "Comprimidos 0.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a alprazolam, benzodiazepinas o excipientes. Miastenia gravis. Insuficiencia respiratoria grave. Síndrome de apnea del sueño. Insuficiencia hepática grave.", efectosAdversos: "Somnolencia, sedación, mareos, ataxia, fatiga. Riesgo de dependencia y tolerancia. Raramente: amnesia anterógrada, cambios de humor, depresión, reacciones paradójicas."
  },
  {
    id: "MED062", nombre: "Metadona", principioActivo: "Metadona",
    laboratorio: "Diversos laboratorios", atc: "N07BC02", grupoAtc: "N", subgrupoAtc: "N07",
    indicacion: "Tratamiento de la dependencia a opiáceos, dolor crónico severo",
    dosis: "20-120 mg/día", presentacion: "Solución oral 5 mg/5ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a metadona o excipientes. Depresión respiratoria. EPOC grave. IMAO (actual o últimos 14 días). Dependencia a no opioides. Niños <18 años.", efectosAdversos: "Estreñimiento, náuseas, sedación, mareos. Riesgo de depresión respiratoria (con dosis altas). Prolongación QT. Dependencia y síndrome de abstinencia. Raramente: edema pulmonar."
  },
  {
    id: "MED063", nombre: "Rivotril", principioActivo: "Clonazepam",
    laboratorio: "Roche", atc: "N03AE01", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Epilepsia (crisis generalizadas, ausencias), trastorno de pánico",
    dosis: "1-4 mg/día", presentacion: "Comprimidos 2 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a clonazepam, benzodiazepinas o excipientes. Insuficiencia respiratoria grave. Insuficiencia hepática grave. Coma. Dependencia a drogas o alcohol.", efectosAdversos: "Somnolencia, fatiga, ataxia, mareos, aumento de secreción bronquial. Riesgo de dependencia y tolerancia. Raramente: reacciones paradójicas, depresión respiratoria, leucopenia."
  },
  {
    id: "MED064", nombre: "Deprax", principioActivo: "Trazodona",
    laboratorio: "Angelini", atc: "N06AX05", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Depresión mayor, especialmente con componente de ansiedad e insomnio",
    dosis: "150-300 mg/día", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a trazodona o excipientes. Intoxicación por alcohol o hipnóticos. Infarto agudo de miocardio.", efectosAdversos: "Somnolencia, mareos, boca seca, náuseas. Raramente: priapismo (urgencia médica), hipotensión ortostática, arritmias cardíacas, síndrome serotoninérgico, convulsiones."
  },
  {
    id: "MED065", nombre: "Salbutamol Aldo-Union", principioActivo: "Salbutamol",
    laboratorio: "Aldo-Union", atc: "R03AC02", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma bronquial, EPOC, broncoespasmo",
    dosis: "1-2 inhalaciones cada 4-6h", presentacion: "Inhalador 200 dosis (100 µg/dosis)", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a salbutamol o excipientes.", efectosAdversos: "Temblor, cefalea, taquicardia, palpitaciones, nerviosismo. Raramente: hipopotasemia (con dosis altas), arritmias, broncoespasmo paradójico."
  },
  {
    id: "MED066", nombre: "Pulmicort", principioActivo: "Budesonida",
    laboratorio: "AstraZeneca", atc: "R03BA02", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente, EPOC, rinitis alérgica",
    dosis: "200-800 µg/día", presentacion: "Inhalador 200 dosis (200 µg/dosis)", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a budesonida o excipientes.", efectosAdversos: "Candidiasis orofaríngea, disfonía, irritación de garganta, tos. Raramente: broncoespasmo, neumonía (en EPOC), supresión adrenal (altas dosis prolongadas), glaucoma, cataratas."
  },
  {
    id: "MED067", nombre: "Seretide", principioActivo: "Salmeterol + Fluticasona",
    laboratorio: "GSK", atc: "R03AK06", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente moderada a severa, EPOC",
    dosis: "1 inhalación cada 12h", presentacion: "Inhalador 120 dosis (50/500 µg)", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a salmeterol, fluticasona o excipientes.", efectosAdversos: "Candidiasis orofaríngea, disfonía, cefalea, temblor, palpitaciones. Raramente: neumonía (en EPOC), supresión adrenal, broncoespasmo paradójico, reacciones alérgicas."
  },
  {
    id: "MED068", nombre: "Loratadina Cinfa", principioActivo: "Loratadina",
    laboratorio: "Cinfa", atc: "R06AX13", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Rinitis alérgica, urticaria crónica, alergias estacionales",
    dosis: "10 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a loratadina o excipientes.", efectosAdversos: "Somnolencia leve, cefalea, boca seca, fatiga. Raramente: reacciones alérgicas, taquicardia, elevación de enzimas hepáticas."
  },
  {
    id: "MED069", nombre: "Ebastel", principioActivo: "Ebastina",
    laboratorio: "Almirall", atc: "R06AX22", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Rinitis alérgica estacional y perenne, urticaria",
    dosis: "10-20 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a ebastina o excipientes.", efectosAdversos: "Boca seca, somnolencia, cefalea. Raramente: dolor abdominal, dispepsia, insomnio, nerviosismo, elevación de transaminasas, palpitaciones."
  },
  {
    id: "MED070", nombre: "Montelukast Cinfa", principioActivo: "Montelukast",
    laboratorio: "Cinfa", atc: "R03DC03", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma bronquial persistente leve-moderada, rinitis alérgica",
    dosis: "10 mg/día (adultos)", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a montelukast o excipientes.", efectosAdversos: "Cefalea, dolor abdominal. Raramente: reacciones de hipersensibilidad, trastornos del sueño (pesadillas), eosinofilia, vasculitis (Síndrome de Churg-Strauss), ideación suicida."
  },
  {
    id: "MED071", nombre: "Bisolvex", principioActivo: "Ambroxol",
    laboratorio: "Cinfa", atc: "R05CB06", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Expectorante en enfermedades respiratorias con exceso de moco",
    dosis: "30 mg cada 8h", presentacion: "Comprimidos 30 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a ambroxol o excipientes.", efectosAdversos: "Náuseas, molestias gastrointestinales. Raramente: reacciones alérgicas (urticaria, angioedema), anafilaxia."
  },
  {
    id: "MED072", nombre: "Flutox", principioActivo: "Dextrometorfano",
    laboratorio: "Cinfa", atc: "R05DA09", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Tos seca irritativa improductiva",
    dosis: "15 mg cada 6-8h", presentacion: "Cápsulas 15 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a dextrometorfano o excipientes. Tos asmática, productiva. Insuficiencia respiratoria. IMAO (actual o últimos 14 días). Embarazo y lactancia. Niños <2 años.", efectosAdversos: "Somnolencia, mareos, náuseas. Raramente: confusión, alucinaciones, dependencia (con abuso), síndrome serotoninérgico (con ISRS)."
  },
  {
    id: "MED073", nombre: "Colircusi Gentamicina", principioActivo: "Gentamicina",
    laboratorio: "Alcon", atc: "S01AA11", grupoAtc: "S", subgrupoAtc: "S01",
    indicacion: "Infecciones oculares bacterianas (conjuntivitis, blefaritis)",
    dosis: "1 gota cada 2-4h", presentacion: "Colirio 5 ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a gentamicina, aminoglucósidos o excipientes.", efectosAdversos: "Irritación ocular, prurito, hiperemia. Raramente (uso sistémico): nefrotoxicidad, ototoxicidad, neurotoxicidad."
  },
  {
    id: "MED074", nombre: "Tobrex", principioActivo: "Tobramicina",
    laboratorio: "Novartis", atc: "S01AA12", grupoAtc: "S", subgrupoAtc: "S01",
    indicacion: "Infecciones oculares bacterianas severas",
    dosis: "1 gota cada 4h", presentacion: "Colirio 5 ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a tobramicina, aminoglucósidos o excipientes.", efectosAdversos: "Hiperemia ocular, molestia ocular, dolor ocular. Raramente (uso sistémico): nefrotoxicidad, ototoxicidad, Síndrome de Stevens-Johnson."
  },
  {
    id: "MED075", nombre: "Lágrimas artificiales", principioActivo: "Hipromelosa + Carbómero",
    laboratorio: "Diversos", atc: "S01XA20", grupoAtc: "S", subgrupoAtc: "S01",
    indicacion: "Ojo seco, irritación ocular leve por sequedad",
    dosis: "1-2 gotas según necesidad", presentacion: "Colirio 10 ml", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a los principios activos o excipientes.", efectosAdversos: "Visión borrosa temporal, irritación leve. Generalmente bien tolerado."
  },
  {
    id: "MED076", nombre: "Mebendazol Cinfa", principioActivo: "Mebendazol",
    laboratorio: "Cinfa", atc: "P02CA01", grupoAtc: "P", subgrupoAtc: "P02",
    indicacion: "Oxuriasis, ascariasis, tricocefalosis, anquilostomiasis",
    dosis: "100-500 mg según parásito", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a mebendazol o excipientes. Embarazo (especialmente 1er trimestre). Niños <2 años.", efectosAdversos: "Dolor abdominal, diarrea (en infecciones masivas). Raramente: neutropenia, reacciones alérgicas (urticaria, angioedema)."
  },
  {
    id: "MED077", nombre: "Albendazol Cinfa", principioActivo: "Albendazol",
    laboratorio: "Cinfa", atc: "P02CA03", grupoAtc: "P", subgrupoAtc: "P02",
    indicacion: "Parasitosis intestinales, equinococosis, neurocisticercosis",
    dosis: "400 mg/día", presentacion: "Comprimidos 400 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a albendazol, benzimidazoles o excipientes. Embarazo. Cirrosis hepática.", efectosAdversos: "Dolor abdominal, náuseas, cefalea. Raramente: hepatotoxicidad, leucopenia, trombocitopenia, alopecia."
  },
  {
    id: "MED078", nombre: "Tamoxifeno Cinfa", principioActivo: "Tamoxifeno",
    laboratorio: "Cinfa", atc: "L02BA01", grupoAtc: "L", subgrupoAtc: "L02",
    indicacion: "Cáncer de mama con receptores hormonales positivos",
    dosis: "20 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a tamoxifeno o excipientes. Embarazo (posibles defectos congénitos). Lactancia.", efectosAdversos: "Sofocos (muy frecuentes). Náuseas, fatiga, calambres musculares. Riesgo de tromboembolismo venoso. Engrosamiento endometrial, hiperplasia. Raramente: cáncer de endometrio, cataratas, retinopatía."
  },
  {
    id: "MED079", nombre: "Metotrexato Cinfa", principioActivo: "Metotrexato",
    laboratorio: "Cinfa", atc: "L01BA01", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Artritis reumatoide severa, psoriasis, leucemia, linfoma",
    dosis: "7.5-25 mg/semana (artritis reumatoide)", presentacion: "Comprimidos 2.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a metotrexato o excipientes. Insuficiencia renal o hepática grave. Alcoholismo. Úlcera péptica activa. Embarazo y lactancia. Discrasias sanguíneas. Inmunodeficiencia.", efectosAdversos: "Mielosupresión (leucopenia, trombocitopenia, anemia). Hepatotoxicidad. Fibrosis pulmonar. Estomatitis, náuseas. Riesgo de toxicidad si no se administra ácido fólico complementario. Raramente: nefrotoxicidad, alopecia."
  },
  {
    id: "MED080", nombre: "Suero fisiológico Braun", principioActivo: "Cloruro sódico 0.9%",
    laboratorio: "B. Braun", atc: "V07AB", grupoAtc: "V", subgrupoAtc: "V07",
    indicacion: "Reposición hidroelectrolítica, vehículo de medicamentos, limpieza nasal",
    dosis: "Según necesidad", presentacion: "Solución 500 ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a cloruro sódico o excipientes. Hipernatremia. Hipercloremia. Acidosis metabólica. Retención de sodio (insuficiencia cardíaca, renal).", efectosAdversos: "No se esperan reacciones adversas en condiciones normales. Posible sobrecarga de volumen, hipernatremia, edema si se usa en exceso."
  },
  {
    id: "MED081", nombre: "Solución Ringer Lactato", principioActivo: "Sodio, potasio, calcio, cloruro, lactato",
    laboratorio: "B. Braun", atc: "V07AB", grupoAtc: "V", subgrupoAtc: "V07",
    indicacion: "Reposición de líquidos y electrolitos, acidosis metabólica leve",
    dosis: "Según necesidad", presentacion: "Solución 500 ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a los componentes. Hipernatremia, hiperpotasemia, hipercalcemia. Alcalosis metabólica. Insuficiencia renal grave con oliguria/anuria. Edema generalizado.", efectosAdversos: "No se esperan reacciones adversas en condiciones normales. Posible sobrecarga de volumen, alteraciones electrolíticas si se usa en exceso."
  },
  {
    id: "MED082", nombre: "Frenadol", principioActivo: "Paracetamol + Clorfenamina + Dextrometorfano + Cafeína",
    laboratorio: "Cinfa", atc: "N02BE51", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Síntomas del resfriado común (fiebre, dolor, congestión, tos)",
    dosis: "1 sobre cada 6-8h", presentacion: "Sobres efervescentes", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a los principios activos. Tos asmática o productiva. Insuficiencia respiratoria. Insuficiencia hepática o renal grave. Hipertensión grave. Hipertiroidismo. IMAO (actual o últimos 14 días). Niños <14 años.", efectosAdversos: "Somnolencia, mareos, boca seca, náuseas. Raramente: excitabilidad paradójica, retención urinaria, hepatotoxicidad por paracetamol (sobredosis)."
  },
  {
    id: "MED083", nombre: "Aspirina", principioActivo: "Ácido acetilsalicílico",
    laboratorio: "Bayer", atc: "N02BA01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, fiebre, inflamación",
    dosis: "500 mg cada 6-8h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a AAS, salicilatos o AINE. Asma. Úlcera gastroduodenal activa. Diátesis hemorrágica. Insuficiencia renal, hepática o cardíaca grave. Niños <16 años con fiebre (Síndrome de Reye). Tercer trimestre embarazo. Metotrexato >15 mg/semana.", efectosAdversos: "Irritación gástrica, úlcera péptica, hemorragia gastrointestinal. Raramente: broncoespasmo, reacciones alérgicas, tinnitus (con sobredosis)."
  },
  {
    id: "MED084", nombre: "Bisolvon", principioActivo: "Bromhexina",
    laboratorio: "Sanofi", atc: "R05CB02", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Tos productiva, enfermedades respiratorias con moco",
    dosis: "8 mg cada 8h", presentacion: "Comprimidos 8 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a bromhexina o excipientes. Úlcera péptica.", efectosAdversos: "Náuseas, molestias gastrointestinales. Raramente: reacciones alérgicas (urticaria, angioedema, broncoespasmo)."
  },
  {
    id: "MED085", nombre: "Vitamina C Cinfa", principioActivo: "Ácido ascórbico",
    laboratorio: "Cinfa", atc: "A11GA01", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Prevención y tratamiento del déficit de vitamina C, antioxidante",
    dosis: "1g/día", presentacion: "Comprimidos efervescentes 1g", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a ácido ascórbico o excipientes. Litiasis renal (oxalato) en dosis altas. Hemocromatosis. Talasemia.", efectosAdversos: "Diarrea, molestias gastrointestinales (con dosis altas). Raramente: litiasis renal por oxalato con dosis >1 g/día."
  },
  {
    id: "MED086", nombre: "Aquilea Magnesio", principioActivo: "Magnesio",
    laboratorio: "Aquilea", atc: "A12CC", grupoAtc: "A", subgrupoAtc: "A12",
    indicacion: "Cansancio físico y mental, calambres musculares, déficit de magnesio",
    dosis: "1 sobre/día", presentacion: "Sobres efervescentes", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a magnesio o excipientes. Insuficiencia renal grave. Miastenia gravis. Bloqueo cardíaco.", efectosAdversos: "Diarrea (más frecuente). Náuseas, dolor abdominal. Hipermagnesemia (en insuficiencia renal)."
  },
  {
    id: "MED087", nombre: "Iberogast", principioActivo: "Extractos de 9 plantas medicinales",
    laboratorio: "Bayer", atc: "A03AX", grupoAtc: "A", subgrupoAtc: "A03",
    indicacion: "Trastornos funcionales digestivos (dispepsia, colon irritable)",
    dosis: "20 gotas 3 veces/día", presentacion: "Solución oral 50 ml", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a los extractos o excipientes. Enfermedad hepática preexistente o concomitante con medicamentos hepatotóxicos.", efectosAdversos: "Raramente: reacciones alérgicas cutáneas, molestias gastrointestinales. Riesgo de lesión hepática (casos aislados reportados)."
  },
  {
    id: "MED088", nombre: "Dalsy", principioActivo: "Ibuprofeno",
    laboratorio: "Cinfa", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Fiebre y dolor en niños",
    dosis: "Según peso (7.5-10 mg/kg cada 8h)", presentacion: "Suspensión oral 100 mg/5ml", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a ibuprofeno, AINE, salicilatos o excipientes. Úlcera péptica/hemorragia gastrointestinal activa o antecedentes. Insuficiencia renal grave (FG <30). Insuficiencia hepática grave. Insuficiencia cardíaca grave (NYHA IV). 3er trimestre embarazo.", efectosAdversos: "Dispepsia, dolor abdominal, náuseas, diarrea. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: insuficiencia renal, elevación de transaminasas, reacciones alérgicas (broncoespasmo, angioedema)."
  },
  {
    id: "MED089", nombre: "Espidifen", principioActivo: "Ibuprofeno (arginina)",
    laboratorio: "Zambon", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre (acción rápida)",
    dosis: "400-600 mg cada 8h", presentacion: "Sobres 600 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a ibuprofeno, AINE, salicilatos o excipientes. Úlcera péptica/hemorragia GI activa. Insuficiencia renal, hepática o cardíaca grave. 3er trimestre embarazo.", efectosAdversos: "Náuseas, dispepsia, dolor abdominal. Riesgo de úlcera péptica y hemorragia GI. Raramente: reacciones alérgicas, insuficiencia renal."
  },
  {
    id: "MED090", nombre: "Almax", principioActivo: "Almagato",
    laboratorio: "Almirall", atc: "A02AD", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Hiperacidez gástrica, pirosis, reflujo gastroesofágico",
    dosis: "1-2 comprimidos después de las comidas", presentacion: "Comprimidos masticables", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave. Hipofosfatemia.", efectosAdversos: "Estreñimiento o diarrea. Sensación de sabor calcáreo."
  },
  {
    id: "MED091", nombre: "Vaccines", principioActivo: "Vacunas diversas",
    laboratorio: "GSK/Sanofi/MSD", atc: "J07", grupoAtc: "J", subgrupoAtc: "J07",
    indicacion: "Prevención de enfermedades infecciosas",
    dosis: "Según calendario vacunal", presentacion: "Solución inyectable", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a algún componente de la vacuna. Enfermedad febril aguda grave. Inmunodeficiencia (en vacunas vivas).", efectosAdversos: "Reacciones locales (dolor, eritema, induración). Fiebre. Cefalea. Mialgias. Fatiga."
  },
  {
    id: "MED092", nombre: "Clexane", principioActivo: "Enoxaparina",
    laboratorio: "Sanofi", atc: "B01AB05", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de tromboembolismo venoso, tratamiento de trombosis",
    dosis: "20-40 mg/día (profilaxis) o 1.5 mg/kg/día (tratamiento)", presentacion: "Jeringas precargadas 40 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Antecedentes de trombocitopenia inducida por heparina. Hemorragia activa o riesgo elevado de hemorragia. Lesiones orgánicas con potencial hemorrágico.", efectosAdversos: "Hematoma en el lugar de punción. Hemorragia. Trombocitopenia. Elevación reversible de transaminasas. Reacciones alérgicas cutáneas."
  },
  {
    id: "MED093", nombre: "Primperan", principioActivo: "Metoclopramida",
    laboratorio: "Sanofi", atc: "A03FA01", grupoAtc: "A", subgrupoAtc: "A03",
    indicacion: "Náuseas y vómitos, gastroparesia, reflujo gastroesofágico",
    dosis: "10 mg cada 8h", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hemorragia gastrointestinal. Obstrucción mecánica intestinal. Perforación gastrointestinal. Feocromocitoma. Antecedentes de discinesia tardía por neurolépticos.", efectosAdversos: "Somnolencia. Fatiga. Discinesia. Síndrome extrapiramidal (especialmente en niños y adultos jóvenes). Hiperprolactinemia. Diarrea."
  },
  {
    id: "MED094", nombre: "Biodramina", principioActivo: "Dimenhidrinato",
    laboratorio: "Uriach", atc: "A04AB02", grupoAtc: "A", subgrupoAtc: "A04",
    indicacion: "Cinetosis (mareo en viajes), náuseas y vómitos",
    dosis: "50 mg cada 4-6h antes del viaje", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Porfiria. Menores de 2 años. Crisis asmática. No en recién nacidos ni prematuros.", efectosAdversos: "Somnolencia (frecuente). Sequedad de boca y fosas nasales. Mareo. Alteraciones de la acomodación visual. Trastornos gastrointestinales."
  },
  {
    id: "MED095", nombre: "Colchimax", principioActivo: "Colchicina + Timetil + Extracto de belladona",
    laboratorio: "Faes Farma", atc: "M04AC01", grupoAtc: "M", subgrupoAtc: "M04",
    indicacion: "Crisis de gota aguda, prevención de ataques recurrentes de gota",
    dosis: "1 mg (2 comprimidos) en crisis aguda", presentacion: "Comprimidos 0.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal o hepática grave. Embarazo. Lactancia. Glaucoma de ángulo estrecho. Hipertrofia prostática con retención urinaria. Discrasias sanguíneas.", efectosAdversos: "Náuseas, vómitos y diarrea (colchicina). Sequedad de boca. Visión borrosa. Mielosupresión por colchicina. Retención urinaria. Taquicardia."
  },
  {
    id: "MED096", nombre: "Actonel", principioActivo: "Risedronato sódico",
    laboratorio: "Warner Chilcott", atc: "M05BA07", grupoAtc: "M", subgrupoAtc: "M05",
    indicacion: "Osteoporosis posmenopáusica, osteoporosis inducida por corticoides",
    dosis: "35 mg/semana", presentacion: "Comprimidos 35 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipocalcemia. Insuficiencia renal grave (ClCr <30 ml/min). Estenosis esofágica. Incapacidad para permanecer erguido al menos 30 minutos.", efectosAdversos: "Irritación esofágica/gástrica. Dolor osteomuscular y articular. Cefalea. Dispepsia. Osteonecrosis mandibular (rara)."
  },
  {
    id: "MED097", nombre: "Diclofenaco Normon", principioActivo: "Diclofenaco",
    laboratorio: "Normon", atc: "M01AB05", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artritis reumatoide, osteoartritis, espondilitis anquilosante",
    dosis: "75-150 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a diclofenaco, AINE o excipientes. Úlcera péptica activa. Hemorragia gastrointestinal. Insuficiencia hepática, renal o cardíaca grave. Enfermedad de Crohn o colitis ulcerosa activa. 3er trimestre embarazo. Cardiopatía isquémica.", efectosAdversos: "Dispepsia, dolor abdominal, náuseas. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: hepatotoxicidad, insuficiencia renal, reacciones cutáneas graves, eventos cardiovasculares."
  },
  {
    id: "MED098", nombre: "Dormidina", principioActivo: "Doxilamina",
    laboratorio: "Krka", atc: "R06AA09", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Insomnio ocasional de corta duración",
    dosis: "12.5-25 mg 30 min antes de acostarse", presentacion: "Comprimidos 12.5 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Glaucoma de ángulo estrecho. Retención urinaria por hipertrofia prostática. Menores de 6 años. Embarazo (primer trimestre no recomendado).", efectosAdversos: "Somnolencia intensa y sedación diurna. Sequedad de boca. Mareo. Visión borrosa. Trastornos gastrointestinales."
  },
  {
    id: "MED099", nombre: "Brumixol", principioActivo: "Bromazepam",
    laboratorio: "Normon", atc: "N05BA08", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Trastornos de ansiedad generalizada, tensión emocional",
    dosis: "3-6 mg/día", presentacion: "Comprimidos 3 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a benzodiacepinas. Insuficiencia respiratoria grave. Insuficiencia hepática grave. Miastenia gravis. Dependencia a sustancias psicoactivas. Glaucoma de ángulo estrecho.", efectosAdversos: "Somnolencia diurna. Sedación. Ataxia. Disminución de la alerta. Dependencia física y psíquica. Amnesia anterógrada. Debilidad muscular."
  },
  {
    id: "MED100", nombre: "Neobrufen", principioActivo: "Ibuprofeno",
    laboratorio: "Normon", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre, inflamación",
    dosis: "400-600 mg cada 6-8h", presentacion: "Comprimidos 400 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a ibuprofeno, AINE, salicilatos o excipientes. Úlcera péptica/hemorragia gastrointestinal activa o antecedentes. Insuficiencia renal grave (FG <30). Insuficiencia hepática grave. Insuficiencia cardíaca grave (NYHA IV). 3er trimestre embarazo.", efectosAdversos: "Dispepsia, dolor abdominal, náuseas, diarrea. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: insuficiencia renal, elevación de transaminasas, reacciones alérgicas (broncoespasmo, angioedema)."
  },
  {
    id: "MED101", nombre: "Xarelto", principioActivo: "Rivaroxabán",
    laboratorio: "Bayer", atc: "B01AF01", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de ictus y embolia sistémica en fibrilación auricular no valvular, tratamiento de TVP y EP",
    dosis: "20 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hemorragia activa clínicamente significativa. Lesión hepática asociada a coagulopatía. Insuficiencia hepática grave. Embarazo y lactancia. Lesión con riesgo hemorrágico.", efectosAdversos: "Epistaxis. Hematomas y equimosis. Anemia. Hemorragia gastrointestinal. Aumento de transaminasas. Náuseas."
  },
  {
    id: "MED102", nombre: "Alka-Seltzer", principioActivo: "Bicarbonato sódico + Ácido cítrico",
    laboratorio: "Bayer", atc: "A02AH", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Acidez de estómago, indigestión ácida",
    dosis: "1-2 comprimidos efervescentes después de las comidas", presentacion: "Comprimidos efervescentes 2.1g", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a los principios activos. Insuficiencia renal o hepática. Dietas bajas en sodio. Alcalosis metabólica.", efectosAdversos: "Eructos, flatulencia, distensión abdominal. Uso prolongado: riesgo de alcalosis metabólica, hipernatremia, efecto rebote."
  },
  {
    id: "MED103", nombre: "Rennie", principioActivo: "Carbonato de calcio + Carbonato de magnesio",
    laboratorio: "Bayer", atc: "A02AX", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Acidez de estómago, regurgitación ácida, indigestión",
    dosis: "1-2 comprimidos masticables después de las comidas", presentacion: "Comprimidos masticables 680/80 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave. Hipercalcemia. Hipermagnesemia. Antecedentes de litiasis renal cálcica.", efectosAdversos: "Estreñimiento. Flatulencia. Náuseas. Cólicos abdominales. Sabor calcáreo."
  },
  {
    id: "MED104", nombre: "Bepanthen", principioActivo: "Dexpantenol",
    laboratorio: "Bayer", atc: "D03AX", grupoAtc: "D", subgrupoAtc: "D03",
    indicacion: "Dermatitis del pañal, piel irritada, cicatrización de heridas superficiales",
    dosis: "Aplicar 1-2 veces/día", presentacion: "Pomada 5% 30g", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad al dexpantenol o a alguno de los excipientes.", efectosAdversos: "Irritación cutánea leve. Reacciones alérgicas de contacto (raras). Escozor o picor transitorio."
  },
  {
    id: "MED105", nombre: "Redoxon", principioActivo: "Ácido ascórbico",
    laboratorio: "Bayer", atc: "A11GA01", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Déficit de vitamina C, aumento de defensas, cansancio",
    dosis: "1g/día", presentacion: "Comprimidos efervescentes 1g", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a ácido ascórbico o excipientes. Litiasis renal (oxalato) en dosis altas. Hemocromatosis. Talasemia.", efectosAdversos: "Diarrea, molestias gastrointestinales (con dosis altas). Raramente: litiasis renal por oxalato con dosis >1 g/día."
  },
  {
    id: "MED106", nombre: "Berocca", principioActivo: "Complejo B + Vitamina C + Minerales",
    laboratorio: "Bayer", atc: "A11EA", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Fatiga, cansancio, aumento de necesidades nutricionales",
    dosis: "1 comprimido/día", presentacion: "Comprimidos efervescentes", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a alguno de los componentes. Hipervitaminosis. Insuficiencia renal grave. Hipercalcemia (si contiene calcio).", efectosAdversos: "Molestias gastrointestinales leves. Coloración amarilla intensa de orina por vitamina B2. Reacciones alérgicas (raras). Sabor desagradable."
  },
  {
    id: "MED107", nombre: "Relvar Ellipta", principioActivo: "Furoato de fluticasona + Vilanterol",
    laboratorio: "GSK", atc: "R03AK10", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Tratamiento regular del asma y EPOC",
    dosis: "1 inhalación/día (92/22 µg o 184/22 µg)", presentacion: "Inhalador 30 dosis", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a los principios activos o excipientes. No está indicado para el tratamiento de crisis agudas de asma o EPOC.", efectosAdversos: "Candidiasis orofaríngea. Disfonía. Cefalea. Neumonía en pacientes con EPOC. Palpitaciones. Temblor."
  },
  {
    id: "MED108", nombre: "Avidart", principioActivo: "Dutasterida",
    laboratorio: "GSK", atc: "G04CB02", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Hiperplasia benigna de próstata",
    dosis: "0.5 mg/día", presentacion: "Cápsulas blandas 0.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Mujeres (especialmente embarazadas: riesgo de feminización del feto) y niños. Insuficiencia hepática grave.", efectosAdversos: "Impotencia. Disminución de la libido. Ginecomastia. Trastornos de la eyaculación. Mareo."
  },
  {
    id: "MED109", nombre: "Imigran", principioActivo: "Sumatriptán",
    laboratorio: "GSK", atc: "N02CC01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Migraña aguda con o sin aura, cefalea en racimos",
    dosis: "50-100 mg al inicio de la crisis", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Cardiopatía isquémica (angina, IAM). HTA no controlada. Antecedentes de ACV o AIT. Enfermedad vascular periférica. Migraña basilar o hemipléjica.", efectosAdversos: "Sensación transitoria de hormigueo, calor, pesadez u opresión. Mareo. Fatiga. Rubefacción. Náuseas. Disnea."
  },
  {
    id: "MED110", nombre: "Lamictal", principioActivo: "Lamotrigina",
    laboratorio: "GSK", atc: "N03AX09", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Epilepsia (crisis parciales y generalizadas), trastorno bipolar",
    dosis: "100-200 mg/día (escalada progresiva)", presentacion: "Comprimidos 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia hepática grave. No recomendado en menores de 2 años.", efectosAdversos: "Erupción cutánea (potencialmente grave incluyendo síndrome de Stevens-Johnson). Mareo. Ataxia. Somnolencia. Cefalea. Visión borrosa. Náuseas."
  },
  {
    id: "MED111", nombre: "Avamys", principioActivo: "Furoato de fluticasona",
    laboratorio: "GSK", atc: "R01AD12", grupoAtc: "R", subgrupoAtc: "R01",
    indicacion: "Rinitis alérgica estacional y perenne",
    dosis: "2 pulverizaciones cada fosa nasal/día", presentacion: "Suspensión nasal 120 dosis", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Infección nasal no tratada (tuberculosis, candidiasis). Cirugía nasal reciente o traumatismo nasal (hasta cicatrización).", efectosAdversos: "Epistaxis. Irritación y sequedad nasal. Cefalea. Úlcera nasal."
  },
  {
    id: "MED112", nombre: "Champix", principioActivo: "Vareniclina",
    laboratorio: "Pfizer", atc: "N07BA03", grupoAtc: "N", subgrupoAtc: "N07",
    indicacion: "Deshabituación tabáquica en adultos",
    dosis: "0.5-2 mg/día (escalada progresiva)", presentacion: "Comprimidos 1 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave (ajuste de dosis necesario). No recomendado en menores de 18 años.", efectosAdversos: "Náuseas (muy frecuentes). Insomnio. Sueños anormales. Cefalea. Sequedad de boca. Mareo. Flatulencia."
  },
  {
    id: "MED113", nombre: "Eliquis", principioActivo: "Apixabán",
    laboratorio: "Pfizer", atc: "B01AF02", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de ictus en fibrilación auricular no valvular, tratamiento de TVP y EP",
    dosis: "5 mg/12h", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hemorragia activa clínicamente significativa. Hepatopatía asociada a coagulopatía. Lesión con riesgo hemorrágico grave. Insuficiencia hepática grave.", efectosAdversos: "Epistaxis. Hematomas. Anemia. Hemorragia superficial (contusiones). Náuseas. Elevación de transaminasas."
  },
  {
    id: "MED114", nombre: "Diflucan", principioActivo: "Fluconazol",
    laboratorio: "Pfizer", atc: "J02AC01", grupoAtc: "J", subgrupoAtc: "J02",
    indicacion: "Candidiasis vaginal, meningitis criptocócica, dermatomicosis",
    dosis: "150 mg dosis única (candidiasis vaginal)", presentacion: "Cápsulas 150 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a fluconazol, azoles o excipientes. Coadministración con terfenadina (si fluconazol >=400 mg/día). Coadministración con cisaprida, astemizol, pimozida, quinidina, eritromicina.", efectosAdversos: "Cefalea, dolor abdominal, diarrea, náuseas. Raramente: hepatotoxicidad, prolongación QT, torsade de pointes, reacciones cutáneas graves (DRESS, Stevens-Johnson), anafilaxia."
  },
  {
    id: "MED115", nombre: "Zitromax", principioActivo: "Azitromicina",
    laboratorio: "Pfizer", atc: "J01FA10", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones respiratorias, infecciones cutáneas, uretritis",
    dosis: "500 mg/día 3 días", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a azitromicina, eritromicina, macrólidos, ketólidos o excipientes.", efectosAdversos: "Diarrea, náuseas, dolor abdominal, cefalea, vómitos. Raramente: prolongación QT, torsade de pointes, colitis pseudomembranosa, hepatitis, reacciones alérgicas graves, Síndrome de Stevens-Johnson."
  },
  {
    id: "MED116", nombre: "Sandimmun Neoral", principioActivo: "Ciclosporina",
    laboratorio: "Novartis", atc: "L04AD01", grupoAtc: "L", subgrupoAtc: "L04",
    indicacion: "Prevención de rechazo en trasplante de órgano sólido, artritis reumatoide grave, psoriasis grave",
    dosis: "2-5 mg/kg/día en 2 dosis", presentacion: "Cápsulas 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Función renal anormal. HTA no controlada. Infección activa no controlada. Neoplasia activa (excepto en trasplante).", efectosAdversos: "Nefrotoxicidad (elevación de creatinina). Hipertensión arterial. Temblor. Hipertricosis. Hiperlipidemia. Hiperplasia gingival. Trastornos gastrointestinales."
  },
  {
    id: "MED117", nombre: "Tegretol", principioActivo: "Carbamazepina",
    laboratorio: "Novartis", atc: "N03AF01", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Epilepsia (crisis parciales y tónico-clónicas), neuralgia del trigémino, trastorno bipolar",
    dosis: "600-1200 mg/día en dosis divididas", presentacion: "Comprimidos 200 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a carbamazepina o antidepresivos tricíclicos. Depresión medular previa. Porfiria hepática. Bloqueo AV. Antecedentes de aplasia medular.", efectosAdversos: "Mareo. Somnolencia. Ataxia. Náuseas. Vómitos. Hiponatremia. Leucopenia. Erupción cutánea (riesgo de Stevens-Johnson). Visión borrosa."
  },
  {
    id: "MED118", nombre: "Lioresal", principioActivo: "Baclofeno",
    laboratorio: "Novartis", atc: "M03BX01", grupoAtc: "M", subgrupoAtc: "M03",
    indicacion: "Espasticidad muscular de origen cerebral y medular, especialmente en esclerosis múltiple",
    dosis: "15-60 mg/día (escalada progresiva)", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Enfermedad psiquiátrica no controlada. Epilepsia activa (riesgo de empeoramiento). Úlcera péptica activa.", efectosAdversos: "Somnolencia y sedación intensa. Mareo. Debilidad muscular. Náuseas. Hipotensión. Ataxia. Confusión."
  },
  {
    id: "MED119", nombre: "Aprovel", principioActivo: "Irbesartán",
    laboratorio: "Sanofi", atc: "C09CA04", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial esencial, nefropatía en hipertensos con DM2",
    dosis: "150-300 mg/día", presentacion: "Comprimidos 150 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Segundo y tercer trimestre del embarazo. Insuficiencia renal grave. Estenosis bilateral de arteria renal. Diálisis.", efectosAdversos: "Mareo. Hipotensión ortostática. Hiperpotasemia. Insuficiencia renal. Cefalea. Anemia."
  },
  {
    id: "MED120", nombre: "Amaryl", principioActivo: "Glimepirida",
    laboratorio: "Sanofi", atc: "A10BB12", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2 cuando dieta y ejercicio no controlan la glucemia",
    dosis: "1-4 mg/día", presentacion: "Comprimidos 4 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a sulfonilureas o sulfonamidas. Diabetes tipo 1. Cetoacidosis diabética. Insuficiencia renal o hepática grave.", efectosAdversos: "Hipoglucemia. Aumento de peso. Molestias gastrointestinales. Reacciones alérgicas cutáneas. Alteraciones visuales transitorias."
  },
  {
    id: "MED121", nombre: "Tavanic", principioActivo: "Levofloxacino",
    laboratorio: "Sanofi", atc: "J01MA12", grupoAtc: "J", subgrupoAtc: "J01",
    indicacion: "Infecciones bacterianas: sinusitis, neumonía, pielonefritis, prostatitis, infecciones de piel",
    dosis: "500 mg 1-2 veces/día", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a quinolonas. Antecedentes de tendinitis o rotura tendinosa por quinolonas. Epilepsia no controlada. Menores de 18 años.", efectosAdversos: "Trastornos gastrointestinales (náuseas, diarrea). Cefalea. Mareo. Insomnio. Tendinitis. Prolongación del intervalo QT. Fototoxicidad."
  },
  {
    id: "MED122", nombre: "CellCept", principioActivo: "Micofenolato mofetilo",
    laboratorio: "Roche", atc: "L04AA06", grupoAtc: "L", subgrupoAtc: "L04",
    indicacion: "Profilaxis del rechazo agudo en trasplante alogénico renal, cardíaco o hepático",
    dosis: "1-1.5 g/12h", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Embarazo y lactancia (teratógeno confirmado). No administrar vacunas vivas. Mujeres en edad fértil sin anticoncepción eficaz.", efectosAdversos: "Diarrea. Náuseas y vómitos. Leucopenia. Infecciones. Anemia. Temblor. Hipertensión arterial."
  },
  {
    id: "MED123", nombre: "Xenical", principioActivo: "Orlistat",
    laboratorio: "Roche", atc: "A08AB01", grupoAtc: "A", subgrupoAtc: "A08",
    indicacion: "Obesidad (IMC >= 30 kg/m²) y sobrepeso con factores de riesgo, en combinación con dieta hipocalórica",
    dosis: "120 mg 3 veces/día con las comidas", presentacion: "Cápsulas 120 mg", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Síndrome de malabsorción crónica. Colestasis. IMC inferior a 30 (o 27 con factores de riesgo).", efectosAdversos: "Esteatorrea. Flatulencia oleosa. Urgencia fecal. Deposiciones grasas. Dolor abdominal. Disminución de vitaminas liposolubles (A, D, E, K)."
  },
  {
    id: "MED124", nombre: "Herceptin", principioActivo: "Trastuzumab",
    laboratorio: "Roche", atc: "L01FD01", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Cáncer de mama temprano y metastásico HER2+, cáncer gástrico metastásico HER2+",
    dosis: "6 mg/kg cada 3 semanas IV", presentacion: "Vial 440 mg polvo liofilizado", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Disnea en reposo por metástasis pulmonar. Cardiopatía previa no controlada.", efectosAdversos: "Reacciones relacionadas con la perfusión (fiebre, escalofríos). Cardiotoxicidad (insuficiencia cardiaca). Neutropenia. Diarrea. Infecciones."
  },
  {
    id: "MED125", nombre: "Forxiga", principioActivo: "Dapagliflozina",
    laboratorio: "AstraZeneca", atc: "A10BK01", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2, insuficiencia cardíaca con fracción de eyección reducida, ERC",
    dosis: "10 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Diabetes tipo 1. Insuficiencia renal grave (TFGe <25 ml/min). Cetoacidosis diabética.", efectosAdversos: "Infecciones genitales micóticas. Infecciones del tracto urinario. Poliuria/polaquiuria. Hipotensión. Cetoacidosis diabética (rara). Dislipidemia."
  },
  {
    id: "MED126", nombre: "Symbicort Turbuhaler", principioActivo: "Budesonida + Formoterol",
    laboratorio: "AstraZeneca", atc: "R03AK07", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma bronquial persistente, EPOC sintomática",
    dosis: "1-2 inhalaciones/12h", presentacion: "Inhalador 160/4.5 µg 120 dosis", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. No está indicado para el tratamiento de crisis agudas de asma o EPOC.", efectosAdversos: "Candidiasis orofaríngea. Disfonía. Cefalea. Temblor. Palpitaciones. Neumonía en pacientes con EPOC. Tos."
  },
  {
    id: "MED127", nombre: "Brilique", principioActivo: "Ticagrelor",
    laboratorio: "AstraZeneca", atc: "B01AC24", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de eventos aterotrombóticos en síndrome coronario agudo y antecedentes de IAM",
    dosis: "60-90 mg/12h", presentacion: "Comprimidos 60 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hemorragia activa. Antecedentes de ACV hemorrágico. Insuficiencia hepática grave. Hemorragia intracraneal previa.", efectosAdversos: "Disnea. Hemorragia (epistaxis, hematomas, contusiones). Anemia. Mareo. Náuseas. Aumento de ácido úrico. Diarrea."
  },
  {
    id: "MED128", nombre: "Tagrisso", principioActivo: "Osimertinib",
    laboratorio: "AstraZeneca", atc: "L01EB04", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Cáncer de pulmón no microcítico avanzado con mutación del EGFR",
    dosis: "80 mg/día", presentacion: "Comprimidos 80 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. No usar concomitantemente con hierba de San Juan. Insuficiencia hepática grave.", efectosAdversos: "Diarrea. Erupción cutánea y acnéiforme. Estomatitis. Fatiga. Disminución del apetito. Prolongación del QT. Cardiotoxicidad (insuficiencia cardiaca)."
  },
  {
    id: "MED129", nombre: "Keytruda", principioActivo: "Pembrolizumab",
    laboratorio: "MSD", atc: "L01FF02", grupoAtc: "L", subgrupoAtc: "L01",
    indicacion: "Melanoma avanzado, CPNM, carcinoma urotelial, linfoma de Hodgkin, carcinoma escamoso de cabeza y cuello",
    dosis: "200 mg cada 3 semanas IV", presentacion: "Vial 100 mg/4ml concentrado", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Enfermedad autoinmune activa que requiera tratamiento sistémico. Trasplante previo de órgano sólido.", efectosAdversos: "Fatiga. Eventos adversos inmunomediados: neumonitis, colitis, hepatitis, endocrinopatías (tiroiditis, hipofisitis), dermatitis y nefritis. Reacciones a la perfusión."
  },
  {
    id: "MED130", nombre: "Singulair", principioActivo: "Montelukast",
    laboratorio: "MSD", atc: "R03DC03", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente leve-moderado, profilaxis de broncoconstricción por ejercicio, rinitis alérgica",
    dosis: "10 mg/día por la noche", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a montelukast o excipientes.", efectosAdversos: "Cefalea, dolor abdominal. Raramente: reacciones de hipersensibilidad, trastornos del sueño (pesadillas), eosinofilia, vasculitis (Síndrome de Churg-Strauss), ideación suicida."
  },
  {
    id: "MED131", nombre: "Cozaar", principioActivo: "Losartán potásico",
    laboratorio: "MSD", atc: "C09CA01", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión esencial, reducción del riesgo de ictus en hipertensos con HVI, nefropatía diabética",
    dosis: "50-100 mg/día", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Segundo y tercer trimestre del embarazo. Insuficiencia hepática grave. Cirrosis biliar. Anuria.", efectosAdversos: "Mareo. Hipotensión ortostática. Hiperpotasemia. Insuficiencia renal. Fatiga. Hipoglucemia."
  },
  {
    id: "MED132", nombre: "Sativex", principioActivo: "Delta-9-tetrahidrocannabinol + Cannabidiol",
    laboratorio: "Almirall", atc: "N02BG10", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Espasticidad moderada a grave en pacientes con esclerosis múltiple",
    dosis: "1-12 pulverizaciones/día vía bucal (flexible)", presentacion: "Solución bucal 10 ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a cannabinoides. Antecedentes personales o familiares de trastorno psicótico. Embarazo y lactancia. Hipersensibilidad a algún componente.", efectosAdversos: "Mareo. Somnolencia. Fatiga. Vértigo. Sequedad de boca. Náuseas. Alteración de la atención. Debilidad muscular."
  },
  {
    id: "MED133", nombre: "Klisyri", principioActivo: "Tirbanibulina",
    laboratorio: "Almirall", atc: "D06BX03", grupoAtc: "D", subgrupoAtc: "D06",
    indicacion: "Tratamiento tópico de queratosis actínica de la cara o cuero cabelludo",
    dosis: "1 capa fina/día durante 5 días consecutivos", presentacion: "Pomada 10 mg/g, 5 sobres monodosis", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Heridas abiertas o traumatismos en el área de tratamiento. No aplicar en mucosas ni ojos.", efectosAdversos: "Reacciones cutáneas locales: eritema, edema, descamación, prurito, dolor y formación de costras. Cefalea."
  },
  {
    id: "MED134", nombre: "Fastum", principioActivo: "Ketoprofeno",
    laboratorio: "Menarini", atc: "M01AE04", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artritis reumatoide, artrosis, dolor musculoesquelético agudo, dismenorrea primaria",
    dosis: "50 mg cada 8h", presentacion: "Cápsulas 50 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a AINEs (incluyendo ácido acetilsalicílico). Úlcera péptica activa o hemorragia gastrointestinal. Insuficiencia renal, hepática o cardiaca grave. Tercer trimestre de embarazo.", efectosAdversos: "Dispepsia. Náuseas y vómitos. Dolor abdominal. Cefalea. Mareo. Retención de líquidos. Elevación de transaminasas."
  },
  {
    id: "MED135", nombre: "Adenuric", principioActivo: "Febuxostat",
    laboratorio: "Menarini", atc: "M04AA03", grupoAtc: "M", subgrupoAtc: "M04",
    indicacion: "Hiperuricemia crónica con depósito de urato (gota con tofos o artritis gotosa)",
    dosis: "80-120 mg/día", presentacion: "Comprimidos 80 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Tratamiento concomitante con azatioprina, mercaptopurina o didanosina. Síndrome de Lesch-Nyhan.", efectosAdversos: "Artralgias. Elevación de transaminasas. Náuseas. Erupción cutánea. Gota aguda (al inicio del tratamiento). Aumento del riesgo cardiovascular (controversia)."
  },
  {
    id: "MED136", nombre: "Spasmocytil", principioActivo: "Otilonio bromuro",
    laboratorio: "Menarini", atc: "A03AB06", grupoAtc: "A", subgrupoAtc: "A03",
    indicacion: "Espasmos del tracto gastrointestinal y dolor abdominal asociado al síndrome del intestino irritable",
    dosis: "40 mg 2-3 veces/día", presentacion: "Grageas 40 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Glaucoma de ángulo estrecho. Hipertrofia prostática con retención urinaria. Estenosis pilórica. Miastenia gravis. Íleo paralítico.", efectosAdversos: "Sequedad de boca. Visión borrosa. Mareo. Estreñimiento. Retención urinaria. Taquicardia."
  },
  {
    id: "MED137", nombre: "Pradaxa", principioActivo: "Dabigatrán etexilato",
    laboratorio: "Boehringer Ingelheim", atc: "B01AE07", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de ictus y embolia sistémica en FA no valvular, tratamiento de TVP y EP",
    dosis: "150 mg/12h", presentacion: "Cápsulas 150 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hemorragia activa. Lesión orgánica con riesgo hemorrágico. Insuficiencia renal grave (ClCr <30 ml/min). Prótesis valvular mecánica. Hepatopatía asociada a coagulopatía.", efectosAdversos: "Epistaxis. Hematomas. Hemorragia gastrointestinal. Anemia. Náuseas. Dispepsia. Elevación de transaminasas."
  },
  {
    id: "MED138", nombre: "Micardis", principioActivo: "Telmisartán",
    laboratorio: "Boehringer Ingelheim", atc: "C09CA07", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión esencial, reducción de morbilidad cardiovascular en pacientes de alto riesgo",
    dosis: "40-80 mg/día", presentacion: "Comprimidos 40 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Segundo y tercer trimestre del embarazo. Insuficiencia hepática grave. Obstrucción biliar. Estenosis bilateral de arteria renal.", efectosAdversos: "Mareo. Hipotensión ortostática. Hiperpotasemia. Insuficiencia renal. Infecciones respiratorias. Dolor abdominal."
  },
  {
    id: "MED139", nombre: "Emconcor (Concor)", principioActivo: "Bisoprolol fumarato",
    laboratorio: "Merck", atc: "C07AB07", grupoAtc: "C", subgrupoAtc: "C07",
    indicacion: "Hipertensión arterial, angina de pecho crónica estable, insuficiencia cardíaca crónica estable",
    dosis: "2.5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Asma bronquial grave o EPOC grave. Bloqueo AV de segundo o tercer grado. Insuficiencia cardiaca descompensada. Bradicardia sintomática. Shock cardiogénico.", efectosAdversos: "Bradicardia. Mareo. Fatiga. Hipotensión. Extremidades frías. Náuseas. Disnea. Insomnio. Broncoespasmo en pacientes asmáticos."
  },
  {
    id: "MED140", nombre: "Tirozol", principioActivo: "Tiamazol (Metimazol)",
    laboratorio: "Merck", atc: "H03BB02", grupoAtc: "H", subgrupoAtc: "H03",
    indicacion: "Hipertiroidismo, crisis tirotóxica, preparación para tiroidectomía",
    dosis: "15-60 mg/día inicial (descendente según respuesta)", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Antecedentes de agranulocitosis inducida por tiamazol. Insuficiencia hepática grave. Colestasis. No durante la lactancia.", efectosAdversos: "Agranulocitosis (rara pero grave). Erupción cutánea. Prurito. Artralgias. Náuseas. Hepatitis colestásica. Síndrome similar al lupus."
  },
  {
    id: "MED141", nombre: "NovoRapid", principioActivo: "Insulina asparta",
    laboratorio: "Novo Nordisk", atc: "A10AB05", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 1 y 2 (insulina de acción rápida), administración inmediatamente antes de las comidas",
    dosis: "Individual, 0.5-1 U/kg/día en régimen bolo-basal", presentacion: "Pluma FlexPen 100 U/ml 3ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipoglucemia.", efectosAdversos: "Hipoglucemia. Reacciones en el lugar de inyección (eritema, hinchazón, prurito). Lipodistrofia. Retención de líquidos y edema. Aumento de peso."
  },
  {
    id: "MED142", nombre: "Victoza", principioActivo: "Liraglutida",
    laboratorio: "Novo Nordisk", atc: "A10BJ02", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2 para mejorar control glucémico, reduce riesgo cardiovascular",
    dosis: "0.6-1.8 mg/día subcutáneo (escalada progresiva)", presentacion: "Pluma precargada 6 mg/ml 3ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Antecedentes personales o familiares de carcinoma medular de tiroides. Neoplasia endocrina múltiple tipo 2. Diabetes tipo 1.", efectosAdversos: "Náuseas (muy frecuente). Vómitos. Diarrea. Disminución del apetito. Hipoglucemia (con sulfonilureas o insulina). Colelitiasis. Dolor abdominal."
  },
  {
    id: "MED143", nombre: "Omeprazol Kern Pharma", principioActivo: "Omeprazol",
    laboratorio: "Kern Pharma", atc: "A02BC01", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Úlcera gástrica y duodenal, ERGE, erradicación de Helicobacter pylori, síndrome de Zollinger-Ellison",
    dosis: "20 mg/día", presentacion: "Cápsulas 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a omeprazol o benzimidazoles. Uso concomitante con nelfinavir. No recomendado en insuficiencia hepática grave.", efectosAdversos: "Cefalea, dolor abdominal, diarrea, náuseas, estreñimiento, flatulencia. Riesgo de hipomagnesemia y déficit de vitamina B12 en tratamientos prolongados. Raramente: leucopenia, trombocitopenia."
  },
  {
    id: "MED144", nombre: "Paracetamol Kern Pharma", principioActivo: "Paracetamol",
    laboratorio: "Kern Pharma", atc: "N02BE01", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor leve a moderado, estados febriles en adultos y adolescentes",
    dosis: "500-1000 mg cada 6-8h (máx 3g/día)", presentacion: "Comprimidos 1g", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a paracetamol o excipientes. Insuficiencia hepática grave.", efectosAdversos: "Raramente: hepatotoxicidad (especialmente a dosis altas >4 g/día o en alcoholismo). Reacciones alérgicas cutáneas. Muy raramente: trombocitopenia, leucopenia, hipoglucemia."
  },
  {
    id: "MED145", nombre: "Ibuprofeno Kern Pharma", principioActivo: "Ibuprofeno",
    laboratorio: "Kern Pharma", atc: "M01AE01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Dolor leve a moderado, fiebre, inflamación (artritis, dismenorrea, migraña)",
    dosis: "400-600 mg cada 6-8h (máx 1200 mg/día)", presentacion: "Comprimidos 400 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad a ibuprofeno, AINE, salicilatos o excipientes. Úlcera péptica/hemorragia gastrointestinal activa o antecedentes. Insuficiencia renal grave (FG <30). Insuficiencia hepática grave. Insuficiencia cardíaca grave (NYHA IV). 3er trimestre embarazo.", efectosAdversos: "Dispepsia, dolor abdominal, náuseas, diarrea. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: insuficiencia renal, elevación de transaminasas, reacciones alérgicas (broncoespasmo, angioedema)."
  },
  {
    id: "MED146", nombre: "Fluimucil Forte", principioActivo: "Acetilcisteína",
    laboratorio: "Zambon", atc: "R05CB01", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Procesos catarrales y gripales con secreciones mucosas espesas",
    dosis: "600 mg/día en una sola toma", presentacion: "Comprimidos efervescentes 600 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad. Úlcera péptica activa. No recomendado en menores de 2 años (riesgo de obstrucción bronquial).", efectosAdversos: "Náuseas y vómitos. Estomatitis. Broncoespasmo (especialmente en asmáticos). Secreción nasal abundante. Molestias gastrointestinales."
  },
  {
    id: "MED147", nombre: "Ultra-Levura", principioActivo: "Saccharomyces boulardii CNCM I-745",
    laboratorio: "Zambon", atc: "A07FA02", grupoAtc: "A", subgrupoAtc: "A07",
    indicacion: "Tratamiento sintomático de diarrea aguda inespecífica, prevención de diarrea por antibióticos",
    dosis: "250-500 mg/día en 2 tomas", presentacion: "Suspensión oral 250 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Pacientes inmunodeprimidos, críticamente enfermos o con catéter venoso central (riesgo de fungemia).", efectosAdversos: "Flatulencia. Estreñimiento transitorio. Reacciones alérgicas (raras). Fungemia (muy rara, solo en pacientes inmunodeprimidos)."
  },
  {
    id: "MED148", nombre: "Ursochol", principioActivo: "Ácido ursodesoxicólico",
    laboratorio: "Zambon", atc: "A05AA02", grupoAtc: "A", subgrupoAtc: "A05",
    indicacion: "Disolución de cálculos biliares de colesterol, tratamiento de cirrosis biliar primaria",
    dosis: "8-10 mg/kg/día en 2 tomas", presentacion: "Comprimidos 150 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Obstrucción biliar completa. Enfermedad inflamatoria intestinal activa. Úlcera péptica activa. Colecistitis aguda.", efectosAdversos: "Heces blandas o diarrea (frecuente). Molestias abdominales. Náuseas. Calcificación de cálculos biliares (raro)."
  },
  {
    id: "MED149", nombre: "Zaldiar", principioActivo: "Tramadol + Paracetamol",
    laboratorio: "Grunenthal", atc: "N02AJ13", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor de intensidad moderada a intensa que requiere la combinación de tramadol y paracetamol",
    dosis: "1-2 comprimidos cada 6-8h (máx 8 comprimidos/día)", presentacion: "Comprimidos 37.5/325 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a opioides o paracetamol. Intoxicación alcohólica aguda. Epilepsia no controlada. Insuficiencia hepática grave. Tratamiento con IMAO.", efectosAdversos: "Mareo. Somnolencia. Náuseas. Vómitos. Estreñimiento. Cefalea. Fatiga. Sequedad de boca."
  },
  {
    id: "MED150", nombre: "Adolonta Retard", principioActivo: "Tramadol hidrocloruro",
    laboratorio: "Grunenthal", atc: "N02AX02", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Dolor moderado a intenso en adultos y adolescentes mayores de 12 años",
    dosis: "100 mg/12h (liberación prolongada)", presentacion: "Comprimidos LP 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Intoxicación aguda por alcohol o depresores del SNC. Epilepsia no controlada. Insuficiencia hepática grave. Tratamiento con IMAO.", efectosAdversos: "Mareo. Somnolencia. Náuseas. Vómitos. Estreñimiento. Cefalea. Fatiga. Sudoración. Riesgo de convulsiones."
  },
  {
    id: "MED151", nombre: "Palexia Retard", principioActivo: "Tapentadol hidrocloruro",
    laboratorio: "Grunenthal", atc: "N02AX06", grupoAtc: "N", subgrupoAtc: "N02",
    indicacion: "Control del dolor crónico intenso que solo puede tratarse adecuadamente con un opioide",
    dosis: "50-100 mg/12h (liberación prolongada)", presentacion: "Comprimidos LP 100 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Depresión respiratoria significativa. Íleo paralítico. Insuficiencia hepática grave. Epilepsia activa. Tratamiento con IMAO.", efectosAdversos: "Náuseas. Mareo. Somnolencia. Estreñimiento. Cefalea. Vómitos. Sequedad de boca. Astenia. Confusión."
  },
  {
    id: "MED152", nombre: "Venosmil", principioActivo: "Hidrosmina",
    laboratorio: "Faes Farma", atc: "C05CA05", grupoAtc: "C", subgrupoAtc: "C05",
    indicacion: "Trastornos venosos (varices, sensación de piernas cansadas, edemas periféricos, hemorroides)",
    dosis: "200 mg/12h", presentacion: "Cápsulas 200 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. No recomendado en embarazo y lactancia a falta de datos suficientes.", efectosAdversos: "Molestias gastrointestinales (náuseas, dolor abdominal, dispepsia). Cefalea. Vértigo. Reacciones cutáneas (raras)."
  },
  {
    id: "MED153", nombre: "Lexatin", principioActivo: "Bromazepam",
    laboratorio: "Normon", atc: "N05BA08", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Trastornos de ansiedad, tensión psíquica, agitación",
    dosis: "1.5-6 mg/día", presentacion: "Comprimidos 1.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a benzodiacepinas. Insuficiencia respiratoria grave. Insuficiencia hepática grave. Miastenia gravis. Dependencia a sustancias psicoactivas. Glaucoma de ángulo estrecho.", efectosAdversos: "Somnolencia diurna. Sedación. Ataxia. Disminución de la alerta. Dependencia física y psíquica. Amnesia anterógrada. Debilidad muscular."
  },
  {
    id: "MED154", nombre: "Ramipril STADA", principioActivo: "Ramipril",
    laboratorio: "STADA", atc: "C09AA05", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial, insuficiencia cardíaca, prevención cardiovascular",
    dosis: "2.5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Angioedema previo (idiopático o inducido por IECA). Segundo y tercer trimestre de embarazo. Estenosis bilateral de arteria renal.", efectosAdversos: "Tos seca (frecuente). Mareo. Hipotensión. Hiperpotasemia. Aumento de creatinina. Cefalea. Angioedema (raro)."
  },
  {
    id: "MED155", nombre: "Rosuvastatina STADA", principioActivo: "Rosuvastatina",
    laboratorio: "STADA", atc: "C10AA07", grupoAtc: "C", subgrupoAtc: "C10",
    indicacion: "Hipercolesterolemia, prevención de eventos cardiovasculares",
    dosis: "10-20 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hepatopatía activa o elevación persistente de transaminasas. Insuficiencia renal grave (ClCr <30 ml/min). Embarazo y lactancia. Antecedentes de miopatía con estatinas.", efectosAdversos: "Mialgias. Miopatía (riesgo de rabdomiólisis, rara). Elevación de transaminasas. Cefalea. Molestias abdominales. Náuseas. Estreñimiento."
  },
  {
    id: "MED156", nombre: "Diane-35", principioActivo: "Ciproterona + Etinilestradiol",
    laboratorio: "Bayer", atc: "G03HB01", grupoAtc: "G", subgrupoAtc: "G03",
    indicacion: "Anticoncepción en mujeres con acné severo e hirsutismo",
    dosis: "1 comprimido/día (21 días)", presentacion: "Comprimidos recubiertos", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Trombosis venosa profunda o tromboembolismo pulmonar (activo o antecedentes). Migraña con aura. Hepatopatía activa. Neoplasias hormono-sensibles. Mujeres mayores de 35 años fumadoras.", efectosAdversos: "Náuseas. Tensión y dolor mamario. Hemorragias intermenstruales. Cefalea. Cambios de humor. Riesgo de tromboembolismo venoso. Molestias gastrointestinales."
  },
  {
    id: "MED157", nombre: "Yasmin", principioActivo: "Drospirenona + Etinilestradiol",
    laboratorio: "Bayer", atc: "G03AA12", grupoAtc: "G", subgrupoAtc: "G03",
    indicacion: "Anticoncepción oral",
    dosis: "1 comprimido/día (21 días)", presentacion: "Comprimidos recubiertos", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a los principios activos. Tromboembolismo venoso actual o antecedentes. Riesgo elevado de TEV/TEA. Enfermedad hepática grave. Insuficiencia renal grave. Tumores hepáticos. Neoplasias dependientes de hormonas. Migraña con aura. Embarazo y lactancia.", efectosAdversos: "Náuseas, dolor abdominal, cefalea, cambios de peso, tensión mamaria. Riesgo de tromboembolismo venoso (raro). Raramente: cloasma, alteraciones del humor. Posible retención de potasio por drospirenona."
  },
  {
    id: "MED158", nombre: "Trelegy Ellipta", principioActivo: "Fluticasona + Umeclidinio + Vilanterol",
    laboratorio: "GSK", atc: "R03AL08", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "EPOC moderada a grave, tratamiento de mantenimiento",
    dosis: "1 inhalación/día", presentacion: "Inhalador 92/55/22 mcg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a alguno de los componentes. No está indicado para el tratamiento de crisis agudas de asma o EPOC.", efectosAdversos: "Candidiasis orofaríngea. Disfonía. Neumonía en pacientes con EPOC. Sequedad de boca. Cefalea. Palpitaciones. Temblor."
  },
  {
    id: "MED159", nombre: "Elontril", principioActivo: "Bupropión",
    laboratorio: "GSK", atc: "N06AX12", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Deshabituación tabáquica, trastorno depresivo mayor",
    dosis: "150-300 mg/día", presentacion: "Comprimidos 150 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Epilepsia o antecedentes convulsivos. Trastorno alimentario (bulimia o anorexia) actual o pasado. Cirrosis hepática grave. Tratamiento con IMAO.", efectosAdversos: "Insomnio. Sequedad de boca. Cefalea. Náuseas. Mareo. Agitación y ansiedad. Aumento de la presión arterial. Riesgo de convulsiones (dosis-dependiente)."
  },
  {
    id: "MED160", nombre: "Diovan", principioActivo: "Valsartán",
    laboratorio: "Novartis", atc: "C09CA03", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión arterial, insuficiencia cardíaca, post-IAM",
    dosis: "80-320 mg/día", presentacion: "Comprimidos 80 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Segundo y tercer trimestre del embarazo. Insuficiencia hepática grave. Cirrosis biliar. Estenosis bilateral de arteria renal.", efectosAdversos: "Mareo. Hipotensión ortostática. Hiperpotasemia. Insuficiencia renal. Cefalea. Fatiga. Diarrea."
  },
  {
    id: "MED161", nombre: "Exelon", principioActivo: "Rivastigmina",
    laboratorio: "Novartis", atc: "N06DA03", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Enfermedad de Alzheimer leve a moderada, demencia parkinsoniana",
    dosis: "3-12 mg/día", presentacion: "Cápsulas 3 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia hepática grave. No recomendado en menores de 18 años.", efectosAdversos: "Náuseas y vómitos (muy frecuentes). Diarrea. Disminución del apetito y pérdida de peso. Mareo. Bradicardia. Síncope. Cefalea."
  },
  {
    id: "MED162", nombre: "Lantus", principioActivo: "Insulina glargina",
    laboratorio: "Sanofi", atc: "A10AE04", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 1 y tipo 2",
    dosis: "10-80 UI/día (según perfil glucémico)", presentacion: "Pluma 100 UI/ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipoglucemia.", efectosAdversos: "Hipoglucemia. Reacciones en el lugar de inyección (eritema, dolor, prurito). Lipodistrofia. Aumento de peso. Edema periférico."
  },
  {
    id: "MED163", nombre: "Stilnox", principioActivo: "Zolpidem",
    laboratorio: "Sanofi", atc: "N05CF02", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Insomnio ocasional, insomnio agudo",
    dosis: "10 mg/día (máx 4 semanas)", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Insuficiencia respiratoria grave. Insuficiencia hepática grave. Miastenia gravis. Síndrome de apnea del sueño grave.", efectosAdversos: "Somnolencia diurna. Mareo. Cefalea. Amnesia anterógrada. Alucinaciones (raras). Dependencia y tolerancia. Sonambulismo. Diarrea."
  },
  {
    id: "MED164", nombre: "Lyrica", principioActivo: "Pregabalina",
    laboratorio: "Pfizer", atc: "N03AX16", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Dolor neuropático periférico y central, epilepsia, trastorno de ansiedad generalizada",
    dosis: "150-600 mg/día", presentacion: "Cápsulas 75 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave (ajuste de dosis). No recomendado en menores de 18 años.", efectosAdversos: "Mareo (muy frecuente). Somnolencia. Ataxia. Visión borrosa. Aumento de peso. Sequedad de boca. Edema periférico. Euforia y confusión."
  },
  {
    id: "MED165", nombre: "Trankimazin", principioActivo: "Alprazolam",
    laboratorio: "Pfizer", atc: "N05BA12", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Trastornos de ansiedad, trastorno de pánico con o sin agorafobia",
    dosis: "0.75-3 mg/día", presentacion: "Comprimidos 0.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a alprazolam, benzodiazepinas o excipientes. Miastenia gravis. Insuficiencia respiratoria grave. Síndrome de apnea del sueño. Insuficiencia hepática grave.", efectosAdversos: "Somnolencia, sedación, mareos, ataxia, fatiga. Riesgo de dependencia y tolerancia. Raramente: amnesia anterógrada, cambios de humor, depresión, reacciones paradójicas."
  },
  {
    id: "MED166", nombre: "Celebrex", principioActivo: "Celecoxib",
    laboratorio: "Pfizer", atc: "M01AH01", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artrosis, artritis reumatoide, espondilitis anquilosante",
    dosis: "200-400 mg/día", presentacion: "Cápsulas 200 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a sulfonamidas o AINEs. Úlcera péptica activa o hemorragia gastrointestinal. Cardiopatía isquémica establecida. Insuficiencia renal grave. Tercer trimestre de embarazo.", efectosAdversos: "Dispepsia. Dolor abdominal. Diarrea. Hipertensión arterial. Edema periférico. Cefalea. Elevación de transaminasas. Aumento del riesgo trombótico cardiovascular."
  },
  {
    id: "MED167", nombre: "Viagra", principioActivo: "Sildenafilo",
    laboratorio: "Pfizer", atc: "G04BE03", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Disfunción eréctil",
    dosis: "50-100 mg 1h antes de la actividad sexual", presentacion: "Comprimidos 50 mg", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Tratamiento con nitratos orgánicos (contraindicación absoluta). Insuficiencia hepática grave. Hipotensión grave. ACV o IAM reciente. Enfermedad cardíaca inestable.", efectosAdversos: "Cefalea. Rubefacción facial. Dispepsia. Congestión nasal. Mareo. Alteraciones visuales (visión azulada). Hipotensión. Priapismo (raro)."
  },
  {
    id: "MED168", nombre: "Eutirox", principioActivo: "Levotiroxina sódica",
    laboratorio: "Merck", atc: "H03AA01", grupoAtc: "H", subgrupoAtc: "H03",
    indicacion: "Hipotiroidismo, supresión del TSH en cáncer tiroideo",
    dosis: "50-200 microgramos/día", presentacion: "Comprimidos 100 mcg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a levotiroxina o excipientes. Insuficiencia adrenal no tratada. Tirotoxicosis no tratada. Infarto agudo de miocardio, miocarditis aguda.", efectosAdversos: "Síntomas de hipertiroidismo si sobredosis: taquicardia, palpitaciones, ansiedad, temblor, insomnio, pérdida de peso. Raramente: reacciones alérgicas cutáneas."
  },
  {
    id: "MED169", nombre: "Jardiance", principioActivo: "Empagliflozina",
    laboratorio: "Boehringer Ingelheim", atc: "A10BK03", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2, insuficiencia cardíaca con fracción de eyección reducida",
    dosis: "10-25 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Diabetes tipo 1. Insuficiencia renal grave (TFGe <30 ml/min). Cetoacidosis diabética. Embarazo y lactancia.", efectosAdversos: "Infecciones genitales micóticas. Infecciones del tracto urinario. Poliuria. Hipotensión. Hipoglucemia (con sulfonilureas o insulina). Cetoacidosis (rara). Gangrena de Fournier (muy rara)."
  },
  {
    id: "MED170", nombre: "Spiriva", principioActivo: "Tiotropio",
    laboratorio: "Boehringer Ingelheim", atc: "R03BB04", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "EPOC, asma persistente",
    dosis: "1 inhalación/día", presentacion: "Inhalador 18 mcg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. No está indicado para el tratamiento de crisis agudas de broncoespasmo.", efectosAdversos: "Sequedad de boca (muy frecuente). Estreñimiento. Infecciones respiratorias. Candidiasis orofaríngea. Retención urinaria. Glaucoma de ángulo estrecho (raro)."
  },
  {
    id: "MED171", nombre: "Micardis", principioActivo: "Telmisartán",
    laboratorio: "Boehringer Ingelheim", atc: "C09CA07", grupoAtc: "C", subgrupoAtc: "C09",
    indicacion: "Hipertensión esencial, prevención cardiovascular",
    dosis: "40-80 mg/día", presentacion: "Comprimidos 40 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Segundo y tercer trimestre del embarazo. Insuficiencia hepática grave. Obstrucción biliar. Estenosis bilateral de arteria renal.", efectosAdversos: "Mareo. Hipotensión ortostática. Hiperpotasemia. Insuficiencia renal. Infecciones respiratorias. Dolor abdominal."
  },
  {
    id: "MED172", nombre: "Oball", principioActivo: "Bilastina",
    laboratorio: "Faes Farma", atc: "R06AX29", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Rinitis alérgica estacional y perenne, urticaria",
    dosis: "20 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave (ClCr <30 ml/min). No recomendado en menores de 12 años.", efectosAdversos: "Cefalea. Somnolencia (leve). Mareo. Fatiga. Sequedad de boca. Aumento del apetito. Molestias gastrointestinales."
  },
  {
    id: "MED173", nombre: "Naproxeno Menarini", principioActivo: "Naproxeno",
    laboratorio: "Menarini", atc: "M01AE02", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artritis reumatoide, artrosis, tendinitis, dolor agudo",
    dosis: "500-1000 mg/día", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad a naproxeno, AINE o excipientes. Úlcera péptica activa. Antecedentes de hemorragia GI por AINE. Insuficiencia renal, hepática o cardíaca grave. 3er trimestre embarazo.", efectosAdversos: "Dispepsia, náuseas, dolor abdominal. Riesgo de úlcera péptica y hemorragia gastrointestinal. Raramente: edema, insuficiencia renal, reacciones cutáneas."
  },
  {
    id: "MED174", nombre: "Crestor", principioActivo: "Rosuvastatina",
    laboratorio: "AstraZeneca", atc: "C10AA07", grupoAtc: "C", subgrupoAtc: "C10",
    indicacion: "Hipercolesterolemia, hiperlipidemia mixta, prevención cardiovascular",
    dosis: "10-40 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hepatopatía activa o elevación persistente de transaminasas. Insuficiencia renal grave (ClCr <30 ml/min). Embarazo y lactancia. Antecedentes de miopatía con estatinas.", efectosAdversos: "Mialgias. Miopatía (riesgo de rabdomiólisis, rara). Elevación de transaminasas. Cefalea. Molestias abdominales. Náuseas. Estreñimiento."
  },
  {
    id: "MED175", nombre: "Forxiga", principioActivo: "Dapagliflozina",
    laboratorio: "AstraZeneca", atc: "A10BK01", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2, insuficiencia cardíaca, enfermedad renal crónica",
    dosis: "10 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Diabetes tipo 1. Insuficiencia renal grave (TFGe <25 ml/min). Cetoacidosis diabética.", efectosAdversos: "Infecciones genitales micóticas. Infecciones del tracto urinario. Poliuria/polaquiuria. Hipotensión. Cetoacidosis diabética (rara). Dislipidemia."
  },
  {
    id: "MED176", nombre: "Nexium", principioActivo: "Esomeprazol",
    laboratorio: "AstraZeneca", atc: "A02BC05", grupoAtc: "A", subgrupoAtc: "A02",
    indicacion: "Enfermedad por reflujo gastroesofágico, úlcera péptica, erradicación H. pylori",
    dosis: "20-40 mg/día", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a esomeprazol, benzimidazoles o excipientes. Administración concomitante con nelfinavir.", efectosAdversos: "Cefalea, dolor abdominal, diarrea, náuseas. Riesgo de hipomagnesemia en tratamientos prolongados. Raramente: leucopenia, trombocitopenia, reacciones de hipersensibilidad."
  },
  {
    id: "MED177", nombre: "Aerius", principioActivo: "Desloratadina",
    laboratorio: "MSD", atc: "R06AX27", grupoAtc: "R", subgrupoAtc: "R06",
    indicacion: "Rinitis alérgica, urticaria idiopática crónica",
    dosis: "5 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave. Embarazo y lactancia (no recomendado).", efectosAdversos: "Fatiga (leve). Cefalea. Sequedad de boca. Dolor muscular. Muy rara vez somnolencia."
  },
  {
    id: "MED178", nombre: "Arcoxia", principioActivo: "Etoricoxib",
    laboratorio: "MSD", atc: "M01AH05", grupoAtc: "M", subgrupoAtc: "M01",
    indicacion: "Artrosis, artritis reumatoide, espondilitis anquilosante, gota aguda",
    dosis: "60-120 mg/día", presentacion: "Comprimidos 60 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a AINEs (incluyendo AAS). Úlcera péptica activa o hemorragia gastrointestinal. Cardiopatía isquémica, insuficiencia cardiaca congestiva o HTA no controlada. Insuficiencia renal grave. Tercer trimestre de embarazo.", efectosAdversos: "Hipertensión arterial. Edema periférico. Mareo. Cefalea. Palpitaciones. Dispepsia. Diarrea. Elevación de transaminasas."
  },
  {
    id: "MED179", nombre: "Tamiflu", principioActivo: "Oseltamivir",
    laboratorio: "Roche", atc: "J05AH02", grupoAtc: "J", subgrupoAtc: "J05",
    indicacion: "Tratamiento y profilaxis de la gripe A y B",
    dosis: "75 mg/12h (5 días tratamiento)", presentacion: "Cápsulas 75 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave (ajustar dosis). No se recomienda en menores de 1 año.", efectosAdversos: "Náuseas y vómitos (frecuentes, suelen disminuir con la comida). Cefalea. Dolor abdominal. Mareo. Trastornos neuropsiquiátricos (raros, principalmente en niños y adolescentes)."
  },
  {
    id: "MED180", nombre: "Bonviva", principioActivo: "Ácido ibandrónico",
    laboratorio: "Roche", atc: "M05BA06", grupoAtc: "M", subgrupoAtc: "M05",
    indicacion: "Osteoporosis posmenopáusica (reducción de fracturas vertebrales)",
    dosis: "150 mg/mes", presentacion: "Comprimidos 150 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipocalcemia no corregida. Insuficiencia renal grave (ClCr <30 ml/min). Osteonecrosis mandibular previa. Fracturas atípicas previas.", efectosAdversos: "Síndrome seudogripal transitorio (fiebre, escalofríos, dolor óseo) tras primera dosis. Náuseas. Dolor osteomuscular. Cefalea. Hipocalcemia. Osteonecrosis mandibular (rara)."
  },
  {
    id: "MED181", nombre: "Fluimucil", principioActivo: "Acetilcisteína",
    laboratorio: "Zambon", atc: "R05CB01", grupoAtc: "R", subgrupoAtc: "R05",
    indicacion: "Enfermedades respiratorias con hipersecreción mucosa, EPOC",
    dosis: "600 mg/día", presentacion: "Sobres 600 mg", tipo: "Medicamento", receta: false, financiado: true,
    contraindicaciones: "Hipersensibilidad. Úlcera péptica activa. No recomendado en menores de 2 años (riesgo de obstrucción bronquial).", efectosAdversos: "Náuseas y vómitos. Estomatitis. Broncoespasmo (especialmente en asmáticos). Secreción nasal abundante. Molestias gastrointestinales."
  },
  {
    id: "MED182", nombre: "Patanol", principioActivo: "Olopatadina",
    laboratorio: "Alcon", atc: "S01GX09", grupoAtc: "S", subgrupoAtc: "S01",
    indicacion: "Conjuntivitis alérgica estacional",
    dosis: "1 gota/12h", presentacion: "Colirio 1 mg/ml", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. No se recomienda el uso de lentes de contacto blandas durante el tratamiento con colirio.", efectosAdversos: "Visión borrosa transitoria (colirio). Sequedad ocular. Cefalea. Disgeusia. En spray nasal: epistaxis, cefalea, somnolencia."
  },
  {
    id: "MED183", nombre: "Protopic", principioActivo: "Tacrolimus",
    laboratorio: "LEO Pharma", atc: "D02AX", grupoAtc: "D", subgrupoAtc: "D02",
    indicacion: "Dermatitis atópica moderada a grave en adultos y niños (>2 años)",
    dosis: "0.03-0.1% 2 veces/día", presentacion: "Pomada 0.1%", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Síndrome de Netherton. Infección cutánea activa en el área de tratamiento. No aplicar en mucosas.", efectosAdversos: "Sensación de quemazón o picor en zona de aplicación (frecuente). Eritema cutáneo. Infecciones herpéticas. Rubefacción facial tras ingesta de alcohol. Foliculitis."
  },
  {
    id: "MED184", nombre: "Fiaberin", principioActivo: "Etifoxina",
    laboratorio: "Gebro Pharma", atc: "N05BX", grupoAtc: "N", subgrupoAtc: "N05",
    indicacion: "Trastornos de ansiedad, tensión emocional, trastornos psicosomáticos",
    dosis: "150-300 mg/día", presentacion: "Cápsulas 50 mg", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Miastenia gravis. Insuficiencia hepática grave. Shock. Embarazo (tercer trimestre) y lactancia.", efectosAdversos: "Somnolencia diurna. Mareo. Cefalea. Sequedad de boca. Náuseas. Riesgo de dependencia y síndrome de abstinencia en uso prolongado."
  },
  {
    id: "MED185", nombre: "Cebion", principioActivo: "Ácido ascórbico (Vitamina C)",
    laboratorio: "ERN", atc: "A11GA01", grupoAtc: "A", subgrupoAtc: "A11",
    indicacion: "Prevención y tratamiento de la deficiencia de vitamina C",
    dosis: "500-1000 mg/día", presentacion: "Comprimidos 500 mg", tipo: "Medicamento", receta: false, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Litiasis renal oxálica (altas dosis). Hemocromatosis. Déficit de glucosa-6-fosfato deshidrogenasa (riesgo de hemólisis en altas dosis).", efectosAdversos: "Puede causar molestias gastrointestinales (pirosis, diarrea) a dosis altas. Riesgo de litiasis renal. Color amarillo de orina."
  },
  {
    id: "MED186", nombre: "Micropam", principioActivo: "Clonazepam",
    laboratorio: "Angelini", atc: "N03AE01", grupoAtc: "N", subgrupoAtc: "N03",
    indicacion: "Epilepsia, trastorno de pánico, trastornos del movimiento",
    dosis: "0.5-4 mg/día", presentacion: "Comprimidos 0.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad a clonazepam, benzodiazepinas o excipientes. Insuficiencia respiratoria grave. Insuficiencia hepática grave. Coma. Dependencia a drogas o alcohol.", efectosAdversos: "Somnolencia, fatiga, ataxia, mareos, aumento de secreción bronquial. Riesgo de dependencia y tolerancia. Raramente: reacciones paradójicas, depresión respiratoria, leucopenia."
  },
  {
    id: "MED187", nombre: "Ozempic", principioActivo: "Semaglutida",
    laboratorio: "Novo Nordisk", atc: "A10BJ06", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2, obesidad (control de peso)",
    dosis: "0.5-1 mg/semana", presentacion: "Pluma inyectable 0.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Antecedentes personales o familiares de carcinoma medular de tiroides. Neoplasia endocrina múltiple tipo 2. Diabetes tipo 1. NAH >5% (contraindicación relativa).", efectosAdversos: "Náuseas (muy frecuente). Vómitos. Diarrea. Estreñimiento. Dolor abdominal. Colelitiasis. Hipoglucemia (con sulfonilureas o insulina). Disminución del apetito."
  },
  {
    id: "MED188", nombre: "Rybelsus", principioActivo: "Semaglutida oral",
    laboratorio: "Novo Nordisk", atc: "A10BJ06", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2",
    dosis: "7-14 mg/día", presentacion: "Comprimidos 7 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Antecedentes personales o familiares de carcinoma medular de tiroides. Neoplasia endocrina múltiple tipo 2. Diabetes tipo 1.", efectosAdversos: "Náuseas (muy frecuente). Vómitos. Diarrea. Estreñimiento. Dolor abdominal. Colelitiasis. Hipoglucemia (con sulfonilureas o insulina). Disminución del apetito."
  },
  {
    id: "MED189", nombre: "Levemir", principioActivo: "Insulina detemir",
    laboratorio: "Novo Nordisk", atc: "A10AE05", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 1 y tipo 2",
    dosis: "10-40 UI/día (según perfil glucémico)", presentacion: "Pluma 100 UI/ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipoglucemia.", efectosAdversos: "Hipoglucemia. Reacciones en el lugar de inyección (eritema, hinchazón, prurito). Lipodistrofia. Aumento de peso. Edema transitorio."
  },
  {
    id: "MED190", nombre: "Actonel", principioActivo: "Risedronato sódico",
    laboratorio: "Warner Chilcott", atc: "M05BA07", grupoAtc: "M", subgrupoAtc: "M05",
    indicacion: "Osteoporosis posmenopáusica, osteoporosis inducida por corticosteroides",
    dosis: "35 mg/semana", presentacion: "Comprimidos 35 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipocalcemia. Insuficiencia renal grave (ClCr <30 ml/min). Estenosis esofágica. Incapacidad para permanecer erguido al menos 30 minutos.", efectosAdversos: "Irritación esofágica/gástrica. Dolor osteomuscular y articular. Cefalea. Dispepsia. Osteonecrosis mandibular (rara)."
  },
  {
    id: "MED191", nombre: "Vesicare", principioActivo: "Solifenacina",
    laboratorio: "Astellas Pharma", atc: "G04BD08", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Vejiga hiperactiva, incontinencia urinaria de urgencia",
    dosis: "5-10 mg/día", presentacion: "Comprimidos 5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Retención urinaria. Glaucoma de ángulo estrecho no controlado. Miastenia gravis. Íleo paralítico. Insuficiencia hepática grave. Colitis ulcerosa grave.", efectosAdversos: "Sequedad de boca (muy frecuente). Visión borrosa. Estreñimiento. Dispepsia. Náuseas. Molestias abdominales. Retención urinaria. Fatiga."
  },
  {
    id: "MED192", nombre: "Cialis", principioActivo: "Tadalafilo",
    laboratorio: "Lilly", atc: "G04BE08", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Disfunción eréctil, hiperplasia benigna de próstata",
    dosis: "5-20 mg según pauta", presentacion: "Comprimidos 20 mg", tipo: "Medicamento", receta: true, financiado: false
  ,
    contraindicaciones: "Hipersensibilidad. Tratamiento con nitratos orgánicos (contraindicación absoluta). Insuficiencia hepática grave. Hipotensión grave. ACV o IAM reciente. Angina inestable.", efectosAdversos: "Cefalea. Dispepsia. Rubefacción facial. Congestión nasal. Mialgia. Dolor lumbar. Mareo. Alteraciones visuales. Priapismo (raro)."
  },
  {
    id: "MED193", nombre: "Trulicity", principioActivo: "Dulaglutida",
    laboratorio: "Lilly", atc: "A10BJ05", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 2",
    dosis: "0.75-1.5 mg/semana", presentacion: "Pluma inyectable 1.5 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Antecedentes personales o familiares de carcinoma medular de tiroides. Neoplasia endocrina múltiple tipo 2. Diabetes tipo 1.", efectosAdversos: "Náuseas (frecuente). Vómitos. Diarrea. Dolor abdominal. Disminución del apetito. Colelitiasis. Fatiga. Hipoglucemia (con sulfonilureas o insulina)."
  },
  {
    id: "MED194", nombre: "Humalog", principioActivo: "Insulina lispro",
    laboratorio: "Lilly", atc: "A10AB04", grupoAtc: "A", subgrupoAtc: "A10",
    indicacion: "Diabetes mellitus tipo 1 y tipo 2 (insulina de acción rápida)",
    dosis: "0.5-1 UI/kg/día (según perfil)", presentacion: "Pluma 100 UI/ml", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipoglucemia.", efectosAdversos: "Hipoglucemia. Reacciones en el lugar de inyección (eritema, hinchazón, prurito). Lipodistrofia. Aumento de peso. Edema transitorio."
  },
  {
    id: "MED195", nombre: "Foster", principioActivo: "Beclometasona + Formoterol",
    laboratorio: "Chiesi", atc: "R03AK08", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente, EPOC",
    dosis: "1-2 inhalaciones/12h", presentacion: "Inhalador 100/6 mcg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. No está indicado para el tratamiento de crisis agudas de asma o EPOC. No en niños menores de 12 años.", efectosAdversos: "Candidiasis orofaríngea. Disfonía. Cefalea. Temblor. Palpitaciones. Neumonía en pacientes con EPOC. Tos."
  },
  {
    id: "MED196", nombre: "Clenil", principioActivo: "Beclometasona",
    laboratorio: "Chiesi", atc: "R03BA01", grupoAtc: "R", subgrupoAtc: "R03",
    indicacion: "Asma persistente leve a moderada",
    dosis: "200-800 microgramos/día", presentacion: "Inhalador 250 mcg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. No está indicado para el tratamiento de crisis agudas de asma. Tuberculosis pulmonar activa o no tratada.", efectosAdversos: "Candidiasis orofaríngea. Disfonía. Cefalea. Neumonía en pacientes con EPOC. Irritación de garganta. Tos."
  },
  {
    id: "MED197", nombre: "Urorec", principioActivo: "Silodosina",
    laboratorio: "Recordati", atc: "G04CA04", grupoAtc: "G", subgrupoAtc: "G04",
    indicacion: "Hiperplasia benigna de próstata",
    dosis: "8 mg/día", presentacion: "Cápsulas 8 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia hepática grave. Insuficiencia renal grave (ClCr <30 ml/min). Hipotensión ortostática grave.", efectosAdversos: "Eyaculación retrógrada o anorgasmia (frecuente). Mareo. Hipotensión ortostática. Congestión nasal. Diarrea. Sequedad de boca."
  },
  {
    id: "MED198", nombre: "Lixiana", principioActivo: "Edoxabán",
    laboratorio: "Daiichi Sankyo", atc: "B01AF03", grupoAtc: "B", subgrupoAtc: "B01",
    indicacion: "Prevención de ictus en fibrilación auricular no valvular, tratamiento de TVP/TEP",
    dosis: "60 mg/día", presentacion: "Comprimidos 60 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hemorragia activa clínicamente significativa. Lesión orgánica con riesgo hemorrágico. HTA no controlada. Insuficiencia renal grave (ClCr <15 ml/min). Hepatopatía asociada a coagulopatía.", efectosAdversos: "Epistaxis. Hematomas. Hemorragia superficial. Anemia. Náuseas. Elevación de transaminasas. Erupción cutánea."
  },
  {
    id: "MED199", nombre: "Prolia", principioActivo: "Denosumab",
    laboratorio: "Amgen", atc: "M05BX04", grupoAtc: "M", subgrupoAtc: "M05",
    indicacion: "Osteoporosis posmenopáusica, osteoporosis inducida por hormonoterapia",
    dosis: "60 mg/6 meses", presentacion: "Pluma inyectable 60 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hipocalcemia no corregida. Embarazo y lactancia. Osteonecrosis mandibular previa.", efectosAdversos: "Dolor osteomuscular. Infecciones (celulitis, infecciones del tracto urinario). Eczema. Hipocalcemia. Osteonecrosis mandibular (rara). Fracturas atípicas de fémur (rara)."
  },
  {
    id: "MED200", nombre: "Ebixa", principioActivo: "Memantina",
    laboratorio: "Lundbeck", atc: "N06DX01", grupoAtc: "N", subgrupoAtc: "N06",
    indicacion: "Enfermedad de Alzheimer moderada a grave",
    dosis: "10-20 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Insuficiencia renal grave (ajuste de dosis necesario). Epilepsia activa (riesgo de crisis).", efectosAdversos: "Mareo. Cefalea. Somnolencia. Estreñimiento. Hipertensión arterial. Disnea. Elevación de transaminasas. Alucinaciones (raras)."
  },
  {
    id: "MED201", nombre: "Ezetrol", principioActivo: "Ezetimiba",
    laboratorio: "Viatris", atc: "C10AX09", grupoAtc: "C", subgrupoAtc: "C10",
    indicacion: "Hipercolesterolemia primaria, hiperlipidemia mixta (en combinación con estatinas)",
    dosis: "10 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hepatopatía activa o elevación persistente de transaminasas (especialmente con estatinas). Embarazo y lactancia.", efectosAdversos: "Dolor abdominal. Diarrea. Flatulencia. Fatiga. Elevación de transaminasas (especialmente en combinación con estatinas). Mialgias."
  },
  {
    id: "MED202", nombre: "Primperán", principioActivo: "Metoclopramida",
    laboratorio: "Esteve", atc: "A03FA01", grupoAtc: "A", subgrupoAtc: "A03",
    indicacion: "Náuseas y vómitos, gastroparesia, reflujo gastroesofágico",
    dosis: "10-30 mg/día", presentacion: "Comprimidos 10 mg", tipo: "Medicamento", receta: true, financiado: true,
    contraindicaciones: "Hipersensibilidad. Hemorragia gastrointestinal. Obstrucción mecánica intestinal. Perforación gastrointestinal. Feocromocitoma. Antecedentes de discinesia tardía por neurolépticos.", efectosAdversos: "Somnolencia. Fatiga. Discinesia. Síndrome extrapiramidal (especialmente en niños y adultos jóvenes). Hiperprolactinemia. Diarrea."
  }
]);

// ─── Funciones de búsqueda ───
// NOTA: Las funciones de búsqueda se movieron a js/nucleo/utilidades.js
// para separar datos de lógica.

})();

interface Estado {
  estado: string
  value: string
  oficinas: Oficina[]
}

interface Oficina {
  oficina: string
  direccion: string
}

export const estados: Estado[] = [
  {
    estado: "Aguascalientes",
    value: "aguascalientes",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "CENTRO COMERCIAL EL DORADO, AV. LAS AMRICAS No.1701, P.B. FRACC. EL DORADO, COLONIA SANTA ELENA 2 SECCIN, C.P. 20238, AGUASCALIENTES, AGS."
      },
      {
        oficina: "Oficina de Enlace Calvillo, Ags.",
        direccion: "PROLONGACIN INDEPENDENCIA NO. 201 ESQ. GUANAJUATO, PALACIO DE JUSTICIA Y ADMINISTRACIN. COL. LOS NGELES C.P.20800"
      },
      {
        oficina: "Oficina de Enlace Juchipila, Zac.",
        direccion: "MIXTON S/N, PRESIDENCIA MUNICIPAL"
      },
    ]
  },
  {
    estado: "Baja California",
    value: "baja-california",
    oficinas: [
      {
        oficina: "Delegacion Tijuana",
        direccion: "AV. PASEO DE LOS HROES 9111, 1er. PISO CENTRO COMERCIAL PAVILION, PLAZA TIJUANA, ESQ. AV. GRAL. M. MRQUEZ DE LEN, ZONA CENTRO C.P. 22010 TIJUANA, BAJA CALIFORNIA"
      },
      {
        oficina: "Oficina Central",
        direccion: "CALLE MEXICO 161, LOTES 20 Y 21, MANZANA 35 DE LA PRIMERA SECCIN, COLONIA CENTRO, MEXICALI, B. C., C.P. 21000"
      },
      {
        oficina: "Oficina de Enlace Mexicali, B.C.",
        direccion: "CALLE NOVENA Y CARRETERA A SAN LUIS CENTRO COMERCIAL POPULAR S/N LOCAL 3 Y 4"
      },
      {
        oficina: "Oficina de Enlace San Luis Ro Colorado, Son.",
        direccion: "CALLE 26 ESQUINA CON AVENIDA KINO COLONIA BURCRATA, C.P. 83448"
      },
    ]
  },
  {
    estado: "Baja California Sur",
    value: "baja-california-sur",
    oficinas: [
      {
        oficina: "Delegacion Baja California Sur",
        direccion: "CALLE IGNACIO RAMREZ #3035 ESQUINA CALLE SONORA, COL. PUEBLO NUEVO, C.P. 23060, LA PAZ, B.C.S"
      },
    ]
  },
  {
    estado: "Campeche",
    value: "campeche",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. 16 DE SEPTIEMBRE S/N, EDIFICIO DEL PALACIO FEDERAL, 1er PISO, COL. CENTRO, C.P. 24000 SAN FRANCISCO, CAMPECHE"
      },
      {
        oficina: "Oficina de Enlace Municipal en Cd. Del Carmen, Camp.",
        direccion: "CALLE 20 X 31, COL. CENTRO, C.P. 24100. Cd. Del Carmen, Campeche"
      },
    ]
  },
  {
    estado: "Coahuila",
    value: "coahuila",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "BOULEVARD LAS QUINTAS No.50 LOCALES 17,18,19 Y ANEXO, COL. QUINTAS SAN ISIDRO, TORREN COAHUILA (DENTRO DEL INMUEBLE DENOMINADO PLAZA INDEPENDENCIA) C.P. 27016"
      },
      {
        oficina: "Oficina de Enlace Municipal en Acua, Coahuila.",
        direccion: "Calle Matamoros, esquina con calle Reforma No. 660 Zona Centro, C.P. 26200. Acua, Coahuila"
      },
      {
        oficina: "Oficina de Enlace Municipal en Monclova, Coah.",
        direccion: "BOULEVARD HAROLD R PAPE, ESQ., BLVD. FRANCISCO I. MADERO (ANEXO CANACO) COL. GUADALUPE, C.P. 25700"
      },
      {
        oficina: "Oficina de Enlace Municipal en Piedras Negras, Coah.",
        direccion: "BLVD. PLAZA DE LAS CULTURAS, No. 620, COL. GONZLEZ, C.P. 26020, PIEDRAS NEGRAS, COAHUILA."
      },
      {
        oficina: "Oficina de Enlace San Juan de Sabinas, Coah.",
        direccion: "LOCALIDAD DE NUEVA ROSITA EN EL MUNICIPIO DE SAN JUAN DE SABINAS, COAHUILA DE ZARAGOZA"
      },
      {
        oficina: "Oficina de Enlace Municipal en Saltillo, Coah.",
        direccion: "PADRE FLORES N. 181, ZONA CENTRO, C.P. 25000"
      },
    ]
  },
  {
    estado: "Colima",
    value: "colima",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "PLAZA LA PAZ, AVENIDA DE LA PAZ No. 33, RESIDENCIAL SANTA GERTRUDIS C.P. 28017 COLIMA, COLIMA"
      },
      {
        oficina: "Oficina de Enlace Colima, Col",
        direccion: "TERCER ANILLO PERIFRICO #301 PLAZA ZENTRALIA.LOCAL 270 ALTOS, COLONIA VALLE DORADO CP: 28000 COLIMA,COLIMA."
      },
    ]
  },
  {
    estado: "Chiapas",
    value: "chiapas",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "TORRE CHIAPAS BLV. ANDRS SERRA ROJAS No. 1090, 1er PISO,COL. PASO LIMN, C.P. 29405 TUXTLA GUTIRREZ, CHIAPAS"
      },
      {
        oficina: "Oficina de Enlace Comitan, Chis.",
        direccion: "BOULEVARD SUR DR. BELISARIO DOMNGUEZ EDIFICIO DE SEGURIDAD PBLICA, 2DO. PISO, C.P.30000,COMITN DE DOMNGUEZ, CHIAPAS"
      },
      {
        oficina: "Delegacion Tapachula",
        direccion: "3a SUR No. 45 'A' ENTRE 6a Y 8a ORIENTE C.P. 30700 TAPACHULA, CHIAPAS"
      },
    ]
  },
  {
    estado: "Chihuahua",
    value: "chihuahua",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: ""
      },
      {
        oficina: "Oficina de Enlace Municipal en Cd. Del Carmen, Camp.",
        direccion: ""
      },
      {
        oficina: "Oficina Central",
        direccion: ""
      },
      {
        oficina: "Oficina de Enlace Municipal en Cd. Del Carmen, Camp.",
        direccion: ""
      },
      {
        oficina: "Oficina Central",
        direccion: ""
      },
      {
        oficina: "Oficina de Enlace Municipal en Cd. Del Carmen, Camp.",
        direccion: ""
      },
      {
        oficina: "Oficina Central",
        direccion: ""
      },
      {
        oficina: "Oficina de Enlace Municipal en Cd. Del Carmen, Camp.",
        direccion: ""
      },
    ]
  },
  {
    estado: "Ciudad de México",
    value: "ciudad-de-mexico",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Durango",
    value: "durango",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "CENTRO COMERCIAL PASEO DURANGO BOULEVARD FELIPE PESCADOR NUM. 1401, LOCAL A05, COL. ESPERANZA, C.P. 34080, DURANGO, DURANGO"
      },
      {
        oficina: "Oficina de Enlace Santiago Papasquiaro, Dgo.",
        direccion: "CALLE BRUNO MARTNEZ No. 206, INTERIOR '8' ENTRE ARROYO TAGARETE Y LEYVA SANTIAGO PAPASQUIARO, DGO. C.P. 34600"
      },
      {
        oficina: "Oficina de Enlace Nuevo Ideal, Dgo.",
        direccion: "JOS RAMN VALDEZ N. 503, ZONA CENTRO, C.P. 34422"
      }
    ]
  },
  {
    estado: "Guanajuato",
    value: "guanajuato",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "PLAZA GALERA 'LAS TORRES'-BOULEVARD JUAN ALONSO DE TORRES ORIENTE No.1315, COL. SAN JOS DEL CONSUELO, C.P. 37200 LEN,GTO."
      },
      {
        oficina: "Oficina de Enlace Acámbaro, Gto.",
        direccion: "CALLE HIDALGO N. 373 (FRENTE AL JARDIN) COLONIA CENTRO C.P. 38600 ACMBARO, GTO."
      },
      {
        oficina: "Oficina de Enlace Celaya, Gto.",
        direccion: "PLAZA VELEROS LOCAL 1, FRACCIONAMIENTO DEL PARQUE CELAYA, GTO."
      },
      {
        oficina: "Oficina de Enlace Irapuato, Gto.",
        direccion: "DON BOSCO PLAZA COMERCIAL BLVD. LUIS DONALDO COLOSIO #1477, COL. INDEPENDENCIA, NAVE Z.1, C.P. 35559."
      },
      {
        oficina: "Oficina de Enlace León, Gto.",
        direccion: "CENTRO COMERCIAL PLAZA MAYOR. BLVD. JUAN ALONSO DE TORRES, #2002, LOCAL 71, COL. VALLE DEL CAMPESTRE. C.P. 37129. LEN, GTO."
      },
      {
        oficina: "Oficina de Enlace San Felipe, Gto.",
        direccion: "CASA JUREZ PLANTA ALTA, ZONA CENTRO, C.P. 37600. SAN FELIPE, GTO."
      },
      {
        oficina: "Oficina de Enlace Pnjamo, Gto.",
        direccion: "CALLE 5 DE MAYO # 13 A, ZONA CENTRO, C.P. 36900, PNJAMO, GTO."
      },
      {
        oficina: "Oficina de Enlace Municipal San Miguel de Allende, Gto.",
        direccion: "EDIFICIO ADMINISTRATIVO,BLVD DE LA CONSPIRACIN No 130 C.P. 37748"
      }
    ]
  },
  {
    estado: "Guerrero",
    value: "guerrero",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: "CENTRO DE CONGRESOS COPACABANA, AV. COSTERA MIGUEL ALEMN No.63 LOCAL C-16 2do. NIVEL, FRACC. CLUB DEPORTIVO, C.P. 39690, ACAPULCO DE JUREZ, GRO."
      },
      {
        oficina: "Oficina de Enlace Cd. Altamirano, Gro. (Pungarabato)",
        direccion: "AV. LVARO OBREGN No. 8 COL. CENTRO,C.P. 40660"
      },
    ]
  },
  {
    estado: "Hidalgo",
    value: "hidalgo",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: "AV. JUREZ #400 -A, COL. CENTRO, C.P. 42000 PACHUCA, HIDALGO"
      },
      {
        oficina: "Oficina de Enlace Tepeji del Ro, Hgo.",
        direccion: "PALACIO MUNICIPAL, COL. CENTRO C.P. 42850, TEPEJI DEL RIO"
      },
      {
        oficina: "Oficina de Enlace Tulancingo, Hgo.",
        direccion: "PLAZA MANUEL FERNANDO SOTO S/N PALTOS, FRACC. LOS PINOS C.P. 43626"
      },
    ]
  },
  {
    estado: "Jalisco",
    value: "jalisco",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },

      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Estado de México",
    value: "estado-de-mexico",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      }
    ]
  },
  {
    estado: "Michoacán",
    value: "michoacan",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Morelos",
    value: "morelos",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "LOCALES 12 AL 16, AV. PLAN DE AYALA No. 501 COL. TEOPANZOLCO, CUERNAVACA, MORELOS, C.P. 62350"
      },
    ]
  },
  {
    estado: "Nayarit",
    value: "nayarit",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. INSURGENTES No. 1121 ORIENTE, COL. LOS LLANITOS, C.P. 63170, TEPIC, NAYARIT"
      },
    ]
  },
  {
    estado: "Nuevo León",
    value: "nuevo-leon",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "AV. EUGENIO GARZA SADA, No. 2411 Y 2413, COL. ROMA, C.P. 64700, MONTERREY, NL. COMPLEJO COMERCIAL 'PASEO TEC', 1ER. NIVEL, LOCALES L-49, L-50, L-51, L-52, L-53, L-54, L-55, L-56, L-57"
      },
      {
        oficina: "Oficina de Enlace Apodaca, N.L.",
        direccion: "5 DE MAYO No. 103, LOCAL 5 Y 6, COL. CENTRO, C.P. 66600"
      },
      {
        oficina: "Oficina de Enlace General Escobedo, N.L.",
        direccion: "AV. MANUEL L. BARRAGAN # 220, ACCESO 5, LOCAL 55, COL. EX HACIENDA EL CANADA, C.P. 66054"
      },
      {
        oficina: "Oficina de Enlace Guadalupe, N.L.",
        direccion: "GRAN PARQUE GUADALUPE UNIDAD TOLTECA, AV. TOLTECA ESQ. RO LA SILLA S/N, COL. TOLTECA, C.P. 67100"
      },
      {
        oficina: "Oficina de Enlace Linares, N.L.",
        direccion: "CARRETERA A GALEANA, KILMETRO 1.5 PARQUE NOGALAR, EDIFICIO OFICINA DE ENLACE S.R.E., C.P. 67700"
      },
      {
        oficina: "Oficina de Enlace Montemorelos, N.L.",
        direccion: "Cuauhtemoc No. 509, HIDALGO Y CINCO DE MAYO, COL. CENTRO C.P. 67500"
      },
      {
        oficina: "Oficina de Enlace Monterrey, N.L. (parque Espaa)",
        direccion: "AV. MORONES PRIETO S/N, COL. FRACCIONAMIENTO BUENOS AIRES, PARQUE ESPAA, C.P. 64810"
      },
      {
        oficina: "Oficina de enlace Monterrey, N.L. III (parque Tucn)",
        direccion: "AV. COMISIN TRIPARTITA Y URANIO, COL. VALLE DE INFONAVIT 5TO. SECTOR INTERIOR PARQUE TUCN MONTERREY, N.L."
      },
      {
        oficina: "Oficina de Enlace San Nicols de los Garza, N.L.",
        direccion: "AV. JUREZ No. 655 PONIENTE, ENTRE RYON Y CORREGIDORA, ZONA CENTRO, C.P. 66400"
      },
      {
        oficina: "Oficina de Enlace San Pedro Garza Garca, N.L.",
        direccion: "MORONES PRIETO No. 2090 ESQ. HUMBERTO LOBO EDIFICIO SERVICIOS CIUDADANOS COL. DEL VALLE C.P. 66214."
      },
      {
        oficina: "Oficina de Enlace Santa Catarina, N.L.",
        direccion: "'PLAZA LAS QUINTA', AV. MANUEL ORDOEZ No. 620 LOCAL 10-11, PLANTA BAJA COL. LA AURORA, C.P. 66350"
      },
      {
        oficina: "Oficina de Enlace Santiago, N.L.",
        direccion: "HIDALGO S/N, ESQ. EUTIMIO SILVA, PLANTA ALTA, EL CERCADO, SANTIAGO N.L."
      },
    ]
  },
  {
    estado: "Oaxaca",
    value: "oaxaca",
    oficinas: [
      {
        oficina: "Delegacion Oaxaca",
        direccion: "CALLE LAMOS No. 603, COL. REFORMA, C.P. 68050 CIUDAD DE OAXACA, OAXACA DE JUREZ"
      },
    ]
  },
  {
    estado: "Puebla",
    value: "puebla",
    oficinas: [
      {
        oficina: "Delegacion Puebla",
        direccion: "VA ATLIXCAYOTL No.1101, EDIFICIO NORTE, COLONIA RESERVA TERRITORIAL ATLIXCAYOTL, C.P. 72190 PUEBLA."
      },
    ]
  },
  {
    estado: "Querétaro",
    value: "queretaro",
    oficinas: [
      {
        oficina: "Oficina Central",
        direccion: "BOULEVARD BERNARDO QUINTANA # 112 COL. CARRETAS DE SANTIAGO DE QUERTARO. C.P. 76050"
      },
      {
        oficina: "Oficina de Enlace en Corregidora, Qro.",
        direccion: "AV. PROLONGACIN CANDILES 204, COL FRACC. CAMINO REAL, ENTRE CAMINO REAL Y BLVD. CAMINO REAL, LOCALES A-01 AL A-05, C.P. 76190, CORREGIDORA, QRO"
      },
      {
        oficina: "Oficina de Enlace San Juan del Ro, Qro.",
        direccion: "CALLE ING. LEOPOLDO PERALTA S/N CECUCO, COLONIA RAMOS MILLN, SAN JUAN DEL RO, QRO. C.P. 76807"
      },
    ]
  },
  {
    estado: "Quintana Roo",
    value: "quintana-roo",
    oficinas: [
      {
        oficina: "Delegacion Quintana Roo",
        direccion: "LOCALES DEL 209 AL 214, AVENIDA NADER No. 8, SPER MANZANA 5, COLONIA PLAZA CENTRO, C.P. 77501, CANCN, QUINTANA ROO"
      },
    ]
  },
  {
    estado: "San Luis Potosí",
    value: "san-luis-potosi",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Sinaloa",
    value: "sinaloa",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Sonora",
    value: "sonora",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
      {
        oficina: "Oficina de enlace",
        direccion: ""
      },
    ]
  },
  {
    estado: "Tabasco",
    value: "tabasco",
    oficinas: [
      {
        oficina: "Oficina central",
        direccion: "AV. CIRCUITO DEPORTIVO No. 312, COL. PENSIONES C.P. 86169, VILLAHERMOSA, TABASCO"
      },
    ]
  },
  {
    estado: "Tamaulipas",
    value: "tamaulipas",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Tlaxcala",
    value: "tlaxcala",
    oficinas: [
      {
        oficina: "Delgacion Tlaxcala",
        direccion: "BOULEVARD EMILIO SNCHEZ PIEDRAS No 409-1, SUB ANCLA 2-3, CENTRO COMERCIAL LA ANTIGUA ESTACIN, COL. CENTRO, APIZACO, TLAXCALA, C.P. 90300"
      },
    ]
  },
  {
    estado: "Veracruz",
    value: "veracruz",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Yucatán",
    value: "yucatan",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
    ]
  },
  {
    estado: "Zacatecas",
    value: "zacatecas",
    oficinas: [
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
      {
        oficina: "",
        direccion: ""
      },
    ]
  }
];

let questions = [
    {
    numb: 1,
    question: "¿En qué línea está Lacoma?",
    answer: "Línea 7",
    options: [
        'Línea 9',
        'Línea 4',
        'Línea 7',
        'No existe'
    ]
    },
    {
    numb: 2,
    question: "¿Qué zona está habilitada para el transporte de perros?",
    answer: 'En el último coche de cada tren y En los coches centrales en ML1',
    options: [
        'En el último coche de cada tren',
        'En los coches de cabecera y de cola',
        'En los coches centrales en ML1',
        'En el último coche de cada tren y En los coches centrales en ML1'
    ]
    },
    {
    numb: 3,
    question:"¿De qué trata el capítulo 1 del Reglamento de viajero del ferrocarril Metropolitano?",
    answer: 'De los derechos de los viajeros',
    options: [
        'De los deberes de los viajeros',
        'De los derechos de los viajeros',
        'De las obligaciones de Metro de Madrid',
        'Ninguna es correcta'
    ]
    },
    {
        numb: 4,
        question:"Cuando las señales no se perciban claramente el conductor....",
        answer: 'Reducirá la marcha y si es necesario se detendrá para comprobar sus indicaciones',
        options: [
            'Delegará la conducción del tren en un Mando de la Linea',
            'Reducirá la marcha a paso de hombre',
            'Reducirá la marcha y si es necesario se detendrá para comprobar sus indicaciones',
            'Reducirá la marcha y abatirá los pantógrafos informando previamente al PCC'
        ]
      },
      {
        numb: 5,
        question:"METRO EN CIFRAS: Cuántos coches tiene la red de metro actualizada:",
        answer: '<2400',
        options: [
            '>2400',
            '2400',
            '<2400',
            'Ninguna de las anteriores es correcta.'
        ]
      },
      {
        numb: 6,
        question:"El ancho de vía de metro ligero Madrid es:",
        answer: '1435mm',
        options: [
            '1445mm',
            '1415mm',
            '1425mm',
            '1435mm'
        ]
      },
      {
        numb: 7,
        question:"Si estoy en Puente de Vallecas y voy en dirección al origen de la línea (via II), ¿cual sera la siguiente estación?",
        answer: 'Pacífico',
        options: [
            'Nueva Numancia',
            'Pacífico',
            'Portazgo',
            'Antón Martín'
        ]
      },
      {
        numb: 8,
        question:"Cual de las siguientes estaciones tiene correspondencia con cercanías Renfe",
        answer: 'Aluche',
        options: [
            'Aluche',
            'Legazpi',
            'Avenida de América',
            'Moncloa'
        ]
      },
      {
        numb: 9,
        question:"¿En qué año se inauguró la línea 12 Metrosur?",
        answer: '2003',
        options: [
            '1999',
            '2003',
            '2006',
            '2010'
        ]
      },
      {
        numb: 10,
        question:"Línea 7",
        answer: 'Cartagena',
        options: [
            'Pinar del Rey',
            'Puerta de Toledo',
            'Colón',
            'Cartagena'
        ]
      },
      {
        numb: 11,
        question:"¿A qué línea pertenece la estación del Congosto?",
        answer: 'Línea 1',
        options: [
            'Línea 3',
            'Línea 1',
            'Línea 12',
            'Línea 10'
        ]
      },
      {
        numb: 12,
        question:"Acceso con perros en general, en los trayectos. ¿En qué coche de cada tren deben ir ubicados los perros?",
        answer: 'En el último coche y central ML1',
        options: [
            'En el último coche y central ML1',
            'Enseguida de la cabeza del tren',
            'En los coches de en medio',
            'No está especificado'
        ]
      },
      {
        numb:13,
        question:"Tarjeta multi ¿Cuantos títulos se pueden cargar en una tarjeta multi?",
        answer: 'Solo 3 títulos',
        options: [
            'Solo 1 titulo',
            'Solo 2 títulos',
            'No hay tope',
            'Solo 3 títulos'
        ]
      },
      {numb: 14,
        question:"¿Qué estación es considerada histórica?",
        answer: 'Goya',
        options: [
            'Embajadores',
            'Plaza Castilla',
            'Goya',
            'Carpetana'
        ]
      },
      {
        numb: 15,
        question:"¿Cuantos miembros de sindicatos hay en el consejo de gobierno de Metro Madrid S.A.?",
        answer: '3',
        options: [
            '2',
            '3',
            '4',
            '1'
        ]
      },
      {
        numb: 16,
        question:"¿Cuantos años de garantía tiene una Tarjeta multi y TTP's al estar defectuosa?",
        answer: '2 años',
        options: [
            '1 mes',
            '6 meses',
            '1 año',
            '2 años'
        ]
      },
      {
        numb: 17,
        question:"¿Con un título turístico se tiene que abonar el suplemento de aeropuerto?",
        answer: 'No',
        options: [
            'Ninguna de las anteriores',
            'Tienen que adquirir otra multi',
            'Si',
            'No'
        ]
      },
      {numb: 18,
        question:"¿Qué estación no tiene verificación a la salida?",
        answer: 'Sol',
        options: [
            'Rivas Futura',
            'Virgen del Cortijo',
            'Sol',
            'Colonia Jardin'
        ]
      },
      {
        numb: 19,
        question:"Estaciones línea 8",
        answer: '8',
        options: [
            '6',
            '12',
            '10',
            '8'
        ]
      },
      {
        numb: 20,
        question:"De las siguientes estaciones, ¿Cuál no tiene servicio de bibliometro?",
        answer: 'Avda. de América',
        options: [
            'Avda. de América',
            'Embajadores',
            'Legazpi',
            'Moncloa'
        ]
      },
      {
        numb: 21,
        question:"CONSORCIO. Si algún ayuntamiento desea retirarse del Consorcio:",
        answer: 'D. B y C son correctas',
        options: [
            'Deberá pedir solicitud únicamente al Gobierno de la Comunidad de Madrid',
            'Tendrán que haber transcurrido siete años desde la incorporación de dicho Ayuntamiento al Consorcio. La retirada tendrá que ser aprobada en acuerdo plenario.',
            'Tendrán que haber transcurrido siete años desde la incorporación de dicho Ayuntamiento al Consorcio.',
            'La retirada tendrá que ser aprobada en acuerdo plenario.'
        ]
      },
      {
        numb: 22,
        question:"Tarjeta Multi ¿Qué tipo de billete de 10 viajes, necesito cargar en mi tarjeta si tengo que hacer en varios días trayectos desde zona A a zona B2 y luego otro trayecto de zona B2 a zona ML 3 oeste?",
        answer: 'Billete combinado 10 viajes',
        options: [
            'Billete 10 viajes TFM',
            'Billete 10 viajes metroeste',
            'Billete 10 viajes Metrobús',
            'Billete combinado 10 viajes'
        ]
      },
      {
        numb: 23,
        question:"Estación entre Herrera Oria y Ventilla",
        answer: 'Barrio del Pilar',
        options: [
            'Barrio del Pilar',
            'Mirasierra',
            'Pio XII',
            'Las tres opciones son correctas'
        ]
      },
      {
        numb: 24,
        question:"Arroyofresno",
        answer: 'Línea 7',
        options: [
            'ML1',
            'Línea 7',
            'Línea 4',
            'Línea 5'
        ]
      },
      {
        numb: 25,
        question:"Número de esta estaciones accesibles en la línea 12",
        answer: '28',
        options: [
            '24',
            '10',
            '18',
            '28'
        ]
      },
      {
        numb: 26,
        question:"¿Cual de las siguientes estaciones tiene correspondencia con 3 líneas?",
        answer: 'Diego de León',
        options: [
            'Puerta de Arganda',
            'Casa de Campo',
            'Diego de León',
            'Legazpi'
        ]
      },
      {
        numb: 27,
        question:'Se identifican con una placa adosada en la parte inferior de la señal, en la que figura una letra "A" y un código alfanumérico',
        answer: 'Señales automaticas',
        options: [
            'Señales automaticas',
            'Señales mandadas',
            'Señales No rebasables',
            'Señales indicadoras posición de aguja'
        ]
      },
      {
        numb: 28,
        question:"¿Por cuántos representantes de la cámara oficial de comercio e industria estará integrado el comité técnico?",
        answer: '1',
        options: [
            '2',
            '3',
            'Ninguno',
            '1'
        ]
      },
      {
        numb:29,
        question:"¿Cual es el precio para la Zona T de 6 días del título Turístico?",
        answer: 'Ninguna es correcta',
        options: [
            '60.80€',
            '70.80€',
            '50.80€',
            'Ninguna es correcta'
        ]
      },
      {
        numb:30,
        question:"Disolución del CRT- por cuántos miembros debe ser presentada?",
        answer: '1/2',
        options: [
            '3/4',
            '1/2',
            '1/3',
            '2/3'
        ]
      },
      {
        numb: 31,
        question:"¿Cuáles de estas estaciones tienen Bibliometro?",
        answer: 'Aluche, Mar de Cristal, Legazpi y Chamartín',
        options: [
            'Legazpi, Chamartín, Aluche y Oporto',
            'Aluche, Mar de Cristal, Legazpi y Chamartín',
            'Delicias, Legazpi, Palos de la Frontera y Arganda del Rey',
            'Moncloa, Cruz del Rayo, Aluche y Chamartín'
        ]
      },
      {
        numb: 32,
        question:"¿Cuál es la duración de la tarjeta Multi?",
        answer: '10 años',
        options: [
            '2 años',
            '10 años',
            '5 años',
            'No tiene caducidad'
        ]
      },
      {
        numb: 33,
        question:"Estación entre Portazgo y Alto del Arenal",
        answer: 'Buenos Aires',
        options: [
            'La Gavia',
            'Pacífico',
            'Buenos Aires',
            'Nueva Numancia'
        ]
      },
      {
        numb: 34,
        question:"Ámbito territorial de actuación del consorcio",
        answer: 'Comunidad de Madrid',
        options: [
            'Ninguna es correcta',
            'Comunidad de Madrid',
            'Madrid Capital',
            'Comunidad Madrid y Castilla La Mancha'
        ]
      },
      {
        numb: 35,
        question:"¿Quienes conforman el Órgano de CRT?",
        answer: 'Consejo de Administración y Comite técnico',
        options: [
            '7 vocales representantes de la CM',
            'Director Gerente, presidente de Consejo y Consejo de Gobierno',
            'Consejo de Administración y Comite técnico',
            'Consejo de Gobierno'
        ]
      },
      {
        numb: 36,
        question:"El PCC está formado por:",
        answer: 'Puesto de mando de trenes, despacho de cargas, puesto de control de estaciones y puesto de control de seguridad',
        options: [
            'Puesto control de seguridad, puesto mando de trenes, despacho de estaciones y puesto de control de cargas',
            'Puesto de mando de trenes, despacho de cargas, puesto de control de estaciones y puesto de control de seguridad',
            'Puesto mando de estaciones, puesto control de trenes, despacho de cargas y puesto de control de seguridad.',
            'Comité de seguridad, gerente del CTC, control de estaciones y mando de trenes.'
        ]
      },
      {
        numb: 37,
        question:"Es la recorrida por los trenes alejandose del origen convencional de la línea establecido. Tendrá la misma numeración la prolongación de esta en los sacos de maniobras. En particular para líneas circulares será la interior.",
        answer: 'Vía 1',
        options: [
            'Punto de origen',
            'Vía principal',
            'Vía 2',
            'Vía 1'
        ]
      },
      {
        numb: 38,
        question:"¿Cuales son los tipos de indicadores luminosos?",
        answer: 'Portátiles y fijos',
        options: [
            'Portátiles y fijos',
            'Repetidores y luminosos',
            'No rebasables y repetidores',
            'Móviles y fijos'
        ]
      },
      {
        numb: 39,
        question:"El Decreto 49/1987 del 8 de Mayo está compuesto por:",
        answer: '36 artículos, 1 disposición adicional, dos disposiciones finales y una derogatoria.',
        options: [
            '36 artículos, dos disposiciones finales, una disposición adicional y 2 derogatorias.',
            '36 artículos, 1 disposición adicional, dos disposiciones finales y una derogatoria.',
            '3 capítulos, dos disposiciones derogatorias, una disposición adicional y tres finales.',
            '39 artículos, 2disposiciones adicionales, una final y una derogatoria.'
        ]
      },
      {
        numb: 40,
        question:"Se considera viajero desprovisto de título de transporte válido a quienes:",
        answer: 'Todas las opciones son correctas.',
        options: [
            'Quien no muestra título alguno',
            'Quien nuestra título insuficiente o no coincidente con el trayecto.',
            'Quien no lo tenga debidamente validado y cancelado.',
            'Todas las opciones son correctas.'
        ]
      },
      {
        numb: 41,
        question:"En hora punta. Cuantos trenes circulan a las vez?",
        answer: '247',
        options: [
            '247',
            '200',
            '221',
            '233'
        ]
      },
      {
        numb: 42,
        question:"¿En qué artículo y bajo qué ley se regula el acceso con perros de asistencia?",
        answer: 'Art. 2 ter/ Ley 2/2015 10 de marzo',
        options: [
            'Art. 2 ter/ Ley 2/2015 de 11 marzo',
            'Art. 2 ter/ Ley 3/2015 de 11 marzo',
            'Art. 3 ter/ Ley 2/2015 10 de marzo',
            'Art. 2 ter/ Ley 2/2015 10 de marzo'
        ]
      },
      {
        numb: 43,
        question:"¿Cuál de las siguientes es la más correcta si tenemos en cuenta el art 4.7.1?",
        answer: 'Es degradada de la explotación la circulación de un servicio de lanzadera por una vía sin señales',
        options: [
            'Son degradadas aquella opción que por avería, incidencias o disconformidad modifican la circulación',
            'Es degradada de la explotación la circulación de un servicio de lanzadera por una vía sin señales',
            'Es degradadas de la explotación la circulación de un servicio de lanzadera por dos vías sin señales',
            'Son situaciones degradadas las que particular y únicamente las que producen averías o degradación'
        ]
      },
      {
        numb: 44,
        question:"Como se constituye el Consorcio",
        answer: 'Organismo autónomo',
        options: [
            'Agencia estatal',
            'Entidad pública empresarial',
            'Organismo autónomo',
            'Entidad privada empresarial'
        ]
      },
      {
        numb: 45,
        question:"Cual es el precio del billete sencilloTFM",
        answer: '2,00€',
        options: [
            '1,50€',
            '1,30€',
            '1,00€',
            '2,00€'
        ]
      },
      {
        numb: 46,
        question:"Zona tarifaria línea 11",
        answer: 'A-B1',
        options: [
            'A-B1-B2-B3',
            'A',
            'A-B1',
            'B1-B2'
        ]
      },
      {
        numb: 47,
        question:"¿En qué estación tenemos oficina de objetos perdidos?",
        answer: 'Plaza de Castilla',
        options: [
            'Plaza de Castilla',
            'Chamartín',
            'Todas son correctas',
            'Nuevos ministerios'
        ]
      },
      {
        numb: 48,
        question:"¿En qué estación podemos gestionar la tarjeta anual?",
        answer: 'Aeropuerto T4',
        options: [
            'Plaza España',
            'Santiago Bernabéu',
            'Aeropuerto T4',
            'Menéndez Pelayo'
        ]
      },
      {
        numb: 49,
        question:"Lineas que tienen correspondencia con Cuatro Caminos",
        answer: '1, 2 y 6',
        options: [
            '1, 4 y 6',
            '2, 4 y 6',
            '1, 2 y 4',
            '1, 2 y 6'
        ]
      },
      {
        numb: 50,
        question:"Correspondencia de Sainz de Baranda",
        answer: '6 y 9',
        options: [
            'No tiene correspondencia',
            '6 y 9',
            '4 y 6',
            '4 y 9'
        ]
      },
      {
        numb: 51,
        question:"¿Cuáles son las únicas líneas, que no tienen correspondencia con Cercanías Renfe?",
        answer: 'L4 y L11',
        options: [
            'L4 y L11',
            'ML1 y ML2',
            'L2 y L7',
            'L5 y L4'
        ]
      },
      {
        numb: 52,
        question:"En la línea ML1, cuántas estaciones son subterráneas?",
        answer: '5',
        options: [
            'Ninguna es correcta',
            '6',
            '4',
            '5'
        ]
      },
      {
        numb: 53,
        question:"Cual de las siguientes estaciones son sencillas",
        answer: 'Tres Olivos',
        options: [
            'Colombia',
            'Tres Olivos',
            'Oporto',
            'Las tablas'
        ]
      },
      {
        numb: 54,
        question:"En el yacimiento paleontológico de la estación de Carpetana, de que época eran los restos encontrados?",
        answer: 'Mioceno',
        options: [
            'Paleógeno',
            'Cuaternario',
            'Plioceno',
            'Mioceno'
        ]
      },
      {
        numb: 55,
        question:"Cual de las siguientes estaciones tiene parking disuasorio de pago",
        answer: 'Ciudad Universitaria',
        options: [
            'Cuatro vientos',
            'Ciudad Universitaria',
            'Arganda del Rey',
            'Villaverde Alto'
        ]
      },
      {
        numb: 56,
        question:"¿Cuáles son las estaciones qué no hay que validar en la ML1?",
        answer: 'Antonio Saura, Álvarez de Villaamil y Palas de Rey',
        options: [
            'Palas de Rey, Antonio Saura y Virgen del Cortijo',
            'Antonio Saura, Álvarez de Villaamil y Virgen del Cortijo',
            'Palas de Rey, Fuente de la Mora y Antonio Saura',
            'Antonio Saura, Álvarez de Villaamil y Palas de Rey'
        ]
      },
      {
        numb: 57,
        question:"¿Hasta qué año se ha ampliado el plan de accesibilidad de Metro de Madrid?",
        answer: '2028',
        options: [
            '2028',
            '2025',
            '2026',
            '2030'
        ]
      },
      {
        numb: 58,
        question:"¿En qué año nació el COMMIT?",
        answer: '2006',
        options: [
            '2001',
            '2003',
            '2006',
            '2000'
        ]
      },
      {
        numb: 59,
        question:"Estacion con más correspondencias con otras líneas",
        answer: 'Avenida de America',
        options: [
            'Avenida de America',
            'Sol',
            'Nuevos Ministerios',
            'Diego de Leon'
        ]
      },
      {
        numb: 60,
        question:"¿Cuál es la línea con más estaciones de parking disuasorio gratuito?",
        answer: 'Línea 12',
        options: [
            'Línea 6',
            'Línea 5',
            'Línea 9',
            'Línea 12'
        ]
      },
      {
        numb: 61,
        question:"¿Cuántas líneas tienen la cabecera de inicio o final de línea en zonas tarifarias distintas a la Zona A?",
        answer: 'Líneas 7,9,10,11,12',
        options: [
            'Línea 1,7,9',
            'Líneas 7,9,10,11,12',
            'Línea 12',
            'Línea 10,11,12'
        ]
      },
      {
        numb: 62,
        question:"¿Con cuál de las siguientes opciones sí es compatible el billete sencillo combinado?",
        answer: 'Ambas opciones son válidas',
        options: [
            'Ninguna de las anteriores',
            'Abono Zona C1',
            'Abono Zona B3',
            'Ambas opciones son válidas'
        ]
      },
      {
        numb: 63,
        question:"Estoy en Torre Arias y voy a Ventas. ¿Cuál serán mis dos próximas paradas?",
        answer: 'Suanzes y Ciudad Lineal',
        options: [
            'Ciudad Lineal y Pueblo Nuevo',
            'Suanzes y Ciudad Lineal',
            'El Capricho y Canillejas',
            'Pueblo Nuevo y Quintana'
        ]
      },
      {
        numb: 64,
        question:"¿Quién era presidente/a de la Comunidad de Madrid cuando se creo la ley del Consorcio Regional de transportes?",
        answer: 'Joaquín Legina',
        options: [
            'Cristina Cifuentes',
            'Esperanza Aguirre',
            'Alberto Ruiz Gallardón',
            'Joaquín Legina'
        ]
      },
      {
        numb: 65,
        question:"La circulación de vehículos auxiliares tanto en perido de servicio como fuera de el, se realizará normalmente en el modo de conducción...",
        answer: 'Marcha a la vista',
        options: [
            'Ninguna es correcta',
            'Marcha a la vista',
            'Marcha a la vista en vías secundarias y marcha a paso de hombre en vías principales',
            'Marcha a paso de hombre en vías secundarias y a la vista en vías principales'
        ]
      },
      {
        numb: 66,
        question:"NIC. Si un conductor se encuentra detenido sin tracción en una interestación y se enciende y apaga el alumbrado del túnel 3 o 4 veces de forma consecutiva y después se queda encendido...",
        answer: 'Deberá abatir los pantógrafos del tren',
        options: [
            'Ninguna es correcta',
            'Deberá abatir los pantógrafos del tren',
            'Deberá comunicar al PCC de la avería en la catenaria.',
            'Deberá empezar a circular en conducción marcha a la vista'
        ]
      },
      {
        numb: 67,
        question:"NIC. Responsabilidad condición trenes. El conductor del tren deberá delegar la conducción del tren en los siguientes trabajadores:",
        answer: 'Todas son correctas',
        options: [
            'Instructores en funciones de formación autorizados por el PCC',
            'Mandos de línea',
            'Otros de rango superior.',
            'Todas son correctas'
        ]
      },
      {
        numb: 68,
        question:"Periodos de servicio/fuera de servicio. Sin restricción mayor ni intervención del PCC. La circulación de los vehículos auxiliares se realizará siempre en conducción...",
        answer: 'Marcha a la vista',
        options: [
            'M+ATP',
            'ATO',
            'Llave especial',
            'Marcha a la vista'
        ]
      },
      {
        numb: 69,
        question:"¿Quién crea el número del tren?",
        answer: 'El CTC',
        options: [
            'Ninguna es correcta',
            'El CTC',
            'El Responsble de Linea',
            'El PCC'
        ]
      },
      {
        numb: 70,
        question:"¿Cuál es la dotación personal qué debe llevar un conductor?",
        answer: 'Llaves para acceso a la cabina',
        options: [
            'Ninguna es correcta',
            'Llaves para acceso a la cabina',
            'Prenda alta visibilidad',
            'Linterna Portátil'
        ]
      },
      {
        numb: 71,
        question:"Son algunos tipos de señalizacion en la circulación de trenes",
        answer: 'Todas las anteriores',
        options: [
            'Señales gestuales de emergencia',
            'Todas las anteriores',
            'Indicadores luminosos',
            'Señales acústicas'
        ]
      },
      {
        numb: 72,
        question:"¿A quien debe comunicar un trabajador que detecte o tenga conocimiento de alguna avería o irregularidad en la señalización o aparatos de vía?",
        answer: 'PCC o Responsable de operativo',
        options: [
            'Solo al Responsable de operativo',
            'PCC o Responsable de operativo',
            'Solo a PCC',
            'CTC'
        ]
      },
      {
        numb: 73,
        question:"Son señales semafóricas luminosas instaladas de forma permanente adosadas a una pared o una columna, colocadas sobre un poste vertical o directamente sobre el suelo y que están compuestas por uno o varios focos y por una placa",
        answer: 'Señales fijas ferroviarias',
        options: [
            'Señales fijas ferroviarias',
            'Señalea fijas de tracción eléctrica',
            'Indicadores luminosos',
            'Señalea gestuales de emergencia'
        ]
      },
      {
        numb: 74,
        question:"Son señales que abren o cierran condicionadas por la situación de los trenes o por el estado de la siguiente señal",
        answer: 'Señales automáticas',
        options: [
            'Señales no rebasables',
            'Señales repetidoras',
            'Señales automáticas',
            'Señales mandadas'
        ]
      },
      {
        numb: 75,
        question:"¿En qué estación hay Oficina de Gestión de Tarjeta de Transporte?",
        answer: 'Atocha',
        options: [
            'Almendrales',
            'Abrantes',
            'Aluche',
            'Atocha'
        ]
      },
      {
        numb: 76,
        question:"¿Quién asigna el número de matrícula de tren y es el responsable de modificarlo, si fuese el caso?",
        answer: 'PCC',
        options: [
            'Ninguna es correctas',
            'PCC',
            'PCC y CTC',
            'CTC'
        ]
      },
      {
        numb: 77,
        question:"¿Cuál de éstas líneas no tiene Oficina de Gestión de TTP?",
        answer: 'Línea 5 y 11',
        options: [
            'Línea 5',
            'Línea 2',
            'Línea 11',
            'Línea 5 y 11'
        ]
      },
      {
        numb: 78,
        question:"¿Qué se debe de comprobar en los trenes antes de su salida a la línea?",
        answer: 'Sistema de frenado',
        options: [
            'Todas las anteriores',
            'Sistema de frenado',
            'Prenda de señalización',
            'Tener linterna portatil'
        ]
      },
      {
        numb: 79,
        question:"¿Quién es responsable del cumplimiento de NIC ?",
        answer: 'El PCC',
        options: [
            'Dirección de Metro de Madrid',
            'El CTC',
            'los responsables de líneas y estaciones',
            'El PCC'
        ]
      },
      {
        numb: 80,
        question:"¿Sobre quien recae la responsabilidad en la conducción del tren, y asume todos los efectos, las funciones y responsabilidades del conductor?",
        answer: 'El conductor del mismo',
        options: [
            'Responsable de operativo',
            'El conductor del mismo',
            'PCC',
            'CTC'
        ]
      },
      {
        numb: 81,
        question:"¿En condiciones normales de explotación sobre el mando de los enclavamientos de señales, quien tiene el control sobre estos?",
        answer: 'El PCC por medio del CTC',
        options: [
            'Ninguna es correcta',
            'Solo CTC',
            'El responsable de operativo',
            'El PCC por medio del CTC'
        ]
      },
      {
        numb: 82,
        question:"Quién está obligado a cumplir y hacer cumplir a sus agentes todo lo previsto en el reglamento de viajeros?",
        answer: 'Metro de Madrid, S.A',
        options: [
            'Ninguna es correcta',
            'Metro de Madrid, S.A',
            'Consorcio Regional de Transportes',
            'La Comunidad de Madrid'
        ]
      },
      {
        numb: 83,
        question:"Una vía banalizada es...",
        answer: 'Una vía provista de señalizacion y enclavamiento que permite la circulación en uno u otro sentido indistintamente',
        options: [
            'Ninguna es correcta',
            'Una vía provista de señalizacion y enclavamiento que permite la circulación en uno u otro sentido indistintamente',
            'Una vía con dos carriles para poder hacer maniobras.',
            'Una vía secundaria señalizada y delimitada.'
        ]
      },
      {
        numb: 84,
        question:"Cuántas estaciones de la línea 5 carecen de ascensores y escaleras mecánicas?",
        answer: '11',
        options: [
            '7',
            '5',
            '9',
            '11'
        ]
      },
      {
        numb: 85,
        question:"Por las vías principales en circunstancias normales de explotación queda prohibida la circulación a contravía, salvo en en ciertos casos como...Marca la correcta.",
        answer: 'La circulación con señales en las vías banalizadas',
        options: [
            'Prácticas de conducción',
            'La circulación con señales en las vías banalizadas',
            'Abandono de la cabina de conducción',
            'La circulación por vías secundarias'
        ]
      },
      {
        numb: 86,
        question:"La competencia para incoar y resolver los procedimientos sancionadores previstos en el reglamento de viajeros pertenece a...",
        answer: 'Director gerente del consorcio regional de transportes',
        options: [
            'Presidente de la Comunidad de Madrid',
            'Director gerente del consorcio regional de transportes',
            'Consejo de administración del consorcio regional de transportes',
            'Presidente del Consejo de administración del consorcio regional de transportes'
        ]
      },
      {
        numb: 87,
        question:'¿Cuál de las siguientes palabras corresponde a la siguiente definición: "zona de la estación a lo largo de la vía, de anchura variable y con la altura conveniente para facilitar el acceso a los trenes"?',
        answer: 'Andén',
        options: [
            'Interestación',
            'Andén',
            'Área de seguridad',
            'Depósito'
        ]
      },
      {
        numb: 88,
        question:"Ante la detección de una fuente de luz ajena al sistema de señalización convencional, que modo de conducción se debe utilizar si el tren circula en ATO.",
        answer: 'M+ATP',
        options: [
            'Llave especial',
            'M+20',
            'ATO',
            'M+ATP'
        ]
      },
      {
        numb: 89,
        question:"¿En qué línea se encuentra la estación de Villa de Vallecas?",
        answer: 'Línea 1',
        options: [
            'Línea 3',
            'Línea 4',
            'Línea 2',
            'Línea 1'
        ]
      },
      {
        numb: 90,
        question:"¿Cuál de las siguientes zonas tarifarias no está incluida en la red de Metro de Madrid?",
        answer: 'Zona E2',
        options: [
            'Zona E2',
            'Zona B1',
            'Zona A',
            'Zona B2'
        ]
      },
      {
        numb: 91,
        question:"¿Cuál de las siguientes estaciones sí cuenta con ascensores?",
        answer: 'Plaza de España',
        options: [
            'República Argentina',
            "O'Donnell",
            'Plaza de España',
            'Menéndez Pelayo'
        ]
      },
      {
        numb: 92,
        question:"Quiero viajar desde la estación de la Fortuna hasta la estación de Alonso Martínez. Si en mi tarjeta tengo un Abono Zona A y un billete Sencillo Metrosur, ¿dónde se valida el Abono Zona A?",
        answer: 'El billete Sencillo Metrosur se valida a la entrada en la Fortuna, mientras que el Abono Zona A hay que validarlo en las canceladoras.',
        options: [
            'Ninguna es correcta',
            'El billete Sencillo Metrosur se valida a la entrada en la Fortuna, mientras que el Abono Zona A hay que validarlo en las canceladoras.',
            'Los dos se validan en los tornos de salida',
            'El Abono Zona A se valida a la entrada en la Fortuna, mientras que el billete Sencillo Metrosur hay que validarlo en las canceladoras.'
        ]
      },
      {
        numb: 93,
        question:"Según el Reglamento de Viajeros en relación al acceso con perros, ¿cuál es la limitación horaria los meses de julio y agosto?",
        answer: 'No hay limitación horaria',
        options: [
            'Todo el día excepto de 18:00 a 20:00',
            'Todo el día excepto de 14:00 a 16:00',
            'Todo el día excepto de 7:30 a 9:30',
            'No hay limitación horaria'
        ]
      },
      {
        numb: 94,
        question:"¿Con cuántas líneas de metro tiene correspondencia la línea de Metro Ligero 1?",
        answer: '3',
        options: [
            '1',
            '5',
            '2',
            '3'
        ]
      },
      {
        numb: 95,
        question:"¿Cuál es la definición de vías secundarias?",
        answer: 'Son todas aquellas que no son principales',
        options: [
            'Aquellas destinadas al estacionamiento de trenes',
            'Son todas aquellas que no son principales',
            'Aquellas situadas en los depósitos y cocheras',
            'Ninguna de las anteriores'
        ]
      },
      {
        numb: 96,
        question:"Según el Reglamento de Viajeros en relación al acceso con bicicletas...",
        answer: 'El máximo son 4 bicicletas por tren',
        options: [
            'El máximo son 4 bicicletas por tren',
            'Mientras las condiciones del servicio lo permitan, no existe un número máximo de bicicletas por tren',
            'El máximo es de 2 bicicletas por cada coche del tren',
            'El máximo son 2 bicicletas por tren'
        ]
      },
      {
        numb: 97,
        question:"Dentro de las instalaciones de Metro de Madrid, ¿cuál de las siguientes se encuentra en mayor número?",
        answer: 'Cámaras de seguridad',
        options: [
            'Máquinas de venta',
            'Cámaras de seguridad',
            'Escaleras mecánicas',
            'Ascensores'
        ]
      },
      {
        numb: 98,
        question:"La Tarjeta de Transporte Público Personal Infantil tiene un precio de...",
        answer: 'Gratuita',
        options: [
            '20€',
            '40€',
            '60€',
            'Gratuita'
        ]
      },
      {
        numb: 99,
        question:"¿Cuál de los siguientes órganos no es un órgano del Consorcio Regional de Transporte de la Comunidad de Madrid?",
        answer: 'Comisión de incidencias',
        options: [
            'Ninguno de los anteriores',
            'Comité técnico',
            'Comisión de incidencias',
            'Consejo de administración'
        ]
      },
      {
        numb: 100,
        question:"¿Hasta qué zona abarca el Abono Tercera Edad?",
        answer: 'Zona C2',
        options: [
            'Zona E2',
            'Zona A',
            'Zona B3',
            'Zona C2'
        ]
      },

];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(30); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    // que_tag= questions[index].sort(()=> Math.random()-.5);

    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct options = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Enhorabuena! 🎉, has obtenido <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Genial 😎, obtuvistes <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Lo siento 😐, solo obtuviste <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 45);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}

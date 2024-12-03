export default {
  global: {
    componenteFormativo: 'Plan de producción y normatividad vigente',
    descripcionCurso:
      'La bioseguridad en acuicultura es fundamental para evitar la propagación de enfermedades que afectan la producción y calidad del producto. Las normativas y protocolos buscan proteger el medio ambiente, la salud humana y los organismos cultivados. La prevención, identificación y control de riesgos son esenciales para garantizar la sostenibilidad y rentabilidad en las explotaciones acuícolas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Bioseguridad acuícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La necesidad de la bioseguridad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Origen de las enfermedades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Posibles causas de las enfermedades',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de intervención en caso de aparición de enfermedades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normas vigentes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72340050_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Bioseguridad acuícola',
      referencia:
        'TvAgro. (2019). <em>La Bioseguridad en las Especies Acuícolas - TvAgro por Juan Gonzalo Angel</em>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fi1OjszXMK0',
    },
    {
      tema: 'La necesidad de la bioseguridad',
      referencia:
        'TvAgro. (2021). <em>Como es un proyecto acuícola bioseguro y rentable - TvAgro por Juan Gonzalo Angel Restrepo</em>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6lgoLJgwz5A',
    },
    {
      tema: 'Origen de las enfermedades',
      referencia:
        'La Finca de Hoy. (2021). <em>Conozca las cinco enfermedades más comunes en la explotación de tilapia - La Finca de Hoy</em>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iEbi4wX7pwo',
    },
    {
      tema: 'Posibles causas de las enfermedades',
      referencia:
        'Yanong, R. P. E., Francis-Floyd, R., y Petty, B. D. (2021). <em>Enfermedades infecciosas en acuicultura</em>.',
      tipo: 'Documento',
      link:
        'https://www.msdvetmanual.com/es/animales-ex%C3%B3ticos-y-de-laboratorio/acuicultura/enfermedades-infecciosas-en-acuicultura',
    },
    {
      tema: 'Métodos de intervención en caso de aparición de enfermedades',
      referencia:
        'Ministerio de Agricultura, Pesca y Alimentación. (s.f.). <em>Enfermedades víricas de los peces</em>.',
      tipo: 'Página web',
      link:
        'https://www.mapa.gob.es/es/ganaderia/temas/laboratorios-sanidad-genetica/areas-actividad/diagnostico/enfermedades-viricas-peces.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Acuicultura',
      significado:
        'actividad dedicada al cultivo de organismos acuáticos como peces, moluscos y crustáceos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas destinadas a prevenir la introducción y propagación de patógenos en los cultivos.',
    },
    {
      termino: 'Cuarentena',
      significado:
        'proceso de aislamiento preventivo de organismos antes de ingresarlos a un ciclo productivo.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'característica que asegura que los productos sean seguros para el consumo humano.',
    },
    {
      termino: 'Normatividad',
      significado:
        'conjunto de leyes y reglamentos que regulan la producción acuícola y garantizan la bioseguridad.',
    },
    {
      termino: 'Patógenos',
      significado:
        'microorganismos como virus, bacterias, hongos y parásitos que causan enfermedades.',
    },
    {
      termino: 'Registro de campo',
      significado:
        'documento donde se registran las actividades diarias y eventos especiales en las explotaciones.',
    },
    {
      termino: 'Renta presuntiva',
      significado:
        'método de tributación basado en una estimación mínima de renta que el contribuyente debe declarar.',
    },
    {
      termino: 'Resolución 2424 de 2009',
      significado:
        'normativa que regula la acuicultura con especies exóticas en Colombia.',
    },
    {
      termino: 'Seguridad laboral',
      significado:
        'conjunto de medidas y protocolos destinados a proteger la salud y seguridad de los trabajadores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2019). <em>Ley 2010 del 27 de diciembre de 2019: Por medio de la cual se adoptan normas para la promoción del crecimiento económico, el empleo, la inversión, el fortalecimiento de las finanzas públicas y la progresividad, equidad y eficiencia del sistema tributario, de acuerdo con los objetivos que sobre la materia impulsaron la Ley 1943 de 2018 y se dictan otras disposiciones</em>.',
      link: '',
    },
    {
      referencia:
        'Departamento de Agricultura de Estados Unidos, Programa Nacional de Acreditación Veterinaria. (2011). <em>Módulo 15: Bioseguridad y prevención de enfermedades en la acuicultura</em>.',
      link:
        'http://www.cfsph.iastate.edu/pdf-library/Acreditacion-Veterinaria/NVAP-Mod-15-AQBIO.pdf',
    },
    {
      referencia: 'FAO. (2011). <em>Manual básico de sanidad piscícola</em>.',
      link: 'http://www.fao.org/3/a-as830s.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Desarrollo Rural (INCODER). (2009). <em>Resolución 2424</em>.',
      link: 'http://faolex.fao.org/docs/pdf/col151485.pdf',
    },
    {
      referencia: 'Manual básico de sanidad piscícola. (s.f.).',
      link: 'http://faolex.fao.org/docs/pdf/col151485.pdf',
    },
    {
      referencia:
        'Ministerio de Trabajo y Asuntos Sociales de España. (s.f.). <em>NTP 623: Prevención de riesgos laborales en acuicultura</em>.',
      link:
        'http://www.insht.es/InshtWeb/Contenidos/Documentacion/FichasTecnicas/NTP/Ficheros/601a700/ntp_623.pdf',
    },
    {
      referencia: 'Real Academia Española. (s.f.). <em>Diccionario</em>.',
      link: 'http://dle.rae.es/?id=SpXqUn9',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Frank Esquivel Acosta',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

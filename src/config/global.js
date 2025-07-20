export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Ética y deontología en la administración de empresas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Relación del administrador con el cliente y deberes profesionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Principios éticos que rigen la relación entre administrador y cliente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Deberes profesionales fundamentales en la administración de empresas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La confianza como pilar ético en la gestión de clientes',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Honorarios, relaciones con autoridades y terceros en el ejercicio administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Criterios éticos en la fijación y aceptación de honorarios profesionales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Relaciones éticas del administrador con autoridades públicas y entes de control',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Principios éticos en las relaciones con proveedores, aliados y terceros externos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agudelo Ramírez, J. A. (2020). La ética en el campo laboral: una mirada desde el administrador de empresas. Katharsis, 30, 1-19.',
      link:
        'https://bibliotecadigital.iue.edu.co/bitstream/20.500.12717/1972/1/515-Texto%20del%20art%c3%adculo-5036-1-10-20200913.pdf',
    },
    {
      referencia:
        'Bour, E. (2012). Responsabilidad social de la empresa análisis del concepto. Estudios económicos, XXIX(59).',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5318733',
    },
    {
      referencia:
        'Bautista Penna, R., & Pérez Sisa, F. G. (2021). Gestión estratégica del riesgo y su importancia en las buenas prácticas empresariales. Eruditus, 2(1), 9–24.',
      link: 'https://revista.uisrael.edu.ec/index.php/re/article/view/383',
    },
    {
      referencia:
        'Álvarez Burgos, M. I., Arévalo Lizarazo, G. A. & Rosas Castañeda, N. C. (s.f.). Ética para administradores de empresas desde la formación integral en la educación superior.',
      link:
        'https://www.academia.edu/35703260/%C3%89TICA_PARA_ADMINISTRADORES_DE_EMPRESAS_DESDE_LA_FORMACI%C3%93N_INTEGRAL_EN_LA_EDUCACI%C3%93N_SUPERIOR',
    },
    {
      referencia:
        'Colegio Odontológico del Perú. (2009). Código de ética y deontología del Colegio Odontológico del Perú.',
      link:
        'http://vin.unitru.edu.pe/images/etica/regla/codigo/cell_odontologo.pdf',
    },
    {
      referencia:
        'Colegio Profesional de Licenciados en Administración de Mendoza. (2010). Código de ética profesional del Licenciado en Administración – Mendoza, Argentina.',
      link:
        'https://www.uda.edu.ar/images/fcej/CodigosEtica/Cdigo_de_etica_del_Administrador.pdf',
    },
    {
      referencia:
        'Cerón Jiménez, D. Y. (2014). LA RELACIÓN DE LA ÉTICA PROFESIONAL CON LA ADMINISTRACIÓN DE EMPRESAS. [Trabajo de grado, Universidad Militar Nueva Granada]. Repositorio Institucional UNIMILITAR.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/13068/RELACION%20ETICA%20PROFESIONAL%20CON%20EL%20ADMON%20DE%20EMPRESAS.pdf?isAllowed=y&sequence=1',
    },
    {
      referencia:
        'Knight Therapeutics Inc. (s.f.). Código empresarial Conducta y Ética. Knight.',
      link:
        'https://knighttx.com/code-of-conduct/Codigo-de-Conducta-y-Etica-Empresarial.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía profesional',
      significado:
        'Capacidad del administrador para actuar con independencia ética en sus decisiones, sin influencia indebida de intereses externos.',
    },
    {
      termino: 'Confianza',
      significado:
        'Base de toda relación ética entre el administrador y sus clientes o terceros, sustentada en la integridad, coherencia y transparencia.',
    },
    {
      termino: 'Conflicto de intereses',
      significado:
        'Situación en la que los intereses personales del profesional pueden afectar su imparcialidad y objetividad en la toma de decisiones.',
    },
    {
      termino: 'Deber profesional',
      significado:
        'Obligación ética de actuar con integridad, responsabilidad, justicia y respeto hacia todos los actores organizacionales.',
    },
    {
      termino: 'Deliberación ética',
      significado:
        'Proceso reflexivo en el que se analizan alternativas y consecuencias desde principios éticos para resolver un dilema.',
    },
    {
      termino: 'Dilema moral',
      significado:
        'Situación en la que dos valores o principios válidos entran en conflicto, y se debe tomar una decisión entre ellos.',
    },
    {
      termino: 'Equidad',
      significado:
        'Principio ético que exige dar a cada persona lo que le corresponde, según sus circunstancias y necesidades.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Conjunto de procesos para identificar, evaluar y mitigar eventos que puedan afectar negativamente a la organización, bajo criterios éticos.',
    },
    {
      termino: 'Imparcialidad',
      significado:
        'Capacidad del administrador para actuar sin favoritismos ni discriminación, considerando únicamente criterios justos y objetivos.',
    },
    {
      termino: 'Integridad',
      significado:
        'Coherencia entre los principios éticos del profesional y sus decisiones en la práctica administrativa.',
    },
    {
      termino: 'Responsabilidad social',
      significado:
        'Compromiso del administrador de generar impactos positivos en la sociedad mediante su gestión organizacional.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Actitud de comunicar de manera clara, completa y veraz la información relevante en el ejercicio profesional.',
    },
    {
      termino: 'Valor institucional',
      significado:
        'Principio ético que orienta la cultura organizacional y la toma de decisiones con base en los compromisos y principios declarados por la empresa.',
    },
  ],
}

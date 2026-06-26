import { signal } from '@angular/core';
import { News, Category, Source } from '../models/news.model';

export const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: 'Nacional', url: 'nacional', state: 'A' },
  { id: 2, name: 'Economía', url: 'economia', state: 'A' },
  { id: 3, name: 'Internacional', url: 'internacional', state: 'A' },
  { id: 4, name: 'Seguridad', url: 'seguridad', state: 'A' },
  { id: 5, name: 'Sociedad', url: 'sociedad', state: 'A' },
  { id: 6, name: 'Cultura', url: 'cultura', state: 'A' },
  { id: 7, name: 'Tecnología', url: 'tecnologia', state: 'A' },
  { id: 8, name: 'Deportes', url: 'deportes', state: 'A' },
  { id: 9, name: 'Salud', url: 'salud', state: 'A' },
  { id: 10, name: 'Interesante', url: 'interesante', state: 'A' },
];

export const MOCK_SOURCES: Source[] = [
  { id: 1, name: 'Jornada', url: 'https://jornada.com.bo/', state: 'A' },
  { id: 2, name: 'Bolivian Daily', url: 'https://boliviandaily.org/', state: 'A' },
];

export const MOCK_NEWS: News[] = [
  {
    id: 1,
    user_id: 1,
    category_id: 1,
    source_id: 2,
    url: 'bolivia-anuncia-plan-inversion-historico-litio',
    pretitle: 'RECURSOS EVAPORÍTICOS',
    title: 'Bolivia anuncia plan de inversión histórico de $2.500 millones para la industrialización del litio',
    path: 'nacional/bolivia-anuncia-plan-inversion-historico-litio',
    subtitle: 'El gobierno nacional firma acuerdos clave para la construcción de plantas industriales de extracción directa en los salares de Uyuni y Coipasa.',
    enter: 'En un movimiento estratégico para consolidar su posición en el mercado global de la transición energética, el Estado boliviano ha concretado una serie de alianzas estratégicas para acelerar la explotación soberana de sus reservas de litio.',
    body: `
      <p><strong>La Paz.</strong> El Gobierno de Bolivia ha formalizado hoy el anuncio de un ambicioso programa de inversiones destinadas a consolidar la cadena de valor de los recursos evaporíticos. Con un fondo estimado de 2.500 millones de dólares, el país andino busca acelerar la construcción de complejos industriales basados en tecnología de Extracción Directa de Litio (EDL) en los salares del departamento de Potosí y Oruro.</p>
      
      <p>Durante la ceremonia de firma efectuada en la Casa Grande del Pueblo, el primer mandatario del Estado destacó que este plan respeta de forma irrestricta la soberanía boliviana sobre sus recursos naturales, asegurando que Yacimientos de Litio Bolivianos (YLB) mantendrá el control operativo y comercial de toda la cadena.</p>
      
      <h2>Nuevas plantas industriales en Uyuni y Coipasa</h2>
      <p>Los acuerdos proyectan la edificación de al menos tres complejos industriales, cada uno con capacidad para producir hasta 25.000 toneladas métricas de carbonato de litio grado batería al año. La tecnología EDL seleccionada permite disminuir de forma drástica los tiempos de evaporación que tradicionalmente tardaban meses mediante piscinas convencionales, reduciendo además la huella hídrica en las regiones aledañas.</p>
      
      <blockquote>
        "Bolivia entra con paso firme a la era industrial del litio, no solo exportando materia prima, sino participando activamente en los eslabones de mayor valor agregado tecnológicos del mercado internacional", declaró el Ministro de Hidrocarburos y Energías.
      </blockquote>

      <h2>Impacto socioeconómico y ambiental</h2>
      <p>La implementación de estas plantas promete generar más de 5.000 empleos directos e indirectos en las regiones beneficiadas. Representantes de las comunidades locales han participado en las mesas técnicas previas para garantizar el cumplimiento de las licencias ambientales y el retorno social directo en obras de infraestructura básica, salud y educación.</p>
      
      <p>Los análisis preliminares de mercado estiman que las exportaciones de carbonato de litio podrían incrementarse hasta un 150% en los próximos cuatro años una vez que las plantas alcancen su capacidad nominal de producción.</p>
    `,
    author: 'Alejandro Valdivia',
    publication_date: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    state: 'A',
    category: MOCK_CATEGORIES[0],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 101,
        news_id: 1,
        description: 'Complejo piloto de Yacimientos de Litio Bolivianos en el Salar de Uyuni.',
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 2,
    user_id: 1,
    category_id: 2,
    source_id: 1,
    url: 'exportaciones-litio-suben-45-primer-trimestre',
    pretitle: 'BALANZA COMERCIAL',
    title: 'Exportaciones de litio y derivados registran incremento del 45% durante el primer trimestre',
    path: 'economia/exportaciones-litio-suben-45-primer-trimestre',
    subtitle: 'El dinamismo de la demanda en mercados de Asia y Europa impulsa el volumen y el valor de las ventas al exterior de la producción nacional.',
    enter: 'Las cifras del Instituto Nacional de Estadística (INE) confirman un repunte sostenido en los envíos de compuestos de litio, consolidándose como uno de los pilares emergentes de la minería no tradicional.',
    body: `
      <p>El primer trimestre de este año fiscal ha traído números favorables para el sector evaporítico boliviano. La comercialización de carbonato de litio y cloruro de potasio reportó un incremento acumulado del 45% en comparación con el mismo periodo del año anterior.</p>
      <p>Los principales compradores internacionales siguen concentrados en la región de Asia-Pacífico, con China y Corea del Sur a la cabeza, impulsados por la expansión de sus respectivas industrias de electromovilidad y baterías de almacenamiento.</p>
    `,
    author: 'Mariana Mendoza',
    publication_date: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    state: 'A',
    category: MOCK_CATEGORIES[1],
    source: MOCK_SOURCES[0],
    multimedia: [
      {
        id: 102,
        news_id: 2,
        description: 'Personal técnico de YLB realizando controles de pureza en el laboratorio central.',
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 3,
    user_id: 1,
    category_id: 8,
    source_id: 2,
    url: 'la-verde-empata-ante-venezuela-eliminatorias',
    pretitle: 'RUMBO AL MUNDIAL',
    title: 'La Verde consigue un trabajado empate en su visita a Venezuela en eliminatorias sudamericanas',
    path: 'deportes/la-verde-empata-ante-venezuela-eliminatorias',
    subtitle: 'La selección boliviana sumó una unidad valiosa fuera de casa gracias a una defensa sólida y a una actuación destacada del guardameta nacional.',
    enter: 'En un partido disputado de principio a fin, el representativo nacional supo neutralizar los embates del seleccionado local para traerse un punto vital que lo mantiene con opciones en la tabla general.',
    body: `
      <p>La selección nacional de fútbol rescató un valioso empate 1-1 en su visita a Venezuela, en una fecha más de la fase clasificatoria para la próxima cita mundialista. El cotejo, caracterizado por el rigor físico y las transiciones rápidas de ambos planteles, dejó conformes al cuerpo técnico boliviano.</p>
      <p>El tanto de la Verde llegó mediante un excelente contraataque al inicio de la segunda mitad, mientras que el empate local fue estructurado vía tiro libre a diez minutos de la finalización del juego.</p>
    `,
    author: 'Carlos Arauz',
    publication_date: new Date(Date.now() - 1000 * 60 * 240).toISOString(), // 4 hours ago
    state: 'A',
    category: MOCK_CATEGORIES[7],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 103,
        news_id: 3,
        description: 'Entrenamiento de la selección nacional en el campo de juego previo al viaje.',
        url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 4,
    user_id: 1,
    category_id: 6,
    source_id: 2,
    url: 'carnaval-de-oruro-bate-records-visitantes',
    pretitle: 'PATRIMONIO DE LA HUMANIDAD',
    title: 'El Carnaval de Oruro bate récords históricos registrando más de 600.000 visitantes',
    path: 'cultura/carnaval-de-oruro-bate-records-visitantes',
    subtitle: 'La Obra Maestra del Patrimonio Oral e Intangible de la Humanidad deslumbra al mundo con su colorido, fe y devoción folclórica.',
    enter: 'Las calles orureñas se inundaron de danza y tradición en una de las mayores demostraciones culturales del continente, superando todas las proyecciones previas de reactivación turística.',
    body: `
      <p>Con la participación de decenas de miles de bailarines y músicos distribuidos en más de cincuenta conjuntos folclóricos, el fastuoso Carnaval de Oruro completó su tradicional peregrinación hacia el Santuario de la Virgen del Socavón.</p>
      <p>La hotelería local reportó ocupación del 100% y se estimó un movimiento económico de millones de bolivianos en gastronomía, transporte y artesanías.</p>
    `,
    author: 'Beatriz Murillo',
    publication_date: new Date(Date.now() - 1000 * 60 * 480).toISOString(), // 8 hours ago
    state: 'A',
    category: MOCK_CATEGORIES[5],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 104,
        news_id: 4,
        description: 'Bailarines de Diablada haciendo su paso por la avenida Cívica en Oruro.',
        url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 5,
    user_id: 1,
    category_id: 1,
    source_id: 2,
    url: 'construccion-carretera-doble-via-oruro-challapata',
    pretitle: 'INFRAESTRUCTURA VIAL',
    title: 'Inicia la construcción de la doble vía Oruro-Challapata para potenciar la integración del sur',
    path: 'nacional/construccion-carretera-doble-via-oruro-challapata',
    subtitle: 'La megaobra vial contará con financiamiento gubernamental y busca reducir a la mitad los tiempos de viaje comerciales.',
    enter: 'La Administradora Boliviana de Carreteras (ABC) dio luz verde formal al inicio de obras de este tramo clave que forma parte del corredor bioceánico.',
    body: `
      <p>Un anhelo de varias décadas de las provincias del sur andino empieza a materializarse. Se han desplegado los primeros contingentes de maquinaria pesada para iniciar los trabajos de excavación y ensanchamiento de la plataforma en la nueva doble vía.</p>
      <p>El proyecto incluye pasos a desnivel, puentes peatonales elevados y un sistema integrado de iluminación solar para los accesos urbanos.</p>
    `,
    author: 'Alejandro Valdivia',
    publication_date: new Date(Date.now() - 1000 * 60 * 600).toISOString(), // 10 hours ago
    state: 'A',
    category: MOCK_CATEGORIES[0],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 105,
        news_id: 5,
        description: 'Maquinaria pesada iniciando el movimiento de tierras en el altiplano.',
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 6,
    user_id: 1,
    category_id: 3,
    source_id: 2,
    url: 'bolivia-fortalece-lazos-diplomaticos-mercosur',
    pretitle: 'INTEGRACIÓN REGIONAL',
    title: 'Bolivia consolida su participación plena en el Mercosur tras ratificación legislativa',
    path: 'internacional/bolivia-fortalece-lazos-diplomaticos-mercosur',
    subtitle: 'El país andino abre nuevos mercados comerciales y facilita el flujo migratorio con los gigantes sudamericanos.',
    enter: 'Con la conclusión de los trámites parlamentarios correspondientes en los países miembros, Bolivia adquiere todos los derechos y obligaciones como miembro pleno del bloque de integración.',
    body: `
      <p>La incorporación formal de Bolivia al Mercado Común del Sur (Mercosur) representa un hito en la política exterior nacional de los últimos veinte años. Empresarios y exportadores han calificado la medida de sumamente positiva de cara a las facilidades arancelarias que ahora rigen para productos con valor agregado.</p>
    `,
    author: 'Javier Rocha',
    publication_date: new Date(Date.now() - 1000 * 60 * 720).toISOString(), // 12 hours ago
    state: 'A',
    category: MOCK_CATEGORIES[2],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 106,
        news_id: 6,
        description: 'Firma de protocolos comerciales internacionales en la sede de la cancillería.',
        url: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 7,
    user_id: 1,
    category_id: 7,
    source_id: 2,
    url: 'estudiantes-bolivianos-ganan-torneo-robotica',
    pretitle: 'ORGULLO NACIONAL',
    title: 'Estudiantes bolivianos logran primer lugar en olimpiada internacional de robótica',
    path: 'tecnologia/estudiantes-bolivianos-ganan-torneo-robotica',
    subtitle: 'El equipo de jóvenes creadores provenientes de unidades educativas del área rural sorprendió con un robot de rescate autónomo de bajo costo.',
    enter: 'Demostrando un ingenio excepcional y superando a representantes de más de cincuenta delegaciones del mundo, los bolivianos se coronaron campeones del certamen.',
    body: `
      <p>Un grupo de tres estudiantes de secundaria, oriundos de la provincia paceña de Omasuyos, consiguieron la medalla de oro en la competencia global de robótica juvenil celebrada este fin de semana en Ginebra, Suiza.</p>
      <p>El prototipo premiado utiliza componentes reciclados y sensores avanzados programados en código abierto, diseñado para operar en zonas de desastres naturales de difícil acceso humano.</p>
    `,
    author: 'Ramiro Siles',
    publication_date: new Date(Date.now() - 1000 * 60 * 1440).toISOString(), // 24 hours ago
    state: 'A',
    category: MOCK_CATEGORIES[6],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 107,
        news_id: 7,
        description: 'Jóvenes estudiantes posando con sus trofeos y la bandera nacional.',
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 8,
    user_id: 1,
    category_id: 9,
    source_id: 2,
    url: 'campana-nacional-prevencion-salud-infantil',
    pretitle: 'SALUD PÚBLICA',
    title: 'Ministerio de Salud lanza campaña nacional de vacunación y nutrición en zonas rurales',
    path: 'salud/campana-nacional-prevencion-salud-infantil',
    subtitle: 'El plan tiene como meta llegar a más de 300.000 niños menores de cinco años para reducir la desnutrición crónica y asegurar esquemas completos.',
    enter: 'Brigadas de salud móviles se desplazarán por tierra y vías fluviales en las regiones más remotas de la Amazonía y los Yungas bolivianos.',
    body: `
      <p>Con el objetivo de cerrar las brechas de cobertura inmunológica ocasionadas por el aislamiento de comunidades alejadas, se ha dado inicio formal al despliegue logístico de la campaña de prevención médica infantil más grande del año.</p>
    `,
    author: 'Elena Flores',
    publication_date: new Date(Date.now() - 1000 * 60 * 2000).toISOString(), // 33 hours ago
    state: 'A',
    category: MOCK_CATEGORIES[8],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 108,
        news_id: 8,
        description: 'Personal de salud entregando suplementos nutricionales en la comunidad.',
        url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 9,
    user_id: 1,
    category_id: 10,
    source_id: 2,
    url: 'descubren-ciudad-prehispanica-perdida-madidi',
    pretitle: 'HALLAZGO ARQUEOLÓGICO',
    title: 'Científicos localizan vestigios de una gran ciudad prehispánica sepultada en el Madidi',
    path: 'interesante/descubren-ciudad-prehispanica-perdida-madidi',
    subtitle: 'Imágenes satelitales con tecnología LiDAR detectan plataformas agrícolas monumentales y cimientos piramidales bajo la espesa selva amazónica.',
    enter: 'Una expedición arqueológica conjunta ha desvelado la existencia de un complejo urbano de enormes dimensiones que pertenecería a una civilización amazónica aún no catalogada.',
    body: `
      <p>El Parque Nacional Madidi, reconocido mundialmente por su biodiversidad, ha revelado un asombroso secreto arqueológico. Mediante el uso de escáneres láser aéreos (LiDAR) capaces de penetrar la densa vegetación selvática, se cartografiaron cientos de hectáreas con terrazas agrícolas, canales de agua y cimientos de piedra monumentales.</p>
      <p>Los investigadores sostienen que esta urbe data de aproximadamente el año 800 d.C. y desafía las concepciones tradicionales sobre la baja densidad demográfica en la Amazonía antes de la llegada de los españoles.</p>
    `,
    author: 'Beatriz Murillo',
    publication_date: new Date(Date.now() - 1000 * 60 * 2880).toISOString(), // 2 days ago
    state: 'A',
    category: MOCK_CATEGORIES[9],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 109,
        news_id: 9,
        description: 'Detalle de los muros de contención cubiertos de musgo hallados en la selva.',
        url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 10,
    user_id: 1,
    category_id: 4,
    source_id: 2,
    url: 'policia-desarticula-red-contrabando-frontera',
    pretitle: 'OPERACIÓN DE SEGURIDAD',
    title: 'Operativo policial conjunto logra desarticular red de contrabando internacional de vehículos',
    path: 'seguridad/policia-desarticula-red-contrabando-frontera',
    subtitle: 'Las intervenciones simultáneas en zonas fronterizas con Chile resultaron en varios detenidos e incautación de mercadería valuada en millones.',
    enter: 'Fuerzas especiales de la policía nacional desbarataron una organización criminal que operaba pasos ilegales en el altiplano boliviano.',
    body: `
      <p>La fuerza del orden, coordinada con la aduana nacional, ejecutó una serie de allanamientos que permitieron el decomiso de camiones cargados de mercadería ilegal que ingresaban al país evadiendo impuestos fiscales.</p>
    `,
    author: 'Ramiro Siles',
    publication_date: new Date(Date.now() - 1000 * 60 * 3600).toISOString(), // 2.5 days ago
    state: 'A',
    category: MOCK_CATEGORIES[3],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 110,
        news_id: 10,
        description: 'Vehículos policiales patrullando las vías de frontera en el altiplano.',
        url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 11,
    user_id: 1,
    category_id: 5,
    source_id: 2,
    url: 'programa-vivienda-social-beneficia-familias',
    pretitle: 'BENEFICIO SOCIAL',
    title: 'Programa de vivienda social entrega cien hogares dignos a familias de escasos recursos',
    path: 'sociedad/programa-vivienda-social-beneficia-familias',
    subtitle: 'El proyecto estatal dota de servicios básicos, alcantarillado y áreas recreativas para el sano esparcimiento comunitario.',
    enter: 'En un emotivo acto, autoridades del ministerio de obras públicas entregaron las llaves de sus nuevos domicilios a familias damnificadas por desastres climatológicos.',
    body: `
      <p>Las viviendas unifamiliares, dotadas de paneles solares complementarios y sistemas eficientes de agua potable, representan un cambio radical para las condiciones de habitabilidad de estas comunidades periurbanas.</p>
    `,
    author: 'Elena Flores',
    publication_date: new Date(Date.now() - 1000 * 60 * 5000).toISOString(), // 3.5 days ago
    state: 'A',
    category: MOCK_CATEGORIES[4],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 111,
        news_id: 11,
        description: 'Fachada frontal de las nuevas viviendas multifamiliares entregadas.',
        url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 12,
    user_id: 1,
    category_id: 1,
    source_id: 2,
    url: 'bolivia-implementa-sistema-alerta-temprana-desastres-climaticos',
    pretitle: 'MEDIO AMBIENTE',
    title: 'Bolivia implementa sistema de alerta temprana ante desastres climáticos',
    path: 'nacional/bolivia-implementa-sistema-alerta-temprana-desastres-climaticos',
    subtitle: 'El nuevo monitoreo satelital busca alertar con horas de anticipación desbordes de ríos y heladas en el altiplano.',
    enter: 'En coordinación con el Servicio Nacional de Meteorología e Hidrología, el gobierno nacional inauguró una sala de control integrada para emergencias climáticas.',
    body: `
      <p>El sistema de vigilancia utiliza datos satelitales en tiempo real para predecir crecidas repentinas de cuencas en el oriente boliviano y eventos de heladas destructivas en las zonas productoras andinas.</p>
    `,
    author: 'Alejandro Valdivia',
    publication_date: new Date(Date.now() - 1000 * 60 * 6000).toISOString(),
    state: 'A',
    category: MOCK_CATEGORIES[0],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 112,
        news_id: 12,
        description: 'Monitoreo de cuencas mediante tecnología satelital integrada.',
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 13,
    user_id: 1,
    category_id: 1,
    source_id: 2,
    url: 'inauguran-moderno-centro-investigacion-medica-nuclear-el-alto',
    pretitle: 'TECNOLOGÍA Y SALUD',
    title: 'Inauguran moderno centro de investigación y tratamiento de medicina nuclear en El Alto',
    path: 'nacional/inauguran-moderno-centro-investigacion-medica-nuclear-el-alto',
    subtitle: 'El complejo cuenta con ciclotrón y equipos PET-CT de última generación para combatir el cáncer de forma gratuita.',
    enter: 'El Centro de Tecnología Nuclear abre sus puertas para brindar tratamientos oncológicos avanzados y desarrollar radiofármacos nacionales.',
    body: `
      <p>Equipado con los sistemas de diagnóstico por imagen más avanzados de Sudamérica, el nuevo centro de El Alto permitirá detectar y tratar patologías oncológicas y neurológicas complejas de forma oportuna.</p>
    `,
    author: 'Ramiro Siles',
    publication_date: new Date(Date.now() - 1000 * 60 * 7000).toISOString(),
    state: 'A',
    category: MOCK_CATEGORIES[0],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 113,
        news_id: 13,
        description: 'Instalaciones del ciclotrón para radiofármacos en el nuevo centro.',
        url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 14,
    user_id: 1,
    category_id: 2,
    source_id: 2,
    url: 'produccion-quinua-real-incrementa-apuntando-mercados-europeos',
    pretitle: 'AGROEXPORTACIÓN',
    title: 'Producción de quinua real incrementa en un 25% apuntando a mercados europeos',
    path: 'economia/produccion-quinua-real-incrementa-apuntando-mercados-europeos',
    subtitle: 'Asociaciones de productores del altiplano sur consolidan acuerdos de comercio justo con distribuidores orgánicos de Europa.',
    enter: 'El grano de oro boliviano registra cifras récord de rendimiento por hectárea gracias al uso de técnicas agrícolas sostenibles y abonos orgánicos certificados.',
    body: `
      <p>Productores de los departamentos de Oruro y Potosí informaron que la cosecha de este ciclo agrícola reporta un incremento significativo en volumen y calidad, lo que les permitirá cumplir con creces la cuota del mercado europeo de exportación directa.</p>
    `,
    author: 'Mariana Mendoza',
    publication_date: new Date(Date.now() - 1000 * 60 * 8000).toISOString(),
    state: 'A',
    category: MOCK_CATEGORIES[1],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 114,
        news_id: 14,
        description: 'Quinua real lista para el proceso de ensacado y exportación.',
        url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 15,
    user_id: 1,
    category_id: 2,
    source_id: 2,
    url: 'banco-central-reporta-incremento-reservas-oro',
    pretitle: 'FINANZAS PÚBLICAS',
    title: 'Banco Central de Bolivia reporta incremento sostenido en reservas internacionales de oro',
    path: 'economia/banco-central-reporta-incremento-reservas-oro',
    subtitle: 'La compra directa de oro refinado a cooperativistas mineros locales permite fortalecer la liquidez de los activos nacionales.',
    enter: 'La autoridad monetaria del país destacó que la Ley de Compra de Oro ha dado resultados altamente positivos en el resguardo de la estabilidad cambiaria.',
    body: `
      <p>Con las compras acumuladas durante el último semestre, el BCB ha sumado varias toneladas de oro fino a las bóvedas de seguridad, lo que contribuye a dar solidez a los indicadores macroeconómicos de la balanza comercial.</p>
    `,
    author: 'Mariana Mendoza',
    publication_date: new Date(Date.now() - 1000 * 60 * 9000).toISOString(),
    state: 'A',
    category: MOCK_CATEGORIES[1],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 115,
        news_id: 15,
        description: 'Lingotes de oro certificados depositados en bóveda nacional.',
        url: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  {
    id: 16,
    user_id: 1,
    category_id: 2,
    source_id: 2,
    url: 'fexpocruz-proyecta-negocios-300-millones',
    pretitle: 'DESARROLLO COMERCIAL',
    title: 'Fexpocruz proyecta intenciones de negocios por más de $300 millones',
    path: 'economia/fexpocruz-proyecta-negocios-300-millones',
    subtitle: 'La muestra ferial multisectorial de Santa Cruz arranca con una alta participación de delegaciones empresariales de la región.',
    enter: 'El encuentro de negocios más importante del país congrega a más de dos mil marcas expositoras en busca de forjar alianzas comerciales.',
    body: `
      <p>La Fexpocruz ha abierto sus puertas oficialmente, reportando cifras récord de intenciones de negocios en su primera jornada de rueda de contactos, destacando la presencia de firmas del Mercosur y la Unión Europea.</p>
    `,
    author: 'Javier Rocha',
    publication_date: new Date(Date.now() - 1000 * 60 * 10000).toISOString(),
    state: 'A',
    category: MOCK_CATEGORIES[1],
    source: MOCK_SOURCES[1],
    multimedia: [
      {
        id: 116,
        news_id: 16,
        description: 'Pabellones feriales durante la jornada inaugural de negocios.',
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
        type: 'image/jpeg',
        state: 'A'
      }
    ]
  },
  // === INTERNACIONAL (cat 3) extras ===
  {
    id: 17, user_id: 1, category_id: 3, source_id: 2,
    url: 'cumbre-celac-acuerdos-energia-limpia',
    pretitle: 'DIPLOMACIA',
    title: 'Cumbre de la CELAC cierra con acuerdos históricos sobre energía limpia y cooperación regional',
    path: 'internacional/cumbre-celac-acuerdos-energia-limpia',
    subtitle: 'Los mandatarios latinoamericanos firmaron un pacto vinculante para alcanzar el 70% de energía renovable antes de 2035.',
    enter: 'El foro multilateral reunió a 33 jefes de Estado en una jornada de intensas negociaciones sobre transición energética.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Javier Rocha',
    publication_date: new Date(Date.now() - 1000 * 60 * 800).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[2], source: MOCK_SOURCES[1],
    multimedia: [{ id: 117, news_id: 17, description: 'Cumbre CELAC', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 18, user_id: 1, category_id: 3, source_id: 2,
    url: 'brasil-bolivia-acuerdo-corredor-bioceanico',
    pretitle: 'COMERCIO EXTERIOR',
    title: 'Brasil y Bolivia avanzan en la construcción del corredor bioceánico ferroviario',
    path: 'internacional/brasil-bolivia-acuerdo-corredor-bioceanico',
    subtitle: 'El proyecto conectará el puerto de Santos con puertos peruanos, atravesando territorio boliviano.',
    enter: 'Ambas naciones ratificaron un memorándum de entendimiento para financiar los estudios de factibilidad del tramo central.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Javier Rocha',
    publication_date: new Date(Date.now() - 1000 * 60 * 1500).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[2], source: MOCK_SOURCES[1],
    multimedia: [{ id: 118, news_id: 18, description: 'Corredor bioceánico', url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 19, user_id: 1, category_id: 3, source_id: 2,
    url: 'onu-reconoce-modelo-boliviano-agua',
    pretitle: 'RECONOCIMIENTO MUNDIAL',
    title: 'Naciones Unidas reconoce el modelo boliviano de gestión comunitaria del agua',
    path: 'internacional/onu-reconoce-modelo-boliviano-agua',
    subtitle: 'El sistema de cooperativas rurales de agua potable fue calificado como referente para países en desarrollo.',
    enter: 'La distinción fue otorgada durante la Asamblea General en Nueva York.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Mariana Mendoza',
    publication_date: new Date(Date.now() - 1000 * 60 * 2200).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[2], source: MOCK_SOURCES[1],
    multimedia: [{ id: 119, news_id: 19, description: 'Asamblea ONU', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  // === SEGURIDAD (cat 4) extras ===
  {
    id: 20, user_id: 1, category_id: 4, source_id: 2,
    url: 'sistema-videovigilancia-ciudades-eje',
    pretitle: 'SEGURIDAD CIUDADANA',
    title: 'Implementan sistema de videovigilancia con inteligencia artificial en ciudades del eje troncal',
    path: 'seguridad/sistema-videovigilancia-ciudades-eje',
    subtitle: 'Las cámaras con reconocimiento facial y detección de patrones operarán las 24 horas en zonas de alta incidencia delictiva.',
    enter: 'El proyecto piloto arranca en La Paz, Cochabamba y Santa Cruz con más de 2.000 dispositivos conectados.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Ramiro Siles',
    publication_date: new Date(Date.now() - 1000 * 60 * 3800).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[3], source: MOCK_SOURCES[1],
    multimedia: [{ id: 120, news_id: 20, description: 'Cámaras de vigilancia', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 21, user_id: 1, category_id: 4, source_id: 2,
    url: 'rescatan-victimas-trata-personas-operativo',
    pretitle: 'LUCHA CONTRA LA TRATA',
    title: 'Rescatan a 45 víctimas de trata de personas en operativo coordinado entre cinco departamentos',
    path: 'seguridad/rescatan-victimas-trata-personas-operativo',
    subtitle: 'La Fuerza Especial de Lucha Contra el Crimen lideró las acciones simultáneas con apoyo de Interpol.',
    enter: 'Las víctimas fueron trasladadas a centros de atención integral para su recuperación.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Elena Flores',
    publication_date: new Date(Date.now() - 1000 * 60 * 4200).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[3], source: MOCK_SOURCES[1],
    multimedia: [{ id: 121, news_id: 21, description: 'Operativo policial', url: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 22, user_id: 1, category_id: 4, source_id: 2,
    url: 'decomisan-toneladas-droga-chapare',
    pretitle: 'NARCOTRÁFICO',
    title: 'Decomisan más de 5 toneladas de sustancias controladas en operativos en el trópico de Cochabamba',
    path: 'seguridad/decomisan-toneladas-droga-chapare',
    subtitle: 'Los laboratorios clandestinos fueron destruidos por las fuerzas antidroga en operaciones conjuntas.',
    enter: 'Las autoridades confirmaron la detención de varios sospechosos vinculados a redes internacionales.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Carlos Arauz',
    publication_date: new Date(Date.now() - 1000 * 60 * 5500).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[3], source: MOCK_SOURCES[1],
    multimedia: [{ id: 122, news_id: 22, description: 'Operativo antidrogas', url: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  // === SOCIEDAD (cat 5) extras ===
  {
    id: 23, user_id: 1, category_id: 5, source_id: 2,
    url: 'universidad-publica-gratuita-carreras-ia',
    pretitle: 'EDUCACIÓN SUPERIOR',
    title: 'Universidad pública lanza carreras gratuitas de inteligencia artificial y ciencia de datos',
    path: 'sociedad/universidad-publica-gratuita-carreras-ia',
    subtitle: 'La UMSA abre inscripciones para programas de formación técnica superior enfocados en la revolución digital.',
    enter: 'Más de 5.000 postulantes se registraron en las primeras 48 horas de la convocatoria.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Elena Flores',
    publication_date: new Date(Date.now() - 1000 * 60 * 5200).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[4], source: MOCK_SOURCES[1],
    multimedia: [{ id: 123, news_id: 23, description: 'Universidad pública', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 24, user_id: 1, category_id: 5, source_id: 2,
    url: 'marcha-mujeres-igualdad-derechos',
    pretitle: 'DERECHOS CIVILES',
    title: 'Multitudinaria marcha por la igualdad de derechos congrega a miles en las principales ciudades',
    path: 'sociedad/marcha-mujeres-igualdad-derechos',
    subtitle: 'Organizaciones civiles y colectivos feministas demandaron políticas públicas efectivas contra la violencia de género.',
    enter: 'La movilización pacífica recorrió más de 5 kilómetros en la ciudad de La Paz.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Beatriz Murillo',
    publication_date: new Date(Date.now() - 1000 * 60 * 6500).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[4], source: MOCK_SOURCES[1],
    multimedia: [{ id: 124, news_id: 24, description: 'Marcha por igualdad', url: 'https://images.unsplash.com/photo-1591848478625-de43268e6fb8?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 25, user_id: 1, category_id: 5, source_id: 2,
    url: 'programa-alfabetizacion-digital-adultos-mayores',
    pretitle: 'INCLUSIÓN DIGITAL',
    title: 'Programa de alfabetización digital capacita a más de 10.000 adultos mayores en todo el país',
    path: 'sociedad/programa-alfabetizacion-digital-adultos-mayores',
    subtitle: 'La iniciativa enseña el uso de smartphones, banca móvil y trámites electrónicos gubernamentales.',
    enter: 'Los centros de capacitación operan en las nueve capitales departamentales.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Mariana Mendoza',
    publication_date: new Date(Date.now() - 1000 * 60 * 7200).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[4], source: MOCK_SOURCES[1],
    multimedia: [{ id: 125, news_id: 25, description: 'Adultos mayores con tablets', url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  // === CULTURA (cat 6) extras ===
  {
    id: 26, user_id: 1, category_id: 6, source_id: 2,
    url: 'pelicula-boliviana-seleccionada-cannes',
    pretitle: 'CINE NACIONAL',
    title: 'Película boliviana es seleccionada para la sección oficial del Festival de Cannes',
    path: 'cultura/pelicula-boliviana-seleccionada-cannes',
    subtitle: 'El largometraje rodado en el Salar de Uyuni explora la identidad indígena contemporánea.',
    enter: 'Es la primera vez en 15 años que una producción boliviana compite en la prestigiosa muestra francesa.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Beatriz Murillo',
    publication_date: new Date(Date.now() - 1000 * 60 * 550).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[5], source: MOCK_SOURCES[1],
    multimedia: [{ id: 126, news_id: 26, description: 'Festival de Cannes', url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 27, user_id: 1, category_id: 6, source_id: 2,
    url: 'museo-arte-contemporaneo-inauguracion-la-paz',
    pretitle: 'ARTES VISUALES',
    title: 'La Paz inaugura el Museo de Arte Contemporáneo más grande de la región andina',
    path: 'cultura/museo-arte-contemporaneo-inauguracion-la-paz',
    subtitle: 'El edificio de arquitectura vanguardista albergará más de 3.000 obras de artistas latinoamericanos.',
    enter: 'La primera exposición temporal se titula "Raíces del Futuro" y reúne a 80 creadores bolivianos.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Elena Flores',
    publication_date: new Date(Date.now() - 1000 * 60 * 1200).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[5], source: MOCK_SOURCES[1],
    multimedia: [{ id: 127, news_id: 27, description: 'Museo de arte', url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 28, user_id: 1, category_id: 6, source_id: 2,
    url: 'festival-musica-barroca-chiquitos-record',
    pretitle: 'MÚSICA Y TRADICIÓN',
    title: 'Festival Internacional de Música Barroca de Chiquitos supera récord de asistencia',
    path: 'cultura/festival-musica-barroca-chiquitos-record',
    subtitle: 'Más de 100 agrupaciones de 20 países participaron en las misiones jesuíticas de Santa Cruz.',
    enter: 'El evento bienal es considerado el mayor festival de música barroca del continente americano.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Carlos Arauz',
    publication_date: new Date(Date.now() - 1000 * 60 * 2500).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[5], source: MOCK_SOURCES[1],
    multimedia: [{ id: 128, news_id: 28, description: 'Misiones jesuíticas', url: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  // === TECNOLOGÍA (cat 7) extras ===
  {
    id: 29, user_id: 1, category_id: 7, source_id: 2,
    url: 'startup-boliviana-fintech-expansion-latam',
    pretitle: 'EMPRENDIMIENTO TECH',
    title: 'Startup boliviana de fintech levanta $12 millones en ronda de inversión para expandirse en Latinoamérica',
    path: 'tecnologia/startup-boliviana-fintech-expansion-latam',
    subtitle: 'La plataforma de pagos digitales ya cuenta con más de 500.000 usuarios activos en Bolivia.',
    enter: 'Inversores de Silicon Valley y fondos regionales lideraron la ronda Serie A.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Ramiro Siles',
    publication_date: new Date(Date.now() - 1000 * 60 * 1600).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[6], source: MOCK_SOURCES[1],
    multimedia: [{ id: 129, news_id: 29, description: 'Startup fintech', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 30, user_id: 1, category_id: 7, source_id: 2,
    url: 'gobierno-lanza-plataforma-digital-tramites',
    pretitle: 'GOBIERNO DIGITAL',
    title: 'Bolivia lanza plataforma digital unificada que permite realizar 200 trámites gubernamentales en línea',
    path: 'tecnologia/gobierno-lanza-plataforma-digital-tramites',
    subtitle: 'Ciudadanos podrán gestionar documentos, licencias y certificados sin acudir a oficinas públicas.',
    enter: 'La plataforma integra bases de datos de 15 ministerios y entidades descentralizadas.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Alejandro Valdivia',
    publication_date: new Date(Date.now() - 1000 * 60 * 3000).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[6], source: MOCK_SOURCES[1],
    multimedia: [{ id: 130, news_id: 30, description: 'Plataforma digital', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 31, user_id: 1, category_id: 7, source_id: 2,
    url: 'satelite-tupac-katari-2-desarrollo',
    pretitle: 'ESPACIO',
    title: 'Bolivia anuncia el desarrollo del satélite Túpac Katari 2 con capacidad de internet de alta velocidad',
    path: 'tecnologia/satelite-tupac-katari-2-desarrollo',
    subtitle: 'El nuevo satélite de telecomunicaciones triplicará la cobertura de internet en áreas rurales del país.',
    enter: 'La Agencia Boliviana Espacial firmó el contrato con un consorcio tecnológico internacional.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Ramiro Siles',
    publication_date: new Date(Date.now() - 1000 * 60 * 4500).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[6], source: MOCK_SOURCES[1],
    multimedia: [{ id: 131, news_id: 31, description: 'Satélite Túpac Katari', url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  // === DEPORTES (cat 8) extras ===
  {
    id: 32, user_id: 1, category_id: 8, source_id: 2,
    url: 'bolivar-campeon-copa-libertadores-historico',
    pretitle: 'FÚTBOL BOLIVIANO',
    title: 'Bolívar logra histórica clasificación a cuartos de final de la Copa Libertadores',
    path: 'deportes/bolivar-campeon-copa-libertadores-historico',
    subtitle: 'El club paceño venció en la altura de La Paz y aseguró su pase a la siguiente ronda del torneo continental.',
    enter: 'Es la primera vez en más de una década que un equipo boliviano llega tan lejos en la Libertadores.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Carlos Arauz',
    publication_date: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[7], source: MOCK_SOURCES[1],
    multimedia: [{ id: 132, news_id: 32, description: 'Estadio Hernando Siles', url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 33, user_id: 1, category_id: 8, source_id: 2,
    url: 'ciclista-boliviano-medalla-panamericanos',
    pretitle: 'CICLISMO',
    title: 'Ciclista boliviano conquista medalla de oro en los Juegos Panamericanos',
    path: 'deportes/ciclista-boliviano-medalla-panamericanos',
    subtitle: 'La hazaña se logró en la prueba de ruta a más de 4.000 metros de altitud en la competencia continental.',
    enter: 'Es la tercera medalla panamericana para Bolivia en la historia de este deporte.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Carlos Arauz',
    publication_date: new Date(Date.now() - 1000 * 60 * 900).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[7], source: MOCK_SOURCES[1],
    multimedia: [{ id: 133, news_id: 33, description: 'Ciclista boliviano', url: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 34, user_id: 1, category_id: 8, source_id: 2,
    url: 'rally-dakar-pilotos-bolivianos-destacan',
    pretitle: 'RALLY DAKAR',
    title: 'Pilotos bolivianos destacan en las etapas del Rally Dakar con resultados históricos',
    path: 'deportes/rally-dakar-pilotos-bolivianos-destacan',
    subtitle: 'Dos representantes nacionales terminaron entre los primeros 20 de la clasificación general de motos.',
    enter: 'Los competidores cruzaron el desierto de Atacama en una de las etapas más exigentes del rally.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Ramiro Siles',
    publication_date: new Date(Date.now() - 1000 * 60 * 1800).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[7], source: MOCK_SOURCES[1],
    multimedia: [{ id: 134, news_id: 34, description: 'Rally Dakar Bolivia', url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  // === SALUD (cat 9) extras ===
  {
    id: 35, user_id: 1, category_id: 9, source_id: 2,
    url: 'hospital-tercer-nivel-cochabamba-inauguracion',
    pretitle: 'INFRAESTRUCTURA MÉDICA',
    title: 'Inauguran hospital de tercer nivel en Cochabamba con capacidad para 500 pacientes',
    path: 'salud/hospital-tercer-nivel-cochabamba-inauguracion',
    subtitle: 'El centro médico cuenta con 20 quirófanos, unidad de trasplantes y sala de telemedicina.',
    enter: 'Es el hospital público más moderno del interior del país, construido en tiempo récord.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Elena Flores',
    publication_date: new Date(Date.now() - 1000 * 60 * 2100).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[8], source: MOCK_SOURCES[1],
    multimedia: [{ id: 135, news_id: 35, description: 'Hospital moderno', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 36, user_id: 1, category_id: 9, source_id: 2,
    url: 'investigadores-descubren-planta-medicinal-amazonia',
    pretitle: 'INVESTIGACIÓN MÉDICA',
    title: 'Investigadores bolivianos descubren propiedades anticancerígenas en planta amazónica',
    path: 'salud/investigadores-descubren-planta-medicinal-amazonia',
    subtitle: 'El hallazgo abre nuevas líneas de tratamiento oncológico basado en compuestos naturales del trópico.',
    enter: 'Los resultados fueron publicados en una revista científica de alto impacto internacional.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Mariana Mendoza',
    publication_date: new Date(Date.now() - 1000 * 60 * 3200).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[8], source: MOCK_SOURCES[1],
    multimedia: [{ id: 136, news_id: 36, description: 'Laboratorio investigación', url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 37, user_id: 1, category_id: 9, source_id: 2,
    url: 'telemedicina-comunidades-rurales-programa',
    pretitle: 'TELEMEDICINA',
    title: 'Programa de telemedicina conecta a 200 comunidades rurales con especialistas médicos',
    path: 'salud/telemedicina-comunidades-rurales-programa',
    subtitle: 'Los pacientes pueden realizar consultas por videollamada y recibir recetas electrónicas.',
    enter: 'El sistema funciona mediante antenas satelitales del Túpac Katari en zonas sin cobertura celular.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Alejandro Valdivia',
    publication_date: new Date(Date.now() - 1000 * 60 * 4800).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[8], source: MOCK_SOURCES[1],
    multimedia: [{ id: 137, news_id: 37, description: 'Telemedicina rural', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  // === INTERESANTE (cat 10) extras ===
  {
    id: 38, user_id: 1, category_id: 10, source_id: 2,
    url: 'lago-titicaca-especie-rana-gigante-descubierta',
    pretitle: 'BIODIVERSIDAD',
    title: 'Descubren nueva especie de rana gigante endémica del lago Titicaca',
    path: 'interesante/lago-titicaca-especie-rana-gigante-descubierta',
    subtitle: 'La especie, bautizada como Telmatobius bolivianus, mide hasta 30 cm y habita profundidades inexploradas.',
    enter: 'Biólogos de la UMSA y National Geographic documentaron el hallazgo durante una expedición subacuática.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Beatriz Murillo',
    publication_date: new Date(Date.now() - 1000 * 60 * 2900).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[9], source: MOCK_SOURCES[1],
    multimedia: [{ id: 138, news_id: 38, description: 'Lago Titicaca', url: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 39, user_id: 1, category_id: 10, source_id: 2,
    url: 'salar-uyuni-elegido-maravilla-natural-mundo',
    pretitle: 'TURISMO',
    title: 'El Salar de Uyuni es elegido como una de las Nuevas 7 Maravillas Naturales del Mundo',
    path: 'interesante/salar-uyuni-elegido-maravilla-natural-mundo',
    subtitle: 'Millones de votos a nivel mundial posicionaron al espejo de sal más grande del planeta entre los elegidos.',
    enter: 'El reconocimiento impulsa el turismo sostenible y la conservación del ecosistema altiplánico.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Javier Rocha',
    publication_date: new Date(Date.now() - 1000 * 60 * 4000).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[9], source: MOCK_SOURCES[1],
    multimedia: [{ id: 139, news_id: 39, description: 'Salar de Uyuni', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  },
  {
    id: 40, user_id: 1, category_id: 10, source_id: 2,
    url: 'misterio-tiwanaku-nuevos-hallazgos-subterraneos',
    pretitle: 'ARQUEOLOGÍA',
    title: 'Nuevos hallazgos subterráneos en Tiwanaku revelan red de túneles ceremoniales desconocidos',
    path: 'interesante/misterio-tiwanaku-nuevos-hallazgos-subterraneos',
    subtitle: 'Georadar de última generación detectó cámaras ocultas bajo la Pirámide de Akapana.',
    enter: 'Los arqueólogos creen que los túneles conectaban los principales templos de la ciudad prehispánica.',
    body: '<p>Contenido del artículo.</p>',
    author: 'Beatriz Murillo',
    publication_date: new Date(Date.now() - 1000 * 60 * 5800).toISOString(),
    state: 'A', category: MOCK_CATEGORIES[9], source: MOCK_SOURCES[1],
    multimedia: [{ id: 140, news_id: 40, description: 'Ruinas de Tiwanaku', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop', type: 'image/jpeg', state: 'A' }]
  }
];

export const MOCK_MOST_READ = signal<News[]>([
  MOCK_NEWS[0], // Litio investment
  MOCK_NEWS[3], // Oruro carnival
  MOCK_NEWS[1], // Litio exports
  MOCK_NEWS[6], // Robotics award
  MOCK_NEWS[8]  // Archaeological find
]);

export const MOCK_NEWS_SIGNAL = signal<News[]>(MOCK_NEWS);
export const MOCK_CATEGORIES_SIGNAL = signal<Category[]>(MOCK_CATEGORIES);
export const MOCK_SOURCES_SIGNAL = signal<Source[]>(MOCK_SOURCES);

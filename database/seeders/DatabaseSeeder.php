<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Category;
use App\Models\Source;
use App\Models\News;
use App\Models\Multimedia;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // ---------- Users ----------
        $admin = User::create([
            'name'     => 'Admin Bolivian Daily',
            'email'    => 'admin@boliviandaily.bo',
            'password' => Hash::make('admin123'),
            'access'   => 'admin',
            'state'    => 'A',
        ]);

        // ---------- Sources ----------
        $sources = [
            ['name' => 'Bolivian Daily', 'url' => 'boliviandaily.bo'],
            ['name' => 'ABI Noticias',   'url' => 'abi.bo'],
            ['name' => 'Erbol Digital',  'url' => 'erbol.com.bo'],
        ];
        $sourceIds = [];
        foreach ($sources as $s) {
            $sourceIds[] = Source::create(array_merge($s, ['state' => 'A']))->id;
        }

        // ---------- Categories ----------
        $cats = [
            ['name' => 'Política',       'url' => 'politica'],
            ['name' => 'Economía',       'url' => 'economia'],
            ['name' => 'Deportes',       'url' => 'deportes'],
            ['name' => 'Cultura',        'url' => 'cultura'],
            ['name' => 'Tecnología',     'url' => 'tecnologia'],
            ['name' => 'Internacional',  'url' => 'internacional'],
            ['name' => 'Sociedad',       'url' => 'sociedad'],
            ['name' => 'Opinión',        'url' => 'opinion'],
        ];
        $catMap = [];
        foreach ($cats as $c) {
            $catMap[$c['url']] = Category::create(array_merge($c, ['user_id' => $admin->id, 'state' => 'A']))->id;
        }

        // ---------- News ----------
        // Unsplash images for news (reliable public images)
        $images = [
            'https://images.unsplash.com/photo-1585829364618-1b5c29c9e5c8?w=800',
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
            'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800',
            'https://images.unsplash.com/photo-1524781289445-ddf8d5695e53?w=800',
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
            'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800',
            'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=800',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800',
        ];

        $articles = [
            // POLÍTICA
            [
                'cat'      => 'politica',
                'pretitle' => 'GOBIERNO NACIONAL',
                'title'    => 'Presidente anuncia plan de inversión de $2.500 millones para infraestructura en Bolivia',
                'subtitle' => 'El mandatario presentó el mayor paquete de obras públicas en la historia reciente del país durante el Consejo de Ministros',
                'enter'    => 'La Casa de Gobierno reveló esta mañana los detalles de un ambicioso plan de inversión que abarcará los nueve departamentos del país.',
                'body'     => '<p>El Presidente del Estado Plurinacional de Bolivia anunció este martes un histórico plan de inversión pública de 2.500 millones de dólares destinado a modernizar la infraestructura vial, energética y de salud en todo el territorio nacional.</p><p>El paquete, denominado <strong>"Bolivia Construye"</strong>, contempla la construcción de más de 3.000 kilómetros de carreteras, la instalación de plantas de energía renovable en zonas rurales y la edificación de 45 nuevos hospitales de segundo nivel en municipios con déficit de atención médica.</p><p>El ministro de Planificación del Desarrollo explicó que los recursos provendrán de una combinación de fondos propios del Tesoro General, préstamos de organismos multilaterales como el BID y la CAF, y cooperación internacional de la Unión Europea y China.</p><blockquote><p>"Esta inversión histórica transformará Bolivia en los próximos cinco años. Cada boliviano sentirá el impacto en su calidad de vida", afirmó el Presidente ante el pleno del Consejo de Ministros.</p></blockquote><p>Los departamentos que recibirán mayor inversión son Santa Cruz, La Paz y Cochabamba, aunque todas las regiones tendrán proyectos prioritarios según sus necesidades específicas. En el Beni y Pando se priorizarán las vías fluviales y la conectividad aérea.</p>',
                'author'   => 'María Fernández',
                'image'    => $images[0],
                'date'     => now()->subHours(2),
            ],
            [
                'cat'      => 'politica',
                'pretitle' => 'ASAMBLEA LEGISLATIVA',
                'title'    => 'Debate sobre la nueva Ley de Presupuesto enfrenta a oficialismo y oposición en la Asamblea',
                'subtitle' => 'Los legisladores opositores cuestionan el incremento del gasto corriente y piden mayor transparencia',
                'enter'    => 'La sesión ordinaria se extendió por más de ocho horas sin llegar a un acuerdo sobre el articulado central.',
                'body'     => '<p>La Asamblea Legislativa Plurinacional vivió este lunes una jornada álgida cuando el oficialismo intentó aprobar el proyecto de Ley de Presupuesto General del Estado sin las modificaciones solicitadas por la oposición.</p><p>Los legisladores de los partidos opositores cuestionaron principalmente el incremento del 12% en el gasto corriente del Estado, argumentando que no se corresponde con el contexto de ajuste fiscal que enfrenta el país.</p>',
                'author'   => 'Carlos Mendoza',
                'image'    => $images[1],
                'date'     => now()->subHours(5),
            ],
            [
                'cat'      => 'politica',
                'pretitle' => 'ELECCIONES 2025',
                'title'    => 'Tres nuevos candidatos presidenciales se inscriben ante el Tribunal Supremo Electoral',
                'subtitle' => 'El organismo electoral confirma que ya son nueve las fórmulas habilitadas para los comicios de octubre',
                'enter'    => 'El plazo de inscripción de candidaturas culmina el próximo viernes según el calendario electoral vigente.',
                'body'     => '<p>El Tribunal Supremo Electoral (TSE) confirmó este miércoles la inscripción de tres nuevas fórmulas presidenciales para las elecciones generales programadas para octubre de 2025, elevando a nueve el total de binomios habilitados para competir en los comicios.</p>',
                'author'   => 'Ana Quiroga',
                'image'    => $images[2],
                'date'     => now()->subHours(8),
            ],
            [
                'cat'      => 'politica',
                'pretitle' => 'DIPLOMACIA',
                'title'    => 'Bolivia y Brasil firman acuerdo de cooperación energética por 10 años',
                'subtitle' => 'El convenio garantizará el suministro de gas boliviano y la inversión brasileña en energía renovable',
                'enter'    => 'Cancilleres de ambos países suscribieron el documento en Brasilia durante la reunión bilateral.',
                'body'     => '<p>Los cancilleres de Bolivia y Brasil suscribieron este jueves en Brasilia un acuerdo marco de cooperación energética que tendrá una vigencia de diez años y contempla el suministro garantizado de gas natural boliviano al mercado brasileño.</p>',
                'author'   => 'Pedro Quispe',
                'image'    => $images[3],
                'date'     => now()->subHours(12),
            ],

            // ECONOMÍA
            [
                'cat'      => 'economia',
                'pretitle' => 'BANCO CENTRAL',
                'title'    => 'Reservas internacionales del BCB alcanzan su nivel más alto en tres años tras medidas económicas',
                'subtitle' => 'El ente emisor reporta un incremento de 800 millones de dólares en los últimos seis meses del ejercicio fiscal',
                'enter'    => 'El gerente general del BCB presentó los datos en rueda de prensa con medios especializados.',
                'body'     => '<p>El Banco Central de Bolivia (BCB) informó este martes que las reservas internacionales netas han alcanzado los 4.200 millones de dólares, el nivel más alto registrado en los últimos tres años, como resultado de las políticas de estabilización económica implementadas por el Ejecutivo.</p><p>El incremento de 800 millones de dólares en comparación con el mismo período del año anterior se debe principalmente al aumento de las exportaciones de minerales —especialmente litio, zinc y oro— y a la menor presión sobre el tipo de cambio.</p>',
                'author'   => 'Roberto Alvarado',
                'image'    => $images[9],
                'date'     => now()->subHours(3),
            ],
            [
                'cat'      => 'economia',
                'pretitle' => 'EXPORTACIONES',
                'title'    => 'Exportaciones de litio suben 45% en el primer trimestre impulsadas por demanda asiática',
                'subtitle' => 'China, Japón y Corea del Sur concentran el 78% de las compras del mineral estratégico boliviano',
                'enter'    => 'Las cifras superan las proyecciones del Ministerio de Economía para todo el año.',
                'body'     => '<p>Las exportaciones de litio boliviano registraron un incremento del 45% en el primer trimestre del año con respecto al mismo período de 2024, impulsadas por la creciente demanda de los mercados asiáticos para la fabricación de baterías de vehículos eléctricos.</p>',
                'author'   => 'Sandra Torrez',
                'image'    => $images[5],
                'date'     => now()->subHours(6),
            ],
            [
                'cat'      => 'economia',
                'pretitle' => 'INFLACIÓN',
                'title'    => 'Inflación cierra el mes en 3,2%, por debajo de las proyecciones del Ministerio de Economía',
                'subtitle' => 'Los alimentos y la energía mostraron la mayor moderación de precios en lo que va del año',
                'enter'    => 'El INE publicó los datos del Índice de Precios al Consumidor correspondientes al mes anterior.',
                'body'     => '<p>El Instituto Nacional de Estadística (INE) publicó este viernes los datos del Índice de Precios al Consumidor (IPC) correspondientes al mes de febrero, que muestran una inflación del 3,2%, por debajo del 4,1% proyectado por el Ministerio de Economía y Finanzas Públicas.</p>',
                'author'   => 'Víctor Mamani',
                'image'    => $images[8],
                'date'     => now()->subHours(10),
            ],

            // DEPORTES
            [
                'cat'      => 'deportes',
                'pretitle' => 'FÚTBOL BOLIVIANO',
                'title'    => 'Bolívar golea 4-0 al The Strongest en el clásico paceño y lidera el torneo Apertura',
                'subtitle' => 'Rodrigo Ramallo fue la figura del partido con un doblete y dos asistencias ante más de 35.000 espectadores',
                'enter'    => 'El estadio Hernando Siles fue un volcán en el clásico más esperado del año en La Paz.',
                'body'     => "<p>La Academia de Bolívar protagonizó una noche histórica en el estadio Hernando Siles al golear 4-0 a su eterno rival, The Strongest, en un clásico paceño que mantuvo en vilo a más de 35.000 espectadores durante los 90 minutos de juego.</p><p>Rodrigo Ramallo fue el gran artífice del triunfo con dos goles anotados en los minutos 23 y 67, además de dos asistencias que culminaron en los goles de sus compañeros Gastón Rodas (min. 41) y Fernando Martínez (min. 84).</p><p>Con este resultado, Bolívar se consolida como líder del Torneo Apertura con 28 puntos, cuatro por delante de su rival de este domingo.</p>",
                'author'   => 'Luis Patiño',
                'image'    => $images[4],
                'date'     => now()->subHours(14),
            ],
            [
                'cat'      => 'deportes',
                'pretitle' => 'SELECCIÓN BOLIVIANA',
                'title'    => 'La Verde empata 1-1 ante Venezuela y sigue en la lucha por la clasificación al Mundial',
                'subtitle' => 'Marcelo Moreno Martins marcó de cabeza en el segundo tiempo para rescatar un punto vital para Bolivia',
                'enter'    => 'Bolivia mantiene sus chances de clasificación con cuatro fechas restantes de las eliminatorias.',
                'body'     => '<p>La selección boliviana de fútbol empató 1-1 esta tarde ante Venezuela en el estadio Monumental de Maturín en un partido crucial de las eliminatorias sudamericanas rumbo al Mundial 2026.</p>',
                'author'   => 'Diego Antezana',
                'image'    => $images[4],
                'date'     => now()->subHours(20),
            ],
            [
                'cat'      => 'deportes',
                'pretitle' => 'BÁSQUETBOL',
                'title'    => 'Bolivia conquista la medalla de bronce en el Campeonato Sudamericano Sub-17',
                'subtitle' => 'La selección juvenil derrotó a Ecuador en un emocionante partido que definió el tercer lugar del torneo',
                'enter'    => 'El equipo fue ovacionado a su llegada al aeropuerto de El Alto por cientos de aficionados.',
                'body'     => '<p>La selección boliviana de básquetbol sub-17 obtuvo este sábado la medalla de bronce del Campeonato Sudamericano disputado en Buenos Aires al derrotar a Ecuador por 78-65 en un emocionante encuentro que demostró el gran nivel del baloncesto juvenil boliviano.</p>',
                'author'   => 'Jimena Vargas',
                'image'    => $images[4],
                'date'     => now()->subDays(1),
            ],

            // CULTURA
            [
                'cat'      => 'cultura',
                'pretitle' => 'CARNAVAL DE ORURO',
                'title'    => 'El Carnaval de Oruro 2025 bate récord con más de 600.000 visitantes en la entrada folclórica',
                'subtitle' => 'La danza de la Diablada y los Tobas encabezaron una noche mágica declarada Patrimonio de la Humanidad por la UNESCO',
                'enter'    => 'La Fraternidad Artística y Cultural La Diablada celebra su centenario con una presentación monumental.',
                'body'     => '<p>El Carnaval de Oruro 2025 rompió todos los récords de asistencia al recibir más de 600.000 visitantes nacionales e internacionales durante la entrada folclórica principal, que se extendió por más de 14 horas de espectáculo ininterrumpido en el casco histórico de la ciudad minera.</p><p>La Fraternidad Artística y Cultural La Diablada celebró su centenario de fundación con una presentación monumental que contó con 2.500 danzarines ataviados con trajes valorados en más de 15.000 bolivianos cada uno.</p>',
                'author'   => 'Claudia Espinoza',
                'image'    => $images[7],
                'date'     => now()->subHours(4),
            ],
            [
                'cat'      => 'cultura',
                'pretitle' => 'LITERATURA',
                'title'    => 'Escritora cochabambina gana el Premio Latinoamericano de Novela con su obra "Las raíces del altiplano"',
                'subtitle' => 'El jurado destacó la originalidad narrativa y la profundidad con que retrata la identidad boliviana contemporánea',
                'enter'    => 'Es la primera boliviana en obtener este galardón en los 25 años de historia del premio.',
                'body'     => '<p>La escritora cochabambina Daniela Suárez Aro se convirtió este martes en la primera boliviana en obtener el Premio Latinoamericano de Novela en los 25 años de historia del galardón, al ser la ganadora indiscutible con su obra <em>"Las raíces del altiplano"</em>.</p>',
                'author'   => 'Patricia Loayza',
                'image'    => $images[7],
                'date'     => now()->subHours(18),
            ],

            // TECNOLOGÍA
            [
                'cat'      => 'tecnologia',
                'pretitle' => 'SATÉLITE BOLIVIANO',
                'title'    => 'ENTEL anuncia la segunda generación del satélite Túpac Katari con mayor cobertura de internet',
                'subtitle' => 'El nuevo satélite triplicará la capacidad de banda ancha y llegará a comunidades rurales desconectadas',
                'enter'    => 'El proyecto recibirá financiamiento de la Agencia Espacial Europea y del fondo estatal boliviano.',
                'body'     => '<p>La Empresa Nacional de Telecomunicaciones (ENTEL) presentó este miércoles el proyecto del satélite Túpac Katari II, la segunda generación del primer satélite boliviano, que triplicará la capacidad de banda ancha y permitirá llevar conectividad de alta velocidad a 2.000 comunidades rurales que actualmente no tienen acceso a internet.</p>',
                'author'   => 'Marco Pedraza',
                'image'    => $images[5],
                'date'     => now()->subHours(7),
            ],
            [
                'cat'      => 'tecnologia',
                'pretitle' => 'INTELIGENCIA ARTIFICIAL',
                'title'    => 'Startup boliviana desarrolla IA para traducir quechua y aymara en tiempo real',
                'subtitle' => 'La herramienta ya procesa más de 50.000 conversaciones diarias y busca financiamiento internacional',
                'enter'    => 'El proyecto nació en las aulas de la UMSA y hoy tiene usuarios en toda Latinoamérica.',
                'body'     => '<p>Un equipo de ingenieros y lingüistas bolivianos egresados de la Universidad Mayor de San Andrés (UMSA) ha desarrollado una herramienta de inteligencia artificial capaz de traducir quechua y aymara al español en tiempo real, con una precisión del 94% en frases conversacionales cotidianas.</p>',
                'author'   => 'Natalia Cáceres',
                'image'    => $images[5],
                'date'     => now()->subHours(15),
            ],

            // INTERNACIONAL
            [
                'cat'      => 'internacional',
                'pretitle' => 'CUMBRE CELAC',
                'title'    => 'Líderes de América Latina y el Caribe se reúnen en La Paz para debatir la integración regional',
                'subtitle' => 'La agenda incluye comercio, cambio climático y cooperación en seguridad alimentaria',
                'enter'    => 'Bolivia ejerce la presidencia pro témpore de la CELAC por primera vez en su historia.',
                'body'     => '<p>La Paz se convierte esta semana en el centro político de América Latina y el Caribe al acoger la XXIV Cumbre de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC), a la que asistirán los jefes de Estado y de Gobierno de los 33 países miembros del bloque regional.</p>',
                'author'   => 'Rodrigo Calderón',
                'image'    => $images[8],
                'date'     => now()->subHours(9),
            ],
            [
                'cat'      => 'internacional',
                'pretitle' => 'CRISIS CLIMÁTICA',
                'title'    => 'Sequía en la Cuenca del Plata afecta el nivel del río Pilcomayo en el Chaco boliviano',
                'subtitle' => 'Comunidades indígenas del departamento de Tarija enfrentan escasez de agua por tercer año consecutivo',
                'enter'    => 'Expertos de la ONU visitaron la región para evaluar la situación humanitaria.',
                'body'     => '<p>La prolongada sequía que afecta a la Cuenca del Plata ha reducido el caudal del río Pilcomayo a niveles históricos, impactando directamente a más de 45.000 personas de comunidades indígenas weenhayek y tapiete en el departamento de Tarija.</p>',
                'author'   => 'Elena Burgoa',
                'image'    => $images[8],
                'date'     => now()->subDays(1)->subHours(3),
            ],

            // SOCIEDAD
            [
                'cat'      => 'sociedad',
                'pretitle' => 'SALUD PÚBLICA',
                'title'    => 'Bolivia lanza campaña nacional de vacunación contra el dengue en zonas tropicales',
                'subtitle' => 'El ministerio de Salud desplegará 3.000 brigadistas en Beni, Santa Cruz y Pando durante tres semanas',
                'enter'    => 'Los casos de dengue se incrementaron un 40% con respecto al mismo período del año anterior.',
                'body'     => '<p>El Ministerio de Salud y Deportes lanzó este lunes la campaña nacional de vacunación contra el dengue "Bolivia Protegida", que se implementará en los departamentos tropicales del país durante las próximas tres semanas con el objetivo de vacunar a más de 800.000 personas.</p>',
                'author'   => 'Carmen Jiménez',
                'image'    => $images[0],
                'date'     => now()->subHours(11),
            ],
            [
                'cat'      => 'sociedad',
                'pretitle' => 'EDUCACIÓN',
                'title'    => 'Más de 200.000 estudiantes inician el nuevo año escolar en modalidad presencial en todo el país',
                'subtitle' => 'El Ministerio de Educación reporta una cobertura del 97% en la entrega de desayuno escolar',
                'enter'    => 'El acto central de inicio de clases se realizó en la unidad educativa "Simón Bolívar" de Sucre.',
                'body'     => '<p>Bolivia inició este lunes el nuevo año escolar 2025 con más de 200.000 estudiantes retornando a las aulas en modalidad completamente presencial en las unidades educativas públicas y privadas de todo el territorio nacional.</p>',
                'author'   => 'Jorge Zenteno',
                'image'    => $images[0],
                'date'     => now()->subDays(2),
            ],

            // OPINIÓN
            [
                'cat'      => 'opinion',
                'pretitle' => 'EDITORIAL',
                'title'    => 'Bolivia en encrucijada: ¿recuperación económica o nueva recesión en el horizonte?',
                'subtitle' => 'El debate sobre el modelo económico boliviano cobra urgencia ante las señales mixtas de los indicadores macroeconómicos',
                'enter'    => 'Los datos recientes permiten tanto el optimismo moderado como la preocupación fundada.',
                'body'     => '<p>Bolivia se encuentra en uno de esos momentos históricos en que el rumbo de las decisiones económicas puede determinar el bienestar de una generación entera. Los indicadores macroeconómicos del primer trimestre ofrecen señales contradictorias que merecen un análisis sereno y desprejuiciado.</p><p>Por un lado, el incremento de las reservas internacionales y la moderación de la inflación sugieren que las medidas de estabilización están surtiendo efecto. Por otro, la presión sobre el tipo de cambio y la caída de la inversión privada alertan sobre fragilidades estructurales que no pueden seguir siendo postergadas.</p>',
                'author'   => 'Dr. Javier Morales Economista',
                'image'    => $images[1],
                'date'     => now()->subHours(16),
            ],
            [
                'cat'      => 'opinion',
                'pretitle' => 'COLUMNA',
                'title'    => 'El litio boliviano: riqueza sin industrialización no es desarrollo',
                'subtitle' => 'Exportar materia prima sin valor agregado repite el esquema colonial que Bolivia ha prometido superar',
                'enter'    => 'La industria del litio necesita una hoja de ruta industrial de largo plazo, no de corto electoralismo.',
                'body'     => '<p>Bolivia tiene las mayores reservas de litio del planeta. Este hecho, repetido en foros internacionales, conferencias académicas y discursos presidenciales, ha generado una expectativa enorme sobre el potencial del país en la era de la electromovilidad.</p>',
                'author'   => 'Dra. Silvia Torrejón Investigadora UMSA',
                'image'    => $images[1],
                'date'     => now()->subDays(1)->subHours(8),
            ],
        ];

        foreach ($articles as $index => $a) {
            $news = News::create([
                'user_id'          => $admin->id,
                'category_id'      => $catMap[$a['cat']],
                'source_id'        => $sourceIds[$index % count($sourceIds)],
                'url'              => \Illuminate\Support\Str::slug($a['title']),
                'pretitle'         => $a['pretitle'],
                'title'            => $a['title'],
                'path'             => '/noticias/' . \Illuminate\Support\Str::slug($a['title']),
                'subtitle'         => $a['subtitle'],
                'enter'            => $a['enter'],
                'body'             => $a['body'],
                'author'           => $a['author'],
                'publication_date' => $a['date'],
                'state'            => 'A',
            ]);

            Multimedia::create([
                'news_id'     => $news->id,
                'description' => $a['title'],
                'url'         => $a['image'],
                'type'        => 'image',
                'state'       => 'A',
            ]);
        }
    }
}

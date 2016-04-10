var app = angular.module('myApp');
app.constant("myMarkers", [{
                lat: 48.852179, 
                lng: 2.335257, 
                title:'Da Pietro', 
                category : 'Italien',
                quartier :'Saint-Germain',
                content:'<b>Da Pietro </b> : Pizza simple',
                icon: './images/icons/pizza2.png'
        },{
                lat: 48.850292, 
                lng: 2.330776, 
                title:'Pizza Chic', 
                category : 'Italien',
                quartier :'Saint-Germain',
                content:'<b>Pizza Chic </b> : resto sympa',
                icon: './images/icons/pizza2.png'
        },{
                lat: 48.851535, 
                lng: 2.338173, 
                title:'Marco Polo', 
                category : 'Italien',
                quartier :'Saint-Germain',
                content:'<b>Marco Polo </b> : Pâtes à la truffe',
                icon:'./images/icons/pasta2.png'
        },{
                lat: 48.852886, 
                lng: 2.331436, 
                title:'Bocca della Verita', 
                category : 'Italien',
                quartier :'Saint-Germain',
                content:'<b>Bocca della Verita</b> : Bonnes pâtes',
                icon:'./images/icons/pasta2.png'
        },{
                lat: 48.842103, 
                lng: 2.335142, 
                title:'Coffee Club',
                category: 'Americain',
                quartier :'Luxembourg-Sèvres',
                content:'<b>Coffee Club</b> : américain classique',
                icon:'./images/icons/hamburger.png'
        },{
                lat: 48.847043, 
                lng: 2.325963, 
                title:'Colorova', 
                category: 'Brunch',
                quartier :'Luxembourg-Sèvres',
                content:'<b>Colorova </b> : Pâtisserie, Brunch ou goûter très sympa',
                icon:'./images/icons/cookies.png'
        },{
                lat: 48.854928, 
                lng: 2.341023,
                title: 'Ze Kitchen Gallery', 
                category: 'Francais Chic',
                quartier :'Saint-Germain',
                content: '<b>Ze Kitchen Gallery</b> : mediterranéen, 1 etoile Michelin',
                icon: './images/icons/tuxedo.png'
       },{ 
                lat: 48.856560, 
                lng: 2.326689,
                title: 'Gaya', 
                category: 'Francais Chic',
                quartier :'Saint-Germain',
                content: '<b>Gaya </b> : 1 etoile Michelin', 
                icon: './images/icons/tuxedo.png'
       },{ 
                lat: 48.854450, 
                lng: 2.337923,
                title: 'Alcazar', 
                category: 'Francais Chic',
                quartier :'Saint-Germain',
                content: '<b>Alcazar </b> : cool et assez bon', 
                icon: './images/icons/tuxedo.png'
       },{ 
                lat: 48.854273,
                lng: 2.330790,
                title: 'Ralph', 
                category: 'Americain',
                quartier :'Saint-Germain',
                content: '<b>Le Ralph\'s</b> : américain chic', 
                icon: './images/icons/hamburger.png'
       },{      
                lat: 48.847343, 
                lng: 2.318231,
                title: 'Patisserie Cyril Lignac', 
                category: 'Goûter',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Patisserie Cyril Lignac </b> : à emporter',
                icon: './images/icons/cookies.png'
       },{ 
                lat: 48.853048, 
                lng: 2.338647,
                title: 'Eclair de Genie', 
                category: 'Goûter',
                quartier :'Saint-Germain',
                content: '<b>Eclair de Genie</b> : à emporter', 
                icon: './images/icons/dounoughts.png'
       },{
                lat: 48.852098, 
                lng: 2.346457,
                title: 'Odette',
                category: 'Goûter',
                quartier :'Quartier Latin',
                content: '<b>Odette</b> : choux à la crème',
                icon: './images/icons/dounoughts.png'
       },{
                lat: 48.849555, 
                lng: 2.349307,
                title: 'Aux Merveilleux de Fred',
                category: 'Goûter',
                quartier :'Quartier Latin',
                content: '<b>Aux Merveilleux de Fred</b> : classique',
                icon: './images/icons/dounoughts.png'
       },{
                lat: 48.840031, 
                lng: 2.335252,
                title: 'Il Forno di Napoli',
                category: 'Italien',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Il Forno di Napoli</b> : très bonne pizza, à emporter',
                icon: './images/icons/pizza2.png'
       },{ 
                lat: 48.852671, 
                lng: 2.331512,
                title: 'Blueberry',
                category: 'Japonais',
                quartier :'Saint-Germain',
                content: '<b>Blueberry </b> : maki bar',
                icon: './images/icons/sushi-2.png'
       },{ 
                lat: 48.853151, 
                lng: 2.337829,
                title: 'Ippudo',
                category:'Japonais',
                quartier :'Saint-Germain',
                content: '<b>Ippudo</b> : spécialiste du ramen',
                icon: './images/icons/sushi-3.png'
       },{ 
                lat: 48.852228,
                lng: 2.329959,
                title: 'Bar de la Croix Rouge',
                category: 'Terrasse',
                quartier :'Saint-Germain',
                content: '<b>Bar de la Croix Rouge </b> : Toasts, Terrasse',
                icon: './images/icons/sun.png'
       },{ 
                lat: 48.858175,
                lng: 2.356220,
                title: 'Benedict',
                category: 'Brunch',
                quartier :'Marais-Bastille',
                content: '<b>Benedict </b> : brunch, souvent la queue, oeufs pochés',
                icon: './images/icons/egg.png'
       },{
                lat: 48.857122, 
                lng: 2.358887,
                title: 'Miznon',
                category: 'Cacher',
                quartier :'Marais-Bastille',
                content: '<b>Miznon </b> : cacher, israelien, fermé samedi',
                icon: './images/icons/meat.png'
       },{
                lat: 48.854234, 
                lng: 2.350212,
                title: 'Bertie’s CupCakery',
                category: 'Goûter',
                quartier :'Marais-Bastille',
                content: '<b>Bertie’s CupCakery  </b> : meilleur cupcake Paris',
                icon: './images/icons/dounoughts.png'
       },{
                lat: 48.862378, 
                lng: 2.363778,
                title: 'Popelini',
                category: 'Goûter',
                quartier :'Marais-Bastille',
                content: '<b>Popelini </b> : choux à la crème',
                icon: './images/icons/cookies.png'
       },{
                lat: 48.842632, 
                lng: 2.328002,
                title: 'Café Atelier',
                category: 'Brunch',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Café Atelier </b> : bistrot, brunch, bon',
                icon: './images/icons/brunch.png' 
       },{
                lat: 48.844593, 
                lng: 2.331951,
                title: 'Jean Paul Hévin',
                category: 'Goûter',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Jean Paul Hévin</b> : Chocolatier, Macaron, Cheesecake',
                icon: './images/icons/cookies.png'
       },{
                lat: 48.853903,
                lng: 2.332277,
                title: 'Café Pouchkine',
                category: 'Goûter',
                quartier :'Saint-Germain',
                content: '<b>Café Pouchkine </b> : salon de thé franco-russe',
                icon: './images/icons/cookies.png'
       },{
                lat: 48.848880,lng: 2.334119,
                title: 'Angelina',
                category: 'Goûter',
                quartier :'Saint-Germain',
                content: '<b>Angelina</b> : peu de couvert, dans le Luxembourg',
                icon: './images/icons/tea.png'
       },{
                lat: 48.844716,
                lng: 2.332012,
                title: 'Amorino',
                category: 'Goûter',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Amorino </b> : glaces',
                icon: './images/icons/ice-cream.png'
       },{
                lat: 48.854374,
                lng: 2.333503,
                title: 'La Société',
                category: 'Francais Chic',
                quartier :'Saint-Germain',
                content: '<b>La Société</b> : costes, belle terrasse, cher',
                icon: './images/icons/tuxedo.png'
       },{
                lat: 48.865317,
                lng: 2.331279,
                title: 'Il Corte',
                category : 'Italien',
                quartier :'Rivoli-Opera',
                content: '<b>La Corte</b> : Italien, très bon, à reserver',
                icon: './images/icons/pasta2.png'
        },{
                lat: 48.888272,
                lng: 2.362532,
                title: 'Bob’s Bake Shop',
                category: 'Goûter',
                quartier :'Canal St-Martin/République',
                content: '<b>Bob’s Bake Shop </b> : tartes, bagels, toast, terrasse',
                icon: './images/icons/hot-dog.png'
       },{ 
                lat: 48.867657,
                lng: 2.331341,
                title: 'Little Georgette',
                category: 'Bistrot',
                quartier :'Rivoli-Opera',
                content: '<b>Little Georgette</b> : tapas francais',
                icon: './images/icons/hot-dog.png'
       },{
                lat: 48.866089,
                lng: 2.345371,
                title: 'La Cevicheria',
                category: 'Asiatique',
                quartier :'Rivoli-Opera',
                content: '<b>La Cevicheria</b> : spécialiste des ceviche',
                icon: './images/icons/sushi.png'
       },{
                lat: 48.872299,
                lng: 2.365012,
                title: 'Siseng',
                category: 'Asiatique',
                quartier :'Canal St-Martin/République',
                content: '<b>Siseng </b> : hamburger blanc, asiatique',
                icon: './images/icons/hamburger2.png'
       },{
                lat: 48.864677,
                lng: 2.333851,
                title: 'Sanukiya',
                category:'Japonais',
                quartier :'Rivoli-Opera',
                content: '<b>Sanukiya</b> : spécialiste du Udon',
                icon: './images/icons/sushi.png'
       },{
                lat: 48.877078,
                lng: 2.340834,
                title: 'Caillebotte',
                category: 'Bistrot',
                quartier :'Pigalle-Montmartre',
                content: '<b>Caillebotte</b> : Bistrot branché, beau décor',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.879298,
                lng: 2.334576,
                title: 'Les Canailles',
                category: 'Bistrot',
                quartier :'Pigalle-Montmartre',
                content: '<b>Les Canailles</b> : Bistrot gastro, pas très cher',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.858413,
                lng: 2.302294,
                title: 'Fables de la Fontaine',
                quartier :'Invalides/Champs de Mars',
                category: 'Francais Chic',
                content: '<b>Fables de la Fontaine</b> : restaurant gastro, pas cher',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.851887, 
                lng: 2.344328,
                title: 'Lengue',
                category:'Japonais',
                quartier :'Quartier Latin',
                content: '<b>Lengue</b> : vrai japonais',
                icon: './images/icons/sushi.png'
       },{
                lat: 48.849684, 
                lng: 2.354449,
                title: 'Restaurant A.T',
                category:'Japonais',
                quartier :'Quartier Latin',
                content: '<b>Restaurant A.T </b> : japonais, fusion food, chic',
                icon: './images/icons/tuxedo.png'
       },{
                lat: 48.869122, 
                lng: 2.368551,
                title: 'Banh Me Tender',
                quartier :'Canal St-Martin/République/Nation',
                category:'Asiatique',
                content: '<b>Banh Me Tender</b> : asian street food & vinyl corner',
                icon: './images/icons/sushi.png'
       },{
                lat: 48.888468, 
                lng: 2.335438,
                title: 'Très Particulier',
                category:'Francais Chic',
                quartier :'Pigalle-Montmartre',
                content: '<b>Très Particulier</b> : dans un hotel particulier',
                icon: './images/icons/tuxedo.png'
       },{
                lat: 48.883418, 
                lng: 2.304452,
                title: 'Papillon',
                category:'Francais Chic',
                content: '<b>Papillon</b> : haute-gastronomie',
                icon: './images/icons/tuxedo.png'
       },{
                lat: 48.883418, 
                lng: 2.304452,
                title: 'Renoma',
                category:'Brunch',
                quartier :'8e/17e',
                content: '<b>Renoma</b> : brunch américain',
                icon: './images/icons/brunch.png'
       },{
                lat: 48.851686, 
                lng: 2.323227,
                title: 'Marcel',
                category:'Brunch',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Marcel</b> : brunch',
                icon: './images/icons/brunch.png'
       },{
                lat: 48.854139, 
                lng: 2.336889,
                title: 'Freddy\'s',
                category:'Japonais',
                quartier :'Saint-Germain',
                content: '<b>Freddy\'s</b> : bar à tapas, un peu japonais',
                icon: './images/icons/hot-dog.png'
       },{
                lat: 48.884705, 
                lng: 2.298654,
                title: 'Kahn',
                category:'Cacher',
                quartier :'8e/17e',
                content: '<b>Kahn</b> : cacher, deli',
                icon: './images/icons/meat.png'
       },{
                lat:48.846617, 
                lng: 2.369001,
                title: 'She\’s Cake',
                category:'Goûter',
                quartier :'Marais-Bastille',
                content: '<b>She\’s Cake</b> : meilleur cheesecake Paris',
                icon: './images/icons/cookies.png'
       },{
                lat:48.880513,
                lng: 2.339893,
                title: 'Le Pantruche',
                category:'Bistrot',
                quartier :'Pigalle-Montmartre',
                content: '<b>Le Pantruche</b> : un des meilleurs bistrots de Paris',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.879500, 
                lng: 2.339606,
                title: 'Maison Mère',
                quartier :'Pigalle-Montmartre',
                category:'Americain',
                content: '<b>Maison Mère</b> : simple, très bon, fish&chips',
                icon: './images/icons/hamburger.png'
       },{
                lat: 48.864628, 
                lng: 2.361424,
                title: 'The Broken Arm',
                category:'Concept Store',
                quartier :'Marais-Bastille',
                content: '<b>The Broken Arm</b> : concept store, fringues, breakfast et dejeuner',
                icon: './images/icons/concept.png'
       },{
                lat: 48.860817, 
                lng: 2.378819,
                title: 'Salt Restaurant',
                category: 'Bistrot',
                quartier :'Canal St-Martin/République/Nation',
                content: '<b>Salt Restaurant</b> : bistrot, specialisé poisson, midi/soir',
                icon: './images/icons/fish.png'
       },{
                lat: 48.862198, 
                lng: 2.362912,
                title: 'La Petite Table',
                category: 'Bistrot',
                quartier :'Marais-Bastille',
                content: '<b>La Petite Table</b> : brunch, bistrot, midi/soir',
                icon: './images/icons/hot-dog.png'
       },{
                lat: 48.845475, 
                lng: 2.328716,
                title: 'Ikra',
                category: 'Russe',
                quartier :'Saint-Germain',
                content: '<b>Ikra</b> : bar/restaurant russe, avec musique',
                icon: './images/icons/fish.png'
       },{
                lat: 48.852953, 
                lng: 2.367431,
                title: 'Bagel Way',
                category: 'Americain',
                quartier :'Marais-Bastille',
                content: '<b>Bagel Way</b> : bagel, viande cacher, midi/goûter',
                icon: './images/icons/bagel.png'
       },{
                lat: 48.854847, 
                lng: 2.338514,
                title: 'L\'heure Gourmande',
                category: 'Brunch',
                quartier :'Saint-Germain',
                content: '<b>L\'heure Gourmande</b> : brunch, salon de thé, tous les jours',
                icon: './images/icons/tea.png'
       },{
                lat: 48.849284, 
                lng: 2.340271,
                title: 'Regal',
                category: 'Brunch',
                quartier :'Saint-Germain',
                content: '<b>Regal</b> : brunch/bistrot , branché, bar à vin',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.849284, 
                lng: 2.340271,
                title: 'Un Dimanche à Paris',
                category: 'Brunch',
                quartier :'Saint-Germain',
                content: '<b>Un Dimanche à Paris</b> : salon de thé, style Angelina, brunch',
                icon: './images/icons/tea.png'
       },{
                lat: 48.865503, 
                lng: 2.303247,
                title: 'Manko',
                category: 'Péruvien',
                quartier :'8e/17e',
                content: '<b>Manko</b> : branché, péruvien, cabaret après',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.850670, 
                lng: 2.271309,
                title: 'L\'Acajou',
                category: 'Francais Chic',
                quartier :'16e',
                content: '<b>L\'Acajou</b> : francais, branché, petites portions',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.866412, 
                lng: 2.369898,
                title: 'Café Chilango',
                category: 'Mexicain',
                quartier :'Canal St-Martin/République',
                content: '<b>Café Chilango</b> : mexicain, taco bar, animé',
                icon: './images/icons/taco.png',
                img:'./images/chillango.png'
       },{
                lat: 48.855719, 
                lng: 2.362830,
                title: 'La Mangerie',
                category: 'Bistrot',
                quartier :'Marais-Bastille',
                content: '<b>La Mangerie</b> : tapas originaux, animé, bcp de viande',
                icon: './images/icons/hot-dog.png'
       },{
                lat: 48.854975, 
                lng: 2.337910,
                title: 'Prescription',
                category: 'Bar',
                quartier :'Saint-Germain',
                content: '<b>Prescription</b> : bar à cocktail',
                icon: './images/icons/cocktail.png'
       },{
                lat: 48.857403, 
                lng: 2.359054,
                title: 'As du Falafel',
                category: 'Cacher',
                quartier :'Marais-Bastille',
                content: '<b>As du Falafel</b> : israelien, cacher',
                icon: './images/icons/meat.png'
       },{
                lat: 48.863016, 
                lng: 2.363991,
                title: 'Ob-La-Di',
                category: 'Cacher',
                quartier :'Marais-Bastille',
                content: '<b>Ob-La-Di</b> : coffee shop, toast, bio, granolat',
                icon: './images/icons/tea.png'
       },{
                lat: 48.863604,
                lng: 2.367232,
                title: 'Clown Bar',
                category: 'Bistrot',
                quartier :'Marais-Bastille',
                content: '<b>Clown Bar</b> : bistrot, branché, simple, raffiné',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.853939, 
                lng: 2.323981,
                title: 'Jacques Genin',
                category: 'Goûter',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Jacques Genin</b> : chocolatier, patisserie, confiserie',
                icon: './images/icons/cookies.png'
       },{
                lat: 48.855178,
                lng: 2.330282,
                title: 'Clover',
                category: 'Francais Chic',
                quartier :'Saint-Germain',
                content: '<b>Clover</b> : francais, gastro, à reserver',
                icon: './images/icons/tuxedo.png'
       },{
                lat: 48.8506042,
                lng: 2.3707001,
                title: 'Blé Sucré',
                category: 'Boulangerie Patisserie',
                quartier :'Marais-Bastille',
                content: '<b>Blé Sucré</b> : patisserie avec terrasse, sandwich, journée',
                icon: './images/icons/cookies.png'
       },{
                lat: 48.8560346,
                lng: 2.3228416,
                title: 'Marzo',
                category: 'Italien',
                quartier :'Saint-Germain',
                content: '<b>Marzo</b> : pizzeria, même cuisinier que Pizza Chic, dimanche',
                icon: './images/icons/pizza2.png'
       },{
                lat: 48.8535622,
                lng: 2.3808226,
                title: 'Clamato',
                category: 'Francais',
                quartier :'Canal St-Martin/République/Nation',
                content: '<b>Clamato</b> : bon resto de poisson, fruits de mer, branché',
                icon: './images/icons/fish.png'
       },{
                lat: 48.8655806,
                lng: 2.3369467,
                title: 'Ellsworth',
                category: 'Francais',
                quartier :'Louvre/Palais-Royal',
                content: '<b>Ellsworth</b> : diner raffiné, francais, américain, brunch',
                icon: './images/icons/vine-glass.png'
       },{
                lat: 48.861717,
                lng: 2.365049,
                title: 'Le Mary Celeste',
                category: 'Francais',
                quartier :'Marais-Bastille',
                content: '<b>Le Mary Celeste</b> : bar à cocktails et restaurant branché, poissons',
                icon: './images/icons/cocktail.png'
       },{
                lat: 48.8341004,
                lng: 2.3221806,
                title: 'Les Rouquins',
                category: 'Francais',
                quartier :'Luxembourg-Sèvres',
                content: '<b>Les Rouquins</b> : bar à vins, fromages',
                icon: './images/icons/vine-glass.png'
       }]);
angular.module('myApp', []).
directive('myMap', function() {
    // directive link function
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        
        // map config
        var mapOptions = {
            center: new google.maps.LatLng(48.842605, 2.337674),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: true
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, content,link) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: link
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
            
            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }

        //function searchMarker(name){}
        
        // show the map and place some markers
        initMap();
        
        setMarker(map, new google.maps.LatLng(48.852179, 2.335257), 'Da Pietro', '<b>Da Pietro </b>: Pizza simple','images/icons/pizza2.png');
        setMarker(map, new google.maps.LatLng(48.851535, 2.338173), 'Marco Polo', '<b>Marco Polo </b>: Pâtes à la truffe','images/icons/pasta2.png');
        setMarker(map, new google.maps.LatLng(48.850292, 2.330776), 'Pizza Chic', '<b>Pizza Chic </b>: resto sympa','images/icons/pizza2.png');
        setMarker(map, new google.maps.LatLng(48.852886, 2.331436), 'Bocca della Verita', '<b>Bocca della Verita</b> : Bonnes pâtes','images/icons/pasta2.png');
        setMarker(map, new google.maps.LatLng(48.842103, 2.335142), 'Coffee Club', '<b>Coffee Club</b> : américain classique','images/icons/hamburger.png');
        setMarker(map, new google.maps.LatLng(48.847043, 2.325963), 'Colorova', '<b>Colorova </b>: Pâtisserie, Brunch ou Gouter très sympa','images/icons/cookies.png');
        setMarker(map, new google.maps.LatLng(48.854928, 2.341023), 'Ze Kitchen Gallery', '<b>Ze Kitchen Gallery</b> : mediterranéen, 1 etoile Michelin','images/icons/tuxedo.png');
        setMarker(map, new google.maps.LatLng(48.856560, 2.326689), 'Gaya', '<b>Gaya </b>: 1 etoile Michelin','images/icons/tuxedo.png');
        setMarker(map, new google.maps.LatLng(48.854450, 2.337923), 'Alcazar', '<b>Alcazar </b>: cool et assez bon','images/icons/tuxedo.png');
        setMarker(map, new google.maps.LatLng(48.854273, 2.330790), 'Ralph', '<b>Le Ralph\'s</b>: américain chic','images/icons/hamburger.png');
        setMarker(map, new google.maps.LatLng(48.847343, 2.318231), 'Marco Polo', '<b>Patisserie Cyril Lignac </b>: à emporter','images/icons/cookies.png');
        setMarker(map, new google.maps.LatLng(48.853048, 2.338647), 'Pizza Chic', '<b>Eclair de Genie</b>: à emporter','images/icons/cookies.png');
        setMarker(map, new google.maps.LatLng(48.852098, 2.346457), 'Bocca della Verita', '<b>Odette</b> : choux à la crème','images/icons/dounoughts.png');
        setMarker(map, new google.maps.LatLng(48.849555, 2.349307), 'Coffee Club', '<b>Aux Merveilleux de Fred</b> : classique','images/icons/dounoughts.png');
        setMarker(map, new google.maps.LatLng(48.840031, 2.335252), 'Coffee Club', '<b>Il Forno di Napoli</b> : très bonne pizza, à emporter','images/icons/pizza2.png');
        setMarker(map, new google.maps.LatLng(48.852671, 2.331512), 'Colorova', '<b>Blueberry </b>: maki bar','images/icons/sushi-2.png');
        setMarker(map, new google.maps.LatLng(48.853151, 2.337829), 'Ze Kitchen Gallery', '<b>Ippudo</b> : spécialiste du ramen','images/icons/sushi-3.png');
        setMarker(map, new google.maps.LatLng(48.852228, 2.329959), 'Gaya', '<b>Bar de la Croix Rouge </b>: Toasts, Terrasse','images/icons/sun.png');
        setMarker(map, new google.maps.LatLng(48.858175, 2.356220), 'Alcazar', '<b>Benedict </b>: brunch, souvent la queue, oeufs pochés','images/icons/egg.png');
        setMarker(map, new google.maps.LatLng(48.857122, 2.358887), 'Colorova', '<b>Miznon </b>: cacher, israelien, fermé samedi','images/icons/meat.png');
        setMarker(map, new google.maps.LatLng(48.854234, 2.350212), 'Colorova', '<b>Bertie’s CupCakery  </b>: meilleur cupcake Paris','images/icons/dounoughts.png');
        setMarker(map, new google.maps.LatLng(48.862378, 2.363778), 'Colorova', '<b>Popelini </b>: choux à la crème','images/icons/cookies.png');
        setMarker(map, new google.maps.LatLng(48.842632, 2.328002), 'Colorova', '<b>Café Atelier </b>: bistro, brunch, bon','images/icons/brunch.png'); 
        setMarker(map, new google.maps.LatLng(48.844593, 2.331951), 'Bocca della Verita', '<b>Jean Paul Hévin</b> : Chocolatier, Macaron, Cheesecake','images/icons/cookies.png');
        setMarker(map, new google.maps.LatLng(48.853903, 2.332277), 'Coffee Club', '<b>Café Pouchkine </b> : salon de thé franco-russe','images/icons/cookies.png');
        setMarker(map, new google.maps.LatLng(48.848880, 2.334119), 'Coffee Club', '<b>Angelina</b> : peu de couvert, dans le Luxembourg','images/icons/tea.png');
        setMarker(map, new google.maps.LatLng(48.844716, 2.332012), 'Colorova', '<b>Amorino </b>: glaces','images/icons/ice-cream.png');
        setMarker(map, new google.maps.LatLng(48.854374, 2.333503), 'Ze Kitchen Gallery', '<b>La Société</b> : costes, belle terrasse, cher','images/icons/tuxedo.png');
        setMarker(map, new google.maps.LatLng(48.865317, 2.331279), 'Gaya', '<b>La Corte</b>: Italien, très bon, à reserver','images/icons/pasta2.png');
        setMarker(map, new google.maps.LatLng(48.888272, 2.362532), 'Alcazar', '<b>Bob’s Bake Shop </b>: tartes, bagels, toast, terrasse','images/icons/hot-dog.png');
        setMarker(map, new google.maps.LatLng(48.867657, 2.331341), 'Colorova', '<b>Little Georgette</b>: tapas francais','images/icons/hot-dog.png');
        setMarker(map, new google.maps.LatLng(48.866089, 2.345371), 'Colorova', '<b>La Cevicheria</b>: spécialiste des ceviche','images/icons/sushi.png');
        setMarker(map, new google.maps.LatLng(48.872299, 2.365012), 'Colorova', '<b>Siseng </b>: hamburger blanc, asiatique','images/icons/hamburger2.png');
        setMarker(map, new google.maps.LatLng(48.864677, 2.333851), 'Colorova', '<b>Sanukiya</b>: spécialiste du Udon)','images/icons/sushi.png');
        setMarker(map, new google.maps.LatLng(48.877078, 2.340834), 'Colorova', '<b>Caillebotte</b>: Bistrot branché, beau décor','images/icons/vine-glass.png');
        setMarker(map, new google.maps.LatLng(48.879298, 2.334576), 'Colorova', '<b>Les Canailles</b>: Bistrot gastro, pas très cher','images/icons/vine-glass.png');
        setMarker(map, new google.maps.LatLng(48.858413, 2.302294), 'Colorova', '<b>Fables de la Fontaine</b>: restaurant gastro, pas cher)','images/icons/vine-glass.png');
        

    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
});


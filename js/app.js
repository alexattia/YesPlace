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
        
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
});


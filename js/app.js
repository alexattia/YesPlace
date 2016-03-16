var app = angular.module('myApp', []);
angular.module('myApp').controller("myController", ["$scope", "myMarkers", function($scope, myMarkers){
    $scope.markers= myMarkers; 
    $scope.searchMarkers = function(arr,obj){
// loop through your markers array and compare with the entered value in text box.

            for(var i=0; i<arr.length; i++) {
                if (arr[i] == obj) return true;
            }
}
}]);

app.directive('myMap', ["myMarkers", function(myMarkers) {
    // directive link function
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        
        // map config
        var mapOptions = {
            center: new google.maps.LatLng(48.849005, 2.337674),
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
        function returnMarker(){
           window.alert(markers[0].title);
        }
        // show the map and place some markers
        initMap();
        
        for (var i = 0; i < 60; i++) {
            setMarker(map, new google.maps.LatLng(myMarkers[i].lat, myMarkers[i].lng), myMarkers[i].title, myMarkers[i].content, myMarkers[i].icon);
        }
        
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}]);

app.filter('marksersFilter', function () {
        return function (objects, markerObj) {
            if (!objects)
                return [];
            else if (!(markerObj))
                return objects;
            else {
                var result = [];
                for (var i = 0; i < objects.length; i++) {
                    // do comparision here, if found push object to result array
                    if (markerObj.title === objects[i].title) {
                        result.push(objects[i]); 
                        }                       
                }
                return result;
            }
        }
    });
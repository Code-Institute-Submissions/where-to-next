        function initMap() {
            // map options 
            var options = {
                zoom: 8,
                center: { lat: 52.9548, lng: -1.1581 }
            }
            // new map
            var map = new google.maps.Map(document.getElementById(`map`), options);
            // listen for click on map

            google.maps.event.addListener(map, 'click',
                function (event) {
                    // add marker
                    addMarker({ coords: event.latLng });
                });


            
            // array of markers
            var markers = [{
                coords: { lat: 53.0007, lng: -1.1319 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/poi.png',
                content: '<h1>Arnold, Nottingham</h1>'
            }, {
                coords: { lat: 53.3811, lng: -1.4701 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/poi.png',
                content: '<h1>Sheffield</h1>'
            }, { coords: { lat: 52.4862, lng: -1.8904 } }, { coords: { lat: 52.9225, lng: -1.4746 } }];

            // loop through markers

            for (var i = 0; i < markers.length; i++) {
                addMarker(markers[i]);
            }

            // add maeker function
            function addMarker(props) {
                var marker = new google.maps.Marker({
                    position: props.coords,
                    map: map,
                    // icon:props.iconImage
                });
                // check for customer icon
                if (props.iconImage) {
                    // set icon image
                    marker.setIcon(props.iconImage);
                }

                // check content
                if (props.content) {
                    // info window on click
                    var infoWindow = new google.maps.InfoWindow({
                        content: props.content
                    });

                    // listens for click for info window
                    marker.addListener('click', function () {
                        infoWindow.open(map, marker);
                    });
                }
            }
        }


// Main map to center to Europe: lat: 54.5260 lng: 15.2551

// Colmar, france: lat: 48.0794 lng: 7.3585

// Athens, Greece: lat:37.9838  lng: 23.7275

// Tbilisi, Georgia: lat: 41.7151  lng: 44.8271

// Vienna, Austria: lat:48.2082  lng:16.3738

// Cascais, Portugal: lat:38.6971   lng: 9.4223

// Sibiu, Romania: lat:45.7936  lng:24.1213

// Namur, Belgium: lat:50.4674  lng: 4.8720

// Rijeka, Croatia: lat:45.3271  lng: 14.4422

// Paris, France: lat:48.8566  lng:2.3522

// Bydgoszcz, Poland: lat:53.1235  lng: 18.0084

// markers:

// food: icon40 - http://maps.google.com/mapfiles/kml/pal2/icon40.png
// Christmas tree: icon12 - http://maps.google.com/mapfiles/kml/pal2/icon12.png
// bed: icon28 - http://maps.google.com/mapfiles/kml/pal2/icon28.png
// drink/alcohol: icon27 - http://maps.google.com/mapfiles/kml/pal2/icon27.png
// drink/coffee: icon62 - http://maps.google.com/mapfiles/kml/pal2/icon62.png
// church: icon11 - http://maps.google.com/mapfiles/kml/pal2/icon11.png
// flag: icon13 -  http://maps.google.com/mapfiles/kml/pal2/icon13.png
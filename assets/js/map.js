        // Main default map of Europe
        
        function initMap() {
            // map options 
            var options = {
                zoom: 4,
                center: { lat: 54.5260, lng: 15.2551 }
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
                coords: { lat: 48.07368, lng: 7.35665 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Colmar, France</h2>'
            }, {
                coords: { lat: 37.9838, lng: 23.7275 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Athens, Greece</h2>'
            },
        {
                coords: { lat: 41.7151, lng: 44.8271 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Tbilisi, Georgia</h2>'
            },
        {
                coords: { lat: 48.2082, lng: 16.3738 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Vienna, Austria</h2>'
            },
        {
                coords: { lat: 45.7936, lng: 24.1213 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Sibiu, Romania</h2>'
            },
        {
                coords: { lat: 38.6971, lng: 9.4223 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Cascais, Portugal</h2>'
            },
        {
                coords: { lat: 45.3271, lng: 14.4422 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Rijeka, Croatia</h2>'
            },
        {
                coords: { lat: 48.8566, lng: 2.3522 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Paris, France</h2>'
            }, 
        {
                coords: { lat: 53.1235, lng: 18.0084 },
                iconImage: 'http://maps.google.com/mapfiles/kml/paddle/grn-stars.png',
                content: '<h2>Bydgoszcz, Poland</h2>'
            },  ];

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

//colmar - France map
// credits:booking.com
 function initMap() {
            // map options 
            var options = {
                zoom: 15,
                center: { lat: 48.0794, lng: 7.3585 }
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

            // credit: links to booking.com

            var markers = [{
                coords: { lat: 48.07368, lng: 7.35665 },
                iconImage: 'http://maps.google.com/mapfiles/kml/pal2/icon28.png',
                content: '<h3>Hotel Le Marechal - Les Collectionneurs</h3><p>From €95/night</p><p> Hostellerie Le Maréchal is set on the canal</p><p>Traditional and regional gourmet cuisine </p><a href="https://www.booking.com/hotel/fr/hostellerie-le-marechal.en-gb.html?aid=356980;label=gog235jc-1DCAsoTUIXaG9zdGVsbGVyaWUtbGUtbWFyZWNoYWxIM1gDaFCIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AquB9P4FwAIB0gIkNGQ4ODFkMDMtMmEzZS00Y2ZhLWI2M2EtZDg3ZTFiMGQ2YTEy2AIE4AIB;sid=8f5d6c7740e4b688a551571a0ae3738e;dist=0&keep_landing=1&sb_price_type=total&type=total&">View on Booking.com</a>'
            }, {
                coords: { lat: 48.07656, lng: 7.35861 },
                iconImage: 'http://maps.google.com/mapfiles/kml/pal2/icon40.png',
                content: '<h3>Restaurant La Soï</h3><p>They only serve tarte flambée but it is the best tarte flambée in town!</p><p>Flammekueche, Flammkuchen or tarte flambée is a speciality of the historic regions of Alsace, Saarland, Baden and Pfalz at the French-German border region.</p><a href="https://www.lasoicolmar.fr/">www.lasoicolmar.fr/</a>'
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
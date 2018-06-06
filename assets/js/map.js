function mapAllRestaurants(m, s) {
    list.forEach(listitem => {
        console.log(listitem)
        s.getDetails({
            placeId: listitem.place_id
        }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: m,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function () {

                    // set title 
                    $(".map .highlight-card .card-content .card-title").empty();
                    $(".map .highlight-card .card-content .card-title").append(place.name);

                    // set description
                    $(".map .highlight-card .card-content p").empty();
                    $(".map .highlight-card .card-content p").append($("." + listitem.classname + " .player-headline")[0].innerText);

                    // button 
                    $(".map .highlight-card .card-action a").click(function () {
                        $('html, body').animate({
                            scrollTop: $("." + listitem.classname).offset().top
                        }, 1000);
                    })
                });
            }
        })
    });
}

function searchInList(name) {
    return jQuery.grep(list, function (listitem) {
        if (listitem.name == name) {
            return listitem;
        }
    });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 53.518,
            lng: -113.511
        },
        zoom: 10,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    mapAllRestaurants(map, service);

    // set featured title 
    $(".map .highlight-card .card-content .card-title").empty();
    $(".map .highlight-card .card-content .card-title").append(featuredPlace.name);

    // set featured description
    $(".map .highlight-card .card-content p").empty();
    $(".map .highlight-card .card-content p").append($("." + featuredPlace.classname + " .player-headline")[0].innerText);

    // button 
    $(".map .highlight-card .card-action a").click(function () {
        $('html, body').animate({
            scrollTop: $("." + featuredPlace.classname).offset().top
        }, 1000);
    })
}
var gmarkers = []
var map = null
var markerclusterer = null
var image = '//s3.eu-west-2.amazonaws.com/toast-stores-files/images/TOAST_Standalone.png'

function showHideMap(){

   $( "#map_canvas_shop" ).slideToggle( "slow", function() {
    // Animation complete.
  });
}

function showStoreMap(){
   $(".mapLink").hide();
   $(".hiddenMap").css('height', '400px');
   initialize()
}

function createMarker(latlng, name, html) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        icon:  image,
        zIndex: Math.round(latlng.lat()*-100000)<<5
    })

    gmarkers.push(marker)
}

function initialize() {

  if (window.innerWidth < 769) {
    zoomLevel = 17
  } else {
    zoomLevel = 17
  }

  var myOptions = {
    zoom: zoomLevel,
    center: new google.maps.LatLng(markers[0], markers[1]),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles:[
    {
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -100
            },
            {
                "gamma": 0.54
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#4d4946"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "gamma": 0.48
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "gamma": 7.18
            }
        ]
    }
]
  }
  map = new google.maps.Map(document.getElementById("map_canvas_shop"), myOptions)


  

  
    var sites = markers
    var lat = sites[0]
    var lng = sites[1]
    var point = new google.maps.LatLng(lat,lng)
    var id = sites[0]
    //var country = "Some stuff"
    var html= id
    var marker = createMarker(point,id,html)
  


  var mcOptions = {
            //imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m',
          styles:[{
          
          url: "https://s3.eu-west-2.amazonaws.com/toast-stores-files/images/TOAST_Standalone.png",
                width: 40,
                height:40,
                fontFamily:"arial",
                textSize:0,
                textColor:"black",
                //color: #00FF00,
          }]
          
        };

  markerCluster = new MarkerClusterer(map, gmarkers, mcOptions)  
}


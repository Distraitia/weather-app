var bwLat = 33.886586;
var bwLng = -84.461214;
var mapCanvas = $("#map-canvas"),
    searchBar = $("#searchBar");
var btn = $(".bw-btn"),
    paragraph = $("#weather");

$(document).on("ready",function() {
    console.log("Document is ready");
    btn.on("click",function() {
        // e.preventDefault();
        console.log("test");
    });
});

// Google Maps stuff
function initialize() {
    var mapOptions = {
        // center: { lat: 33.886586, lng: -84.461214},
        // center: new google.maps.LatLng(33.886586,-84.461214),
        center: new google.maps.LatLng(bwLat,bwLng),
        zoom: 16,
        scaleControl: true,
        zoomControl: true
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Click to zoom'
    });

    google.maps.event.addListener(map, 'center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the marker.
        window.setTimeout(function() {
            map.panTo(marker.getPosition());
        }, 2000);
    });

    google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBar);

    var searchBox = new google.maps.places.SearchBox(searchBar);

    // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });

  // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
}
google.maps.event.addDomListener(window, 'load', initialize);

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
    'callback=initialize';
    document.body.appendChild(script);
}
// window.onload = loadScript;
// End Google Maps stuff



// Forecast.io stuff
// function b() {

//     var apiKey = 'edc37d1226a5c86f5dcf083fb7b83533';
//     var url = 'https://api.forecast.io/forecast/';
//     var lati = 33.886586;
//     var longi = -84.461214;
//     var data;

//     $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
//         //console.log(data);
//         $('#weather').html('and the temperature is: ' + data.currently.temperature);
//     });
// }
// End original Forecast.io stuff

function forecast(e) {
    console.log("forecast();")
    e.preventDefault();

    var apiKey = 'edc37d1226a5c86f5dcf083fb7b83533';
    var url = 'https://api.forecast.io/forecast/';
    var lati = 33.886586;
    var longi = -84.461214;
    var data;

    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
        //console.log(data);
        paragraph.html('and the temperature is: ' + data.currently.temperature);
    });
}

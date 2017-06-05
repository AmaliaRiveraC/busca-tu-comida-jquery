

var cargarPagina = function() {

}

  function initMap() {
        var uluru = {lat: 23.3847514, lng: -111.5833876};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {

        var uluru = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      });
    } else {
      alert('Error: The Geolocation service failed.') ;
      alert('Error: Your browser doesn\'t support geolocation.');
    }
  }

$(document).ready(cargarPagina);
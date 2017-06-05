function initMap() {
  var uluru = {
    lat: 23.3847514,
    lng: -111.5833876
  };
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
    alert('Error: The Geolocation service failed.');
    alert('Error: Your browser doesn\'t support geolocation.');
  }
}

var restaurantes = [

  {
    "nombre": "Parrilla Quilmes Condesa",
    "tipo": "argentina",
    "direccion": "Alfonso Reyes #193, Cuauhtémoc, Hipodromo, Hipódromo, 06100 Ciudad de México, CDMX",
    "foto": "assets/quilmes.jpg",
    "coordenadas": {
      lat: 19.3863776,
      lng: -99.1899997
    }
	},
  {
    "nombre": "Canto de Sirenas",
    "tipo": "mariscos a la veracruzana",
    "direccion": "Atzayacatl 89, Tlaxpana, 11370 Ciudad de México, CDMX",
    "foto": "assets/sirenas.jpg",
    "coordenadas": {
      lat: 19.4356548,
      lng: -99.1692102
    }
	},
  {
    "nombre": "KOLOBOK Santa Maria",
    "tipo": "rusa",
    "direccion": "Calle Salvador Díaz Mirón 87, Sta María la Ribera, 06400 Ciudad de México, CDMX",
    "foto": "assets/kolobok.jpg",
    "coordenadas": {
      lat: 19.4487707,
      lng: -99.1583821,
    }
	},
  {
    "nombre": "Restaurante Mog Bistro",
    "tipo": "oriental",
    "direccion": "Frontera 168, Roma Norte, Roma Nte., 06700 Coauhtemoc, CDMX",
    "foto": "assets/mog-bistro.jpg",
    "coordenadas": {
      lat: 19.4161998,
      lng: -99.1572208
    }
	},
  {
    "nombre": "Maare Hanal",
    "tipo": "yucateca",
    "direccion": "Dr. Atl 183, Sta María la Ribera, 06400 Ciudad de México, CDMX",
    "foto": "assets/mare.jpg",
    "coordenadas": {
      lat: 19.4488278,
      lng: -99.1584175
    }
	},
  {
    "nombre": "La Nueva Libanesa",
    "tipo": "libanesa",
    "direccion": "Dr José María Vertiz 1111, Vértiz Narvarte, 03600 Benito Juárez, CDMX",
    "foto": "assets/libanesa.jpg",
    "coordenadas": {
      lat: 19.3811153,
      lng: -99.1553454
    }
	}
];

var plantillaRestaurantes =
  '<div class="card">' +
  '<div class="card-divider">' +
  '<h4>__nombre__</h4>' +
  '</div>' +
  '<img src="__foto__">' +
  '<div class="card-section">' +
  '<h5>Tipo: __tipo__</h5>' +
  '<p>Direccion: __direccion__</p>' +
  '<p>Coordenadas: __coordenadas__</p>' +
  '</div>' +
  '</div>';

var cargarPagina = function () {
  $("#buscando").click(filtrarRestaurantes);
};


var filtrarRestaurantes = function (e) {
  e.preventDefault();
  var busqueda = $("#filtrar").val().toLowerCase();
  var restaurantesFiltrados = restaurantes.filter(function (restoran) {
    return restoran.nombre.toLowerCase().indexOf(busqueda) >= 0;
  });
  mostrarRestaurantes(restaurantesFiltrados);
};

var mostrarRestaurantes = function (restaurantes) {
  var plantillaFinal = "";
  restaurantes.forEach(function (restoran) {
    plantillaFinal += plantillaRestaurantes.replace("__nombre__", restoran.nombre)
      .replace("__tipo__", restoran.tipo)
      .replace("__direccion__", restoran.direccion)
      .replace("__foto__", restoran.foto)
      .replace("__coordenadas__", restoran.coordenadas)
  });
  $(".contenedor").html(plantillaFinal);
};

$(document).ready(cargarPagina);

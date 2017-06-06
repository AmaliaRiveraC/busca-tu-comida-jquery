var reemplazarUbicacion = function () {

  var latitud = $(this).data("latitud");
  var longitud = $(this).data("longitud");

  var coordenadas = {
    lat: latitud,
    lng: longitud
  }

  mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {

  var map = new google.maps.Map($('.map')[0], {
    zoom: 17,
    center: coordenadas
  });
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
};

var mostrarPosicionActual = function (position) {

  var coordenadas = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  mostrarMapa(coordenadas);
};

var obtenerUbicacionActual = function () {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicionActual)
  } else {
    alert('Error: Your browser doesn\'t support geolocation.');
  }
}


var cargarPagina = function () {
  obtenerUbicacionActual();
  $("#buscando").click(filtrarRestaurantes);
  $(".restoran").click(reemplazarUbicacion);
};








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
      .replace("__coordenadas__", restoran.coordenadas.lat + ", " + restoran.coordenadas.lng)
  });
  $(".contenedor").html(plantillaFinal);
};




$(document).ready(cargarPagina);

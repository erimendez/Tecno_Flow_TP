//var provincias = []; // arreglo para guardar la lista de provincias
//var localidades = []; // arreglo para guardar la lista de localidades

const localidades = [
  {
    "idLocalidad": 1,
    "provincia": "Buenos Aires",
    "nombre": "Bahía Blanca",
    "locLatitud": -38.71,
    "locLongitud": -62.27
  },
  {
    "idLocalidad": 2,
    "provincia": "Buenos Aires",
    "nombre": "La Plata",
    "locLatitud": -34.92,
    "locLongitud":-57.95
  },
  {
    "idLocalidad": 3,
    "provincia": "Buenos Aires",
    "nombre": "Mar del Plata",
    "locLatitud": -38,
    "locLongitud": -57.55
  },
  {
    "idLocalidad": 4,
    "provincia": "Córdoba",
    "nombre": "Córdoba Capital",
    "locLatitud": -31.41,
    "locLongitud":-64.18
  },
  {
    "idLocalidad": 5,
    "provincia": "Córdoba",
    "nombre": "Río Cuarto",
    "locLatitud": -33.13,
    "locLongitud": -64.34
  },
  {
    "idLocalidad": 6,
    "provincia": "Córdoba",
    "nombre": "Villa Carlos Paz",
    "locLatitud":  -31.42,
    "locLongitud": -64.52
  },
  {
    "idLocalidad": 7,
    "provincia": "Santa Fe",
    "nombre": "Rosario",
    "locLatitud": -32.95,
    "locLongitud": -60.64
  },
  {
    "idLocalidad": 8,
    "provincia": "Santa Fe",
    "nombre": "Santa Fe Capital",
    "locLatitud": -31.65,
    "locLongitud": -60.71
  },
  {
    "idLocalidad": 9,
    "provincia": "Santa Fe",
    "nombre": "Venado Tuerto",
    "locLatitud":  -33.74,
    "locLongitud": -61.97
  }
]

const sucursales = [
  { 
    "idLocalidad": 1,
    "direccion": "Avellaneda 826",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -38.722925,
    "sucLongitud": -62.29
  },
  {
    "idLocalidad": 1,
    "direccion": "Av. Pringles 50",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -38.715806018460015,
    "sucLongitud": -62.24428805845541
  },  
  {    
    "idLocalidad": 1,
    "direccion": "Av. Colón 80",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -38.718805831121685,
    "sucLongitud": -62.26694380796718
  },
  {      
    "idLocalidad": 2,
    "direccion": "Av. 520 2800",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -34.903385871851306,
    "sucLongitud": -57.9962685492786
  },
  {
    "idLocalidad": 2,
    "direccion": "Calle 513 3698",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -34.89859784321391,
    "sucLongitud": -58.02777884344563
  },
  {
    "idLocalidad": 3,
    "direccion": "Av. Juan B. Justo 1360",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -38.03149417797409,
    "sucLongitud": -57.55504082510899
  },
  {
    "idLocalidad": 4,
    "direccion": "Av Eduardo Bulnes 2368",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -31.39528376985787,
    "sucLongitud": -64.15645242580864
  },
  {
    "idLocalidad": 5,
    "direccion": "Paso de los Andes 459",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -33.14413250163415,
    "sucLongitud": -64.36196169878038
  },
  {
    "idLocalidad": 6,
    "direccion": "Roma 2459",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -31.415600632361773,
    "sucLongitud": -64.53024598840281
  },
  {
    "idLocalidad": 7,
    "direccion": "Laprida 3146",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -32.97468531153638,
    "sucLongitud": -60.64130950737602
  },
  {
    "idLocalidad": 8,
    "direccion": "Av. Gral. Paz 4904",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -31.62488677494047,
    "sucLongitud": -60.688952045220276
  },
  {
    "idLocalidad": 9,
    "direccion": "Pasaje Gatti 2529",
    "telefono": "0291 4562075",
    "horarios": "Lun a Vie 8:30 20:30",
    "sucLatitud": -33.73335021325108,
    "sucLongitud": -61.98337837284383
  }
  ]

var map = L.map('map').
setView([-35, -63], 
5);
 
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 30
}).addTo(map);

L.control.scale().addTo(map);

function mostrarSucursales(){
  for (var i = 0; i < sucursales.length; i++) {
    let localidad = localidades.find(localidad => localidad.idLocalidad == sucursales[i].idLocalidad);
    L.marker([sucursales[i].sucLatitud, sucursales[i].sucLongitud]).addTo(map)
    .bindPopup('<div class="popupSucursal"><div class="encabezado"><h3><strong>'+ sucursales[i].direccion +'</strong></h3></div>'
    +'<p><i class="fa-solid fa-location-dot"></i>   ' + localidad.nombre  + '</p>'
    +'<p><i class="fa-solid fa-clock"></i>   '+ sucursales[i].horarios +'</p><hr />'
    +'<p><i class="fa-solid fa-phone"></i>   '+ sucursales[i].telefono +'</p></div>'); 

  }

}

// cargar los selectores al cargar la página
// función para cargar el archivo JSON y llenar los selectores
document.addEventListener("DOMContentLoaded", function () {
  var selectorProvincias = document.getElementById("provincia");
  // llenar el selector de provincias
  for (var i = 0; i < localidades.length; i++) {
    if (selectorProvincias.namedItem(localidades[i].provincia)==null) { //.contains(localidades[i].provincia)){
      var opcion = document.createElement("option");
      opcion.value=i;
      opcion.id = localidades[i].provincia;
      opcion.text = localidades[i].provincia;
      selectorProvincias.add(opcion);
    }
    
  }

  actualizarLocalidades();

  mostrarSucursales();
  //obtenerCoordenadas();

});

  /*
  fetch('./assets/js/localidades.json')
    .then(response => response.json())
    .then(data => {
        provincias = data;
        var selectorProvincias = document.getElementById("provincia");
        // llenar el selector de provincias
        for (var i = 0; i < provincias.length; i++) {
          if (!selectorProvincias.contains(provincias[i].provincia)){
            var opcion = document.createElement("option");
            opcion.value = i;
            opcion.text = provincias[i].provincia;
            selectorProvincias.add(opcion);
          }
        }
        
      //  actualizarLocalidades();
    });
    */


// función para actualizar el selector de localidades según la provincia seleccionada
function actualizarLocalidades() {
  var selectorLocalidades = document.getElementById("localidad");
  selectorLocalidades.innerHTML = "";
  var provinciaSeleccionada = document.getElementById("provincia").options[provincia.selectedIndex].text;
  for (var i = 0; i < localidades.length; i++) {
    if (localidades[i].provincia == provinciaSeleccionada){
      var opcion = document.createElement("option");
      opcion.value=i;
      opcion.latitud = localidades[i].locLatitud;
      opcion.longitud = localidades[i].locLongitud;
      //opcion.id = localidades[i].provincia;
      opcion.text = localidades[i].nombre;
      selectorLocalidades.add(opcion);   
    }
  
  }


}

/*
function obtenerCoordenadas(){

  fetch('https://us1.locationiq.com/v1/search.php')
    .then(response => response.json())
    .then(data => {
        provincias = data;
        var selectorProvincias = document.getElementById("provincia");
        // llenar el selector de provincias
        for (var i = 0; i < provincias.length; i++) {
          if (!selectorProvincias.contains(provincias[i].provincia)){
            var opcion = document.createElement("option");
            opcion.value = i;
            opcion.text = provincias[i].provincia;
            selectorProvincias.add(opcion);
          }
        }
        
      //  actualizarLocalidades();
    });

  var locationIQToken = 'pk.9a36088dd6ae4273fc4cf6d2fe7a7ab1'; // include 'pk.' heading as well
  var encodedAddress = encodeURI("Avellaneda 681 bahia blanca");
  var URL = 'https://us1.locationiq.com/v1/search.php?key=' + locationIQToken + '&q=' + encodedAddress + '&format=json';
  var method = 'GET';
  kintone.proxy(URL, method, {}, {}, function(response) {
    var response_array = JSON.parse(response);
    // restaurant_GPS contains the GPS coordinates of the restaurant in [Latitude, Longitude] format
    var restaurant_GPS = [parseFloat(response_array[0].lat), parseFloat(response_array[0].lon)];
    var restaurant = L.marker(restaurant_GPS).addTo(map);
    restaurant.bindPopup("", {autoClose: false}).openPopup();

})
}
*/

function buscarSucursales(){

  var latitud = document.getElementById("localidad").options[localidad.selectedIndex].latitud;
  var longitud = document.getElementById("localidad").options[localidad.selectedIndex].longitud;

  map.flyTo([latitud, longitud], 13);
  
}



// actualizar el selector de localidades al cambiar la provincia seleccionada
document.getElementById("provincia").addEventListener("change", actualizarLocalidades);

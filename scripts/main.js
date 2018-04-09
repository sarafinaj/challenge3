var map, infoWindow;

//locatie van het vliegveld wordt hier geselecteerd
var airportmap = {
  jamiegonzalez: {
    center: {lat: 22.15, lng: -80.41388699999999},
  },
};

//locatie van de restaurants worden hier geselecteerd
var restaurantmap = {
  donanora: {
    center: {lat: 22.140327901732523, lng: -80.4490613937378},
  },
  panaderiaespecialcalzada: {
    center: {lat: 22.15219305166692, lng: -80.43924182653427},
  },
  restaurantedrakeclub: {
    center: {lat: 22.125758435694422, lng: -80.44171214103699},
  },
  casaprado: {
    center: {lat: 22.131681811028013, lng: -80.44981241226196},
  },
};

//locatie van de cocktailbars worden hier geselecteerd
var cocktailsmap = {
  laquirosana: {
    center: {lat: 22.153137053306995, lng: -80.43795704841614},
  },
  dolores: {
    center: {lat: 22.151060241340467, lng: -80.4407250881195},
  },
  solymar: {
    center: {lat: 22.13607945796864, lng: -80.44799387454987},
  },
  suenosdejuventud: {
    center: {lat: 22.146911494104227, lng: -80.44001162052155},
  },
};

//locatie van de hotels worden hier geselecteerd
var hotelsmap = {
  hostelsabina: {
    center: {lat: 22.129008372120907, lng: -80.44734477996826},
  },
  hostallaganga: {
    center: {lat: 22.1305418, lng: -80.4489663},
  },
  hostalconcordia: {
    center: {lat: 22.1490383, lng: -80.44047539999997},
  },
  hostalpalacioazul: {
    center: {lat: 22.1270344, lng: -80.45122129999999},
  },
};

// //Alle locaties voor de markers
var locations = [
  ['Landing Spot', 22.15, -80.41388699999999],
  ['Dona Nora', 22.140327901732523, -80.4490613937378],
  ['Panaderia Especial Calzada', 22.15219305166692, -80.43924182653427],
  ['Restaurante Drake Club', 22.125758435694422, -80.44171214103699],
  ['Casa Prado', 22.131681811028013, -80.44981241226196],
  ['La Quirosana', 22.153137053306995, -80.43795704841614],
  ['Dolores', 22.151060241340467, -80.4407250881195],
  ['Sol y Mar', 22.13607945796864, -80.44799387454987],
  ['Suenos de Juventud', 22.146911494104227, -80.44001162052155],
  ['Hostel Sabina', 22.129008372120907, -80.44734477996826],
  ['Hostal La Ganga', 22.1305418, -80.4489663],
  ['Hostal concordia 404', 22.1490383, -80.44047539999997],
  ['Palacio Azul', 22.1270344, -80.45122129999999]
];

//Google Maps
function initMap() {
  var uluru = {lat: 22.15, lng: -80.41388699999999};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.15, lng: -80.41388699999999},
    zoom: 15,
    center: uluru,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  });

  //Locaties van de markers en de afbeelding
  var image = {
    url: 'images/marker.svg',
    scaledSize: new google.maps.Size(50,50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(25,45)
  }

  var infowindow = new google.maps.InfoWindow();

  //Markers op locaties toevoegen
  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon:image
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
  }

  //Het plaatsen van een cirkel om de airport
  for (var airport in airportmap) {
    var cityCircle = new google.maps.Circle({
      strokeColor: '#E80C7A',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#E80C7A',
      fillOpacity: 0.35,
      map: map,
      center: airportmap[airport].center,
      radius: 500
    });
  }

  //Het plaatsen van een cirkel om de restaurants
  for (var restaurant in restaurantmap) {
    var restaurantCircle = new google.maps.Circle({
      strokeColor: '#FC7351',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FC7351',
      fillOpacity: 0.35,
      map: map,
      center: restaurantmap[restaurant].center,
      radius: 80
    });
  }

  //Het plaatsen van een cirkel om de cocktailbars
  for (var cocktail in cocktailsmap) {
    var cocktailCircle = new google.maps.Circle({
      strokeColor: '#FF952D',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF952D',
      fillOpacity: 0.35,
      map: map,
      center: cocktailsmap[cocktail].center,
      radius: 80
    });
  }

  //Het plaatsen van een cirkel om de hotels
  for (var hotel in hotelsmap) {
    var hotelCircle = new google.maps.Circle({
      strokeColor: '#6DF26A',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#6DF26A',
      fillOpacity: 0.35,
      map: map,
      center: hotelsmap[hotel].center,
      radius: 80
    });
  }

  //De opmaak van de kaart
  var styledMapType = new google.maps.StyledMapType(
      [
        {elementType: 'geometry', stylers: [{color: '#FFA52D'}]}, //de parken
        {elementType: 'labels.text.fill', stylers: [{color: '#00E0D8'}]}, //tekstvulling 
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]}, //tekstlijn
        {
          featureType: 'administrative.land_parcel', //tekst kleine straten
          elementType: 'labels.text.fill',
          stylers: [{color: '#7E2DFF'}]
        },
        {
          featureType: 'landscape.natural', //land
          elementType: 'geometry',
          stylers: [{color: '#F2D3C5'}]
        },
        {
          featureType: 'road', //kleine wegen
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.arterial', //grote wegen
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway', //ring wegen
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway', //lijn ring wegen
          elementType: 'geometry.stroke',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'transit.station', //het vliegveld
          elementType: 'geometry',
          stylers: [{color: '#F2D3C5'}]
        },
        {
          featureType: 'water', //het water
          elementType: 'geometry.fill',
          stylers: [{color: '#7FC0B9'}]
        },
        {
          featureType: 'water', //het water tekst
          elementType: 'labels.text.fill',
          stylers: [{color: '#7E2DFF'}]
        }
      ],
      {name: 'Styled Map'});  

  //Laten weergeven van de gestylde map
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}

//Het weer. Alleen van de geselecteerde stad
(() => {
  let url = '';
  let weatherIcon = document.querySelector('.weather-icon-wrapper');
  let weatherInfo = document.querySelector('.weather-sky-info');
  let weatherLocation = document.querySelector('.weather-location');
  let weatherTemp = document.querySelector('.weather-temp');
  
  const getIcon = (iconValue) => {
    const iconUrl = 'https://openweathermap.org/img/w/' + iconValue + '.png';
    let imgElement = document.createElement('img');
    imgElement.src = iconUrl;
    return imgElement;
  };
  
  const changeMetric = () => {
    let urlParts = url.split('units=');
    let iconString = '';
    let newMetric = () => {
      if(urlParts[1] === 'metric'){
        iconString = ' °F';
        return 'imperial';
      }
      iconString = ' °C';
      return 'metric';
    };
    url = urlParts[0] + 'units=' + newMetric();
    $.ajax({
      url
    }).done((data) => {
      weatherTemp.innerHTML = data.main.temp + iconString;
    });
  }
  
  const getWeather = (pos) => {
    const lat = pos[0];
    const lon = pos[1];
    const apiKey = 'b1fe6ee6f440711a41fa920141f88af5';
    url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ 22.160366 + '&lon=' + -80.439379 + '&APPID=' + apiKey + '&units=metric';
    
    $.ajax({
      url
    }).done((data) => {
      let weatherData = data.weather[0];
      weatherInfo.innerHTML = 'Sky: ' + weatherData.main;
      weatherIcon.appendChild(getIcon(weatherData.icon));
      weatherLocation.innerHTML = data.name + ', ' + data.sys.country;
      weatherTemp.innerHTML = data.main.temp + ' °C';
    });
  };
  
  $.getJSON('https://ipinfo.io', (data) => {
    getWeather(data.loc.split(','));
    weatherTemp.addEventListener('click', () => changeMetric());
  });
})();
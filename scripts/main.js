// fetch('https://api.artsy.net/api/genes/cuba')

var map;

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

  var image = {
    url: 'images/marker.svg',
    scaledSize: new google.maps.Size(50,50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,32)
  }

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon:image
  });

  // var iconBase = 'images/marker.svg';
  // var icons = {
  //   places: {
  //     icon: iconBase + 'images/marker.svg'
  //   },
  // };

  var features = [
    {
      position: new google.maps.LatLng(22.15, -80.41388699999999),
    }, {
      position: new google.maps.LatLng(22.140327901732523, -80.4490613937378),
    },
    {
      position: new google.maps.LatLng(22.15219305166692, -80.43924182653427),
    }
  ];

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });

  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // }); 

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

  //icon marker voor de locaties
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
}




// var myLatlng = new google.maps.LatLng(22.149578,-80.413671);
// var mapOptions = {
//   zoom: 4,
//   center: myLatlng
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!"
// });

// To add the marker to the map, call setMap();
marker.setMap(map);



// function showDog(image){
//   console.log(image);

//   //create a marker for de Haagse Hogeschool
//   var image = {

//   };

//   //create a marker for de Haagse Hogeschool
//   var hhsMarker = new google.maps.Marker({
//     position: {
//       lat: 52.318512,
//       lng: 4.642839
//     }
//     icon: image,
//     man: myMap,
    
//   })
// }

// function getAPIdata() {

//   // get latest weather
//   fetch('https://www.rijksmuseum.nl/api/nl/collection?q=Rembrandt&key=fpGQTuED&format=json')
  
//   // parse to JSON format
//   .then(function(response) {
//     return response.json();
//   })
  
//   // render weather per day
//   .then(function(response) {

//     // show full JSON object
//     //console.log(response.artObjects[0].headerImage.url);

//     var image = response.artObjects[0].headerImage.url;
//     document.getElementById('rijks').innerHTML = '<img src="' + image + '" />';
//     //document.getElementById('dogs').src = response.message;

//     //for(var i = 0; i < response.list.length; i++) {
//       //console.log(response.list[i]);
//       //console.log(response.list[i].dt);
//       //console.log(response.list[i].dt_txt);
//       // etc.
//     //}

//   })
  
//   // catch error
//   .catch(function (error) {
//     console.error('Request failed', error);
//   });
// }

// // init data stream
// getAPIdata();
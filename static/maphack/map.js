// Day Mode Style for Google Map
var styles = [
                {
                   "featureType": "administrative.province",
                   "stylers": [
                     {
                       "visibility": "off"
                     }
                   ]
                 },
                 {
                   "featureType": "poi",
                   "stylers": [
                     {
                       "visibility": "off"
                     }
                   ]
                 },
                 {
                   "featureType": "road",
                   "stylers": [
                     {
                       "visibility": "off"
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
                   "featureType": "transit",
                   "elementType": "labels.icon",
                   "stylers": [
                     {
                       "visibility": "off"
                     }
                   ]
                 }
            ];
// Night Mode Style for Google Map
var styles1 = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
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
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
          ];

//By default mapMode will be set to in day mode!
var mapMode;
var map;
// markers for map
var markers =[];
var iconBase;
var icons;
// info window
var info;

//Initializes the Map
function modeChange(button){
   if(button.getAttribute('id')==='day-mode'){
       initMap('day-mode');
   }
   else{
       initMap('night-mode');
   }
}

function initButton(){
 document.getElementsByClassName('modeSwitchButton')[0].addEventListener("click",function(){
     modeChange(this);
 });
}

document.addEventListener("DOMContentLoaded",initButton,false);


function initMap(mode) {
  info = new google.maps.InfoWindow();
  markers = []
    if(mode == null){
        mapMode = styles;
    }
    else{
        if(mode === 'night-mode'){//Background has day mode!
            if(mapMode != styles1){
                mapMode = styles1;
                var button = document.getElementById('night-mode');
                button.setAttribute('id','day-mode');
                button.innerHTML = "Day Mode"
                button.classList.remove('buttonMode')
                button.classList.add('buttonMode1');
            }
            else{
                return
            }
        }
        else{
            if(mapMode != styles){
                mapMode = styles;
                var button = document.getElementById('day-mode');
                button.setAttribute('id','night-mode');
                button.innerHTML = "Night Mode"
                button.classList.remove('buttonMode1');
                button.classList.add('buttonMode');
            }
            else{
                return
            }
        }
    }
        var uluru = {lat: 	26.88017, lng: 	75.81271};
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            disableDefaultUI: true,
            zoom: 13,
            maxZoom:13,
            center: uluru,
            styles:mapMode
        });
              //will see later how to put our maps within bound..(Basically to restrict for a particular country);
        // var strictBounds = new google.maps.LatLngBounds(
        // new google.maps.LatLng(23.63936, 68.14712),
        // new google.maps.LatLng(28.20453, 97.34466)
        // );
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

        google.maps.event.addListenerOnce(map, "idle", configure);
}

function update(){
    // get map's bounds
    var bounds = map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    // get places within bounds (asynchronously)
    var parameters = {
        ne: ne.lat() + "," + ne.lng(),
        q: $("#q").val(),
        sw: sw.lat() + "," + sw.lng()
      };

      $.getJSON('/digiguide/updatemap/', parameters)
      .done(function(data, textStatus, jqXHR) {

       // remove old markers from map
       removeMarkers();
       console.log(data);
       // add new markers to map
       for (var i = 0; i < data.length; i++)
       {
          console.log("**************"+data[i].latitude+"*************")
           addMarker(data[i]);

       }
     })
     .fail(function(jqXHR, textStatus, errorThrown) {

        // log error to browser's console
        console.log(errorThrown.toString());
      });
}

function configure(){
  //If the map is dragged, the update function is called
  google.maps.event.addListener(map,"dragend",function(){

        // if (info.getMap || info.getMap())
        // {
        //     info.close();
        // }
        update();
  });

  //If the map is zoomed in or out, the update function is called
  google.maps.event.addListener(map, "zoom_changed", function() {

        update();
    });

//Calls search when len(input) > 1 (source = search())
// At max 10 results could be suggested
  $('#q').typeahead(
    {
    higlight : false,
    minLength : 1
    },
    {
      display: function(suggestion) {
                return null; },
        limit: 10,
        source: search,
        templates: {
            suggestion: Handlebars.compile(
                "<div style="+"\"background-color:white; width:100%; height:40px;\" "+" class='bg-predictions'>" +
                 "{{place_name}}, {{admin_name1}}, {{postal_code}}" +
                "</div>"
            )
    }
  });

//When user clicks on any suggestion displayed by typeahead, it centers the map to that place
// and calls update() function so as to place new markers and filter results
  $("#q").on("typeahead:selected", function(eventObject, suggestion, name) {

        // console.log(suggestion.latitude);
        // set map's center
        map.setCenter({lat: parseFloat(suggestion.latitude), lng: parseFloat(suggestion.longitude)});

        // update UI
        update();
      });

//When one focuses on search bar, the popups would go down,
  $("#q").focus(function(eventData) {
        info.close();
      });

      document.addEventListener("contextmenu", function(event) {
        event.returnValue = true;
        event.stopPropagation && event.stopPropagation();
        event.cancelBubble && event.cancelBubble();
    }, true);

// update UI
//First time this update will bring markers
  update();


// give focus to text box
  $("#q").focus();

}

function addMarker(place){

        var myLatLng = {lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)};
        // console.log(myLatLng);
        marker = new google.maps.Marker({
        position: myLatLng,
        icon : {
            url : "/static/maphack/iconblue.png",
            labelOrigin: {x: 0, y:100},
        },

        map: map,
        title: place.place_name + ',' + place.admin_code1,
        parameters : {geo: place.postal_code}

        });
        markers.push(marker);

        //somehow select the marker which has same lat and long, as clicked by user
        google.maps.event.addListener(marker,"click",function(event){
            for(j=0;j<markers.length;j++){
                if(markers[j].position == event.latLng){
                    marker = markers[j];
                    break;
                }
            }
            $.getJSON('/digiguide/getguides/',marker.parameters)
            .done(function(data, textStatus, jqXHR){
                pas = "<ul>";
                pas2 = "</ul>";
                passf = "";
                console.log(data);
                for(i=0;i<data.length;i++){

                    //json data returned by articles having link and title as its parameters
                    name=data[i]["guide_name"];
                    id=data[i]["id_no"];
                    card_status = data[i]["card_status"];
                    mob_no = data[i]["mob_no"];
                    img = data[i]["image"];

                    rate = data[i]["rating"];

                    // pas1 = "<a href ="+link+">"+title+"</a>";
                    pas1 = "<b> Name: "+name+";&nbsp Id: "+id+";&nbsp Card Status: "+card_status+"; Mobile Number: "+mob_no+ "; Rating: "+rate+"</b>";

                    passf = passf + "<br>" +"<li>"+ pas1 + "</li>";
                }
                arg = pas+passf+pas2;
                showInfo(marker,arg);
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                // log error to browser's console
                console.log(errorThrown.toString());
            });
        });




}

//Sets markers == null // Called when clearMarkers is invoked
function setMapOnAll(map) {

        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
}

// Removes the markers from the map, but keeps them in the array.(if clearMarkers is directly invoked)
function clearMarkers() {
  setMapOnAll(null);
}

//Empties the markers array and ultimately removes the marker from map as well as array
function removeMarkers(){
    clearMarkers();
    markers = [];

}


// sends a call to search route which searches places from databases
// to display it in suggestions
function search(query, syncResults, asyncResults){
    // get places matching query (asynchronously)
    var parameters = {
        q: query
    };

    $.getJSON('/digiguide/search/', parameters)
    .done(function(data, textStatus, jqXHR) {

        // call typeahead's callback with search results (i.e., places)
        asyncResults(data);
        // console.log(data);
        // console.log(data["postal_code"]);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {

        // log error to browser's console
        console.log(errorThrown.toString());

        // call typeahead's callback with no results
        asyncResults([]);
    });
}

function showInfo(marker, content){
    // start div

    var div = "<div id='info'>";
    if (typeof(content) == "undefined")
    {
        // http://www.ajaxload.info/
        div += "<img alt='loading' src='/ajax-loader.gif'/>";
    }
    else
    {
        div += content;
    }

    // end div
    div += "</div>";

    // set info window's content
    info.setContent(div);
    div = "";
    // open info window (if not already open)
    info.open(map, marker);
}

/*
This file contains all of the code running in the background that makes resumeBuilder.js possible. These are HTML strings.
*/
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span><hr>';

var HTMLskillsStart = '<div id= "skill-box" class="flex-box"><a target="_blank" href="images/spider.jpg" id="skills-header">Skills at a Glance:</a><ul id="skills" class="flex-box"></ul></div>';
var HTMLskills = '<li class="flex-item"><span>%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a class="title-link" target="_blank" href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a class="title-link" target="_blank" href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="title-link" target="_blank" href="http://www.colorado.edu/math/">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3><br>Relevant Online Classes</h3>';
var HTMLonlineTitle = '<a class="title-link" target="_blank" href="#">%data%';
var HTMLonlineSchool = ' -- %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a target="_blank" class="title-link" href="#">%data%</a>';

var googleMap = '<div id="map"></div>';

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // Do I want to do anything with these clicks?
});

var map;
function initializeMap() {
  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);
  var locations = ["Cairo, Egypt", "Dublin, Ireland", "Guildford, England", "Reykjavik, Iceland", "Boulder, CO", "Hilago, Mexico",
   "Montezuma, Costa Rica", "San Francisco, CA", "Manhattan, New York", "Homer, AK", "Monterrey, Mexico","Boston, MA"];


  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
      console.log(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locs) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      
      // for (var i = 10; i < locs.length; i++) {

      //   // the search request object
      //   var request = {
      //     query: locs[i]
      //   };
      //   // Actually searches the Google Maps API for location data and runs the callback
      //   // function with the search results after each search.
      //   service.textSearch(request, callback);
       
      // }

      // setTimeout(function(){
      //   for(var i = 0; i <= 10; i++){
      //     var request = {
      //       query: locs[i]
      //     };
      //   }
      //   service.textSearch(request, callback);
      //   console.log(request);
      // }, 200);
      for (var place in locs) {

        // the search request object
        var request = {
          query: locs[place]
        };
        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, callback);
       
      }
      
  }
  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  // locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}
// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});

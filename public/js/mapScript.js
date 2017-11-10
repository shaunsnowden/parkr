console.log("\n mapScript js LOADED!!!!");

    $.get("/parkingspots", function(data) {
      parkingSpots = data;
      console.log(parkingSpots);
      // initializeRows();
    });


function initMap() {
  var denver = { lat: 39.7392, lng: -104.9903 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: denver
  });

		// Creating a global infoWindow object that will be reused by all markers
		var infoWindow = new google.maps.InfoWindow();
  
  // loop through parkingSpots array and display values on map
  for (var i = 0, length = parkingSpots.length; i < length; i++) {
    var data = parkingSpots[i],
        latLng = new google.maps.LatLng(data.lat, data.lng); 
  
    // Creating a marker and putting it on the map
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: data.parking_name
    });
    
			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {
        
                // Attaching a click event to the current marker
                google.maps.event.addListener(marker, "click", function(e) {
                  infoWindow.setContent(`Reservation Status: ${data.reservation_status}`);
                  infoWindow.open(map, marker);
                });
        
        
              })(marker, data);
        
  }
};

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  
});
console.log("\n mapScript js LOADED!!!!");

function initMap() {
  var denver = { lat: 39.7392, lng: -104.9903 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: denver
  });
  var marker = new google.maps.Marker({
    position: denver,
    map: map
  });
};

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
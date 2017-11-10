$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
    $(".license-plate").text(data.license_plate);
    $(".car-make").text(data.car_make);
    $(".car-model").text(data.car_model);
    $(".car-color").text(data.car_color);
  });

// START CODE IN DEVELOPMENT ==============================================================================
    // This function makes a new reservation in our database
    function newReservation(Parkingspot) {
      $.ajax({
        method: "PUT",
        url: "/newreservation",
        data: Parkingspot
      }).done(getParkingspot);
    }

    // This function cancels a reservation in our database
    function cancelReservation(Parkingspot) {
      $.ajax({
        method: "PUT",
        url: "/cancelreservation",
        data: Parkingspot
      }).done(getParkingspot);
    }
// END CODE IN DEVELOPMENT ==============================================================================
});

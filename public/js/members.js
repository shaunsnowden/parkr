$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
    $(".license-plate").text(data.license_plate);
    $(".car-make").text(data.car_make);
    $(".car-model").text(data.car_model);
    $(".car-color").text(data.car_color);
    // data.Reservations.forEach((reservation) => {
    //   $(".parking-name").append(reservation.Parkingspot.parking_name);
    // })
  });
});

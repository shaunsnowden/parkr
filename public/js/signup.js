$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var licenseInput = $("input#license-input");
  var carmakeInput = $("input#car-make-input");
  var carmodelInput = $("input#car-model-input");
  var carcolorInput = $("input#car-color-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      license_plate: licenseInput.val().trim(),
      car_make: carmakeInput.val().trim(),
      car_model: carmodelInput.val().trim(),
      car_color: carcolorInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.license_plate || !userData.car_make || !userData.car_model || !userData.car_color ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.license_plate, userData.car_make, userData.car_model, userData.car_color);
    emailInput.val("");
    passwordInput.val("");
    licenseInput.val("");
    carmakeInput.val("");
    carmodelInput.val("");
    carcolorInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, license_plate, car_make, car_model, car_color) {
    $.post("/api/signup", {
      email: email,
      password: password,
      license_plate: license_plate,
      car_make: car_make,
      car_model: car_model,
      car_color: car_color
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

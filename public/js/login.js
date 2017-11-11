console.log("\n \n login.js Imported \n")

$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page. Feeds object to /api/login from the front side.  To see the rest, need to go and see the backside for how this is processing.
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      // this data object is what is being served by the backend.
      window.location.replace(data);

      alert("handler called!");
      $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
        $(".license-plate").text(data.license_plate);
        $(".car-make").text(data.car_make);
        $(".car-model").text(data.car_model);
        $(".car-color").text(data.car_color);
      });
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});

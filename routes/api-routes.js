// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      license_plate: req.body.license_plate,
      car_make: req.body.car_make,
      car_model: req.body.car_model,
      car_color: req.body.car_color
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // API Route to get all parking spots
  app.get('/parkingspots', function (req, res) {
    db.Parkingspot.findAll({})
      .then(function (dbParkingspot) {
        res.json(dbParkingspot);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      console.log(JSON.stringify(req.user, null, 2));
      res.json(req.user);
    }
  });

  // START CODE IN DEVELOPMENT ==============================================================================

  // PUT route for updating reservations. We can get the updated data from req.body
  app.put("/newreservation", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Parkingspot.update({
      reservation_status: 1, // this will udpate the status in the parkingspots table to 1 (i.e., reserved)
      reservation_start: req.body.reservation_start, // Shaun - we need to add a <input id="datetime" type="datetime-local"> to collect this data
      reservation_end: req.body.reservation_end, // Shaun - we need to add a <input id="datetime" type="datetime-local"> to collect this data
      user_email: req.user.email // Shaun - I'm not exactly sure if this will work, but I'm hoping it'll pull in the user email from the user table and update the user_email in the parkingspots table
    }, {
      where: {
        id: req.body.id // Shaun - we will need to have this be equal to the parkingid number of the Reserve Spot button div (e.g.,<button type="submit" parkingid="2">Reserve Spot</button>)
      }
    }).then(function(dbParkingspot) {
      res.json(dbParkingspot);
    });
  });

  // PUT route for cancelling reservations
  app.put("/cancelreservation", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Parkingspot.update({
      reservation_status: 0, // this will udpate the status in the parkingspots table to be available
      reservation_start: "", // this will clear the start time, making it available for future reservations
      reservation_end: "", // this will clear the end time, making it available for future reservations
      user_email: "" // this will clear the user email, making it available for future reservations
    }, {
      where: {
        id: req.body.id // Shaun - we will need to have this be equal to the parkingid number of the Reserve Spot button div (e.g.,<button type="submit" parkingid="2">Reserve Spot</button>)
      }
    }).then(function(dbParkingspot) {
      res.json(dbParkingspot);
    });
  });
// END CODE IN DEVELOPMENT ==============================================================================

};

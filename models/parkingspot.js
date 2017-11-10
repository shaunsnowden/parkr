module.exports = function(sequelize, DataTypes) {
  // Creating our parkingspot model
  var Parkingspot = sequelize.define("Parkingspot", {
    parking_name: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    lat: DataTypes.DECIMAL(14,10),
    lng: DataTypes.DECIMAL(14,10),
    reservation_status: DataTypes.STRING,      
    reservation_start: DataTypes.DATE,
    reservation_end: DataTypes.DATE,
    user_email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
  });

  return Parkingspot;
};




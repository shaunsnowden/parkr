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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

	Parkingspot.associate = function(models) {
		// Associating Author with Posts
		// When an Author is deleted, also delete any associated Posts
		Parkingspot.hasMany(models.Reservation, {
			onDelete: 'cascade'
		});
	};

  return Parkingspot;
};




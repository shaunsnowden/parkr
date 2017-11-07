module.exports = function(sequelize, DataTypes) {
  // Creating our reservations model
  var Reservation = sequelize.define("Reservation", {
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
		expiresAt: DataTypes.DATE
  });

	Reservation.associate = function(models) {
		// We're saying that a Post should belong to an Author
		// A Post can't be created without an Author due to the foreign key constraint
		Reservation.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
    });

    Reservation.belongsTo(models.Parkingspot, {
			foreignKey: {
				allowNull: false
			}
		});

	};
  
  return Reservation;
};
  








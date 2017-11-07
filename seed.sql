INSERT INTO users (email, password, license_plate, createdAt, updatedAt)
values ("justin@email.com", "1234", "1234-ASDJ", CURTIME(), CURTIME()),
("shaun@email.com", "1234", "F8K-P0J", CURTIME(), CURTIME());

SELECT * FROM users;

INSERT INTO parkingspots (parking_name, street_address, city, state, zip_code, lat, lng, createdAt, updatedAt)
values ("Colorado Women's College", "1901 E Asbury Ave", "Denver", "CO", "80208", 39.680628, -104.964613, CURTIME(), CURTIME()),
("14th and Larimer", "1453 Larimer St", "Denver", "CO", "80202", 39.748210, -104.999149, CURTIME(), CURTIME());

SELECT * FROM parkingspots;

INSERT INTO reservations (duration, createdAt, updatedAt, ParkingspotID, UserID)
values (2, CURTIME(), CURTIME(), 1, 2),
(3, CURTIME(), CURTIME(), 2, 1);

SELECT * FROM reservations;
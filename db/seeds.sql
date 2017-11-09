INSERT INTO users (user_name, license_plate_number)
values ("Justin", "123-AKD"), ("Shaun", "1S3-AFD");

DROP TABLE parking_spots;

SELECT * FROM users;

INSERT INTO parkingspots (parking_name, street_address, city, state, zip_code, lat, lng)
values ("Colorado Women's College", "1901 E Asbury Ave", "Denver", "CO", "80208", 39.680628, -104.964613)
, ("14th and Larimer", "1453 Larimer St", "Denver", "CO", "80202", 39.748210, -104.999149);

SELECT * FROM parkingspots;

INSERT INTO reservations (user_id, parking_id, duration)
values (2, 1, 2);

SELECT * FROM reservations;
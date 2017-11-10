use parker_db;

INSERT INTO parkingspots (parking_name, street_address, city, state, zip_code, lat, lng, reservation_status, reservation_start, reservation_end, user_email, createdAt, updatedAt)
values ("Colorado Women's College", "1901 E Asbury Ave", "Denver", "CO", "80208", 39.680628, -104.964613, 1, CURTIME(), addtime(CURTIME(),"02:00:00"), "justin@email.com", CURTIME(), CURTIME()),
("14th and Larimer", "1453 Larimer St", "Denver", "CO", "80202", 39.748210, -104.999149, 1, CURTIME(), addtime(CURTIME(),"05:00:00"), "shaun@email.com", CURTIME(), CURTIME()),
("Denver Center for the Performing Arts", "1101 13th St", "Denver", "CO", "80204", 39.745596, -104.999259, 0, null, null, null, CURTIME(), CURTIME()),
("Denver Art Museum", "100 W 14th Ave Pkwy", "Denver", "CO", "80204", 39.737633, -104.989431, 0, null, null, null, CURTIME(), CURTIME()),
("Denver Botanic Gardens", "1007 York St", "Denver", "CO", "80206", 39.731745, -104.961127, 0, null, null, null, CURTIME(), CURTIME()),
("Coors Field", "2001 Blake St", "Denver", "CO", "80205", 39.755907, -104.994274, 0, null, null, null, CURTIME(), CURTIME()),
("Washington Park", "701 S Franklin St", "Denver", "CO", "80209", 39.702777, -104.969786, 0, null, null, null, CURTIME(), CURTIME()),
("Glendale", "630 S Colorado Blvd", "Glendale", "CO", "80246", 39.705374, -104.940235, 0, null, null, null, CURTIME(), CURTIME()),
("Cherry Creek Shopping Center", "3000 E 1st Ave", "Denver", "CO", "80206", 39.717231, -104.952805, 0, null, null, null, CURTIME(), CURTIME()),
("Denver Zoo", "2300 Steele St", "Denver", "CO", "80205", 39.751093, -104.949032, 0, null, null, null, CURTIME(), CURTIME());

SELECT * FROM parkingspots;

-- No seed data for user file. Instead, sign up for a new account using email justin@email.com and then create another user account using shaun@email.com (both of these email addresses are already linked to parking spots in the parkingspots table)
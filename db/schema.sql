-- Create parkr_db database
DROP DATABASE IF EXISTS parkr_db;
CREATE database parkr_db;

-- Use parkr_db database
USE parkr_db;

-- Create users table
CREATE TABLE users
(
	user_id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
    license_plate_number varchar(50) NOT NULL,
    date TIMESTAMP,
	PRIMARY KEY (user_id)
);

-- Create parking_spot table
CREATE TABLE parking_spots
(
	parking_id int NOT NULL AUTO_INCREMENT,
	parking_name varchar(255) NOT NULL,
    street_address varchar(255) NOT NULL,
    city varchar(50) NOT NULL,
    state varchar(2) NOT NULL,
    zip_code varchar(10) NOT NULL,
    lat decimal(14, 10),
    lng decimal(14, 10),
    reservation_status BOOLEAN DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (parking_id)
);

-- Create reservations table
CREATE TABLE reservations
(
	reservation_id int NOT NULL AUTO_INCREMENT,
	user_id int,
    parking_id int,
    start_time timestamp,
    duration int not null,
    FOREIGN KEY (user_id)
		REFERENCES users(user_id),
    FOREIGN KEY (parking_id)
		REFERENCES parking_spots(parking_id),
    PRIMARY KEY (reservation_id)
);
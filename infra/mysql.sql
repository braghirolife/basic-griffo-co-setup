CREATE DATABASE griffo_setup;  

CREATE TABLE griffo_setup.User(
	id int NOT NULL AUTO_INCREMENT,
    first_name varchar(250) NOT NULL,
    last_name varchar(250) NOT NULL,
    age int NOT NULL,
    
    PRIMARY KEY (id)
);

ALTER TABLE griffo_setup.USER ADD COLUMN address varchar(250) AFTER age;
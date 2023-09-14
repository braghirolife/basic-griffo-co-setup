CREATE DATABASE griffo;  

\c griffo;

CREATE TABLE Userr(
	id SERIAL PRIMARY KEY,
    first_name varchar(250) NOT NULL,
    last_name varchar(250) NOT NULL,
    age int NOT NULL
);
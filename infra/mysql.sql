CREATE DATABASE griffo;  

\c griffo;

-- CREATE TABLE Userr(
-- 	id SERIAL PRIMARY KEY,
--     first_name varchar(250) NOT NULL,
--     last_name varchar(250) NOT NULL,
--     age int NOT NULL
-- );

CREATE TABLE Customer(
    id SERIAL PRIMARY KEY,
    user_key VARCHAR(40) UNIQUE NOT NULL,
    username VARCHAR(30) UNIQUE,
    user_password VARCHAR(30) NOT NULL,
    person_name VARCHAR(30) NOT NULL,
    date_of_birth DATE
);

CREATE TABLE Wallet(
    id SERIAL PRIMARY KEY,
    user_key VARCHAR(40) UNIQUE NOT NULL,
    FOREIGN KEY (user_key) REFERENCES Customer (user_key) ON DELETE CASCADE
);

-- CREATE TABLE stock(
--     ticker VARCHAR(6) PRIMARY KEY,
--     current_price NUMERIC(5, 2)
-- );

-- CREATE TABLE wallet_stock(
--     wallet_id INTEGER REFERENCES wallet ON DELETE CASCADE,
--     stock VARCHAR(6) REFERENCES stock ON DELETE CASCADE,
--     average_price NUMERIC (5, 2),
--     quantity INTEGER NOT NULL,
    
--     PRIMARY KEY (wallet_id, stock)
-- );
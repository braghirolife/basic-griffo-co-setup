CREATE DATABASE griffo;  

\c griffo;

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

CREATE TABLE Stock(
    id SERIAL PRIMARY KEY,
    ticker VARCHAR(6) UNIQUE NOT NULL,
    current_price DECIMAL(20, 2) NOT NULL
);

-- CREATE TABLE wallet_stock(
--     wallet_id INTEGER REFERENCES wallet ON DELETE CASCADE,
--     stock VARCHAR(6) REFERENCES stock ON DELETE CASCADE,
--     average_price NUMERIC (5, 2),
--     quantity INTEGER NOT NULL,
    
--     PRIMARY KEY (wallet_id, stock)
-- );
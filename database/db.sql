-- creating the database

CREATE DATABASE crudnodejsmysql;

-- using the database

use crudnodejsmysql;

CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe the table
DESCRIBE customer;


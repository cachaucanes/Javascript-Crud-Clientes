-- creating the database
CREATE DATABASE IF NOT EXISTS javascript_crud_clientes;
USE javascript_crud_clientes;

CREATE TABLE IF NOT EXISTS customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);
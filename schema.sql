DROP DATABASE IF EXISTS bamazon_db; 

CREATE DATABASE bamazon_db; 

USE bamazon_db; 

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL, 
    price INT(1000) NOT NULL, 
    stock_quantity INT(10000) NOT NULL,
    PRIMARY KEY (item_id)
);
DROP DATABASE IF EXISTS bamazon_db; 

CREATE DATABASE bamazon_db; 

USE bamazon_db; 

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL, 
    price INT(255) NOT NULL, 
    stock_quantity INT(255) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products; 

-- 1
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sweater", "clothing", 40, 100); 

-- 2 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("t-shirt", "clothing", 15, 150); 

-- 3
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jeans", "clothing", 55, 50); 

-- 4
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cellphone", "tech", 250, 255); 

-- 5
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "tech", 255, 255); 

-- 6
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tupperware", "home", 30, 100); 

-- 7
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "home", 50, 100); 

-- 8
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blanket", "home", 40, 100);

-- 9
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chips", "food", 5, 255);

-- 10 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bread", "food", 5, 255); 



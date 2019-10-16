DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HDMI Cable", "Electronics", 15.99, 205);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP LCD Screen", "Electronics", 89.99, 136);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Purple Bouffon Scarf", "Clothing", 55.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sonicare Toothbrush", "Personal Care", 300.00, 116);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Hobbit", "Movies", 25.00, 700);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("D&D Starter Kit", "Games", 67.99, 68);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MTG Booster Pack", "Games", 10.99, 206);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 5", "Electronics", 700.00, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Woolen Sweatervest", "Clothing", 67.98, 68);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Squeaky Toy", "Pets", 7.99, 99);
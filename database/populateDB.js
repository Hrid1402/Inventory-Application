const { Client } = require("pg");
require('dotenv').config();
const SQL =`
CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  quantity INT,
  description TEXT,
  price DECIMAL,
  category TEXT
);

INSERT INTO items (name, quantity, description, price, category)
VALUES ('Laptop', 15, 'A good quality laptop', 140.5, 'Electronics');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Smartphone', 25, 'Latest model with fast performance', 299.99, 'Electronics');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Running Shoes', 50, 'Comfortable running shoes for daily use', 59.99, 'Fashion');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Sofa Set', 10, 'Luxurious leather sofa set', 549.50, 'Home & Living');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Shampoo', 100, 'Herbal shampoo for all hair types', 7.25, 'Beauty & Personal Care');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Vitamins', 200, 'Multivitamin tablets for daily health', 15.99, 'Health & Wellness');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Baby Stroller', 30, 'Lightweight and foldable baby stroller', 89.99, 'Kids & Baby');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Mountain Bike', 12, 'Durable bike suitable for rough terrains', 299.50, 'Sports & Outdoors');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Car Seat Cover', 80, 'Waterproof car seat covers', 24.99, 'Automotive');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Board Game', 60, 'Fun family board game', 29.99, 'Toys & Games');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Organic Coffee Beans', 40, '100% organic coffee beans', 12.75, 'Groceries & Gourmet Food');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Bluetooth Speaker', 30, 'Portable speaker with high-quality sound', 39.99, 'Electronics');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Jacket', 25, 'Warm winter jacket', 49.99, 'Fashion');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Kitchen Mixer', 18, 'Multipurpose kitchen mixer', 199.99, 'Home & Living');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Face Cream', 75, 'Moisturizing face cream with SPF', 22.50, 'Beauty & Personal Care');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Protein Powder', 100, 'Whey protein for muscle building', 45.00, 'Health & Wellness');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Baby Monitor', 20, 'Digital baby monitor with camera', 89.99, 'Kids & Baby');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Tennis Racket', 35, 'Professional-grade tennis racket', 79.99, 'Sports & Outdoors');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Car Vacuum Cleaner', 50, 'Portable car vacuum cleaner', 29.99, 'Automotive');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Action Figure', 60, 'Popular superhero action figure', 15.99, 'Toys & Games');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Organic Honey', 35, 'Raw organic honey', 9.50, 'Groceries & Gourmet Food');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Wireless Headphones', 45, 'Noise-cancelling wireless headphones', 99.99, 'Electronics');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Sunglasses', 50, 'Stylish UV-protected sunglasses', 19.99, 'Fashion');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Air Purifier', 15, 'Air purifier with HEPA filter', 129.99, 'Home & Living');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Lipstick', 100, 'Matte lipstick in various shades', 12.99, 'Beauty & Personal Care');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Yoga Mat', 70, 'Non-slip yoga mat for fitness', 20.99, 'Health & Wellness');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Toy Car', 80, 'Remote-controlled toy car', 25.99, 'Kids & Baby');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Camping Tent', 20, 'Waterproof camping tent for 4 people', 149.99, 'Sports & Outdoors');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Car Dashboard Camera', 30, 'High-definition dash cam for cars', 89.99, 'Automotive');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Puzzle', 50, '500-piece jigsaw puzzle', 19.99, 'Toys & Games');

INSERT INTO items (name, quantity, description, price, category) 
VALUES ('Almond Milk', 60, 'Organic unsweetened almond milk', 4.99, 'Groceries & Gourmet Food');

`

async function main() {
    console.log("seeding...");
    const client = new Client({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.PORT
      });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();
  
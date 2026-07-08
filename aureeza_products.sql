-- MySQL Database Schema for Aureeza Products

-- Drop existing tables if they exist to ensure a clean slate
DROP TABLE IF EXISTS products;

-- Create the products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_path VARCHAR(255)
);

-- Insert data for Clothing category
INSERT INTO products (name, category, price, description, image_path) VALUES
('Elegant Maxi Dress (Army Green)', 'clothing', 45.99, 'Beautiful evening dress perfect for special occasions', 'images/4x7243b5Ct94.jpg'),
('Trendy Boat Neck Bodycon Mini Dress (Black)', 'clothing', 38.99, 'Stunning black dress for parties and celebrations', 'images/YJdGko7hmwud.jpg'),
('Satin Bodycon Maxi Dress (Blue)', 'clothing', 49.99, 'Luxurious satin dress for elegant events', 'images/d5w6O8baUyWk.jpg'),
('Long Sleeve Midi Dress (Apricot)', 'clothing', 42.99, 'Chic midi dress for a sophisticated look', 'images/pYafJN5j6alC.jpg'),
('Summer Satin Mock Neck Dress (Army Green)', 'clothing', 39.99, 'Light and airy dress for summer occasions', 'images/fqvdt0HiLr20.jpg'),
('Designer White Kids Dress', 'clothing', 55.99, 'High-quality designer dress for kids', 'images/jbLNnJ2z5wTf.jpeg'),
('V-neck Strapless Evening Gown', 'clothing', 89.99, 'Glamorous evening gown for special events', 'images/zSfbDuDHw0z6.jpg'),
('Kids Ruffle Sleeve Outfit (Blue)', 'clothing', 29.99, 'Cute and comfortable outfit for kids', 'images/VDayj2RjegOW.jpg'),
('Classic Party Wear Dress', 'clothing', 65.99, 'Timeless party dress for any celebration', 'images/O7lO3GwHJTuR.jpg'),
('Casual Summer Dress', 'clothing', 32.99, 'Comfortable and stylish casual wear for everyday', 'images/6kAmOcoqoNWu.jpg');

-- Insert data for Jewelry category
INSERT INTO products (name, category, price, description, image_path) VALUES
('Silver Plated Jewelry Set (42 Pcs)', 'jewelry', 59.99, 'Complete set of silver plated jewelry for various occasions', 'images/56OSqGdMUnHS.jpg'),
('14k Gold Plated Multi-Layer Necklace Set', 'jewelry', 45.99, 'Elegant multi-layer necklace set with 14k gold plating', 'images/ER4arpmysQWh.jpg'),
('78 Pieces Gold Jewelry Set', 'jewelry', 69.99, 'Extensive gold jewelry collection for diverse styling', 'images/IsazV4aaZk6l.jpg'),
('Layered Gold/Silver Bracelet Set', 'jewelry', 25.99, 'Stylish layered bracelets in gold and silver tones', 'images/j4SlNIR0i6ug.jpg'),
('Bold Ring Bracelet (Hand to Wrist)', 'jewelry', 18.99, 'Unique hand-to-wrist ring bracelet for a bold statement', 'images/MkISbAIfQ6Jd.jpg'),
('Gold Jewelry Collection Set', 'jewelry', 89.99, 'Premium gold jewelry collection for a luxurious look', 'images/S8Shu2fjoIhB.jpg'),
('Diamond Jewelry Set', 'jewelry', 149.99, 'Exquisite diamond-studded jewelry set', 'images/eM7k0xznOGdh.jpg'),
('Pearl Necklace', 'jewelry', 65.99, 'Classic pearl necklace with an elegant design', 'images/kxNnwPKuXlpe.jpg'),
('Stackable Knuckle Rings Set', 'jewelry', 15.99, 'Trendy stackable knuckle rings for a modern touch', 'images/j4SlNIR0i6ug.jpg'),
('Dainty Adjustable Necklace', 'jewelry', 22.99, 'Delicate and adjustable necklace for everyday elegance', 'images/j4SlNIR0i6ug.jpg');

-- Insert data for Gift Boxes category
INSERT INTO products (name, category, price, description, image_path) VALUES
('Teen Girl Gifts Trendy Stuff Set (10 Pcs)', 'giftboxes', 49.99, 'Trendy gift set for teen girls with various items', 'images/gANqtPWeWL3n.jpg'),
('Personalized Birthday Box Gift Set', 'giftboxes', 35.99, 'Customizable birthday gift box for a personal touch', 'images/atWxI4FqSfWZ.jpg'),
('Matte Black Gift Boxes (10 Pack)', 'giftboxes', 24.99, 'Set of 10 elegant matte black gift boxes', 'images/4G2yGAhFeWss.jpg'),
('DIY Custom Scrapbook Surprise Box', 'giftboxes', 29.99, 'Creative DIY scrapbook surprise box for special memories', 'images/dGMmrm52TLSn.jpg'),
('Custom Glass Cup Birthday Set', 'giftboxes', 39.99, 'Unique birthday set with a custom glass cup', 'images/8.jpg'),
('Premium Gift Box Set', 'giftboxes', 24.99, 'High-quality gift box set for any occasion', 'images/rszKGhQAW7Ox.jpg'),
('Luxury Gift Packaging', 'giftboxes', 35.99, 'Elegant packaging for luxury gifts', 'images/e4mDlz1qT6RQ.jpg'),
('Makeup Gift Box for Girls', 'giftboxes', 45.99, 'Comprehensive makeup gift box for girls', 'images/DzqT2rDEf1pc.jpg'),
('Birthday Surprise Box', 'giftboxes', 32.99, 'Surprise box filled with birthday delights', 'images/gANqtPWeWL3n.jpg'),
('Custom Gift Pack', 'giftboxes', 28.99, 'Tailored gift pack for personalized gifting', 'images/atWxI4FqSfWZ.jpg');

-- Insert data for Fancy Items category
INSERT INTO products (name, category, price, description, image_path) VALUES
('Rubber Ducky Keychains (10 Pcs)', 'fancy', 9.99, 'Set of 10 cute rubber ducky keychains', 'images/8Q5sue2rc8Xe.jpg'),
('Novelty Anime Cartoon Keychains (7 Styles)', 'fancy', 12.99, 'Collection of 7 unique anime cartoon keychains', 'images/3kRu8W7rCShC.jpg'),
('Cute Mini Cake Kawaii Keychains', 'fancy', 7.99, 'Adorable mini cake keychains in kawaii style', 'images/oXeDXdGfa3Qe.jpg'),
('Decorative Bag Pendant Charms', 'fancy', 6.99, 'Stylish pendant charms for bags and accessories', 'images/oXeDXdGfa3Qe.jpg'),
('Mini Decor Items', 'fancy', 12.99, 'Small decorative items to add charm to any space', 'images/rszKGhQAW7Ox.jpg'),
('Decorative Keychain Accessory', 'fancy', 8.99, 'Elegant keychain accessory for a touch of style', 'images/e4mDlz1qT6RQ.jpg'),
('Kawaii Food Miniature Charms', 'fancy', 10.99, 'Cute miniature food charms for collectors', 'images/oXeDXdGfa3Qe.jpg'),
('Cute Novelty Key Rings', 'fancy', 5.99, 'Fun and cute novelty key rings', 'images/8Q5sue2rc8Xe.jpg'),
('Bag Charms Collection', 'fancy', 14.99, 'Diverse collection of bag charms to personalize your bags', 'images/3kRu8W7rCShC.jpg'),
('Car Keychain Accessories', 'fancy', 9.99, 'Stylish accessories for car keychains', 'images/3kRu8W7rCShC.jpg');

DROP DATABASE IF EXISTS `inventory_user`;
CREATE DATABASE `inventory_user`;
USE `inventory_user`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` timestamp DEFAULT NOW(),
  `updated_at` timestamp DEFAULT NOW(),
  PRIMARY KEY (`id`)
);

BEGIN;
INSERT INTO `users` VALUES (1, 'sehan123@gmail.com', 'Syeikh Anugrah', 'lovekahfi', 'Ciapus', 'Senior QA', 'Permanent', '2023-01-12 16:38:14', '2023-01-12 16:38:17');
INSERT INTO `users` VALUES (2, 'dipaferdian2@gmail.com', 'Dipa Ferdian', 'dipasayangmessi', 'Ciapus', 'Backend', 'Permanent', '2023-01-12 16:39:18', '2023-01-12 16:39:21');
INSERT INTO `users` VALUES (3, 'rivanazhar@gmail.com', 'Rivan Azhar', 'lupalagi', 'Bogor', 'QA', 'Permanent', '2023-01-12 16:36:24', '2023-01-12 16:36:27');
INSERT INTO `users` VALUES (4, 'alisyakib@gmail.com', 'Ali Otong Syihab', 'ulaihana1', 'Ciapus', 'Fullstack', 'Permanent', '2023-01-12 16:41:39', '2023-01-12 16:41:41');
INSERT INTO `users` VALUES (5, 'herdiian@gmail.com', 'Herdi Bolu', 'herdiboluian ', 'Ciapus', 'Frontend', 'Permanent', '2023-01-12 16:40:39', '2023-01-12 16:40:44');
INSERT INTO `users` VALUES (6, 'oncom123@gmail.com', 'Deris Oncom', 'deris123', 'Ciapus', 'Design', 'Permanent', '2023-01-12 16:41:39', '2023-01-12 16:41:41');
INSERT INTO `users` VALUES (7, 'kardonovganteng@gmail.com', 'Buyung Upi', 'buyungwidi', 'Ciapus', 'Design', 'Permanent', '2023-01-12 16:41:39', '2023-01-12 16:41:41');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `code` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` text,
  `status` varchar(100) NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);
BEGIN;
INSERT INTO `categories` VALUES (1, 1, 'MERCEDEZ BENZ', 'TURBO', 'EXC', 'EXCLUSIVE CAR', 'ACTIVE', '234.PNG');
INSERT INTO `categories` VALUES (2, 2, 'FORD', 'MUSTANG', 'SC', 'SUPER CAR', 'ACTIVE', '789.PNG');
INSERT INTO `categories` VALUES (3, 3, 'LAMBORGHINI', 'MURCELLAGO', 'SC', 'SUPER CAR', 'ACTIVE', '456.PNG');
INSERT INTO `categories` VALUES (4, 4, 'HONDA', 'JAZZ', 'CC', 'CITY CAR', 'ACTIVE', '123.PNG');
INSERT INTO `categories` VALUES (5, 5, 'MITSUBISHI', 'LANCER', 'SC', 'SUPER CAR', 'NOT ACTIVE', '101.PNG');
INSERT INTO `categories` VALUES (6, NULL, 'DAIHATSU', 'SIGRA', 'FC', 'FAMILY CAR', 'NOT ACTIVE', '127.PNG');
INSERT INTO `categories` VALUES (7, NULL, 'TOYOTA', 'FORTUNER', 'FC', 'FAMILY CAR', 'NOT ACTIVE', '121.PNG');
COMMIT;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `code` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` longtext  ,
  `photo` varchar(100) DEFAULT NULL,
  `qty` double DEFAULT '0',
  `unit` varchar(100) DEFAULT '0',
  `price` double DEFAULT '0',
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
);

BEGIN;
INSERT INTO `products` VALUES (1, 1, 1, 'MERCEDEZ BENZ', 'TURBO', 'EXC', 'NEW TECHNOLOGY', '234.PNG', 15, '15', 700000000, 'ACTIVE');
INSERT INTO `products` VALUES (2, 2, 2, 'FORD', 'MUSTANG', 'SC', 'NEW TECHNOLOGY', '789.PNG', 17, '17', 700000000, 'ACTIVE');
INSERT INTO `products` VALUES (3, 3, 3, 'LAMBHORGINI', 'MURCELLAGO', 'SC', 'NEW TECHNOLOGY', '456.PNG', 20, '20', 800000000, 'ACTIVE');
INSERT INTO `products` VALUES (4, 4, 4, 'HONDA', 'JAZZ', 'CC', 'NEW TECHNOLOGY', '123.PNG', 10, '10', 500000000, 'ACTIVE');
INSERT INTO `products` VALUES (5, 5, 5, 'MITSUBISHI', 'LANCER', 'SC', 'NEW TECHNOLOGY', '101.PNG', 25, '25', 400000000, 'NOT ACTIVE');
INSERT INTO `products` VALUES (6, NULL, NULL, 'TOYOTA', 'FORTUNER', 'FC', 'NEW TECHNOLOGY', '121.PNG', 18, '18', 450000000, 'NOT ACTIVE');
INSERT INTO `products` VALUES (7, NULL, NULL, 'DAIHATSU', 'SIGRA', 'FC', 'NEW TECHNOLOGY', '127.PNG', 50, '50', 250000000, 'NOT ACTIVE');
COMMIT;

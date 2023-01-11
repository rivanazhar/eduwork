CREATE DATABASE `profile`;
USE `profile`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` int(15) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'Rivan','lupalagi@gmail.com',1234,'Pria','Bogor'),(2,'Dipa','lupalagi@gmail.com',1234,'Pria','Bogor'),(3,'Sehan','lupalagi@gmail.com',1234,'Pria','Gg Oding'),(4,'Ulay','lupalagi@gmail.com',1234,'Pria','Gg Oding'),(5,'Bolu','lupalagi@gmail.com',1234,'Pria','Gg Oding'),(6,'Jalu','lupalagi@gmail.com',1234,'Pria','Gg Oding'),(7,'Setiadi','lupalagi@gmail.com',1234,'Pria','Pasir Kuda'),(8,'Herdi','lupalagi@gmail.com',1234,'Pria','Ciapus'),(9,'Anugrah','lupalagi@gmail.com',1234,'Perempuan','Ciapus'),(10,'Syihab','lupalagi@gmail.com',1234,'Perempuan','Ciapus'),(11,'Azhar','lupalagi@gmail.com',1234,'Pria','Gg aut'),(12,'Ferdian','lupalagi@gmail.com',1234,'Perempuan','Ciapus');
SELECT name as nama,phone as nomer_hp, address as alamat FROM users;
UNLOCK TABLES;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
  `language_id` int NOT NULL AUTO_INCREMENT,
  `language_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `user_language`;
CREATE TABLE `user_language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `language_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `language_id` (`language_id`),
  CONSTRAINT `user_language_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `user_language_ibfk_2` FOREIGN KEY (`language_id`) REFERENCES `language` (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'client',
  `desc` varchar(255) DEFAULT NULL,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `language` (`language_id`, `language_name`) VALUES
(1, 'JavaScript');
INSERT INTO `language` (`language_id`, `language_name`) VALUES
(2, 'Java');
INSERT INTO `language` (`language_id`, `language_name`) VALUES
(3, 'Python');
INSERT INTO `language` (`language_id`, `language_name`) VALUES
(4, 'PHP'),
(5, 'C#'),
(6, 'C/C++');

INSERT INTO `user_language` (`id`, `user_id`, `language_id`) VALUES
(103, 24, 2);
INSERT INTO `user_language` (`id`, `user_id`, `language_id`) VALUES
(104, 24, 1);
INSERT INTO `user_language` (`id`, `user_id`, `language_id`) VALUES
(106, 25, 2);
INSERT INTO `user_language` (`id`, `user_id`, `language_id`) VALUES
(107, 25, 1),
(108, 10, 2),
(109, 10, 1),
(110, 10, 4),
(111, 10, 6),
(112, 10, 5),
(113, 10, 3);

INSERT INTO `users` (`user_id`, `email`, `full_name`, `avatar`, `password`, `gender`, `role`, `desc`, `is_delete`) VALUES
(10, 'huy656363@gmail.com', 'Nguyễn Thanh Huy', 'https://cdn1.vectorstock.com/i/1000x1000/61/50/avatar-business-man-graphic-vector-9646150.jpg', '$2b$10$UEw8MQ8DobNnE0YyI4D3PeojhGFvJDVEKedBqFT4xLW5e6RXuqB5u', 'Male', 'admin', 'kkkkkk', 0);
INSERT INTO `users` (`user_id`, `email`, `full_name`, `avatar`, `password`, `gender`, `role`, `desc`, `is_delete`) VALUES
(24, 'huy635363@gmail.com', 'Nguyễn Thanh Huy', 'https://thumbs.dreamstime.com/b/cartoon-avatar-man-front-view-graphic-brown-hair-wearing-eyeglasses-over-isolated-background-illustration-73243082.jpg', '$2b$10$a2MPNGog.x.IYwpUAAugruVk7faKEVlEVDKqdzNbvSzd9mS7q0Nj2', 'Male', 'admin', 'huhuhu', 0);
INSERT INTO `users` (`user_id`, `email`, `full_name`, `avatar`, `password`, `gender`, `role`, `desc`, `is_delete`) VALUES
(25, 'test@gmail.com', 'nguyen van a', 'https://cdn4.vectorstock.com/i/1000x1000/77/43/young-man-head-avatar-cartoon-face-character-vector-21757743.jpg', '$2b$10$FtGYNWg4d9Z4.QEFlzKKtO5vTHli/KpvfWXUAItcbXxDTHj7AS1wq', 'Male', 'admin', 'admin ne', 0);
INSERT INTO `users` (`user_id`, `email`, `full_name`, `avatar`, `password`, `gender`, `role`, `desc`, `is_delete`) VALUES
(26, 'huy66666@gmail.com', 'nguyễn thanh huy', 'avatar', '$2b$10$KN6V.SY5nu7EKDJ12N2.JOJlI1.nmcIRikXQyyG.EXW6qSrNuP22y', 'Male', 'client', NULL, 1),
(27, 'huhuhuh@gmail.com', 'huhuhuhuhu', 'avatr', '$2b$10$DGT52OhyBZKIUmY7GziV3uhqz4W2HJ1Al5reFvarutHecl4ABoXOe', 'Male', 'client', NULL, 1),
(28, 'hhuhuhhuh@gmail.com', 'nguyễn', 'avat', '$2b$10$Rdv2LVbxYXUC5BAX9.sxG.zbWJ2ZjtOdYhry7uhcj1P36ijVaXqlW', 'Male', 'client', NULL, 1),
(29, 'hhuhuhhuh@gmail.com', 'nguyễn', 'avat', '$2b$10$9Ykm1XWuRYLSSZbmJfkYHO6KZFREhgXRcnsl6DEhP/O.SsmYPW9Ve', 'Male', 'client', NULL, 1),
(30, 'hhhhh@gmail.com', 'ngngngnng', 'avt', '$2b$10$mK/ETDb1Vy3.o07dqeqMTe6eRRymK34rpT6Kj8JBU2wAbERzb2RWa', 'Male', 'client', NULL, 1),
(31, 'hhhhhhhh@gmail.com', 'huhhhuhuuhuh', 'avt', '$2b$10$tkkX3y.0uk1bPFq7TBEZnevAJJHxXqzLyKl8CFqe3iLrGKzCCBRPi', 'Male', 'client', NULL, 1),
(32, 'hhh@gmail.com', '123', 'avt', '$2b$10$UgBoiiPZwVP3eEKGdy9Mc.cUZf3vCkVRXGnWhTx64HlFhbzF2Wh56', 'Male', 'client', NULL, 1),
(33, 'huhu@gmail.com', 'huhu', 'avt', '$2b$10$wDNk7IFaaOCwLkjBVytXCee/8dm2IKJ1BfJdXBNl9kRyiMitp7p.m', 'Male', 'client', NULL, 1),
(34, 'huhuhu@gmail.com', 'huhuhu', 'avt', '$2b$10$BM3rQH5Vw2woGWOW4yjOAuKLcltg3HKg2wYrygfE9uC44EVwsb/Ge', 'Male', 'client', NULL, 1);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
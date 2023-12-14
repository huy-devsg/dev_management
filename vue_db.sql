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
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `user_reset_password`;
CREATE TABLE `user_reset_password` (
  `user_id` int NOT NULL,
  `is_update` tinyint(1) DEFAULT NULL,
  `updateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `user_reset_password_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'client',
  `desc` varchar(255) DEFAULT NULL,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
(114, 35, 1);


INSERT INTO `user_reset_password` (`user_id`, `is_update`, `updateAt`) VALUES
(10, 1, NULL);


INSERT INTO `users` (`user_id`, `email`, `full_name`, `avatar`, `password`, `gender`, `role`, `desc`, `is_delete`) VALUES
(10, 'huy656363@gmail.com', 'Nguyễn Thanh Huy', 'https://cdn1.vectorstock.com/i/1000x1000/61/50/avatar-business-man-graphic-vector-9646150.jpg', '$2b$10$GkxlbNjP/apYP7Vc9O0CV.FoCCCpzMC/7u62hc5QJcevkbo2TYvXm', 1, 'admin', 'kkkkkk', 0);
INSERT INTO `users` (`user_id`, `email`, `full_name`, `avatar`, `password`, `gender`, `role`, `desc`, `is_delete`) VALUES
(35, 'huy656363@gmail.com', 'Nguyễn Thanh Huy', 'https://cdn1.vectorstock.com/i/1000x1000/61/50/avatar-business-man-graphic-vector-9646150.jpg', NULL, 1, 'admin', 'kkkkkk', 0);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
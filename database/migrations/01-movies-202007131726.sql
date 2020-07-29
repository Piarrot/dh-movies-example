-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: movies
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS `movies_catchup`;
CREATE DATABASE `movies_catchup`;
USE `movies_catchup`;

--
-- Table structure for table `actor_movie`
--

DROP TABLE IF EXISTS `actor_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actor_movie` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `actorId` int(10) unsigned NOT NULL,
  `movieId` int(10) unsigned NOT NULL,
  `screentime` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `actor_movie_actor_id_foreign` (`actorId`),
  KEY `actor_movie_movie_id_foreign` (`movieId`),
  CONSTRAINT `actor_movie_actor_id_foreign` FOREIGN KEY (`actorId`) REFERENCES `actors` (`id`),
  CONSTRAINT `actor_movie_movie_id_foreign` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actor_movie`
--

LOCK TABLES `actor_movie` WRITE;
/*!40000 ALTER TABLE `actor_movie` DISABLE KEYS */;
INSERT INTO `actor_movie` VALUES (1,NULL,NULL,1,1,200),(2,NULL,NULL,2,1,NULL),(4,NULL,NULL,4,2,200),(5,NULL,NULL,5,2,200),(6,NULL,NULL,6,2,150),(7,NULL,NULL,7,3,131),(8,NULL,NULL,7,4,NULL),(9,NULL,NULL,8,3,131),(10,NULL,NULL,8,4,NULL),(11,NULL,NULL,9,3,131),(12,NULL,NULL,9,4,NULL),(13,NULL,NULL,10,5,NULL),(14,NULL,NULL,11,5,NULL),(15,NULL,NULL,12,5,NULL),(16,NULL,NULL,13,6,NULL),(17,NULL,NULL,13,8,NULL),(18,NULL,NULL,13,9,NULL),(19,NULL,NULL,14,6,NULL),(20,NULL,NULL,14,8,NULL),(21,NULL,NULL,14,9,NULL),(22,NULL,NULL,15,6,NULL),(23,NULL,NULL,15,8,NULL),(24,NULL,NULL,15,9,NULL),(25,NULL,NULL,16,7,NULL),(26,NULL,NULL,17,7,NULL),(27,NULL,NULL,18,7,NULL),(28,NULL,NULL,19,10,NULL),(29,NULL,NULL,20,10,NULL),(30,NULL,NULL,21,11,NULL),(31,NULL,NULL,22,11,NULL),(32,NULL,NULL,22,9,NULL),(33,NULL,NULL,23,11,NULL),(34,NULL,NULL,24,12,NULL),(35,NULL,NULL,25,12,NULL),(36,NULL,NULL,26,12,NULL),(37,NULL,NULL,27,13,NULL),(38,NULL,NULL,27,14,NULL),(39,NULL,NULL,27,19,NULL),(40,NULL,NULL,28,13,NULL),(41,NULL,NULL,28,14,NULL),(42,NULL,NULL,29,20,NULL),(43,NULL,NULL,30,21,NULL),(44,NULL,NULL,3,1,125),(46,NULL,NULL,4,1,125),(47,NULL,NULL,11,22,125),(48,NULL,NULL,17,22,200);
/*!40000 ALTER TABLE `actor_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `firstName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  `favoriteMovieId` int(10) unsigned DEFAULT NULL,
  `profilePic` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `actors_favorite_movie_id_foreign` (`favoriteMovieId`),
  CONSTRAINT `actors_favorite_movie_id_foreign` FOREIGN KEY (`favoriteMovieId`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,NULL,NULL,'Sam','Worthington',7.5,1,'profilePic-1594670324302.png'),(2,NULL,NULL,'Zoe','Saldana',5.5,2,NULL),(3,NULL,NULL,'Sigourney','Weaver',9.7,NULL,NULL),(4,NULL,NULL,'Leonardo','Di Caprio',3.5,4,NULL),(5,NULL,NULL,'Kate','Winslet',1.5,5,NULL),(6,NULL,NULL,'Billy','Zane',7.5,6,NULL),(7,NULL,NULL,'Mark','Hamill',6.5,7,NULL),(8,NULL,NULL,'Harrison','Ford',7.5,8,NULL),(9,NULL,NULL,'Carrie','Fisher',7.5,9,NULL),(10,NULL,NULL,'Sam','Neill',2.5,10,NULL),(11,NULL,NULL,'Laura','Dern',7.5,11,NULL),(12,NULL,NULL,'Jeff','Goldblum',4.5,NULL,NULL),(13,NULL,NULL,'Daniel','Radcliffe',7.5,13,NULL),(14,NULL,NULL,'Emma','Watson',2.5,14,NULL),(15,NULL,NULL,'Rupert','Grint',6.2,15,NULL),(16,NULL,NULL,'Shia','LaBeouf',9.5,16,NULL),(17,NULL,NULL,'Rosie','Huntington-Whiteley',1.5,17,NULL),(18,NULL,NULL,'Matthew','Broderick',6.1,18,NULL),(19,NULL,NULL,'James','Earl Jones',7.5,19,NULL),(20,NULL,NULL,'Jeremy','Irons',7.2,20,NULL),(21,NULL,NULL,'Johnny','Depp',1.5,21,NULL),(22,NULL,NULL,'Helena','Bonham Carter',7.5,1,NULL),(23,NULL,NULL,'Mia','Wasikowska',7.5,2,NULL),(24,NULL,NULL,'Albert','Brooks',2.5,3,NULL),(25,NULL,NULL,'Ellen','DeGeneres',2.6,4,NULL),(26,NULL,NULL,'Alexander','Gould',7.5,5,NULL),(27,NULL,NULL,'Tom','Hanks',4.4,6,NULL),(28,NULL,NULL,'Tim','Allen',7.5,7,NULL),(29,NULL,NULL,'Sean','Penn',9.2,8,NULL),(30,NULL,NULL,'Adam','Sandler',3.1,9,NULL),(31,NULL,NULL,'Renee','Zellweger',9.5,10,NULL),(32,NULL,NULL,'Emilia','Clarke',8.2,11,NULL),(33,NULL,NULL,'Peter','Dinklage',2.3,12,NULL),(34,NULL,NULL,'Kit','Harington',2.4,NULL,NULL),(35,NULL,NULL,'Jared','Padalecki',2.8,14,NULL),(36,NULL,NULL,'Jensen','Ackles',5.5,15,NULL),(37,NULL,NULL,'Jim','Beaver',2.6,16,NULL),(38,NULL,NULL,'Andrew','Lincoln',3.3,17,NULL),(39,NULL,NULL,'Jon','Bernthal',2.9,NULL,NULL),(40,NULL,NULL,'Sarah','Callies',2.4,19,NULL),(41,NULL,NULL,'Jim','Caviezel',1.9,20,NULL),(42,NULL,NULL,'Taraji','Henson',5.9,21,NULL),(43,NULL,NULL,'Kevin','Chapman',2.9,1,NULL),(44,NULL,NULL,'Johnny','Galecki',2.3,2,NULL),(45,NULL,NULL,'Jim','Parsons',6.9,3,NULL),(46,NULL,NULL,'Kaley','Cuoco',2.3,4,NULL),(47,NULL,NULL,'Bryan','Cranston',7.9,NULL,NULL),(48,NULL,NULL,'Aaron','Paul',5.9,6,NULL),(49,NULL,NULL,'Anna','Gunn',3.1,7,NULL);
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'2016-07-04 03:00:00',NULL,'Comedia'),(2,'2014-07-04 03:00:00',NULL,'Terror'),(3,'2013-07-04 03:00:00',NULL,'Drama'),(4,'2011-07-04 03:00:00',NULL,'Accion'),(5,'2010-07-04 03:00:00',NULL,'Ciencia Ficcion'),(6,'2013-07-04 03:00:00',NULL,'Suspenso'),(7,'2005-07-04 03:00:00',NULL,'Animacion'),(8,'2003-07-04 03:00:00',NULL,'Aventuras'),(9,'2008-07-04 03:00:00',NULL,'Documental'),(10,'2013-07-04 03:00:00',NULL,'Infantiles'),(11,'2011-07-04 03:00:00',NULL,'Fantasia'),(12,'2013-07-04 03:00:00',NULL,'Musical');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `awards` int(10) unsigned NOT NULL DEFAULT 0,
  `revenue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `releaseDate` datetime NOT NULL,
  `length` int(10) unsigned DEFAULT NULL,
  `genreId` int(10) unsigned DEFAULT NULL,
  `coverArt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `movies_genre_id_foreign` (`genreId`),
  CONSTRAINT `movies_genre_id_foreign` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,NULL,NULL,'Avatar',3,'$475.3 million','2010-10-02 00:00:00',120,5,'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg'),(2,NULL,NULL,'Titanic',11,'','1997-12-19 00:00:00',320,3,'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg'),(3,NULL,NULL,'La Guerra de las galaxias: Episodio VI',7,'$475.3 million','2004-06-27 00:00:00',131,5,'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY999_CR0,0,644,999_AL_.jpg'),(4,NULL,NULL,'La Guerra de las galaxias: Episodio VII',6,'','2003-11-04 00:00:00',180,5,NULL),(5,NULL,NULL,'Parque Jurasico',5,'','1999-01-04 00:00:00',270,5,NULL),(6,NULL,NULL,'Harry Potter y las Reliquias de la Muerte - Parte 2',2,'','2008-07-04 00:00:00',190,6,NULL),(7,NULL,NULL,'Transformers: el lado oscuro de la luna',1,'','2005-07-04 00:00:00',NULL,5,NULL),(8,NULL,NULL,'Harry Potter y la piedra filosofal',1,'','2008-04-04 00:00:00',120,8,NULL),(9,NULL,NULL,'Harry Potter y la cámara de los secretos',2,'','2009-08-04 00:00:00',200,8,NULL),(10,NULL,NULL,'El rey león',3,'','2000-02-04 00:00:00',NULL,10,NULL),(11,NULL,NULL,'Alicia en el país de las maravillas',2,'','2008-07-04 00:00:00',120,NULL,NULL),(12,NULL,NULL,'Buscando a Nemo',2,'','2000-07-04 00:00:00',110,7,NULL),(13,NULL,NULL,'Toy Story',0,'','2008-03-04 00:00:00',150,7,NULL),(14,NULL,NULL,'Toy Story 2',2,'','2003-04-04 00:00:00',120,7,NULL),(15,NULL,NULL,'La vida es bella',5,'','1994-10-04 00:00:00',NULL,3,NULL),(16,NULL,NULL,'Mi pobre angelito',1,'','1989-01-03 00:00:00',120,1,'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,672,1000_AL_.jpg'),(17,NULL,NULL,'Intensamente',2,'','2008-07-04 00:00:00',120,7,NULL),(18,NULL,NULL,'Carrozas de fuego',7,'','1980-07-04 00:00:00',180,NULL,NULL),(19,NULL,NULL,'Big',2,'','1988-02-04 00:00:00',130,8,NULL),(20,NULL,NULL,'I am Sam',4,'','1999-03-04 00:00:00',130,3,NULL),(21,NULL,NULL,'Hotel Transylvania',1,'','2012-05-04 00:00:00',90,10,NULL),(22,NULL,NULL,'Cool Movie',5,'$-10 Millions','2020-07-01 00:00:00',250,1,'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY999_CR0,0,644,999_AL_.jpg');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'movies'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-13 17:26:35

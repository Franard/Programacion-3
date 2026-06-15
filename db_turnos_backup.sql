CREATE DATABASE IF NOT EXISTS `prog3_turnos`;
USE `prog3_turnos`;

-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: prog3_turnos
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

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

--
-- Table structure for table `especialidades`
--

DROP TABLE IF EXISTS `especialidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especialidades` (
  `id_especialidad` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) NOT NULL,
  `activo` tinyint(3) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_especialidad`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidades`
--

LOCK TABLES `especialidades` WRITE;
/*!40000 ALTER TABLE `especialidades` DISABLE KEYS */;
INSERT INTO `especialidades` VALUES (1,'PEDIATRÍA',1),(2,'CLÍNICA',1),(3,'TRAUMATOLOGÍA',1),(4,'INFECTOLOGÍA',1),(9,'NEUROLOGIA',1),(15,'Cardiología Infantil',0),(16,'Especialidad Test',1),(19,'Especialidad Test 4856',0),(20,'Especialidad Test 31687',0),(21,'Especialidad Test 54325',0),(22,'Especialidad Test 64759',0),(23,'Especialidad Test 58326',0),(24,'Especialidad Test 85338',0),(25,'Especialidad Test 23390',0),(26,'Especialidad Test 13483',0);
/*!40000 ALTER TABLE `especialidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicos`
--

DROP TABLE IF EXISTS `medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicos` (
  `id_medico` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_especialidad` int(10) unsigned NOT NULL,
  `matricula` int(10) unsigned NOT NULL,
  `descripcion` text DEFAULT NULL,
  `valor_consulta` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_medico`),
  UNIQUE KEY `matricula` (`matricula`),
  KEY `fk_medicos_especialidades` (`id_especialidad`),
  KEY `fk_medicos_usuarios` (`id_usuario`),
  CONSTRAINT `fk_medicos_especialidades` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidades` (`id_especialidad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_medicos_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicos`
--

LOCK TABLES `medicos` WRITE;
/*!40000 ALTER TABLE `medicos` DISABLE KEYS */;
INSERT INTO `medicos` VALUES (1,1,1,1000,'test',5000.00),(2,2,1,2000,'test',5000.00),(3,3,3,3000,'test',10000.00),(4,4,4,4000,'test',15000.00),(5,1,1,5000,'Especialista en cardiología clínica',15000.50),(6,16,1,7000,'Médico recién graduado',25000.00);
/*!40000 ALTER TABLE `medicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicos_obras_sociales`
--

DROP TABLE IF EXISTS `medicos_obras_sociales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicos_obras_sociales` (
  `id_medico_obra_social` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_medico` int(10) unsigned NOT NULL,
  `id_obra_social` int(10) unsigned NOT NULL,
  `activo` tinyint(3) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_medico_obra_social`),
  KEY `fk_mos_medico` (`id_medico`),
  KEY `fk_mos_obra_social` (`id_obra_social`),
  CONSTRAINT `fk_mos_medico` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_mos_obra_social` FOREIGN KEY (`id_obra_social`) REFERENCES `obras_sociales` (`id_obra_social`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicos_obras_sociales`
--

LOCK TABLES `medicos_obras_sociales` WRITE;
/*!40000 ALTER TABLE `medicos_obras_sociales` DISABLE KEYS */;
INSERT INTO `medicos_obras_sociales` VALUES (1,1,1,1),(2,2,1,1),(3,3,2,1),(4,4,3,1);
/*!40000 ALTER TABLE `medicos_obras_sociales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obras_sociales`
--

DROP TABLE IF EXISTS `obras_sociales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `obras_sociales` (
  `id_obra_social` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `porcentaje_descuento` decimal(9,2) NOT NULL,
  `es_particular` tinyint(1) unsigned NOT NULL DEFAULT 0,
  `activo` tinyint(3) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_obra_social`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obras_sociales`
--

LOCK TABLES `obras_sociales` WRITE;
/*!40000 ALTER TABLE `obras_sociales` DISABLE KEYS */;
INSERT INTO `obras_sociales` VALUES (1,'Jerárquicos','jer',10.00,0,1),(2,'OSUNER','osu',10.00,0,1),(3,'OSECAC','ose',11.00,0,1),(4,'OSUNER 3','OSU',13.00,0,1),(5,'OS Test','Desc',50.00,0,1);
/*!40000 ALTER TABLE `obras_sociales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pacientes` (
  `id_paciente` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_obra_social` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_paciente`),
  KEY `fk_pacientes_obras_sociales` (`id_obra_social`),
  KEY `fk_pacientes_usuarios` (`id_usuario`),
  CONSTRAINT `fk_pacientes_obras_sociales` FOREIGN KEY (`id_obra_social`) REFERENCES `obras_sociales` (`id_obra_social`),
  CONSTRAINT `fk_pacientes_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (1,5,1),(2,6,2),(3,7,3),(4,18,1);
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turnos_reservas`
--

DROP TABLE IF EXISTS `turnos_reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turnos_reservas` (
  `id_turno_reserva` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_medico` int(10) unsigned NOT NULL,
  `id_paciente` int(10) unsigned NOT NULL,
  `id_obra_social` int(10) unsigned NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `valor_total` decimal(10,2) NOT NULL,
  `atentido` tinyint(3) unsigned NOT NULL,
  `activo` tinyint(3) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_turno_reserva`),
  KEY `fk_turnos_reservas_pacientes` (`id_paciente`),
  KEY `fk_turnos_reservas_medicos` (`id_medico`),
  KEY `fk_turnos_reservas_obras_sociales` (`id_obra_social`),
  CONSTRAINT `fk_turnos_reservas_medicos` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_turnos_reservas_obras_sociales` FOREIGN KEY (`id_obra_social`) REFERENCES `obras_sociales` (`id_obra_social`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_turnos_reservas_pacientes` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turnos_reservas`
--

LOCK TABLES `turnos_reservas` WRITE;
/*!40000 ALTER TABLE `turnos_reservas` DISABLE KEYS */;
INSERT INTO `turnos_reservas` VALUES (1,1,1,1,'2026-04-01 17:00:00',4500.00,1,0),(2,3,2,2,'2026-04-01 18:00:00',9000.00,1,1),(4,4,3,3,'2026-04-01 19:00:00',13500.00,0,1),(5,3,2,2,'2026-04-14 18:00:00',9000.00,0,1),(6,3,2,2,'2026-04-21 18:00:00',9000.00,0,1),(7,4,3,3,'2026-05-07 16:00:00',133500.00,0,1),(8,1,1,1,'2026-06-20 10:30:00',-45000.00,0,1),(9,1,1,1,'2026-10-10 10:00:00',-45000.00,0,1),(10,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(11,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(12,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(13,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(14,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(15,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(16,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(17,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(18,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0),(19,1,1,1,'2026-12-12 10:00:00',-45000.00,0,0);
/*!40000 ALTER TABLE `turnos_reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `documento` varchar(20) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `foto_path` varchar(255) NOT NULL,
  `rol` tinyint(3) unsigned NOT NULL,
  `activo` tinyint(3) unsigned NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `documento` (`documento`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'31000111','Lopez','Marcelo','lopmar@correo.com','$2b$10$.q77J0cJXhwmpp2PKB.Y0OOpjN2PS/bQ2JUO32T1p7zxiXbXXfmdS','',1,1),(2,'31000112','Diaz','Juan','diajua@correo.com','$2b$10$qDdpBagYUIud8LgVnzTed.ZaL6ZNKjnK6EI6Gs5Awh1tHN905zCyC','',1,1),(3,'31000113','Benitez','Horacio','benhor@correo.com','$2b$10$KCP2zoJUQhB4QhFyJ0Yyl.bwbZxg.Uhqmg3UYeJJDxdqLMcc4ADlG','',1,1),(4,'31000114','Perez','Luis','perlui@correo.com','$2b$10$zGZCf6HJJ2KHH.4UGw7ztOFCeV/lpjol1aDX9GvJpJiCL3EtcqyOO','',1,1),(5,'41000111','Lopez','Jacinto','lopjac@correo.com','$2b$10$3welXDilBhT9BVre13.raedjafYWmV7d.3fbSIcrM6tXf4ZrRM.QK','',2,1),(6,'41000112','Hunk','Lorena','hunlor@correo.com','$2b$10$rEwhkQwKPe5XpEYwCcIP8eXP0LSsZueuAPAJ4E8s8L4wcb2eh41km','',2,1),(7,'41000113','Aguirre','Brian','agubri@correo.com','$2b$10$pmUndvBJv6Z7WHOYYGYOuOpJL4coz1Z5CM2ukgjOuIeE0IXz8jJG.','',2,1),(8,'51000111','Fernandez','Benito','ferben@correo.com','$2b$10$DRouueMlB8UN6PK1g2gvo.Q5Q5coMYniuQvgfsDDxwAiJay32Tmdq','',3,1),(10,'51000112','Gomez','Silvia','gomsil@correo.com','$2b$10$kW3ApjwyYqWhb7sNV2QBYui9SRW8/A/CLH7H9Prv/zP5Sg3SsolOS','',3,1),(16,'40123456','Quito','Esteban','esteban@correo.com','$2b$10$K9PHUAMu5JgiqCzj.1a3j.yxQmUgzVqT.wsU.tR/zOZkuKjfQ0.DK','sin-foto.jpg',2,1),(17,'11223344','Admin','Bruno','admin@clinica.com','$2b$10$f8Xi6mfR9itLfBWmK4bKGeidJ8s3cEs39zCuTdE6wk5yonMHJ0wP.','default.png',3,1),(18,'123','a','b','a@clinica.com','$2b$10$DTUocw0EH1XwzSL0aoiPzebXrwnQjuPLGQ9/KHs0DWjoGYr0QknvO','default.png',2,1),(19,'77747889','Test','Medico','medtest47889@test.com','$2b$10$loDfsHa9c7eOTfA9Pe1V4.oLwJOxlMgh0.zZOfhKVzlMO6.2PLTFi','med.jpg',1,1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `v_medicos`
--

DROP TABLE IF EXISTS `v_medicos`;
/*!50001 DROP VIEW IF EXISTS `v_medicos`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `v_medicos` AS SELECT
 1 AS `id_medico`,
  1 AS `id_usuario`,
  1 AS `apellido`,
  1 AS `nombres`,
  1 AS `email`,
  1 AS `foto_path` */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `v_pacientes`
--

DROP TABLE IF EXISTS `v_pacientes`;
/*!50001 DROP VIEW IF EXISTS `v_pacientes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `v_pacientes` AS SELECT
 1 AS `id_paciente`,
  1 AS `id_usuario`,
  1 AS `apellido`,
  1 AS `nombres`,
  1 AS `email`,
  1 AS `id_obra_social`,
  1 AS `descripcion_obra_social`,
  1 AS `foto_path` */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `v_medicos`
--

/*!50001 DROP VIEW IF EXISTS `v_medicos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_medicos` AS select `m`.`id_medico` AS `id_medico`,`m`.`id_usuario` AS `id_usuario`,`u`.`apellido` AS `apellido`,`u`.`nombres` AS `nombres`,`u`.`email` AS `email`,`u`.`foto_path` AS `foto_path` from (`medicos` `m` join `usuarios` `u` on(`m`.`id_usuario` = `u`.`id_usuario`)) where `u`.`activo` = 1 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_pacientes`
--

/*!50001 DROP VIEW IF EXISTS `v_pacientes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_pacientes` AS select `p`.`id_paciente` AS `id_paciente`,`p`.`id_usuario` AS `id_usuario`,`u`.`apellido` AS `apellido`,`u`.`nombres` AS `nombres`,`u`.`email` AS `email`,`os`.`id_obra_social` AS `id_obra_social`,`os`.`descripcion` AS `descripcion_obra_social`,`u`.`foto_path` AS `foto_path` from ((`pacientes` `p` join `usuarios` `u` on(`p`.`id_usuario` = `u`.`id_usuario`)) join `obras_sociales` `os` on(`p`.`id_obra_social` = `os`.`id_obra_social`)) where `u`.`activo` = 1 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-15 15:04:11

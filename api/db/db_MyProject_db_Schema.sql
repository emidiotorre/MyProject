--
-- Database: `myproject_db`
--

CREATE DATABASE IF NOT EXISTS `myproject_db`;
USE `myproject_db`;


-- ENTITIES

--
-- Struttura della tabella `paziente`
--

CREATE TABLE IF NOT EXISTS `paziente` (
	
	-- RELAZIONI
	`trattamento` int(11)  REFERENCES trattamento(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(40) ,
	`name` varchar(40) ,
	`password` varchar(40)  NOT NULL,
	`roles` varchar(40) ,
	`surname` varchar(40) ,
	`username` varchar(40)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

INSERT INTO `myproject_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '1a1dc91c907325c69271ddf0c944bc72', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `myproject_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





--
-- Struttura della tabella `appuntamento`
--

CREATE TABLE IF NOT EXISTS `appuntamento` (
	
	-- RELAZIONI
	`cure` int(11)  REFERENCES cura(_id),
	`studio` int(11)  REFERENCES studio(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `cura`
--

CREATE TABLE IF NOT EXISTS `cura` (
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `fattura`
--

CREATE TABLE IF NOT EXISTS `fattura` (
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `poltrona`
--

CREATE TABLE IF NOT EXISTS `poltrona` (
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `preventivo`
--

CREATE TABLE IF NOT EXISTS `preventivo` (
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `studio`
--

CREATE TABLE IF NOT EXISTS `studio` (
	
	-- RELAZIONI
	`poltrone` int(11)  REFERENCES poltrona(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `trattamento`
--

CREATE TABLE IF NOT EXISTS `trattamento` (
	
	-- RELAZIONI
	`appuntamenti` int(11)  REFERENCES appuntamento(_id),

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);







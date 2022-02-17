-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2022 at 11:51 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app`
--
CREATE DATABASE IF NOT EXISTS `app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `app`;

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `vin` varchar(30) COLLATE utf8_romanian_ci NOT NULL,
  `brand` varchar(50) COLLATE utf8_romanian_ci NOT NULL,
  `model` varchar(255) COLLATE utf8_romanian_ci DEFAULT NULL,
  `registration_plate` varchar(20) COLLATE utf8_romanian_ci NOT NULL,
  `engine` varchar(10) COLLATE utf8_romanian_ci DEFAULT NULL,
  `last_revision` date DEFAULT NULL,
  `itp_from` date NOT NULL,
  `itp_until` date NOT NULL,
  `rca_from` date NOT NULL,
  `rca_until` date NOT NULL,
  `enabled` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_romanian_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `id_client`, `vin`, `brand`, `model`, `registration_plate`, `engine`, `last_revision`, `itp_from`, `itp_until`, `rca_from`, `rca_until`, `enabled`, `created_at`, `updated_at`) VALUES
(1, 3, '100000000000000', 'BMW', NULL, 'B-100-UPD', NULL, NULL, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 1, '2022-01-03 14:06:18', NULL),
(2, 3, '100000000000000', 'BMW', NULL, 'B-100-UPD', NULL, NULL, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 1, '2022-01-03 14:06:30', NULL),
(3, 3, '100000000000000', 'BMW', NULL, 'B-100-UPD', NULL, NULL, '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', 1, '2022-01-03 14:11:50', NULL),
(4, 3, '', 'BMW', 'Model', 'B-100-UPD', '1300', '2020-12-22', '2020-12-22', '2020-12-22', '2020-12-22', '2020-12-22', 0, '2022-01-31 14:54:41', NULL),
(5, 3, '', 'BMW', 'Model', 'B-100-UPD', '1300', '2020-12-22', '2020-12-22', '2020-12-22', '2020-12-22', '2020-12-22', 1, '2022-02-03 20:31:42', NULL),
(6, 3, '', 'BMW', 'Model', 'B-100-UPD', '1300', '2020-12-22', '2020-12-22', '2020-12-22', '2020-12-22', '2020-12-22', 1, '2022-02-04 16:53:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) COLLATE utf8_romanian_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8_romanian_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_romanian_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_romanian_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_romanian_ci NOT NULL,
  `os` enum('android','ios') COLLATE utf8_romanian_ci NOT NULL DEFAULT 'android',
  `token` text COLLATE utf8_romanian_ci DEFAULT NULL,
  `version` varchar(10) COLLATE utf8_romanian_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `enabled` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_romanian_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `firstname`, `lastname`, `email`, `phone`, `password`, `os`, `token`, `version`, `created_at`, `updated_at`, `enabled`) VALUES
(3, 'Marius', 'Gheorghe222', 'marius.gheorghe@up2date.ro2', '0723534609', '', 'android', 'token', '1.0', '2022-01-03 13:47:34', NULL, 1),
(4, 'Marius', 'Gheorghe', 'marius.gheorghe@up2date.ro', '123', '', 'android', 'token', '1.0', '2022-01-31 13:11:46', NULL, 1),
(5, 'MirceaA', 'Testt', 'mircea@test1.ro', '0770123456', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-02 14:51:37', NULL, 1),
(6, 'Mircea', 'Test1', 'mircea@up2date.ro', '0723534609', 'parola1', 'android', 'token', '1.0', '2022-02-02 14:58:02', NULL, 1),
(7, 'Test', 'Mircea', 'mircea@test2.ro', '0712345678', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-03 08:41:36', NULL, 1),
(8, 'Test', 'Mircea', 'mircea@test3.ro', '0770123456', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-03 08:47:48', NULL, 1),
(9, 'Test', 'Mircea', 'mircea@test4.ro', '0770123456', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-03 08:48:29', NULL, 1),
(10, 'Test', 'Mircea', 'mircea@test5.ro', '0770123456', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-03 08:49:38', NULL, 1),
(11, 'Marius', 'Gheorghe', 'marius.2gheorghe@up2date.ro', '07235346091', 'parola1', 'android', 'token', '1.0', '2022-02-03 08:51:00', NULL, 1),
(12, 'Marius', 'Gheorghe', 'marius.gheorghe@up2date1.ro', '072353460911', 'parola1', 'android', 'token', '1.0', '2022-02-03 08:51:55', NULL, 1),
(13, 'Marius', 'Gheorghe', 'marius1.gheorghe@up2date1.ro', '0723513460911', 'parola1', 'android', 'token', '1.0', '2022-02-03 08:52:41', NULL, 1),
(14, 'Test', 'Mircea', 'mircea@test6.ro', '0770123456', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-03 08:53:32', NULL, 1),
(15, 'Test', 'Mircea', 'mircea@test7.ro', '0770123456', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-03 08:56:35', NULL, 1),
(16, 'Mircea', 'Test', 'mircea@test8.ro', '0770123456', '65bb1cc2fd5feddea98e1d9e3ec89fae2a3f50ed42d6fb96962ef8cd0e2cfcb7', 'android', 'token', '1.0', '2022-02-03 08:57:38', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `make`
--

CREATE TABLE `make` (
  `id` int(10) NOT NULL,
  `code` varchar(55) NOT NULL DEFAULT '',
  `title` varchar(55) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `make`
--

INSERT INTO `make` (`id`, `code`, `title`) VALUES
(1, 'ACURA', 'Acura'),
(2, 'ALFA', 'Alfa Romeo'),
(3, 'AMC', 'AMC'),
(4, 'ASTON', 'Aston Martin'),
(5, 'AUDI', 'Audi'),
(6, 'AVANTI', 'Avanti'),
(7, 'BENTL', 'Bentley'),
(8, 'BMW', 'BMW'),
(9, 'BUICK', 'Buick'),
(10, 'CAD', 'Cadillac'),
(11, 'CHEV', 'Chevrolet'),
(12, 'CHRY', 'Chrysler'),
(13, 'DAEW', 'Daewoo'),
(14, 'DAIHAT', 'Daihatsu'),
(15, 'DATSUN', 'Datsun'),
(16, 'DELOREAN', 'DeLorean'),
(17, 'DODGE', 'Dodge'),
(18, 'EAGLE', 'Eagle'),
(19, 'FER', 'Ferrari'),
(20, 'FIAT', 'FIAT'),
(21, 'FISK', 'Fisker'),
(22, 'FORD', 'Ford'),
(23, 'FREIGHT', 'Freightliner'),
(24, 'GEO', 'Geo'),
(25, 'GMC', 'GMC'),
(26, 'HONDA', 'Honda'),
(27, 'AMGEN', 'HUMMER'),
(28, 'HYUND', 'Hyundai'),
(29, 'INFIN', 'Infiniti'),
(30, 'ISU', 'Isuzu'),
(31, 'JAG', 'Jaguar'),
(32, 'JEEP', 'Jeep'),
(33, 'KIA', 'Kia'),
(34, 'LAM', 'Lamborghini'),
(35, 'LAN', 'Lancia'),
(36, 'ROV', 'Land Rover'),
(37, 'LEXUS', 'Lexus'),
(38, 'LINC', 'Lincoln'),
(39, 'LOTUS', 'Lotus'),
(40, 'MAS', 'Maserati'),
(41, 'MAYBACH', 'Maybach'),
(42, 'MAZDA', 'Mazda'),
(43, 'MCLAREN', 'McLaren'),
(44, 'MB', 'Mercedes-Benz'),
(45, 'MERC', 'Mercury'),
(46, 'MERKUR', 'Merkur'),
(47, 'MINI', 'MINI'),
(48, 'MIT', 'Mitsubishi'),
(49, 'NISSAN', 'Nissan'),
(50, 'OLDS', 'Oldsmobile'),
(51, 'PEUG', 'Peugeot'),
(52, 'PLYM', 'Plymouth'),
(53, 'PONT', 'Pontiac'),
(54, 'POR', 'Porsche'),
(55, 'RAM', 'RAM'),
(56, 'REN', 'Renault'),
(57, 'RR', 'Rolls-Royce'),
(58, 'SAAB', 'Saab'),
(59, 'SATURN', 'Saturn'),
(60, 'SCION', 'Scion'),
(61, 'SMART', 'smart'),
(62, 'SRT', 'SRT'),
(63, 'STERL', 'Sterling'),
(64, 'SUB', 'Subaru'),
(65, 'SUZUKI', 'Suzuki'),
(66, 'TESLA', 'Tesla'),
(67, 'TOYOTA', 'Toyota'),
(68, 'TRI', 'Triumph'),
(69, 'VOLKS', 'Volkswagen'),
(70, 'VOLVO', 'Volvo'),
(71, 'YUGO', 'Yugo');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `id_request` int(11) NOT NULL,
  `message` text COLLATE utf8_romanian_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` enum('client','admin') COLLATE utf8_romanian_ci NOT NULL DEFAULT 'client'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_romanian_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `id_request`, `message`, `created_at`, `updated_at`, `created_by`) VALUES
(3, 2, 'Mai raspunde cineva?', '2022-01-03 14:34:47', '2022-02-17 07:44:49', 'client'),
(4, 1, 'allooooooooo', '2022-01-31 15:40:28', '2022-02-11 07:44:46', 'client'),
(14, 2, '<p>test</p>', '2022-02-13 06:56:37', NULL, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_car` int(11) NOT NULL,
  `id_service` int(11) NOT NULL,
  `details` text COLLATE utf8_romanian_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` enum('new','complete','contracted','rejected') COLLATE utf8_romanian_ci NOT NULL DEFAULT 'new'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_romanian_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `id_client`, `id_car`, `id_service`, `details`, `created_at`, `updated_at`, `status`) VALUES
(1, 4, 3, 1, 'A1233lo---<p>alos</p>---<p>222</p>---<p>sss</p>---<p>sss</p>---<p>dd</p>---<p>dddd</p>---<p>ddd</p>---<p>agtsdd</p>', '2022-01-03 14:25:38', '2022-02-09 07:15:52', 'new'),
(2, 4, 4, 1, 'Vreau o oferta pentru schimb de placute de frane.---<p>ceas</p>', '2022-01-31 15:20:24', '2022-02-10 11:02:04', 'contracted');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_romanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_romanian_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`) VALUES
(1, 'Service Auto'),
(2, 'Vulcanizare');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(150) COLLATE utf8_romanian_ci NOT NULL,
  `password` varchar(150) COLLATE utf8_romanian_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_romanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_romanian_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`) VALUES
(1, 'admin@up2date.ro', '$2a$10$0imtwGzoL5UCapQIY3fvv.RNMyTScHRZEfTN4cV.xsUTLxttqBbFa', 'Admin Up2Date');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `make`
--
ALTER TABLE `make`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `make`
--
ALTER TABLE `make`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"app\",\"table\":\"users\"},{\"db\":\"app\",\"table\":\"requests\"},{\"db\":\"app\",\"table\":\"clients\"},{\"db\":\"app\",\"table\":\"messages\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2022-02-17 10:49:46', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

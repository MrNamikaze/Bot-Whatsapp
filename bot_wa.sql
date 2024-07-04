-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2024 at 05:09 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bot_wa`
--

-- --------------------------------------------------------

--
-- Table structure for table `intro_grup`
--

CREATE TABLE `intro_grup` (
  `id` int(11) NOT NULL,
  `id_grup` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_grup` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro_grup` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `intro_grup`
--

INSERT INTO `intro_grup` (`id`, `id_grup`, `nama_grup`, `intro_grup`, `status`) VALUES
(1, '120363232493153010@g.us', 'Test Bot A', 'selamat datang {user} dan selamat bergabung di komunitas *{group}* ya 🤩\nharap isi biodata dibawah 😎\nNama:\nUmur:\nDom:\nIg:\nHobi:\nFoto:\nSemoga betah dan nyaman di komunitas ini 😁', 'enable');

-- --------------------------------------------------------

--
-- Table structure for table `outro_grup`
--

CREATE TABLE `outro_grup` (
  `id` int(11) NOT NULL,
  `id_grup` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_grup` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `outro_grup` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `outro_grup`
--

INSERT INTO `outro_grup` (`id`, `id_grup`, `nama_grup`, `outro_grup`, `status`) VALUES
(1, '120363232493153010@g.us', 'Test Bot A', 'sayonara nigga {user}', 'enable');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `intro_grup`
--
ALTER TABLE `intro_grup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `outro_grup`
--
ALTER TABLE `outro_grup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `intro_grup`
--
ALTER TABLE `intro_grup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `outro_grup`
--
ALTER TABLE `outro_grup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2019 at 04:02 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fcrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `oid` int(3) NOT NULL,
  `pid` int(3) NOT NULL,
  `qty` int(2) NOT NULL,
  `price` int(5) NOT NULL,
  `total` int(5) NOT NULL,
  `status` varchar(20) COLLATE ascii_bin DEFAULT NULL,
  `pmethod` varchar(5) COLLATE ascii_bin NOT NULL,
  `uid` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii COLLATE=ascii_bin;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`oid`, `pid`, `qty`, `price`, `total`, `status`, `pmethod`, `uid`) VALUES
(1, 2, 2, 450, 900, 'Confirmed', 'COD', 2),
(1, 13, 1, 1200, 1200, 'Confirmed', 'COD', 2),
(2, 1, 1, 3200, 3200, 'Confirmed', 'COD', 1),
(2, 4, 2, 32, 64, 'Confirmed', 'COD', 1),
(2, 7, 1, 800, 800, 'Confirmed', 'COD', 1),
(3, 2, 1, 450, 450, 'Confirmed', 'COD', 2),
(3, 13, 2, 1200, 2400, 'Confirmed', 'COD', 2);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(5) NOT NULL,
  `post_type` varchar(50) COLLATE ascii_bin NOT NULL,
  `post_title` varchar(500) COLLATE ascii_bin NOT NULL,
  `post_description` varchar(2000) COLLATE ascii_bin NOT NULL,
  `post_img` varchar(1000) COLLATE ascii_bin DEFAULT NULL,
  `uid` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii COLLATE=ascii_bin;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `post_type`, `post_title`, `post_description`, `post_img`, `uid`) VALUES
(1, 'Job', 'Day Labour Workers - Airoli', 'Daily Labour Work.\n25rs./hr.', 'images/13Little_farmer_6097.png', 3);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(11) NOT NULL,
  `pname` varchar(50) COLLATE ascii_bin NOT NULL,
  `pdescription` varchar(200) COLLATE ascii_bin NOT NULL,
  `price` int(10) NOT NULL,
  `pimg` varchar(100) COLLATE ascii_bin DEFAULT NULL,
  `uid` int(11) NOT NULL,
  `visible` varchar(1) COLLATE ascii_bin NOT NULL DEFAULT 'Y',
  `type` varchar(20) COLLATE ascii_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii COLLATE=ascii_bin;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `pname`, `pdescription`, `price`, `pimg`, `uid`, `visible`, `type`) VALUES
(1, 'Mango', 'Home grown 100% Organic mangoes', 3200, NULL, 2, 'Y', 'customer'),
(2, 'Fertilizer', 'Fertilizer for different crops.', 450, NULL, 3, 'Y', 'farmer'),
(3, 'XYZ', 'Lorem Ipsum', 230, NULL, 2, 'N', 'customer'),
(4, 'Apple', 'Kashmir Apple. Top Quality and best.', 32, 'images/apples.jpg', 2, 'Y', 'customer'),
(5, 'Kiwi', 'Awesome Kiwi', 25, 'images/kiwi-fruit.jpg', 2, 'Y', 'customer'),
(6, 'Kiwi', 'Awesome Kiwi', 25, NULL, 2, 'N', 'customer'),
(7, 'Dragon Fruit', 'Most Exotic Fruit.', 800, 'images/dragonfruittaste.jpg', 2, 'Y', 'customer'),
(8, 'Grapes', 'Fresh grapes from vineyards.', 80, NULL, 2, 'Y', 'customer'),
(13, 'Plough Bar', 'Aluminium Bars', 1200, NULL, 3, 'Y', 'farmer');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `fname` char(50) COLLATE ascii_bin NOT NULL,
  `lname` char(50) COLLATE ascii_bin NOT NULL,
  `email` varchar(100) COLLATE ascii_bin NOT NULL,
  `password` varchar(100) COLLATE ascii_bin NOT NULL,
  `address` varchar(1000) COLLATE ascii_bin DEFAULT NULL,
  `role` varchar(50) COLLATE ascii_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii COLLATE=ascii_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `fname`, `lname`, `email`, `password`, `address`, `role`) VALUES
(1, 'Harsh', 'Maru', 'harsh00005@gmail.com', 'passwd123', 'Mulund-(E)', 'customer'),
(2, 'Harsh', 'Maru', 'harsh.maru@somaiya.edu', 'passwd123', 'A-603, Neelam Nagar Bldg. No.3,\nGawanpada, Mulund(E)\nMumbai-400081', 'farmer'),
(3, 'Harsh', 'Maru', 'harsh@example.com', 'passwd123', NULL, 'dealer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oid`,`pid`),
  ADD KEY `pid` (`pid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD UNIQUE KEY `unique_title` (`post_title`),
  ADD KEY `posts` (`uid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `FK_PostedBy` (`uid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `u_Email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `oid` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_PostedBy` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

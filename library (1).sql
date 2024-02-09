-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2024 at 12:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_t`
--

CREATE TABLE `admin_t` (
  `Username` varchar(20) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_t`
--

INSERT INTO `admin_t` (`Username`, `Password`) VALUES
('Admin', '12345A');

-- --------------------------------------------------------

--
-- Table structure for table `books_t`
--

CREATE TABLE `books_t` (
  `DeweyDec` char(15) NOT NULL,
  `ISBN` char(17) NOT NULL,
  `Title` varchar(80) NOT NULL,
  `Author` varchar(80) NOT NULL,
  `Publisher` varchar(80) NOT NULL,
  `Genre` varchar(20) NOT NULL,
  `Status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_t`
--

INSERT INTO `books_t` (`DeweyDec`, `ISBN`, `Title`, `Author`, `Publisher`, `Genre`, `Status`) VALUES
('', '', '', '', '', '', 'Available'),
('030.1', '971-27-1707-0', 'Vicassan’s Pilipino-English Dictionary (Abridged Edition)', 'Vicassan', 'Anvil Publishing Inc.', 'General Works', 'Available'),
('030.1C.1', '971-27-1707-0', 'Vicassan’s Pilipino-English Dictionary (Abridged Edition)', 'Vicassan', 'Anvil Publishing Inc.', 'General Works', 'Available'),
('030.1C.2', '971-27-1707-0', 'Vicassan’s Pilipino-English Dictionary (Abridged Edition)', 'Vicassan', 'Anvil Publishing Inc.', 'General Works', 'Available'),
('030.2', '978-0-87779-931-3', 'The Merriam-Webster Dictionary (New Edition', '-', 'Merriam-Webster, Inc.', 'General Works', 'Available'),
('030.2C.1', '978-0-87779-931-3', 'The Merriam-Webster Dictionary (New Edition', '-', 'Merriam-Webster, Inc.', 'General Works', 'Available'),
('150.14', '0-471-44395-6', 'Psychology A Self-Teaching Guide', 'Frank J. Bruno', 'John Wiley & Sons, Inc.', 'Philosophy', 'Borrowed'),
('150.14C.1', '0-471-44395-6', 'Psychology A Self-Teaching Guide', 'Frank J. Bruno', 'John Wiley & Sons, Inc.', 'Philosophy', 'Available'),
('160.1', '971-584-352-2', 'The Philosophical Discipline of Correct Thinking', 'Eddie R. Babor, LL. B.', 'C&E Publishing Inc.', 'Philosophy', 'Borrowed'),
('290.1', '978-971-007-030-5', 'Why Life is so difficult – and How It Can Get Easy', 'Bo Sanchez', 'Shepherd’s Voice Publishing, Inc.', 'Religion', 'Available'),
('290.1C.1', '978-971-007-030-5', 'Why Life is so difficult – and How It Can Get Easy', 'Bo Sanchez', 'Shepherd’s Voice Publishing, Inc.', 'Religion', 'Borrowed'),
('340.23', '978-0-511-29648-2', 'International Law and International Relations', 'Beth A. Simmons, Richard H. Steinberg', 'Cambridge University Press', 'Social Sciences', 'Borrowed'),
('340.23C.1', '978-0-511-29648-2', 'International Law and International Relations', 'Beth A. Simmons, Richard H. Steinberg', 'Cambridge University Press', 'Social Sciences', 'Borrowed'),
('340.23C.2', '978-0-511-29648-2', 'International Law and International Relations', 'Beth A. Simmons, Richard H. Steinberg', 'Cambridge University Press', 'Social Sciences', 'Available'),
('490.1', '971-574-085-5', 'Sining ng Komunikasyon', 'Consolacion P. Sauco, Obdulia L. Atienza, Nenita P. Papa', 'Katha Publishing Co., Inc', 'Language', 'Borrowed'),
('510.1', '971-08-4868-2', 'College Algebra (Tenth Edition)', 'Paul K. Rees, Fred W. Sparks, Charles Sparks Rees', 'McGraw-Hill Education', 'Science', 'Available'),
('510.1C.1', '971-08-4868-2', 'College Algebra (Tenth Edition)', 'Paul K. Rees, Fred W. Sparks, Charles Sparks Rees', 'McGraw-Hill Education', 'Science', 'Available'),
('510.2', '978-981-069-926-0', 'Analytical Geometry (7th Edition)', 'Gordon Fuller, Dalton Tarwater', 'Addison-Wesley Publishing Company', 'Science', 'Borrowed'),
('510.3', '971-1055-52-X', 'Elementary Differential Equations (Seventh Edition)', 'Earl D. Rainville, Phillip E. Bedient', 'Macmillan Publishing Company', 'Science', 'Available'),
('510.4', '978-971-581-614-1', 'Plane and Solid Mensuration - A simplified Approach (Revised Edition)', 'Richard T. Earnheart, Warren P. Bejasa', 'C&E Publishing Inc.', 'Science', 'Available'),
('510.4C.1', '978-971-581-614-1', 'Plane and Solid Mensuration - A simplified Approach (Revised Edition)', 'Richard T. Earnheart, Warren P. Bejasa', 'C&E Publishing Inc.', 'Science', 'Borrowed'),
('540.1', '971-08-0665-3', 'Problems on Thermodynamics (6th Edition)', 'Virgil Moring Faires, Clifford M. Simmang, Alexander V. Brewer', 'Macmillan Publishing Co., Inc', 'Science', 'Available'),
('600.1', '971-517-029-3', 'An Introduction to Database Systems Volume 1 (Fifth Edition)', 'C.J. Date', 'Addison-Wesley Publishing Company', 'Technology', 'Available'),
('600.1C.1', '971-517-029-3', 'An Introduction to Database Systems Volume 1 (Fifth Edition)', 'C.J. Date', 'Addison-Wesley Publishing Company', 'Technology', 'Borrowed'),
('600.1C.2', '971-517-029-3', 'An Introduction to Database Systems Volume 1 (Fifth Edition)', 'C.J. Date', 'Addison-Wesley Publishing Company Inc', 'Technology', 'Available'),
('790.1', '0-671-50439-8', 'Les Miserables - Victor Hugo', 'Charles E. Wilbour', 'Pocket Books', 'Arts', 'Borrowed'),
('790.1C.1', '0-671-50439-8', 'Les Miserables - Victor Hugo', 'Charles E. Wilbour', 'Pocket Books', 'Arts', 'Borrowed'),
('790.1C.2', '0-671-50439-8', 'Les Miserables - Victor Hugo', 'Charles E. Wilbour', 'Pocket Books', 'Arts', 'Available'),
('890.1', '978-971-0408-98-6', 'Sandiwa: Ibong Adarna', 'Joana Mari and Lydia Linsangan', 'Sunshine Interlinks Publishing House', 'Literature', 'Borrowed'),
('890.1C.1', '978-971-0408-98-6', 'Sandiwa: Ibong Adarna', 'Joana Mari and Lydia Linsangan', 'Sunshine Interlinks Publishing House', 'Literature', 'Available'),
('890.1C.2', '978-971-0408-98-6', 'Sandiwa: Ibong Adarna', 'Joana Mari and Lydia Linsangan', 'Sunshine Interlinks Publishing House', 'Literature', 'Available'),
('910.1', '0-06-050181-2', 'The Map That Changed the World', 'Simon Winchester', 'Avon Books', 'History, Geography', 'Available'),
('910.1C.1', '0-06-050181-2', 'The Map That Changed the World', 'Simon Winchester', 'Avon Books', 'History, Geography', 'Available'),
('910.1C.2', '0-06-050181-2', 'The Map That Changed the World', 'Simon Winchester', 'Avon Books', 'History, Geography', 'Available'),
('asd', 'rtwet', 'wert', 'rwet', 'wret', 'rwt', 'Available');

-- --------------------------------------------------------

--
-- Table structure for table `borrow_t`
--

CREATE TABLE `borrow_t` (
  `StudentID` varchar(15) NOT NULL,
  `DeweyDec` char(15) NOT NULL,
  `Title` varchar(80) NOT NULL,
  `Author` varchar(80) NOT NULL,
  `Genre` varchar(80) NOT NULL,
  `DateBorrow` date NOT NULL,
  `DueDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `returned_t`
--

CREATE TABLE `returned_t` (
  `UserID` int(11) NOT NULL,
  `DeweyDecimal` char(15) NOT NULL,
  `Title` varchar(80) NOT NULL,
  `Genre` varchar(20) NOT NULL,
  `DateBorrowed` date NOT NULL,
  `DateReturned` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `returned_t`
--

INSERT INTO `returned_t` (`UserID`, `DeweyDecimal`, `Title`, `Genre`, `DateBorrowed`, `DateReturned`) VALUES
(1, '030.1C.1', 'Vicassan’s Pilipino-English Dictionary (Abridged Edition)', 'General Works', '2022-07-24', '2023-07-22'),
(1, '890.1C.1', 'Sandiwa: Ibong Adarna', 'Literature', '2023-07-22', '2023-07-26');

-- --------------------------------------------------------

--
-- Table structure for table `student_t`
--

CREATE TABLE `student_t` (
  `StudentID` varchar(15) NOT NULL,
  `LastName` varchar(200) NOT NULL,
  `FirstName` varchar(200) NOT NULL,
  `MidInitial` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `ContactNum` char(11) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_t`
--

INSERT INTO `student_t` (`StudentID`, `LastName`, `FirstName`, `MidInitial`, `Email`, `ContactNum`, `Password`) VALUES
('2020-12345-67-8', 'lastdf', 'first', 'middle', 'email@email.com', '09123456789', '123456'),
('2020-43210-12-2', 'asd', 'asd', 'asd', 'asd@asdfsd.com', '09123456789', '123456'),
('2023-12-26', 'San Juan city', '0912346789', 'gabrielpanal@gmail.com', 'mang jose', '98654321', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books_t`
--
ALTER TABLE `books_t`
  ADD PRIMARY KEY (`DeweyDec`);

--
-- Indexes for table `borrow_t`
--
ALTER TABLE `borrow_t`
  ADD PRIMARY KEY (`DeweyDec`);

--
-- Indexes for table `student_t`
--
ALTER TABLE `student_t`
  ADD PRIMARY KEY (`StudentID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

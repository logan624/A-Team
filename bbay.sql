-- **************************** SqlDBM: MySQL *************************** 
-- ****** Generated by SqlDBM: BBay, v3 by logangregg624@gmail.com ******


-- SET FOREIGN KEY CHECKS TO 0 TO FIX DELETION ISSUE --
-- SET FOREIGN_KEY_CHECKS = 0;

-- ************************************** `user`
CREATE TABLE `user`
(
 `username`         varchar(20) NOT NULL ,
 `firstName`        varchar(20) NOT NULL ,
 `lastName`         varchar(30) NULL ,
 `password`         varchar(30) NOT NULL ,
 `accountType`      varchar(7) NOT NULL ,
 `birthDate`        date NOT NULL ,
 `email`            varchar(50) NOT NULL ,
 `city`             varchar(30) NOT NULL ,
 `state`            varchar(2) NOT NULL ,
 `phoneNum`         varchar(20) NOT NULL ,
 `streetAddress`    varchar(50) NOT NULL ,
 `accountStartDate` date NOT NULL ,
 `accountEndDate`   date NULL ,

PRIMARY KEY (`username`)
);
-- ************************************** `item`


CREATE TABLE `item`
(
 `itemID`      serial NOT NULL ,
 `name`        varchar(30) NOT NULL ,
 `sellerID`    varchar(20) NOT NULL ,
 `category`    varchar(20) NOT NULL ,
 `subcategory` varchar(20) NOT NULL ,
 `use`         varchar(50) NOT NULL ,
 `buyNowPrice` float NOT NULL ,

PRIMARY KEY (`itemID`)
);

-- ************************************** `bid`

 CREATE TABLE `bid`
 (
  `bidID`          serial NOT NULL ,
  `bidPrice`      float NOT NULL ,
  `itemID`         BIGINT UNSIGNED NOT NULL,
  `username`       varchar(20) NOT NULL ,
  `bidStartDate` date NOT NULL ,
  `bidEndDate`   date NULL ,

 PRIMARY KEY (`bidID`)
 );
-- -- ************************************** `transaction`

CREATE TABLE `transaction`
 (
  `transactionID`        serial NOT NULL ,
  `processingIsComplete` binary NOT NULL ,
  `bidID`                BIGINT UNSIGNED NOT NULL ,
  `transactDate`        date NOT NULL ,

 PRIMARY KEY (`transactionID`)
 );

 -- -- ************************************** `profile`
  CREATE TABLE `profile`
 (
  `profileID`   serial NOT NULL ,
  `description` varchar(200) NOT NULL ,
  `username`    varchar(20) NOT NULL ,

 PRIMARY KEY (`profileID`)
 );
 
-- -- ************************************** `review`

 CREATE TABLE `review`
 (
  `reviewID`  serial NOT NULL ,
  `rating`    int NOT NULL ,
  `profileID` BIGINT UNSIGNED NOT NULL ,
  `comment`   varchar(400) NOT NULL ,

 PRIMARY KEY (`reviewID`)
 );
 
 
INSERT INTO user (username, firstname, lastname, `password`, accountType, birthDate, email, city, `state`, phoneNum, streetAddress, accountStartDate)
VALUES
('Jeremy_wade31', 'Jeremy', 'Wade', 'password', 'User', '2004-12-22', 'mrjfootball11@gmail.com', 'Fargo', 'ND', '(701) 789-1432', '8607 Key Circle Dr. 57108', '2022-12-08' ),
('Johnloveslife', 'John', 'Love', 'password', 'User', '1999-08-17', 'JohnLovelol@gmail.com', 'SiouxFalls', 'SD', '(605) 759-8756', '4812 Candy Lane 57107', '2022-01-18' ),
('SarahWolfie', 'Sarah', 'Wolfe', 'password', 'User', '2002-03-29', 'WolfQueenw@gmail.com', 'Madison', 'SD', '(605) 759-8755', '4561 Marble Cir. 57104', '2022-10-30' ),
('JamisonBond!!!', 'Jamison', 'Bond', 'password', 'User', '2003-06-20', 'Jamesbondlol@gmail.com', 'Brookings', 'SD', '(605) 321-4300', '7309 Medary Ave. 57016', '2022-11-04' ),
('Hailey123456', 'Smith', 'Hailey', 'password', 'User', '2001-09-24', 'HySt2107@gmail.com', 'Sioux Falls', 'SD', '(605) 258-4517', '1204 Jeremy St. 57305', '2022-11-21'),
('Jimmy_wade31', 'Jeremy', 'Wade', 'password', 'User', '2004-12-22', 'mrjfootball11@gmail.com', 'St. Paul', 'MN', '(620) 789-1432', '8607 Key Circle Dr. 57108', '2021-12-05'),
('MasterCole', 'Cole', 'Masterson', 'password', 'User', '2001-06-25', 'Masterson681@gmail.com', 'St. Cloud', 'MN', '(620) 543-2198', '..............', '2022-12-01'),
('NotCartel', 'Cartel', 'Lopez', 'password', 'User', '2000-04-05', 'cartel04@gmail.com', 'Watertown', 'SD', '(620) 574-9076','................', '2022-11-14'),
('TopGLogan','Logan', 'Gregg', 'password', 'User', '2000-09-11', 'logangregg@gmail.com', 'Sioux Falls', 'SD', '(605) 588-9855', '...............', '2011-04-23');
INSERT INTO item (`name`, sellerID, category, subcategory, `use`, buyNowPrice)
VALUES
("Black Sneakers", "TopGLogan", "Men's Clothing", "Shoes", "Lightly Used", "35.00"),
("Black Sneakers", "TopGLogan", "Men's Clothing", "Shoes", "Lightly Used", "35.00"),
("Black Sneakers", "TopGLogan", "Men's Clothing", "Shoes", "Lightly Used", "35.00"),
("Black Sneakers", "TopGLogan", "Men's Clothing", "Shoes", "Lightly Used", "35.00"),
("Black Sneakers", "TopGLogan", "Men's Clothing", "Shoes", "Lightly Used", "35.00"),
("Black Sneakers", "TopGLogan", "Men's Clothing", "Shoes", "Lightly Used", "35.00"),
("Orange Nike Shirt", "NotCartel", "Women's Clothing", "Outerwear", "Lightly Used", "12.00"),
("Orange Nike Shirt", "NotCartel", "Women's Clothing", "Outerwear", "Lightly Used", "12.00"),
("Orange Nike Shirt", "NotCartel", "Women's Clothing", "Outerwear", "Lightly Used", "12.00"),
("Orange Nike Shirt", "NotCartel", "Women's Clothing", "Outerwear", "Lightly Used", "12.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("Grey Under Armour Shorts", "MasterCole", "Men's Clothing", "Outerwear", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("LED Banana", "MasterCole", "Electronics", "Furniture", "New", "20.00"),
("Tan Birkenstocks", "Jeremy_wade31","Men's Clothing", "Shoes", "New", "70.00"),
("Black Sweatshirt", "Jeremy_wade31", "Men's Clothing", "Outerwear", "Warm hoodie", "40.00"),
("Mini Fridge", "Jeremy_wade31", "Home Improvement", "Kitchen", "Very Used", "60.00"),
("Dishwasher", "Jeremy_wade31", "Home Improvement", "Kitchen", "Lightly Used", "120.00"),
("Brown Sleeper Sofia", "Jeremy_wade31", "Home Improvement", "Furniture", "New", "130.00"),
("Coffee Table", "Jeremy_wade31", "Home Improvement", "Furniture", "Very Used", "20.00"),
("Leather Recliner", "Jeremy_wade31", "Home Improvement", "Furniture", "Lightly Used", "100.00"),
("Frisbee","MasterCole","Hobbies","Sporting Goods","New","999.99"),
("Bphone XR","MasterCole","Electronics","Computers","Moderately Used","408.69"),
("LED Banana","MasterCole","Electronics","Gaming","Very Used","87.23"),
("North Face Jacket","MasterCole","Men's Clothing","Outerwear","New","129.99"),
("North Face Jacket","MasterCole","Men's Clothing","Outerwear","New","129.99"),
("North Face Jacket","MasterCole","Men's Clothing","Outerwear","New","129.99"),
("North Face Jacket","MasterCole","Men's Clothing","Outerwear","New","129.99"),
("Fidget Spinner","NotCartel","Hobbies","Board Games","Lightly Used","4.32"),
("Fidget Spinner","NotCartel","Hobbies","Board Games","Lightly Used","4.32"),
("Fidget Spinner","NotCartel","Hobbies","Board Games","Lightly Used","4.32"),
("Fidget Spinner","NotCartel","Hobbies","Board Games","Lightly Used","4.32"),
("Air Jordan 11's","NotCartel","Men's Clothing","Shoes","Very Used","239.99"),
("Bunny Slippers","NotCartel","Women's Clothing","Shoes","Lightly Used","14.99"),
("Fidget Spinner","TopGLogan","Hobbies","Pool Wear","New","27.89"),
("Fidget Spinner","TopGLogan","Hobbies","Pool Wear","New","27.89"),
("Fidget Spinner","TopGLogan","Hobbies","Pool Wear","New","27.89"),
("Fidget Spinner","TopGLogan","Hobbies","Pool Wear","New","27.89"),
("Alienware Desktop","TopGLogan","Electronics","Computers","Very Used","875.99"),
("Alienware Desktop","TopGLogan","Electronics","Computers","Very Used","875.99"),
("Alienware Desktop","TopGLogan","Electronics","Computers","Very Used","875.99"),
("Alienware Desktop","TopGLogan","Electronics","Computers","Very Used","875.99"),
("ATH-M50X","TopGLogan","Electronics","Audio","Moderately Used","97.99"),
("ATH-M50X","TopGLogan","Electronics","Audio","Moderately Used","97.99"),
("ATH-M50X","TopGLogan","Electronics","Audio","Moderately Used","97.99"),
("ATH-M50X","TopGLogan","Electronics","Audio","Moderately Used","97.99"),
("Nerf Football","Johnloveslife","Hobbies","Sporting Goods","New","4.99"),
("Nerf Football","Johnloveslife","Hobbies","Sporting Goods","New","4.99"),
("Nerf Football","Johnloveslife","Hobbies","Sporting Goods","New","4.99"),
("Nerf Football","Johnloveslife","Hobbies","Sporting Goods","New","4.99"),
("Nerf Football","Johnloveslife","Hobbies","Sporting Goods","New","4.99"),
("Bikini","Johnloveslife","Women's Clothing","Pool Wear","Lightly Used","18.99"),
("Bikini","Johnloveslife","Women's Clothing","Pool Wear","Lightly Used","18.99"),
("Bikini","Johnloveslife","Women's Clothing","Pool Wear","Lightly Used","18.99"),
("Bikini","Johnloveslife","Women's Clothing","Pool Wear","Lightly Used","18.99"),
("Supreme Hoodie","NotCartel","Men's Clothing","Outerwear","New","420.69"),
("Supreme Hoodie","NotCartel","Men's Clothing","Outerwear","New","420.69"),
("Supreme Hoodie","NotCartel","Men's Clothing","Outerwear","New","420.69"),
("Supreme Hoodie","NotCartel","Men's Clothing","Outerwear","New","420.69"),
("Red High Heels","Johnloveslife","Women's Clothing","Shoes","Moderately Used","12.99"),
("Red High Heels","Johnloveslife","Women's Clothing","Shoes","Moderately Used","12.99"),
("Red High Heels","Johnloveslife","Women's Clothing","Shoes","Moderately Used","12.99"),
("Red High Heels","Johnloveslife","Women's Clothing","Shoes","Moderately Used","12.99"),
("Vans High-Tops","NotCartel","Men's Clothing","Shoes","New","59.99"),
("Vans High-Tops","NotCartel","Men's Clothing","Shoes","New","59.99"),
("Vans High-Tops","NotCartel","Men's Clothing","Shoes","New","59.99");

INSERT INTO bid (bidPrice, itemID, username, `bidStartDate`, `bidEndDate`)
VALUES
('37.00', '1','Johnloveslife', '2022-11-01', '2022-12-01' ),
('37.00', '2','Johnloveslife', '2022-11-01', '2022-12-01' ),
('37.00', '3','Johnloveslife', '2022-11-01', '2022-12-01' ),
('37.00', '4','Johnloveslife', '2022-11-01', '2022-12-01' ),
('80.00', '8', 'Johnloveslife', '2022-10-20', '2022-11-20' ),
('80.00', '9', 'Johnloveslife', '2022-10-20', '2022-11-20' ),
('25.50', '10', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '11', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '12', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '13', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '14', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '15', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '16', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '17', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '18', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '19', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '20', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '21', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '22', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '23', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '24', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '25', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '26', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '27', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '28', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '29', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '30', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '31', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '32', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '33', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '34', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '35', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '36', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '37', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '38', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '39', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '40', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '41', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '42', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '43', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '44', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '45', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '46', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '47', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '48', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '49', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '50', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '51', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '52', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '53', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '54', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '55', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '56', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '57', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '58', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '59', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '60', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '61', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '62', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '63', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '64', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '65', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '66', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '67', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '68', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '69', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '70', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '71', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '72', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '73', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '74', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '75', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '76', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '77', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '78', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '79', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '80', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '81', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '82', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '83', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '84', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '85', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '86', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '87', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '88', 'Jimmy_wade31', '2022-11-13', '2022-12-05'),
('25.50', '89', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('25.50', '90', 'SarahWolfie', '2022-11-12', '2022-12-20' ),
('115.00', '91', 'JamisonBond!!!', '2022-11-24', '2022-12-02'),
('130.00', '92', 'Hailey123456', '2022-12-01', '2022-12-18'),
('22.25', '93', 'Jeremy_wade31', '2022-11-13', '2022-12-05');

 INSERT INTO transaction (processingISComplete, bidID, `transactDate`)
VALUES
('1','1', '2022-12-01' ),
('1','2', '2022-11-20' ),
('1','3', '2022-12-20' ),
('1','4', '2022-12-02'),
('1','5', '2022-12-18'),
('1','6','2022-12-05'),
('1','7','2022-12-05'),
('1','8','2022-12-05'),
('1','9','2022-12-05'),
('1','10','2022-12-05'),
('1','11','2022-12-05'),
('1','12','2022-12-05'),
('1','13','2022-12-05'),
('1','14','2022-12-05'),
('1','15','2022-12-05'),
('1','16','2022-12-05'),
('1','17','2022-12-05'),
 ('1', '18', '2022-12-02'),
 ('1', '19','2022-12-18'),
 ('1', '20', '2022-12-05'),
 ('1', '21', '2022-12-20' ),
 ('1', '22', '2022-12-20' ),
 ('1', '23', '2022-12-20' ),
 ('1', '24', '2022-12-02'),
 ('1', '25','2022-12-18'),
 ('1', '26', '2022-12-05'),
 ('1', '27', '2022-12-20' ),
 ('1', '28','2022-12-20' ),
 ('1', '29', '2022-12-20' ),
 ('1', '30', '2022-12-02'),
('1', '31', '2022-12-18'),
('1', '32', '2022-12-05'),
('1', '33', '2022-12-20' ),
('1', '34',  '2022-12-20' ),
('1', '35', '2022-12-20' ),
('1', '36', '2022-12-02'),
('1', '37','2022-12-18'),
('1', '38', '2022-12-05'),
('1', '39', '2022-12-20' ),
('1', '40', '2022-12-20' ),
('1', '41', '2022-12-02'),
('1', '42', '2022-12-18'),
('1', '43', '2022-12-05'),
('1', '44', '2022-12-20' ),
('1', '45','2022-12-20' ),
('1', '46', '2022-12-02'),
('1', '47', '2022-12-18'),
('1', '48', '2022-12-05'),
('1', '49', '2022-12-20' ),
('1', '50', '2022-12-20' ),
('1', '51', '2022-12-02'),
('1', '52', '2022-12-18'),
('1', '53', '2022-12-05'),
('1', '54', '2022-12-20' ),
('1', '55', '2022-12-20' ),
('1', '56', '2022-12-02'),
('1', '57', '2022-12-18'),
('1', '58', '2022-12-05'),
('1', '59', '2022-12-20' ),
('1', '60', '2022-12-20' ),
('1', '61',  '2022-12-02'),
('1', '62','2022-12-18'),
('1', '63','2022-12-05'),
('1', '64', '2022-12-20' ),
('1', '65', '2022-12-20' ),
('1', '66', '2022-12-02'),
('1', '67','2022-12-18'),
('1', '68','2022-12-05'),
('1', '69','2022-12-20' ),
('1', '70', '2022-12-20' ),
 ('1', '71', '2022-12-02'),
('1', '72','2022-12-18'),
('1', '73', '2022-12-05'),
('1', '74', '2022-12-20' ),
('1', '75', '2022-12-20' ),
('1', '76',  '2022-12-02'),
('1', '77','2022-12-18'),
('1', '78', '2022-12-05'),
('1', '79', '2022-12-20' ),
('1', '80', '2022-12-20' ),
('1', '81', '2022-12-02'),
('1', '82', '2022-12-18'),
('1', '83', '2022-12-05'),
('1', '84', '2022-12-20' ),
('1', '85', '2022-12-20' ),
('1', '86', '2022-12-02'),
('1', '87','2022-12-18'),
('1', '88','2022-12-05'),
('1', '89', '2022-12-20' ),
('1', '90', '2022-12-20' );
#('1', '91','2022-12-02');
#('1', '92', '2022-12-18');
#('1', '93', '2022-12-18');




INSERT INTO profile (description, username)
VALUES
('Enjoy sports and the outdoors. I am also into interier design and home remodeling','Jeremy_wade31'),
('Love working out and Cardio. I am always looking for new clothes and','Johnloveslife'),
('School is my passion. I love learning', 'SarahWolfie'),
('I am addicted to buying funiture!!!', 'JamisonBond!!!'),
('Looking for makeup and hairproducts','Hailey123456'),
('Love Hunting and Fishing and all outdoor activities','Jimmy_wade31');

 INSERT INTO review (rating, profileID, `comment`)
 VALUES
 ('5', '1', 'I really Love the product it is lightly used and it fits me well.'),
 ('3', '1', 'It accomplishes what I need it to, but nothing special!'),
 ('4', '1', 'Minory used and it fits in my room well, no complaints.'),
 ('2', '1', ' Waste of Money, do not buy.'),
 ('2', '1', 'There were holes in the shorts I bought.'),
 ('5', '1', 'Great Product!');

-- INSERT TABLES/VIEWS NEEDED FOR CATEGORICAL RECOMMENDATIONS

CREATE VIEW IF NOT EXISTS top_user_categories AS SELECT
    item.category,
    bid.username,
    COUNT(item.itemID) AS NumBought
FROM
    `transaction`,
    bid,
    item
WHERE
    `transaction`.bidID = bid.bidID AND bid.itemID = item.itemID
GROUP BY
    item.category,
    bid.username
ORDER BY
    COUNT(item.itemID)
DESC
    ;
CREATE VIEW IF NOT EXISTS top_items_per_category AS SELECT
    item.category,
    item.name,
    COUNT(`transaction`.transactionID) AS numSold
FROM TRANSACTION
    ,
    bid,
    item
WHERE TRANSACTION
    .bidID = bid.bidID AND bid.itemID = item.itemID
GROUP BY
    item.category,
    item.name
ORDER BY
    COUNT(`transaction`.transactionID)
DESC
    ;
CREATE TABLE
categorical_recommendations AS
SELECT DISTINCT
    top_user_categories.username,
    top_user_categories.category,
    top_items_per_category.name,
    top_items_per_category.numSold,
    item.sellerID, item.buyNowPrice, item.use
FROM
    top_items_per_category,
    top_user_categories, item
WHERE
    top_user_categories.category = top_items_per_category.category AND top_items_per_category.name = item.name
GROUP BY
    top_items_per_category.numSold,
    top_user_categories.username,
    top_user_categories.category,
    top_items_per_category.name
ORDER BY
    top_items_per_category.numSold
DESC
    ;

-- INSERT TABLES/VIEWS NEEDED FOR TOP ITEM RECOMMENDATIONS

CREATE TABLE top_item_recommendations AS
SELECT item.name, item.category, item.use, item.buyNowPrice, item.sellerID, COUNT(item.itemID) AS NumBought
FROM transaction,bid,item 
WHERE transaction.bidID = bid.bidID AND
bid.itemID = item.itemID
GROUP BY item.name,item.category 
ORDER BY COUNT(item.itemID) DESC limit 3;

-- INSERT TABLES/VIEWS NEEDED FOR SIMILAR SHOPPER RECOMMENDATIONS

CREATE TEMPORARY TABLE IF NOT EXISTS tempTransactions AS 
  SELECT distinct item.name, transactDate, user.username
  FROM transaction, bid, item, user
  WHERE
      transaction.bidID = bid.bidID AND
      bid.itemID = item.itemID
  ORDER BY 
      transaction.transactDate DESC
  LIMIT 5;

-- #Get 5 OTHER users that purchased same items and put in temp table tempSimilarUsersItems 
CREATE TEMPORARY TABLE IF NOT EXISTS tempSimilarUsersItems AS 
  SELECT bid.username, item.name
  FROM transaction, bid, item, tempTransactions
  WHERE
      transaction.bidID = bid.bidID AND
      bid.itemID = item.itemID AND
      item.name = tempTransactions.name AND
      bid.username <> tempTransactions.username
  LIMIT 5;

CREATE TABLE similar_shopper_recommendations AS
  SELECT tempTransactions.username, item.name, item.sellerID, item.use, item.buyNowPrice, item.category, COUNT(item.name) as numSold
  FROM tempSimilarUsersItems, transaction, bid, item, tempTransactions
  WHERE
      bid.username = tempSimilarUsersItems.username AND
      transaction.bidID = bid.bidID AND
  item.itemID = bid.itemId AND
      item.name <> tempTransactions.name
   GROUP BY tempTransactions.username, item.name
   ORDER BY numSold DESC  #want most popular items;

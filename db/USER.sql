/*
Navicat MySQL Data Transfer

Source Server         : MARIRA_DB
Source Server Version : 50552
Source Host           : 43.248.96.156:3306
Source Database       : iwannado

Target Server Type    : MYSQL
Target Server Version : 50552
File Encoding         : 65001

Date: 2017-09-05 00:13:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for USER
-- ----------------------------
DROP TABLE IF EXISTS `USER`;
CREATE TABLE `USER` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ACCOUNT` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `CREATE_TIME` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

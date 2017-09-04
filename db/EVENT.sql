/*
Navicat MySQL Data Transfer

Source Server         : MARIRA_DB
Source Server Version : 50552
Source Host           : 43.248.96.156:3306
Source Database       : iwannado

Target Server Type    : MYSQL
Target Server Version : 50552
File Encoding         : 65001

Date: 2017-09-05 00:12:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for EVENT
-- ----------------------------
DROP TABLE IF EXISTS `EVENT`;
CREATE TABLE `EVENT` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` int(11) DEFAULT NULL,
  `LIST_ID` int(11) NOT NULL,
  `EVENT_NAME` varchar(255) NOT NULL,
  `STATUS` smallint(6) NOT NULL,
  `CREATE_TIME` datetime NOT NULL,
  `UPDATE_TIME` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for LIST
-- ----------------------------
DROP TABLE IF EXISTS `LIST`;
CREATE TABLE `LIST` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` int(11) NOT NULL,
  `LIST_NAME` varchar(255) NOT NULL,
  `CREATE_TIME` datetime NOT NULL,
  `UPDATE_TIME` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

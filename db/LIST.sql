/*
Navicat MySQL Data Transfer

Source Server         : MARIRA_DB
Source Server Version : 50552
Source Host           : 43.248.96.156:3306
Source Database       : iwannado

Target Server Type    : MYSQL
Target Server Version : 50552
File Encoding         : 65001

Date: 2017-09-05 00:13:19
*/

SET FOREIGN_KEY_CHECKS=0;

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

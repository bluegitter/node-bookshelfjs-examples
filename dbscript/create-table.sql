/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50727
 Source Host           : localhost:3306
 Source Schema         : strapi

 Target Server Type    : MySQL
 Target Server Version : 50727
 File Encoding         : 65001

 Date: 24/08/2021 18:47:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for order_items
-- ----------------------------
DROP TABLE IF EXISTS `order_items`;
CREATE TABLE `order_items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_items
-- ----------------------------
BEGIN;
INSERT INTO `order_items` VALUES (1, '青岛啤酒', 10, 5.00, 0.90, '2021-08-20 09:26:57', 1, 1, '2021-08-20 09:26:47', '2021-08-21 07:36:24', 1);
INSERT INTO `order_items` VALUES (2, '飞天茅台', 2, 1499.00, 2998.00, '2021-08-20 09:28:03', 1, 1, '2021-08-20 09:27:34', '2021-08-21 07:36:24', 1);
INSERT INTO `order_items` VALUES (3, '五粮液', 2, 180.00, 360.00, '2021-08-20 09:26:57', 1, 1, '2021-08-20 09:26:47', '2021-08-20 09:26:47', 2);
COMMIT;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_cost` decimal(10,2) DEFAULT NULL,
  `address` longtext,
  `postcode` varchar(255) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
BEGIN;
INSERT INTO `orders` VALUES (1, '今日订单1', 10, 100.00, '上海市', '330029', '2021-08-20 09:28:10', 1, 1, '2021-08-20 09:26:05', '2021-08-21 07:36:24');
INSERT INTO `orders` VALUES (2, '最大订单', 12, 1110.00, '上海市', '330028', '2021-08-20 09:28:10', 1, 1, '2021-08-20 09:26:05', '2021-08-20 09:28:10');
INSERT INTO `orders` VALUES (3, '8月22日订单', 10, 100.00, '北京市', '330029', NULL, NULL, NULL, '2021-08-22 16:19:09', '2021-08-22 16:19:09');
INSERT INTO `orders` VALUES (4, '8月23日订单', 10, 100.00, '北京市', '330029', NULL, NULL, NULL, '2021-08-22 16:20:30', '2021-08-22 16:20:30');
INSERT INTO `orders` VALUES (5, '张三的订单', 10, 100.00, '北京市', '330029', NULL, NULL, NULL, '2021-08-22 16:20:30', '2021-08-22 16:20:30');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'user1', '123456', '2021-08-23 12:47:59', 1, 1, '2021-08-23 12:47:56', '2021-08-23 12:47:59');
INSERT INTO `users` VALUES (2, 'user2', '123456', '2021-08-23 12:48:08', 1, 1, '2021-08-23 12:48:07', '2021-08-23 12:48:08');
INSERT INTO `users` VALUES (3, 'user3', '123456', '2021-08-23 12:47:59', 1, 1, '2021-08-23 12:47:56', '2021-08-23 12:47:59');
INSERT INTO `users` VALUES (4, 'user4', '123456', '2021-08-23 12:47:59', 1, 1, '2021-08-23 12:47:56', '2021-08-23 12:47:59');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

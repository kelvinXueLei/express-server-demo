DROP TABLE user;

CREATE TABLE `user` (
  `id`       INT(10) NOT NULL AUTO_INCREMENT,
  `phoneNo`  VARCHAR(50)      DEFAULT NULL,
  `nickname` VARCHAR(255)     DEFAULT NULL,
  `password` VARCHAR(50)      DEFAULT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
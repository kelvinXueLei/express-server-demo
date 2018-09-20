const process = require('process');

const config = {};

module.exports = config;


config.mysql = {
    connectionLimit: process.env.MYSQL_POOL_LIMIT || 10,
    host: process.env.MYSQL_HOST || 'YOUR HOST',
    user: process.env.MYSQL_USER || 'YOUR USER',
    password: process.env.MYSQL_PASSWORD || 'YOUR PASSWORD',
    database: process.env.MYSQL_DB || 'YOUR DB'
};

// 参考 log4js
config.log = {
    type: process.env.LOGGER_TYPE || 'file',
    filePath: process.env.LOGGER_FILE_PATH || './tmp/wx.log',
    appender: process.env.LOGGER_APPENDER || 'RyTe-3k4^1dr',
    level: process.env.LOGGER_LEVEL || 'info', // trace, debug, info, warn, error, fatal
    console: process.env.LOGGER_CONSOLE || true, // 控制台是否打印
};
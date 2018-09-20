/**
 * Created by ryankl on 09/20/2018 01:05.
 */

const mysql = require('mysql');
const config = require('../conf/config');


class MysqlUtils {
    constructor() {
        this.pool = mysql.createPool(config.mysql);

        this.listen();
    }

    listen() {
        this.pool.on('acquire', function(connection) {
            console.log('Connection %d acquired', connection.threadId);
        });

        this.pool.on('enqueue', function() {
            console.log('Waiting for available connection slot');
        });

        this.pool.on('enqueue', function() {
            console.log('Waiting for available connection slot');
        });

        this.pool.on('release', function(connection) {
            console.log('Connection %d released', connection.threadId);
        });
    }
}

let mysqlUtils = new MysqlUtils();

module.exports = mysqlUtils;
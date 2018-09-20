/**
 * Created by ryankl on 09/20/2018 01:05.
 */

const mysqlUtils = require('../utils/mysql-utils');
const logger = require('../utils/log.util').logger;

class Service {
    constructor() {
        this.connection = null;
    }

    async connect() {
        return new Promise((resolve, reject) => {
            mysqlUtils.pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    this.connection = connection;
                    resolve();
                }
            });
        });
    }

    async disConnect() {
        this.connection.release();
    }

    /**
     *
     * @param sql
     * @param data
     * @returns {Promise<any>}
     *
     * results:
     {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 2,
          serverStatus: 2,
          warningCount: 0,
          message: '',
          protocol41: true,
          changedRows: 0
     }
     */
    query(sql, data) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, data, (error, results, fields) => {
                this.disConnect();
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    beginTransaction() {
        return new Promise((resolve, reject) => {
            this.connection.beginTransaction((err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve();
                }
                this.disConnect();
            })
        })
    }

    async rollback() {
        this.connection.rollback();
    }

    async commit() {
        this.connection.commit();
    }
}

module.exports = Service;
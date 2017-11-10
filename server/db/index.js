"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const lodash_1 = require("lodash");
exports.configure = () => { };
const poolConfig = {
    host: 'localhost',
    user: 'alabama56',
    password: 'bamaball56',
    database: 'InClassExample'
};
const pool = mysql_1.createPool(poolConfig);
const formatArguments = (args = []) => {
    if (!lodash_1.isArray(args) || args.length === 0) {
        return '();';
    }
    let sql = '(';
    for (let i = 0, length = args.length - 1; i < length; ++i) {
        sql += '?, ';
    }
    sql += '?);';
    return sql;
};
const query = (sql, args) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            else {
                connection.query(sql, args, (err, resultsets) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
};
exports.procedure = (procedure, args = []) => {
    return query(`CALL ${procedure}${formatArguments(args)}`, args);
};

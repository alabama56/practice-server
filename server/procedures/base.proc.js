"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../db/index");
exports.rows = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then((rows) => {
        return rows[0];
    });
};
exports.row = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then((rows) => {
        return rows[0][0];
    });
};
exports.empty = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then(() => {
        return;
    });
};
//crud is the function that takes the model name and then returns an object that has the all key on and the calue is the all function called with the pluralize mw on it
const prefix = 'sp';
const SQL_GET = `${prefix}Get`;
const SQL_INSTERT = `${prefix}Insert`;
const SQL_UPDATE = `${prefix}Update`;
const SQL_DELETE = `${prefix}Delete`;
const all = (MODEL_NAME) => {
    return () => {
        return exports.rows(`${SQL_GET}${MODEL_NAME}`);
    };
};
const read = (MODEL_NAME) => {
    return (...args) => {
        return exports.row(`${SQL_GET}${MODEL_NAME}`, args);
    };
};
const destroy = (MODEL_NAME) => {
    return (...args) => {
        return exports.empty(`${SQL_DELETE}${MODEL_NAME}`, args);
    };
};
const create = (MODEL_NAME) => {
    return () => {
        return exports.row(`${SQL_INSTERT}${MODEL_NAME}`);
    };
};
const update = (MODEL_NAME) => {
    return (...args) => {
        return exports.empty(`${SQL_UPDATE}${MODEL_NAME}`, args);
    };
};

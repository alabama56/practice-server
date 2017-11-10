"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = require("shortid");
const ramda = require("ramda");
exports.generateid = (req, res, next) => {
    if (ramda.isNil(req.body) || ramda.isEmpty(req.body)) {
        throw new Error('you didnt pass me a chirp');
    }
    req.body.id = shortid_1.generate();
    next();
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const jwt = require("jsonwebtoken");
const path = require("path");
const ramda_1 = require("ramda");
const ejwt = require("express-jwt");
const prk = path.join(__dirname, '..', 'config', 'jwt', 'private.key');
const HS_PRIVATE_KEY = fs.readFileSync(prk);
const expires = 1000 * 60 * 60;
exports.generateToken = (id) => {
    if (ramda_1.isNil(HS_PRIVATE_KEY)) {
        throw new Error('Unable to sign token at this time');
    }
    const payload = {
        uid: id,
        expiresIn: expires
    };
    const header = {
        issuer: 'chirper-backend',
        algorithm: 'HS256',
        expiresIn: expires,
        subject: id
    };
    return jwt.sign(payload, HS_PRIVATE_KEY, header);
};
exports.isAuthenticated = ejwt({
    secret: HS_PRIVATE_KEY
});

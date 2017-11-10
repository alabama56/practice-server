"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const ramda_1 = require("ramda");
const bcrypt_mw_1 = require("./bcrypt.mw");
const expires = 1000 * 60 * 60;
const usersPath = path.join(__dirname, '..', 'users.json');
const jwt_mw_1 = require("./jwt.mw");
exports.login = (req, res, next) => {
    const { user, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const found = users.find((u) => {
        if (u.user === user) {
            return true;
        }
        return false;
    });
    if (ramda_1.isNil(found)) {
        res.sendStatus(404);
        return;
    }
    if (bcrypt_mw_1.comparePassword(password, found.password)) {
        res.status(200).json({
            idToken: jwt_mw_1.generateToken(found.id),
            expiresIn: expires
        });
    }
    else {
        res.sendStatus(401);
    }
};

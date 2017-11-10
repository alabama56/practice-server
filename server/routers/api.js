"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const users_1 = require("./users");
const express_1 = require("express");
const router = express_1.Router();
router
    .use('/auth', auth_1.default)
    .use('/users', users_1.default);
exports.default = router;

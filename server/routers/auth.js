"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_mw_1 = require("../middleware/auth.mw");
const router = express_1.Router();
router
    .post('/login', auth_mw_1.login);
exports.default = router;

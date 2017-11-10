"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_proc_1 = require("../procedures/users.proc");
exports.all = (req, res, next) => {
    users_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    users_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    users_proc_1.default.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    users_proc_1.default.create(req.body.username, req.body.email, req.body.password)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    users_proc_1.default.update(+req.params.id, req.body.username, req.body.email, req.body.password)
        .then((sets) => {
        res.json(sets);
    });
};

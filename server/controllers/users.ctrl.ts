import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/users.proc';
import { procedure } from "../db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((sets) => {
            res.json(sets);
        });
};

export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets) => {
            res.json(sets);
        })
}

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id)
        .then((sets) => {
            res.json(sets);
        })
}

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.username, req.body.email, req.body.password)
        .then((sets) => {
            res.json(sets);
        })
}

export const update = (req: Request, res: Response, next: NextFunction) => {
    procedures.update(+req.params.id, req.body.username, req.body.email, req.body.password)
    .then((sets) => {
        res.json(sets);
    })
}
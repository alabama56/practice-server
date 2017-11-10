import { Request, Response, NextFunction } from 'express';
import { generate } from 'shortid';
import * as ramda from 'ramda';

export const generateid = (req: Request, res: Response, next: NextFunction): void => {
    if (ramda.isNil(req.body) || ramda.isEmpty(req.body)) {
        throw new Error('you didnt pass me a chirp');
    }

    req.body.id = generate();
    next();
};


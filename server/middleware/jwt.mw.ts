import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import * as path from 'path';
import { isNil } from 'ramda';
import * as ejwt from 'express-jwt';

const prk = path.join(__dirname, '..', 'config', 'jwt', 'private.key');
const HS_PRIVATE_KEY = fs.readFileSync(prk);
const expires = 1000 * 60 * 60;

export const generateToken = (id: string) => {
    if (isNil(HS_PRIVATE_KEY)) {
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

    return jwt.sign(
        payload, 
        HS_PRIVATE_KEY, 
        header
    );
};

export const isAuthenticated = ejwt({
    secret: HS_PRIVATE_KEY
});
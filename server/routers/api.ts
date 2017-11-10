import chirps from './chirps';
import auth from './auth';
import users from './users';
import { Router } from 'express';

const router: Router = Router();

router
    // .use('/chirps', chirps)
    .use('/auth', auth)
    .use('/users', users);

export default router;


import { Router } from 'express';
import { login } from '../middleware/auth.mw';

const router: Router = Router();

router
    .post('/login', login);

export default router;


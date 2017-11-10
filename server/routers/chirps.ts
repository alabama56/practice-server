import { Router } from 'express';
import { generateid } from '../middleware/id';
// import { all, create, update, read, destroy } from '../procedures/chirps.proc';
import { isAuthenticated } from '../middleware/jwt.mw';

const router = Router();

// router
//     .use(isAuthenticated)
//     .get('/', all)
//     .put('/', update)
//     .post('/', generateid, create)
//     .get('/:id', isAuthenticated, read)
//     .delete('/:id', destroy);

export default router;

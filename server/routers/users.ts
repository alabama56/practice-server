import { Router } from "express";
import { all, read, destroy, create, update } from "../controllers/users.ctrl";

const router: Router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .delete('/:id', destroy)
    .post('/', create)
    .put('/:id', update);

export default router
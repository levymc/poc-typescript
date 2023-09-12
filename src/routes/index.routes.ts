import { Router } from 'express';
import entriesRouter from './entries.routes';
import usersRouter from './users.routes';

const router = Router();

router.use(entriesRouter)
router.use(usersRouter)

export default router;

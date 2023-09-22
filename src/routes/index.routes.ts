import { Router } from 'express';
import entriesRouter from './entries.routes';
import usersRouter from './users.routes';


const router = Router();

router
    .get('/health', (_req, res) => res.send('OK'))
    .use(entriesRouter)
    .use(usersRouter)

export default router;

import { Router } from 'express';
import entriesRouter from './entries.routes';

const router = Router();

router.use(entriesRouter);

export default router;

import { Router } from 'express';
import EntriesController from '../controllers/entries.controller';
// import { validateSchema } from '../middlewares/validateSchema.ts'

const entriesRouter = Router();
const entriesController = new EntriesController();

entriesRouter.post('/entry', entriesController.handlePost);
entriesRouter.get('/entries');
entriesRouter.get('/entry/:id');
entriesRouter.put('/entry/:id');
entriesRouter.delete('/entry/:id');

export default entriesRouter;

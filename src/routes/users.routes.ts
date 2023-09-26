import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.ts';
import userSchema from '../schemas/user.schema.ts';
import usersController from '../injection/users.injection.ts';

const usersRouter = Router()

usersRouter.post('/users', validateSchema(userSchema), usersController.handlePost)
usersRouter.get('/users', usersController.handleGet)
usersRouter.put('/users', usersController.handlePutByName)
usersRouter.delete('/users', usersController.handleDelete)

export default usersRouter

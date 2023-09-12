import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { validateSchema } from '../middlewares/validateSchema.ts';
import userSchema from '../schemas/user.schema.ts';

const controller = new UsersController()
const usersRouter = Router()

usersRouter.post('/users', validateSchema(userSchema), controller.handlePost)


export default usersRouter
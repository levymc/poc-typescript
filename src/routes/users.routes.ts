import { Router } from 'express';
// import { validateSchema } from '../middlewares/validateSchema.ts'
import UsersController from '../controllers/users.controller';

const controller = new UsersController()
const usersRouter = Router()

usersRouter.post('/users', controller.handlePost)


export default usersRouter

import UsersRepository from "../repositories/users.repository";
import UsersService from "../services/users.service";
import UsersController from "../controllers/users.controller";

const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);

export default usersController;
import logger from "../config/logger";
import UsersRepository from "../repositories/users.repository";

export default class UsersService {

    async handlePostUser(name: string, email: string) {
        const usersRepository = new UsersRepository()
        logger.info({msg: 'UsersService.handlePostUser START', name, email});
        const responseDB = await usersRepository.create(name, email);
        logger.info({msg: 'UsersService.handlePostUser END', responseDB});
        return responseDB;
    }    

    async handleGetUsers() {
        const usersRepository = new UsersRepository()
        logger.info({msg: 'UsersService.handleGetUsers START'});
        const responseDB = await usersRepository.getUsers();
        logger.info({msg: 'UsersService.handleGetUsers END', responseDB});
        return responseDB;
    }

    async handlePutUserByName(search: string, name: string, email: string) {
        const usersRepository = new UsersRepository()
        logger.info({msg: 'UsersService.handlePutUser START'});
        const responseDB = await usersRepository.updateUserByName(search, name, email);
        logger.info({msg: 'UsersService.handlePutUser END', responseDB});
        return responseDB;
    }

    async handleDelete(id: number) {
        const usersRepository = new UsersRepository()
        logger.info({msg: 'UsersService.handleDelete START'});
        await usersRepository.delete(id);
        logger.info({msg: 'UsersService.handleDelete END'});
    }
}

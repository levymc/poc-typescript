import logger from "../config/logger";
import UsersRepository from "../repositories/users.repository";

export default class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async handlePostUser(name: string, email: string) {
        logger.info({msg: 'UsersService.handlePostUser START', name, email});
        const responseDB = await this.usersRepository.create(name, email);
        logger.info({msg: 'UsersService.handlePostUser END', responseDB});
        return responseDB;
    }    

    async handleGetUsers() {
        logger.info({msg: 'UsersService.handleGetUsers START'});
        const responseDB = await this.usersRepository.getUsers();
        logger.info({msg: 'UsersService.handleGetUsers END', responseDB});
        return responseDB;
    }

    async handlePutUserByName(search: string, name: string, email: string) {
        logger.info({msg: 'UsersService.handlePutUser START'});
        const responseDB = await this.usersRepository.updateUserByName(search, name, email);
        logger.info({msg: 'UsersService.handlePutUser END', responseDB});
        return responseDB;
    }

    async handleDelete(id: number) {
        logger.info({msg: 'UsersService.handleDelete START'});
        await this.usersRepository.delete(id);
        logger.info({msg: 'UsersService.handleDelete END'});
    }
}

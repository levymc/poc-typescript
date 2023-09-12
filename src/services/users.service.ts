import logger from "../config/logger";
import UsersRepository from "../repositories/users.repository";

export default class UsersService {

    async handlePostUser(name: string, email: string): Promise<any> {
        const usersRepository = new UsersRepository()
        logger.info({msg: 'UsersService.handlePostUser START', name, email});
        const responseDB = await usersRepository.create(name, email);
        logger.info({msg: 'UsersService.handlePostUser END', responseDB});
        return responseDB;
    }    
}

import logger from "../config/logger";
import EntriesRepository from "../repositories/entries.repository";

export default class EntriesService {

    async handlePostEntry(description: string, amount: number, date: Date, userId: number) {
        const entriesRepository = new EntriesRepository()
        logger.info({msg: 'EntriesService.handlePostEntry START', userId, description, amount, date});
        const responseDB = await entriesRepository.create(description, amount, date, userId);
        logger.info({msg: 'EntriesService.handlePostEntry END', responseDB});
        return responseDB;
    }    

    // async handleGetUsers() {
    //     const usersRepository = new UsersRepository()
    //     logger.info({msg: 'UsersService.handleGetUsers START'});
    //     const responseDB = await usersRepository.getUsers();
    //     logger.info({msg: 'UsersService.handleGetUsers END', responseDB});
    //     return responseDB;
    // }

    // async handlePutUserByName(search: string, name: string, email: string) {
    //     const usersRepository = new UsersRepository()
    //     logger.info({msg: 'UsersService.handlePutUser START'});
    //     const responseDB = await usersRepository.updateUserByName(search, name, email);
    //     logger.info({msg: 'UsersService.handlePutUser END', responseDB});
    //     return responseDB;
    // }

    // async handleDelete(id: number) {
    //     const usersRepository = new UsersRepository()
    //     logger.info({msg: 'UsersService.handleDelete START'});
    //     await usersRepository.delete(id);
    //     logger.info({msg: 'UsersService.handleDelete END'});
    // }
}

import logger from '../config/logger';
import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';

export default class UsersController {

    async handlePost(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        const service = new UsersService()
        logger.info('UsersController.handlePost START');
        try {
            const userInfo = await service.handlePostUser(req.body.name, req.body.email);
            // Coloque o código desejado aqui
            logger.info('UsersController.handlePost END');
            res.status(201).json({succes: true, msg: `O usuário ${userInfo.name} foi criado`});
        } catch (err) {
            next(err);
        }
    }
}

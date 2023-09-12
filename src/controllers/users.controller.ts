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
            logger.info('UsersController.handlePost END');
            res.status(201).json({succes: true, msg: `O usuário ${userInfo.name}, de id ${userInfo.id} foi criado`});
        } catch (err) {
            next(err);
        }
    }

    async handleGet(
        req: Request,
        res: Response,
        next: NextFunction,
    ){
        const service = new UsersService()

    }
}

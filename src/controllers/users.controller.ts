import logger from '../config/logger';
import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';
import AppError from '../errors/AppError';

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
        logger.info('UsersController.handleGet START');
        try {
            const usersList = await service.handleGetUsers();
            logger.info('UsersController.handleGet END');
            res.status(201).json(usersList);
        } catch (err) {
            next(err);
        }
    }

    async handlePutByName(
        req: Request,
        res: Response,
        next: NextFunction,
    ){
        const service = new UsersService()
        logger.info('UsersController.handlePutByName START');
        try {
            if (!req.query.search) throw new AppError('Nenhum nome foi passado para att', 'ErrorName', 404 )
            if (String(req.query.search).length < 3) throw new AppError('O nome passado deve possuir 3 ou mais caracteres', 'ErrorName', 404 )
            const updatedUser = await service.handlePutUserByName(req.params.search, req.body.name, req.body.email);
            logger.info('UsersController.handlePutByName END');
            res.status(201).json(updatedUser);
        } catch (err) {
            next(err);
        }
    }
}

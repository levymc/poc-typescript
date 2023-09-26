import logger from '../config/logger';
import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';
import AppError from '../errors/AppError';
import isNumeric from '../util/isNumeric';

export default class UsersController {
    constructor(private service: UsersService) {}

    async handlePost(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        logger.info('UsersController.handlePost START');
        try {
            const userInfo = await this.service.handlePostUser(req.body.name, req.body.email);
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
        logger.info('UsersController.handleGet START');
        try {
            const usersList = await this.service.handleGetUsers();
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
        logger.info('UsersController.handlePutByName START');
        try {
            if (!req.query.search) throw new AppError('Nenhum nome foi passado para att', 'ErrorName', 404 )
            if (String(req.query.search).length < 3) throw new AppError('O nome passado deve possuir 3 ou mais caracteres', 'ErrorName', 404 )
            const updatedUser = await this.service.handlePutUserByName(req.params.search, req.body.name, req.body.email);
            logger.info('UsersController.handlePutByName END');
            res.status(201).json(updatedUser);
        } catch (err) {
            next(err);
        }
    }

    async handleDelete(
        req: Request,
        res: Response,
        next: NextFunction,
    ){
        logger.info('UsersController.handleDelete START');
        try {
            const id = req.query.id  &&  req.query.id as string ;
            if (!id) throw new AppError('Nenhum id foi passado', 'deleteUser Error', 400 )
            if (!isNumeric(id)) throw new AppError('O parâmetro id deve numérico', 'deleteUser Error', 400);
            const userId = parseInt(id, 10);
            await this.service.handleDelete(userId);
            logger.info('UsersController.handleDelete END');
            res.status(200).json({msg: `O usuário de id ${userId} foi removido`});
        } catch (err) {
            next(err);
        }
    }
}

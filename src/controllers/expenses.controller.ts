// import AppError from '../errors/AppError.ts'
import logger from '../config/logger.ts';
import { type Request, type Response, type NextFunction } from 'express';

export default class ExpensesController {
    async handlePost(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        logger.info('ExpensesController.handlePost START');
        try {
            // Coloque o código desejado aqui
            logger.info('ExpensesController.handlePost END');
        } catch (err) {
            next(err);
        }
    }
}

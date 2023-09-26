// import AppError from '../errors/AppError.ts'
import logger from '../config/logger.ts';
import { type Request, type Response, type NextFunction } from 'express';
import EntriesService from '../services/entries.service.ts';
import { entries } from '@prisma/client';

export default class EntriesController {
    async handlePost(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        logger.info('EntriesController.handlePost START');
        const service = new EntriesService();
        try {
            const createdEntry = await service.handlePostEntry(
                            req.body.description, 
                            req.body.amount,
                            new Date(req.body.date),
                            req.body.userId
                            );
            res.status(201).json(createdEntry);
            logger.info('EntriesController.handlePost END');
        } catch (err) {
            next(err);
        }
    }
}

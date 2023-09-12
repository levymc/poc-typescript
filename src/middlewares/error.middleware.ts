/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Request, type Response, type NextFunction } from 'express';
import type AppError from '../errors/AppError.ts';
import logger from '../config/logger.ts';

export function MyException(
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction,
): Response {
    logger.error(err)
    return res.status(err.status || 500).json({
        name: err.name,
        error: err.message,
    });
}

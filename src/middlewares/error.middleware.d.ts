import { type Request, type Response, type NextFunction } from 'express';
import type AppError from '../errors/AppError.ts';
export declare function MyException(err: AppError, req: Request, res: Response, next: NextFunction): Response;

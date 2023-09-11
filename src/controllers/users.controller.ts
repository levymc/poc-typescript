import AppError from '../errors/AppError.ts'
import logger from '../config/logger.ts'
import { type Request, type Response, type NextFunction } from 'express';

export default class UsersController {
  async handlePost (req: Request, res: Response, next: NextFunction): Promise<void> {
    logger.info('UsersController.handlePost START')
    try {
      // Coloque o código desejado aqui
    } catch (err) {
      next(err)
    }
  }
}

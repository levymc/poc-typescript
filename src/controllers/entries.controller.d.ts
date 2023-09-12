import { type Request, type Response, type NextFunction } from 'express';
export default class EntriesController {
    handlePost(req: Request, res: Response, next: NextFunction): Promise<void>;
}

import { Request, Response, NextFunction } from 'express';

export function MyException(err: Error, req: Request, res: Response, next: NextFunction): Response {
    return res.status((err as any).status || 500).json({
        name: err.name,
        error: err.message,
    });
}

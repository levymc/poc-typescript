import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi'; // Certifique-se de que você tenha a biblioteca Joi instalada
import AppError from '../errors/AppError';

export function validateSchema(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(
                (detail) => detail.message,
            );
            throw new AppError(errors, 'Validate schema error', 422)
        }

        next();
    };
}

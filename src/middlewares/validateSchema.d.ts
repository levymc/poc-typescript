import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
export declare function validateSchema(schema: Joi.ObjectSchema): (req: Request, res: Response, next: NextFunction) => void;

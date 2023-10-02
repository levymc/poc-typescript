import logger from '../config/logger';
import { Request, Response, NextFunction } from 'express';
import UsersService from '../services/users.service';
import AppError from '../errors/AppError';
import isNumeric from '../util/isNumeric';
import { prismaDisconnect } from '../database/PrismaConnection';
import { exec } from "child_process";
import path from 'path';


export default class BotsController {
    async handleGet(
        req: Request,
        res: Response,
        next: NextFunction,
    ){
        const service = new UsersService()
        logger.info('BotsController.handleGet START');
        try {
            const pythonFile = path.join(__dirname, 'bot', 'test.py');
            const x = 3;
            const y = 2;
            const pythonCommand = `py "${pythonFile}" ${x} ${y}`;

            exec(pythonCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Erro ao executar o Python: ${error}`);
                    res.status(500).send('Erro ao executar o Python');
                    return;
                }

                console.log(`Saída do Python: ${stdout}`);
                res.send(`Saída do Python: ${stdout}`);
            });
        } catch (err) {
            await prismaDisconnect;
            next(err);
        }
    }
}

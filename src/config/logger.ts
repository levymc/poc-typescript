import winston from 'winston';
import bunyan from 'bunyan';
import pino, { Logger as PinoLogger } from 'pino';
import dotenv from 'dotenv';

dotenv.config();
const LOGGER = process.env.LOGGER ?? 'pino';

type LoggerType = winston.Logger | bunyan | PinoLogger;
function createLogger(loggerName: string): LoggerType {
    switch (loggerName) {
        case 'winston':
            return winston.createLogger({
                level: 'trace',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.json(),
                ),
                transports: [
                    new winston.transports.Console(),
                    new winston.transports.File({ filename: 'winstonLog.log' }),
                ],
            });
        case 'bunyan':
            return bunyan.createLogger({
                name: 'my-app',
                level: 'trace',
                streams: [
                    { stream: process.stdout, level: 'info' },
                    { path: 'bunyanLog.log' },
                ],
            });
        case 'pino':
            return pino({
                level: 'trace',
                base: null, // aqui apaga alguns campos do JSON
                formatters: {
                    level: (label) => {
                        return { level: label.toUpperCase() };
                    },
                    msg: (msg: string) => ({ msg }),
                },
            });
        default:
            throw new Error(`Logger ${loggerName} não suportado.`);
    }
}
const logger = createLogger(LOGGER);

export default logger;

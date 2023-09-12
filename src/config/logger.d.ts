import winston from 'winston';
import bunyan from 'bunyan';
import { Logger as PinoLogger } from 'pino';
type LoggerType = winston.Logger | bunyan | PinoLogger;
declare const logger: LoggerType;
export default logger;

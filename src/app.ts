import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/index.routes.ts';
import { MyException } from './middlewares/error.middleware.ts';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(MyException);

export default app

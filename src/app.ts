import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/index.routes.js';
import { MyException } from './middlewares/error.middleware.ts';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(MyException);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
    console.log(`
    GetSamurais na porta ${PORT},
    Url: http://localhost:${PORT} 
`);
});

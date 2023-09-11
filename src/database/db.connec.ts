import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('A variável DATABASE_URL não foi definida no arquivo .env');
}

const prisma = new PrismaClient();

export default prisma;

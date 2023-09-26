import request from 'supertest';
import app from '../src/app';
import { PrismaClient } from '@prisma/client';

const server = request(app);

describe("health testing", () => {
    it("/health", async () => {
        const result = await server.get('/health');
        const { statusCode } = result;
        expect(statusCode).toBe(200);
    });
});

import request from 'supertest';
import app from '../src/app';
import { users } from '@prisma/client';

const server = request(app);

describe("api testing", () => {
    it("/health", async () => {
        const result = await server.get('/health');
        const { statusCode } = result;
        expect(statusCode).toBe(200);
    });

    it("get /users", async () => {
        const result = await server.get('/users');
        expect(Array.isArray(result.body)).toBe(true);
    });
});

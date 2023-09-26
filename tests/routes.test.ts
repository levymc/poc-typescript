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
        expect(result.status).toBe(200);
    });

    it("post /users", async () => {
        const result = await server
            .post('/users')
            .send({name: "TestJest", email: "Jest@test.com"})
            .set('Accept', 'application/json');
        expect(result.status).toBe(201);
    });
});

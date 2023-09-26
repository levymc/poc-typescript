import request from 'supertest';
import app from '../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const server = request(app);

describe("Users routes testing", () => {
    it("get /users", async () => {
        const result = await server.get('/users');
        expect(result.status).toBe(200);
    });

    it("post /users", async () => {
        await checkUser();
        const result = await server
            .post('/users')
            .send({name: "TestJest", email: "Jest@test.com"})
            .set('Accept', 'application/json');
        expect(result.status).toBe(201);
    });

    it("delete /users", async () => {
        await createFakeUser()
        const result = await server
            .delete(`/users?id=9999`)
            .set('Accept', 'application/json');

        expect(result.status).toBe(204);
    });
});

async function checkUser (){
    const checkUser = await prisma.users.findUnique({
        where: { email: 'Jest@test.com' }
    });
    if(checkUser) await prisma.users.delete({
            where: { id: checkUser.id }
    });
}

async function createFakeUser (){
    const fakeUser = await prisma.users.create({
        data: {
            id: 9999,
            name: "fakerUser",
            email: "fakeUser@jests.com",
        }
    })
}
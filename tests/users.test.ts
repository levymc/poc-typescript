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
        await checkUser("Jest@test.com");
        const result = await server
            .post('/users')
            .send({name: "TestJest", email: "Jest@test.com"})
            .set('Accept', 'application/json');
        expect(result.status).toBe(201);
    });

    it("put /users", async () => {
        const res = await checkUser("Jest2@test.com")
        if (res) await createFakeUser(9995, 'JestsUpdate', "Jes81818181@test.com")
        const result = await server
            .put('/users?search=JestsUpdate')
            .send({name: "UpdatedJests", email: "Jest2@test.com"})
            .set('Accept', 'application/json');
        expect(result.status).toBe(200);
    });

    it("delete /users", async () => {
        await createFakeUser(9999, 'fakerUser', 'fakeUser@jests.com')
        const result = await server
            .delete(`/users?id=9999`)
            .set('Accept', 'application/json');
        expect(result.status).toBe(204);
    });
});

async function checkUser (email: string){
    const checkUser = await prisma.users.findUnique({
        where: { email }
    });
    if(checkUser) {
        await prisma.users.delete({
            where: { id: checkUser.id }
        });
        return true
    }
}

async function createFakeUser (id: number, name: string, email: string){
    const fakeUser = await prisma.users.create({
        data: {
            id, name, email,
        }
    })
}
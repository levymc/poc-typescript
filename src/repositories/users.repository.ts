/* eslint-disable @typescript-eslint/no-throw-literal */
import { PrismaClient } from '@prisma/client';
import AppError from '../errors/AppError';

export default class UsersRepository {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(name: string, email: string): Promise<void> {
        try {
            await this.prisma.users.create({
                data: {
                    name,
                    email,
                },
            });
        } catch (error: unknown) {
            throw new AppError(error, 'Error creating user', 500);
        }
    }

    async getUserById(id: number): Promise<any> {
        try {
            const user = await this.prisma.users.findUnique({
                where: {
                    id,
                },
            });
            return user;
        } catch (error) {
            throw new AppError(error, 'Error retrieving user', 500);
        }
    }

    async update(id: number, name: string, email: string): Promise<void> {
        try {
            await this.prisma.users.update({
                where: {
                    id,
                },
                data: {
                    name,
                    email,
                },
            });
        } catch (error) {
            throw new AppError(error, 'Error updating user', 500);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.users.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw new AppError(error, 'Error deleting user', 500);
        }
    }
}

/* eslint-disable @typescript-eslint/no-throw-literal */
import { PrismaClient } from '@prisma/client';
import AppError from '../errors/AppError';
import httpStatus from 'http-status'
import { prismaConnection } from '../database/PrismaConnection';

export default class UsersRepository {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = prismaConnection;
    }

    async create(name: string, email: string) {
        try {
            const response = await this.prisma.users.create({
                data: {
                    name,
                    email,
                },
            });
            return response
        } catch (error: any) {
            if (error.code === "P2002") throw new AppError(`O valor de '${error.meta.target}' não pode ser repetido`, error.name, httpStatus.BAD_REQUEST);
            
            throw new AppError(error, 'Error creating user', 500);
        }
    }

    async getUsers(){
        try {
            const usersList = await this.prisma.users.findMany()
            return usersList;
        } catch (error) {
            console.error(error)
            throw new AppError(error, 'Error retrieving user', 500);
        }
    }

    async getUserById(id: number) {
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

    async updateUserByName(searchName: string, newName: string, newEmail: string) {
        try {
            const user = await this.prisma.users.findFirstOrThrow({
                where: {
                    name: {
                        contains: searchName,
                    },
                },
            });
    
            const responseDB = await this.prisma.users.update({
                where: {
                    id: user.id,
                },
                data: {
                    name: newName,
                    email: newEmail,
                },
            });
            return responseDB
        } catch (error: any) {
            if (error.code === "P2002") throw new AppError(`O valor de '${error.meta.target}' não pode ser repetido`, error.name, httpStatus.BAD_REQUEST);
            
            throw new AppError(error, 'Error creating user', 500);
        }
    }
    

    async update(id: number, name: string, email: string) {
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

    async delete(id: number) {
        try {
            await this.prisma.users.delete({
                where: {
                    id,
                },
            });
        } catch (error: any) {
            if (error.code == "P2025") throw new AppError("Este id já foi deletado", 'Error deleting user', 404);
            throw new AppError(error, 'Error deleting user', 500);
        }
    }
}

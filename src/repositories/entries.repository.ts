/* eslint-disable @typescript-eslint/no-throw-literal */
import { PrismaClient, entries } from '@prisma/client';
import AppError from '../errors/AppError';

export default class EntriesRepository {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(
        description: string,
        amount: number,
        date: Date,
        userId: number,
    ): Promise<entries> {
        try {
            const createdEntry = await this.prisma.entries.create({
                data: {
                    description,
                    amount,
                    date,
                    users: {
                        connect: {
                            id: userId,
                        },
                    },
                },
            });
            return createdEntry;
        } catch (error) {
            throw new AppError(error, 'Error creating entry', 500);
        }
    }

    async getEntryById(id: number): Promise<any> {
        try {
            const entry = await this.prisma.entries.findUnique({
                where: {
                    id,
                },
            });
            return entry;
        } catch (error) {
            throw new AppError(error, 'Error retrieving entry', 500);
        }
    }

    async update(
        id: number,
        description: string,
        amount: number,
        date: Date,
    ): Promise<void> {
        try {
            await this.prisma.entries.update({
                where: {
                    id,
                },
                data: {
                    description,
                    amount,
                    date,
                },
            });
        } catch (error) {
            throw new AppError(error, 'Error updating entry', 500);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.entries.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw new AppError(error, 'Error deleting entry', 500);
        }
    }
}

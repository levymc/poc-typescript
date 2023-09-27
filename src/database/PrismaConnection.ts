import { PrismaClient } from '@prisma/client';

let instance: PrismaClient;
class PrismaConnection {
  constructor() {
    if (instance) {
      throw new Error('Tried to create more than one PrismaConnection');
    }
    instance = new PrismaClient();
  }

  getInstance() {
    return instance;
  }

  async prismaDisconnection() {
    await instance.$disconnect();
  }
}
const prisma = new PrismaConnection();
const prismaDisconnect = Object.freeze(prisma).prismaDisconnection();
const prismaConnection: PrismaClient = Object.freeze(prisma).getInstance();

export { prismaConnection, prismaDisconnect };

import { PrismaClient } from '@prisma/client';

class UsersRepository {
  private prisma: PrismaClient;

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
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
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
      throw new Error(`Error retrieving user: ${error}`);
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
      throw new Error(`Error updating user: ${error}`);
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
      throw new Error(`Error deleting user: ${error}`);
    }
  }
}

export default UsersRepository;

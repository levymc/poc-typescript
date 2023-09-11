/* eslint-disable @typescript-eslint/no-throw-literal */
import { PrismaClient } from '@prisma/client'
import AppError from '../errors/AppError'

export default class ExpensesRepository {
  private readonly prisma: PrismaClient

  constructor () {
    this.prisma = new PrismaClient()
  }

  async create (description: string, amount: number, date: Date, userId: number): Promise<void> {
    try {
      await this.prisma.expenses.create({
        data: {
          description,
          amount,
          date,
          users: {
            connect: {
              id: userId
            }
          }
        }
      })
    } catch (error) {
      throw new AppError(error, 'Error creating expense', 500)
    }
  }

  async getExpenseById (id: number): Promise<any> {
    try {
      const expense = await this.prisma.expenses.findUnique({
        where: {
          id
        }
      })
      return expense
    } catch (error) {
      throw new AppError(error, 'Error retrieving expense', 500)
    }
  }

  async update (id: number, description: string, amount: number, date: Date): Promise<void> {
    try {
      await this.prisma.expenses.update({
        where: {
          id
        },
        data: {
          description,
          amount,
          date
        }
      })
    } catch (error) {
      throw new AppError(error, 'Error updating expenses', 500)
    }
  }

  async delete (id: number): Promise<void> {
    try {
      await this.prisma.expenses.delete({
        where: {
          id
        }
      })
    } catch (error) {
      throw new AppError(error, 'Error deleting expenses', 500)
    }
  }
}

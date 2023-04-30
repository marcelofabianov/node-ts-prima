import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { createCustomerDto } from '@customer/create-customer.dto';

export class CustomerRepository {
  constructor(
    private readonly db: PrismaClient
  ) { }

  async createCustomer(dto: z.infer<typeof createCustomerDto>) {
    const customer = await this.db.customer.create({
      data: dto
    });

    return customer;
  }
}

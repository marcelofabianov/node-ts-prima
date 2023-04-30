import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { createCustomerDto } from '@customer/create-customer.dto';
import { Customer } from '@customer/customer.entity';

export class CustomerRepository {
  constructor(
    private readonly db: PrismaClient
  ) { }

  async createCustomer(dto: z.infer<typeof createCustomerDto>) {
    const data = await this.db.customer.create({
      data: dto
    });

    const customer = new Customer(createCustomerDto.parse({
      ...data,
    }));

    return customer;
  }
}

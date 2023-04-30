import { z } from 'zod';
import { CustomerRepository } from '@customer/use-cases/customer.repository';
import { createCustomerDto } from '@customer/create-customer.dto';
import { Customer } from '@customer/customer.entity';

export interface ICreateCustomerUseCase {
  execute(dto: z.infer<typeof createCustomerDto>): Promise<Customer>;
}

export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepository
  ) { }

  async execute(dto: z.infer<typeof createCustomerDto>): Promise<Customer> {
    const customer = await this.customerRepository.createCustomer(dto);

    return customer;
  }
}

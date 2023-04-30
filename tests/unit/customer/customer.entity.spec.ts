import { createCustomerDto } from '@customer/create-customer.dto';
import { Customer } from "@customer/customer.entity";

describe('customer', () => {
  const id = '77c92ede-e3f0-4f14-b2c2-a89a22f56fcb';
  const name = 'Company';
  const registrationDocument = '12345678912345';
  const createdAt = new Date;
  const updatedAt = new Date;
  const inactivatedAt = new Date;
  const deletedAt = new Date;

  it('should create new customer', () => {
    const customer = new Customer(createCustomerDto.parse({
      id,
      name,
      registrationDocument,
      createdAt,
      updatedAt,
      inactivatedAt,
      deletedAt
    }));

    expect(customer).toBeDefined()
    expect(customer.id).toBe(id);
    expect(customer.name).toBe(name);
    expect(customer.registrationDocument).toBe(registrationDocument);
    expect(customer.createdAt).toBeInstanceOf(Date);
    expect(customer.updatedAt).toBeInstanceOf(Date);
    expect(customer.inactivatedAt).toBeInstanceOf(Date);
    expect(customer.deletedAt).toBeInstanceOf(Date);
  })
});

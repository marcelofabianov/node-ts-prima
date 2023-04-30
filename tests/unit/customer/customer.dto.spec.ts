import { z } from 'zod';
import { createCustomerDto } from '@customer/customer.dto';

describe('createCustomerDto', () => {
  const validCustomer = {
    id: '77c92ede-e3f0-4f14-b2c2-a89a22f56fcb',
    name: 'Company',
    registrationDocument: '12345678912345',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it('should validate a valid customer object', () => {
    expect(() => createCustomerDto.parse(validCustomer)).not.toThrow();
  });

  it('should throw an error if id is not a uuid', () => {
    const invalidCustomer = { ...validCustomer, id: 'invalid-uuid' };
    expect(() => createCustomerDto.parse(invalidCustomer)).toThrow();
  });

  it('should throw an error if name is too short', () => {
    const invalidCustomer = { ...validCustomer, name: 'ab' };
    expect(() => createCustomerDto.parse(invalidCustomer)).toThrow();
  });

  it('should throw an error if name is too long', () => {
    const invalidCustomer = { ...validCustomer, name: 'a'.repeat(256) };
    expect(() => createCustomerDto.parse(invalidCustomer)).toThrow();
  });

  it('should throw an error if registrationDocument is too short', () => {
    const invalidCustomer = { ...validCustomer, registrationDocument: '1234567891' };
    expect(() => createCustomerDto.parse(invalidCustomer)).toThrow();
  });

  it('should throw an error if registrationDocument is too long', () => {
    const invalidCustomer = { ...validCustomer, registrationDocument: '123456789123456' };
    expect(() => createCustomerDto.parse(invalidCustomer)).toThrow();
  });

  it('should throw an error if createdAt is not a Date object', () => {
    const invalidCustomer = { ...validCustomer, createdAt: 'invalid-date' };
    expect(() => createCustomerDto.parse(invalidCustomer)).toThrow();
  });

  it('should throw an error if updatedAt is not a Date object', () => {
    const invalidCustomer = { ...validCustomer, updatedAt: 'invalid-date' };
    expect(() => createCustomerDto.parse(invalidCustomer)).toThrow();
  });

  it('should allow optional inactivatedAt property', () => {
    const validCustomerWithOptionalProp = { ...validCustomer, inactivatedAt: new Date() };
    expect(() => createCustomerDto.parse(validCustomerWithOptionalProp)).not.toThrow();
  });

  it('should allow optional deletedAt property', () => {
    const validCustomerWithOptionalProp = { ...validCustomer, deletedAt: new Date() };
    expect(() => createCustomerDto.parse(validCustomerWithOptionalProp)).not.toThrow();
  });
});

import { z } from 'zod';
import { createCustomerDto } from "./customer.dto";

export class Customer {
  public readonly id: string;
  public readonly name: string;
  public readonly registrationDocument: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly inactivatedAt?: Date;
  public readonly deletedAt?: Date;

  constructor(dto: z.infer<typeof createCustomerDto>) {
    this.id = dto.id;
    this.name = dto.name;
    this.registrationDocument = dto.registrationDocument;
    this.createdAt = dto.createdAt;
    this.updatedAt = dto.updatedAt;
    this.inactivatedAt = dto.inactivatedAt;
    this.deletedAt = dto.deletedAt;
  }
}

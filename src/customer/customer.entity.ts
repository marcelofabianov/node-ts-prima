import { z } from 'zod';

const customerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().max(255).min(3),
  registrationDocument: z.string().max(14).min(11),
  createdAt: z.date(),
  updatedAt: z.date(),
  inactivatedAt: z.date().optional(),
  deletedAt: z.date().optional()
});

export class Customer {
  public readonly id: string;
  public readonly name: string;
  public readonly registrationDocument: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public readonly inactivatedAt?: Date;
  public readonly deletedAt?: Date;

  constructor(dto: z.infer<typeof customerSchema>) {
    this.id = dto.id;
    this.name = dto.name;
    this.registrationDocument = dto.registrationDocument;
    this.createdAt = dto.createdAt;
    this.updatedAt = dto.updatedAt;
    this.inactivatedAt = dto.inactivatedAt;
    this.deletedAt = dto.deletedAt;
  }
}

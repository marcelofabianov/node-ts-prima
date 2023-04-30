import { z } from 'zod';

export const createCustomerDto = z.object({
  id: z.string().uuid(),
  name: z.string().max(255).min(3),
  registrationDocument: z.string().max(14).min(11),
  createdAt: z.date(),
  updatedAt: z.date(),
  inactivatedAt: z.date().optional(),
  deletedAt: z.date().optional()
});

export class Customer {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly registrationDocument: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly inacitavedAt?: Date,
    public readonly deletedAt?: Date
  ) {}
}

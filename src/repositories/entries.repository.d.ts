export default class EntriesRepository {
    private readonly prisma;
    constructor();
    create(description: string, amount: number, date: Date, userId: number): Promise<void>;
    getEntryById(id: number): Promise<any>;
    update(id: number, description: string, amount: number, date: Date): Promise<void>;
    delete(id: number): Promise<void>;
}

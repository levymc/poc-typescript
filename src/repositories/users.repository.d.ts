export default class UsersRepository {
    private readonly prisma;
    constructor();
    create(name: string, email: string): Promise<void>;
    getUserById(id: number): Promise<any>;
    update(id: number, name: string, email: string): Promise<void>;
    delete(id: number): Promise<void>;
}

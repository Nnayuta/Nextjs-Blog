import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import * as db from '../../database/repositories/DatabaseRepository';

export class DatabaseUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        // Preciso corrigir
        const user = await db.findOne(
            {
                TABLE: 'User',
                WHERE: 'email',
                VALUE: email
            });
        return user as User;
    }

    async save(user: User): Promise<void> {
        db.create(user);
    }
}
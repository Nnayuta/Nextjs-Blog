import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import * as db from '../../database/repositories/DatabaseRepository';

export class DatabaseUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await db.findOne('User', 'email', email);
        return user;
    }

    async save(user: User): Promise<void> {
        db.create(user);
    }
}
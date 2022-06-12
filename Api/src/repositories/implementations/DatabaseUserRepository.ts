import bcrypt from 'bcrypt';
import * as db from '@database/repositories/DatabaseRepository';
import { DatabaseError } from '@entities/errors/DatabaseError.error.model';
import { User } from "@entities/User";
import { IUsersRepository } from "../IUserRepository";

export class DatabaseUsersRepository implements IUsersRepository {
    async save(user: User): Promise<void> {
        await db.create(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await db.findOne(
            {
                TABLE: 'User',
                WHERE: 'email',
                VALUE: email
            });

        if (user instanceof DatabaseError) {
            return null;
        }

        return user as User;
    }


    async findByEmailAndPassword(email: string, password: string): Promise<User> {
        const user = await db.findOne({ TABLE: 'User', WHERE: 'email', VALUE: email });

        if (!user) {
            throw new Error('User not found');
        }

        const userTyped = user as User;

        if (!bcrypt.compareSync(password, userTyped.password)) {
            throw new Error('Password does not match');
        }

        return userTyped;
    }

    async findById(id: string): Promise<User> {
        const user = await db.findOne({ TABLE: 'User', WHERE: 'id', VALUE: id });

        if (user instanceof DatabaseError) {
            return null;
        }

        return user as User;
    }
}
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
require('dotenv').config()

export class User {

    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        if (!id) {
            this.id = uuidv4();
        }

        Object.assign(this, props);
        this.password = this.hashPassword(props.password);
    }

    private hashPassword(password: string): string {
        return bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
    }
}
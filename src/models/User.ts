import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export class User {
    public readonly uuid: string;

    public name: string;
    public email: string;
    public password: string;
    public avatar?: string

    constructor(props: Omit<User, 'uuid'>, uuid?: string,) {
        this.uuid = uuid || uuidv4();

        Object.assign(this, props);

        if(this.password) {
            this.password = this.hashPassword(this.password);
        }

    }

    private hashPassword(password: string): string {
        return bcrypt.hashSync(password, 10);
    }
}

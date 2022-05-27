import { v4 as uuidv4 } from 'uuid';

export class User {

    public readonly id: string;

    public username: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        if (!id) {
            this.id = uuidv4();
        }

        Object.assign(this, props);
    }
}
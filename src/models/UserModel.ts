import bcrypt from 'bcrypt';
import { PostModel } from './PostModel';

export class UserModel {

    public _id?: string;
    public displayName?: string;
    public username: string;
    public password: string;
    public avatar?: string
    public bio?: string
    public posts?: PostModel;
    
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(props: UserModel) {

        Object.assign(this, props);

        if (!this.displayName) {
            this.displayName = this.username;
        }

        if (this.password) {
            this.password = this.hashPassword(this.password);
        }

    }

    private hashPassword?(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT_ROUNDS)));
    }
}

import bcrypt from 'bcrypt';

export class UserModel {

    public readonly _id?: string;
    public displayName?: string;
    public username: string;
    public password: string;
    public avatar?: string
    public bio?: string
    
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

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

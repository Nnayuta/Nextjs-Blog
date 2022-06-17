import bcrypt from 'bcrypt';

export class UserModel {

    public id?: string;
    public displayName?: string;
    public username: string;
    public password: string;
    public avatar?: string

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
        return bcrypt.hashSync(password, process.env.BCRYPT_SALT_ROUNDS);
    }
}

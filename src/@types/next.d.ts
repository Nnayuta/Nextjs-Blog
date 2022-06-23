import { UserModel } from "../models/UserModel";

declare module 'next'{
    interface NextApiRequest{
        user?: Omit<UserModel, 'password'>;
    }
}
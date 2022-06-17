import User from "../schema/UserSchema";

declare module 'next'{
    interface NextApiRequest{
        user?: User;
    }
}
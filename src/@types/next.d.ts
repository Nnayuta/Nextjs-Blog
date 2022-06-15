import User from "../schema/users-schema";

declare module 'next'{
    interface NextApiRequest{
        user?: User;
    }
}
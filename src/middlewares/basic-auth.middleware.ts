import { NextApiRequest, NextApiResponse } from "next";
import { findByEmailAndPassword } from "../providers/user-Provider";

export async function basicAuthMiddleware(req: NextApiRequest, res: NextApiResponse) {
    try {

        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            throw new Error('No authorization header');
        }

        const [type, token] = authHeader.split(' ');

        if (type !== 'Basic' || !token) {
            throw new Error('Invalid authorization header');
        }

        const [email, password] = Buffer.from(token, 'base64').toString().split(':');

        if (!email || !password) {
            throw new Error('Invalid authorization header');
        }

        const user = await findByEmailAndPassword(email, password);

        if (!user) {
            throw new Error('Invalid authorization header');
        }

        req.user = user;
        return true

    } catch (error) {
        throw error;
    }
}
import { NextApiRequest, NextApiResponse } from "next";
import UserSchema from "../schema/UserSchema";
import bcrypt from 'bcrypt';
import { UserModel } from "../models/UserModel";
import { MongoDB } from "../utils/MongoDB";

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

        const [username, password] = Buffer.from(token, 'base64').toString().split(':');

        if (!username || !password) {
            throw new Error('Invalid authorization header');
        }
        await MongoDB.connect()
        const userFind = await UserSchema.findOne({ username: username }) as UserModel;
        await MongoDB.disconnect()

        if (!userFind) {
            throw new Error('Unauthorized');
        }

        if (!bcrypt.compareSync(password, userFind.password)) {
            throw new Error('Unauthorized');
        }

        const userR: Omit<UserModel, 'password'> = {
            _id: userFind._id.toString(),
            displayName: userFind.displayName,
            username: userFind.username,
            avatar: userFind.avatar,
            createdAt: userFind.createdAt,
            updatedAt: userFind.updatedAt
        }

        req.user = userR;

    } catch (error) {
        throw error;
    }
}
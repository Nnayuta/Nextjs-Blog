import bcrypt from 'bcrypt';
import { StatusCodes } from "http-status-codes";
import { JwtPayload, SignOptions } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../../models/UserModel";
import UserSchema from "../../../schema/UserSchema";
import { JWToken } from "../../../services/JWToken";
import { MongoDB } from "../../../utils/MongoDB";

export interface IjwtPayload extends JwtPayload {
    user: Omit<UserModel, 'password'>;
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const authHeader = req.headers['authorization'];

            if (!authHeader) {
                throw new Error('No authorization header');
            }
    
            const [type, bToken] = authHeader.split(' ');
    
            if (type !== 'Basic' || !bToken) {
                throw new Error('Invalid authorization header');
            }
    
            const [username, password] = Buffer.from(bToken, 'base64').toString().split(':');
    
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
    
            const user: Omit<UserModel, 'password'> = {
                _id: userFind._id.toString(),
                username: userFind.username,
                displayName: userFind.displayName,
                avatar: userFind.avatar,
                bio: userFind.bio,
                createdAt: userFind.createdAt,
                updatedAt: userFind.updatedAt
            }

            if (!user) {
                throw new Error('Unauthorized');
            }

            const JwTPayLoad: IjwtPayload = {
                user: user,
            }

            const options: SignOptions = {
                subject: user._id.toString(),
            }

            const token = JWToken.sign(JwTPayLoad, options);
            req.user = user

            return res.status(StatusCodes.OK).json({
                "token": token,
            });
        }
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: error.message || 'Unexpected error',
            status: StatusCodes.UNAUTHORIZED
        });
    }
}

export default login;
import { NextApiRequest, NextApiResponse } from "next";
import UserSchema from "../schema/UserSchema";
import { JWToken } from "../services/JWToken";

export default async function JWTAuthenticationMiddleware(req: NextApiRequest, res: NextApiResponse) {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            throw new Error('No authorization header');
        }

        const [type, token] = authHeader.split(' ');

        if (type !== 'Bearer' || !token) {
            throw new Error('Invalid authorization header');
        }

        const verify = JWToken.verify(token);

        if(!verify){
            throw new Error('Invalid authorization header');
        }

        const findUser = UserSchema.findById(verify.sub).select('-password')

        if(!findUser){
            throw new Error('Invalid authorization header');
        }

        return true

    } catch (error) {
        throw error
    }
}
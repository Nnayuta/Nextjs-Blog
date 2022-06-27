import { StatusCodes } from "http-status-codes";
import { JwtPayload, SignOptions } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from "next";
import { basicAuthMiddleware } from "../../middleware/basic-auth.middleware";
import { UserModel } from "../../models/UserModel";
import { JWToken } from "../../services/JWToken";

export interface IjwtPayload extends JwtPayload {
    user: Omit<UserModel, 'password'>;
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            await basicAuthMiddleware(req, res);

            const user = req.user;

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
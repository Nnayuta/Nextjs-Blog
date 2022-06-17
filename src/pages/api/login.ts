import { StatusCodes } from "http-status-codes";
import { JwtPayload, SignOptions } from 'jsonwebtoken';
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { basicAuthMiddleware } from "../../middleware/basic-auth.middleware";
import { JWToken } from "../../services/JWToken";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            await basicAuthMiddleware(req, res);

            const user = req.user;

            if (!user) {
                throw new Error('Unauthorized');
            }

            const JwTPayLoad: JwtPayload = {
                user: user,
            }


            const options: SignOptions = {
                subject: user.id
            }
            
            const jwt = new JWToken();
            const token = jwt.sign(JwTPayLoad, options);

            return res.status(StatusCodes.OK).json({
                "token": token,
            });
        }
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            error: error.message || 'Unexpected error'
        });
    }
}

export default login;
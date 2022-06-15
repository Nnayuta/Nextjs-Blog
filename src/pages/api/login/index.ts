import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { basicAuthMiddleware } from "../../../middlewares/basic-auth.middleware";
import JWT, { SignOptions } from 'jsonwebtoken';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            await basicAuthMiddleware(req, res);

            const user = req.user;

            if(!user){
                throw new Error('Unauthorized');
            }

            const JwTPayLoad = {
                id: user.uuid,
            }

            const options: SignOptions = {
                subject: user.uuid
            }

            const token = JWT.sign(JwTPayLoad, process.env.JWT_SECRET_KEY, options);

            return res.status(StatusCodes.OK).json({
                "token": token,
                "user": user
            });
        }
        else{
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                "message": "Method not allowed"
            });
        }
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            error: error.message || 'Unexpected error'
        });
    }
}

export default login;
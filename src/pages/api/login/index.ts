import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { basicAuthMiddleware } from "../../../middlewares/basic-auth.middleware";
import JWT, { SignOptions } from 'jsonwebtoken';


const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            const auth = await basicAuthMiddleware(req, res);

            if (!auth) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    error: 'Unauthorized'
                });
            }

            const user = req.user;

            const JwTPayLoad = {
                id: user.uuid,
            }

            const options: SignOptions = {
                subject: user.uuid
            }

            const token = JWT.sign(JwTPayLoad, '123', options);

            return res.status(StatusCodes.OK).json({
                "token": token,
                "user": user
            });
        }
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: error.message || 'Unexpected error'
        });
    }
}

export default handle;
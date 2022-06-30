import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import JWTAuthenticationMiddleware from "../../../../middleware/jwt-authentication.middleware";
import UserSchema from "../../../../schema/UserSchema";
import { MongoDB } from "../../../../utils/MongoDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await JWTAuthenticationMiddleware(req, res);
        switch (req.method) {
            case 'PUT':
                try {
                    await MongoDB.connect()
                    const updateUser = await UserSchema.findByIdAndUpdate(req.query.id, req.body, { new: true }).select('-password -__v')
                    await MongoDB.disconnect()
                    if (!updateUser) {
                        return res.status(StatusCodes.NOT_FOUND).json({
                            message: 'User not found'
                        })
                    }

                    return res.status(StatusCodes.OK).json({
                        message: 'User updated',
                        updateUser
                    })
                } catch (error) {
                    return res.status(StatusCodes.UNAUTHORIZED).json({
                        message: 'Unauthorized'
                    })
                }

            default:
                return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                    message: 'Method not allowed'
                })
        }
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: error.message
        })
    }
}
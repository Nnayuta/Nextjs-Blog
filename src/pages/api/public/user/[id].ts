import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import UserSchema from "../../../../schema/UserSchema";
import { MongoDB } from "../../../../utils/MongoDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            try {
                await MongoDB.connect()
                const findUser = await UserSchema.findById(req.query.id).select('-password').select('-__v')
                await MongoDB.disconnect()
                
                if (!findUser) {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        message: 'User not found'
                    })
                }

                return res.status(StatusCodes.OK).json(findUser)
            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }

        default:
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                message: 'Method not allowed'
            })

    }
}
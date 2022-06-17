import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { basicAuthMiddleware } from "../../../middleware/basic-auth.middleware";
import UserSchema from "../../../schema/UserSchema";
import { MongoConnection } from "../../../services/mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const Mongo = new MongoConnection()
    await Mongo.connect()

    switch (req.method) {
        case 'GET':
            try {
                const findUser = await UserSchema.findById(req.query.id).select('-password').select('-__v')
                await Mongo.close()

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
        case 'PUT':
            try {
                const updateUser = await UserSchema.findByIdAndUpdate(req.query.id, req.body, { new: true })

                if (!updateUser) {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        message: 'User not found'
                    })
                }

                return res.status(StatusCodes.OK).json({
                    message: 'User updated'
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
}
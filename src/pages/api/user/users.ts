import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { PostModel } from "../../../models/PostModel";
import PostSchema from "../../../schema/PostSchema";
import UserSchema from "../../../schema/UserSchema";
import { MongoDB } from "../../../utils/MongoDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case 'GET':
            try {
                await MongoDB.connect()
                const findUser = await UserSchema.find().select('-password -__v')
                    .catch(err => {
                        throw new Error(err)
                    });

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
    }
}
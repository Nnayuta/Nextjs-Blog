import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import PostSchema from "../../../schema/PostSchema";
import UserSchema from "../../../schema/UserSchema";
import { MongoDB } from "../../../utils/MongoDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case 'GET':
            try {
                await MongoDB.connect()
                const findPost = await PostSchema.find({ public: true }).populate('author', '-password -__v -createdAt -updatedAt -username', UserSchema).select('-__v').sort({ createdAt: -1 })
                    .catch(err => {
                        throw new Error(err)
                    });
                await MongoDB.disconnect()
                if (!findPost) {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        message: 'Posts not found'
                    })
                }

                return res.status(StatusCodes.OK).json(findPost)

            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
    }
}
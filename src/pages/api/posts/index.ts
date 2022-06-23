import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import PostSchema from "../../../schema/PostSchema";
import { MongoDB } from "../../../utils/MongoDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case 'GET':
            try {
                await MongoDB.connect()
                const findPost = await PostSchema.find().populate('author', '-password -__v -createdAt -updatedAt -username').select('-__v')
                    .catch(err => {
                        throw new Error(err)
                    });
                await MongoDB.disconnect()
                if (!findPost) {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        message: 'Posts not found'
                    })
                }

                const filteredPost = findPost.filter(post => {
                    return post.public === true
                })

                return res.status(StatusCodes.OK).json(filteredPost)

            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
    }
}
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

import PostSchema from "../../../schema/PostSchema";
import { MongoConnection } from "../../../services/mongoose";

const PostRouter = async (req: NextApiRequest, res: NextApiResponse) => {
    const Mongo = new MongoConnection();

    switch (req.method) {
        case 'DELETE':
            try {
                await Mongo.connect();
                const findPost = await PostSchema.findByIdAndDelete(req.query.id)
                    .catch(err => {
                        throw new Error(err)
                    });
                if (!findPost) {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        message: 'Posts not found'
                    })
                }

                await Mongo.close();
                return res.status(StatusCodes.OK).json({
                    message: 'Post deleted'
                })
            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
        default:
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                message: 'Method not allowed'
            });
    }

}

export default PostRouter;
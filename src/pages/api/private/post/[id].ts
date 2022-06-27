import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

import PostSchema from "../../../../schema/PostSchema";
import { MongoDB } from "../../../../utils/MongoDB";

const PostRouter = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'DELETE':
            try {
                await MongoDB.connect()

                const findPost = await PostSchema.findByIdAndDelete(req.query.id)
                    .catch(err => {
                        throw new Error(err)
                    });
                if (!findPost) {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        message: 'Posts not found'
                    })
                }
                await MongoDB.disconnect();
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
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import PostSchema from "../../../schema/PostSchema";
import { MongoConnection } from "../../../services/mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const Mongo = new MongoConnection();
    
    switch (req.method) {
        case 'GET':
            try {
                await Mongo.connect();
                const findPost = await PostSchema.find().populate('author' , '-password -__v -createdAt -updatedAt -username').select('-__v')
                    .catch(err => {
                        throw new Error(err)
                    });

                if (!findPost) {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        message: 'Posts not found'
                    })
                }

                const filteredPost = findPost.filter(post => {
                    return post.public === true
                })

                await Mongo.close();
                return res.status(StatusCodes.OK).json(filteredPost)

            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
    }
}
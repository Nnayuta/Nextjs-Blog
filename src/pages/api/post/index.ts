import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { PostModel } from "../../../models/PostModel";

import { JWToken } from "../../../services/JWToken";
import { IjwtPayload } from "../login";

import PostSchema from "../../../schema/PostSchema";
import UserSchema from "../../../schema/UserSchema";
import { MongoConnection } from "../../../services/mongoose";
import { UserModel } from "../../../models/UserModel";

const PostRouter = async (req: NextApiRequest, res: NextApiResponse) => {
    const Mongo = new MongoConnection();

    switch (req.method) {
        case 'POST':
            try {
                await Mongo.connect();

                const jwt = new JWToken();
                const [type, token] = req.headers['authorization'].split(' ');

                const decoded = jwt.verify(token) as IjwtPayload

                if (!decoded) {
                    return res.status(StatusCodes.UNAUTHORIZED).json({
                        message: 'Unauthorized'
                    })
                }

                const user = await UserSchema.findById(decoded.sub).select('-password -__v');

                if (!user) {
                    throw new Error('Unauthorized');
                }

                const post = new PostModel({
                    title: req.body.title,
                    content: req.body.content,
                    imagePath: req.body.imagePath,
                    category: req.body.category,
                    author: user,
                    public: req.body.public,
                })

                const newPost = new PostSchema(post)

                await newPost.save().catch(err => {
                    throw new Error(err)
                });

                await Mongo.close();
                return res.status(StatusCodes.CREATED).json({
                    message: 'Post created',
                    post: newPost,
                });

            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
        case 'PUT':
            try {

            } catch (error) {

            }
            break
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
        case 'GET':
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
    
                    await Mongo.close();
                    return res.status(StatusCodes.OK).json(findPost)
    
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
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../../models/UserModel";
import UserSchema from "../../../schema/UserSchema";
import { MongoConnection } from "../../../services/mongoose";

const createuser = async (req: NextApiRequest, res: NextApiResponse) => {
    const Mongo = new MongoConnection();
    
    switch (req.method) {
        case 'POST':
            try {
                const newUser = new UserModel({
                    displayName: req.body.displayName,
                    username: req.body.username,
                    password: req.body.password,
                })
                
                await Mongo.connect();
                const user = await new UserSchema(newUser)
                
                await user.save().catch(err => {
                    throw new Error(err)
                })

                await Mongo.close();
                return res.status(StatusCodes.CREATED).json({
                    message: 'User created'
                });

            } catch (error) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
            break
        default:
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                message: 'Method not allowed'
            });
    }

}

export default createuser;
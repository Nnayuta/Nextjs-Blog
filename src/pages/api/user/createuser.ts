import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../../models/UserModel";
import UserSchema from "../../../schema/UserSchema";

import { MongoConnection } from "../../../services/mongoose";

const createuser = async (req: NextApiRequest, res: NextApiResponse) => {

    const Mongo = new MongoConnection();
    await Mongo.connect();

    switch (req.method) {
        case 'POST':
            try {
                const newUser = new UserModel({
                    displayName: req.body.displayName,
                    username: req.body.username,
                    password: req.body.password,
                })

                const user = await new UserSchema(newUser)

                await user.save().catch(err => {
                    throw new Error(err)
                })

                res.status(StatusCodes.CREATED).json({
                    message: 'User created'
                });

                await Mongo.close();
            } catch (error) {
                await Mongo.close();
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
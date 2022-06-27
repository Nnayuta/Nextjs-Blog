import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../../../models/UserModel";
import UserSchema from "../../../../schema/UserSchema";
import { MongoDB } from "../../../../utils/MongoDB";

const createuser = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            try {
                const newUser = new UserModel({
                    displayName: req.body.displayName,
                    username: req.body.username,
                    password: req.body.password,
                })

                await MongoDB.connect()
                const user = new UserSchema(newUser)
                await user.save().catch(err => {
                    throw new Error(err)
                })
                await MongoDB.disconnect()
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
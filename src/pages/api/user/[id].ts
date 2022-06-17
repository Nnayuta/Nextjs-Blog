import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import UserSchema from "../../../schema/UserSchema";
import { MongoConnection } from "../../../services/mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const Mongo = new MongoConnection()
    await Mongo.connect()

    switch (req.method) {
        case 'GET':
            const findUser = await UserSchema.findById(req.query.id).select('-password').select('-__v')
            await Mongo.close()

            if (!findUser) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: 'User not found'
                })
            }

            return res.status(StatusCodes.OK).json(findUser)
    }
}
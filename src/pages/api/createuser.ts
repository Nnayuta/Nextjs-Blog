import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../models/UserModel";
import UserSchema from "../../schema/UserSchema";

import { MongoConnection } from "../../services/mongoose";

const createuser = async (req: NextApiRequest, res: NextApiResponse) => {

    const Mongo = new MongoConnection();
    await Mongo.connect();

    switch (req.method) {
        case 'POST':
            const newUser = new UserModel({
                displayName: req.body.displayName,
                username: req.body.username,
                password: req.body.password,
            })

            const user = await new UserSchema(newUser);

            await user.save();

            res.status(200).json({
                message: 'User created',
                user: newUser
            });

            await Mongo.close();

            break
        default:

            return res.status(405).json({
                message: 'Method not allowed'
            });
    }

}

export default createuser;
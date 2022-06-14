import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../schema/users-schema";
import { MongoConnection } from "../../../services/mongoose";

const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        const user = { name, email, password };

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email' });
        }

        if (password.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters long' });
        }

        const mongo = new MongoConnection();
        mongo.connect()

        // Check if user already exists

        mongo.close();
    }
}
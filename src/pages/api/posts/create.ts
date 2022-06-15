import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../../../models/Post";
import { MongoConnection } from "../../../services/mongoose";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const postBody = req.body;

        if(!postBody.title || !postBody.content || !postBody.category || !postBody.author) {
            res.status(400).json({
                message: "Missing required fields"
            });
            return;
        }
        
        const post = new Post(postBody);

        
        

        // const mongo = new MongoConnection();
        // mongo.connect()

        // mongo.close();
    }
}
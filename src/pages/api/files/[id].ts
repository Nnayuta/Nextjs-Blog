import fs from 'fs';
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import MultimidiaSchema from "../../../schema/MultimidiaSchema";
import { MongoConnection } from "../../../services/mongoose";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const Mongo = new MongoConnection()
    await Mongo.connect()

    switch (req.method) {
        case 'DELETE':
            const file = await MultimidiaSchema.findByIdAndDelete(req.query.id)
            fs.unlinkSync(`./public/${file.path}`)
            await Mongo.close()

            if (!file) {
                res.status(StatusCodes.NOT_FOUND).json({ error: 'Arquivo não encontrado' })
                return
            }

            res.status(StatusCodes.OK).json({
                message: 'Arquivo deletado com sucesso',
                file
            })
            break

        default:
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                message: 'Method not allowed'
            })
    }
}
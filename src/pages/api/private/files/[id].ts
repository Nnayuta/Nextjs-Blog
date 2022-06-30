import fs from 'fs';
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import JWTAuthenticationMiddleware from '../../../../middleware/jwt-authentication.middleware';
import MultimidiaSchema from "../../../../schema/MultimidiaSchema";
import { MongoDB } from '../../../../utils/MongoDB';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await JWTAuthenticationMiddleware(req, res)
        switch (req.method) {
            case 'DELETE':
                await MongoDB.connect();
                const file = await MultimidiaSchema.findByIdAndDelete(req.query.id)
                fs.unlinkSync(`./public/${file.path}`)

                if (!file) {
                    res.status(StatusCodes.NOT_FOUND).json({ error: 'Arquivo não encontrado' })
                    return
                }

                await MongoDB.disconnect();

                return res.status(StatusCodes.OK).json({
                    message: 'Arquivo deletado com sucesso',
                    file
                })
            default:
                return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                    message: 'Method not allowed'
                })
        }
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: error.message
        });
    }
}
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

const SettingsRouter = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            try {
            
                return res.status(StatusCodes.NOT_IMPLEMENTED).json({
                    message: 'Not Implemented!'
                })

            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
        case 'GET':
            try {

                return res.status(StatusCodes.NOT_IMPLEMENTED).json({
                    message: 'Not Implemented!'
                })

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

export default SettingsRouter;
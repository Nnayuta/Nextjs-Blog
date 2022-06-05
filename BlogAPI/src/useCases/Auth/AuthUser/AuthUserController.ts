import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT, { SignOptions } from 'jsonwebtoken';
import { ForbiddenError } from '@entities/errors/Forbidden.error.model';

require('dotenv').config()

export class AuthUserController {

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
            const user = request.user

            if (!user) {
                throw new ForbiddenError('User not found');
            }

            const JwTPayLoad = {
                id: user.id,
                email: user.email,
                name: user.name,
            }

            const options: SignOptions = {
                subject: user.id,
            };

            const token = JWT.sign(JwTPayLoad, process.env.JWT_SECRET_KEY, options);

            return response.status(StatusCodes.OK).json({
                "TOKEN": token,
            });

        } catch (err) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ForbiddenError } from '@entities/errors/Forbidden.error.model';
import { DatabaseUsersRepository } from '@repositories/implementations/DatabaseUserRepository';

export async function basicAuthMiddleware(request: Request, response: Response, next: NextFunction) {
    try {
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            throw new ForbiddenError('Token is required');
        }

        const [type, token] = authHeader.split(' ');

        if (type !== 'Basic' || !token) {
            throw new ForbiddenError('Invalid token');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
        const [email, password] = tokenContent.split(':');

        if (!email || !password) {
            throw new ForbiddenError('Invalid token');
        }

        const userRepository = new DatabaseUsersRepository();
        const user = await userRepository.findByEmailAndPassword(email.toLocaleLowerCase(), password);

        if (!user) {
            throw new ForbiddenError('Credentials are invalid');
        }

        request.user = user;
        next();

    } catch (err) {
        return response.status(StatusCodes.BAD_REQUEST).json({
            message: err.message || 'Unexpected error.'
        })
    }
}
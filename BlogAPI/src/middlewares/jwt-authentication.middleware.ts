import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from "jsonwebtoken";
import { User } from "@entities/User";
import { DatabaseUsersRepository } from "@repositories/implementations/DatabaseUserRepository";
require('dotenv').config();

export async function JWTAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {
    try {
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            throw new Error('No token provided');
        }

        const [type, token] = authHeader.split(' ');

        if (type !== 'Bearer') {
            throw new Error('Authentication type is not supported');
        }

        try {
            const decodedToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

            if (typeof decodedToken !== 'object' || !decodedToken.sub) {
                throw new Error('Invalid token');
            }

            const user: User = {
                id: decodedToken.sub,
                email: decodedToken.email,
                name: decodedToken.name,
            }

            const userRepository = new DatabaseUsersRepository();
            const userExists = await userRepository.findByEmail(user.email);

            if(userExists === null) {
                throw new Error('User not found');
            }

            request.user = user;
            next();

        } catch (err) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: err.message || 'Unexpected error.'
            })
        }

    } catch (err) {
        next(err)
    }
}
import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';
import ForbiddenError from '../entities/errors/Forbidden.error.model';

async function JwtAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {

    throw new Error('JWT authentication middleware not implemented');
    
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
        throw new ForbiddenError('No token provided');
    }

    const [type, token] = authorizationHeader.split(' ');

    if (type !== 'Bearer' || !token) {
        throw new ForbiddenError('Invalid Authentication Type');
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        if(typeof decoded !== 'object' || !decoded.sub) {
            throw new ForbiddenError('Invalid Token');
        }

        const id = decoded.sub;

        


    } catch (error) {
        throw new ForbiddenError('Invalid Token');
    }
}
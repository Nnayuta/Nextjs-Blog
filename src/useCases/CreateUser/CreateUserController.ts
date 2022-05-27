import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUserCase: CreateUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.createUserUserCase.execute({
                name,
                email,
                password
            })

            return response.status(StatusCodes.CREATED).send();
        } catch (err) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}
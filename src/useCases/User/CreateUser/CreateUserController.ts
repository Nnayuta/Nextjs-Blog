import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';

const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export class CreateUserController {
    constructor(
        private createUserUserCase: CreateUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body as ICreateUserRequestDTO;

        try {

            if(name.length < 3){
                throw new Error('Username must be at least 3 characters long');
            }
    
            if(password.length < 6){
                throw new Error('Password must be at least 6 characters long');
            }


            if(!emailRegex.test(email)){
                throw new Error('Invalid email');
            }

            const lowerCaseEmail = email.toLowerCase();

            await this.createUserUserCase.execute({
                name,
                email: lowerCaseEmail,
                password,
            })

            return response.status(StatusCodes.CREATED).send();
            
        } catch (err) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}
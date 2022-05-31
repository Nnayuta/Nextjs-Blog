import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostConstroller {
    constructor(
        private createPostUseCase: CreatePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { title, body } = request.body;

        try {

            if(!title || !body) {
                throw new Error('Title and body are required');
            }

            await this.createPostUseCase.execute({
                title,
                body
            })

            return response.status(StatusCodes.CREATED).json({
                message: 'Post created with success',
                post: {
                    title,
                    body
                }
            });
        }
        catch (err) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}
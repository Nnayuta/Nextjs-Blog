import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "@entities/User";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostConstroller {
    constructor(
        private createPostUseCase: CreatePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { title, content } = request.body;

            const user = request.user as User;

            if (!user) {
                throw new Error('User not found');
            }

            if (!title || !content) {
                throw new Error('Title and Content are required');
            }

            const post = await this.createPostUseCase.execute({
                title,
                content,
                author: user.id,
            })

            return response.status(StatusCodes.CREATED).json({
                message: 'Post created with success',
                post: post
            });
        }
        catch (err) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: err.message || 'Unexpected error',
            });
        }
    }
}
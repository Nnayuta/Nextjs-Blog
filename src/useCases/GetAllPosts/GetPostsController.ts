import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { GetPostsUseCase } from './GetPostsUseCase'

export class GetPostsController {
    constructor(
        private getPostsUseCase: GetPostsUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const posts = await this.getPostsUseCase.execute()

        return response.status(StatusCodes.OK).json(posts)
    }
}
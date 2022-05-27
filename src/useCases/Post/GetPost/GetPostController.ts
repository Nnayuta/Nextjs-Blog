import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { GetPostUseCase } from './GetPostUseCase'

export class GetPostController {
    constructor(
        private getPostUsecase: GetPostUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const post = await this.getPostUsecase.execute(id)

        return response.status(StatusCodes.OK).json(post)
    }
}
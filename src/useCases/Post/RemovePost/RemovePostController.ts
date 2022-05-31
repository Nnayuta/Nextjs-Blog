import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RemovePostUseCase } from "./RemovePostUseCase";

export class RemovePostController{

    constructor(
        private removePostUseCase: RemovePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.removePostUseCase.execute(id);

        return response.status(StatusCodes.OK).json({
            message: 'Post removed with success',
        });
    }
}
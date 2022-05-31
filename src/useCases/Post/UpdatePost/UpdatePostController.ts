import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import { IUpdatePostDTO } from "./UpdatePostDTO";

export class UpdatePostController {

    constructor(
        private updatePostUseCase: UpdatePostUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const { title, body } = request.body as IUpdatePostDTO;

            if(!title){
                await this.updatePostUseCase.execute(id,{
                    body,
                });
            }

            if(!body){
                await this.updatePostUseCase.execute(id,{
                    title,
                });
            }

            if(title && body){
                await this.updatePostUseCase.execute(id,{
                    title,
                    body,
                });
            }

            return response.status(StatusCodes.OK).json({
                message: 'Post updated with success',
            });

        } catch (error) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}
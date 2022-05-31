import { IPostRepository } from "../../../repositories/IPostRepository";
import { IUpdatePostDTO } from "./UpdatePostDTO";

export class UpdatePostUseCase {
    constructor(
        private postsRepository: IPostRepository,
    ) { }

    async execute(id: string, data: IUpdatePostDTO) {
        await this.postsRepository.update(id, data);
    }
}
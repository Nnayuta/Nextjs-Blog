import { Post } from "../../../entities/Post";
import { IPostRepository } from "../../../repositories/IPostRepository";
import { ICreatePostDTO } from "./CreatePostDTO";

export class CreatePostUseCase{
    constructor(
        private postsRepository: IPostRepository,
    ){}

    async execute(data: ICreatePostDTO): Promise<Post>{
        const post = new Post(data);
        await this.postsRepository.save(post);
        return post;
    }
}
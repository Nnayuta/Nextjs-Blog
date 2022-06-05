import { Post } from '@entities/Post'
import { IPostRepository } from '@repositories/IPostRepository'

export class GetPostsUseCase {
    constructor(
        private postRepository: IPostRepository,
    ){ }

    async execute(): Promise<Post[]> {
        return await this.postRepository.findAll()
    }
}
import { Post } from '../../../entities/Post'
import { IPostRepository } from '../../../repositories/IPostRepository'

export class GetPostUseCase {
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async execute(id: string): Promise<Post> {
        return await this.postRepository.findById(id)
    }
}
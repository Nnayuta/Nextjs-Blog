import { IPostRepository } from "@repositories/IPostRepository";

export class RemovePostUseCase{
    constructor(
        private postRepository: IPostRepository,
    ) { }

    async execute(id: string): Promise<void> {
        await this.postRepository.delete(id);
    }
}
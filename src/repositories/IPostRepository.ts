import { Post } from "../entities/Post";

export interface IPostRepository {
    findById(id: string): Promise<Post>;
    findAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
    update(id: string, data: object): Promise<void>;
    delete(id: string): Promise<void>;
}
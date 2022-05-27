import { Post } from "../entities/Post";

export interface IPostRepository {
    findByTitle(title: string): Promise<Post>;
    findById(id: string): Promise<Post>;
    findAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
    delete(id: string): Promise<void>;
}
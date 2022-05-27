import { Post } from "../../entities/Post";
import { IPostRepository } from "../IPostRepository";
import * as db from '../../database/repositories/DatabaseRepository';

export class DatabasePostRepository implements IPostRepository {

    async findByTitle(title: string): Promise<Post> {
        throw new Error("Method not implemented.");
        // const post = this.posts.find(post => post.title === title)
    }

    async findById(id: string): Promise<Post> {
        return await db.findOne('Post', id);
    }

    async findAll(): Promise<Post[]> {
        return await db.findAll('Post');
    }

    async save(post: Post): Promise<void> {
        db.create(post);
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
        //this.posts = this.posts.filter(post => post.id !== id);
    }
}
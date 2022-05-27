import { Post } from "../../entities/Post";
import { IPostRepository } from "../IPostRepository";
import * as db from '../../database/repositories/DatabaseRepository';

export class DatabasePostRepository implements IPostRepository {

    async findById(id: string): Promise<Post> {
        const Post = await db.findOne({
            TABLE: 'Post',
            WHERE: 'id',
            VALUE: id
        });
        
        return Post as Post;
    }

    async findAll(): Promise<Post[]> {
        return await db.findAll({
            TABLE: 'Post'
        });
    }

    async save(post: Post){
        db.create(post);
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
        //this.posts = this.posts.filter(post => post.id !== id);
    }
}
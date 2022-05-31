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
        const Posts = await db.findAll({ TABLE: 'Post' });
        return Posts as Post[];
    }

    async save(post: Post) {
        await db.create(post);
    }


    async update(id: string, data: object): Promise<void> {
        await db.update({
            TABLE: 'Post',
            WHERE: id,
            VALUE: data
        });
    }

    async delete(id: string): Promise<void> {
        await db.remove({
            TABLE: 'Post',
            WHERE: id
        });
    }
}
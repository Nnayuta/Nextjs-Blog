import { Types } from "mongoose";
import { UserModel } from "./UserModel";

export class PostModel {
    public _id?: string;

    public title: string;
    public content: string;
    public imagePath: string;
    public category: string;

    public author:  UserModel;
    public public: boolean;

    public createdAt?: string;
    public updatedAt?: string;

    public comments?: CommentModel[];

    constructor(props: PostModel) {
        Object.assign(this, props);
    }
}


export class CommentModel {
    public id?: string;
    public author: string;
    public content: string;

    public createdAt?: string;
    public updatedAt?: string;

    constructor(props: CommentModel) {
        Object.assign(this, props);
    }
}
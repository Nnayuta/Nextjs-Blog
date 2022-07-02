import { UserModel } from "./UserModel";

export class PostModel {
    public readonly _id?: string;

    public title: string;
    public description: string;
    public thumbnail: string;

    public content: string;
    public category: string;

    public author:  UserModel;
    public public: boolean;

    public readonly createdAt?: string;
    public readonly updatedAt?: string;

    public slug?: string;

    public comments?: CommentModel[];

    constructor(props: PostModel) {
        Object.assign(this, props);
        this.slug = this.title.toLocaleLowerCase().replace(/\W+/g, '-')
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
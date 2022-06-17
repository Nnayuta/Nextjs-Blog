export class PostModel {
    public id?: string;

    public title: string;
    public content: string;
    public imagePath?: string;
    public category: string;

    public author: string;
    public public: boolean;

    public createdAt?: string;
    public updatedAt?: string;

    public comments: CommentModel[];

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
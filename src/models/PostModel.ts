export class PostModel {
    public id: string;
    public title: string;
    public content: string;
    public imagePath?: string;
    public category: string;

    public author: string;
    public public: boolean;

    constructor(props: PostModel) {
        Object.assign(this, props);
    }
}

export class CommentModel {
    public id?: string;
    public author: string;
    public content: string;

    constructor(props: CommentModel) {
        Object.assign(this, props);
    }
}
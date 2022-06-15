import { v4 as uuidv4 } from 'uuid';

export class Post {
    public readonly uuid: string;

    public title: string;
    public content: string;
    public imagePath?: string;
    public category: string;

    public author: string;
    public public: boolean;

    public readonly publisedAt: string;
    public updatedAt?: string;

    public comments?: Comment[];

    constructor(props: Omit<Post, 'uuid' | 'publisedAt'>, uuid?: string,) {
        this.uuid = uuid || uuidv4();
        Object.assign(this, props);
        this.publisedAt = new Date().toISOString();
    }
}

export class Comment {
    public readonly uuid: string;
    public author: string;
    public content: string;
    public published: string;

    constructor(props: Omit<Comment, 'uuid' | 'published'>, uuid?: string, published?: string) {

        if (!uuid) {
            this.uuid = uuid || uuidv4();
        }

        Object.assign(this, props);

        if (!published) {
            this.published = published || new Date().toISOString();
        }
    }
}
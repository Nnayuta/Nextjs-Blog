import { v4 as uuidv4 } from 'uuid'

export class Post {
    public readonly id: string;

    public title: string;
    public body: string;

    public readonly published: string;
    public updated?: string

    constructor(props: Omit<Post, 'id' | 'published'>, id?: string, published?: string){
        Object.assign(this, props);

        if(!id){
            this.id = uuidv4()
        }

        if(!published){
            this.published = new Date().toISOString()
        }
    }
}
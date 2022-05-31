import { v4 as uuidv4 } from 'uuid'
import { User } from './User';

export class Post {
    public readonly id: string;

    public title: string;
    public content: string;
    public author: User;
    
    public readonly published: string;
    public updated?: string

    constructor(props: Omit<Post, 'id' | 'published'>, id?: string, published?: string){
        
        if(!id){
            this.id = uuidv4()
        }        

        Object.assign(this, props);

        if(!published){
            this.published = new Date().toISOString()
        }
    }
}
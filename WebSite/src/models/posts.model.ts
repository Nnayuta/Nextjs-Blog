export interface PostModel {
    id: string;
    title: string;
    imagePath: string;
    content?: string;
    author?: string;
    published?: Date;
    updated?: Date;
}
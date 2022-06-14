export interface PostModel {
    title: string;
    imagePath: string;
    content: string;
    category: string;
    author: string;
    published: string;
    updated?: string;
    public: boolean;
    comments: CommentModel[];
}

interface CommentModel {
    author: string;
    content: string;
    published: string;
}
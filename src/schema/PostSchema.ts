import mongoose from "mongoose";
import { PostModel } from "../models/PostModel";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

delete mongoose.models.Post;

const postSchema = new Schema<PostModel>(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        description: {
            type: String,
            required: [true, 'Description is required']
        },
        slug: {
            type: String,
            unique: true,
            required: [true, "Slug is required"]
        },
        content: {
            type: String,  
            required: [true, "Content is required"],
        },
        thumbnail: {
            type: String,
            required: [true, "Thumbnail is required"],
        },
        category: {
            type: String,
            default: "Geral"
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author is required"],
        },
        public: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
    }
);

const PostSchema = mongoose.model('Post', postSchema)

export default PostSchema;
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
        slug: {
            type: String,
            required: [true, "Slug is required"]
        },
        content: {
            type: String,
            required: [true, "Content is required"],
        },
        imagePath: {
            type: String,
            required: [true, "Image path is required"],
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
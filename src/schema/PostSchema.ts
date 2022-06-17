import mongoose from "mongoose";
import { PostModel } from "../models/PostModel";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const postSchema = new Schema<PostModel>(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        imagePath: {
            type: String,
        },
        category: {
            type: String,
            default: "Geral"
        },
        author: {
            type: String,
            required: true,
        },
        public: {
            type: Boolean,
            required: true,
            default: true,
        }
    },
    {
        timestamps: true,
    }
);

const PostSchema = mongoose.models.Post || mongoose.model('Post', postSchema)

export default PostSchema;
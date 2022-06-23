import mongoose from "mongoose";
import { UserModel } from "../models/UserModel";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


delete mongoose.models.User;

const userSchema = new Schema<UserModel>(
    {
        displayName: {
            type: String,
        },
        username: {
            required: [true, "Username is required"],
            type: String,
            unique: true,
        },
        password: {
            required: [true, "Password is required"],
            type: String,
        },
        avatar: {
            type: String,
            default: "/images/default_avatar.jpg",
        },
        bio:{
            type: String
        },
        posts: {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    },
    {
        timestamps: true,
    }
);

const UserSchema = mongoose.model('User', userSchema)

export default UserSchema;
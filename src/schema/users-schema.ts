import mongoose from "mongoose";

import defaultAvatar from "../../public/images/default_avatar.jpg";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: defaultAvatar
    },
});

const User = mongoose.model("User", UserSchema);

export default User;
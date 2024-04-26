const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postScheme = new Schema({
    author: String,
    text: String
});

const Post = mongoose.model("Post", postScheme);

const userScheme = new Schema({
    login: String,
    password: String
});

const User = mongoose.model("User", userScheme);

module.exports = {
    Post,
    User
}
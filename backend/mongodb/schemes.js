const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postScheme = new Schema({
    author: String,
    text: String
});

const Post = mongoose.model("Post", postScheme);

module.exports = {
    Post
}
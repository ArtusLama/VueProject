const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    published: {
        required: true,
        type: Number
    },
    cover: {
        required: true,
        type: String
    },
    length: {
        required: true,
        type: Number
    },
    stars: {
        required: true,
        type: Number
    },
    tags: {
        required: true,
        type: Array
    }
});

module.exports = mongoose.model("Book", dataSchema)
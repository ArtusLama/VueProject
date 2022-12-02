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
    length: {
        required: true,
        type: Number
    },
    stars: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Book", dataSchema)
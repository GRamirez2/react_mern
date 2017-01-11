const mongoose = require('mongoose');

const Post = new mongoose.Schema({
	comments: Array,
	title: String,
	snippet: String,
	topic: String
});

module.exports = mongoose.model('post', Post);

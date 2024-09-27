// models/Blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: [String], // Array of tags
  imageUrl: {
    type: String,
    required: false, // Optional field
  },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;
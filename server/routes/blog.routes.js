const express = require('express')
const { createBlog, getAllBlogs, getBlogDetails } = require('../controllers/blog.controller')
const blogRouter = express.Router()

// define the home page route
blogRouter.post('/create-blog', createBlog);
blogRouter.get('/blogs', getAllBlogs);
blogRouter.get('/blog/:id', getBlogDetails);
module.exports = blogRouter
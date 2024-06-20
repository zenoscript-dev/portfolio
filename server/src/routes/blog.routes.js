import express from 'express';
import  { createBlog, getAllBlogs, getBlogDetails, updateBlog } from "../controllers/blog.controller.js"
const blogRouter = express.Router()

// define the home page route
blogRouter.post('/create-blog', createBlog);
blogRouter.put('/update-blog/:id', updateBlog);
blogRouter.get('/blogs', getAllBlogs);
blogRouter.get('/blog/:id', getBlogDetails);


export default blogRouter;
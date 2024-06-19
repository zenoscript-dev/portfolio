const { response } = require("express");
const dbConnection = require("../config/db.config");
const { createBlog, getAllBlogs, getBlogDetails } = require("../services/blog.service");



exports.createBlog = async (req, res, next) => {
    const { title, image, content } = req.body;

    try {
        const result = await createBlog(title, image, content);
        res.status(201).json({
            success: true,
            statusCode: 201,
            data: result
        });
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({
            success: false,
            statusCode: error.statusCode,
            message: error.message,
        });
    }
};
exports.getAllBlogs = async(req, res, next) => {
    try {
        console.log('calling get all blogs rotes')
        const blogs = await getAllBlogs();
        return res.status(200).json({
            success: true,
            statusCode: 200,
            data: blogs
        })
    } catch (error) {
        return res.status(error.statusCode).json({success: false, statusCode: error.statusCode,message: error.message})
    }
}
exports.getBlogDetails = async (req, res, next) => {
    const { id } = req.params;

    try {
        const blog = await getBlogDetails(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            data: blog
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || 'Internal Server Error';
        res.status(statusCode).json({ success: false, statusCode, message });
    }
};
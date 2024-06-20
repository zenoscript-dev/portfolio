import BlogModel from "../models/blog.model.js"
export const createBlog = async (req, res, next) => {
    try {
        const { title, content, image } = req.body;
        const newBlog = new BlogModel({ title, content, image });
        await newBlog.save();
       return res.status(201).json({ success: true,message: "Blog created successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error creating blog"});
    }
};

export const updateBlog = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { title, content, image } = req.body;

    const blogDetails = await BlogModel.findById(id);
    if(!blogDetails) return res.status(404).json({ success: false, message: "blog not found" });
        blogDetails.title = title;
        blogDetails.content = content;
        blogDetails.image = image;
        await blogDetails.save();
        return res.status(200).json({ success: true, message: "Blog updated successfully" });
    } catch (error) {
         res.status(500).json({ success: false, message: "Error creating blog"});
         throw new Error(error.message);
    }
};

export const getAllBlogs = async(req, res, next) => {
  try {
    const allBlogs = await BlogModel.find();
    return res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
     res.status(500).json({ success: false, message: "Error creating fetching all blogs"});
     throw new Error(error.message);

    
  }
}
export const getBlogDetails = async (req, res, next) => {
   try {
    const {id} = req.params;
    const blogDetails = await BlogModel.findById(id);
    if(!blogDetails) return res.status(404).json({ success: false, message: "blog not found" });
    return res.status(200).json({ success: true, data: blogDetails});
   } catch (error) {
     res.status(500).json({ success: false, message: "Error creating fetching all blogs"});
     throw new Error(error.message);

   }
};
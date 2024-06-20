import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({ 
   title: {
    type: String,
    required: true
   },
   content: {
    type: String,
    required: true
   },
   image: {
    type: String,
    required: true
   },
   createdAt: {
    type: Date,
    default: Date.now
   },
   updatedAt: {
    type: Date,
    default: Date.now
   }
}); 
  
const BlogModel = new mongoose.model("Blogs", blogSchema);

export default BlogModel;
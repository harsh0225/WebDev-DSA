const Blog = require("../models/Blog");

exports.deleteBlog = async(req,res) => {
    try{
        const id = req.params.id;
        await Blog.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"blog is deleted"
        })
    }
    catch(error){   
        res.status(500).json({
            success:false,
            error:error.message,
            message:"failure in deletion"
        })
    }
}
const Blog = require("../models/Blog");

exports.createBlog = async(req,res) => {
    try{
        const {name,description,comment} = req.body;
        const response = await Blog.create({name,description,comment})
        res.status(200).json({
            success:true,
            data:response,
            message:"blog create successfully"
        })
    }
    catch(error){   
        res.status(500).json({
            success:false,
            error:error.message,
            message:"failure in creation"
        })
    }
}
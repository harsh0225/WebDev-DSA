const Blog = require("../models/Blog");

exports.updateBlog = async(req,res) => {
    try{
        const id = req.params.id;
        const {name,description,comment,like} = req.body;
        const response = await Blog.findByIdAndUpdate(
            {_id:id},
            {name,description,comment,like}
            )
        res.status(200).json({
            success:true,
            data:response,
            message:"blog updated successfully"
        })
    }
    catch(error){   
        res.status(500).json({
            success:false,
            error:error.message,
            message:"failure in updation"
        })
    }
}
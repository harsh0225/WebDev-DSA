const Blog = require("../models/Blog");

exports.getBlogById = async(req,res) => {
    try{
        const id = req.params.id;
        const response = await Blog.findById({_id:id})
        if(!response)
        {
            res.status(200).json({
                success:false,
                message:"blog cant find"
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:response,
                message:"blog find successfully"
            })
        }
    }
    catch(error){   
        res.status(500).json({
            success:false,
            error:error.message,
            message:"failure in retriving"
        })
    }
}
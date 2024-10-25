const Blog = require("../models/Blog");

exports.getBlog = async(req,res) => {
    try{
        const response = await Blog.find()
        if(!response)
        {
            res.status(200).json({
                success:false,
                message:"blog cant find"
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"blog find successfully"
        })
    }
    catch(error){   
        res.status(500).json({
            success:false,
            error:error.message,
            message:"failure in retriving"
        })
    }
}
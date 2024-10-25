const Post = require("../models/postModel");

exports.deletePost = async(req,res) => {
    try{
        const id = req.params.id;
        const post = await Post.findByIdAndDelete(id);
        if(!post)
        {
            res.status(404).json({
                success:true,
                message:"Id cant find",
                post:post
            })
        }
        res.status(200).json({
            message:"Post is deleted",
            Status:post
        })
    }
    catch(error){
        res.status(500).json({
            message:"error in deleting post",
            err:error
        })
    }
}
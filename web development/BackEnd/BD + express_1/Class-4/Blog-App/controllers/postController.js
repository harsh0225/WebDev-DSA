const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    try{
        const {title,body} = req.body;
        const post = new Post({title,body});
        const savedPost = await post.save();
        res.status(200).json({
            post:savedPost,
            message:"post upload successfully"
        })
    }
    catch(error){
        res.status(500).json({
            error:error.message,
            message:"Error occure in uploading a post"
        })
    }
}

exports.getAllPost = async(req,res) => {
    try{
        const allPost = await Post.find({}).populate("comments");
        res.status(200).json({
            data:allPost
        })
    }
    catch(error){
        res.status(500).json({
            err:error.message,
            message:"failure in retriving data"
        })
    }   
}
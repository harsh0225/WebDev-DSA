
const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likePost = async(req,res) => {
    try{
        //fetch data from request body
        const {post,user} = req.body;
        //create Like model object
        const createLike = new Like({post,user});
        //saved like object in database
        const savedLike = await createLike.save();
        
        const updatePost = await Post.findByIdAndUpdate(
            post,
            {$push : {likes:savedLike._id}},
            {new:true}
        ).populate("likes").exec();
        
        if(!updatePost)
        {
            res.status(500).json({
                data:updatePost,
                message:"post id cant find"
            })
        }
        res.status(200).json({
            data:updatePost,
            message:"like is save"
        })
    }
    catch(err)
    {
        res.status(404).json({
            error:err.message,
            message:"error occure in create like"
        })
    }
}

//unlike a post

exports.unlikePost = async(req,res) => {
    try{
        const {post,like}= req.body;
       
        const unlike = await Like.findByIdAndDelete(like) ;
        
        const postUnlike = await Post.findByIdAndUpdate(
            post,
            {$pull:{likes:unlike._id}},
            {new:true}
        ).populate("likes").exec();
        
        res.status(200).json({
            message:"post is unlike",
            data:unlike
        })
    }
    catch(error){
        res.status(500).json({
            message:"failure in unlike post",
            err:error.message
        })
    }
}

const Comment = require("../models/commentModel");
const Post = require('../models/postModel');


//business logic
exports.createComment = async(req,res) => {
    try{
        // fetch data from request body    
        const {post,user,body} = req.body;

        // create object of comment schema
        const comment = new Comment({post,user,body});

        //save object into the database
        const savedComment = await comment.save();

        //find the post by id using findByIdMethod
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {$push : {comments:savedComment._id}},
            {new:true}
        ).populate("comments").exec();

        res.status(200).json({
            Post:updatedPost
        });
    }
    catch(error){
        res.status(500).json({
            error:error.mesaage,
            message:"error while creating comment "
        })
    }   
}

const Todo = require("../models/todo");

exports.getTodo = async(req,res) => {
    try{
        //fetch all todo from database
        const response = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:response,
            message:"entire todo data is fetch "
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            message:"server error" 
        })
    }
}
//import todo model

const Todo= require("../models/todo");

//define route handler

exports.createTodo = async(req,res) => {
    try{
        // extract title and body from request body
        const {title,description} = req.body;
        // create new todo object and insert into DB
        const response = await Todo.create({title,description});

        //send a json responce with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"entry created successfully"
        });
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}
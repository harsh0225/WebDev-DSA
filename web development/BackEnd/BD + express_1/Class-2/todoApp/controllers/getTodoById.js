const Todo = require("../models/todo");

exports.getTodoById = async(req,res) => {
    try{
        const id = req.params.id;
        const todobyid = await Todo.findById({_id:id});
        
        // if id will not found
        if(!todobyid)
        {
            res.status(500).json({
                success:false,
                message:"data is not found"
            })
        }

        res.status(200).json({
            success:true,
            data:todobyid,
            message:"data retrival successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"failure in data retrival"
        })
    }
}
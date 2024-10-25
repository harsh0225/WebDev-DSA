const Todo = require("../models/todo");

exports.updateTodo = async(req,res) => {
    try{
        const id = req.params.id;
        const {title,description} = req.body;
        const response = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedDate:Date.now()}
        )

        if(!response)
        {
            res.status(404).json({
                success:false,
                message:"id is not found"
            })
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"data is updated"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"failure in updation"
        })
    }
}
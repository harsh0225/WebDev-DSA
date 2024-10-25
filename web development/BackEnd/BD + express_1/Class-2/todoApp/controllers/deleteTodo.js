const Todo = require("../models/todo");


exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"data deleted successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"failure in deletion"
        })
    }
}
const mongoose = require('mongoose');
const Blog = new mongoose.Schema(
    {
        name:{
            type:String,
            maxLength:50,
            required:true
        },
        description:{
            type:String,
            maxLength:100,
            required:true
        },
        createdDate:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedDate:{
            type:String,
            required:true,
            default:Date.now()
        },
        comment:{
            type:String,
            required:false,
        },
        like:{
            type:Boolean,
            required:true,
            default:false
        }
    }
);

module.exports = mongoose.model("Blog",Blog)
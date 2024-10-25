const mongoose = require("mongoose");

require("dotenv").config();

exports.connectDB = () => {
    try{
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser : true,
            useUnifiedTopology:true
        }).then(() => {
            console.log("DB connect successfully")
        }).catch((error)=>{
            console.log("error in DATABASE connectivity")
        })
    }
    catch(error){

    }
} 
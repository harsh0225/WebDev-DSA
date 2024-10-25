const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() =>{
        console.log("database connected successfully");
    }).catch((error) => {
        console.log("error occure in server "+error)
    })
}

module.exports = dbConnect;
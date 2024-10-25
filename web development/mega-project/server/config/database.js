const mongoose = require('mongoose');
require("dotenv").config();          //This line simply means importing environment variables


exports.dbconnect = async() => {
    mongoose.connect(process.env.DATABASEURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {console.log("mongoDB connection establish")})
    .catch((error) => {
        console.log("error in mongoDB connection"+error);
        process.exit(1);
    });
}

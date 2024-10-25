const mongoose = require("mongoose");

require("dotenv").config();

exports.connectDB = () => {

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology :true
    }).then(() => {console.log("database connection successfully");})
    .catch((error) => {
        console.log("failure in database connection");
        console.log(error);
        });
}

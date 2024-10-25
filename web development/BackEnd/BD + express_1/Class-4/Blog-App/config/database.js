const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    }).then(() => {console.log("Mongodb connection successfully")})
    .catch((error) => {console.log("Error ocuure in MongoDB connection" + error)});
}

module.exports = dbConnect;
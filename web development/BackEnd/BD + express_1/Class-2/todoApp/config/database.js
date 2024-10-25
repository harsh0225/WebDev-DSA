const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
      mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
      })
      .then(() => {
        console.log("Database connection successfull")
      })
      .catch((error) => {
        console.log("Issue in Database connection" + error);
        process.exit(1);
      });
}   
module.exports = dbConnect; 
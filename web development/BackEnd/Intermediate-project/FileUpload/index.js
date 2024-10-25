//app create 
const express = require("express");
const app = express();


//port find out
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware add
app.use(express.json());

const fileupload = require('express-fileupload')
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));


//db connection
const {connectDB} = require("./config/Database");
connectDB();

//cloudinary connection
const {cloudinaryConnect} = require("./config/cloudinary");
cloudinaryConnect();

//api route mounting
const route = require("./routes/FileUpload");
app.use("/api/v1/upload",route); 

//activate server
app.listen(PORT,() => {
    console.log("App is running at ",PORT);
})
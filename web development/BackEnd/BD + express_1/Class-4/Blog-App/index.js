const express = require('express');
const blogApp = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000

blogApp.use(express.json());

//import router to map with /api/v1
const router = require("./routes/blog");

//map router with /api/v1
blogApp.use("/api/v1",router)

//we can run server at given port no
blogApp.listen(PORT,() => {
    console.log("server start successfully");
})

//call the function to establish connection between our app to mongoDB
const dbconnection = require('./config/database');
dbconnection();

//define the default router
blogApp.get("/",(req,res) => {
    res.send(`<h1>This is my home page baby</h1>`);
})




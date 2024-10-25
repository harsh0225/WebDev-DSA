

const express = require('express');
const app = express();

// load config from env
require("dotenv").config();

const PORT = process.env.PORT || 4000;
 
//middle ware to parse json request body
app.use(express.json());

//import routes for todos api
const todoRoutes = require("./routes/todos1");

//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,() => {
    console.log("server started at "+PORT);
})

// connect to the database 
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>this is home page baby</h1>`)
})
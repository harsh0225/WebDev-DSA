
const express = require('express');
const blogApp = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

blogApp.use(express.json());

const Blog_Router = require("./Routers/Blogs");

blogApp.use("/api/v1",Blog_Router);

blogApp.listen(PORT,() => {
    console.log("server is ready jump")
});

const dbConnect = require("./database_config/dbConnect");
dbConnect();

blogApp.get("/",(req,res) => {
    res.send("<h1>hello ji an harshvardhan subhash bharitkar</h1>")
})
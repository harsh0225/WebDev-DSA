


//creating a server
const express = require("express")
const app = express();

//use to parse req.body in express -> Put or Post
const bodyParser = require('body-parser');

//specifically parse JSON data & add it to the req.body object
app.use(bodyParser.json());

//active server on port 3000
app.listen(3000,() => {
    console.log("server started at port no. 3000")
});

//Routes
app.get("/" ,(req,res)  => {
    res.send("hello ji kaise ho sare"); 
})

app.post("/app/car",(req,res) => {
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted successfuly");
})

const mongoose = require('mongoose'); 
mongoose.connect("mongodb://localhost:27017/myDatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {console.log("database connect")})
.catch((error) => {console.log("error")})
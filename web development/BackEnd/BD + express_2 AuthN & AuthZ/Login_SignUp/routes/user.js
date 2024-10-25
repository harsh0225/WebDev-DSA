
const express = require("express");
const router = express.Router();

const {signup,login}= require("../controllers/Auth");
const {auth,isStudent,isAdmin} = require("../middleWares/auth");

//router.post("/login",login);
router.post("/signup",signup);
router.post("/login",login)



//testing protected route for single middleware
router.get("/test",auth,(req,res) => {
    res.json({
        success:true,
        message:"welcome to protected route for test",
    })
})

//protected routes 
router.get("/student",auth,isStudent,(req,res) => {
    res.json({
        success:true,
        message:"welcome to protected route for student"
    })
})

router.get("/admin",auth,isAdmin,(req,res) => {
    res.json({
        success:true,
        message:"welcome to protected route for  admin"
    })
})


module.exports = router;

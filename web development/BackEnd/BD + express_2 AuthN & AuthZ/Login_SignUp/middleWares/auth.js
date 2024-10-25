const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.auth = async(req,res,next) => {
    try{
        //other ways to fetch the token

        console.log("cookies ",req.cookies.token);
        console.log("body ",req.body.token);
       // console.log("header ",req.header("Authorization").replace("Bearer ",""));
        
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");


        if(!token){
            return res.status(401).json({
                success:false,
                message :"Token missing"
            })
        }

        //verify the token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET); 
            req.user = decode;
            console.log(req.user);
        }
        catch(error){
            return res.status(401).json({
                message:"token cannot verified"
            })
        }

        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"error in authentication"
        })
    }
}

exports.isStudent = async(req,res,next) => {
    try{
        //check role of user
        if(req.user.role !== "Student") 
        {
            return res.status(401).json({
                success:false,
                messgae:"this is a protected route for student"
            })
        }
        next();
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"user role cannot be verified"
        })
    }
}

exports.isAdmin = async(req,res,next) => {
    try{
        //check role of user
        if(req.user.role !== 'Admin')
        {
            return res.status(401).json({
                success:false,
                message:"this is a protected route for student"
            })
        }
        next();
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"user role cannot be verified"
        })
    }
}
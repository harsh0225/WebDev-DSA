const jwt = require('jsonwebtoken')
require('dotenv').config();
const user =  require('../models/user');

//auth
exports.auth = async (req,res,next) => {
    try{   
        //extract token
        //req.cookies.token ||
        const token = req.cookies.token ||  req.body.token || req.header("Authorisation").replace('Bearer ','');
        

        // token missing

        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"token is missing"
            })
        }

        //verify token

        try{
            const decode =  jwt.verify(token, process.env.JWT_SECRETE);
            req.user = decode;
        }
        catch(error)
        {
            return res.status(401).json({
                success:false,
                message:"token cannot verify"
            })
        }
        next();
    }
    catch(error)
    {
        res.status(401).json({
            success:false,
            message:"something went wrong while validating the token"
        })
    }
}

//isStudent
exports.isStudent = async(req,res,next) => {
    try{
        if("Student" !== req.user.accountType)
        {
            return res.status(401).json({
                success:false,
                message :"this is a protected route students only"
            })
        }
        next();
    }
    catch(error)
    {
        res.status(401).json({
            success:false,
            message :"Account Type caanot be verified"
        })
    }
}


//isInstructor

exports.isInstructor = async(req,res,next) => {
    try{
        if("Instructor" !== req.user.accountType)
        {
            return res.status(401).json({
                success:false,
                message :"this is a protected route Instructor only"
            })
        }
        next();
    }
    catch(error)
    {
        res.status(401).json({
            success:false,
            message :"Account Type caanot be verified"
        })
    }
}

//isAdmin

exports.isAdmin = async(req,res,next) => {
    try{
        if("Admin" != req.user.accountType)
        {
            return res.status(401).json({
                success:false,
                message :"this is a protected route Admin only"
            })
        }
        next();
    }
    catch(error)
    {
        res.status(401).json({
            success:false,
            message :"Account Type caanot be verified"
        })
    }
}
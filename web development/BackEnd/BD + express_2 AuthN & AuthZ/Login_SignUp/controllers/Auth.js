const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// sign up route handler
exports.signup = async(req,res) => {
    try{
        const {name,email,password,role} = req.body;
        //check user already exist
        const existingUser = await User.findOne({email});
        
        if(existingUser)
        {
            return res.status(404).json({
                success:false,
                message:"user is already exist"
            })
        }
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(error){
            res.status(500).json({
                success:false,
                message:"error in hashing password"
            })
        }

        //create entry for user
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            role
        });
        
        res.status(200).json({
            success:true,
            message:"user created successfully"
        }) 
    }
    catch(error){
        console.log("error in creating user");
        console.error(error);
        res.status(500).json({
            success:false,
            message:"error in creating user"
        })
    }
}


// log in

exports.login = async(req,res) => {
    try{
        //fetching data
        const {email,password} = req.body;

        if(!email || !password) 
        {
            return res.status(400).json({
                success:false,
                message:"please enter valid email or password"
            })
        }

        const user = await User.findOne({email});
        //if not a registered user
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User is not registered"
            })
        }

        //verify password and generate JWT

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        }

        let passverification = await bcrypt.compare(password,user.password);
        if(passverification)
        {
            //password match
            let token = jwt.sign(payload,
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"2h"
                                });
            user.token = token; 
            user.password = undefined;
            console.log(user)
       

            const options = {
                expires:new Date(Date.now() + 10000),
                httpOnly : true
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"user logged in successfully",
            })

            // res.status(200).json({
            //     success:true,
            //     token,
            //     user,
            //     message:"user logged in successfully"
            // })
        }     
        else
        {
            //password don't match 
            return res.status(400).json({
                success:false,
                message:"password cannot match"
            })
        }


    }
    catch(error){
        console.log("error");
        console.error(error);
        res.status(400).json({
            message:"error in login"
        })
    }
}
const user = require('../models/user');
const mailsender = require('../utils/mailsender');
const crypto = require("crypto");
const bcrypt = require('bcrypt');

//resetPasswordToken

exports.resetPasswordToken = async(req,res) => {
    
    try{    
        //get email
        const {email} = req.body;
        //check user for this email , email validation
        const User = await user.find({email});
        if(!user)
        {
            return res.status(401).json({
                success:false,
                message:"user is not registered"
            })
        }
        //generate token
        const token = crypto.randomUUID();
        //update user by adding token and expiration time
        const updatedDetails = await user.findOneAndUpdate({email:email},{token:token,resetPassExpires:Date.now() + 5*60*1000 },{new:true})
        //create url
        const url = `http://localhost:3000/updatePassword/${token}`
        //send mail containing the url
        await mailsender(email,'reset password',`password reset link : ${url}`);   

        return res.status(200).json({
            success:true,
            message:"password link sent successfully on email"
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(401).json({
            success:false,
            message:"error in sending email" 
        })
    }
}

// reset password

exports.resetPassword = async(req,res) => {
    try{
        //fetch data feom res.body
        const {password,confirmPassword,token} = req.body;

        //validation of data
        
        if(!password || !confirmPassword || !token)
        {
            return res.status(401).json({
                success:false,
                message:"data is not vaild"
            })
        }

        //match password and confirmPassword

        if(password !== confirmPassword)
        {
            return res.status(401).json({
                success:false,
                message:"passsword can't match"
            })
        }

        // check token in database

        const tokenCheck = await  user.findOne({token:token});

        if(!tokenCheck)
        {
            return res.status(401).json({
                success:false,
                message:"token doesn't match"
            })
        }

        //check time of link 

        if(tokenCheck.resetPassExpires < Date.now())
        {
            return res.status(401).json({
                success:false,
                message:"time is expires ,please regenerate your token"
            })
        }
  
        //hash the password

        const hashPass = await bcrypt.hash(password,10);

        //update entry in database

        const updateInDb = await user.findOneAndUpdate({token:token},{password:hashPass},{new:true});

        res.status(200).json({
            success:true,
            message:"password is reset"
        })
        
    }
    catch(error)
    {
        console.log(error);
        res.status(401).json({
            success:false,
            message:"error in password reset"
        })
    }
}

const user = require('../models/user');
const OTP = require('../models/otp');
const OtpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const profile = require('../models/Profile');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const mailsender = require('../utils/mailsender');

//signUp

exports.signup = async(req,res) => {
    // data fetch from request body
    try{    
        const{
            firstName,
            lastName,
            email,
            password, 
            confrimPassword,
            otp,
            accountType
        } = req.body;

        // validate data

        if( !firstName || !lastName || !email || !confrimPassword || ! otp || !accountType)
        {
            return res.status(404).json({
                success : false,
                message:"data is not valid"
            })
        }

        //two password match

        if(password !== confrimPassword)
        {
            return res.status(404).json({
                success:false,
                message:"password doesn't match, please try again"
            })
        }

        //check user is already exist

        const existUser = await user.findOne({email});
        if(existUser)
        {
            return res.status(404).json({
                success:false,
                message:"user is already registered"
            })
        }

        //find most recent otp stored for the user 

        const recentOTP = await OTP.find({email:email}).sort({createAt:-1}).limit(1);
        console.log(recentOTP[0].otp);
        // validate otp 
        if(recentOTP.length === 0)
        {
            return res.status(404).json({
                success:false,
                message:"otp not found"
            })
        }
        else if(recentOTP[0].otp != otp)
        {
            return res.status(404).json({
                success:false,
                message:"invalid otp"
            })
        }

        //hash password

        const hashPASS = await bcrypt.hash(password,10);
    
        //create entry in database

        const profileDetails = await profile.create({
            constactNo:null,
            gender:null,
            dob:null,
            about:null})
 
        const dbEntryUser = await user.create({
            firstName,
            lastName,
            email,
            password:hashPASS,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        }) 
        dbEntryUser.password = undefined;

        res.status(200).json({
            success:true,
            message:"user registered  successfully",
            user:dbEntryUser
        })
    }
    catch(error)
    {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"error in signup"
        })
    } 
}


//send otp

exports.sendOTP = async(req,res) => {
    //fetch email from request body
    try{
        const {email} = req.body;
        //check is already present
        const checkUserPresent = await user.findOne({email:email});
        if(checkUserPresent)
        {
            return res.status(400).json(
                {
                    success:false,
                    message:"user is already registered"
                }
            )
        }
        
        //generate OTP

        let otp = OtpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        });

        //check unique otp or not

        let result = await OTP.findOne({otp : otp});
        console.log(result);

        while(result)
        {
            otp = OtpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            });
            result = await OTP.find({otp : otp})
            console.log(result);
        }

        const otpPayload = await OTP.create({email,otp});
        console.log(otpPayload);


        res.status(200).json({
            success:true,
            message:"otp sent successfully"
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"erro in mail sending"
        })
    }
}



//lohIn

exports.login = async(req,res) => {
    try{ 
        //fetch data from user body

        const {email,password} = req.body;

        // validation

        if(!email || !password)
        {
            return res.status(500).json({
                success:false,
                message:"enter valid data"
            })
        }

        //user exist or not

        const User = await user.findOne({email}).populate("additionalDetails");

        if(!User)
        {
            return res.status(400).json({
                success:false,
                message:"user is not present please signUp to continue"
            })
        } 

        //password match

        const passwordCheck = await bcrypt.compare(password,User.password);

        //create jwt token

        if(passwordCheck)
        {
            const payload = {
                email: User.email,
                id:User._id,
                accountType:User.accountType
            }
            const token = jwt.sign(payload,process.env.JWT_SECRETE,{expiresIn:"2h"});
            User.token = token;
            User.password=undefined;
            
            //create cookie

            const options = {
                expires : new Date(Date.now() + 3*24*60*60*1000) 
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                User:User,
                message:"user logged in successfully"
            }) 
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"password is incorrect"
            })
        }
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            message:"Logged failure , please try again"
        })
    }
}

//changePassword
exports.changePassword = async(req,res) => {

    try{
        //fetch data from user 
        console.log("first")
        const userDetails = await user.findById(req.user.id);
        const {oldPass,newPass} = req.body;

        //check valid data
        
        if(!oldPass || !newPass  )
        {
            return res.status(400).json({
                success:false,
                message:"data not valid"
            })
        }

        //check old password in database
        if(!userDetails)
        {
            res.status(401).json({
                success:false,
                message:"user not registered"
            })
        }
        const checkPass = await bcrypt.compare(oldPass,userDetails.password);
        console.log(checkPass)

        //match newPass with confirmPass

        if(checkPass)
        {
            //update the password
            const hashPass = await bcrypt.hash(newPass,10);
            const updatedUser = await user.findByIdAndUpdate(userDetails._id,{password:hashPass},{new:true});
            updatedUser.password = undefined;

            const emailResponse = await mailsender(
                userDetails.email,
                "password",
                `Password updated successfully for ${updatedUser.firstName} ${updatedUser.lastName}`)
    
            if(!emailResponse)
            {
                console.log("email sent successfully");
            }
            
            //return response
            return res.status(200).json({
                success:true,
                message:"password is updated",
                user:updatedUser
            })
        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"old password cant match"
            })
        }
    }
    catch(error)
    {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message:error.message
        })
    }


}
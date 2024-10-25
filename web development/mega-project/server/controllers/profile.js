const Profile = require('../models/Profile');
const User = require('../models/user'); 
const Course = require('../models/course');
const uploadImageToCloudinary = require('../utils/cloudinary');
const { default: mongoose } = require('mongoose');

exports.updateProfile = async(req,res) => {
    try{
        //fetch data
        const {gender,contactNo,dateOfBirth ="" ,about ="" } = req.body;

        //get user Id
        const userId = req.user.id;

        //validate
        if(!gender || !contactNo || !userId) 
        {
            return res.status.json({
                success:false,
                message:"data is invalid"
            })
        }

        //find the id of profile
        const user = await User.findById(userId);
        
        //get profile detailed
        const profileId = user.additionalDetails;
     
        //update profile
        const updatedProfile = await Profile.findByIdAndUpdate(profileId,{gender,contactNo,dob:dateOfBirth,about});

        //return response
        return res.status(200).json({
            success:true,
            message:"profile updated successfully",
            profile:updatedProfile
        })
    }
    catch(error)
    {
        console.log("error occure in updation of profile");
        res.status(500).json({
            success:false,
            message:"error occure in updation of profile",
            error:error.message,
        })
    }
}

//delete account

exports.deleteAccount = async(req,res) => {
    try{
        //fetch id of user
        const userId = req.user.id;

        //check valid id or not
        const userDetails = await User.findById(userId);
        console.log(userDetails)
        if(!userDetails)
        {
            return res.status(400).json({
                success:false,
                message:"user not present"
            })
        }

        //delete profile 
        await Profile.findByIdAndDelete(userDetails.additionalDetails);

        //unrolled student in courses

        const coursesOfUser =  userDetails.courses;
        console.log(coursesOfUser);
        if(coursesOfUser){
            for(let id of coursesOfUser)
            {
                await Course.findByIdAndUpdate({_id:id},{
                    $pull:{
                        studentEnrolled:userDetails._id
                    }
                })
            }
        }
        

        //delete account
        const deletedResponse = await User.findByIdAndDelete(userDetails._id);

        //return response
        res.status(200).json({
            success:true,
            message:"user deleted successfully",
            deletedResponse:deletedResponse
        })
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            message:"error in deleting user",
            error:error.message
        })
    }   
}


//get user detailed

exports.getAllUserDetails = async(req,res) => {
    try{   
        //get user id 
        const id = req.user.id;

        //validate the user
        const user = await User.findById(id).populate("additionalDetails").exec();

        if(!user)
        {
            return res.status(400).json({
                success:false,
                message:"user doesn't exist"
            })
        }

        user.password = undefined;
        //return response

        return res.status(200).json({
            success:true,
            message:"user data fetch successfully",
            data:user
        })
    }
    catch{
        res.status(500).json({
            success:false,
            message:"error in fetching details of user",
            error:error.message
        })
    }
}

exports.imageUpload = async(req,res) => {
    try{    
        // fetch data from request

        const file = req.files.imageFile;
        const userid = req.user.id ;
        console.log(userid)

        //if file format supported then
        const image = await uploadImageToCloudinary(file,process.allowedNodeEnvironmentFlags.folder_name,1000,1000);
        console.log(image)

        const updatedProfile = await User.findByIdAndUpdate(
            userid,
            { image: image.secure_url },
            { new: true }
          )
        //send response 

        res.status(200).json({
            success:true,
            message:"image upload successfully",
            data:updatedProfile
        })


    }
    catch(error)
    {
       // console.error(error);
        res.status(404).json({
            success:false,
            error:error.message,
            message:""
        })
    }
}

const Course = require('../models/course');
const Category = require('../models/category');
const User = require('../models/user');
const uploadImageToCloudinary = require("../utils/cloudinary");
require("dotenv").config();
//create course Handler

exports.createCourse = async(req,res) => {
    try{
        //fetch data
        const {courseName,description,whatYouWillLearn,price,category} = req.body;

        //get thumbnail
        const thumbnail = req.files.thumbnailImage;

        //validation
        if(!courseName || !description || !whatYouWillLearn || !price || !category || !thumbnail)
        {
            return res.status(400).json({
                success:false,
                message:"data is invalid"
            })
        }

        //check for instructor 
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId);
        console.log(instructorDetails);

        if(!instructorDetails)
        {
            return res.status(400).json({
                success:false,
                message:"instructor not found"
            })
        }

        //check given tag valid or not

        const categoryDetails = await Category.findById(category);
        if(!categoryDetails)
        {
            return res.status(400).json({
                success:false,
                message:"tag not found"
            })
        }

        //upload image to cloudinary 

        const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.folder_name);

        //create an entry for new course

        const newCourse = await Course.create(
            {
            courseName,
            description,
            whatYouWillLearn,
            price,
            category:categoryDetails._id,
            instructor:instructorDetails._id,
            thumbnail:thumbnailImage.secure_url
        })
        
        //add the new course to user Schema
        await User.findByIdAndUpdate(
            {_id:instructorDetails._id},
            {
                $push:{
                    courses:newCourse._id
                }
            },
            {new:true}
        )

        //update the categhory schema
        await Category.findByIdAndUpdate(
            {_id:categoryDetails._id},
            {
                $push:{
                    course:newCourse._id
                }
            },
            {new:true}
        );

        return res.status(200).json({
            success:true,
            message:"course created successfully",
            data:newCourse
        })
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed to create course",
            error:error.message
        })
    }
}



//get all courses

exports.getAllCourses = async(req,res) => {
    try{
        const allCourses = await Course.find({},{courseName:true,
                                                price:true,
                                                thumbnail:true,
                                                description:true,
                                                instructor:true,
                                                ratingAndReviews:true,
                                                studentEnrolled:true,
                                                category:true})
                                                .populate("instructor").exec();

        res.status(200).json({
            success:true,
            message:"all course are fetch successfully",
            data:allCourses
        })
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error in fetching all courses",
            error:error.message
        })
    }
}

//get course detail using course id

exports.getCourseDetail = async(req,res) => {
    try{
        //fetch course id
        const {courseId} = req.body;
        
        //find id using findById method 
        const courseDetail = await Course.findById(courseId)
        .populate(
            {
                path:"instructor",
                populate:{
                    path:"additionalDetails"
                }
            }
        ).populate("category")
        .populate("ratingAndReviews")
        .populate({
            path:"courseContent",
            populate:{
                path:"subsection"
            }
        })
        .populate("studentEnrolled").exec();

        //validation
        if(!courseDetail)
        {
            return res.status({
                success:false,
                message:`could not find the course with course id${courseId}`
            })
        }

        //return response
        return res.status(200).json({
            success:true,
            message:"course details fetch successfull",
            courseDetail : courseDetail
        })
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"error in fetching course detail",
            error:error.message
        })
    }
}
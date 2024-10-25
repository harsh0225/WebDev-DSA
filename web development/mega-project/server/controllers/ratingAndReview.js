const ratingAndReview = require('../models/RatingAndReview');
const Course = require('../models/course');
const { findById, findOne } = require('../models/user');
const mongoose = require('mongoose');

//create Rating
exports.createRating = async(req,res) => {
    try{
        //get user id
        const userid = req.user.id;

        //fetch data from request body
        const {rating,review,courseId} = req.body;
        //check if user is enrolled or not
        const  courseDetail = await findOne(
            {_id:courseId,
                studentEnrolled:{
                    $elemMatch:{
                        $eq:userid
                    }
                }

            });
        
        if(!courseDetail)
        {
            return res.status(400).json({
                success:false,
                message:"student is not enrolled"
            })
        }
        //check if user is already reviewed the course
        const alreadyReviewed = await ratingAndReview.findOne({user:userid,course:courseId});
        if(alreadyReviewed)
        {
            return res.status(400).json({
                success:false,
                message:"student is already reviewed the course"
            })
        }

        //create rating
        const createRatingAndReview = await ratingAndReview.create({rating,review,user:userid,course:courseId});
        
        //update the course model with this rating/review
        const updateCourse = await Course.findByIdAndUpdate({_id:courseId},
            {
                $push:{
                    ratingAndReviews:createRatingAndReview._id
                }
            }
        )
        //return response
        return res.status(200).json({
            success:true,
            message:"Rating and Review successfully",
            data:createRatingAndReview
        })
    }
    catch{
        return  res.status(400).json({
            success:false,
            message:"failure in rating and review",
            error:error.message 
        })
    }
}

//get all Rating

exports.getAllCourseRating = async(req,res) => {
    try{

        const {courseId} = req.body;

        const allRating = await ratingAndReview.find({course:courseId}).populate(
            {
                path:"user",
                select:"firstName lastName email image"
            })
            .populate({
                path:"course",
                select:"courseName"
            }).exec();

        if(!allRating)
        {
            return res.status(400).json({
                success:false,
                message:"rating and review not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"successfully fetching rating and review",
            data:allRating
        })
    }
    catch(error)
    {   
        return res.status(400).json({
            success:false,
            message:"error in fetching rating and review"
        })
    }
}

//get all rating

exports.getAllRating = async(req,res) => {
    try{
    
        const allRating = await ratingAndReview.find({})
                                .sort({rating:"desc"})
                                .populate(
                                    {
                                        path:"user",
                                        select:"firstName lastName email image"
                                })
                                .populate({
                                    path:"course",
                                    select:"courseName"
                                }).exec();

        if(!allRating)
        { 
            return res.status(400).json({
                success:false,
                message:"rating and review not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"successfully fetching rating and review",
            data:allRating
        })
    }
    catch(error)
    {   
        return res.status(400).json({
            success:false,
            message:"error in fetching rating and review"
        })
    }
}

//get average Rating 

exports.getAverageRating = async(req,res) => {
    try{
        //get course id
        const {courseId} = req.body;

        //validate course id
        if(!courseId)
        {
            return res.status(400).json({
                success:false,
                message:"course id is invalid"
            })
        }

        //calculate average rating
        const result = await ratingAndReview.aggregate([
            {
                $match:{
                    course:new mongoose.Types.ObjectId(courseId)
                }
            },
            {
                $group:{
                    _id:null  ,                                         // if we dont know what  basis of group then we set id as a null
                    averageRating:{$avg:"$rating"}
                }
            }
        ])
    
        //return rating 
        if(result.length > 0)
        {
            return res.status(200).json({
                success:true,
                averageRating : result[0].averageRating
            })
        }

        //if no rating and review

        return res.status(400).json({
            success:false,
            message:"No rating and review exist",
            averageRating:0
        })

    }
    catch(error)
    {
        return res.status(400).json({
            success:false,
            message:"error in calculating average rating "
        })
    }
}


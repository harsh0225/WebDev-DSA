const { default: mongoose } = require('mongoose');
const Course = require('../models/course');
const Section = require('../models/section');

exports.createSection = async(req,res) => {
    try{
        //data fetch
        const {sectionName,CourseID} = req.body;

        //data validation
        if(!sectionName || !CourseID)
        {
            return res.status(400).json({
                success:false,
                message:"data is invalid"
            })
        }
        //create section
        const sectionEntry = await Section.create({sectionName});

        //update the course inserting object id
        const updateCourse = await Course.findByIdAndUpdate(
            {_id:CourseID}, 
            {
                $push:{
                    courseContent:sectionEntry._id
                }
            },
           { new:true}).populate("courseContent").exec();

        if(!updateCourse)
        {
            res.status(400).json({
                success:false,
                message:"course is not found"
            })
        }
           
        //send response 
        return res.status(200).json({
            success:true,
            message:"section is created successfully",
            updateCourse
        })
    }
    catch(error)
    {
        console.log("error in creating course")
        res.status(500).json({
            success:false,
            message:"error in creating section",
            error:error.message
        })
    }
}

//update section

exports.updateSection = async(req,res) => {
    try{
        //fetch data
        const {newSectionName , sectionId,courseId} = req.body;
        
        //validate the data
        if(!newSectionName || !sectionId)
        {
            return res.status(400).json({
                success:false,
                message:"data is invalid"
            })
        }

        //update section
        const newupdatedSection = await Section.findByIdAndUpdate(sectionId,{sectionName:newSectionName},{new:true});

        const courseDetails = await Course.findById({_id:courseId}).populate({
            path:"courseContent",
            populate:{
                path:"subsection"
            }
        });
        //send response
        res.status(200).json({
            success:true,
            message:"section updated success",
            data:courseDetails
        })
    }
    catch(error)
    {
        console.log("error in updating course")

        res.status(500).json({
            success:false,
            message:"error in updating section",
            error:error.message
        })
    }
}

//delete section

exports.deleteSection = async(req,res) => {
    try{

        //fetch data assuming that we are sending id in params
        const {sectionId,CourseId} = req.body;
        console.log(sectionId,CourseId);

        console.log(sectionId,CourseId);

        //delete section
        const deletedSection = await Section.findByIdAndDelete(sectionId);
        console.log(deletedSection)
        if(!deletedSection)
        {
            return res.status(400).json({
                success:false,
                message:"section Cant find"
            })
        }

        //delete entry from course 
        const deleteSectionFromSchema = await Course.findByIdAndUpdate(CourseId,
            {
                $pull:{
                    courseContent:sectionId
                }
            },
            {new:true}).populate('courseContent');



        return res.status(200).json({
            success:true,
            message:"section deleted successfully",
            data:deleteSectionFromSchema
        })
    }
    catch(error)
    {
        console.log("error in deleting course")
        res.status(500).json({
            success:false,
            message:"error in deleting section",
            error:error.message
        })
    }
}
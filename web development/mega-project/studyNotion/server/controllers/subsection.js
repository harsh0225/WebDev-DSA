const Subsection = require("../models/subsection");
const Section = require('../models/section');
const uploadImageToCloudinary = require('../utils/cloudinary');
const subsection = require("../models/subsection");
const course = require("../models/course");
const mongoose = require('mongoose');

require('dotenv').config();
//create subsection

exports.createSubsection = async(req,res) => {
    try{
        //fetch data
        const {sectionId,title,description,courseId} = req.body;

        console.log(sectionId,title,description,courseId);
        //extract file/video
    
        const  videoFile = req.files.video;

        console.log(videoFile);
        //validation of data    
        if(!title || ! description || !sectionId || !videoFile)
        {
            return res.status.json({
                success:false,
                message:"data is invalid"
            })
        }
        
        //upload video to cloudinary
        const uploadVideoResponse = await uploadImageToCloudinary(videoFile,process.env.folder_name);

        if(!uploadVideoResponse)
        {
            return res.status.json({
                success:false,
                message:"error in uploading video"
            })
        }
        const videoUrl = uploadVideoResponse.secure_url;
        //create a subsection
        
        const newSubsection = await Subsection.create({title,timeDuration:uploadVideoResponse.duration,description,videoUrl});

        //update a section Schema 
        const sectionId1 =  new mongoose.Types.ObjectId(sectionId);

        const updateSection = await Section.findByIdAndUpdate(sectionId1,
            {
                $push:{
                    subsection:newSubsection._id
                }
            },
            {new:true});

        const courseDetails = await course.findById({_id:courseId}).populate({
          path:"courseContent",
          populate:{
              path:"subsection"
          }
      });

        if(!updateSection)
        {
            return res.status(400).json({
                success:false,
                message:"error in updating section Schema",
            })
        }
        console.log("printing course details in server"+courseDetails);
        return res.status(200).json({
            success:true,
            message:"subsection created successfully",
            data:courseDetails
        });
        
    }
    catch(error)
    {
        console.log("error in creating subsection");
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:"error in creating subsection"
        })
    }
}

//update subsection pending

  exports.updateSubSection = async (req, res) => {
    try {
      const {  title, description,courseId,subSectionId } = req.body;

      const subSection = await Subsection.findById(subSectionId)
      
      if (!subSection) {
        return res.status(404).json({
          success: false,
          message: "SubSection not found",
        })
      }
  
      if (title !== undefined) {
        subSection.title = title
      }
  
      if (description !== undefined) {
        subSection.description = description
      }

      if (req.files && req.files.video !== undefined) {
        const video = req.files.video
        const uploadDetails = await uploadImageToCloudinary(
          video,
          process.env.folder_name
        )
        subSection.videoUrl = uploadDetails.secure_url
        subSection.timeDuration = `${uploadDetails.duration}`
      }
  
      await subSection.save();



      const courseDetails = await course.findById(courseId).populate({
        path:"courseContent",
        populate:{
            path:"subsection"
        }
    });
  
      return res.json({
        success: true,
        message: "Section updated successfully",
        data:courseDetails
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: error.message,
  
      })
    }
  }


//delete subsection

exports.deleteSubsection = async(req,res) => {
    try{
        //fetch id from request
        const {subSectionId,sectionId,CourseId} = req.body;

        //delete subsection from section

        const updateSection = await Section.findByIdAndUpdate(sectionId,
            {
                $pull:{
                    subsection:subSectionId
                }
            },
            {new:true});

        //validate the id
        const subsection =  await Subsection.findByIdAndDelete(subSectionId);  

        if(!subsection)
        {
            return res.status(400).json({
                success:false,
                message:"subsection cant find"
            })
        }

        const getCourseDetail = await course.findById(CourseId).populate("courseContent");

        res.status(200).json({
            success:true,
            message:"subsection deleted successfully",
            data:getCourseDetail
        })

    }
    catch(error)
    {
        return res.status(400).json({
            success:false,
            message:"error in deletion of subsection",
            error:error.message
        })
    }
}
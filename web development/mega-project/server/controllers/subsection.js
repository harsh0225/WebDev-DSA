const Subsection = require("../models/subsection");
const Section = require('../models/section');
const uploadImageToCloudinary = require('../utils/cloudinary');
const subsection = require("../models/subsection");

require('dotenv').config();
//create subsection

exports.createSubsection = async(req,res) => {
    try{
        //fetch data
        const {sectionId,title,timeDuration,description} = req.body;

        //extract file/video
        const  videoFile = req.files.videoFile;
        
        //validation of data    
        if(!title || !timeDuration || ! description || !sectionId || !videoFile)
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

        const updateSection = await Section.findByIdAndUpdate(sectionId,
            {
                $push:{
                    subsection:newSubsection._id
                }
            },
            {new:true});

        if(!updateSection)
        {
            return res.status(400).json({
                success:false,
                message:"error in updating section Schema",
            })
        }

        res.status(200).json({
            success:true,
            message:"subsection created successfully",
            newSubsection
        });

        

    }
    catch(error)
    {
        console.log("error in creating subsection");
        res.status(500).json({
            success:false,
            message:"error in creating subsection"
        })
    }
}

//update subsection pending

  exports.updateSubSection = async (req, res) => {
    try {
      const { sectionId, title, description } = req.body
      const subSection = await Subsection.findById(sectionId)
  
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
  
      await subSection.save()
  
      return res.json({
        success: true,
        message: "Section updated successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: error.message,
        subSection
      })
    }
  }


//delete subsection

exports.deleteSubsection = async(req,res) => {
    try{
        //fetch id from request
        const {id,sectionId} = req.body;

        //delete subsection from section

        const updateSection = await Section.findByIdAndUpdate(sectionId,
            {
                $pull:{
                    subsection:id
                }
            },
            {new:true});

        //validate the id
        const subsection =  await Subsection.findByIdAndDelete(id);  

        if(!subsection)
        {
            return res.status(400).json({
                success:false,
                message:"subsection cant find"
            })
        }

        res.status(200).json({
            success:true,
            message:"subsection deleted successfully"
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
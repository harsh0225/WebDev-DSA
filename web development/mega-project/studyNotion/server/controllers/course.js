const Course = require('../models/course');
const Category = require('../models/category');
const User = require('../models/user');
const uploadImageToCloudinary = require("../utils/cloudinary");
require("dotenv").config();
const Section = require('../models/section');
const SubSection = require('../models/subsection'); 
const { default: mongoose } = require('mongoose');
//create course Handler

exports.createCourse = async(req,res) => {
    try{
        //fetch dat
        const {courseName,description,whatYouWillLearn,price,category,status,instructions} = req.body;

        //get thumbnail
        const thumbnailImage = req.files.thumbnailImage;
     

        //validation
        if(!courseName || !description || !whatYouWillLearn || !price || !category || !thumbnailImage)
        {
            return res.status(400).json({
                success:false,
                message:"data is invalid"
            })
        }

        //check for instructor 
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId);

        if(!instructorDetails)
        {
            return res.status(400).json({
                success:false,
                message:"instructor not found"
            })
        }

        //check given tag valid or not

        const categoryDetails = await Category.findOne({name:category});
        if(!categoryDetails)
        {
            return res.status(400).json({
                success:false,
                message:"tag not found"
            })
        }

        //upload image to cloudinary 

        const thumbnailImage1 = await uploadImageToCloudinary(thumbnailImage,process.env.folder_name);

        //create an entry for new course
        const newCourse = await Course.create(
        {
            courseName,
            description,
            whatYouWillLearn,
            price:Number(price),
            category:categoryDetails._id,
            instructor:instructorDetails._id,
            thumbnail:thumbnailImage1.secure_url,
            status:status,
            instructions
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
        let {courseId} = req.body;
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


exports.editCourse = async (req, res) => {
    try {
      const { courseId } = req.body
      const updates = req.body
      const course = await Course.findById(courseId)
  
      if (!course) {
        return res.status(404).json({ error: "Course not found" })
      }
  
      // If Thumbnail Image is found, update it
      if (req.files) {
        console.log("thumbnail update")
        const thumbnail = req.files.thumbnailImage
        const thumbnailImage = await uploadImageToCloudinary(
          thumbnail,
          process.env.FOLDER_NAME
        )
        course.thumbnail = thumbnailImage.secure_url
      }
  
      // Update only the fields that are present in the request body
      for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
          if (key === "tag" || key === "instructions") {
            course[key] = JSON.parse(updates[key])
          } else {
            course[key] = updates[key]
          }
        }
      }
  
      await course.save()
  
      const updatedCourse = await Course.findOne({
        _id: courseId,
      })
        .populate({
          path: "instructor",
          populate: {
            path: "additionalDetails",
          },
        })
        .populate("category")
        .populate("ratingAndReviews")
        .populate({
          path: "courseContent",
          populate: {
            path: "subsection",
          },
        })
        .exec()


      res.json({ 
        success: true,
        message: "Course updated successfully",
        data: updatedCourse,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }
  
  // Get a list of Course for a given Instructor
exports.getInstructorCourses = async (req, res) => {
    try {
      // Get the instructor ID from the authenticated user or request body
      const instructorId = req.user.id
  
      // Find all courses belonging to the instructor
      const instructorCourses = await Course.find({
        instructor: instructorId,
      }).sort({ createdAt: -1 })
  
      // Return the instructor's courses
      res.status(200).json({
        success: true,
        data: instructorCourses,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to retrieve instructor courses",
        error: error.message,
      })
    }
  }

  exports.deleteCourse = async (req, res) => {
    try {
      const { courseId } = req.body
  
      // Find the course
      const course = await Course.findById(courseId)
      if (!course) {
        return res.status(404).json({ message: "Course not found" })
      }
  
      // Unenroll students from the course
      const studentsEnrolled = course.studentEnrolled
      for (const studentId of studentsEnrolled) {
        await User.findByIdAndUpdate(studentId, {
          $pull: { courses: courseId },
        })
      }
  
      // Delete sections and sub-sections
      const courseSections = course.courseContent
      for (const sectionId of courseSections) {
        // Delete sub-sections of the section
        const section = await Section.findById(sectionId)
        if (section) {
          const subSections = section.subsection
          for (const subSectionId of subSections) {
            await SubSection.findByIdAndDelete(subSectionId)
          }
        }
  
        // Delete the section
        await Section.findByIdAndDelete(sectionId)
      }
  
      // Delete the course
      await Course.findByIdAndDelete(courseId)
  
      return res.status(200).json({
        success: true,
        message: "Course deleted successfully",
      });

    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      })
    }
  }


exports.getFullCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body
    const userId = req.user.id
    const courseDetails = await Course.findOne({
      _id: courseId,
    })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subsection",
        },
      })
      .exec()

    // let courseProgressCount = await CourseProgress.findOne({
    //   courseID: courseId,
    //   userId: userId,
    // })

    // console.log("courseProgressCount : ", courseProgressCount)

    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find course with id: ${courseId}`,
      })
    }

    // if (courseDetails.status === "Draft") {
    //   return res.status(403).json({
    //     success: false,
    //     message: `Accessing a draft course is forbidden`,
    //   });
    // }

    // let totalDurationInSeconds = 0
    // courseDetails.courseContent.forEach((content) => {
    //   content.subSection.forEach((subSection) => {
    //     const timeDurationInSeconds = parseInt(subSection.timeDuration)
    //     totalDurationInSeconds += timeDurationInSeconds
    //   })
    // })

    //const totalDuration = convertSecondsToDuration(totalDurationInSeconds)

    return res.status(200).json({
      success: true,
      data: {
        courseDetails,
       // totalDuration,
        // completedVideos: courseProgressCount?.completedVideos
        //   ? courseProgressCount?.completedVideos
        //   : [],
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

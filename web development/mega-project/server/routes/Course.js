const express = require('express');
const Router = express.Router();


//get all course controllers
const {createCourse,getAllCourses,getCourseDetail} = require('../controllers/course')

//get all middleware
const {auth,isStudent,isInstructor,isAdmin} = require("../middleware/auth");

//get all section controllers
const {createSection,updateSection,deleteSection} = require("../controllers/section");

//get all subsection controller
const {createSubsection,updateSubSection,deleteSubsection} = require('../controllers/subsection');

//get all category controller
const {createCategory,showAllCategory,categoryPageDetails} = require('../controllers/category');

//get all rating and review controllers
const {createRating,getAllCourseRating,getAllRating,getAverageRating} = require('../controllers/ratingAndReview');

//***************************************************************** 
//                    Course Routes
//*****************************************************************

//course can only created by the instructor

//create Course
Router.post("/createCourse", auth , isInstructor, createCourse);
//create subsection
Router.post("/createSection", auth, isInstructor, createSection);
//update section
Router.put("/updateSection", auth, isInstructor, updateSection);
//delete section
Router.delete("/deleteSection", auth, isInstructor, deleteSection);
//create subsection
Router.post("/createSubsection", auth, isInstructor, createSubsection);
//update subsection
Router.put("/updateSubsection", auth, isInstructor, updateSubSection);
//delete subsection
Router.delete("/deleteSubsection", auth, isInstructor, deleteSubsection);
//get all courses
Router.get("/getAllCourses", getAllCourses);
//get specific course detail
Router.get("/getCourseDetail", getCourseDetail);


//***************************************************************** 
//                   Category Routes (Only by admin)
//*****************************************************************

//create category
Router.post("/createCategory", auth, isAdmin, createCategory);
//showAllCategory
Router.get("/showAllCategory",showAllCategory);
//categoryPageDetails
Router.get("/categoryPageDetails",categoryPageDetails);



//***************************************************************** 
//                    rating and review routes (Only by student)
//*****************************************************************

//create rating and review
Router.post("/createRating", auth, isStudent, createRating);
//get All Course Rating
Router.get("/getAllCourseRating",getAllCourseRating);
//getAllRating
Router.get("/getAllRating",getAllRating);
//get average rating
Router.get("/getAverageRating",getAverageRating);


module.exports = Router;
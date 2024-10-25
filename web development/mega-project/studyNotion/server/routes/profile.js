const express = require('express');
const Router = express.Router();

//get all auth middleware
const {auth} = require('../middleware/auth');

//get all profile Route
const {updateProfile,deleteAccount,getAllUserDetails, imageUpload,getEnrolledCourses} = require('../controllers/profile');

//********************************************** 
//          profile Routes
//**********************************************

//update the user profile
Router.put("/updateProfile", auth, updateProfile);

//delete account of user
Router.delete("/deleteAccount", auth, deleteAccount);

//get all user details
Router.get("/getAllUserDetails", auth, getAllUserDetails);

//update user image
Router.post("/updateDisplayPicture", auth, imageUpload);

Router.get("/getEnrolledCourses", auth, getEnrolledCourses)

module.exports = Router
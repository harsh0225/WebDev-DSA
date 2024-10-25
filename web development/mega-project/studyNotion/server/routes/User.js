const express = require('express');
const Router = express.Router();

//get all auth controller

const {signup,sendOTP,login,changePassword} = require('../controllers/Auth');
const {resetPasswordToken,resetPassword} = require('../controllers/ResetPass');
const {auth} = require('../middleware/auth');

//******************************************************
//                Routes for User
//******************************************************

Router.post("/signup",signup);
Router.post("/sendOTP",sendOTP);
Router.post("/login",login);


//*******************************************************
//              update password Routes
//********************************************************
Router.put("/changePassword", auth, changePassword);
Router.post("/resetPasswordToken",resetPasswordToken);
Router.put("/resetPassword",resetPassword);

module.exports = Router
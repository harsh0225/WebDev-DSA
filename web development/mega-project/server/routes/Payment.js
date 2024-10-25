const express = require('express');
const Router = express.Router();

//get all payment controller

const {capturePayment,verifySingnature} = require('../controllers/payment');
const {auth,isStudent} = require('../middleware/auth');

//capture payment means create order
Router.post("/capturePayment", auth, isStudent, capturePayment);
//verify signature 
Router.post("/verifySingnature",verifySingnature);

module.exports = Router;
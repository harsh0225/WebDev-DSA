
const express = require('express');
const Router = express.Router();

const {contactUs} = require('../controllers/Contactus');

Router.post('/contactus',contactUs);

module.exports =  Router
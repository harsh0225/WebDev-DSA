const mongoose = require('mongoose');
const mailsender = require('../utils/mailsender');
const emailTemplate = require('../mail/templates/emailVerificationTemplate');

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now,
        expires:5*60
    }
});

// a function ->  send mail
async function sendVerificationEmail(email,otp) {
    try{
        const response = await mailsender(email,'verifiaction Email for otp verification',emailTemplate(otp));
        console.log("email send successfully : ",response);
    }
    catch(error){
        console.log("error occured in sending mails: "+error)
    }
}

otpSchema.pre('save',async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports = mongoose.model('OTP',otpSchema);
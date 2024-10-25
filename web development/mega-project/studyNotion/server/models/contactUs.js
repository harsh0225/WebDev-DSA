const mongoose = require('mongoose');
const mailsender = require('../utils/mailsender');

const contactusSchema = mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    counrtyCode:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    phoneNo:{
        type:Number,
        require:true
    }
})

async function sendVerificationEmail(email) {
    try{
        const response = await mailsender(email,'contact',"your message is delvered");
        console.log("email send successfully : ",response);
    }
    catch(error){
        console.log("error occured in sending mails: "+error)
    }
}

contactusSchema.pre('save',async function(next){
    await sendVerificationEmail(this.email);
    next();
})



module.exports = mongoose.model("contactUs",contactusSchema);
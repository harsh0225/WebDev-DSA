const {Instance} = require('../config/razorpay');
const Course = require('../models/course');
const User = require('../models/user');
const mailsender = require('../utils/mailsender');
const {courseEnrollmentEmail} = require('../mail/templates/courseEnrollmentEmail'); 
const mongoose = require('mongoose');



//capture the payment and initiate the Razorpay order 

exports.capturePayment = async(req,res) => {
        //get course id and user id
        const {course_id} = req.body;
        const userId = req.user.id;

        //validation
        //valid course id
        if(!course_id)
        {
            return res.status(400).json({
                success:false,
                message:"course id is invalid"
            })
        }
    
        //valid courseDetailed
        let course = null;
        try{
            course = await Course.findById(course_id)
            if(!course)
            {
                res.status(400).json({
                    success:false,
                    message:"course is not present"
                })
            }

            //user already pay or not 
            const uID = new mongoose.Types.ObjectId(userId);
            if(course.studentEnrolled.includes(uID))
            {
                return res.status(400).json({
                    success:false,
                    message:"student is already enrolled" 
                });
            }
        }
        catch(error)
        {
            res.status(500).json({
                success:false,
                message:"error in validating the data"
            })
        }

        //create order
        const amount = course.price;
        const currency = "INR";
    
        const option = {
            amount:amount*100,
            currency,
            receipt:Math.random(Date.now()).toString(),
            notes:{
                course_id:course._id,
                user_id:uID
            } 
        }

        //initiate the payment using razor pay
        try{
            const paymentResponse = await Instance.orders.create(option);
            console.log(paymentResponse);
             //return response
            return res.status(200).json({
                success:true,
                message:"order create  successfully",
                courseName:course.courseName,
                courseDescription:course.courseDescription,
                thumbnail:course.courseThumbnail,
                orderId:paymentResponse.id,
                currency:paymentResponse.currency,
                amount:paymentResponse.amount
            })
        }
        catch(error)
        {
            console.log(error);
            res.status(400).json({
                message:false,
                message:"could not initiate order"
            })
        }
}

//verifying signature

exports.verifySingnature = async(req,res) => {
        const webhookSecrete = "12345678";

        const signature = req.headers["x-razorpay-signature"];

        const shasum = crypto.createHmac("sha256",webhookSecrete);   //Hmac object created using  createHmac method is take two argument alogorithm which is used and secrete key
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest("hex");

        if(signature == digest)
        {
            console.log("payment is authorized");

            const {course_id,user_id} = req.body.payload.payment.entity.notes;
            try{    
                //update the student (courses)
                const userUpdate = await User.findByIdAndUpdate(user_id,
                    {
                        $push:{
                            courses:course_id
                        }
                    },{new:true});
                
                if(!userUpdate)
                {
                    console.log("user not update ");
                    return res.status(500).json({
                        success:false,
                        message:"student not found"
                    })
                }

                //update the course (studentEnrolled)
                const courseUpdate = await Course.findByIdAndUpdate(course_id,
                    {
                        $push:{
                            studentEnrolled:user_id
                        }
                    },{new:true});
                
                if(!courseUpdate)
                {
                    console.log("course not update ");
                    return res.status(500).json({
                        success:false,
                        message:"course not found"
                    })       
                }

                //send email to user

                const emailResponse = await mailsender(
                    userUpdate.email,
                    "congrtulation from codeHelp",
                    "congratulation , you are onboarded into CodeHelp course",
                );

                console.log(emailResponse);
                return res.status(200).json({
                    success:true,
                    message:"Singnature verified and course Added"
                })
            }
            catch(error)
            {
                res.status(500).json({
                    success:false,
                    message:"error in updating course and student"
                })
            }

        }
        else
        {
            return res.status(400).json({
                success:false,
                message:"signature cant verify"
            })
        }

}
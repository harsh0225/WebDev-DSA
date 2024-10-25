const mongoose = require('mongoose');

const course = new mongoose.Schema({
    courseName:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    whatYouWillLearn:{
        type:String
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Section'
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'RatingAndReview'
    }],
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    tag:{
        type:[String],
        required:true
    },
    studentEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }],
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    tag: {
		type: [String],
		required: true,
	}
});

module.exports = mongoose.model('Course',course);
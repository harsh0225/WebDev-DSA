const mongoose = require('mongoose');

const subsection = new mongoose.Schema({
    title:{
        type:String
    },
    timeDuration:{
        type:Number,
    },
    description:{
        type:String
    },
    videoUrl:{
        type:String
    },
    additionalUrl:{
        type:String
    }
})

module.exports = mongoose.model('Subsection',subsection);
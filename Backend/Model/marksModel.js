const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    studentId : {
        type:String,
        required: true
    },
    studentName : {
        type:String,
        required: true
    },

    teachersName : {
        type:String,
        required: true
    },


    subject : {
        type:String,
        required: true
    },


    marks : {
        type:String,
        required: true
    },
});

module.exports = mongoose.model('marks', marksSchema);
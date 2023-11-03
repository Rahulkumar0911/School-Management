require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors())

const mongoURI = process.env.URI || 'mongodb://127.0.0.1:27017/school_management'
// connecting mongodb database

mongoose.connect(mongoURI).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
});

app.use('/',require('./Routes/studentsRoutes'));
app.use('/',require('./Routes/teacherRoutes'));
app.use('/',require('./Routes/marksRoutes'));


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
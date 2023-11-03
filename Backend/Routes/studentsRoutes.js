const express = require('express');
const router = express.Router();
const Student =  require('../Model/studentModel');


// adding student
router.post('/students',async (req,res)=>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    }catch (err){
        res.status(500).json({error:err})
    }
});


// get all the students
router.get('/students', async (req,res)=>{
    try{
        const students = await Student.find();
        res.json(students)
    }catch (err){
        res.status(500).json({error:err});
    }
});

router.put('/students/:id', async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if(student){
        res.json('updated data successfully')
      }else{
        res.json('Some Error Occured')
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
router.delete('/students/:id', async (req, res) => {
    try {
      console.log(req.params.id)
      await Student.findOneAndDelete({_id:req.params.id})
      res.json({ message: 'Student deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
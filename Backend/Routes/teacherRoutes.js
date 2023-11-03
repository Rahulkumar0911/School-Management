const express = require('express');
const router = express.Router();
const Teacher =  require('../Model/teacherModel');


// adding teacher
router.post('/teachers',async (req,res)=>{
    try{
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).json(teacher);
    }catch (err){
        res.status(500).json({error:err})
    }
});


// get all the teachers
router.get('/teachers', async (req,res)=>{
    try{
        const teachers = await Teacher.find();
        res.json(teachers)
    }catch (err){
        res.status(500).json({error:err});
    }
});

router.put('/teachers/:id', async (req, res) => {
    try {
      const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if(teacher){
        res.json('updated data successfully')
      }else{
        res.json('Some Error Occured')
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
router.delete('/teachers/:id', async (req, res) => {
    try {
      console.log(req.params.id)
      await Teacher.findOneAndDelete({_id:req.params.id})
      res.json({ message: 'teacher deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
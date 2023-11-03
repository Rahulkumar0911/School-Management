const express = require('express');
const router = express.Router();
const Marks = require('../Model/marksModel');

// Create a new marks entry
router.post('/marks', async (req, res) => {
  try {
    const marks = new Marks(req.body);
    await marks.save();
    res.status(201).json(marks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all marks entries
router.get('/marks', async (req, res) => {
    try {
      const marks = await Marks.find()
        .populate('studentId', 'name') // Populate the student's name from the Student model.
        .select('studentId studentName teachersName subject marks');
      res.json(marks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  module.exports = router;
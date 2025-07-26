// routes/questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new question
router.post('/', async (req, res) => {
  const { question, options, answer, language } = req.body;
  if (!question || !options || !answer) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newQuestion = new Question({ question, options, answer, language });
  try {
    const saved = await newQuestion.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a question
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Question.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Question not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// تعديل سؤال
router.put('/:id', async (req, res) => {
  const { question, options, answer, language } = req.body;
  try {
    const updated = await Question.findByIdAndUpdate(
      req.params.id,
      { question, options, answer, language },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Question not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

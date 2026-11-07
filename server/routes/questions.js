// routes/questions.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = require('../models/Question');
const Category = require('../models/Category');

// List questions, optionally filtered by category in MongoDB.
router.get('/', async (req, res) => {
  try {
    const { categoryId } = req.query;
    const filter = {};
    if (categoryId && categoryId !== 'all') {
      if (!mongoose.isValidObjectId(categoryId)) {
        return res.status(400).json({ message: 'Invalid category' });
      }
      const categoryExists = await Category.exists({ _id: categoryId });
      if (!categoryExists) return res.status(400).json({ message: 'Invalid category' });
      filter.categoryId = categoryId;
    }
    const questions = await Question.find(filter);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new question
router.post('/', async (req, res) => {
  const { question, options, answer, language, categoryId } = req.body;
  if (!question || !Array.isArray(options) || options.length !== 4 || !answer || !categoryId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    if (!mongoose.isValidObjectId(categoryId) || !await Category.exists({ _id: categoryId })) {
      return res.status(400).json({ message: 'Invalid category' });
    }
    const newQuestion = new Question({ question, options, answer, language, categoryId });
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
  const { question, options, answer, language, categoryId } = req.body;
  try {
    if (categoryId !== undefined &&
      (!mongoose.isValidObjectId(categoryId) || !await Category.exists({ _id: categoryId }))) {
      return res.status(400).json({ message: 'Invalid category' });
    }
    const updated = await Question.findByIdAndUpdate(
      req.params.id,
      { question, options, answer, language, categoryId },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Question not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

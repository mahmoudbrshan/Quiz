const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', async (req, res) => {
  try {
    res.json(await Category.find().sort({ name: 1 }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  if (!name) return res.status(400).json({ message: 'Category name is required' });

  try {
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: 'Category name already exists' });
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  if (!name) return res.status(400).json({ message: 'Category name is required' });

  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true, runValidators: true }
    );
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: 'Category name already exists' });
    if (err.name === 'CastError') return res.status(400).json({ message: 'Invalid category' });
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

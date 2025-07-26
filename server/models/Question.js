// models/Question.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  language: { type: String, default: 'ar' }, // يمكن تخصيص اللغة
});

module.exports = mongoose.model('Question', QuestionSchema);

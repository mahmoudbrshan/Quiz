// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Category = require('./models/Category');
const Question = require('./models/Question');

const questionsRoutes = require('./routes/questions');
const categoriesRoutes = require('./routes/categories');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/questions', questionsRoutes);
app.use('/api/categories', categoriesRoutes);

const DEFAULT_CATEGORIES = [
  'غير مصنف',
  'الرياضيات (Mathematics)',
  'الجغرافيا (Geography)',
  'اللغة العربية (Arabic Language)',
  'التاريخ (History)',
  'العلوم (Science)',
  'اللغة الإنجليزية (English Language)',
];

async function initializeCategories() {
  for (const name of DEFAULT_CATEGORIES) {
    await Category.updateOne({ name }, { $setOnInsert: { name } }, { upsert: true });
  }
  const uncategorized = await Category.findOne({ name: 'غير مصنف' });
  await Question.updateMany(
    { $or: [{ categoryId: { $exists: false } }, { categoryId: null }] },
    { $set: { categoryId: uncategorized._id } }
  );
}

async function startServer() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/quiz-app');
  await initializeCategories();
  console.log('MongoDB connected and question categories initialized');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer().catch((err) => {
  console.error('Server startup failed:', err);
  process.exitCode = 1;
});

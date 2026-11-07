// js/manage-questions.js
const API_BASE_URL = 'https://quiz-4-whlr.onrender.com/api';

async function fetchQuestions() {
  const res = await fetch(`${API_BASE_URL}/questions`);
  if(!res.ok) throw new Error('تعذر تحميل الأسئلة');
  return await res.json();
}

async function fetchCategories() {
  const res = await fetch(`${API_BASE_URL}/categories`);
  if(!res.ok) throw new Error('تعذر تحميل التصنيفات');
  return await res.json();
}

async function deleteQuestion(id) {
  if(!confirm('هل أنت متأكد من حذف هذا السؤال؟')) return;
  const res = await fetch(`${API_BASE_URL}/questions/${encodeURIComponent(id)}`, { method: 'DELETE' });
  if(res.ok) {
    showQuestions();
  } else {
    alert('فشل في حذف السؤال');
  }
}

async function showQuestions() {
  const list = document.getElementById('questions-list');
  let questions, categories;
  try {
    [questions, categories] = await Promise.all([fetchQuestions(), fetchCategories()]);
  } catch(err) {
    list.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
    return;
  }
  const categoryNames = new Map(categories.map(category => [category._id, category.name]));
  if(!questions.length) {
    list.innerHTML = '<div class="alert alert-warning">لا توجد أسئلة</div>';
    return;
  }
  let html = '<div class="table-responsive"><table class="table table-bordered table-striped align-middle"><thead><tr><th>#</th><th>السؤال</th><th>التصنيف</th><th>الإجابة</th><th>خيارات</th><th>إجراءات</th></tr></thead><tbody>';
  questions.forEach((q, i) => {
    html += `<tr>
      <td>${i+1}</td>
      <td>${q.question}</td>
      <td>${categoryNames.get(q.categoryId) || 'غير مصنف'}</td>
      <td>${q.answer}</td>
      <td>${q.options.map(opt => `<div>${opt}</div>`).join('')}</td>
      <td>
        <a href="edit-question.html?id=${q._id}" class="btn btn-sm btn-warning me-1">تعديل</a>
        <button onclick="deleteQuestion('${q._id}')" class="btn btn-sm btn-danger">حذف</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  list.innerHTML = html;
}

window.deleteQuestion = deleteQuestion;
window.onload = showQuestions;

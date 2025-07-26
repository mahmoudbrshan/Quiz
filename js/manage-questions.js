// js/manage-questions.js
async function fetchQuestions() {
  const res = await fetch('https://quiz-4-whlr.onrender.com/api/questions');
  return await res.json();
}

async function deleteQuestion(id) {
  if(!confirm('هل أنت متأكد من حذف هذا السؤال؟')) return;
  const res = await fetch(`https://quiz-4-whlr.onrender.com/api/questions/${id}`, { method: 'DELETE' });
  if(res.ok) {
    showQuestions();
  } else {
    alert('فشل في حذف السؤال');
  }
}

async function showQuestions() {
  const questions = await fetchQuestions();
  const list = document.getElementById('questions-list');
  if(!questions.length) {
    list.innerHTML = '<div class="alert alert-warning">لا توجد أسئلة</div>';
    return;
  }
  let html = '<div class="table-responsive"><table class="table table-bordered table-striped align-middle"><thead><tr><th>#</th><th>السؤال</th><th>الإجابة</th><th>خيارات</th><th>إجراءات</th></tr></thead><tbody>';
  questions.forEach((q, i) => {
    html += `<tr>
      <td>${i+1}</td>
      <td>${q.question}</td>
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

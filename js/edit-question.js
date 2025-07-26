// js/edit-question.js
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

async function fetchQuestion(id) {
  const res = await fetch(`http://localhost:5000/api/questions`);
  const questions = await res.json();
  return questions.find(q => q._id === id);
}

async function updateQuestion(id, payload) {
  const res = await fetch(`http://localhost:5000/api/questions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.ok;
}

window.onload = async function() {
  const id = getIdFromUrl();
  if(!id) return;
  const form = document.getElementById('edit-question-form');
  const msg = document.getElementById('edit-question-msg');
  const q = await fetchQuestion(id);
  if(!q) {
    msg.textContent = 'لم يتم العثور على السؤال';
    form.style.display = 'none';
    return;
  }
  form.question.value = q.question;
  form.option1.value = q.options[0] || '';
  form.option2.value = q.options[1] || '';
  form.option3.value = q.options[2] || '';
  form.option4.value = q.options[3] || '';
  form.answer.value = q.answer;

  form.onsubmit = async function(e) {
    e.preventDefault();
    const payload = {
      question: form.question.value,
      options: [form.option1.value, form.option2.value, form.option3.value, form.option4.value],
      answer: form.answer.value
    };
    const ok = await updateQuestion(id, payload);
    if(ok) {
      msg.textContent = 'تم حفظ التعديلات بنجاح!';
    } else {
      msg.textContent = 'فشل في حفظ التعديلات';
    }
  }
}

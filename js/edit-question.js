const API_BASE_URL = 'https://quiz-4-whlr.onrender.com/api';
const QUESTIONS_URL = `${API_BASE_URL}/questions`;
const CATEGORIES_URL = `${API_BASE_URL}/categories`;

function getIdFromUrl() {
  return new URLSearchParams(window.location.search).get('id');
}

async function fetchQuestion(id) {
  const response = await fetch(QUESTIONS_URL);
  if (!response.ok) throw new Error('تعذر تحميل الأسئلة');
  const questions = await response.json();
  return questions.find(question => question._id === id);
}

window.onload = async function() {
  const id = getIdFromUrl();
  const form = document.getElementById('edit-question-form');
  const msg = document.getElementById('edit-question-msg');
  if (!id) {
    msg.textContent = 'لم يتم تحديد السؤال';
    form.style.display = 'none';
    return;
  }

  try {
    const [question, categoryResponse] = await Promise.all([
      fetchQuestion(id),
      fetch(CATEGORIES_URL)
    ]);
    if (!categoryResponse.ok) throw new Error('تعذر تحميل التصنيفات');
    const categories = await categoryResponse.json();
    const categorySelect = document.getElementById('category-select');
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category._id;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });
    if (!question) {
      msg.textContent = 'لم يتم العثور على السؤال';
      form.style.display = 'none';
      return;
    }

    form.question.value = question.question;
    form.option1.value = question.options[0] || '';
    form.option2.value = question.options[1] || '';
    form.option3.value = question.options[2] || '';
    form.option4.value = question.options[3] || '';
    form.answer.value = question.answer;
    categorySelect.value = question.categoryId;

    form.onsubmit = async function(e) {
      e.preventDefault();
      const payload = {
        question: form.question.value,
        options: [form.option1.value, form.option2.value, form.option3.value, form.option4.value],
        answer: form.answer.value,
        categoryId: categorySelect.value,
      };
      try {
        const response = await fetch(`${QUESTIONS_URL}/${encodeURIComponent(id)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'فشل في حفظ التعديلات');
        msg.textContent = 'تم حفظ التعديلات بنجاح!';
      } catch (err) {
        msg.textContent = err.message || 'خطأ في الاتصال بالخادم';
      }
    };
  } catch (err) {
    msg.textContent = err.message || 'خطأ في الاتصال بالخادم';
    form.style.display = 'none';
  }
};

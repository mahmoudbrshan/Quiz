const API_BASE_URL = 'https://quiz-4-whlr.onrender.com/api';
const QUESTIONS_URL = `${API_BASE_URL}/questions`;
const CATEGORIES_URL = `${API_BASE_URL}/categories`;
const addForm = document.getElementById('add-question-form');
const addMsg = document.getElementById('add-question-msg');
const categorySelect = document.getElementById('category-select');
const renameCategorySelect = document.getElementById('rename-category-select');
const categoryMsg = document.getElementById('category-msg');
let categories = [];

function renderCategories() {
  const selectedCategory = categorySelect.value;
  const selectedRenameCategory = renameCategorySelect.value;
  [categorySelect, renameCategorySelect].forEach((select) => {
    select.replaceChildren();
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category._id;
      option.textContent = category.name;
      select.appendChild(option);
    });
  });
  if (categories.some((category) => category._id === selectedCategory)) {
    categorySelect.value = selectedCategory;
  }
  if (categories.some((category) => category._id === selectedRenameCategory)) {
    renameCategorySelect.value = selectedRenameCategory;
  }
  updateRenameCategoryName();
}

async function loadCategories() {
  const response = await fetch(CATEGORIES_URL);
  if (!response.ok) throw new Error('تعذر تحميل التصنيفات');
  categories = await response.json();
  renderCategories();
}

function updateRenameCategoryName() {
  const category = categories.find((item) => item._id === renameCategorySelect.value);
  document.getElementById('rename-category-name').value = category ? category.name : '';
}

addForm.onsubmit = async function(e) {
  e.preventDefault();
  const formData = new FormData(addForm);
  const payload = {
    question: formData.get('question'),
    options: [formData.get('option1'), formData.get('option2'), formData.get('option3'), formData.get('option4')],
    answer: formData.get('answer'),
    categoryId: formData.get('categoryId'),
  };
  try {
    const response = await fetch(QUESTIONS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'فشل في إضافة السؤال');
    addMsg.textContent = 'تمت إضافة السؤال بنجاح!';
    addForm.reset();
  } catch (err) {
    addMsg.textContent = err.message || 'خطأ في الاتصال بالخادم';
  }
};

document.getElementById('add-category-form').onsubmit = async function(e) {
  e.preventDefault();
  try {
    const response = await fetch(CATEGORIES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: document.getElementById('new-category-name').value })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'تعذر إضافة التصنيف');
    categories.push(result);
    renderCategories();
    categorySelect.value = result._id;
    this.reset();
    categoryMsg.textContent = 'تمت إضافة التصنيف بنجاح';
  } catch (err) {
    categoryMsg.textContent = err.message || 'خطأ في الاتصال بالخادم';
  }
};

renameCategorySelect.onchange = updateRenameCategoryName;
document.getElementById('rename-category-form').onsubmit = async function(e) {
  e.preventDefault();
  const categoryId = renameCategorySelect.value;
  try {
    const response = await fetch(`${CATEGORIES_URL}/${encodeURIComponent(categoryId)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: document.getElementById('rename-category-name').value })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'تعذر تعديل التصنيف');
    categories = categories.map((category) => category._id === categoryId ? result : category);
    renderCategories();
    categoryMsg.textContent = 'تم تعديل التصنيف بنجاح';
  } catch (err) {
    categoryMsg.textContent = err.message || 'خطأ في الاتصال بالخادم';
  }
};

function parseExcel(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, {type: 'array'});
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, {header: 1});
    const [, ...dataRows] = rows;
    callback(dataRows.map(row => ({
      question: row[0],
      options: [row[1], row[2], row[3], row[4]],
      answer: row[5],
      categoryId: row[6],
    })));
  };
  reader.readAsArrayBuffer(file);
}

document.getElementById('import-btn').onclick = async function(e) {
  e.preventDefault();
  const fileInput = document.getElementById('import-file');
  const msg = document.getElementById('import-msg');
  const file = fileInput.files[0];
  if (!file) { msg.textContent = 'يرجى اختيار ملف.'; return; }
  let questions = [];
  if (file.name.endsWith('.json')) {
    try {
      questions = JSON.parse(await file.text());
      if (!Array.isArray(questions)) throw new Error();
    } catch {
      msg.textContent = 'ملف JSON غير صالح.';
      return;
    }
  } else {
    if (typeof XLSX === 'undefined') {
      msg.textContent = 'يرجى إضافة مكتبة xlsx.';
      return;
    }
    parseExcel(file, async (importedQuestions) => importQuestions(importedQuestions, msg));
    return;
  }
  await importQuestions(questions, msg);
};

async function importQuestions(questions, msg) {
  let success = 0, fail = 0;
  for (const question of questions) {
    let payload = question;
    if (question.option1 && question.option2 && question.option3 && question.option4) {
      payload = {
        question: question.question,
        options: [question.option1, question.option2, question.option3, question.option4],
        answer: question.answer,
        categoryId: question.categoryId,
      };
    }
    const matchedCategory = categories.find((category) =>
      category._id === payload.categoryId || category.name === payload.category
    );
    payload = { ...payload, categoryId: matchedCategory ? matchedCategory._id : categorySelect.value };
    if (!payload.question || !Array.isArray(payload.options) || payload.options.length !== 4 || !payload.answer) {
      fail++;
      continue;
    }
    try {
      const response = await fetch(QUESTIONS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) success++;
      else fail++;
    } catch {
      fail++;
    }
  }
  msg.textContent = `تم استيراد ${success} سؤال، وفشل ${fail}`;
}

loadCategories().catch((err) => {
  categoryMsg.textContent = err.message || 'تعذر تحميل التصنيفات من الخادم';
});

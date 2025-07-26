// js/add-question.js
const addForm = document.getElementById('add-question-form');
const addMsg = document.getElementById('add-question-msg');
if(addForm){
  addForm.onsubmit = async function(e){
    e.preventDefault();
    const formData = new FormData(addForm);
    const question = formData.get('question');
    const options = [formData.get('option1'), formData.get('option2'), formData.get('option3'), formData.get('option4')];
    const answer = formData.get('answer');
    const payload = { question, options, answer };
    try {
      const res = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if(res.ok){
        addMsg.textContent = 'تمت إضافة السؤال بنجاح!';
        addForm.reset();
      } else {
        addMsg.textContent = 'فشل في إضافة السؤال';
      }
    } catch(err){
      addMsg.textContent = 'خطأ في الاتصال بالخادم';
    }
  }
}

// دعم استيراد الأسئلة من ملف Excel أو JSON
function parseExcel(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, {type: 'array'});
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet, {header:1});
    // توقع: الصف الأول رؤوس الأعمدة
    const [header, ...rows] = json;
    const questions = rows.map(row => ({
      question: row[0],
      options: [row[1], row[2], row[3], row[4]],
      answer: row[5]
    }));
    callback(questions);
  };
  reader.readAsArrayBuffer(file);
}

document.getElementById('import-btn').onclick = async function(e) {
  e.preventDefault();
  const fileInput = document.getElementById('import-file');
  const msg = document.getElementById('import-msg');
  const file = fileInput.files[0];
  if(!file) { msg.textContent = 'يرجى اختيار ملف.'; return; }
  let questions = [];
  if(file.name.endsWith('.json')) {
    const text = await file.text();
    try {
      questions = JSON.parse(text);
    } catch {
      msg.textContent = 'ملف JSON غير صالح.'; return;
    }
  } else {
    if(typeof XLSX === 'undefined') {
      msg.textContent = 'يرجى إضافة مكتبة xlsx.'; return;
    }
    parseExcel(file, async (qs) => {
      questions = qs;
      await importQuestions(questions, msg);
    });
    return;
  }
  await importQuestions(questions, msg);
};

async function importQuestions(questions, msg) {
  let success = 0, fail = 0;
  for(const q of questions) {
    // دعم هيكلية ملف JSON: option1, option2, ...
    let payload = q;
    if(q.option1 && q.option2 && q.option3 && q.option4) {
      payload = {
        question: q.question,
        options: [q.option1, q.option2, q.option3, q.option4],
        answer: q.answer
      };
    }
    if(!payload.question || !payload.options || !payload.answer) { fail++; continue; }
    try {
      const res = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if(res.ok) success++; else fail++;
    } catch { fail++; }
  }
  msg.textContent = `تم استيراد ${success} سؤال، وفشل ${fail}`;
}

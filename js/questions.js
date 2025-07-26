//25 Deutsch-Arabisch Fragen

let questions1 = [
  {
    numb: 1,
    question: "ما معنى شو بدنا نعمل هيك الوضع؟",
    answer: "aber nützt ja nichts",
    options: [
      "aber es ist nicht so schlimm",
      "aber nützt ja nichts",
      "aber es ist nicht so wichtig",
      "aber es ist nicht so einfach",
    ],
  },
  {
    numb: 2,
    question: "راحت عن بالي؟",
    answer: "Es ist mir entfallen",
    options: [
      "Es ist mir egal",
      "Es ist mir wichtig",
      "Es ist mir zu schwer",
      "Es ist mir entfallen",
    ],
  },
  {
    numb: 3,
    question: "ما معنى ما في داعي؟",
    answer: "Es ist nicht nötig",
    options: [
      "Es ist nicht nötig",
      "Es ist nicht möglich",
      "Es ist nicht erlaubt",
      "Es ist nicht wichtig",
    ],
  },
  {
    numb: 4,
    question: "ما معنى ما في مشكلة؟",
    answer: "Es gibt kein Problem",
    options: [
      "Es gibt ein Problem",
      "Es gibt keine Lösung",
      "Es gibt kein Problem",
      "Es gibt keine Antwort",
    ],
  },
  {
    numb: 5,
    question: "ما معنى ما في داعي للقلق؟",
    answer: "Es besteht kein Grund zur Sorge",
    options: [
      "Es besteht ein Grund zur Sorge",
      "Es besteht keine Möglichkeit zur Sorge",
      "Es besteht keine Notwendigkeit zur Sorge",
      "Es besteht kein Grund zur Sorge",
    ],
  },
  {
    numb: 6,
    question: "فترة وتعدي؟",
    answer: "Das ist nur eine Phase das geht vorbei",
    options: [
      "Das ist nur ein Problem das geht vorbei",
      "Das ist nur eine Phase das geht vorbei",
      "Das ist nur eine Lösung das geht vorbei",
      "Das ist nur eine Antwort das geht vorbei",
    ],
  },
  {
    numb: 7,
    question: "ممكن تعمللي معروف؟",
    answer: "könntest du mir einen Gefallen tun?",
    options: [
      "könntest du mir einen Gefallen tun?",
      "könntest du mir helfen?",
      "könntest du mir eine Frage stellen?",
      "könntest du mir eine Antwort geben?",
    ],
  },

  {
    numb: 8,
    question: "جيت بوقتك؟",
    answer: "Du kommst wie gerufen",

    options: [
      ,
      "Du kommst zu spät",
      "Du kommst zu früh",
      "Du kommst nicht",
      "Du kommst wie gerufen",
    ],
  },
  {
    numb: 9,
    question: "أنا عندي قصر بالنظر؟",
    answer: "Ich bin kurzsichtig",
    options: [
      "Ich bin weitsichtig",
      "Ich bin kurzsichtig",
      "Ich habe gute Augen",
      "Ich sehe gut",
    ],
  },
  {
    numb: 10,

    question:
      "لوين بدك توصل تستخدم لما بدك  تسأل حدا عن المغزى او الهدف من كلامه؟",
    answer: "Worauf willst du hinaus?",
    options: [
      "Was meinst du damit?",
      "Was ist dein Ziel?",
      "Worauf willst du hinaus?",
      "Was ist der Zweck?",
    ],
  },
  {
    numb: 11,
    question: "بدك فت خبز كتير؟",
    answer: "Du bist noch grün hinter den Ohren",
    options: [
      "Du bist noch grün hinter den Ohren",
      "Du bist schon alt",
      "Du bist sehr erfahren",
      "Du bist sehr jung",
    ],
  },
  {
    numb: 12,
    question: "هاد فوق طاقتي؟",
    answer: "Das geht über meine Kräfte",
    options: [
      "Das ist zu einfach für mich",
      "Das ist zu schwer für mich",
      "Das geht über meine Kräfte",
      "Das ist zu leicht für mich",
    ],
  },
  {
    numb: 13,
    question: "سر النجاح هو العمل ؟",
    answer: "Erfolg hat drei Buchstaben: TUN",
    options: [
      "Erfolg hat vier Buchstaben: ARBEIT",
      "Erfolg hat zwei Buchstaben: GE",
      "Erfolg hat fünf Buchstaben: LERNEN",
      "Erfolg hat drei Buchstaben: TUN",
    ],
  },
  {
    numb: 14,
    question: "ما بتفرق معي؟",
    answer: "Das ist mir Jache wie Hose",
    options: [
      "Das ist mir egal",
      "Das ist mir wichtig",
      "Das ist mir Jache wie Hose",
      "Das ist mir zu schwer",
    ],
  },
  {
    numb: 15,
    question: "نفذ صبري؟",
    answer: "Mein Geduld ist am Ende",
    options: [
      "Mein Geduld ist am Anfang",
      "Mein Geduld ist am Ende",
      "Mein Geduld ist unendlich",
      "Mein Geduld ist stark",
    ],
  },
  {
    numb: 16,
    question: "اسف انا مستعجل ؟",
    answer: "Entschuldigung, ich habe es eilig",
    options: [
      "Entschuldigung, ich habe Zeit",
      "Entschuldigung, ich habe es eilig",
      "Entschuldigung, ich bin müde",
      "Entschuldigung, ich bin hungrig",
    ],
  },
  {
    numb: 17,
    question: "من طقطق للسلام عليكم؟",
    answer: "Vom Anfang bis zum Ende",
    options: [
      "Vom Anfang bis zum Ende",
      "Vom Ende bis zum Anfang",
      "Vom Anfang bis zur Mitte",
      "Vom Ende bis zur Mitte",
    ],
  },
  {
    numb: 18,
    question: "انا عاملة ريجيم؟",
    answer: "Ich bin auf Diät",
    options: [
      "Ich bin hungrig",
      "Ich bin satt",
      "Ich bin auf Diät",
      "Ich bin müde",
    ],
  },
  {
    numb: 19,
    question: "الأكل كان طيب؟",
    answer: "Mir hat es geschmeckt",
    options: [
      "Mir hat es nicht geschmeckt",
      "Mir hat es geschmeckt",
      "Mir war es egal",
      "Mir war es wichtig",
    ],
  },
  {
    numb: 20,
    question: "جلدي عما يحكني؟",
    answer: "Meine Haut juckt",
    options: [
      "Meine Haut ist trocken",
      "Meine Haut ist fettig",
      "Meine Haut juckt",
      "Meine Haut ist gesund",
    ],
  },
  {
    numb: 21,
    question: "مالك دخل؟",
    answer: "Das geht dich einen Scheißdreck an",
    options: [
      "Das geht dich nichts an",
      "Das geht dich einen Scheißdreck an",
      "Das geht dich alles an",
      "Das geht dich etwas an",
    ],
  },
  {
    numb: 22,
    question: "فكر منيح قبل ما تقرر؟",
    answer: "Erst besinnen dann beginnen",
    options: [
      "Erst handeln dann denken",
      "Erst besinnen dann beginnen",
      "Erst entscheiden dann handeln",
      "Erst reden dann handeln",
    ],
  },
  {
    numb: 23,
    question: "خليني أحضنك؟",
    answer: "Lass mich dich drücken",
    options: [
      "Lass mich dich drücken",
      "Lass mich dich küssen",
      "Lass mich dich schlagen",
      "Lass mich dich ignorieren",
    ],
  },
  {
    numb: 24,
    question: "أنت جاهز؟",
    answer: "Bist du so weit",
    options: [
      "Bist du so weit",
      "Bist du bereit",
      "Bist du müde",
      "Bist du hungrig",
    ],
  },
  {
    numb: 25,
    question: "لا تغلط غلطتي؟",
    answer: "Mach nicht den Selben Fehler wie ich",
    options: [
      "Mach nicht den Selben Fehler wie ich",
      "Mach nicht den gleichen Fehler wie ich",
      "Mach nicht den anderen Fehler wie ich",
      "Mach nicht den besten Fehler wie ich",
    ],
  },
  {
    numb: 26,
    question: "ما معنى انا امارس الرياضة وخصوصا في نهاية الاسبوع؟",
    answer: "Ich mache Sport ,vor allem am Wochenende",
    options: [
      "Ich mache Sport, vor allem am Abend",
      "Ich mache Sport, vor allem am Tag",
      "Ich mache Sport, vor allem am Wochenende",
      "Ich mache Sport, vor allem am Vormittag",
    ],
  },
  {
    numb: 27,
    question: "ما معنى هو يشاهد مباريات كرة القدم وخصوصا مباريات برشلونة",
    answer: "Er schaut Fußball,vor allem die Spiele vom Fc Barcelona",
    options: [
      "Er schaut Fußball, vor allem die Spiele vom Real Madrid",
      "Er schaut Fußball, vor allem die Spiele vom Barcelona",
      "Er schaut Fußball, vor allem die Spiele vom Liverpool",
      "Er schaut Fußball, vor allem die Spiele vom Atletico Madrid",
    ],
  },
  {
    numb: 28,
    question: "انا احب القراءة وخصوصا في نهاية الاسبوع؟",
    answer: "Ich liebe Lesen, vor allem am Wochenende",
    options: [
      "Ich liebe Lesen, vor allem am Tag",
      "Ich liebe Lesen, vor allem am Abend",
      "Ich liebe Lesen, vor allem am Wochenende",
      "Ich liebe Lesen, vor allem am Vormittag",
    ],
  },
  {
    numb: 29,
    question: "انا ماني غشيم",
    answer: "Ich bin nicht von gestern",
    options: [
      "Ich bin von gestern",
      "Ich bin von heute",
      "Ich bin nicht von gestern",
      "Ich bin von morgen",
    ],
  },
  {
    numb: 30,
    question: "لو كنت مكانك لكنت قبلت",
    answer: "wenn ich du wäre,dann würde ich einfach akzaptieren",
    options: [
      "wenn ich du wäre,dann würde ich einfach nicht akzaptieren",
      "wenn ich du wäre,dann würde ich einfach akzaptieren",
      " wenn ich du wäre,dann würde ich einfach nicht akzaptieren",
      "wenn ich du wäre,dann würde ich einfach nicht  akzaptieren",
    ],
  },
  {
    numb: 31,
    question: "شو بيطلع لي بلمقابل",
    answer: "was kriege ich dafür",
    options: [
      "was kriege ich dafür",
      "was kriege ich dafür nicht",
      "was kriege ich  nicht dafür",
      "was kriege ich dafür nicht",
    ],
  },
  

];

// Form Fragen && Deutsch-Arabisch Fragen

let questions = [
  {
    numb: 1,
    question: "ما هو عنصر form في HTML؟",
    answer:
      "عنصر HTML يُستخدم لتجميع الحقول (inputs) التي تُرسل بياناتها إلى السيرفر عند النقر على زر submit.",
    options: [
      "عنصر HTML يُستخدم لتجميع الحقول (inputs) التي تُرسل بياناتها إلى السيرفر عند النقر على زر submit.",
      "عنصر لتجميع الصور فقط.",
      "عنصر لتجميع الجداول فقط.",
      "عنصر لتجميع السكريبتات فقط.",
    ],
  },
  {
    numb: 2,
    question: "ما الفرق بين استخدام <form> وعدم استخدامه عند إدخال البيانات؟",
    answer:
      "باستخدام <form>، المتصفح يدير الإرسال التلقائي. بدون <form>، يجب التعامل مع كل شيء يدويًا باستخدام JavaScript.",
    options: [
      "باستخدام <form>، المتصفح يدير الإرسال التلقائي. بدون <form>، يجب التعامل مع كل شيء يدويًا باستخدام JavaScript.",
      "لا يوجد فرق إطلاقًا.",
      "بدون <form>، يتم الإرسال تلقائيًا.",
      "باستخدام <form>، لا يمكن إرسال البيانات.",
    ],
  },
  {
    numb: 3,
    question: "ما فائدة الخاصيتين action و method في <form>؟",
    answer:
      "action: يحدد عنوان السيرفر الذي تُرسل إليه البيانات. method: يحدد طريقة الإرسال (GET أو POST).",
    options: [
      "action: يحدد عنوان السيرفر الذي تُرسل إليه البيانات. method: يحدد طريقة الإرسال (GET أو POST).",
      "method: تحدد عنوان السيرفر، action: تحدد طريقة الإرسال.",
      "كلتاهما تحددان عنوان السيرفر فقط.",
      "كلتاهما تحددان طريقة الإرسال فقط.",
    ],
  },
  {
    numb: 4,
    question: "ما الذي يحدث داخل المتصفح عند الضغط على زر submit؟",
    answer:
      "يجمع الحقول ذات name من النموذج، يجهز البيانات، ثم يرسلها حسب الطريقة المحددة (GET أو POST).",
    options: [
      "يجمع الحقول ذات name من النموذج، يجهز البيانات، ثم يرسلها حسب الطريقة المحددة (GET أو POST).",
      "يحدث تحديث للصفحة فقط.",
      "يتم حذف جميع البيانات.",
      "لا يحدث أي شيء.",
    ],
  },
  {
    numb: 5,
    question: "ما هي الحقول التي يقوم المتصفح بتجميعها عند الإرسال؟",
    answer: "كل العناصر داخل <form> والتي تحتوي على خاصية name.",
    options: [
      "كل العناصر داخل <form> والتي تحتوي على خاصية name.",
      "جميع العناصر داخل الصفحة.",
      "العناصر التي ليس لها name.",
      "العناصر من نوع button فقط.",
    ],
  },
  {
    numb: 6,
    question: "ما الفرق بين GET و POST في إرسال البيانات من النموذج؟",
    answer:
      "GET: تُرسل البيانات عبر عنوان URL (كـ Query Parameters). POST: تُرسل البيانات داخل جسم الطلب (Body).",
    options: [
      "GET: تُرسل البيانات عبر عنوان URL (كـ Query Parameters). POST: تُرسل البيانات داخل جسم الطلب (Body).",
      "لا يوجد فرق بينهما.",
      "POST تُرسل البيانات عبر URL.",
      "GET تُرسل البيانات داخل Body.",
    ],
  },
  {
    numb: 7,
    question: "ماذا يحدث إذا لم يكن هناك name في input داخل نموذج؟",
    answer: "لن يتم تضمين هذا الحقل في البيانات المُرسلة.",
    options: [
      "لن يتم تضمين هذا الحقل في البيانات المُرسلة.",
      "سيتم تضمينه تلقائيًا.",
      "سيتم إرسال قيمة فارغة.",
      "سيتم إرسال اسم الحقل فقط.",
    ],
  },
  {
    numb: 8,
    question: 'كيف يتعامل المتصفح مع زر <button type="submit"> داخل <form>?',
    answer: "يعتبره الزر المسؤول عن بدء عملية الإرسال.",
    options: [
      "يعتبره الزر المسؤول عن بدء عملية الإرسال.",
      "يعتبره زر عادي فقط.",
      "لا يتعرف عليه المتصفح.",
      "يمنع الإرسال التلقائي.",
    ],
  },
  {
    numb: 9,
    question: "ما هي فائدة event.preventDefault() في التعامل مع النماذج؟",
    answer:
      "يمنع الإرسال التلقائي للنموذج حتى يتم التعامل معه يدويًا عبر JavaScript.",
    options: [
      "يمنع الإرسال التلقائي للنموذج حتى يتم التعامل معه يدويًا عبر JavaScript.",
      "يسمح بالإرسال التلقائي.",
      "يمنع استخدام JavaScript.",
      "يمنع ظهور النموذج.",
    ],
  },
  {
    numb: 10,
    question: "ما هي مزايا استخدام <form> بدلًا من عناصر منفصلة (div + input)؟",
    answer:
      "يسهل الإرسال التلقائي. يدعم التحقق التلقائي (Validation). يسمح بتجميع البيانات تلقائيًا باستخدام FormData.",
    options: [
      "يسهل الإرسال التلقائي. يدعم التحقق التلقائي (Validation). يسمح بتجميع البيانات تلقائيًا باستخدام FormData.",
      "لا يوجد أي ميزة.",
      "يمنع التحقق التلقائي.",
      "يمنع تجميع البيانات.",
    ],
  },
  {
    numb: 11,
    question: "ما هو كائن FormData في JavaScript؟",
    answer:
      "كائن يُستخدم لجمع البيانات من نموذج <form> تلقائيًا على شكل أزواج مفتاح/قيمة.",
    options: [
      "كائن يُستخدم لجمع البيانات من نموذج <form> تلقائيًا على شكل أزواج مفتاح/قيمة.",
      "كائن لتخزين الصور فقط.",
      "كائن لتخزين الجداول فقط.",
      "كائن لتخزين السكريبتات فقط.",
    ],
  },
  {
    numb: 12,
    question: "كيف يتم استخدام FormData لجمع البيانات من <form>?",
    answer: "const formData = new FormData(formElement);",
    options: [
      "const formData = new FormData(formElement);",
      "formElement.getData();",
      "formElement.collectData();",
      "formElement.toFormData();",
    ],
  },
  {
    numb: 13,
    question: "كيف يتم استخراج قيمة من FormData؟",
    answer: "formData.get('username')",
    options: [
      "formData.get('username')",
      "formData.value('username')",
      "formData['username']",
      "formData.fetch('username')",
    ],
  },
  {
    numb: 14,
    question: "هل يمكن استخدام FormData مع input من نوع file؟",
    answer: "نعم، ويدعم ذلك تلقائيًا.",
    options: [
      "نعم، ويدعم ذلك تلقائيًا.",
      "لا، يجب استخدام كائن آخر.",
      "نعم، لكن مع تعديل الكود.",
      "لا يمكن ذلك إطلاقًا.",
    ],
  },
  {
    numb: 15,
    question: "هل يمكن إرسال FormData باستخدام fetch()؟",
    answer: "نعم، يتم تمريره في body بدون الحاجة إلى إعداد Content-Type.",
    options: [
      "نعم، يتم تمريره في body بدون الحاجة إلى إعداد Content-Type.",
      "لا يمكن ذلك إطلاقًا.",
      "يجب تحويله إلى JSON أولاً.",
      "يجب تحويله إلى نص فقط.",
    ],
  },
  {
    numb: 16,
    question:
      "هل تحتاج إلى تحديد Content-Type عند استخدام FormData في fetch()؟",
    answer: "لا، المتصفح يحددها تلقائيًا إلى multipart/form-data مع boundary.",
    options: [
      "لا، المتصفح يحددها تلقائيًا إلى multipart/form-data مع boundary.",
      "نعم، يجب تحديدها يدويًا دائمًا.",
      "يجب تحديدها إلى application/json.",
      "يجب تحديدها إلى text/plain.",
    ],
  },
  {
    numb: 17,
    question: "كيف تضيف حقل إضافي يدويًا إلى كائن FormData؟",
    answer: "formData.append('key', 'value');",
    options: [
      "formData.append('key', 'value');",
      "formData.add('key', 'value');",
      "formData.set('key', 'value');",
      "formData.push('key', 'value');",
    ],
  },
  {
    numb: 18,
    question: "هل يمكن استخدام FormData بدون وجود <form> في الصفحة؟",
    answer: "نعم، يمكن إنشاؤه يدويًا:",
    options: [
      "نعم، يمكن إنشاؤه يدويًا:",
      "لا يمكن ذلك إطلاقًا.",
      "يجب وجود <form> دائمًا.",
      "يجب وجود input فقط.",
    ],
  },
  {
    numb: 19,
    question: "ما هو تنسيق application/x-www-form-urlencoded؟",
    answer:
      "هو تنسيق يُحوّل البيانات إلى سلسلة مفاتيح وقيم key1=value1&key2=value2.",
    options: [
      "هو تنسيق يُحوّل البيانات إلى سلسلة مفاتيح وقيم key1=value1&key2=value2.",
      "هو تنسيق JSON فقط.",
      "هو تنسيق للصور فقط.",
      "هو تنسيق للجداول فقط.",
    ],
  },
  {
    numb: 20,
    question: "كيف يتم تمثيل البيانات في هذا التنسيق؟",
    answer:
      "يستخدم & للفصل بين الأزواج، = بين المفتاح والقيمة، المسافات = +، الرموز الخاصة = % (ترميز URL)",
    options: [
      "يستخدم & للفصل بين الأزواج، = بين المفتاح والقيمة، المسافات = +، الرموز الخاصة = % (ترميز URL)",
      "يستخدم الفواصل فقط.",
      "يستخدم الأقواس فقط.",
      "يستخدم علامات التنصيص فقط.",
    ],
  },
  {
    numb: 21,
    question: "ما هو الفرق بين x-www-form-urlencoded و application/json؟",
    answer:
      "الأول يستخدم تنسيق بسيط لسلاسل نصية، ويدعمه <form> تلقائيًا. الثاني يستخدم تنسيق JSON، أكثر مرونة ويُستخدم مع JavaScript.",
    options: [
      "الأول يستخدم تنسيق بسيط لسلاسل نصية، ويدعمه <form> تلقائيًا. الثاني يستخدم تنسيق JSON، أكثر مرونة ويُستخدم مع JavaScript.",
      "لا يوجد فرق إطلاقًا.",
      "كلاهما يستخدم JSON فقط.",
      "كلاهما يستخدم URL فقط.",
    ],
  },
  {
    numb: 22,
    question: "متى يُستخدم x-www-form-urlencoded ومتى يُستخدم JSON؟",
    answer:
      "x-www-form-urlencoded: عند إرسال نموذج HTML تقليدي. application/json: عند استخدام fetch/axios أو إرسال بيانات معقدة.",
    options: [
      "x-www-form-urlencoded: عند إرسال نموذج HTML تقليدي. application/json: عند استخدام fetch/axios أو إرسال بيانات معقدة.",
      "x-www-form-urlencoded: عند إرسال صور فقط.",
      "JSON: عند إرسال جداول فقط.",
      "كلاهما يُستخدم دائمًا مع النماذج فقط.",
    ],
  },
  {
    numb: 23,
    question: "ما هي الطريقة التي يستخدمها المتصفح افتراضيًا عند إرسال نموذج؟",
    answer: "application/x-www-form-urlencoded",
    options: [
      "application/x-www-form-urlencoded",
      "application/json",
      "multipart/form-data",
      "text/plain",
    ],
  },
  {
    numb: 24,
    question: "ما الفرق بين طريقة تمثيل النصوص في JSON و URL-Encoded؟",
    answer:
      "JSON يحتفظ بالنص كما هو. URL-Encoded يرمز الرموز الخاصة (مثل المسافات → +).",
    options: [
      "JSON يحتفظ بالنص كما هو. URL-Encoded يرمز الرموز الخاصة (مثل المسافات → +).",
      "لا يوجد فرق إطلاقًا.",
      "كلاهما يرمز الرموز الخاصة.",
      "كلاهما يحتفظ بالنص كما هو.",
    ],
  },
  {
    numb: 25,
    question:
      "ما هي الصيغة النهائية للبيانات عند إرسال النموذج باستخدام POST بتنسيق x-www-form-urlencoded؟",
    answer: "username=ahmed+ali&password=abc%26123",
    options: [
      "username=ahmed+ali&password=abc%26123",
      "username: ahmed ali, password: abc&123",
      "username=ahmed ali password=abc&123",
      "username: ahmed ali, password: abc&123",
    ],
  },
  {
    numb: 26,
    question: "ما هو HTTP؟",
    answer:
      "HTTP (HyperText Transfer Protocol) هو بروتوكول يُستخدم لتبادل البيانات بين المتصفح (client) والخادم (server) على شبكة الإنترنت.",
    options: [
      "HTTP (HyperText Transfer Protocol) هو بروتوكول يُستخدم لتبادل البيانات بين المتصفح (client) والخادم (server) على شبكة الإنترنت.",
      "لغة برمجة لتصميم المواقع.",
      "نظام تشغيل خاص بالسيرفر.",
      "أداة لتخزين البيانات فقط.",
    ],
  },
  {
    numb: 27,
    question: "ما الفرق بين HTTP و HTTPS؟",
    answer:
      "HTTP: البيانات تُرسل بدون تشفير. HTTPS: البيانات تُشفّر باستخدام SSL/TLS لحماية الخصوصية.",
    options: [
      "HTTP: البيانات تُرسل بدون تشفير. HTTPS: البيانات تُشفّر باستخدام SSL/TLS لحماية الخصوصية.",
      "لا يوجد فرق بينهما.",
      "HTTPS أسرع من HTTP فقط.",
      "HTTP يُستخدم للصور فقط.",
    ],
  },
  {
    numb: 28,
    question: "ما الغرض من HTTP في الإنترنت؟",
    answer:
      "توفير وسيلة موحدة لطلب الموارد (صفحات، صور، ملفات) واستلامها بين العميل والسيرفر.",
    options: [
      "توفير وسيلة موحدة لطلب الموارد (صفحات، صور، ملفات) واستلامها بين العميل والسيرفر.",
      "تخزين البيانات فقط.",
      "تشغيل البرامج على السيرفر.",
      "تشفير البيانات فقط.",
    ],
  },
  {
    numb: 29,
    question: "ما هي مكونات طلب HTTP؟",
    answer:
      "السطر الأول: الطريقة، المسار، نسخة البروتوكول. Headers: معلومات إضافية. Body: البيانات (في POST مثلًا)",
    options: [
      "السطر الأول: الطريقة، المسار، نسخة البروتوكول. Headers: معلومات إضافية. Body: البيانات (في POST مثلًا)",
      "السطر الأول فقط.",
      "Body فقط.",
      "Headers فقط.",
    ],
  },
  {
    numb: 30,
    question: "ما هي مكونات رد HTTP؟",
    answer:
      "السطر الأول: نسخة البروتوكول، كود الحالة، وصف الحالة. Headers: مثل Content-Type, Content-Length. Body: المحتوى (HTML، JSON، إلخ)",
    options: [
      "السطر الأول: نسخة البروتوكول، كود الحالة، وصف الحالة. Headers: مثل Content-Type, Content-Length. Body: المحتوى (HTML، JSON، إلخ)",
      "Body فقط.",
      "Headers فقط.",
      "السطر الأول فقط.",
    ],
  },
  {
    numb: 31,
    question: "ما هو Header في HTTP؟",
    answer:
      "معلومات مرافقة للطلب أو الرد، توضح نوع البيانات، اللغة، نوع المتصفح، وغيرها.",
    options: [
      "معلومات مرافقة للطلب أو الرد، توضح نوع البيانات، اللغة، نوع المتصفح، وغيرها.",
      "هو جسم الطلب فقط.",
      "هو عنوان السيرفر فقط.",
      "هو كود الحالة فقط.",
    ],
  },
  {
    numb: 32,
    question: "ما هي Content-Type وماذا تعني؟",
    answer:
      "تحدد نوع البيانات في الجسم (body). مثال: application/json تعني أن البيانات بصيغة JSON.",
    options: [
      "تحدد نوع البيانات في الجسم (body). مثال: application/json تعني أن البيانات بصيغة JSON.",
      "تحدد عنوان السيرفر.",
      "تحدد كود الحالة.",
      "تحدد نوع المتصفح فقط.",
    ],
  },
  {
    numb: 33,
    question: "ما هو Body في HTTP Request؟",
    answer:
      "هو جزء اختياري يحتوي على البيانات المُرسلة، يُستخدم في POST و PUT.",
    options: [
      "هو جزء اختياري يحتوي على البيانات المُرسلة، يُستخدم في POST و PUT.",
      "هو كود الحالة فقط.",
      "هو عنوان السيرفر فقط.",
      "هو نوع المتصفح فقط.",
    ],
  },
  {
    numb: 34,
    question: "ما الفرق بين GET و POST؟",
    answer:
      "GET: يُرسل البيانات في عنوان URL، ولا يحتوي على Body. POST: يُرسل البيانات في Body، ويُستخدم لنقل بيانات حساسة أو طويلة.",
    options: [
      "GET: يُرسل البيانات في عنوان URL، ولا يحتوي على Body. POST: يُرسل البيانات في Body، ويُستخدم لنقل بيانات حساسة أو طويلة.",
      "لا يوجد فرق إطلاقًا.",
      "POST يُرسل البيانات في URL.",
      "GET يُرسل البيانات في Body.",
    ],
  },
  {
    numb: 35,
    question: "ما معنى أن HTTP stateless؟",
    answer: "كل طلب مستقل تمامًا عن الآخر؛ السيرفر لا يتذكر الطلبات السابقة.",
    options: [
      "كل طلب مستقل تمامًا عن الآخر؛ السيرفر لا يتذكر الطلبات السابقة.",
      "السيرفر يتذكر كل الطلبات.",
      "العميل يتذكر كل الطلبات.",
      "كل الطلبات مرتبطة ببعضها دائمًا.",
    ],
  },
  {
    numb: 36,
    question: "ما هي أشهر HTTP Methods؟",
    answer:
      "GET: جلب بيانات، POST: إرسال بيانات، PUT: تحديث بيانات، DELETE: حذف، PATCH: تعديل جزئي.",
    options: [
      "GET: جلب بيانات، POST: إرسال بيانات، PUT: تحديث بيانات، DELETE: حذف، PATCH: تعديل جزئي.",
      "GET و POST فقط.",
      "PUT و DELETE فقط.",
      "OPTIONS فقط.",
    ],
  },
  {
    numb: 37,
    question: "ما الفرق بين PUT و PATCH؟",
    answer: "PUT: يستبدل المورد بالكامل. PATCH: يُحدث أجزاء فقط من المورد.",
    options: [
      "PUT: يستبدل المورد بالكامل. PATCH: يُحدث أجزاء فقط من المورد.",
      "لا يوجد فرق إطلاقًا.",
      "PATCH يستبدل المورد بالكامل.",
      "PUT يُحدث أجزاء فقط.",
    ],
  },
  {
    numb: 38,
    question: "متى نستخدم DELETE؟",
    answer: "لحذف مورد (Resource) من الخادم.",
    options: [
      "لحذف مورد (Resource) من الخادم.",
      "لإضافة مورد جديد.",
      "لتحديث مورد.",
      "للحصول على مورد فقط.",
    ],
  },
  {
    numb: 39,
    question: "هل يمكن أن يحتوي GET على Body؟ ولماذا؟",
    answer:
      "من الناحية النظرية: نعم، لكنه غير مدعوم عمليًا في أغلب المتصفحات والسيرفرات، لذلك يُفترض أن يكون بدون Body.",
    options: [
      "من الناحية النظرية: نعم، لكنه غير مدعوم عمليًا في أغلب المتصفحات والسيرفرات، لذلك يُفترض أن يكون بدون Body.",
      "نعم دائمًا.",
      "لا يمكن ذلك إطلاقًا.",
      "Body مطلوب في GET.",
    ],
  },
  {
    numb: 40,
    question: "ما هو SAFE method؟ ولماذا GET يعتبر كذلك؟",
    answer:
      "SAFE تعني أن الطريقة لا تغيّر حالة السيرفر. GET آمن لأنه لا يُفترض أن يُحدِث تغييرات.",
    options: [
      "SAFE تعني أن الطريقة لا تغيّر حالة السيرفر. GET آمن لأنه لا يُفترض أن يُحدِث تغييرات.",
      "SAFE تعني أن الطريقة تغير حالة السيرفر.",
      "GET غير آمن إطلاقًا.",
      "SAFE تعني أن الطريقة تُستخدم فقط مع POST.",
    ],
  },
  {
    numb: 41,
    question: "ما هو Status Code؟",
    answer: "رمز رقمي يعبر عن نتيجة الطلب: نجاح، خطأ، إعادة توجيه، إلخ.",
    options: [
      "رمز رقمي يعبر عن نتيجة الطلب: نجاح، خطأ، إعادة توجيه، إلخ.",
      "هو عنوان السيرفر فقط.",
      "هو نوع المتصفح فقط.",
      "هو اسم الصفحة فقط.",
    ],
  },
  {
    numb: 42,
    question: "ما معنى كود 200؟",
    answer: "نجاح. الطلب تم معالجته بنجاح.",
    options: [
      "نجاح. الطلب تم معالجته بنجاح.",
      "خطأ في الطلب.",
      "إعادة توجيه.",
      "المورد غير موجود.",
    ],
  },
  {
    numb: 43,
    question: "ما معنى كود 404؟",
    answer: "الصفحة أو المورد غير موجود على السيرفر.",
    options: [
      "الصفحة أو المورد غير موجود على السيرفر.",
      "نجاح في الطلب.",
      "إعادة توجيه.",
      "خطأ داخلي في السيرفر.",
    ],
  },
  {
    numb: 44,
    question: "ما الفرق بين 301 و 302؟",
    answer: "301: إعادة توجيه دائمة. 302: إعادة توجيه مؤقتة.",
    options: [
      "301: إعادة توجيه دائمة. 302: إعادة توجيه مؤقتة.",
      "لا يوجد فرق إطلاقًا.",
      "301: خطأ داخلي. 302: نجاح.",
      "301: إعادة توجيه مؤقتة. 302: إعادة توجيه دائمة.",
    ],
  },
  {
    numb: 45,
    question: "متى يستخدم السيرفر كود 500؟",
    answer: "عند حدوث خطأ داخلي غير متوقع في السيرفر (Internal Server Error).",
    options: [
      "عند حدوث خطأ داخلي غير متوقع في السيرفر (Internal Server Error).",
      "عند نجاح الطلب.",
      "عند إعادة التوجيه.",
      "عند عدم وجود المورد.",
    ],
  },
  {
    numb: 46,
    question: "ما هو CORS ولماذا هو مهم؟",
    answer:
      "(Cross-Origin Resource Sharing) هو آلية تتحكم في من يمكنه الوصول إلى موارد السيرفر من مواقع أخرى. مهم للحماية من طلبات غير مصرح بها.",
    options: [
      "(Cross-Origin Resource Sharing) هو آلية تتحكم في من يمكنه الوصول إلى موارد السيرفر من مواقع أخرى. مهم للحماية من طلبات غير مصرح بها.",
      "آلية لتسريع تحميل الصفحات فقط.",
      "نوع من أنواع الكوكيز.",
      "طريقة لتشفير البيانات فقط.",
    ],
  },
  {
    numb: 47,
    question: "ما وظيفة هيدر Authorization؟",
    answer:
      "يُستخدم لإرسال بيانات تسجيل الدخول (Token أو Basic Auth) مع الطلب.",
    options: [
      "يُستخدم لإرسال بيانات تسجيل الدخول (Token أو Basic Auth) مع الطلب.",
      "يُستخدم لتحديد نوع الصفحة فقط.",
      "يُستخدم لتسريع الطلبات.",
      "يُستخدم لتحديد اللغة فقط.",
    ],
  },
  {
    numb: 48,
    question: "ما الفرق بين Session و Cookie في HTTP؟",
    answer:
      "Session: تُخزن على السيرفر، ويُرسل معرف الجلسة (ID) في Cookie. Cookie: تُخزن على المتصفح وتُرسل مع كل طلب.",
    options: [
      "Session: تُخزن على السيرفر، ويُرسل معرف الجلسة (ID) في Cookie. Cookie: تُخزن على المتصفح وتُرسل مع كل طلب.",
      "لا يوجد فرق إطلاقًا.",
      "Session تُخزن على المتصفح فقط.",
      "Cookie تُخزن على السيرفر فقط.",
    ],
  },
  {
    numb: 49,
    question: "كيف يتم نقل البيانات عبر HTTPS بشكل آمن؟",
    answer:
      "باستخدام تشفير SSL/TLS، الذي يحمي البيانات من التنصت والتلاعب أثناء النقل.",
    options: [
      "باستخدام تشفير SSL/TLS، الذي يحمي البيانات من التنصت والتلاعب أثناء النقل.",
      "باستخدام ضغط البيانات فقط.",
      "باستخدام كود الحالة 200.",
      "بدون أي حماية إضافية.",
    ],
  },
  {
    numb: 50,
    question: "ما هو دور الـ DNS في إرسال طلب HTTP؟",
    answer:
      "يحوّل اسم النطاق (مثل example.com) إلى عنوان IP للسيرفر حتى يتم إرسال الطلب إليه.",
    options: [
      "يحوّل اسم النطاق (مثل example.com) إلى عنوان IP للسيرفر حتى يتم إرسال الطلب إليه.",
      "يحدد نوع المتصفح فقط.",
      "يحدد كود الحالة فقط.",
      "يحدد نوع الصفحة فقط.",
    ],
  },
  {
    numb: 51,
    question: "ما هو بروتوكول HTTP؟",
    answer:
      "هو بروتوكول يُستخدم لنقل البيانات بين العميل (مثل المتصفح) والخادم على شبكة الإنترنت.",
    options: [
      "هو بروتوكول يُستخدم لنقل البيانات بين العميل (مثل المتصفح) والخادم على شبكة الإنترنت.",
      "لغة برمجة لتصميم المواقع.",
      "نظام تشغيل خاص بالسيرفر.",
      "أداة لتخزين البيانات فقط.",
    ],
  },
  {
    numb: 52,
    question: 'ما معنى أن HTTP "عديم الحالة" (stateless)؟',
    answer:
      "يعني أن كل طلب يتم بشكل مستقل، دون أن يحتفظ الخادم بأي معلومات عن الطلبات السابقة.",
    options: [
      "يعني أن كل طلب يتم بشكل مستقل، دون أن يحتفظ الخادم بأي معلومات عن الطلبات السابقة.",
      "الخادم يتذكر كل الطلبات السابقة.",
      "العميل يحتفظ بجميع البيانات.",
      "كل الطلبات مرتبطة ببعضها دائمًا.",
    ],
  },
  {
    numb: 53,
    question: "ما الفرق بين HTTP وHTTPS؟",
    answer:
      "HTTPS هو الإصدار الآمن من HTTP، يستخدم التشفير عبر بروتوكول SSL/TLS لحماية البيانات أثناء النقل.",
    options: [
      "HTTPS هو الإصدار الآمن من HTTP، يستخدم التشفير عبر بروتوكول SSL/TLS لحماية البيانات أثناء النقل.",
      "لا يوجد فرق بينهما.",
      "HTTPS أسرع فقط.",
      "HTTP يُستخدم للصور فقط.",
    ],
  },
  {
    numb: 54,
    question: "ما هي طريقة الطلب (Request Method)؟",
    answer:
      "هي نوع العملية التي يطلبها العميل، مثل GET لجلب بيانات، أو POST لإرسال بيانات.",
    options: [
      "هي نوع العملية التي يطلبها العميل، مثل GET لجلب بيانات، أو POST لإرسال بيانات.",
      "هي عنوان السيرفر.",
      "هي نوع المتصفح.",
      "هي كود الحالة فقط.",
    ],
  },
  {
    numb: 55,
    question: "اذكر ثلاث طرق شائعة لطلبات HTTP.",
    answer: "GET، POST، PUT.",
    options: [
      "GET، POST، PUT.",
      "GET، PATCH، TRACE.",
      "POST، DELETE، CONNECT.",
      "OPTIONS، HEAD، PATCH.",
    ],
  },
  {
    numb: 56,
    question: "ما وظيفة الرأس (Header) في طلب HTTP؟",
    answer:
      "يحتوي على معلومات إضافية عن الطلب، مثل نوع المحتوى المقبول أو معلومات المتصفح.",
    options: [
      "يحتوي على معلومات إضافية عن الطلب، مثل نوع المحتوى المقبول أو معلومات المتصفح.",
      "يحتوي على جسم الطلب فقط.",
      "يحتوي على كود الحالة فقط.",
      "يحتوي على عنوان السيرفر فقط.",
    ],
  },
  {
    numb: 57,
    question: "ما هو جسم الطلب (Request Body)؟",
    answer:
      "هو جزء يحتوي على بيانات تُرسل إلى الخادم، خاصة في طلبات POST وPUT.",
    options: [
      "هو جزء يحتوي على بيانات تُرسل إلى الخادم، خاصة في طلبات POST وPUT.",
      "هو عنوان السيرفر فقط.",
      "هو نوع المتصفح فقط.",
      "هو كود الحالة فقط.",
    ],
  },
  {
    numb: 58,
    question: "ماذا يعني كود الحالة 200؟",
    answer: "الطلب تم بنجاح.",
    options: [
      "الطلب تم بنجاح.",
      "المورد غير موجود.",
      "خطأ في الخادم.",
      "إعادة توجيه.",
    ],
  },
  {
    numb: 59,
    question: "ماذا يعني كود الحالة 404؟",
    answer: "الصفحة أو المورد المطلوب غير موجود.",
    options: [
      "الصفحة أو المورد المطلوب غير موجود.",
      "الطلب تم بنجاح.",
      "إعادة توجيه.",
      "نجاح جزئي.",
    ],
  },
  {
    numb: 60,
    question: "ما الفرق بين GET وPOST؟",
    answer:
      "GET يُستخدم لجلب البيانات ويظهر في عنوان URL، بينما POST يُستخدم لإرسال بيانات مخفية في جسم الطلب.",
    options: [
      "GET يُستخدم لجلب البيانات ويظهر في عنوان URL، بينما POST يُستخدم لإرسال بيانات مخفية في جسم الطلب.",
      "GET يُستخدم لإرسال بيانات حساسة.",
      "POST يُستخدم لجلب البيانات فقط.",
      "لا يوجد فرق إطلاقًا.",
    ],
  },
  {
    numb: 61,
    question: "ما هي وظيفة الرأس `User-Agent`؟",
    answer: "يحدد نوع العميل (مثل المتصفح) الذي يرسل الطلب.",
    options: [
      "يحدد نوع العميل (مثل المتصفح) الذي يرسل الطلب.",
      "يحدد نوع الخادم فقط.",
      "يحدد كود الحالة فقط.",
      "يحدد نوع الصفحة فقط.",
    ],
  },
  {
    numb: 62,
    question: "لماذا نستخدم `Host` في الرؤوس؟",
    answer: "لتحديد اسم الخادم المستهدف، وهو ضروري في HTTP/1.1.",
    options: [
      "لتحديد اسم الخادم المستهدف، وهو ضروري في HTTP/1.1.",
      "لتحديد نوع المتصفح فقط.",
      "لتحديد كود الحالة فقط.",
      "لتحديد نوع الصفحة فقط.",
    ],
  },
  {
    numb: 63,
    question: "ما فائدة `Content-Type` في الطلب؟",
    answer: "يحدد نوع البيانات المرسلة في الجسم، مثل JSON أو form-data.",
    options: [
      "يحدد نوع البيانات المرسلة في الجسم، مثل JSON أو form-data.",
      "يحدد نوع المتصفح فقط.",
      "يحدد كود الحالة فقط.",
      "يحدد اسم الخادم فقط.",
    ],
  },
  {
    numb: 64,
    question: "ما هو `Content-Length`؟",
    answer: "عدد البايتات في جسم الطلب.",
    options: [
      "عدد البايتات في جسم الطلب.",
      "عدد الرؤوس في الطلب.",
      "عدد الطلبات في الجلسة.",
      "عدد الصفحات في الموقع.",
    ],
  },
  {
    numb: 65,
    question: "ما وظيفة `Accept` في رؤوس الطلب؟",
    answer: "يُحدد أنواع المحتوى التي يقبلها العميل (مثل HTML أو JSON).",
    options: [
      "يُحدد أنواع المحتوى التي يقبلها العميل (مثل HTML أو JSON).",
      "يحدد نوع الخادم فقط.",
      "يحدد كود الحالة فقط.",
      "يحدد اسم الصفحة فقط.",
    ],
  },
  {
    numb: 66,
    question: "ما هو `Connection: keep-alive`؟",
    answer: "يطلب من الخادم الحفاظ على الاتصال مفتوحًا بعد تنفيذ الطلب.",
    options: [
      "يطلب من الخادم الحفاظ على الاتصال مفتوحًا بعد تنفيذ الطلب.",
      "يطلب من الخادم إغلاق الاتصال فورًا.",
      "يطلب من العميل إعادة الطلب.",
      "يطلب من الخادم تغيير البروتوكول.",
    ],
  },
  {
    numb: 67,
    question: 'ماذا يعني "Request Line"؟',
    answer:
      "هو السطر الأول في طلب HTTP ويحتوي على الطريقة، المسار، وإصدار البروتوكول.",
    options: [
      "هو السطر الأول في طلب HTTP ويحتوي على الطريقة، المسار، وإصدار البروتوكول.",
      "هو السطر الأخير في الطلب.",
      "هو كود الحالة فقط.",
      "هو نوع المتصفح فقط.",
    ],
  },
  {
    numb: 68,
    question: "كيف يبدو السطر الأول في طلب GET؟",
    answer: "مثل: GET /index.html HTTP/1.1",
    options: [
      "مثل: GET /index.html HTTP/1.1",
      "مثل: POST /index.html HTTP/1.1",
      "مثل: GET index.html",
      "مثل: /index.html GET HTTP/1.1",
    ],
  },
  {
    numb: 69,
    question: "ما الفرق بين HTTP/1.1 وHTTP/2؟",
    answer: "HTTP/2 أسرع، يدعم تعدد الطلبات في اتصال واحد، وضغط الرؤوس.",
    options: [
      "HTTP/2 أسرع، يدعم تعدد الطلبات في اتصال واحد، وضغط الرؤوس.",
      "HTTP/1.1 أسرع.",
      "HTTP/2 لا يدعم ضغط الرؤوس.",
      "لا يوجد فرق إطلاقًا.",
    ],
  },
  {
    numb: 70,
    question: "ما هو QUIC في HTTP/3؟",
    answer:
      "هو بروتوكول نقل بديل لـ TCP يُستخدم في HTTP/3 لتسريع الاتصالات وتحسين الأمان.",
    options: [
      "هو بروتوكول نقل بديل لـ TCP يُستخدم في HTTP/3 لتسريع الاتصالات وتحسين الأمان.",
      "هو نوع من أنواع الرؤوس.",
      "هو كود حالة جديد.",
      "هو طريقة ضغط جديدة فقط.",
    ],
  },
  {
    numb: 71,
    question: "هل يمكن استخدام fetch في JavaScript لإرسال طلب HTTP؟",
    answer: "نعم، fetch تُستخدم لإرسال واستقبال طلبات HTTP بطريقة حديثة.",
    options: [
      "نعم، fetch تُستخدم لإرسال واستقبال طلبات HTTP بطريقة حديثة.",
      "لا يمكن ذلك إطلاقًا.",
      "fetch تُستخدم فقط لجلب الصور.",
      "fetch تُستخدم فقط مع POST.",
    ],
  },
  {
    numb: 72,
    question: "في طلب POST باستخدام fetch، أين يتم إرسال البيانات؟",
    answer: "في جسم الطلب (body).",
    options: [
      "في جسم الطلب (body).",
      "في عنوان URL فقط.",
      "في الرؤوس فقط.",
      "لا يتم إرسال بيانات.",
    ],
  },
  {
    numb: 73,
    question: "ما هو نوع البيانات في الرأس application/x-www-form-urlencoded؟",
    answer: "بيانات النموذج (form) المشفرة مثل: key1=value1&key2=value2.",
    options: [
      "بيانات النموذج (form) المشفرة مثل: key1=value1&key2=value2.",
      "بيانات JSON فقط.",
      "بيانات صور فقط.",
      "بيانات نصية فقط.",
    ],
  },
  {
    numb: 74,
    question: "ما هو الهدف من استخدام Accept-Encoding؟",
    answer: "لتحديد أنواع الضغط التي يقبلها العميل، مثل gzip.",
    options: [
      "لتحديد أنواع الضغط التي يقبلها العميل، مثل gzip.",
      "لتحديد نوع الصفحة فقط.",
      "لتحديد كود الحالة فقط.",
      "لتحديد اسم الخادم فقط.",
    ],
  },
  {
    numb: 75,
    question: "ما فائدة استخدام رؤوس Accept-Language؟",
    answer: "لتحديد اللغات المفضلة لدى المستخدم مثل en-US أو ar.",
    options: [
      "لتحديد اللغات المفضلة لدى المستخدم مثل en-US أو ar.",
      "لتحديد نوع الصفحة فقط.",
      "لتحديد كود الحالة فقط.",
      "لتحديد اسم الخادم فقط.",
    ],
  },
];

const STORAGE_KEY = "mandarinQuizVocabulary";

const DEFAULT_VOCAB = [
  [
    "班",
    "ban1"
  ],
  [
    "師",
    "shi1"
  ],
  [
    "關",
    "guan1"
  ],
  [
    "中",
    "zhong1"
  ],
  [
    "灣",
    "wan1"
  ],
  [
    "一",
    "yi1"
  ],
  [
    "三",
    "san1"
  ],
  [
    "媽",
    "ma1"
  ],
  [
    "喝",
    "he1"
  ],
  [
    "七",
    "qi1"
  ],
  [
    "八",
    "ba1"
  ],
  [
    "機",
    "ji1"
  ],
  [
    "生",
    "sheng1"
  ],
  [
    "星",
    "xing1"
  ],
  [
    "今",
    "jin1"
  ],
  [
    "天",
    "tian1"
  ],
  [
    "開",
    "kai1"
  ],
  [
    "先",
    "xian1"
  ],
  [
    "英",
    "ying1"
  ],
  [
    "他",
    "ta1"
  ],
  [
    "歡",
    "huan1"
  ],
  [
    "接",
    "jie1"
  ],
  [
    "咖",
    "ka1"
  ],
  [
    "啡",
    "fei1"
  ],
  [
    "烏",
    "wu1"
  ],
  [
    "家",
    "jia1"
  ],
  [
    "沒",
    "mei2"
  ],
  [
    "還",
    "hai2"
  ],
  [
    "國",
    "guo2"
  ],
  [
    "台",
    "tai2"
  ],
  [
    "房",
    "fang2"
  ],
  [
    "茶",
    "cha2"
  ],
  [
    "十",
    "shi2"
  ],
  [
    "零",
    "ling2"
  ],
  [
    "期",
    "qi1"
  ],
  [
    "昨",
    "zuo2"
  ],
  [
    "明",
    "ming2"
  ],
  [
    "陳",
    "chen2"
  ],
  [
    "華",
    "hua2"
  ],
  [
    "王",
    "wang2"
  ],
  [
    "文",
    "wen2"
  ],
  [
    "人",
    "ren2"
  ],
  [
    "來",
    "lai2"
  ],
  [
    "回",
    "hui2"
  ],
  [
    "迎",
    "ying2"
  ],
  [
    "什",
    "shen2"
  ],
  [
    "牛",
    "niu2"
  ],
  [
    "紅",
    "hong2"
  ],
  [
    "龍",
    "long2"
  ],
  [
    "您",
    "nin2"
  ],
  [
    "好",
    "hao3"
  ],
  [
    "你",
    "ni3"
  ],
  [
    "早",
    "zao3"
  ],
  [
    "有",
    "you3"
  ],
  [
    "可",
    "ke3"
  ],
  [
    "以",
    "yi3"
  ],
  [
    "起",
    "qi3"
  ],
  [
    "我",
    "wo3"
  ],
  [
    "馬",
    "ma3"
  ],
  [
    "小",
    "xiao3"
  ],
  [
    "五",
    "wu3"
  ],
  [
    "九",
    "jiu3"
  ],
  [
    "碼",
    "ma3"
  ],
  [
    "手",
    "shou3"
  ],
  [
    "美",
    "mei3"
  ],
  [
    "李",
    "li3"
  ],
  [
    "請",
    "qing3"
  ],
  [
    "姐",
    "jie3"
  ],
  [
    "本",
    "ben3"
  ],
  [
    "奶",
    "nai3"
  ],
  [
    "水",
    "shui3"
  ],
  [
    "喜",
    "xi3"
  ],
  [
    "哪",
    "na3"
  ],
  [
    "很",
    "hen3"
  ],
  [
    "謝",
    "xie4"
  ],
  [
    "再",
    "zai4"
  ],
  [
    "見",
    "jian4"
  ],
  [
    "問",
    "wen4"
  ],
  [
    "不",
    "bu4"
  ],
  [
    "客",
    "ke4"
  ],
  [
    "氣",
    "qi4"
  ],
  [
    "對",
    "dui4"
  ],
  [
    "係",
    "xi4"
  ],
  [
    "下",
    "xia4"
  ],
  [
    "課",
    "ke4"
  ],
  [
    "是",
    "shi4"
  ],
  [
    "二",
    "er4"
  ],
  [
    "四",
    "si4"
  ],
  [
    "爸",
    "ba4"
  ],
  [
    "這",
    "zhe4"
  ],
  [
    "月",
    "yue4"
  ],
  [
    "鹿",
    "lu4"
  ],
  [
    "綠",
    "lv4"
  ],
  [
    "六",
    "liu4"
  ],
  [
    "電",
    "dian4"
  ],
  [
    "話",
    "hua4"
  ],
  [
    "號",
    "hao4"
  ],
  [
    "日",
    "ri4"
  ],
  [
    "叫",
    "jiao4"
  ],
  [
    "姓",
    "xing4"
  ],
  [
    "那",
    "na4"
  ],
  [
    "印",
    "yin4"
  ],
  [
    "度",
    "du4"
  ],
  [
    "去",
    "qu4"
  ],
  [
    "上",
    "shang4"
  ],
  [
    "要",
    "yao4"
  ],
  [
    "嗎",
    "ma0"
  ],
  [
    "了",
    "le0"
  ],
  [
    "子",
    "zi0"
  ],
  [
    "的",
    "de0"
  ],
  [
    "個",
    "ge0"
  ],
  [
    "們",
    "men0"
  ],
  [
    "麼",
    "me0"
  ],
  [
    "呢",
    "ne0"
  ]
];

let vocab = loadVocab();
let queue = [];
let current = null;
let asked = 0;
let correct = 0;

const $ = (id) => document.getElementById(id);

function loadVocab() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  const initial = DEFAULT_VOCAB.map(([character, pinyin]) => ({ character, pinyin }));
  saveVocab(initial);
  return initial;
}

function saveVocab(value = vocab) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (e) {}
}

function normalizePinyin(value) {
  return value.trim().toLowerCase().replace(/\\s+/g, "");
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  queue = shuffle(vocab);
  asked = 0;
  correct = 0;
  $("finished").hidden = true;
  $("quiz-card").hidden = false;
  nextQuestion();
}

function nextQuestion() {
  if (asked >= queue.length) {
    $("quiz-card").hidden = true;
    $("finished").hidden = false;
    $("score").textContent = `You got ${correct} / ${queue.length} correct.`;
    $("progress").textContent = `${queue.length} / ${queue.length}`;
    return;
  }

  current = queue[asked];
  checked = false;
  $("character").textContent = current.character;
  $("answer").value = "";
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("progress").textContent = `${asked} / ${queue.length}`;
  $("answer").focus();
}

function checkAnswer() {
  const answer = normalizePinyin($("answer").value);
  const expected = normalizePinyin(current.pinyin);

  if (!answer) return;

  if (answer === expected) {
    correct++;
    asked++;
    nextQuestion();
  } else {
    $("feedback").textContent = `Incorrect · ${current.pinyin}`;
    $("feedback").className = "feedback wrong";
    $("progress").textContent = `${asked + 1} / ${queue.length}`;

    setTimeout(() => {
      asked++;
      nextQuestion();
    }, 500);
  }
}

function renderVocab() {
  $("vocab-count").textContent = `${vocab.length} items`;
  const list = $("vocab-list");
  list.innerHTML = "";

  vocab.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "vocab-row";

    const char = document.createElement("span");
    char.className = "vocab-char";
    char.textContent = item.character;

    const pinyin = document.createElement("span");
    pinyin.className = "vocab-pinyin";
    pinyin.textContent = item.pinyin;

    const del = document.createElement("button");
    del.className = "vocab-delete";
    del.type = "button";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      vocab.splice(index, 1);
      saveVocab();
      renderVocab();
      startQuiz();
    });

    row.append(char, pinyin, del);
    list.appendChild(row);
  });
}

$("answer-form").addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer();
});

$("restart-btn").addEventListener("click", startQuiz);
$("again-btn").addEventListener("click", startQuiz);

$("add-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const character = $("new-character").value.trim();
  const pinyin = normalizePinyin($("new-pinyin").value);

  if (!character || !pinyin) return;

  const existing = vocab.find(item => item.character === character);
  if (existing) {
    existing.pinyin = pinyin;
  } else {
    vocab.push({ character, pinyin });
  }

  saveVocab();
  renderVocab();
  $("new-character").value = "";
  $("new-pinyin").value = "";
});

renderVocab();
startQuiz();

let vocab = [];
let queue = [];
let current = null;
let asked = 0;
let correct = 0;
let missed = [];

const $ = (id) => document.getElementById(id);

async function loadVocab() {
  try {
    const response = await fetch("vocabulary.json");

    if (!response.ok) {
      throw new Error("Failed to load vocabulary.");
    }

    vocab = await response.json();

    $("quiz-count").max = vocab.length;
    $("quiz-max").textContent = `(max ${vocab.length})`;
    $("quiz-count").value = Math.min(20, vocab.length);

    renderVocab();
    startQuiz();
  } catch (error) {
    console.error(error);
    $("feedback").textContent = "Failed to load vocabulary.";
  }
}

function normalizePinyin(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

const TONE_MARKS = {
  a: "āáǎà", e: "ēéěè", i: "īíǐì", o: "ōóǒò", u: "ūúǔù", "ü": "ǖǘǚǜ",
};

// "lv4" -> "lǜ", "me0" -> "me"
function toToneMarks(pinyin) {
  const syllable = pinyin.slice(0, -1).replace(/v/g, "ü");
  const tone = Number(pinyin.slice(-1));

  if (tone < 1 || tone > 4) {
    return syllable;
  }

  let index = syllable.search(/[ae]/);
  if (index === -1) index = syllable.indexOf("ou");
  if (index === -1) {
    const vowels = [...syllable.matchAll(/[iouü]/g)];
    index = vowels.length ? vowels[vowels.length - 1].index : -1;
  }
  if (index === -1) {
    return syllable;
  }

  const vowel = syllable[index];
  return syllable.slice(0, index) + TONE_MARKS[vowel][tone - 1] + syllable.slice(index + 1);
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
  const count = Number($("quiz-count").value);

  if (count < 1 || count > vocab.length) {
    return;
  }

  queue = shuffle(vocab).slice(0, count);
  asked = 0;
  correct = 0;
  missed = [];

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
    renderMissed();
    return;
  }

  current = queue[asked];

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

  if (!answer) {
    return;
  }

  if (answer === expected) {
    correct++;
    asked++;
    nextQuestion();
  } else {
    if (!missed.includes(current)) {
      missed.push(current);
    }

    $("feedback").textContent = `Incorrect · ${toToneMarks(current.pinyin)}`;
    $("feedback").className = "feedback wrong";
    $("progress").textContent = `${asked + 1} / ${queue.length}`;

    setTimeout(() => {
      asked++;
      nextQuestion();
    }, 2000);
  }
}

function renderMissed() {
  const list = $("missed-list");
  list.innerHTML = "";
  $("missed").hidden = missed.length === 0;

  missed.forEach((item) => {
    const row = document.createElement("div");
    row.className = "vocab-row";

    const char = document.createElement("span");
    char.className = "vocab-char";
    char.textContent = item.character;

    const pinyin = document.createElement("span");
    pinyin.className = "vocab-pinyin";
    pinyin.textContent = toToneMarks(item.pinyin);

    row.append(char, pinyin);
    list.appendChild(row);
  });
}

function renderVocab() {
  $("vocab-count").textContent = `${vocab.length} items`;

  const list = $("vocab-list");
  list.innerHTML = "";

  vocab.forEach((item) => {
    const row = document.createElement("div");
    row.className = "vocab-row";

    const char = document.createElement("span");
    char.className = "vocab-char";
    char.textContent = item.character;

    const pinyin = document.createElement("span");
    pinyin.className = "vocab-pinyin";
    pinyin.textContent = toToneMarks(item.pinyin);

    row.append(char, pinyin);
    list.appendChild(row);
  });
}

$("answer-form").addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer();
});

$("restart-btn").addEventListener("click", startQuiz);
$("again-btn").addEventListener("click", startQuiz);

loadVocab();
let vocab = [];
let queue = [];
let current = null;
let asked = 0;
let correct = 0;

const $ = (id) => document.getElementById(id);

async function loadVocab() {
  try {
    const response = await fetch("vocabulary.json");

    if (!response.ok) {
      throw new Error("Failed to load vocabulary.");
    }

    vocab = await response.json();

    $("quiz-count").max = vocab.length;
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
    $("feedback").textContent = `Incorrect · ${current.pinyin}`;
    $("feedback").className = "feedback wrong";
    $("progress").textContent = `${asked + 1} / ${queue.length}`;

    setTimeout(() => {
      asked++;
      nextQuestion();
    }, 2000);
  }
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
    pinyin.textContent = item.pinyin;

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
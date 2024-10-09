const firstContainer = document.getElementById("firstContainer");
const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const recapContainer = document.getElementById("recapContainer");
const finalScoreText = document.getElementById("finalScore");
const restartButton = document.getElementById("restartButton");
const scoreDisplay = document.getElementById("score");
const timerSpan = document.getElementById("timer");

const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    answers: ["Paris", "Londres", "Madrid", "Berlin"],
    correct: 0,
  },
  {
    question: "Combien font 2 + 2 ?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Quel âge a la ville de Bordeaux ?",
    answers: [
      "une première cité y est née au IIIe siècle av. J. -C.",
      "une première cité y est née au VIIe siècle av. J. -C.",
      "une première cité y est née au II siècle ap. J. -C.",
      "En l'an 0 au même moment que la création de la chocolatine",
    ],
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timerTime = 10;
let timerInterval;

function startQuiz() {
  firstContainer.style.display = "none"; // Masquer l'élément de démarrage
  questionContainer.style.display = "flex"; // Afficher les questions
  showQuestion();
  startTimer();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  const buttons = answerButtons.querySelectorAll("button");
  buttons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.onclick = () => selectAnswer(index);
  });
}

function showFeedback(message, type) {
  // Simple feedback à l'utilisateur sans alerte intrusive
  const feedback = document.createElement("section");
  feedback.textContent = message;
  feedback.className = type === "success" ? "success" : "error";
  document.body.appendChild(feedback);
  setTimeout(() => feedback.remove(), 1000);
}
function selectAnswer(answerIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (answerIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    showFeedback("Bonne réponse !", "success");
  } else {
    showFeedback("Mauvaise réponse.", "error");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      showQuestion();
      resetTimer();
    }, 1000); // Petite pause pour donner du temps à voir le résultat
  } else {
    setTimeout(endQuiz, 1000);
  }
}

function endQuiz() {
  questionContainer.style.display = "none";
  recapContainer.style.display = "block";
  finalScoreText.textContent = score;
  clearInterval(timerInterval);
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = score;
  recapContainer.style.display = "none";
  firstContainer.style.display = "block"; // Réafficher l'écran de démarrage
  questionContainer.style.display = "none";
}

function startTimer() {
  timerTime = 10;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerTime--;
    updateTimerDisplay();
    if (timerTime === 0) {
      clearInterval(timerInterval);
      selectAnswer(-1); // Ne pas afficher de feedback
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  startTimer();
}

function updateTimerDisplay() {
  timerSpan.textContent = timerTime;
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", resetQuiz);

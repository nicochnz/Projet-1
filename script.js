const firstContainer = document.getElementById("firstContainer");
const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const recapContainer = document.getElementById("recapContainer");
const finalScoreText = document.getElementById("finalScore");
const restartButton = document.getElementById("restartButton");
const timerSpan = document.getElementById("timer");
timerSpan.textContent = "10";
let score = 0;
let timerTime = 10;
let time;

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
];

let currentQuestionIndex = 0;

// Lancer le quiz
startButton.addEventListener("click", startQuiz);

// Permet de changer de l'interface d'accueil aux questions
startButton.addEventListener("click", () => {
  firstContainer.style.opacity = "0";
  firstContainer.style.transform = "translateX(-200%)";
  questionContainer.style.display = "block";
});

// Permet de récupérer et d'afficher le score
function updateScore() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = score;
}

function startQuiz() {
  startButton.style.display = "none";
  questionContainer.style.display = "flex";
  recapContainer.style.display = "none"; // Masquer le récapitulatif au début du quiz
  showQuestion();
  startTimer();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  const answerButtonsList = answerButtons.querySelectorAll("button");
  answerButtonsList.forEach((button, index) => {
    // J'ai pas compris
    button.textContent = currentQuestion.answers[index];
  });
}

function selectAnswer(answerIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (answerIndex === correctAnswer) {
    score++;
    updateScore();
    alert("Bonne réponse !");
  } else {
    alert("Mauvaise réponse.");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    resetTimer();
  } else {
    endQuiz();
  }
}

function startTimer() {
  time = setInterval(timer, 1000);
}

function timer() {
  timerTime--;
  timerSpan.textContent = timerTime;
  if (timerTime === 0) {
    clearInterval(time);
  }
}

function resetTimer() {
  clearInterval(time);
  timerTime = 10;
  timerSpan.textContent = timerTime;
  startTimer();
}

// Afficher le récapitulatif du quiz
function endQuiz() {
  questionContainer.style.display = "none"; // Masquer le conteneur des questions
  recapContainer.style.display = "block";
  finalScoreText.textContent = score; // Mettre à jour le score final
}

// Retour à l'accueil quand on appuie sur le bouton
restartButton.addEventListener("click", () => {
  recapContainer.style.display = "none";
  firstContainer.style.opacity = "1";
  firstContainer.style.transform = "translateX(0)";
  score = 0;
  updateScore();
  resetQuiz();
});

function resetQuiz() {
  currentQuestionIndex = 0;
  startButton.style.display = "block";
  questionContainer.style.display = "none";
}

const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");

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

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  questionContainer.style.display = "flex";
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  const answerButtonsList = answerButtons.querySelectorAll("button");
  answerButtonsList.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
  });
}

function selectAnswer(answerIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (answerIndex === correctAnswer) {
    alert("Bonne réponse !");
  } else {
    alert("Mauvaise réponse.");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert("Quiz terminé !");
    resetQuiz();
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  startButton.style.display = "block";
  questionContainer.style.display = "none";
}

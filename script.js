const playBtn = document.getElementById("startButton");
const firstContainer = document.getElementById("firstContainer");
const main = document.querySelector("main");

// Permet de changer de l'interface d'accueil au question
playBtn?.addEventListener("click", () => {
  firstContainer.style.opacity = "0";
  firstContainer.style.transform = "translateX(-200%)";
  main.style.display = "block";
});

const question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

let score = 0;
// permet de recuperer et d'afficher le score
function updateScore() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = score;
}

// Récupère tout les boutons de réponse
// function answerBtn() {
//   answer1?.addEventListener("click", () => {
//     console.log("Bonne réponse !");
//     score++;
//     updateScore();
//   });
//   answer2?.addEventListener("click", () => {
//     console.log("Mauvaise réponse");
//   });
//   answer3?.addEventListener("click", () => {
//     console.log("Mauvaise réponse");
//   });
//   answer4?.addEventListener("click", () => {
//     console.log("Mauvaise réponse");
//   });
// }

// Permet de faire valider une réponse et de passer à la suivante
function answerValidation() {
  answer1?.addEventListener("click", () => {
    alert("Bonne réponse !");
    if ((question.innerHTML = answer1)) {
      score++;
      updateScore();
      question.innerHTML = "Next Question..";
      answer1.innerHTML = "Next Answer...";
      //Pourquoi pas faire un tableau et mettre toute les
    } // questions dedans, pour les récupérer avec index[]
  });
  answer2?.addEventListener("click", () => {
    alert("Mauvaise réponse");
  });
  answer3?.addEventListener("click", () => {
    alert("Mauvaise réponse");
  });
  answer4?.addEventListener("click", () => {
    alert("Mauvaise réponse");
  });
}

answerValidation();
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

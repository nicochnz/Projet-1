import { questions, questions2 } from "./question.js";
import {
  firstContainer,
  questionContainer,
  startButton,
  questionText,
  answerButtons,
  recapContainer,
  finalScoreText,
  restartButton,
  scoreDisplay,
  timerSpan,
  descriptionQuestion,
  h2RecapContainer,
  input,
  numberQuestion,
  audio,
  soundButton,
  imgAudio,
  imgRecap,
  classementBtn,
  classementContainer,
  difficultyBtn,
  easyBtn,
  hardBtn,
  videoBordeaux,
} from "./variables.js";
classementContainer.className = "classementContainer";
document.body.appendChild(classementContainer);
recapContainer.appendChild(classementBtn);
recapContainer.appendChild(imgRecap);
imgRecap.src = "./image/painAuChocolat.jpg";
imgRecap.className = "imgRecap";
input.className = "inputName";
classementBtn.className = "button";
h2RecapContainer.className = "h2RecapContainer";
classementBtn.textContent = "Voir le classement";
input.type = "text";
input.placeholder = "Entrez votre surnom...";
firstContainer.appendChild(input);
recapContainer.appendChild(h2RecapContainer);
h2RecapContainer.style.fontSize = "2rem";
classementBtn.style.fontSize = "1rem";

let currentQuestions = questions; // Par défaut, on utilise les questions faciles
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timerTime = 20;
let isSoundOn = true;
let isRunning = false;
audio.loop = true;

//*********************** bouton difficile ***********************
difficultyBtn.addEventListener("click", function () {
  startButton.style.display = "none";
  difficultyBtn.style.display = "none";
  startButton.style.display = "inline";
});

difficultyBtn.addEventListener("click", function () {
  const difficultyVisible = easyBtn.style.display === "inline";

  if (difficultyVisible) {
    easyBtn.style.display = "none";
    hardBtn.style.display = "none";
  } else {
    easyBtn.style.display = "inline";
    hardBtn.style.display = "inline";
  }
});
//*********************** bouton difficile / facile***********************
easyBtn.addEventListener("click", function () {
  currentQuestions = questions;
  easyBtn.style.display = "inline";
  hardBtn.style.display = "none";
  difficultyBtn.style.display = "inline";
});

hardBtn.addEventListener("click", function () {
  currentQuestions = questions2;
  easyBtn.style.display = "none";
  hardBtn.style.display = "inline";
  difficultyBtn.style.display = "inline";
});

//*********************** Son ON /OFF ***********************
soundButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audio.volume = 0.3;
    isSoundOn = true;
    imgAudio.src = "image/sound-on.png";
  } else {
    audio.pause();
    isSoundOn = false;
    imgAudio.src = "image/sound-off.png";
  }
});
//*********************** Bouton Start ***********************
function startQuiz() {
  if (input.value === "") {
    alert("Veuillez écrire votre pseudo");
  } else {
    firstContainer.style.display = "none";
    questionContainer.style.display = "flex";
    videoBordeaux.style.display = "block";
    showQuestion();
    startTimer();
    videoBordeaux.style.display = "block";
  }
}

//*********************** Moment où les questions arrivent  ***********************

function showQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  numberQuestion.textContent = `Question ${currentQuestionIndex + 1} sur ${
    currentQuestions.length
  }`;
  const buttons = answerButtons.querySelectorAll("button");
  buttons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.dataset.index = index;
    button.onclick = () => selectAnswer(index);
  });
}
//*********************** Choix de la réponse  ***********************
function selectAnswer(answerIndex) {
  const correctAnswer = currentQuestions[currentQuestionIndex].correct;
  const selectedAnswerElement = document.querySelector(
    `[data-index="${answerIndex}"]`
  );
  const correctAnswerElement = document.querySelector(
    `[data-index="${correctAnswer}"]`
  );

  if (answerIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    showFeedback("Bonne réponse !", "success");
    selectedAnswerElement.style.backgroundColor = "green";

    if (isSoundOn) {
      const audioCorrect = new Audio("./music/niceJob.m4a");
      audioCorrect.play();
      audioCorrect.volume = 1.0;
    }
    pauseTimer();
  } else {
    showFeedback("Mauvaise réponse.", "error");
    selectedAnswerElement.style.backgroundColor = "red";
    correctAnswerElement.style.backgroundColor = "green";
    pauseTimer();
    if (isSoundOn) {
      const audioIncorrect = new Audio("./music/notToday.m4a");
      audioIncorrect.play();
      audioinCorrect.volume = 1.0;
    }
  }
  //*********************** Descriptif en bas des questions  ***********************
  showDescription(currentQuestions[currentQuestionIndex].description);
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    setTimeout(() => {
      descriptionQuestion.style.display = "none";
      resetAnswerColors();
      showQuestion();
      resetTimer();
    }, 8000);
  } else {
    setTimeout(endQuiz, 8000);
  }
}

function showFeedback(message, type) {
  const feedback = document.createElement("section");
  feedback.textContent = message;
  feedback.className = `feedback-message ${
    type === "success" ? "success" : "error"
  }`;
  document.body.appendChild(feedback);
  setTimeout(() => {
    feedback.remove();
  }, 8000);
}

function showDescription(description) {
  descriptionQuestion.textContent = description;
  descriptionQuestion.style.display = "block";
}

function resetAnswerColors() {
  const answerElements = document.querySelectorAll("button");
  answerElements.forEach((button) => {
    button.style.backgroundColor = "#6c0433";
  });
}
//*********************** Ce qu'il se passe à la fin du quizz ***********************
function endQuiz() {
  resetAnswerColors();
  questionContainer.style.display = "none";
  recapContainer.style.display = "block";
  descriptionQuestion.style.display = "none";
  finalScoreText.textContent = score;
  clearInterval(timerInterval);
}

input.addEventListener("input", function () {
  const userName = this.value;
  if (score >= 8) {
    imgRecap.src = "./image/Chocolatine.jpg";
    h2RecapContainer.textContent = `Félicitation ${userName}, tu fais parti de l'élite Bordelais`;
  } else if (score > 5 && score < 8) {
    h2RecapContainer.textContent = `T'es GAVE fort ${userName}`;
    imgRecap.src = "./image/Chocolatine.jpg";
  } else {
    imgRecap.src = "./image/painAuChocolat.jpg";
    h2RecapContainer.textContent = `Désolé ${userName}, t'es pas autorisé à dire chocolatine..`;
  }
});
//*********************** Pour revenir au début à la fin du quizz  ***********************
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = score;
  recapContainer.style.display = "none";
  firstContainer.style.display = "block";
  questionContainer.style.display = "none";
  input.value = "";
}
//*********************** Chronomètre ***********************
function startTimer() {
  updateTimerDisplay();
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      timerTime--;
      updateTimerDisplay();
      if (timerTime === 0) {
        clearInterval(timerInterval);
        selectAnswer(-1);
      }
    }, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 20;
  startTimer();
}

function updateTimerDisplay() {
  timerSpan.textContent = timerTime;
}

const shareBtn = document.createElement("button");

shareBtn.id = "shareBtn";

recapContainer.appendChild(shareBtn);
shareBtn.classList.add("button");
shareBtn.textContent = "Partagez votre Score";
shareBtn.style.fontSize = "1rem";

shareBtn.addEventListener("click", async () => {
  navigator.share({
    title: "Partagez votre Score",
    url: "J'ai pas d'URL",
  });
});

classementBtn.addEventListener("click", function () {
  recapContainer.style.display = "none";
  classementContainer.style.display = "block";
});

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", resetQuiz);

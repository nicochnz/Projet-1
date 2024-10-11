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
const allButton = document.querySelectorAll("button");
const descriptionQuestion = document.getElementById("description");
const h2RecapContainer = document.createElement("h2");
const input = document.createElement("input");
const numberQuestion = document.getElementById("numberQuestion");

input.type = "text";
input.placeholder = "Entrez votre surnom...";
input.className = "inputName";
input.required = "required";
firstContainer.appendChild(input);
recapContainer.appendChild(h2RecapContainer);

input.addEventListener("input", function () {
  const userName = this.value;
  h2RecapContainer.textContent = `Félicitation ${userName} !`;
});

const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    answers: ["Paris", "Bordeaux", "Lyon", "Marseille"],
    description:
      "Paris devient définitivement la capitale en 1792, malgré, des défaites militaires contraignant des gouvernements à s'exiler hors de Paris, sans enlever à la ville son statut",
    correct: 0,
  },
  {
    question: "Que représentent les mascarons ?",
    answers: [
      " Ornement d’inspiration multiple se trouvant principalement en haut des façades",
      "C'est un petit gâteau",
      "Un masque porté lors des festivals bordelais",
      "Un accessoire de mode du XVIIe siècle",
    ],
    description:
      "Bordeaux présente plus de 3 000 mascarons qui participent à l'ornementation des façades et des fontaines de la ville. ",
    correct: 0,
  },
  {
    question:
      "Qu’était le stade Chaban-Delmas avant d’être dédié au foot et au rugby ?",
    answers: [
      "Un pré où broutaient des chèvres",
      "Un vélodrome",
      "Un amphithéâtre romain",
      " Un parking pour carrosses",
    ],
    description:
      "Né en 1924, avant le stade Chaban, le premier parc des sports Lescure fut imaginé par un certain Robert Hüe, pour accueillir un grand vélodrome. ",
    correct: 1,
  },
  {
    question: "Quand est apparu le premier tramway à Bordeaux ?",
    answers: ["1932", "2003", "2000", "1880"],
    description:
      "Lors de sa mise en circulation le 4 mai 1880, la première ligne bordelaise présentait des tramways tractés par des chevaux.",
    correct: 3,
  },
  {
    question: "Qu’est donc le Palais Rohan ?",
    answers: [
      "Un château dans Le Seigneur des Anneaux",
      "L’actuelle mairie de Bordeaux.",
      "Les bâtiments composant la Place de la Bourse.",
      "Une échoppe célèbre pour ses huîtres.",
    ],
    description:
      "Palais impérial de Napoléon Ier en 1808 et palais royal en 1815 sous Louis XVIII, le palais Rohan devient hôtel de ville en 1835. ",
    correct: 1,
  },
  {
    question: "Qu’est donc le bordeluche ?",
    answers: [
      "Un sac à vin bordelais.",
      "Une danse traditionnelle bordelaise",
      "Le vieux parlé bordelais. ",
      "Une sorte de fromage.",
    ],
    description: "Le bordeluche est un registre de langue autrefois très usité à Bordeaux. Il a perdu un peu de terrain, mais beaucoup de Bordelais emploient des mots spécifiques à leur région, sans le savoir. Ca daille gavé !",
    correct: 2,
  },
  {
    question: "D'où vient le nom de Bordeaux ?",
    answers: [
      "De l’ancien nom latin Burdigala",
      "D’une légende sur les eaux du port",
      "Des bordures du fleuve",
      "D’une famille noble locale.",
    ],
    description: "« Burdigala » serait composé de deux racines aquitaniques burd- qui signifie « boueux » et de cal- qui voudrait dire « abri, crique » et signifierait à peu près « abri dans les marais » en (proto-basque). Ce nom a évolué en Bordigala, puis Bordale en basque, Bordèu en gascon et « Bordeaux » en français.",
    correct: 0,
  },
  {
    question: "Combien de ponts y a-t-il sur l’agglomération bordelaise ?",
    answers: ["3", "4", "5", "6"],
    description: "Bordeaux métropole possède huit ponts qui traversent la Garonne ; du nord au sud : le pont d'Aquitaine, le pont Jacques-Chaban-Delmas, le pont de pierre, le pont Saint-Jean, le pont ferroviaire, la passerelle Eiffel (désaffectée), le pont Simone-Veil et le pont François-Mitterrand.",
    correct: 2,
  },
  {
    question: "De quelle couleur est la Garonne sur son tronçon bordelais ?",
    answers: ["Marron", "Beige", "Blonde", "Juste gavé sale"],
    description: "blUne réaction appelée floculation entraine alors l'agglomération des particules d'argile que les courants de marée remettent en suspension.abla",
    correct: 2,
  },
  {
    question: "En quelle année l’Union Bordeaux Bègles a-t-elle été créée ?",
    answers: ["1969", "1991", "2007", "2006"],
    description: "L'Union Bordeaux Bègles né de la fusion en 2006 du Stade bordelais université club et du Club athlétique béglais. Il est basé à Bègles dans la banlieue sud de Bordeaux en Gironde.",
    correct: 3,
  },
  {
    question: "Quand a été créé le cannelé bordelais ?",
    answers: ["XVI siècle", "XVIIIe siècle", "En 2012", "IIIe siècle"],
    description: "blabla",
    correct: 1,
  },
  {
    question: "Quelle est le nom de la vague bordelaise ?",
    answers: ["Le mascaret", "Le mascara", "La mascarade", "Le masque à Ray"],
    description: "Le mascaret correspond à une brusque surélévation de l'eau d'un fleuve ou d'un estuaire provoqué par l'onde de la marée montante lors des grandes marées. Il se produit dans l'embouchure et le cours inférieur de certains cours d'eau lorsque leur courant est contrarié par le flux de la marée montante. Imperceptible la plupart du temps, il se manifeste au moment des nouvelles et pleines lunes. ",
    correct: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timerTime = 20;

function startQuiz() {
  if (input.value === "") {
    alert("Veuillez écrire votre pseudo");
  } else {
    firstContainer.style.display = "none";
    questionContainer.style.display = "flex";
    showQuestion();
    startTimer();
  }
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  const buttons = answerButtons.querySelectorAll("button");
  buttons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.dataset.index = index;
    button.onclick = () => selectAnswer(index);
  });
}

function selectAnswer(answerIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
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
  } else {
    showFeedback("Mauvaise réponse.", "error");
    selectedAnswerElement.style.backgroundColor = "red";
    correctAnswerElement.style.backgroundColor = "green";
  }

  showDescription(questions[currentQuestionIndex].description);

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      descriptionQuestion.style.display = "none";
      resetAnswerColors();
      showQuestion();
      resetTimer();
    }, 2000);
  } else {
    setTimeout(endQuiz, 1000);
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
  }, 2000);
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

function endQuiz() {
  resetAnswerColors();
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
  firstContainer.style.display = "block";
  questionContainer.style.display = "none";
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerTime--;
    updateTimerDisplay();
    if (timerTime === 0) {
      clearInterval(timerInterval);
      selectAnswer(-1);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 20;
  startTimer();
}

function updateTimerDisplay() {
  timerSpan.textContent = timerTime;
}

let totalQuestion = 12;
let currentNumber = 0;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", resetQuiz);

const playBtn = document.getElementById("play");
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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreUser = document.querySelector(".score__user");
const scorePc = document.querySelector(".score__pc");
let scoreUser1 = 0;
let scorePc1 = 0;

const optionsGame = ["rock", "paper", "scissors"];

const rockObj = {
  rock: "Empataste",
  paper: "Perdiste",
  scissors: "Ganaste",
};

const paperObj = {
  paper: "Empataste",
  rock: "Ganaste",
  scissors: "Perdiste",
};

const scissorsObj = {
  scissors: "Empataste",
  paper: "Ganaste",
  rock: "Perdiste",
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const validateWinner = (userSelection) => {
  let optionPc = optionsGame[random(0, 2)];
  let result = userSelection[optionPc];

  let gameResult = {
    optionPc,
    result,
  };

  return gameResult;
};

const updateScore = (result) => {
  if (result !== "Empataste") result === "Ganaste" ? scoreUser1++ : scorePc1++;

  scoreUser.innerHTML = `${scoreUser1}`;
  scorePc.innerHTML = `${scorePc1}`;
};

const showAlert = (option, result) => {
  const icon = {
    Ganaste: "success",
    Perdiste: "error",
    Empataste: "info",
  };

  Swal.fire({
    icon: icon[result],
    title: `${result} la pc selecciono 👆`,
    imageUrl: `./img/${option}.png`,
    imageAlt: `${option}`,
    confirmButtonText: "Aceptar",
  });
};

rock.addEventListener("click", () => {
  let gameResult = validateWinner(rockObj);

  updateScore(gameResult.result);
  showAlert(gameResult.optionPc, gameResult.result);
});

paper.addEventListener("click", () => {
  let gameResult = validateWinner(paperObj);

  updateScore(gameResult.result);
  showAlert(gameResult.optionPc, gameResult.result);
});

scissors.addEventListener("click", () => {
  let gameResult = validateWinner(scissorsObj);

  updateScore(gameResult.result);
  showAlert(gameResult.optionPc, gameResult.result);
});

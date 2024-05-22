const selectionOptions = document.querySelectorAll(".game img");
const scoreUser = document.querySelector(".score__user");
const scorePc = document.querySelector(".score__pc");
const optionsGame = ["rock", "paper", "scissors"];
let userScore = 0;
let pcScore = 0;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const validateWinner = (userSelection) => {
  let optionPc = optionsGame[random(0, 2)];
  let result;

  optionPc === userSelection
    ? (result = "Empate")
    : (userSelection === "rock" && optionPc === "scissors") ||
      (userSelection === "paper" && optionPc === "rock") ||
      (userSelection === "scissors" && optionPc === "paper")
    ? (result = "Ganaste")
    : (result = "Perdiste");

  let gameResult = {
    optionPc,
    result,
  };

  return gameResult;
};

const updateScore = (result) => {
  if (result !== "Empate") result === "Ganaste" ? userScore++ : pcScore++;

  scoreUser.innerHTML = `${userScore}`;
  scorePc.innerHTML = `${pcScore}`;
};

const showAlert = (option, result) => {
  const icon = {
    Ganaste: "success",
    Perdiste: "error",
    Empate: "info",
  };

  Swal.fire({
    icon: icon[result],
    title: `${result} la pc selecciono 👆`,
    imageUrl: `./img/${option}.png`,
    imageAlt: `${option}`,
    confirmButtonText: "Aceptar",
  });
};

const game = (userSelection) => {
  const gameResult = validateWinner(userSelection);

  updateScore(gameResult.result);
  showAlert(gameResult.optionPc, gameResult.result);
};

for (let i = 0; i < selectionOptions.length; i++) {
  selectionOptions[i].addEventListener("click", () => {
    const userSelection = selectionOptions[i].id;

    game(userSelection);
  });
}

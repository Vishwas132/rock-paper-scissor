function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function displayText(text, id) {
  const div = query(id);
  div.textContent = text;
}

function playGame() {
  if (query("#new-game")) {
    query("#new-game").remove();
  }
  rockButton.addEventListener("click", playRound);
  paperButton.addEventListener("click", playRound);
  scissorButton.addEventListener("click", playRound);
  scorePlayer = 0;
  scoreComputer = 0;
  displayText("", "#result");
  displayText("0", "#player-score");
  displayText("0", "#computer-score");
  displayText("", "#player-choice");
  displayText("", "#computer-choice");
}

function playRound(event) {
  const playerSelection = event.currentTarget.id;
  const computerSelection = getComputerChoice();
  displayText(playerSelection, "#player-choice");
  displayText(computerSelection, "#computer-choice");

  if (playerSelection === computerSelection) {
    return;
  } else if (playerSelection === "rock") {
    computerSelection === "scissor" ? scorePlayer++ : scoreComputer++;
  } else if (playerSelection === "paper") {
    computerSelection === "rock" ? scorePlayer++ : scoreComputer++;
  } else if (playerSelection === "scissor") {
    computerSelection === "paper" ? scorePlayer++ : scoreComputer++;
  }
  displayText(scorePlayer.toString(), "#player-score");
  displayText(scoreComputer.toString(), "#computer-score");

  if (scorePlayer === 5) {
    displayText("you Win!", "#result");
    restartGame();
  } else if (scoreComputer === 5) {
    displayText("You lose!", "#result");
    restartGame();
  }
}

function restartGame() {
  rockButton.removeEventListener("click", playRound);
  paperButton.removeEventListener("click", playRound);
  scissorButton.removeEventListener("click", playRound);
  const newGame = document.createElement("button");
  newGame.setAttribute("id", "new-game");
  newGame.append("New Game");
  query("body").append(newGame);
  newGame.addEventListener("click", playGame);
}

let scorePlayer = 0;
let scoreComputer = 0;
const query = function (selector) {
  return document.querySelector(selector);
};
const rockButton = query("#rock");
const paperButton = query("#paper");
const scissorButton = query("#scissor");
playGame();

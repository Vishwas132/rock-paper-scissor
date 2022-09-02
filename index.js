function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const  random = Math.floor((Math.random() * 3));
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 0;
    } else if(playerSelection === "rock") {
        return computerSelection === "scissor" ? "win" : "lose";
    } else if(playerSelection === "paper") {
        return computerSelection === "rock" ? "win" : "lose";
    } else if(playerSelection === "scissor") {
        return computerSelection === "paper" ? "win" : "lose";
    }
}

function playGame() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log("Round " + (i+1));
        console.log("Your choice: " + playerSelection);
        console.log("Computer choice: " + computerSelection);
        const roundResult = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        if(roundResult === "win") {
            scorePlayer++;
        } else if(roundResult === "lose") {
            scoreComputer++;
        }
    }
    if(scorePlayer > scoreComputer) {
        console.log("You win!");
    } else if(scorePlayer < scoreComputer) {
        console.log("You Lose!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();

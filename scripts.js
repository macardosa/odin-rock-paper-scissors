let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "paper";
    case 2:
      return "rock";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What is you choice?", "");
  return choice;
}

let playRound = () => {
  const humanChoice = getHumanChoice().toLowerCase();
  const computerChoice = getComputerChoice();
 
  if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Rock");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rocks beats scissors");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  }
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  const resultOfGame = (humanScore === computerScore) ? "It's a tie! 😐"
    : (humanScore > computerScore) ? "Bravo! You win! 🥳" 
    : "Sorry. You lose. 😄";

  // reset score counters
  humanScore = 0;
  computerScore = 0;

  alert(resultOfGame);
}

playGame();

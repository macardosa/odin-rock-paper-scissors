let humanScore = 0;
let computerScore = 0;

const MAX_ROUNDS = 5;

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

function isThereAWinner() {
  return (humanScore === MAX_ROUNDS || computerScore === MAX_ROUNDS) ? true : false;
}

let playRound = (humanChoice) => {
  const logArea = document.querySelector(".log-area");
  const computerScoreWidget = document.querySelector(".computer-score");
  const humanScoreWidget = document.querySelector(".human-score");

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    logArea.textContent = "Tie!";
    return;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    logArea.textContent = "You lose! Paper beats Rock";
    computerScore++;
    computerScoreWidget.textContent = `Computer: ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    logArea.textContent = "You win! Paper beats Rock";
    humanScore++;
    humanScoreWidget.textContent = `Computer: ${humanScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    logArea.textContent = "You win! Scissors beats Rock";
    humanScore++;
    humanScoreWidget.textContent = `Computer: ${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    logArea.textContent = "You lose! Scissors beats Paper";
    computerScore++;
    computerScoreWidget.textContent = `Computer: ${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    logArea.textContent = "You win! Rocks beats scissors";
    humanScore++;
    humanScoreWidget.textContent = `Computer: ${humanScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    logArea.textContent = "You lose! Rock beats Scissors";
    computerScore++;
    computerScoreWidget.textContent = `Computer: ${computerScore}`;
  }

  if (isThereAWinner()) {
    if (humanChoice === MAX_ROUNDS) {
      logArea.textContent = "Bravo! You win! 🥳";
    } else {
      logArea.textContent = "Sorry. You lose. 😄";
    }

    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.classList.add("play-again-btn");
    playAgainBtn.addEventListener("click", resetGame);

    logArea.appendChild(playAgainBtn);
  }
};

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  const computerScoreWidget = document.querySelector(".computer-score");
  computerScoreWidget.textContent = `Computer: ${computerScore}`;
  const humanScoreWidget = document.querySelector(".human-score");
  humanScoreWidget.textContent = `Human: ${computerScore}`;

  const logArea = document.querySelector(".log-area");
  logArea.playAgainBtn;
  logArea.textContent = "Good Luck!";
}

function playGame() {
  const choiceButtons = document.querySelectorAll(".choice-button");

  choiceButtons.forEach((btn) => {
    let humanChoice = btn.textContent.toLowerCase();
    btn.addEventListener("click", () => playRound(humanChoice));
  });
}

playGame();

let humanScore = 0;
let computerScore = 0;

const WIN_POINTS = 5;

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

function convertChoiceToEmoji(choice) {
  switch (choice) {
    case "paper":
      return "✋";
    case "rock":
      return "✊";
    case "scissors":
      return "✌️";
    default:
      return null;
  }
}

function isThereAWinner() {
  return humanScore === WIN_POINTS || computerScore === WIN_POINTS
    ? true
    : false;
}

let playRound = (humanChoice) => {
  const computerScoreWidget = document.querySelector(".computer-score");
  const humanScoreWidget = document.querySelector(".human-score");

  const computerChoice = getComputerChoice();

  // Show choices of each player
  const userChoiceWrapper = document.querySelector(".user-choice-wrapper");

  const selectedChoicesWrapper = document.createElement("div");
  selectedChoicesWrapper.classList.add("selected-choices-wrapper");

  const computerChoiceBox = document.createElement("div");
  computerChoiceBox.classList.add("round-result");

  const humanChoiceBox = document.createElement("div");
  humanChoiceBox.classList.add("round-result");

  const logArea = document.createElement("div");
  logArea.classList.add("log-area");

  if (humanChoice === computerChoice) {
    logArea.textContent = "Tie!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    logArea.textContent = "You lose! Paper beats Rock";
    computerScore++;
    computerScoreWidget.textContent = `Computer: ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    logArea.textContent = "You win! Paper beats Rock";
    humanScore++;
    humanScoreWidget.textContent = `Human: ${humanScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    logArea.textContent = "You win! Scissors beats Rock";
    humanScore++;
    humanScoreWidget.textContent = `Human: ${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    logArea.textContent = "You lose! Scissors beats Paper";
    computerScore++;
    computerScoreWidget.textContent = `Computer: ${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    logArea.textContent = "You win! Rocks beats scissors";
    humanScore++;
    humanScoreWidget.textContent = `Human: ${humanScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    logArea.textContent = "You lose! Rock beats Scissors";
    computerScore++;
    computerScoreWidget.textContent = `Computer: ${computerScore}`;
  }

  // Show results of round
  computerChoiceBox.textContent = `Computer played ${convertChoiceToEmoji(computerChoice)}`;
  humanChoiceBox.textContent = `You played ${convertChoiceToEmoji(humanChoice)}`;
  selectedChoicesWrapper.append(humanChoiceBox, computerChoiceBox);
  const previousChildren = Array.from(userChoiceWrapper.childNodes).map(
    (node) => node.cloneNode(true),
  );
  userChoiceWrapper.replaceChildren(selectedChoicesWrapper, logArea);

  const endBtnsWrapper = document.createElement("div");
  endBtnsWrapper.classList.add("end-btns-wrapper");

  if (isThereAWinner()) {
    // End game
    if (humanScore === WIN_POINTS) {
      logArea.textContent = "Bravo! You win! 🥳";
    } else {
      logArea.textContent = "Sorry. You lose. 😄";
    }

    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.classList.add("play-again-btn");
    playAgainBtn.addEventListener("click", resetGame);
    endBtnsWrapper.appendChild(playAgainBtn);

  } else {
    // Do next round
    const nextRoundBtn = document.createElement("div");
    nextRoundBtn.textContent = "Next round";
    nextRoundBtn.classList.add("next-round-btn");
    nextRoundBtn.addEventListener("click", () => {
      setRoundNumber();
      userChoiceWrapper.replaceChildren(...previousChildren);
      // reattach event listeners
      const choiceButtons = document.querySelectorAll(".choice-button");
      choiceButtons.forEach((btn) => {
        let humanChoice = btn.getAttribute("value");
        btn.addEventListener("click", () => playRound(humanChoice));
      });
    });
    endBtnsWrapper.appendChild(nextRoundBtn);
  }

  const endGameBtn = document.createElement("a");
  endGameBtn.textContent = "Exit game";
  endGameBtn.href = "./welcome.html";
  endGameBtn.classList.add("end-game-btn");
  endBtnsWrapper.appendChild(endGameBtn);
  logArea.appendChild(endBtnsWrapper);
};

function setRoundNumber(reset = false) {
  const roundNumberBox = document.querySelector(".round-number-box");
  if (reset) {
    roundNumberBox.textContent = "ROUND #1";
  } else {
    const hashIndex = roundNumberBox.textContent.indexOf("#");
    let currentRoundNumber = parseInt(
      roundNumberBox.textContent.slice(hashIndex + 1),
    );
    let nextRoundNumber = currentRoundNumber + 1;
    roundNumberBox.textContent = `ROUND #${nextRoundNumber}`;
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  const computerScoreWidget = document.querySelector(".computer-score");
  computerScoreWidget.textContent = `Computer: ${computerScore}`;
  const humanScoreWidget = document.querySelector(".human-score");
  humanScoreWidget.textContent = `Your score: ${computerScore}`;

  const logArea = document.querySelector(".log-area");
  logArea.playAgainBtn;
  logArea.textContent = "Good Luck!";

  setRoundNumber(true);
}

function playGame() {
  const choiceButtons = document.querySelectorAll(".choice-button");

  choiceButtons.forEach((btn) => {
    let humanChoice = btn.getAttribute("value");
    btn.addEventListener("click", () => playRound(humanChoice));
  });
}

playGame();

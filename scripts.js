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


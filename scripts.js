playerScore = 0;
computerScore = 0;
var choices = ["rock", "paper", "scissors"];

/* Randomly generates a computer choice */
function getComputerSelection() {
    return choices[Math.floor(Math.random() * 3)];
}

/*get users input and filters it*/
function getPlayerSelection() {
    let playerSelection = prompt("Please type in Rock, Paper or Scissors.");
    while (playerSelection == null) {
        playerSelection = prompt("Please type in Rock, Paper or Scissors.");
    }
    playerSelection = playerSelection.toLowerCase();
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = prompt(playerSelection + " isn't a valid choice. Please type in Rock, Paper or Scissors (capitalization doesn't matter).");
        while (playerSelection == null) {
            playerSelection = prompt("Please type in Rock, Paper or Scissors.").toLowerCase();
        }
        playerSelection = playerSelection.toLowerCase();
    }
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}
/*Play a single round */
function playRound() {
    computerChoice = getComputerSelection();
    playerChoice = getPlayerSelection();
}

function game() {
    playRound();
    console.log(checkWinner());
}
/*check who is the winner */
function checkWinner() {
    if (computerChoice == playerChoice) {
        return "It's a tie";
    } else if
        ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        return "You win!" + playerChoice + " beats " + computerChoice;
    } else {
        return "You lose!" + computerChoice + " beats " + playerChoice;
    }
}

game();
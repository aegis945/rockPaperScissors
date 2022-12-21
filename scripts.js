playerScore = 0;
computerScore = 0;
const choices = ["rock", "paper", "scissors"];
/*main game function that actually plays the game*/
function game() {
    for (let i = 1; i <= 5; i++) {
        if (playerScore == 3 || computerScore == 3) {
            return console.log(finalWinner());
        } else {
            playRound();
            console.log("Round " + i);
            console.log("You chose: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
            console.log("Opponent chose: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
            console.log(checkRoundWinner());
            console.log("______________________________________");
            countScores();
        }
    }
    if (playerScore === computerScore) {
        return console.log("It's a tie! Nobody won.");
    } else {
        return console.log(finalWinner());
    }
}
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

/*check who is the winner */
function checkRoundWinner() {
    if (computerChoice == playerChoice) {
        return "It's a tie!";
    } else if
        ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        return "You win this round! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase() + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    } else {
        return "You lose this round! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + " beats " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    }
}

function countScores() {
    let result = checkRoundWinner();
    if (result.includes("win")) {
        return playerScore++;
    } else if (result.includes("lose")) {
        return computerScore++;
    }
}

function finalWinner() {
    if (playerScore > computerScore) {
        return "Congratulations! You are the winner!";
    } else {
        return "You lost! Computer is the winner.";
    }
}

setTimeout(() => { game(); }, 5000);
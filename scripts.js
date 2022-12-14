var computerChoices = ["rock", "paper", "scissors"];

/* Randomly generates a computer choice */
function getComputerSelection() {
    return computerChoices[Math.floor(Math.random() * 3)];
}
computerSelection = getComputerSelection();
console.log(computerSelection);

var playerSelection = prompt("Please type in your choice.").toLowerCase();
/*Checks whether the user's choice is valid */
while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    var playerSelection = prompt(playerSelection + " isn't a valid choice. Please type in rock, paper or scissors.").toLowerCase();
}

/* */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return result = ["It's a tie"];
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return result = ["You lose! Paper beats Rock"];
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return result = ["You win! Rock beats Scissors"];
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return result = ["You win! Paper beats Rock"];
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return result = ["You lose! Scissors beat Paper"];
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return result = ["You lose! Rock beats Scissors"];
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return result = ["You win! Scissors beat Paper"];
    }
}
console.log(playRound(playerSelection, computerSelection));
const computerChoices = ["Rock", "Paper", "Scissors"];

/* Randomly generates a computer choice */
function getComputerChoice() {
    var randomChoice = Math.floor(Math.random() * 3);
    var computerSelection = computerChoices[randomChoice];
    return computerSelection;
}

var playerSelection = prompt("Please type in your choice.").toLowerCase();
/*Checks whether the user's choice is valid */
while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    var playerSelection = prompt(playerSelection + " isn't a valid choice. Please type in rock, paper or scissors.").toLowerCase();
}
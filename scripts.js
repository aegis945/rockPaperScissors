const computerChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return computerChoices[randomChoice];
}
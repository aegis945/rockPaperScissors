playerScore = 0;
computerScore = 0;
const choices = ["rock", "paper", "scissors"];
/*game starts when user clicks on an image */
function startGame() {
    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        img.addEventListener("click", e => {
            if (img.id) {
                playRound(img.id);
            }
        })
    })
}

/* Randomly generates a computer choice */
function getComputerSelection() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
    computerChoice = getComputerSelection();
    console.log(playerChoice);
    console.log(computerChoice);
    checkRoundWinner(playerChoice, computerChoice);
}


function checkRoundWinner(playerChoice, computerChoice) {
    let ul = document.getElementById("list");
    let li = document.createElement("li");

    if (computerChoice == playerChoice) {
        li.appendChild(document.createTextNode("It's a tie!"));
        ul.appendChild(li);
    } else if
        ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        li.appendChild(document.createTextNode("You win this round! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase() + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)));
        ul.appendChild(li);
    } else {
        li.appendChild(document.createTextNode("You lose this round! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + " beats " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)));
        ul.appendChild(li);
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

function logRoundResults() {

}

function finalWinner() {
    if (playerScore === computerScore) {
        return console.log("It's a tie! Nobody won.");
    } else if (playerScore > computerScore) {
        return "Congratulations! You are the winner!";
    } else {
        return "You lost! Computer is the winner.";
    }
}

startGame();
/* if (playerScore == 3 || computerScore == 3) {
    return console.log(finalWinner());
} else {
    console.log("You chose: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    console.log("Opponent chose: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
    console.log(checkRoundWinner());
    countScores();
} */
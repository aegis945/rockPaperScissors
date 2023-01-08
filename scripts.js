let playerScore = 0;
let computerScore = 0;
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
    logRoundResults(playerChoice, computerChoice);
    displayScores();
}


function logRoundResults(playerChoice, computerChoice) {
    let ul = document.getElementById("list");
    let li = document.createElement("li");

    if (computerChoice == playerChoice) {
        li.appendChild(document.createTextNode("It's a tie!"));
        ul.appendChild(li);
        document.querySelector(".roundContainer").textContent = "It's a tie!";
    } else if
        ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        li.appendChild(document.createTextNode("You win this round! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase() + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)));
        ul.appendChild(li);
        document.querySelector(".roundContainer").textContent = "You win this round!";
        playerScore++;
    } else {
        li.appendChild(document.createTextNode("You lose this round! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + " beats " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)));
        ul.appendChild(li);
        document.querySelector(".roundContainer").textContent = "You lose this round!";
        computerScore++;
    }
}

function displayScores() {
    document.querySelector(".playerScore").textContent = `Player score: ${playerScore}`;
    document.querySelector(".computerScore").textContent = `Computer score: ${computerScore}`;
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
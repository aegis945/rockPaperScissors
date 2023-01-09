let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
/*game starts when user clicks on an image */
function startGame() {
    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        img.addEventListener("click", e => {
            if (img.id === "rock" || img.id === "paper" || img.id === "scissors") {
                playRound(img.id);
            }
        })
    })
}
/* Randomly generates a computer choice */
function getComputerSelection() {
    return choices[Math.floor(Math.random() * 3)];
}
function displayComputerSelection(computerChoice) {
    if (computerChoice === "rock") {
        document.querySelector("#compRock").style.opacity = "1";
        document.querySelector("#compRock").style.transform = "translate(0,-7px)";
        setTimeout(() => {
            document.querySelector("#compRock").style.opacity = "0.5";
        }, 1500);
        setTimeout(() => {
            document.querySelector("#compRock").style.transform = "translate(0px)";
        }, 1500);

    } else if (computerChoice === "paper") {
        document.querySelector("#compPaper").style.opacity = "1";
        document.querySelector("#compPaper").style.transform = "translate(0,-7px)";
        setTimeout(() => {
            document.querySelector("#compPaper").style.opacity = "0.5";
        }, 1500);
        setTimeout(() => {
            document.querySelector("#compPaper").style.transform = "translate(0px)";
        }, 1500);

    } else if (computerChoice === "scissors") {
        document.querySelector("#compScissors").style.opacity = "1";
        document.querySelector("#compScissors").style.transform = "translate(0,-7px)";
        setTimeout(() => {
            document.querySelector("#compScissors").style.opacity = "0.5";
        }, 1500);
        setTimeout(() => {
            document.querySelector("#compScissors").style.transform = "translate(0px)";
        }, 1500);
    }
}

function displayPlayerChoice(playerChoice) {
    if (playerChoice === "rock") {
        document.querySelector("#rock").style.opacity = "1";
        document.querySelector("#rock").style.transform = "translate(0,-7px)";
        setTimeout(() => {
            document.querySelector("#rock").style.opacity = "0.5";
        }, 1500);
        setTimeout(() => {
            document.querySelector("#rock").style.transform = "translate(0px)";
        }, 1500);

    } else if (playerChoice === "paper") {
        document.querySelector("#paper").style.opacity = "1";
        document.querySelector("#paper").style.transform = "translate(0,-7px)";
        setTimeout(() => {
            document.querySelector("#paper").style.opacity = "0.5";
        }, 1500);
        setTimeout(() => {
            document.querySelector("#paper").style.transform = "translate(0px)";
        }, 1500);

    } else if (playerChoice === "scissors") {
        document.querySelector("#scissors").style.opacity = "1";
        document.querySelector("#scissors").style.transform = "translate(0,-7px)";
        setTimeout(() => {
            document.querySelector("#scissors").style.opacity = "0.5";
        }, 1500);
        setTimeout(() => {
            document.querySelector("#scissors").style.transform = "translate(0px)";
        }, 1500);
    }
}

function playRound(playerChoice) {
    /*stops game if play again button appears*/
    let stopGame = document.querySelector(".resetGame");
    if (window.getComputedStyle(stopGame).visibility === "visible") {
        return;
    }
    displayPlayerChoice(playerChoice);
    let computerChoice = getComputerSelection();
    displayComputerSelection(computerChoice);
    logRoundResults(playerChoice, computerChoice);
    displayScores();
    if (playerScore === 3 || computerScore === 3) {
        displayScores();
        finalWinner();
        resetGame();
    }
    if (document.querySelectorAll("li").length >= 5) {
        displayScores();
        finalWinner();
        resetGame();
    }
}

function logRoundResults(playerChoice, computerChoice) {
    let ol = document.getElementById("list");
    let li = document.createElement("li");
    li.setAttribute("class", "li");

    if (computerChoice == playerChoice) {
        li.appendChild(document.createTextNode("It's a tie!"));
        ol.appendChild(li);
        document.querySelector(".roundContainer").textContent = "It's a tie!";
    } else if
        ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        li.appendChild(document.createTextNode("You win this round! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase() + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)));
        ol.appendChild(li);
        document.querySelector(".roundContainer").textContent = "You win this round!";
        playerScore++;
    } else {
        li.appendChild(document.createTextNode("You lose this round! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + " beats " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)));
        ol.appendChild(li);
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
        document.querySelector(".roundContainer").textContent = "It's a tie! Nobody won.";
    } else if (playerScore > computerScore) {
        document.querySelector(".roundContainer").textContent = "Congratulations! You are the winner!";
    } else {
        document.querySelector(".roundContainer").textContent = "You lost! Computer is the winner.";
    }
}

function resetGame() {
    document.querySelector(".resetGame").style.visibility = "visible";
    const button = document.querySelector(".resetGame");
    button.addEventListener("click", () => {
        document.querySelector(".roundContainer").textContent = "Round Log";
        document.querySelector(".playerScore").textContent = "Player Score:";
        document.querySelector(".computerScore").textContent = "Computer Score:";
        playerScore = 0;
        computerScore = 0;

        let listElements = document.querySelectorAll("li");
        for (let i = 0; (li = listElements[i]); i++) {
            li.parentNode.removeChild(li);
        }
        document.querySelector(".resetGame").style.visibility = "hidden";
    })
}

startGame();
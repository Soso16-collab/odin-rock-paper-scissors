let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 1/3) {
        return "ROCK"
    }
    else if (computerChoice < 2/3) {
        return "PAPER"
    }
    else {
        return "SCISSORS"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    // Tie
    if (humanChoice === computerChoice) {
        displayResults(`You tie! ${humanChoice} is equal to ${computerChoice}`)
    }
    // Win
    else if (
        humanChoice === "ROCK" && computerChoice === "SCISSORS" || 
        humanChoice === "PAPER" && computerChoice === "ROCK" || 
        humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        displayResults(`You win! ${humanChoice} beats ${computerChoice}`)
        addScoreAndDisplay("HUMAN")
    }
    // Lost
    else if (
        humanChoice === "ROCK" && computerChoice === "PAPER" || 
        humanChoice === "PAPER" && computerChoice === "SCISSORS" || 
        humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        displayResults(`You lost! ${computerChoice} beats ${humanChoice}`)
        addScoreAndDisplay("COMPUTER")
    }
    if (humanScore === 5 || computerScore === 5) {
        endGame()
    }
}

function endGame() {
    displayResults(`You have ${
        humanScore > computerScore
            ? "won"
            : "lost"
    } the game by a score of ${humanScore} to ${computerScore}${
        humanScore > computerScore
        ? "! Congratulations!"
        : ". Good luck next time."
    }`)
    humanScore = 0
    computerScore = 0
    humanScoreDisplay.textContent = 0
    computerScoreDisplay.textContent = 0
    /*change computerchoice beats humanchoice to humanchoice is beaten by computerchoice
    */
}

const playerButtons = document.querySelector("#player-buttons")
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")
const resultsBox = document.querySelector("#results")
const humanScoreDisplay = document.querySelector("#human-score-value")
const computerScoreDisplay = document.querySelector("#computer-score-value")

playerButtons.addEventListener("click", (event) => {
    let target = event.target
    
    switch (target.id) {
        case "rock":
            playRound("ROCK", getComputerChoice())
            break
        case "paper":
            playRound("PAPER", getComputerChoice())
            break
        case "scissors":
            playRound("SCISSORS", getComputerChoice())
            break
    }
})

function displayResults(message) {
    resultsPara.textContent = message
}

function addScoreAndDisplay(scoreRecipient) {
    if (scoreRecipient === "HUMAN") {
        humanScore++
        humanScoreDisplay.textContent = humanScore
    }
    else if (scoreRecipient === "COMPUTER") {
        computerScore++
        computerScoreDisplay.textContent = computerScore
    }
}




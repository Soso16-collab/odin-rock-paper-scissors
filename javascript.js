playGame()

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
    if (humanChoice === null || humanChoice === undefined) { // This will occur if the user presses "cancel" on the prompt.
        return "CANCEL GAME"
    }
    humanChoice = humanChoice.toUpperCase() 
    // Tie
    if (humanChoice === computerChoice) {
        console.log(`You tie! ${humanChoice} is equal to ${computerChoice}`)
        return "ROUND TIED"
    }
    // Win
    else if (
        humanChoice === "ROCK" && computerChoice === "SCISSORS" || 
        humanChoice === "PAPER" && computerChoice === "ROCK" || 
        humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        return "HUMAN WON"
    }
    // Lost
    else if (
        humanChoice === "ROCK" && computerChoice === "PAPER" || 
        humanChoice === "PAPER" && computerChoice === "SCISSORS" || 
        humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
        return "COMPUTER WON"
    }
}

function playGame() {
let humanScore = 0
let computerScore = 0
for (let i = 0; i < 5; i++) {
    let roundResult = playRound(getHumanChoice(), getComputerChoice()) 
    if (roundResult === "HUMAN WON") {
    humanScore++
}
    else if (roundResult === "COMPUTER WON") {
    computerScore++
}
    else if (roundResult === "CANCEL GAME") {
        return
    }
console.log(`Your score is ${humanScore}. The computer's score is ${computerScore}.`)
}
console.log(`You have ${
    humanScore > computerScore
    ? "won"
    : humanScore < computerScore
    ? "lost"
    : "tied"
    } the game by a score of ${humanScore} to ${computerScore}!`)
}
let humanScore = 0
let computerScore = 0

playRound(getHumanChoice(), getComputerChoice())

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 1/3) {
        console.log(`ROCK is the computer's choice.`) //debug
        return "ROCK"
    }
    else if (computerChoice < 2/3) {
        console.log(`PAPER is the computer's choice.`) //debug
        return "PAPER"
    }
    else {
        console.log(`SCISSORS is the computer's choice.`) //debuggit 
        return "SCISSORS"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    if (humanChoice !== null) {
    console.log(humanChoice.toUpperCase())
    return humanChoice.toUpperCase() 
    }
}

function playRound(humanChoice, computerChoice) {
    // Tie
    if (humanChoice === computerChoice) {
        console.log(`You tie! ${humanChoice} is equal to ${computerChoice}`)
    }
    // Win
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    // Lose
    else if (humanChoice === "ROCK" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
    }
}

/* 
find out who won COMPLETED
    tie COMPLETED
    win/lose COMPLETED
log the results COMPLETED
increment score based on who won
*/
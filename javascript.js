/* 
generate value
convert value to string
return string
*/

getComputerChoice()

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 1/3) {
        console.log(`rock is the computer's choice.`)
        return "rock"
    }
    else if (computerChoice < 2/3) {
        console.log(`paper is the computer's choice.`)
        return "paper"
    }
    else {
        console.log(`scissors is the computer's choice.`)
        return "scissors"
    }
}
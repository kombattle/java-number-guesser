let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//set 3
const generateTarget = () => {
    return Math.floor(Math.random()* 10)
 }
 
const compareGuesses = (humanGuess,computerGuess,targetGuess) => {
    const humanDif = Math.abs(targetGuess - humanGuess);
    const comDif = Math.abs(targetGuess - computerGuess);
    if (humanDif < comDif) {
        return "Human Win"
    }else if (humanDif === comDif) {
        return "Human Win"
    }else {
        return "Computer Win"
    }
}


let updateScore = (Winner) => {
    if (Winner === 'human') {
        humanScore++
    }else if (Winner === 'computer') {
        computerScore++
    }
}
updateScore('computer');
updateScore('computer');
console.log(computerScore); 

let advanceRound = () => {

}
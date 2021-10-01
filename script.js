let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step up3
const generateTarget = () => {
   return Math.floor(Math.random()* 10)
}

//step 4
let compareGuesses = (humanGuess,computerGuess,targetGuess) => {
  const humanDif = Math.abs(targetGuess - humanGuess
  );
  const computerDif = Math.abs(targetGuess - computerGuess);
  if (humanDif < computerDif || humanDif === computerDif) {
    return "Human Win"
  }
  else if (humanGuess > 9 || humanGuess < 0) {
    return alert("you can put number only 0 to 9")
  }
  else {
    return "Computer Win You Noob Shit"
  }

}
// step 5

const updateScore = (Winner) => {
  if (Winner === 'human'){
    humanScore++
  }else if (Winner === 'computer'){
    computerScore++
  }
}

//step 6

const advanceRound = () => {
  currentRoundNumber++
}



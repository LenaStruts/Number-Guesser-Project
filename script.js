let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (guess, target) => {
    Math.abs(target - guess);
}

const compareGuesses = (humanGuessInput, computerGuess, target) => {
    const humanDiff = getAbsoluteDistance(humanGuessInput, target);
    const computerDiff = getAbsoluteDistance(computerGuess, target);
    return humanDiff <= computerDiff;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

const humanInputCheck = (humanGuessInput) => {
    if (humanGuessInput.value >= 0 && humanGuessInput.value <= 9) {
      return humanGuessInput;
    } else {
        alert('Please enter a value between 0 and 9!');
  }
}

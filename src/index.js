console.log('Hello console!');

const minLimit = 1;
const maxLimit = 100;


let randomNumber = Math.floor(Math.random() * maxLimit) + minLimit;
console.log('random', randomNumber, 'limit', maxLimit, minLimit);


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const resultText = document.querySelector('.resultText');


let guessCount = 1;
let startTime;
let resetButton;
guessField.focus();


function checkGuess() {
  guessSubmit.addEventListener('click', checkGuess);
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    startTime = Date.now();
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
const getResultText = (startTime, endTime, numberOfGuesses) => {
  if (numberOfGuesses === 1) {
    return 'Damn, you are a one lucky --beep--!';
  }
  return `It took ${((endTime - startTime)/1000)} seconds and
          ${numberOfGuesses} tries to guess it right.`;
};

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
  resultText.textContent = getResultText(startTime, Date.now(), guessCount);

}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * maxLimit) + minLimit;
}




/*author Johannes Jokinen*/
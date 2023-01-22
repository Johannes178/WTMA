"use strict";

const min = 1;
const max = 100;
const maxGuess = 10;

let randomNumber = Math.floor(Math.random() * max) + min;
console.log("random number ", randomNumber);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetBtn;
let startTime;

const checkGuess = (input) => {
  //console.log('checkguess input', input);
  let userGuess;
  //-1: too low, 0: correct, +1: too high
  if (typeof input === "object") {
    userGuess = Number(guessField.value);
  } else {
    userGuess = input;
  }

  if (guessCount === 1) {
    startTime = Date.now();
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    const endTime = Date.now();
    const Time = Math.floor((endTime - startTime) / 1000);
    lastResult.textContent =
      "Congratulations! You got it right! It took you: " +
      guessCount +
      " guesees. Your time: " +
      Time +
      " seconds!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
    return 0;
  } else if (guessCount === maxGuessCount) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
      return -1;
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
      return 1;
    }
    //return false;
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
};

const StartGame = () => {
  guessSubmit.addEventListener("click", checkGuess);
};

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetBtn = document.createElement("button");
  resetBtn.textContent = "Start new game";
  document.body.appendChild(resetBtn);
  resetBtn.addEventListener("click", resetGame);
};

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const p of resetParas) {
    p.textContent = "";
  }

  resetBtn.parentNode.removeChild(resetBtn);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * maxLimit) + minLimit;
};

export { StartGame, checkGuess, resetGame };

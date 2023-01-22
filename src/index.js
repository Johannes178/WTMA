console.log("Hello console!");
// Best approach would be halving this is called binary search.
// No matter which number from 1 to 100 the computer has selected,
// you should be able to fin the number in at most 7 guesses with this
// technique (log2(array_size) = log2(100) = 6,6 ≈ 7).

// const binary = (val, arr) => {
//   let lower = 0;
//   let upper = arr.lenght -1;

//   while (lower<= upper) {
//     const middle = lower + Math.floor((upper - lower)/ 2);

//     if (val === arr[middle]) {
//       return middle;
//     }
//     if (val < arr[middle]) {
//       upper = middle -1;
//     } else {
//       lower = middle +1;
//     }
//   }
// };

import { startGame, checkGuess, resetGame } from "/modules/numberGuess.js";

startGame();

const gameTest = () => {
  let guessCounter = 0;
  let myGuess = 50;
  let gameOver = false;
  while (!gameOver) {
    //console.log(myGuess);
    let correctGuess = checkGuess(myGuess);
    guessCounter++;
    if (correctGuess === 0) {
      gameOver = true;
      resetGame();
    } else if (correctGuess < 0) {
      //myGuess += 25; //too low, ask 75
      myGuess++;
    } else {
      //myGuess -= 25; //too high, ask 25
      myGuess--;
    }
  }
  return guessCounter;
};
//gameTest();

let DONE = (RIGHT = 0),
  HIGH = 1,
  LOW = -1;

const compGuess = (low, high) => {
  let g = Math.floor((low + high) / 2);
  let result = getResult(g);
  switch (result) {
    case RIGHT:
      return DONE;
    case LOW:
      return compGuess(g + 1, high);
    case HIGH:
      return compGuess(low, g - 1);
  }
};

let guessCounts = [];
for (let i = 0; i < 10; i++) {
  guessCounts.push(gameTest());
}
console.log("guess counts", guessCounts);
//guessCounts.length; arrayn koko

let maxGuessCount = Math.max(...guessCounts);
console.log(maxGuessCount);

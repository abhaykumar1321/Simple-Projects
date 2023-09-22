let randomNumber = parseInt(Math.random() * 100 + 1);

const userInputNumber = document.querySelector("#guessfield");
const submitButton = document.querySelector("#submitted");

const previousGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const startOver = document.querySelector(".result");

const lowAndHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const num = parseInt(userInputNumber.value);
    guessValidation(num);
  });
}

function guessValidation(guess) {
  //checks if user giving correct value or not
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number");
  } else if (guess > 100) {
    alert("Please Enter a Valid Number Less Than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over!, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkingTheGuess(guess);
    }
  }
}

function checkingTheGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high!`);
  }
}

function displayGuess(guess) {
  userInputNumber.value = "";
  previousGuess.innerHTML += `${guess}  `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowAndHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInputNumber.value = "";
  userInputNumber.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game </h2>'`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    previousGuess.innerHTML = "";
    remainingGuess.innerHTML = `${11 - numGuess}`;
    userInputNumber.removeAttribute("disabled");
    startOver.removeChild("p");
    playGame = true;
  });
}

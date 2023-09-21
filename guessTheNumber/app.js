const randomNumber = parseInt(Math.random() * 100 + 1);

const userInputNumber = document.querySelector("#guessfield");
const submitButton = document.querySelector("#submitted");

const previousGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");

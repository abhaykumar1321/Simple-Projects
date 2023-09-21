# Creating a theme swither/background color changer using DOM

## Project Link

[Click Here](www.google.com)

# Solution Code

```Javascript
const allbuttons = document.querySelectorAll(".button");
const pageBody = document.querySelector("body");

allbuttons.forEach(function (buttons) {
  buttons.addEventListener("click", function (event) {
    /* if (event.target.id === "grey") {
      pageBody.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "red") {
      pageBody.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "green") {
      pageBody.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      pageBody.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "black") {
      pageBody.style.backgroundColor = event.target.id;
    } */

    // using switch case for the same

    switch (event.target.id) {
      case "grey":
        pageBody.style.backgroundColor = event.target.id;
        break;
      case "red":
        pageBody.style.backgroundColor = event.target.id;
        break;
      case "green":
        pageBody.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        pageBody.style.backgroundColor = event.target.id;
        break;
      case "black":
        pageBody.style.backgroundColor = event.target.id;
        break;

      default:
        pageBody.style.backgroundColor = "white";
        break;
    }
  });
});



```

#Project 2 BMI Calculator

```Javascript

const formValue = document.querySelector("form");
formValue.addEventListener("submit", function (event) {
  event.preventDefault();
  const heightValue = parseInt(document.querySelector("#height").value);
  const weightValue = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector(".result");

  if (heightValue === "" || heightValue < 0 || isNaN(heightValue)) {
    results.innerHTML = `Please Enter a valid height: ${heightValue}`;
  } else if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
    results.innerHTML = `Please Enter a valid width: ${weightValue}`;
  } else {
    const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
      2
    );
    results.innerHTML = `<span>${bmi}</span>`;
    const calculatedDetails = document.querySelector(".calculate");

    if (bmi <= 20) {
      calculatedDetails.innerHTML = "You are under weight";
    } else if (bmi > 20 && bmi <= 40) {
      calculatedDetails.innerHTML = "You are fit boyy";
    } else {
      calculatedDetails.innerHTML = "ALert : You need to workout";
    }
  }
});


```

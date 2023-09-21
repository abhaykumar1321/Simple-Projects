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

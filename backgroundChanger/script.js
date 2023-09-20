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

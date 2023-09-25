/* document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("Clicked Inside ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("clicked on owl");
    e.stopPropagation();
  },
  false
);

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Google Clicked");
  },
  false
); */

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.parentNode.removeChild(removeIt);
    }
  },
  false
);

const newTime = document.getElementById("time");

setInterval(function () {
  let actualTime = new Date();
  newTime.innerHTML = actualTime.toLocaleTimeString();
}, 1000);

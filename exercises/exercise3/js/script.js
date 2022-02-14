const DISPLAYPOINTS = document.querySelector("#counter");
const ADD = document.querySelectorAll(".add");
const REMOVE = document.querySelectorAll(".substract");
const WIN = document.querySelector("#winningMsg");

let points = 0;

ADD.forEach((btn) => {
  btn.addEventListener("click", function () {
    points += 20;
    this.style.display = "none";

    updateCounter();
    pointChecker();
  });
});

REMOVE.forEach((btn) => {
  btn.addEventListener("click", function () {
    points -= 20;
    this.style.display = "none";
    updateCounter();
    pointChecker();
  });
});

function updateCounter() {
  DISPLAYPOINTS.textContent = `Points: ${points}`;
}

// check points
function pointChecker() {
  if (points == 100) {
    WIN.style.display = "block";
  }
}

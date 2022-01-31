const squareA = document.querySelector("#a");
const squareB = document.querySelector("#b");
const squareC = document.querySelector("#c");
const screenBKG = document.querySelector("#grid");
let pointer = 0;
const plus = document.querySelector("#plus");
const displayTxt = document.querySelector("#displayText");

// on click A
squareA.onclick = function () {
  console.log("clcked");
  // turn it red
  this.style.backgroundColor = "red";

  // make B appear
  squareB.style.display = "block";
};

// on click B
squareB.onclick = function () {
  console.log("clcked");
  // turn it red
  this.style.backgroundColor = "red";
  // make C appear
  squareC.style.display = "block";
};

// on mouse over B
squareB.onmouseover = function () {
  // turn it blue
  this.style.backgroundColor = "blue";
};

// on button click
squareC.onclick = function () {
  // turn bkg black
  screenBKG.style.backgroundColor = "black";

  // increase pointer by 10
  pointer += 10;
  displayTxt.textContent = `Number of clicks: ${pointer}`;
};

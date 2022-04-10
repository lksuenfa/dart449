const textContainer = document.querySelector("#textContainer");
const value = document.querySelector("#wasteValue");
const plusSign = document.querySelector("#increase");
const minusSign = document.querySelector("#decrease");

let initialVal = 50;
const increment = 10;
const MAXVAL = 100;
const MINVAL = 0;
const GOOD_ANSWER = 30;

const congrats_text =
  "Exactly, globally only a third of food waste come from the consumer side. ";

plusSign.addEventListener("click", () => {
  if (initialVal < MAXVAL) {
    initialVal += increment;

    value.innerHTML = initialVal + "%";
  }

  if (initialVal === MAXVAL) {
    plusSign.style.opacity = "30%";
  }

  if (initialVal === GOOD_ANSWER) {
    value.style.color = "#bf0607";

    textContainer.innerHTML = congrats_text;
    plusSign.style.display = "none";
    minusSign.style.display = "none";
  }
});

minusSign.addEventListener("click", () => {
  if (initialVal > MINVAL) {
    initialVal -= increment;
    value.innerHTML = initialVal + "%";
  }

  if (initialVal === MINVAL) {
    minusSign.style.opacity = "30%";
  }

  if (initialVal === GOOD_ANSWER) {
    value.style.color = "#bf0607";
    textContainer.innerHTML = congrats_text;
    plusSign.style.display = "none";
    minusSign.style.display = "none";
  }
});

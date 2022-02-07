const FISH = document.querySelector("#fish");
const FLIP_UP = "assets/images/fish1.png";
const FLIP_DOWN = "assets/images/fish2.png";
const INSTRUCTIONS = document.querySelector("#instructions");
let count = 0;

fish.addEventListener("click", animate);

function animate() {
  console.log("click fish");

  // increase count on click
  count++;
  console.log(count);

  // if count is even, flipper down
  if (count % 2 == 0) {
    console.log("even");
    FISH.src = FLIP_DOWN;
  }
  // if count is odd, flipper up
  else {
    console.log("odd");
    FISH.src = FLIP_UP;
  }

  //increase fish size depending on number of clicks count
  // and change instructions text

  // > 10
  if (count > 10 && count < 20) {
    FISH.style.width = "30%";

    INSTRUCTIONS.textContent = "just a little bit more";
  }
  // > 20
  else if (count >= 20 && count < 30) {
    FISH.style.width = "50%";

    INSTRUCTIONS.textContent = "Stanley is getting bigger";
  }
  // > 30
  else if (count >= 30 && count < 40) {
    FISH.style.width = "70%";

    INSTRUCTIONS.textContent = "Bigger and happier";
  }
  // > 40
  else if (count >= 40 && count < 50) {
    FISH.style.width = "90%";

    INSTRUCTIONS.textContent = "Congratulations! Stanley is a big fish now";
  }
}

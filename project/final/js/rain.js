let canvas = document.querySelector("#rain");
let context;
let rainfall = [];
const RAIN_INTENSITY = 70;

let trigger = document.querySelector("#s6");

window.onload = function () {
  context = canvas.getContext("2d");

  // create rain
  for (let i = 0; i < RAIN_INTENSITY; i++) {
    let raindrop = new Raindrop(canvas.width, canvas.height, context);
    rainfall.push(raindrop);
  }

  trigger.addEventListener("mouseover", () => {
    requestAnimationFrame(animate);
  });
};

function animate() {
  // reset canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < RAIN_INTENSITY; i++) {
    rainfall[i].draw();
    rainfall[i].move();
  }
  requestAnimationFrame(animate);
}

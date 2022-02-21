// Detect request animation frame
let scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
const elementsToShow = document.querySelectorAll(".show-on-scroll");
const square = document.querySelectorAll(".square");
const scene = document.querySelector("#scene5");
let random;
let randomColor;

// change colour after set interval
let changeColor = setInterval(function () {
  // random colour
  // https://www.delftstack.com/howto/javascript/generate-random-color-using-javascript/
  random = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = "#" + random;
}, 1);

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }

    square.forEach(function (shape) {
      if (isElementInViewport(element)) {
        shape.style.display = "block";
      }
    });
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

square.forEach(function (shape) {
  shape.addEventListener("click", function () {
    console.log("click");
    scene.style.background = randomColor;
  });
});

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

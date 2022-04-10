"use strict";

let tomatoes = [];
let fiveTomatoes = {
  container: document.querySelector("#fiveTomatoes"),
  image: "assets/pictures/tomatoes-05.png",
  imageRotten: "assets/pictures/tomatoes-06.png",
  numTomatoes: 5,
};

let numSlider = document.querySelector("#numSlider");
let range = document.querySelector("#range");
let rectangle = document.querySelector("#sliderImg");
let rectWidth = rectangle.style.width;

let rottenTomato = document.querySelector("#tomato4");
// display 4 tomatoes
for (let i = 0; i < fiveTomatoes.numTomatoes - 1; i++) {
  let id = "tomato" + i;
  tomatoes[i] = displayImg(
    fiveTomatoes.container,
    fiveTomatoes.image,
    id,
    "tomato"
  );
}

// edit slider
range.oninput = function () {
  numSlider.innerHTML = this.value;
  // rectWidth as a % of the screensize
  rectWidth = (this.value / 1089) * window.innerWidth;
  rectangle.style.width = rectWidth + "px";
};

// display Image
function displayImg(container, image, id, newClass) {
  let img = document.createElement("img");
  img.src = image;
  img.setAttribute("id", id);
  img.setAttribute("class", newClass);
  container.appendChild(img);
}

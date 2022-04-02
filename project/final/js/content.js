"use strict";

let tomatoes = [];
let fiveTomatoes = {
  container: document.querySelector("#fiveTomatoes"),
  image: "assets/pictures/tomato-01.png",
  imageRotten: "assets/pictures/tomato-02.png",
  numTomatoes: 5,
};

window.onload = function () {
  let rottenTomato = document.querySelector("#tomato4");
  // 5th tomato has a different image
  // tomatoes[fiveTomatoes.numTomatoes] = displayImg(
  //   fiveTomatoes.container,
  //   fiveTomatoes.imageRotten,
  //   "tomato" + tomatoes.length,
  //   "tomato animate"
  // );

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
};
// display Image
function displayImg(container, image, id, newClass) {
  let img = document.createElement("img");
  img.src = image;
  img.setAttribute("id", id);
  img.setAttribute("class", newClass);
  container.appendChild(img);
}

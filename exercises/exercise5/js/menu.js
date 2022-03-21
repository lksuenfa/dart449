const closeBtn = document.querySelector("#closebtn");
const openBtn = document.querySelector("#openbtn");
const menu = document.querySelector("#menu");
const section = document.querySelectorAll(".navigateToSection");

// open btn, slide from left
openBtn.addEventListener("click", () => {
  // console.log("click");
  menu.style.width = "100%";
});

// close btn, slide
closeBtn.addEventListener("click", () => {
  menu.style.width = "0%";
});

// close menu if clicking on a section id from the same page
section.forEach((item) => {
  item.addEventListener("click", () => {
    menu.style.width = "0%";
    menu.style.transition = "0s";
  });
});

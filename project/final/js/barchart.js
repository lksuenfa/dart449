const barchartSections = document.querySelectorAll(".chart");

const production = document.querySelector("#production");
const processing = document.querySelector("#processing");
const manufacturing = document.querySelector("#manufacturing");
const distribution = document.querySelector("#distribution");
const retail = document.querySelector("#retail");
const household = document.querySelector("#household");
const hri = document.querySelector("#hri");

const category = document.querySelector("#category");
const volume = document.querySelector("#volume");
const percentage = document.querySelector("#percentage");

const requestURL = "../assets/data/avoidable-waste.json";
const request = new XMLHttpRequest();

let wasteData;

// load JSON file
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = () => {
  wasteData = request.response;
  barchart();
  barchartInteraction();
};

function barchart() {
  let screenHeight = window.innerHeight * 0.9;

  production.style.height = wasteData.data[0].percentage * screenHeight + "px";

  processing.style.height = wasteData.data[1].percentage * screenHeight + "px";

  manufacturing.style.height =
    wasteData.data[2].percentage * screenHeight + "px";

  distribution.style.height =
    wasteData.data[3].percentage * screenHeight + "px";

  retail.style.height = wasteData.data[4].percentage * screenHeight + "px";

  household.style.height = wasteData.data[5].percentage * screenHeight + "px";

  hri.style.height = wasteData.data[6].percentage * screenHeight + "px";
}

function barchartInteraction() {
  // change colour to lime green on hovering
  barchartSections.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "#d4d80e";
    });
  });

  production.addEventListener("mouseover", () => {
    category.innerHTML = wasteData.data[0].type;
    volume.innerHTML = wasteData.data[0].volume + " " + wasteData.units.volume;
    percentage.innerHTML =
      "0" + wasteData.data[0].percentage * 100 + wasteData.units.percentage;
  });

  processing.addEventListener("mouseover", () => {
    category.innerHTML = wasteData.data[1].type;
    volume.innerHTML = wasteData.data[1].volume + " " + wasteData.units.volume;
    percentage.innerHTML =
      wasteData.data[1].percentage * 100 + wasteData.units.percentage;
  });

  manufacturing.addEventListener("mouseover", () => {
    category.innerHTML = wasteData.data[2].type;
    volume.innerHTML = wasteData.data[2].volume + " " + wasteData.units.volume;
    percentage.innerHTML =
      wasteData.data[2].percentage * 100 + wasteData.units.percentage;
  });

  distribution.addEventListener("mouseover", () => {
    category.innerHTML = wasteData.data[3].type;
    volume.innerHTML = wasteData.data[3].volume + " " + wasteData.units.volume;
    percentage.innerHTML =
      "0" + wasteData.data[3].percentage * 100 + wasteData.units.percentage;
  });

  retail.addEventListener("mouseover", () => {
    category.innerHTML = wasteData.data[4].type;
    volume.innerHTML = wasteData.data[4].volume + " " + wasteData.units.volume;
    percentage.innerHTML =
      wasteData.data[4].percentage * 100 + wasteData.units.percentage;
  });

  household.addEventListener("mouseover", () => {
    category.innerHTML = wasteData.data[5].type;
    volume.innerHTML = wasteData.data[5].volume + " " + wasteData.units.volume;
    percentage.innerHTML =
      wasteData.data[5].percentage * 100 + wasteData.units.percentage;
  });

  hri.addEventListener("mouseover", () => {
    category.innerHTML = wasteData.data[6].type;
    volume.innerHTML = wasteData.data[6].volume + " " + wasteData.units.volume;
    percentage.innerHTML =
      wasteData.data[6].percentage * 100 + wasteData.units.percentage;
  });

  // reset
  barchartSections.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      // item.style.backgroundColor = "#025b6d";
    });
  });
}

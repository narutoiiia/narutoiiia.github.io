"use strict";

const themeLink = document.querySelector("link[rel=stylesheet]");

const imageArray = ["QuestSpawn.png", "QuestInterface.png"];

const zoneImageArray = ["Zone1.png", "Zone2.png"];

let currentIndex = 0;
let currentIndex2 = 0;

function toggleTheme() {
  themeLink.href = themeLink.href.endsWith("light.css")
    ? "dark.css"
    : "light.css";
}

function changeImage(imageElement, imageArray, index) {
  imageElement.style.opacity = 0;
  setTimeout(() => {
    index = index === 0 ? 1 : 0;
    imageElement.src = imageArray[index];
    imageElement.style.opacity = 1;
  }, 500);
}

function startImageSlider(imageElement, imageArray, index) {
  setInterval(() => changeImage(imageElement, imageArray, index), 10000);
}

const questImage = document.getElementById("QuestImg");
startImageSlider(questImage, imageArray, currentIndex);

const zone = document.getElementById("zone");
startImageSlider(zone, zoneImageArray, currentIndex2);

const button = document.getElementById("style-toggle");
button.addEventListener("click", toggleTheme);

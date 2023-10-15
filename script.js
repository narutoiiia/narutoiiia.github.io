"use strict";

function toggleTheme() {
  var theme = document.getElementsByTagName("link")[0];

  if (theme.getAttribute("href") == "light.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "light.css");
  }
}
var button = document.getElementById("style-toggle");
button.addEventListener("click", toggleTheme);

var questImage = document.getElementById("QuestImg");
var imageArray = ["QuestSpawn.png", "QuestInterface.png"];

var currentIndex = 1;

function changeImage() {
  questImage.style.opacity = 0;
  setTimeout(function () {
    if (currentIndex == 0) {
      questImage.src = imageArray[currentIndex];
      currentIndex = 1;
    } else {
      questImage.src = imageArray[currentIndex];
      currentIndex = 0;
    }
    questImage.style.opacity = 1;
  }, 500);
}

function startImageSlider() {
  setInterval(changeImage, 10000);
}

startImageSlider();

var imageArray2 = ["Zone1.png", "Zone2.png"];
var zone = document.getElementById("zone");
var currentIndex2 = 1;
function changeImage2() {
  zone.style.opacity = 0;
  setTimeout(function () {
    if (currentIndex == 0) {
      zone.src = imageArray2[currentIndex2];
      currentIndex2 = 1;
    } else {
      zone.src = imageArray2[currentIndex2];
      currentIndex2 = 0;
    }
    zone.style.opacity = 1;
  }, 500);
}
setInterval(changeImage2, 10000);

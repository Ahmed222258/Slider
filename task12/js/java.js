var i = document.getElementById("th");
const imgs = document.getElementsByClassName("imgg");
const ai = Array.from(imgs);
console.log(ai);
var currentIndexSlide = 0;
var io = document.getElementById("item");
var r = document.getElementById("next");
var l = document.getElementById("prev");

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (eventInfo) {
    // light.style.display = "flex";

    var imgSrc = eventInfo.target.src;
    console.log(imgSrc);
    io.style.backgroundImage = `url(${imgSrc})`;
    currentIndexSlide = ai.indexOf(eventInfo.target);
    console.log(currentIndexSlide);
  });
}

r.addEventListener("click", next);
function next() {
  currentIndexSlide++;
  if (currentIndexSlide == ai.length) {
    currentIndexSlide = 0;
  }
  console.log(currentIndexSlide);
  io.style.backgroundImage = `url(${ai[currentIndexSlide].src})`;
  console.log(ai[currentIndexSlide]);
}

l.addEventListener("click", previous);

function previous() {
  currentIndexSlide--;
  if (currentIndexSlide < 0) {
    currentIndexSlide = ai.length - 1;
  }
  console.log(currentIndexSlide);
  io.style.backgroundImage = `url(${ai[currentIndexSlide].src})`;
  console.log(ai[currentIndexSlide]);
}
document.addEventListener("keydown", function (rr) {
  if (rr.keyCode == 39) {
    next();
  }
});

document.addEventListener("k")

document.addEventListener("keydown", function (rr) {
  if (rr.keyCode == 37) {
    previous();
  }
});

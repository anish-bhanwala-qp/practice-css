const content = document.querySelector(".content");
const prevButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
const images = document.querySelectorAll(".image");

const WIDTH = 450;
const imageCount = images.length;
let currentIndex = 0;

let timeout;

const startCarousel = () => {
  currentIndex++;
  if (currentIndex === imageCount) {
    currentIndex = 0;
  }

  content.style.left = `-${WIDTH * currentIndex}px`;

  timeout = setTimeout(startCarousel, 2000);
};

const showPrev = () => {
  clearTimeout(timeout);

  // go to index back as in startCarousel we increment
  // currentIndex to get next slide

  if (currentIndex === 0) {
    currentIndex = imageCount - 2;
  } else {
    currentIndex -= 2;
  }

  startCarousel();
};

const showNext = () => {
  clearTimeout(timeout);
  startCarousel();
};

startCarousel();

prevButton.addEventListener("click", showPrev);
nextButton.addEventListener("click", showNext);

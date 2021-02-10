const slideImages = document.querySelectorAll(".slide-image");
const arrowUp = document.querySelector(".fa-arrow-up");
const arrowDown = document.querySelector(".fa-arrow-down");
const slidesContainer = document.querySelector(".slides-container");
const slideLeftContainer = document.querySelector(".slide-left-container");

let activeIndex = 0;

arrowUp.addEventListener("click", () => {
  activeIndex = activeIndex === slideImages.length - 1 ? 0 : activeIndex + 1;

  slidesContainer.style.top = `-${window.innerHeight * activeIndex}px`;
  slideLeftContainer.style.top = `-${
    window.innerHeight * (slideImages.length - activeIndex - 1)
  }px`;
});

arrowDown.addEventListener("click", () => {
  activeIndex = activeIndex === 0 ? slideImages.length - 1 : activeIndex - 1;
  slidesContainer.style.top = `-${window.innerHeight * activeIndex}px`;
  slideLeftContainer.style.top = `-${
    window.innerHeight * (slideImages.length - activeIndex - 1)
  }px`;
});

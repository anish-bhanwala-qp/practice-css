const imageUrls = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];
const container = document.querySelector(".js-container");
const btnLeft = document.querySelector(".js-btn-left");
const btnRight = document.querySelector(".js-btn-right");

let activeSlideIndex = 0;

const displayImages = () => {
  imageUrls.forEach((url) => {
    const div = document.createElement("div");
    div.classList.add("slide");
    div.style.backgroundImage = `url('${url}')`;

    container.appendChild(div);
  });

  setSlideActive(activeSlideIndex);
};

const setSlideActive = (slideIndex) => {
  document.querySelectorAll(".slide").forEach((div) => {
    div.classList.remove("active");
  });
  const selectedSlideDiv = document.querySelectorAll(".slide")[slideIndex];
  selectedSlideDiv.classList.add("active");
  document.body.style.backgroundImage = selectedSlideDiv.style.backgroundImage;
};

const slideRight = () => {
  if (activeSlideIndex + 1 === imageUrls.length) {
    return;
  }

  activeSlideIndex++;
  setSlideActive(activeSlideIndex);
};

const slideLeft = () => {
  if (activeSlideIndex === 0) {
    return;
  }

  activeSlideIndex--;
  setSlideActive(activeSlideIndex);
};

displayImages();
btnRight.addEventListener("click", slideRight);
btnLeft.addEventListener("click", slideLeft);

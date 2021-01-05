const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let blur = 30;
let interval;
let loadingCount = 0;
window.addEventListener("load", () => {
  bg.style.filter = `blur(${blur}px)`;

  interval = setInterval(() => {
    // 1 percent of 30 is 0.3
    blur -= 0.3;
    bg.style.filter = `blur(${blur}px)`;

    loadingCount++;
    if (loadingCount <= 100) {
      loadingText.innerText = `${loadingCount}%`;
      // First convert loadingCount to a value between 0 and 1.
      // Next reverse the opacity value e.g. 1 is 0 and 0 is 1
      loadingText.style.opacity = 1 - loadingCount / 100;
    }

    if (blur <= 0) {
      clearInterval(interval);
    }
  }, 50); // 1 percent of 5000ms is 50ms
});

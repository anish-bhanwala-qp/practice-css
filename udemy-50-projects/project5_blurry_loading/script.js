const body = document.getElementsByTagName("body")[0];
const counter = document.querySelector(".js-counter");

window.addEventListener("load", () => {
  body.classList.add("countdown");
  let count = 0;
  let transitionDurationMs = 5000;
  let onePercent = transitionDurationMs / 100;
  let interval = setInterval(() => {
    count++;
    console.log(count);
    counter.innerText = `${count}%`;
    if (count >= 100) {
      clearInterval(interval);
      counter.style.display = "none";
    }
  }, onePercent);
});

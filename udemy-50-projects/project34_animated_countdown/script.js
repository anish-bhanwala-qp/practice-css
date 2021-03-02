const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const countEl = container.querySelector(".js-count");
const countdownContainer = container.querySelector(".countdown");
const containerReplay = container.querySelector(".container-replay");

const onReplay = () => {
  containerReplay.classList.add("hidden");
  let count = 3;
  const runCountdown = () => {
    countEl.innerText = count;
    countdownContainer.classList.remove("hidden");
    if (count >= 0) {
      setTimeout(runCountdown, 1000);
    } else {
      countdownContainer.classList.add("hidden");
      containerReplay.classList.remove("hidden");
    }
    count--;
  };

  runCountdown();
};

btn.addEventListener("click", onReplay);

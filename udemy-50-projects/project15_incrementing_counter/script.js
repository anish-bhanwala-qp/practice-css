const countEls = document.querySelectorAll(".js-count");

countEls.forEach((countEl) => {
  setupCounter(countEl);
});

function setupCounter(countEl) {
  const count = +countEl.innerText;
  const increments = count / 100;

  let currentCount = 0;
  countEl.innerText = currentCount;
  const interval = setInterval(() => {
    currentCount += increments;
    countEl.innerText = Math.round(currentCount);

    if (currentCount >= count) {
      clearInterval(interval);
      countEl.innerText = count;
      console.log("timeout cleared " + count);
    }
  }, 10);
}

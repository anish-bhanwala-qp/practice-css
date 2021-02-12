const card = document.querySelector(".card");
const clickCount = document.querySelector(".click-count");

let count = 0;

const displayHeart = (x, y) => {
  const heart = document.createElement("span");
  heart.style = `position: fixed; top: ${y}px; left: ${x}px;`;
  heart.classList.add("animate");
  heart.classList.add("heart");

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 500);

  clickCount.innerText = `You liked it ${++count} times`;
};

card.addEventListener("dblclick", (event) =>
  displayHeart(event.clientX, event.clientY)
);
card.addEventListener("touchend", (event) => {
  const { pageX, pageY } = event.changedTouches[0];
  displayHeart(pageX, pageY);
});

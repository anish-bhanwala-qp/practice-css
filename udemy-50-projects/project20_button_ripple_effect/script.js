const btn = document.querySelector(".js-ripple");
const span = document.querySelector("js-ripple .circle");

btn.addEventListener("click", (event) => {
  const { clientX, clientY } = event;
  const buttonTop = event.target.offsetTop;
  const buttonLeft = event.target.offsetLeft;

  const xInside = clientX - buttonLeft;
  const yInside = clientY - buttonTop;

  const span = document.createElement("span");
  span.classList.add("ripple");
  span.style.top = `${yInside}px`;
  span.style.left = `${xInside}px`;

  event.target.appendChild(span);

  setTimeout(() => {
    circle.remove();
  }, 500);
});

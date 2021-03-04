const container = document.querySelector(".container");

const colors = ["red", "purple", "organge", "green", "blue"];

const addSquares = (count) => {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseenter", onMouseenter);
    div.addEventListener("mouseleave", onMouseleave);
    container.appendChild(div);
  }
};

const onMouseenter = (event) => {
  const div = event.target;
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  div.classList.add("active");
  div.style.backgroundColor = color;
  div.style.boxShadow = `0 0 10px ${color}`;
};

const onMouseleave = (event) => {
  const div = event.target;
  div.classList.remove("active");
  div.style.backgroundColor = "";
  div.style.boxShadow = "";
};

addSquares(414);

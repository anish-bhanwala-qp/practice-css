const canvas = document.querySelector(".canvas");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const clear = document.querySelector(".clear");
const pencilSize = document.querySelector(".pencil-size");
const colorPicker = document.querySelector(".color-picker");

const MAX_SIZE = 50;
const MIN_SIZE = 5;
const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let x = null;
let y = null;
let mousePressed = false;

const updateSize = () => {
  pencilSize.innerText = size;
};

const drawCircle = (x, y) => {
  ctx.fillStyle = color;
  ctx.moveTo(x, y);
  ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};

colorPicker.addEventListener("change", () => {
  color = colorPicker.value;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

increment.addEventListener("click", () => {
  if (size < MAX_SIZE) {
    size += MIN_SIZE;
  }

  updateSize();
});

decrement.addEventListener("click", () => {
  if (size > MIN_SIZE) {
    size -= MIN_SIZE;
  }

  updateSize();
});

const getX = (e) => {
  return e.clientX - e.target.offsetLeft + window.scrollX;
};

const getY = (e) => {
  return e.clientY - e.target.offsetTop + window.scrollY;
};

const updateCoordinates = (e) => {
  x = getX(e);
  y = getY(e);
};

canvas.addEventListener("mousedown", (e) => {
  mousePressed = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (!mousePressed) return;

  x = x || getX(e);
  y = y || getY(e);

  drawLine(x, y, getX(e), getY(e));
  x = getX(e);
  y = getY(e);
  drawCircle(x, y);
});

canvas.addEventListener("mouseup", () => {
  mousePressed = false;
  x = null;
  y = null;
});

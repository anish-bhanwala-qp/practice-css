const totalQuantityEl = document.querySelector(".js-total-quantity");
const totalRemainingEl = document.querySelector(".js-total-remaining");
const totalConsumedEl = document.querySelector(".js-total-consumed");
const remainingQuantityEl = document.querySelector(
  ".js-total-remaining__quantity"
);
const glassesContainerEl = document.querySelector(".js-glasses");
const consumedQuantityEl = document.querySelector(".js-consumed-quantity");

const goal = 2;
const oneGlass = 0.25;
const totalGlasses = goal / oneGlass;
const oneGlassHeight = 320 / totalGlasses;

const initialize = () => {
  totalQuantityEl.innerText = goal;
  remainingQuantityEl.innerText = goal;

  addGlasses(totalGlasses);
};

const addGlasses = (totalGlasses) => {
  for (let i = 0; i < totalGlasses; i++) {
    const glassEl = document.createElement("div");
    glassEl.classList.add("glass");
    glassEl.innerHTML = "250 <br/> ml " + (i + 1);
    glassEl.addEventListener("click", (event) => {
      onGlassClick(event, i + 1);
    });

    glassesContainerEl.appendChild(glassEl);
  }
};

const updateQuantities = () => {
  const filledGlasses = document.querySelectorAll(".glass.full").length;

  const glassesConsumed = filledGlasses;
  const glassesRemaining = totalGlasses - glassesConsumed;

  const quantityConsumed = glassesConsumed * oneGlass;
  const quantityConsumedPercentage = (quantityConsumed / goal) * 100;
  const quantityRemaining = goal - quantityConsumed;

  totalConsumedEl.style.height = `${glassesConsumed * oneGlassHeight}px`;
  totalRemainingEl.style.height = `${glassesRemaining * oneGlassHeight}px`;
  consumedQuantityEl.innerText = quantityConsumedPercentage + "%";
  remainingQuantityEl.innerText = quantityRemaining + "L";
};

const onGlassClick = (event, glassNumber) => {
  const glassEl = event.target;
  const isGlassFull = glassEl.classList.contains("full");

  const nextGlasNumber = glassNumber + 1;
  if (isGlassFull) {
    if (isNextGlassFull(nextGlasNumber)) {
      emptyGlasses(nextGlasNumber);
    } else {
      emptyGlass(glassEl);
    }
  } else {
    fillGlasses(glassNumber);
  }

  updateQuantities();
};

const isNextGlassFull = (nextGlassNumber) => {
  if (nextGlassNumber >= totalGlasses) {
    return false;
  }

  const nextGlass = document.querySelectorAll(".glass")[nextGlassNumber - 1];
  return nextGlass.classList.contains("full");
};

const fillGlass = (glassEl) => {
  glassEl.classList.add("full");
};

const emptyGlass = (glassEl) => {
  glassEl.classList.remove("full");
};

const emptyGlasses = (startGlassNumber) => {
  const allGlasses = document.querySelectorAll(".glass");
  for (let i = startGlassNumber - 1; i < allGlasses.length; i++) {
    const glassEl = allGlasses[i];
    emptyGlass(glassEl);
  }
};
const fillGlasses = (lastGlassNumber) => {
  const allGlasses = document.querySelectorAll(".glass");
  for (let i = 0; i < lastGlassNumber; i++) {
    const glassEl = allGlasses[i];
    fillGlass(glassEl);
  }
};

initialize();

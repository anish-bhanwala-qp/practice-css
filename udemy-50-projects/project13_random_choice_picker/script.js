const choiceInput = document.querySelector(".js-choice-input");
const choiceContainer = document.querySelector(".js-choice-container");

const createChoiceElements = (choices) => {
  const fragment = new DocumentFragment("div");
  choices.forEach((choiceText) => {
    const span = document.createElement("span");
    span.classList.add("choice");
    span.innerText = choiceText;
    fragment.appendChild(span);
  });

  choiceContainer.innerHTML = "";
  choiceContainer.appendChild(fragment);
};

choiceInput.addEventListener("keyup", (event) => {
  const text = choiceInput.value;

  const choices = text
    .trim()
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t);

  const isEnter = event.keyCode === 13 || event.key === "Enter";
  if (isEnter) {
    startRandomizer(choices);
    return;
  }

  createChoiceElements(choices);
});

const randomlySelectOne = (allChoices) => {
  const randomIndex = Math.round(Math.random() * allChoices.length);
  allChoices.forEach((c) => {
    if (c.classList.contains("selected")) {
      c.classList.remove("selected");
    }
  });

  allChoices[randomIndex].classList.add("selected");
};

const startRandomizer = (choices) => {
  if (choices.length <= 1) {
    alert("Please enter at least two choices");
    return;
  }

  choiceInput.value = "";
  choiceInput.disabled = true;

  const allChoices = choiceContainer.querySelectorAll(".choice");

  let iterations = Math.max(allChoices.length * 3, 15);
  const interval = setInterval(() => {
    iterations--;
    randomlySelectOne(allChoices);
    if (iterations <= 0) {
      clearInterval(interval);
      choiceInput.disabled = false;
    }
  }, 100);
};

let currentStep = 1;

const prevButton = document.querySelector(".js-prev-button");
const nextButton = document.querySelector(".js-next-button");

prevButton.addEventListener("click", () => {
  const currentStepSpan = document.querySelectorAll(".step")[currentStep - 1];
  currentStepSpan.classList.remove("completed");

  currentStep--;

  if (currentStep === 1) {
    prevButton.disabled = true;
  }
  nextButton.disabled = false;
});

nextButton.addEventListener("click", () => {
  const nextStepSpan = document.querySelectorAll(".step")[currentStep];
  nextStepSpan.classList.add("completed");

  currentStep++;

  if (currentStep === 4) {
    nextButton.disabled = true;
  }

  prevButton.disabled = false;
});

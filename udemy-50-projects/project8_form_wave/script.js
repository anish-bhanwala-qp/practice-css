const emailLetters = document.querySelectorAll(".js-email-form-group .letter");
const passwordLetters = document.querySelectorAll(
  ".js-password-form-group .letter"
);
const formInupts = document.querySelectorAll(".js-form-input");

formInupts.forEach((formInput) => {
  formInput.addEventListener("focus", () => {
    formInput.parentElement.classList.add("active");
  });

  formInput.addEventListener("blur", () => {
    formInput.parentElement.classList.remove("active");
  });
});

const setupLetterTransition = (elements) => {
  const transitionDurationMs = 300;
  const incrementMs = 50;

  let delayDurationMs = 0;
  elements.forEach((element) => {
    element.style.transitionDelay = `${delayDurationMs}ms`;
    delayDurationMs += incrementMs;
  });
};

setupLetterTransition(emailLetters);
setupLetterTransition(passwordLetters);

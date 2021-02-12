const autoText = document.querySelector(".auto-text");
const speedInput = document.querySelector("#speed");

const text = "We Love Programming!";

let speed = 1;
let charIndex = 0;

const startAutoText = () => {
  setTimeout(() => {
    if (charIndex === text.length) {
      charIndex = 0;
      autoText.innerText = "";
    }

    let char = text[charIndex++];
    char = char === " " ? "&nbsp;" : char;
    autoText.innerHTML = autoText.innerText + char;
    startAutoText();
  }, 1000 / (speed * 3));
};

speedInput.addEventListener("change", () => {
  speed = +speedInput.value;
});

startAutoText();

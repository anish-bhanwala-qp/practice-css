const form = document.querySelector(".form");
const lengthInput = document.querySelector("#length");
const uppercaseInput = document.querySelector("#uppercase");
const lowercaseInput = document.querySelector("#lowercase");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const passwordSpan = document.querySelector(".password");
const copyBtn = document.querySelector(".copy-btn");

const upperCaseAsciiRange = [65, 90];
const lowerCaseAsciiRange = [97, 122];
const numbersAsciiRange = [48, 57];
const specialCharsAsciiRange = [33, 47];

const allAsciiRange = [
  upperCaseAsciiRange,
  lowerCaseAsciiRange,
  numbersAsciiRange,
  specialCharsAsciiRange,
];

const asciiRanges = [
  {
    input: lowercaseInput,
    range: [97, 122],
  },
  {
    input: uppercaseInput,
    range: [65, 90],
  },
  {
    input: numbersInput,
    range: [48, 57],
  },
  {
    input: symbolsInput,
    range: [33, 47],
  },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const length = +lengthInput.value;
  passwordSpan.innerText = "";
  const anyChecked = asciiRanges.findIndex((r) => r.input.checked) > -1;

  if (!anyChecked) return;

  let password = "";
  for (let i = 0; i < length; ) {
    for (let j = 0; j < asciiRanges.length; j++) {
      const asciiRange = asciiRanges[j];
      if (asciiRange.input.checked) {
        password += String.fromCharCode(
          randomInRange(asciiRange.range[0], asciiRange.range[1])
        );

        i++;
        if (i >= length) {
          break;
        }
      }
    }
  }

  passwordSpan.innerText = password;

  return false;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordSpan.innerText);
});

const randomInRange = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};

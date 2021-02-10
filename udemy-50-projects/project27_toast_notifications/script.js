const notifyBtn = document.querySelector(".notify-btn");
const toastContainer = document.querySelector(".toast-container");

let messageCount = 0;

const numberInWords = [
  "one",
  "second",
  "third",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

notifyBtn.addEventListener("click", () => {
  if (messageCount === 10) return;

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = "Message " + numberInWords[messageCount++];

  const messageType = Math.round(Math.random() * 2);
  switch (messageType) {
    case 0:
      toast.classList.add("warning");
      break;
    case 1:
      toast.classList.add("error");
      break;
    default:
      toast.classList.add("success");
  }

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
    messageCount--;
  }, 2000);
});

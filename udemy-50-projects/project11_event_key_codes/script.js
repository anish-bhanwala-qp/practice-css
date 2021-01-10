const startMsg = document.querySelector(".js-start-msg");
const container = document.querySelector(".js-container");
const eventCode = document.querySelector(".js-event-code");
const eventKeyCode = document.querySelector(".js-event-key-code");
const eventKey = document.querySelector(".js-event-key");

window.addEventListener("keydown", (event) => {
  startMsg.style.display = "none";
  container.style.display = "flex";

  eventCode.innerText = event.code;
  eventKey.innerText = event.key;
  eventKeyCode.innerText = event.keyCode;
});

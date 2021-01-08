const buttons = document.querySelectorAll(".js-btn");
const audioElements = document.querySelectorAll(".js-audio");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const audioElement = button.querySelector(".js-audio");
    audioElements.forEach((otherAudioElement) => {
      otherAudioElement.pause();
      otherAudioElement.currentTime = 0;
    });

    audioElement.play();
  });
});

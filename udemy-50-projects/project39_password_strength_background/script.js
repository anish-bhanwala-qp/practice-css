document.querySelector("#password").addEventListener("keyup", (e) => {
  const blur = Math.max(8 - e.target.value.length, 0) * 1.5;
  document.querySelector("#background").style.filter = `blur(${blur}px)`;
});

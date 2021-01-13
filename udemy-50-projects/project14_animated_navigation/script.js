const nav = document.querySelector(".js-nav");
const navToggleBtn = document.querySelector(".js-nav__toggle-btn");

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

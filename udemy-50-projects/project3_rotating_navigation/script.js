const navOpenToggle = document.querySelector(".js-nav-open-toggle");
const navCloseToggle = document.querySelector(".js-nav-close-toggle");
const navToggleContainer = document.querySelector(".js-nav-toggle-container");
const mainContainer = document.querySelector(".js-main-container");
const navMenu = document.querySelector(".js-nav-menu");

navOpenToggle.addEventListener("click", () => {
  navToggleContainer.classList.add("open");
  navToggleContainer.classList.remove("close");
  mainContainer.classList.add("nav-open");
  navMenu.classList.add("open");
});

navCloseToggle.addEventListener("click", () => {
  navToggleContainer.classList.remove("open");
  navToggleContainer.classList.add("close");
  mainContainer.classList.remove("nav-open");
  navMenu.classList.remove("open");
});

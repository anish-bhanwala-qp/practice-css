const searchInput = document.querySelector(".js-search-input");
const searchButton = document.querySelector(".js-search-button");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  if (searchInput.classList.contains("active")) {
    searchInput.focus();
  }
});

const toggleIcons = document.querySelectorAll(".js-toggle-icon");

toggleIcons.forEach((toggleIcon) => {
  toggleIcon.addEventListener("click", () => {
    toggleIcon.parentElement.classList.toggle("open");
    if (toggleIcon.parentElement.classList.contains("open")) {
      toggleIcon.classList.remove("fa-chevron-down");
      toggleIcon.classList.add("fa-times-circle");
    } else {
      toggleIcon.classList.add("fa-chevron-down");
      toggleIcon.classList.remove("fa-times-circle");
    }
  });
});

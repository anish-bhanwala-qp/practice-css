const toggleCheckboxes = document.querySelectorAll(".toggle-checkbox");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggleCheckboxes.forEach((toggleCheckboxEl) => {
  toggleCheckboxEl.addEventListener("change", (event) => {
    if (good.checked && cheap.checked && fast.checked) {
      if (good === event.target) {
        fast.checked = false;
      }
      if (cheap === event.target) {
        good.checked = false;
      }
      if (fast === event.target) {
        cheap.checked = false;
      }
    }
  });
});

const mainHeader = document.querySelector(".js-main-header");
const body = document.body;

/* 
    if height > window.height + 300px -> compact else normal
*/

document.addEventListener("scroll", function (e) {
  const isCompact = window.scrollY > 200;
  if (isCompact && !mainHeader.classList.contains("compact")) {
    mainHeader.classList.add("compact");
  } else if (!isCompact && mainHeader.classList.contains("compact")) {
    mainHeader.classList.remove("compact");
  }
});

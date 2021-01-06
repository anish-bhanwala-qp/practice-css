const cards = document.querySelectorAll(".card");

function toggleCards() {
  const tirggerBottom = window.innerHeight * 0.8;

  cards.forEach((card) => {
    const pos = card.getBoundingClientRect();
    const boxTop = pos.top;

    if (boxTop < tirggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", toggleCards);

toggleCards();

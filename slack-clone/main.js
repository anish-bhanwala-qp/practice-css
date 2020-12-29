const expandedSearchCloseIcon = document.querySelector(
  ".js-expanded-search-close"
);
const expandedSearchContainer = document.querySelector(
  ".js-expanded-search-container"
);
const expandedSearchInput = document.querySelector(".js-search-expanded-input");
const globalSearchInput = document.querySelector(".js-global-search-input");
const backdrop = document.querySelector(".backdrop");
const messageInput = document.querySelector(".js-input-message");
const messageInputContainer = document.querySelector(
  ".js-message-input__container"
);

const hideExpandedSearch = () => {
  expandedSearchContainer.classList.remove("open");
  backdrop.classList.remove("open");
};

backdrop.addEventListener("click", hideExpandedSearch);

globalSearchInput.addEventListener("click", () => {
  expandedSearchContainer.classList.add("open");
  expandedSearchInput.focus();
  backdrop.classList.add("open");
});

expandedSearchCloseIcon.addEventListener("click", hideExpandedSearch);

messageInput.addEventListener("focus", () => {
  messageInputContainer.classList.toggle("focus");
});

messageInput.addEventListener("blur", () => {
  messageInputContainer.classList.toggle("focus");
});

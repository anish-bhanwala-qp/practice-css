const expandedSearchCloseIcon = document.querySelector(
  ".js-expanded-search-close"
);
const expandedSearchContainer = document.querySelector(
  ".js-expanded-search-container"
);
const expandedSearchInput = document.querySelector(".js-search-expanded-input");
const globalSearchInput = document.querySelector(".js-global-search-input");
const backdrop = document.querySelector(".backdrop");

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

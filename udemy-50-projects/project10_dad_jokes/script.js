const joke = document.querySelector(".js-joke");
const btn = document.querySelector(".js-btn");

const startLoading = () => {
  btn.disabled = true;
  btn.innerText = "Loading...";
};

const finishLoading = () => {
  btn.disabled = false;
  btn.innerText = "Get Another Joke";
};

const fetchJoke = () => {
  startLoading();

  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://icanhazdadjoke.com/");
  httpRequest.setRequestHeader("Accept", "text/plain");
  httpRequest.responseText = "text/plain";

  httpRequest.addEventListener("load", () => {
    joke.innerHTML = httpRequest.responseText;
    finishLoading();
  });

  httpRequest.addEventListener("error", () => {
    joke.innerHTML = `<span class="error">Error loading joke. Try to refresh the page.</span>`;
    finishLoading();
  });

  httpRequest.send();
};

btn.addEventListener("click", () => {
  fetchJoke();
});

fetchJoke();

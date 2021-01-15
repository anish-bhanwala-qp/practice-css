const container = document.querySelector(".js-container");
const searchEl = document.querySelector(".js-search");
const API_KEY = "e433022000286921fbfa52b1d3adbd72";
const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

let movies = [];

const onSearch = (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const searchText = (event.target.value || "").trim().toLowerCase();

  populateMovies(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}`
  );
};

const populateMovies = async (url) => {
  container.innerHTML = "Loading...";
  const data = await fetchMovies(url);
  movies = data.results;

  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  movies.forEach((movieData) => {
    fragment.appendChild(createMovieElement(movieData));
  });

  container.appendChild(fragment);
};

const createMovieElement = (movieData) => {
  const { original_title, poster_path, overview, vote_average } = movieData;

  const movieEl = document.createElement("div");
  movieEl.classList.add("movie");
  movieEl.dataset.movieTitle = original_title;

  const movieImgEl = document.createElement("img");
  movieImgEl.classList.add("movie-img");
  movieImgEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w342${poster_path}`
  );
  movieImgEl.setAttribute("alt", original_title);
  movieEl.appendChild(movieImgEl);

  const footerEl = document.createElement("div");
  footerEl.classList.add("movie-footer");
  movieEl.appendChild(footerEl);

  const titleEl = document.createElement("span");
  titleEl.classList.add("movie-title");
  titleEl.innerText = original_title;
  footerEl.appendChild(titleEl);

  const ratingEl = document.createElement("span");
  ratingEl.classList.add("movie-rating");
  if (vote_average >= 8) {
    ratingEl.classList.add("good");
  }
  ratingEl.innerText = vote_average;
  footerEl.appendChild(ratingEl);

  const descEl = document.createElement("p");
  descEl.classList.add("movie-desc");
  descEl.innerHTML = `<span class="movie-desc__title">Overview</span> ${overview}`;
  movieEl.appendChild(descEl);

  return movieEl;
};

const fetchMovies = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

populateMovies(POPULAR_MOVIES_URL);
searchEl.addEventListener("keyup", onSearch);

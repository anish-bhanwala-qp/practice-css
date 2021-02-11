const searchInput = document.querySelector(".search-input");
const searchResult = document.querySelector(".search-result");

searchInput.addEventListener("keyup", async (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const username = event.target.value;
  if (!username) {
    return;
  }

  event.target.value = "";

  const response = await fetchUserDetails(username);
  searchResult.style = "";

  if (response.status === 200) {
    const userDetails = await response.json();
    const repos =
      userDetails.public_repos > 0 ? await fetchUserRepos(username) : [];
    repos.splice(5);

    displaySuccessResult(userDetails, repos);
  } else {
    displayErrorResult();
  }
});

const displayErrorResult = () => {
  searchResult.innerHTML =
    '<h1 class="error">No profile with this username</h1>';
};

const displaySuccessResult = (userDetails, repos) => {
  searchResult.innerHTML = `
    <div
        class="profile-image"
        style="
          background-image: url('${userDetails.avatar_url}');
        "
      ></div>
      <div class="user-details">
        <h1 class="name">${userDetails.name}</h1>
        <p class="description">Some information about user</p>
        <div class="stats-list">
          <span class="stats">${userDetails.followers} Followers</span>
          <span class="stats">${userDetails.following} Following</span>
          <span class="stats">${userDetails.public_repos} Repos</span>
        </div>
        <div class="latest-repos">
        ${repos.reduce(
          (result, currentValue) =>
            result + `<span class="repo">${currentValue.name}</span>`,
          ""
        )}          
        </div>
      </div>
    `;
};

const fetchUserDetails = (username) => {
  const url = `https://api.github.com/users/${username}`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });
};
const fetchUserRepos = (username) => {
  const url = `https://api.github.com/users/${username}/repos`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

fetchUserDetails("anishbhanwala");

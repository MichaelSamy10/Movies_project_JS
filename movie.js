document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  fetchMovieDetails(movieId);
});

function fetchMovieDetails(movieId) {
  fetch(`https://imdb-top-100-movies.p.rapidapi.com/${movieId}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "100306f41bmsh24f93624e79327fp1d3bbbjsnbd8880ef2f1b",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // const movie = data.find((m) => m.rank == movieId);
      const movieTitle = document.getElementById("movie-title");
      const movieDetails = document.getElementById("movie-details");

      movieTitle.innerText = data.title;
      movieDetails.innerHTML = `
            <img src="${data.image}" alt="${data.title}" class="img-fluid">
            <p class="mt-5"><strong>Rating:</strong> ${data.rating}</p>
            <p><strong>Rank:</strong> ${data.rank}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Release Date:</strong> ${data.year}</p>
        `;
    })
    .catch((error) => console.error("Error fetching movie details:", error));
}

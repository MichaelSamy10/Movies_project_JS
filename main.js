$(document).ready(function () {
  fetchMovies();
});

async function fetchMovies() {
  const url = "https://imdb-top-100-movies.p.rapidapi.com/";

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "100306f41bmsh24f93624e79327fp1d3bbbjsnbd8880ef2f1b",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // setupPagination(data);
      // const moviesList = document.getElementById("movies-list");
      // data.forEach((movie) => {
      //   const movieCard = createMovieCard(movie);
      //   moviesList.appendChild(movieCard);
      // });
      displayMovies(data);
    });
}

function setupPagination(data) {
  $("#pagination-container").pagination({
    dataSource: data,
    pageSize: 10,
    callback: function (data, pagination) {
      displayMovies(data);
    },
  });
}

function displayMovies(data) {
  const moviesList = document.getElementById("movies-list");

  data.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesList.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6 mb-4";

  const card = document.createElement("div");
  card.className = "card h-100 cursor-pointer";

  const img = document.createElement("img");
  img.src = movie.image;
  img.className = "card-img-top";
  img.alt = movie.title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const link = document.createElement("a");
  link.className = "link-underline link-underline-opacity-0";
  // link.href = `movie.html?id=${encodeURIComponent(movie.rank)}`;
  link.href = `movie.html?id=${movie.id}`;
  console.log(movie.id);
  link.target = "_blank";

  const title = document.createElement("h4");
  title.className = "card-title";
  title.innerText = movie.title;

  const rank = document.createElement("p");
  rank.className = "card-text";
  rank.innerText = `Rank: ${movie.rank}`;

  cardBody.appendChild(title);
  cardBody.appendChild(rank);
  link.appendChild(img);
  link.appendChild(cardBody);
  card.appendChild(link);
  col.appendChild(card);
  return col;
}
//https://movies-api14.p.rapidapi.com/shows

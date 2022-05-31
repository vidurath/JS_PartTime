function getMovie() {
  //   const movieRequest = "http://www.omdbapi.com/?i=tt3896198&apikey=8fd2baca";
  const searchBox = document.getElementById("search-box");
  const movieRequest = `http://www.omdbapi.com/?t=${searchBox.value}&apikey=8fd2baca`;

  if (searchBox.value.trim() === "") {
    alert("Please type a movie name");
    searchBox.value = "";
    searchBox.focus();
    return;
  }

  $.ajax({
    url: movieRequest,
    method: "GET",
  }).then(function (response) {
    loadMovieData(response);
  });
}

function loadMovieData(movie) {
  let title = document.getElementById("title");
  let poster = document.getElementById("poster");
  let genre = document.getElementById("genre");
  let actor = document.getElementById("actor");
  let description = document.getElementById("description");
  let linkToImdb = document.getElementById("view-imdb");
  let rating = document.getElementById("rating");
  let card = document.getElementById("mycard");

  card.removeAttribute("hidden");
  title.innerText = movie.Title + " (Released On: " + movie.Released + ")";
  poster.src = movie.Poster;
  genre.innerText = `Genre : ${movie.Genre}`;
  actor.innerText = `Actors : ${movie.Actors.toUpperCase()}`;
  rating.innerText = movie;
  description.innerText = movie.Plot;
  linkToImdb.href = `https://www.imdb.com/title/${movie.imdbID}`;
}

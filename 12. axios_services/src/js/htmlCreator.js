import { getMovieById } from "./services/movieService";

export const createHtml = (movies) => {
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const title = document.createElement("h3");

    movieContainer.className = "movie";
    movieContainer.addEventListener("click", async () => {
      const movieDetails = await getMovieById(movie.imdbID);
      console.log("Movie:", movieDetails);
    });
    title.innerHTML = movie.Title;

    movieContainer.appendChild(title);
    searchResults.appendChild(movieContainer);
  });
};

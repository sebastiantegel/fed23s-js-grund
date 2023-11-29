import "./../scss/style.scss";
import { createHtml } from "./htmlCreator";
import { searchMovies } from "./services/movieService";

document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const movieTitleToSearchFor = document.getElementById("searchText").value;

  const movies = await searchMovies(movieTitleToSearchFor);

  console.log(movies);
  createHtml(movies);
});

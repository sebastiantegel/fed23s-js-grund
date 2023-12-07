import { IMovie } from "../models/IMovie";
import { getMovieById, searchMovies } from "../services/movieService";
import "./../scss/style.scss";

document
  .getElementById("searchForm")
  ?.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();

    const searchText = (
      document.getElementById("searchInput") as HTMLInputElement
    ).value;

    const movies = await searchMovies(searchText);

    createHtml(movies);
  });

const createHtml = (movies: IMovie[]) => {
  const container = document.getElementById("searchResults") as HTMLDivElement;
  container.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    const movieContainer = document.createElement("div");

    const title = document.createElement("h3");
    title.innerHTML = movies[i].Title;

    movieContainer.addEventListener("click", async () => {
      const movie = await getMovieById(movies[i].imdbID);

      console.log(movie);
    });

    movieContainer.appendChild(title);
    container.appendChild(movieContainer);
  }
};

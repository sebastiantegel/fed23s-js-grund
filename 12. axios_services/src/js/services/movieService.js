import { get } from "./serviceBase";

export const searchMovies = async (title) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `http://omdbapi.com/?apikey=${apiKey}&s=${title}`;

  // OM url innehåller s=star -> data: {
  // totalResults: "4431",
  // Search: [{...}, {...}, ...],
  // Response: "true"
  //}
  const data = await get(url);

  return data.Search;
};

export const getMovieById = async (id) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `http://omdbapi.com/?apikey=${apiKey}&i=${id}`;

  // OM url innehåller i=tt981232 -> data: {
  //     Actors: "",
  //     Director: "",
  //     ...
  //}
  return await get(url);
};

import { IMovie } from "../models/IMovie";
import { IMovieExt } from "../models/IMovieExt";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

export const searchMovies = async (searchText: string): Promise<IMovie[]> => {
  const url = "http://omdbapi.com?apikey=416ed51a&s=" + searchText;

  const data = await get<IOmdbResponse>(url);
  return data.Search;
};

export const getMovieById = async (id: string) => {
  const url = "http://omdbapi.com?apikey=416ed51a&i=" + id;

  const data = await get<IMovieExt>(url);
  return data;
};

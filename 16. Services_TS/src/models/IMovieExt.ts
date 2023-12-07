import { IMovie } from "./IMovie";

export interface IMovieExt extends IMovie {
  Runtime: string;
  Director: string;
  Plot: string;
}

import axios from "axios";

export const get = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);
  return response.data;
};

// export const get = async (url: string): Promise<IOmdbResponse> => {
//   const response = await axios.get<IOmdbResponse>(url);

//   return response.data;
// };

// export const getSingleMovie = async (url: string): Promise<IMovieExt> => {
//   const response = await axios.get<IMovieExt>(url);

//   return response.data;
// };

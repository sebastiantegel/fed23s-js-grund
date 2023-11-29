import axios from "axios";

export const get = async (url) => {
  const response = await axios.get(url);
  return response.data;

  //   const response = await fetch(url);
  //   const data = await response.json();

  // OM url innehåller s=star -> data: {
  // totalResults: "4431",
  // Search: [{...}, {...}, ...],
  // Response: "true"
  //}

  // OM url innehåller i=tt981232 -> data: {
  //     Actors: "",
  //     Director: "",
  //     ...
  //}
  //   return data;
};

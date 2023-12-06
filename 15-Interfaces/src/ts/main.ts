import axios from "axios";
import "./../scss/style.scss";
import { IProduct } from "./models/IProduct";
import { IOmdbResponse } from "./models/IOmdbResponse";

const getProducts = async () => {
  const response = await axios.get<IProduct[]>(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
  );
  console.log(response.data);

  //   response.data.forEach((product) => {});
};

const getMovieSearchResult = async () => {
  const response = await axios.get<IOmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=star"
  );

  console.log(response.data.Search);
};

document.querySelector("#products")?.addEventListener("click", getProducts);
document
  .querySelector("#movies")
  ?.addEventListener("click", getMovieSearchResult);

import "./../scss/style.scss";

// console.log("Start");
const spinner = document.getElementById("spinner");

document.getElementById("start").addEventListener("click", (e) => {
  e.target.classList.toggle("d-none");

  new Promise((resolve, reject) => {
    spinner.classList.toggle("d-none");

    setTimeout(() => {
      resolve({ location: "Stockholm", weather: "Sunny" });
    }, 3000);

    // reject();
  })
    .then(
      (weather) => {
        console.log("Success:", weather);
      },
      () => {
        console.log("Error :(");
      }
    )
    .finally(() => {
      spinner.classList.toggle("d-none");
    });
});

// console.log("Finished");

// fetch("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
//   .then((response) => response.json())
//   .then((products) => {
//     console.log("Produkter:", products);
//     createHtml(products);
//   });

const createHtml = (movies) => {
  movies.forEach((movie) => {
    console.log(movie);
  });
};

fetch("http://www.omdbapi.com/?apikey=416ed51a&s=star")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.Search);

    for (let i = 0; i < data.Search.length; i++) {
      console.log(data.Search[i].Title);
    }
  });

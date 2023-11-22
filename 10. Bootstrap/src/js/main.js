import "./../css/style.css";

document
  .getElementById("movieSearchForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchText = document.getElementById("searchText").value;

    const response = await fetch(
      `http://omdbapi.com?apikey=416ed51a&s=${searchText}`
    );
    const data = await response.json();

    console.log(data.Search);

    const searchResultsTag = document.getElementById("searchResults");

    searchResultsTag.innerHTML = "";
    for (let i = 0; i < data.Search.length; i++) {
      const movieContainer = document.createElement("div");
      const title = document.createElement("h3");

      movieContainer.className = "col-3 g-3 movie";
      movieContainer.addEventListener("click", async () => {
        console.log("Klickade på:", data.Search[i]);
        const extraResponse = await fetch(
          `http://omdbapi.com?apikey=416ed51a&i=${data.Search[i].imdbID}`
        );
        const extraData = await extraResponse.json();
        console.log(extraData);

        const modalTitle = document.getElementById("movieTitleModal");
        modalTitle.innerHTML = extraData.Title;

        const body = document.getElementById("modalBody");
        body.innerHTML = "";

        const image = document.createElement("img");
        const actorsTag = document.createElement("p");
        image.src = extraData.Poster;
        image.alt = extraData.Title;
        actorsTag.innerHTML = extraData.Actors;

        body.appendChild(image);
        body.appendChild(actorsTag);
      });
      movieContainer.setAttribute("data-bs-toggle", "modal");
      movieContainer.setAttribute("data-bs-target", "#movieModal");
      title.innerHTML = data.Search[i].Title;

      movieContainer.appendChild(title);
      searchResultsTag.appendChild(movieContainer);
    }
  });

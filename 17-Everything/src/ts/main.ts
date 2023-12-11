import axios from "axios";
import "./../scss/style.scss";
import { Todo } from "./models/Todo";
import { IOmdbResponse } from "./models/IOmdbResponse";
import { Movie } from "./models/Movie";

const todos: Todo[] = JSON.parse(
  localStorage.getItem("myawesometodos") ||
    JSON.stringify([new Todo("Koda"), new Todo("Sova")])
);
const todosContainer = document.getElementById("todo-container");
let sortDirection = true;

document.getElementById("add-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputTag = document.getElementById("todo-text");
  if (inputTag) {
    todos.push(new Todo((inputTag as HTMLInputElement).value));
    createHtml();
  }
});

document.getElementById("sort")?.addEventListener("click", () => {
  if (sortDirection) {
    todos.sort((a, b) => {
      if (a.text > b.text) return 1;
      if (a.text < b.text) return -1;
      return 0;
    });
  } else {
    todos.sort((a, b) => {
      if (a.text > b.text) return -1;
      if (a.text < b.text) return 1;
      return 0;
    });
  }

  sortDirection = !sortDirection;
  createHtml();
});

document.getElementById("search-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchText = (
    document.getElementById("search-text") as HTMLInputElement
  ).value;

  createSearchResultHtml(
    todos.filter((todo) => !todo.isDone && todo.text.indexOf(searchText) >= 0)
  );
});

const response = await axios.get<IOmdbResponse>(
  "http://omdbapi.com?apikey=416ed51a&s=star"
);
const movies = response.data.Search.map((movie) => {
  return new Movie(movie.Title, movie.Poster, movie.imdbID);
});
console.log("Från API:", response.data.Search);
console.log("Efter map:", movies);

const moviesContainer = document.getElementById("movies");

movies.forEach((movie) => {
  const movieContainer = document.createElement("div");
  const title = document.createElement("h4");

  title.innerHTML = movie.title;

  movieContainer.appendChild(title);

  movieContainer.addEventListener("click", () => {
    todos.push(new Todo(movie.title));
    createHtml();
  });

  moviesContainer?.appendChild(movieContainer);
});

const createHtml = () => {
  localStorage.setItem("myawesometodos", JSON.stringify(todos));

  if (todosContainer) {
    todosContainer.innerHTML = "";
  }

  todos.forEach((todo, i) => {
    const todoItem = document.createElement("li");
    const title = document.createElement("h3");
    const doneButton = document.createElement("button");
    const removeButton = document.createElement("button");

    title.innerHTML = todo.text;
    //   if (todo.isDone) {
    //     doneButton.innerHTML = "Markera oklar";
    //   } else {
    //     doneButton.innerHTML = "Markera klar";
    //   }

    doneButton.innerHTML = todo.isDone ? "Markera oklar" : "Markera klar";
    removeButton.innerHTML = "Ta bort";

    doneButton.addEventListener("click", () => {
      todo.isDone = !todo.isDone;
      createHtml();
    });

    removeButton.addEventListener("click", () => {
      todos.splice(i, 1);
      createHtml();
    });

    todoItem.appendChild(title);
    todoItem.appendChild(doneButton);
    todoItem.appendChild(removeButton);
    todosContainer?.appendChild(todoItem);
  });
};

const createSearchResultHtml = (searchResults: Todo[]) => {
  searchResults.forEach((todo) => {
    const todoItem = document.createElement("li");
    const title = document.createElement("h3");

    title.innerHTML = todo.text;
    //   if (todo.isDone) {
    //     doneButton.innerHTML = "Markera oklar";
    //   } else {
    //     doneButton.innerHTML = "Markera klar";
    //   }

    todoItem.appendChild(title);
    todosContainer?.appendChild(todoItem);
  });
};

createHtml();

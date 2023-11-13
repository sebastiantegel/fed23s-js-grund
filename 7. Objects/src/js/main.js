import "./../scss/style.scss";
import { createHtmlForAnimal, createHtmlForPerson } from "./htmlHelpers";
import { Address } from "./models/Address";
import { Animal } from "./models/Animal";
import { Person } from "./models/Person";

// const animal = {
//   name: "Majsan",
//   age: 10,
//   isVaccinated: true,
// };

const animal = new Animal("Majsan", 10, true);
const animal2 = new Animal("Rosa", 3, false);
const animal3 = new Animal("Tage", 1, true);
// animal.name = "Majsan";
// animal.age = 10;
// animal.isVaccinated = true;

const animals = [animal, animal2, animal3];
console.log(animals);

for (let i = 0; i < animals.length; i++) {
  createHtmlForAnimal(animals[i]);
}

const p = new Person(
  "Sebastian",
  true,
  "Man",
  "1979-10-06",
  new Address("Agatvägen 18", "168 60", "Bromma")
);
const p2 = new Person(
  "Hanna",
  true,
  "Kvinna",
  "1980-04-24",
  new Address("Agatvägen 18", "168 60", "Bromma")
);
const p3 = new Person(
  "Alvar",
  false,
  "Man",
  "2010-07-30",
  new Address("Agatvägen 18", "168 60", "Bromma")
);
const p4 = new Person(
  "Astrid",
  false,
  "Kvinna",
  "2010-07-30",
  new Address("Agatvägen 18", "168 60", "Bromma")
);

const family = [p, p2, p3, p4];

console.log(family);

for (let i = 0; i < family.length; i++) {
  createHtmlForPerson(family[i]);
}

// fetch("http://omdbapi.com?apikey=416ed51a&s=star")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.Search);

//     for (let i = 0; i < data.Search.length; i++) {
//       const movieContainer = document.createElement("div");
//       const title = document.createElement("h3");
//       const image = document.createElement("img");

//       title.innerHTML = data.Search[i].Title;
//       image.src = data.Search[i].Poster;

//       movieContainer.appendChild(title);
//       movieContainer.appendChild(image);
//       document.body.appendChild(movieContainer);
//     }
//   });

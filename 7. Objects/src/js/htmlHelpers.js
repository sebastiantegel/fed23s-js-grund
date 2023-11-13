export function createHtmlForAnimal(animal) {
  const animalContainer = document.createElement("div");
  const nameTag = document.createElement("p");
  const ageTag = document.createElement("input");
  const checkbox = document.createElement("input");

  animalContainer.className = "card";
  animalContainer.addEventListener("click", () => {
    console.log(animal);
  });
  nameTag.innerHTML = animal.name;

  ageTag.type = "number";
  ageTag.value = animal.age;

  checkbox.type = "checkbox";
  checkbox.checked = animal.isVaccinated;

  animalContainer.appendChild(nameTag);
  animalContainer.appendChild(ageTag);
  animalContainer.appendChild(checkbox);
  document.body.appendChild(animalContainer);
}

export function createHtmlForPerson(person) {
  const personContainer = document.createElement("div");
  const nameTag = document.createElement("h2");
  const checkbox = document.createElement("input");

  personContainer.className = "card";
  nameTag.innerHTML = person.name;

  checkbox.type = "checkbox";
  checkbox.checked = person.isMarried;

  personContainer.appendChild(nameTag);
  personContainer.appendChild(checkbox);
  document.body.appendChild(personContainer);
}

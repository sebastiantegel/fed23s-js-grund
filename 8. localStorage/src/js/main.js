import "./../scss/style.scss";
import { IceCream } from "./models/IceCream";

const piggelin = new IceCream("Piggelin", "Päron", 15);
const daimstrut = new IceCream("Daimstrut", "Vanilj/Karamell", 30);
const sandwich = new IceCream("Sandwich", "Vanilj/Bröd", 20);

let iceCreams = [piggelin, daimstrut, sandwich];

if (localStorage.getItem("icecreams")) {
  iceCreams = JSON.parse(localStorage.getItem("icecreams"));
}

const createHtml = () => {
  const freezer = document.getElementById("freezer");
  freezer.innerHTML = "";

  localStorage.setItem("icecreams", JSON.stringify(iceCreams));

  iceCreams.forEach((iceCream, i) => {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const removeButton = document.createElement("button");

    title.innerHTML = iceCream.name;
    removeButton.innerHTML = "Ätit";
    removeButton.addEventListener("click", (e) => {
      iceCreams.splice(i, 1);
      createHtml();
    });

    container.appendChild(title);
    container.appendChild(removeButton);
    freezer.appendChild(container);
  });
};

createHtml();

/* LocalStorage */
// const name = localStorage.getItem("name");
// alert(name);
// localStorage.setItem("name", "Sebastian");

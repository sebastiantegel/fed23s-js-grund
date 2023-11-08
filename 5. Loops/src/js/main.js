import "./../css/style.css";

const foods = ["Pizza", "Tacos", "Sushi"];

const foodsContainer = document.getElementById("foods");

for (let i = 0; i < foods.length; i++) {
  const foodContainer = document.createElement("div");
  const title = document.createElement("h3");

  foodContainer.className = "food";
  foodContainer.addEventListener("click", () => {
    handleFoodClick(foods[i]);
  });
  title.innerHTML = foods[i];

  foodContainer.appendChild(title);
  foodsContainer.appendChild(foodContainer);
}

// foods.forEach((value) => {
//   // value === foods[i]

//   const foodContainer = document.createElement("div");
//   const title = document.createElement("h3");

//   foodContainer.className = "food";
//   title.innerHTML = value;

//   foodContainer.appendChild(title);
//   foodsContainer.appendChild(foodContainer);
// });

// const altFoods = foods.map((value) => {
//   return value.split("").reverse().join("");
// });

console.log(foods[0].split("").reverse().join(""));
//console.log(altFoods);

// altFoods.forEach((value) => {
//   // value === foods[i]

//   const foodContainer = document.createElement("div");
//   const title = document.createElement("h3");

//   foodContainer.className = "food";
//   title.innerHTML = value;

//   foodContainer.appendChild(title);
//   foodsContainer.appendChild(foodContainer);
// });

const handleFoodClick = (clickedFood) => {
  console.log("Du valde en maträtt:", clickedFood);
};

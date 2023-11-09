import "./../scss/style.scss";

let age = 44;
const firstname = "Sebastian";
const isMarried = true;

age++;

console.log(firstname + " Tegel");

if (isMarried) {
  console.log("Grattis!");
} else {
  console.log("Attans!");
}

function greeting() {
  let x = 0;

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

const salutations = (word) => {
  console.log(word);

  return word.toUpperCase();
};

greeting(); // Anrop
const resultFromFunction = salutations("Live long and prosper :)");
console.log(resultFromFunction);

/* HTML (DOM) */
const someElement = document.getElementById("someId");
document.querySelector("div > .red");

someElement.innerHTML = "Lorem";
someElement.className = "myAwesomeClass";

const aNewElement = document.createElement("span");
aNewElement.innerHTML = "ipsum dolor sit amet";

someElement.appendChild(aNewElement);

aNewElement.addEventListener("click", () => {
  greeting();
});

/* Lists */
const numbers = [1, 1, 2, 3, 5, 8, 13]; // JSON

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  // Skapa
  const div = document.createElement("div");

  // Förända
  div.innerHTML = numbers[i];
  div.className = "number";
  div.addEventListener("click", () => {
    console.log("Du klickade på:", numbers[i]);
  });

  // Placera
  document.body.appendChild(div);
}

const products = ["Mjölk", "Ost", "Kex", "Smör", "Godis"];
const cart = [];

const productsContainer = document.querySelector("section#products");

products.forEach((product) => {
  const productContainer = document.createElement("div");
  const title = document.createElement("h3");

  title.innerHTML = product;
  productContainer.className = "product";
  productContainer.addEventListener("click", () => {
    cart.push(product);
    console.log(cart);
    createCartHtml();
  });

  productContainer.appendChild(title);
  productsContainer.appendChild(productContainer);
});

const cartContainer = document.querySelector("section#cart");

const createCartHtml = () => {
  cartContainer.innerHTML = "";

  cart.forEach((cartItem, i) => {
    const productContainer = document.createElement("div");
    const title = document.createElement("h3");

    title.innerHTML = cartItem;
    productContainer.className = "product";

    productContainer.addEventListener("click", () => {
      cart.splice(i, 1);
      createCartHtml();
    });

    productContainer.appendChild(title);
    cartContainer.appendChild(productContainer);
  });
};

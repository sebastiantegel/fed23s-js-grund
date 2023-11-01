const drink = document.getElementById("juice");
drink.innerHTML = "Passionsfrukt";

const runningImg = document.getElementById("running");
// console.log(runningImg);
// runningImg.setAttribute(
//   "src",
//   "https://www.polar.com/en/img/cms/719b95350e791aff30da849d0bbb0b7440f09f1d-1724x1726-1724.jpg"
// );

runningImg.setAttribute("alt", "Running is fun!");

const container = document.getElementById("container");

const runTitle = document.createElement("h2"); // <h2></h2>

runTitle.innerHTML = "Spring!"; // <h2>Spring!</h2>

container.appendChild(runTitle); // <div><h2>Spring!</h2></div>

const imgContainer = document.createElement("div");
const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://www.polar.com/en/img/cms/719b95350e791aff30da849d0bbb0b7440f09f1d-1724x1726-1724.jpg"
);
imgContainer.className = "image-container";

imgContainer.appendChild(img);
container.appendChild(imgContainer);

/* Beräkna kontrollsiffran i ett personnummer */
// 0 1 2 3 4 5 6 7 8
const pnr = "";

let sum = 0;

for (let i = 0; i < pnr.length; i++) {
  const currentNumber = +pnr[i];

  if (i % 2 === 0) {
    // * 2
    const prod = currentNumber * 2;

    if (prod > 9) {
      sum += 1 + (prod % 10);
    } else {
      sum += prod;
    }
  } else {
    // * 1
    sum += currentNumber;
  }
}

const controlNumber = 10 - (sum % 10);

console.log(pnr + controlNumber);

const firstName = "Sebastian";

console.log("Hello world!");
console.log("firstName:", firstName);

let age = 44;

console.log("age:", age);

const isMarried = true;

console.log("isMarried:", isMarried);

age = age + 1;
console.log(age);

age = age - 10;
age = age * 2;
age = age / 5;

console.log(age);

console.log(age % 2);
age++;
console.log(age % 2);

if (age > 10) {
  // Om true
  console.log("Vad gammal du är :)");
} else {
  // Om false
  console.log("Väx på dig lite :)");
}

age++;

if (age % 2 === 0) {
  console.log("Din ålder är ett jämt tal");
}

import "./../scss/style.scss";

const theForm = document.getElementById("theForm");
const firstname = document.getElementById("firstname");

firstname.addEventListener("blur", (e) => {
  console.log(e.target.value);
});

theForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submitting stuff...");
});

const numbers = [1, 1, 2, 3, 5, 8, 13];

// console.log(numbers);

// Lägg till
numbers.push(21);
// console.log(numbers);

// Ta bort
numbers.pop();
// console.log(numbers);

// Ta bort på specifik position
numbers.splice(4, 1);
// console.log(numbers);

// console.log("Listans längd:", numbers.length);
// console.log("Sista värdet i listan:", numbers[numbers.length - 1]);

const ul = document.getElementById("theList");

for (let i = 0; i < numbers.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = numbers[i];
  ul.appendChild(li);
}

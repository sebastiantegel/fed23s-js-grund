import "./../css/style.css";

function myFirstFunction() {
  console.log("Du klickade");
}

const paintItBlue = (e) => {
  e.target.classList.toggle("blue");
};

const first = document.getElementById("first");
first.addEventListener("click", myFirstFunction);
first.addEventListener("mouseenter", paintItBlue);
first.addEventListener("mouseleave", (event) => {
  event.target.classList.toggle("blue");
});

// first.classList.add("red");
// first.classList.remove("red");
// first.classList.toggle("blue");

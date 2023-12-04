import "./../scss/style.scss";
import { Person } from "./models/Person";

const age: number = 44;

console.log(age);

const p: Person = new Person("Sebastian", 44);
p.isMarried = true;
const p2: Person = new Person("Hanna", 44);
p2.isMarried = true;
const p3: Person = new Person("Astrid", 13);
console.log(p.age);

const persons: Person[] = [p, p2, p3, new Person("Alvar", 13)];

console.log(persons);

const theInput = document.getElementById("userInput") as HTMLInputElement;
console.log(theInput.value);

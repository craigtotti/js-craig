/* Primitive */

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


// Reference (Non-primitive)

// Arrays, Objects, Functions

const heroes = ["johnwick", "mafia", "marvel"];
let myObj = {
    name: "craig",
    age: 20
};
const myFunction = function() {
    console.log("hello world");
};

console.log(typeof anotherId);
// Using the typeof operator to determine the data type of the variable heroes and logging it to the console
console.log(typeof heroes);


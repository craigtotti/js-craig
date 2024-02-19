// for

for (let i= 0; i<= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i<= 10; i++){
    console.log(`outer loop is: ${i}` );
    for (let j = 1; j <= 10; j++){
    console.log(`inner  loop value ${i} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
}
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
    console.log(`detected 5`);
    break;
}
    console.log(`value of 1 is ${index}`);
}
for (let index = 1; index <= 10;  index++) {
    if (index == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}

const person = {
    name: "craig",
    age: 35,
    gender: 'male'
};
for(let key in person){
    console.log(key + ": " + person[key]);
}
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit in the array
}
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // Skip the iteration when i is 3
    }
    console.log(i);
}
// Output: 0, 1, 2, 4


// Define a string variable
const greeting = "Hello, world!";

// Print the string to the console
console.log(greeting); // Output: Hello, world!

// Get the length of the string
const length = greeting.length;
console.log("Length of the string:", length); // Output: Length of the string: 13

// Access individual characters of the string
const firstChar = greeting[0];
const lastChar = greeting[greeting.length - 1];
console.log("First character:", firstChar); // Output: First character: H
console.log("Last character:", lastChar); // Output: Last character: !

// Concatenate strings
const name = "Alice";
const message = "Welcome, " + name + "!";
console.log(message); // Output: Welcome, Alice!

// Use template literals for string interpolation
const age = 30;
const introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction); // Output: My name is Alice and I am 30 years old.

// Convert strings to uppercase and lowercase
const upperCaseGreeting = greeting.toUpperCase();
const lowerCaseGreeting = greeting.toLowerCase();
console.log("Uppercase:", upperCaseGreeting); // Output: Uppercase: HELLO, WORLD!
console.log("Lowercase:", lowerCaseGreeting); // Output: Lowercase: hello, world!

// Replace part of a string with another string
const replacedString = greeting.replace("world", "JavaScript");
console.log(replacedString); // Output: Hello, JavaScript!

// Extract a substring
const substring = greeting.substring(7, 12);
console.log("Substring:", substring); // Output: Substring: world

// Split a string into an array of substrings
const words = greeting.split(" ");
console.log("Words:", words); // Output: Words: [ 'Hello,', 'world!' ]

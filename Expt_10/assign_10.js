// const prompt = require("prompt-sync")();
// const table = parseInt(prompt("Enter an integer: "));
// console.log("Name-Soham Shimpi ROLL NO.-42359");
// var length = 10;
// var i = 1;
// console.log("Multiplication table " + table + " using for loop.");
// for (i = 1; i <= length; i++) {
//   const result = i * table;
//   console.log(`${table} * ${i} = ${result}`);
// }

// length = 10;
// i = 1;
// console.log("Multiplication table " + table + " using while loop.");
// while (i <= length) {
//   const result = i * table;
//   console.log(`${table} * ${i} = ${result}`);
//   i++;
// }

// length = 10;
// i = 1;
// console.log("Multiplication table " + table + " using do while loop.");
// do {
//   const result = i * table;
//   console.log(`${table} * ${i} = ${result}`);
//   i++;
// } while (i <= length);

const prompt = require("prompt-sync")();

// Take input from the user
const number = parseInt(prompt("Enter a number: "));

// Generate and print the multiplication table using a for loop
console.log("Multiplication Table (For Loop):");
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Generate and print the multiplication table using a while loop
console.log("\nMultiplication Table (While Loop):");
let i = 1;
while (i <= 10) {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
}

// Generate and print the multiplication table using a do-while loop
console.log("\nMultiplication Table (Do-While Loop):");
i = 1;
do {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
} while (i <= 10);

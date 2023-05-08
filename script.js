// Practice Questions 1
// Author: Matthew Davis for Keyin College
// Last Updated: May 8th, 2023

// Prompt 1
// Create a variable label and assign it the value "keyincollege".
// Create another variable tld and assign it "ca".
// Create a third variable domainName that combines label and tld to produce the value "keyincollege.ca".

let label = "keyincollege";
let tld = "ca";
let domainName = `${label}.${tld}`;

console.log(domainName);

// Prompt 2
// Create a variable isKeyin and assign it a boolean value (true or false) depending on whether or not domainName is equal to "keyincollege.ca".
// HINT: use === and don’t write true or false directly.

let isKeyin = domainName === "keyincollege.ca";
console.log(isKeyin);

// Prompt 3
// Create a variable isNotKeyin and assign it the inverse boolean value of isKeyin.
// HINT: if isKeyin is true, isNotKeyin should be false.

let isNotKeyin = !isKeyin;
console.log(isNotKeyin);

// Prompt 4
// Create four variables byte1, byte2, byte3, byte4, and assign each of these a value in the range 0-255.
// [You can assign any random numbers to each byteN variable, like 198 or 110 or 1 or any number in the range of 0-255

let byte1, byte2, byte3, byte4;
let byteList = [byte1, byte2, byte3, byte4];
for (let i = 0; i < byteList.length; i++) {
  byteList[i] = Math.floor(Math.random() * 256);
}
console.log(byteList);

// Prompt 5
// Create a variable ipAddress and assign it the value of combining your four byteN variables together, separated by ".".
// For example: "192.168.2.1".

let ipAddress = byteList.join(".");
console.log(ipAddress);
console.log(" ");

// Prompt 6
// Write code to display the multiplication table of a given integer.
// Define any variable and assign it a value, like in following example: your number is 15. I will test your code with changing the value of the variable

// Change this value to produce a different output, we have not yet covered validations in JS.
let number = 12;
console.log(`Your number is ${number}`);
for (i = 1; i <= 10; i++) {
  console.log(`${number} X ${i} = ${number * i}`);
}
console.log(" ");

// Prompt 7
// Write code to display all even and odd numbers from first 100 numbers by using for loop and if condition.
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log(" ");
// Prompt 8
// By using the same concept of above question no.7, display the sum of all even numbers from 100 numbers.
let sum = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(`The sum of all even numbers between 1-100 = ${sum}`);
console.log(" ");

//  Prompt 9
// A perfect number is a number whose divisors sum is equal to number itself.
// Write code to check whether a given number is “perfect number” or not. You can again just define a variable and apply logic to check it.

function isPerfectNum(num) {
  let perfectNumSum = 0;
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      console.log(i);
      perfectNumSum += i;
    }
  }
  let bool = num === perfectNumSum;
  if (bool) {
    return `${num} is a perfect number!`;
  } else {
    return `${num} is not a perfect number.`;
  }
}
console.log(isPerfectNum(28));
console.log(" ");

// Prompt 10
// Write a program to determine whether a given number is prime or not
function isPrimeNum(num) {
  if (num % 2 == 0) {
    return `${num} is not a prime number.`;
  }
  for (i = 2; i < number; i++) {
    if (num % i == 0) {
      return `${num} is not a prime number.`;
    }
  }
  return `${num} is a prime number!`;
}
console.log(isPrimeNum(101));

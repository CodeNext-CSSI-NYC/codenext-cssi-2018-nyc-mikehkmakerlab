//Author: Michael Okrah

// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
var readline = require("readline-sync");
var userNum = readline.question("Please enter a number: ");
console.log(" the sqayer root of "+ userNum + " is "+ Math.sqrt(userNum))

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
var readline = require("readline-sync");
var userName = readline.question("Please enter your name : ");
var nameLen = userName.length;
console.log(" You have "+ nameLen + " letters in your name");
// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
var readline = require("readline-sync");
var userName = readline.question("Please enter any word : ");
var firstLetter = userName.charAt(0);
console.log("The word "+userName+ " starts with the letter " + firstLetter);


// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
var readline = require("readline-sync");
var firstNum = readline.question("Please enter a number : ");
var secondNum = readline.question("Please enter a second number : ");
var average = (firstNum+secondNum)/2 ;
console.log("The average of " + firstNum +" and "+ secondNum + "is " + average);

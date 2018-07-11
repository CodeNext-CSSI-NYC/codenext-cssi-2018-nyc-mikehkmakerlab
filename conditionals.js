// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
var readline = require("readline-sync");
var userNum = parseInt(readline.question("Please enter a number: "));

if (userNum == 0 ){
    console.log( userNum + " is a zero number");
}
else if (userNum > 0 ){
    console.log( userNum + " is a positive number");
}
else {
    console.log( userNum + " is a negative number");
}

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
var readline = require("readline-sync");
var firstNum = parseInt(readline.question("Please enter a number: "));
var secNum = parseInt(readline.question("Please enter a second number: "));
var thirdNum = parseInt(readline.question("Please enter a third number: "));

if( (firstNum > secNum) && (firstNum > thirdNum) ){
    console.log( firstNum + " is the biggest among the 3 numbers you inputed ");
}
else if ( (secNum > firstNum) && (secNum > thirdNum) ){
    console.log( secNum + " is the biggest among the 3 numbers you inputed ");
}
else{
    console.log(thirdNum + " is the biggest among the 3 numbers you inputed ");
}

// 3. Ask the user for a number and print whether it is odd or even
var readline = require("readline-sync");
var check = parseInt(readline.question("Please enter a number: "));

if(check % 2 == 0 ){
    console.log(check + " is an even number");
}
else{
    console.log(check + " is an odd number");
}

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
var readline = require("readline-sync");
var letter = readline.question("Please enter a letter, make sure its lower case ");
var vowels = ["a"," e","i ","o ","u ",];

for(var i = 0 ; i<=vowels.length-1;i++){
    if(letter === vowels[i]) {
        console.log(letter + " is a vowel");
        break;
    }
    else{
        console.log(letter + " is a consonant");
        break;
    }
}



// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
var readline = require("readline-sync");
var year = parseInt(readline.question("Please enter a year: "));

if(year % 4 ==0 ){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is NOT a leap year");
}



// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
var readline = require("readline-sync");
var year = readline.question("Have you been a citizen for at least 9 years ?");
var userYear = parseInt(readline.question("How old are you?"));

if(year === "yes" && userYear>30){
    console.log(" You can run for senate in NY ");
}
else{
    console.log(" You CANNOT run for senate in NY ");
}




// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
var readline = require("readline-sync");
var num = readline.question("Please enter a whole number between 1-7 ");
var days = [" ","Sunday","Monday ","Tuesday ","Wednesday ","Thursday","Friday","Saturday ",];

console.log(days[num]);


// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.

// Under each question, write the code that solves it, and then write your answer in a comment
// For example, if the question is: What's the sum of 79 and 2018 you would write:
console.log(79 + 2018);
// 2097

// Some of the questions will use these variables
const p = 12;
const q = 60;
const r = 25;

// 1. Is 91 divisible by 13? (The answer should be either true or false)
 if(91%13==0){
     console.log("true");
 }
 else{
     console.log("false");
 }

// 2. What is the result when the q divided by r is rounded to the nearest integer?
    var result = (p/r);
    console.log(result);

// 3. Is the product of p and r greater than q squared? (The answer should be either true or false)
var product = (p*q);
var squared = Math.pow(q,2);
if (product > squared){
    console.log(true);
}else{
     console.log(false);
}

// 4. What is the remainder when the sum of q and r is divided by p?
var rem = ((q+r)/p);
console.log(rem);

// 5. 27 squared is equal to what number raised to the third power?
var num = Math.pow(27,2);
console.log(Math.cbrt(num));


// 6. What is the absolute value of p - q? (Find out how to do absolute value by searching online.)
console.log(Math.abs(p-q));
// 7. Find another Math operation we haven't talked about yet on the MDN (Mozilla Developer Network) and try it out below.

// Math.log()

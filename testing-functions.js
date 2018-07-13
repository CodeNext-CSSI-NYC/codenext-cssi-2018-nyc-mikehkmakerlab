// In these exercises, you will write functions, and then write tests that will call your functions.

// Example - Absolute value function
function absValue(num) {
  if (num < 0) {
    return (num * -1);
  } else {
    return num;
  }
}

// Example - Tests of the absolute value function
// If any of these are false, something went wrong
console.log(absValue(7) == 7);
console.log(absValue(0) == 0);
console.log(absValue(-3) == 3);
console.log(absValue(-2.44) == 2.44);


function testabsValue() {
  console.log();
  console.log("absValue(1)→ 1... your result: " + absValue(1));
  console.log("absValue(3) → 3 ... your result: " + absValue(3));
  console.log("absValue(2) → 2 ... your result: " + absValue(2));
  console.log("absValue(-2.44) → 2.44 ... your result: " + absValue(-2.44));
}

testabsValue();
// 1a. Write an isVowel function that takes one parameter, a letter, and
// returns true if it is a vowel and false if not.
var vowels = ["a","e","i","o","u"];
function isVowel(letter){
    for(var i = 0 ; i <= vowels.length ; i++){
        if(vowels[i] === letter){
            return true;
        }
    }
    return false;
}




// 1b. Tests for isVowel. Two examples have been provided. Add at least 3 more.
// console.log(isVowel("a") == true);
// console.log(isVowel("b") == false);

function testVowel() {
    console.log("isVowel(a) == true... your result: " + isVowel("a"));
    console.log("isVowel(b) == false... your result: " + isVowel("b"));
    console.log("isVowel(e) == true... your result: " + isVowel("e"));
}
testVowel();

/*
// 2a. Write a convertTemp function that takes two parameters:
// The first is a temperature, and the second is either "toC" or "toF", which tells
// you whether to covert Fahrenheit to Celsius, or Celsius to Fahrenheit.
// The function should return the converted temperature.

// 2b. Tests for convertTemp. Two examples have been provided. Add at least 3 more.
console.log(convertTemp(95, "toC") == 35);
console.log(convertTemp(95, "toF") == 203);




// 3a. Write an isDivisible function that takes two parameters:
// The original number, and the number we want to know if it's divisible by.
// The function should return true or false.

// 3b. Tests for isDivisible. Two examples have been provided. Add at least 3 more.
console.log(isDivisible(15, 3) == true);
console.log(isDivisible(17, 2) == false);
*/

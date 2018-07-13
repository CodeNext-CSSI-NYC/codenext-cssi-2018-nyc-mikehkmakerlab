// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
function meow(){
    console.log("Meow");
}

// 1b. Call it three times in a row. Run your code to make sure it works.
meow();
meow();
meow();




// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
 function square(num){
     console.log(num**2)
 }

// 2b. Call it three times with three different parameters. Run your code to make sure it works.
square(5);
square(8);
square(8);



// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
function compare(firstNum, secondNum){
    if(firstNum > secondNum){
        console.log(firstNum + " is greater than " + secondNum );
    }else if(firstNum == secondNum){
        console.log(secondNum + " is equal to " + firstNum );
    }else{
        console.log(secondNum + " is greater than " + firstNum );
    }

}

// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.
compare(45,2343);
compare(1,24);
compare(45,45);
// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
function userNames(name){
    return ("Hello "+name);
}

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.
let guest = userNames("john");
console.log(guest);

// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

function average(x, y){

    return (x+y)/2;

    }

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?

let day1 = average(98,80);
let day2 = average(60,80);
let day3 = average(33,24);

console.log("The average is "+ day1);
console.log("The average is "+ day2);
console.log("The average is "+ day3);

// when the user passes in a non number the computer says wahtever thehy inputted is undefines

/*
--------------------------------------------------------------
                             Nim
--------------------------------------------------------------
By: Michael Okrah

O O O O O O O O O O
Stones remaining: 10

Player One, enter # of stones to remove (1, 2, or 3): 3

O O O O O O O
Stones remaining: 7

Player Two, enter # of stones to remove (1, 2, or 3): 5
Please enter 1, 2, or 3!
Player Two, enter # of stones to remove (1, 2, or 3): no!
Please enter 1, 2, or 3!
Player Two, enter # of stones to remove (1, 2, or 3): 2

O O O O O
Stones remaining: 5

Player One, enter # of stones to remove (1, 2, or 3): 3

O O
Stones remaining: 2

Player Two, enter # of stones to remove (1, 2, or 3): 3
You can't remove more stones than there are remaining!
Player Two, enter # of stones to remove (1, 2, or 3): 1

O
Stones remaining: 1

Player One, enter # of stones to remove (1, 2, or 3): 1

Player Two wins!
Thanks for playing! Goodbye!

*/

var readline = require("readline-sync");
var stones = 10;
var userNum = parseInt(readline.question("Player enter # of stones to remove (1, 2, or 3)"));
var newStones = (10 - userNum);

function stoneVisual() {
    for (var i = 1; i <= newStones; i++) {
        console.log("O");
    }
    console.log("There are " + newStones + " eggs left.");
    i
}
stoneVisual();
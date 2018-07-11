

var generator = Math.random();
var readline = require("readline-sync");

var win = 0;
while(win!=3){
var userPick = readline.question("heads or tails ?");
var pick =["heads","tails"];

if(userPick === "heads"){
    pick = pick[0];
}
else if(userPick === "tails"){
    pick = pick[1];
}




var result = ["heads", "tails"];

if( generator < .5){
    result = result[0];
    //console.log(result);
}
else{
    result = result[1];
    //console.log(result);
}

if(pick===result){
    console.log("You win !!")
    win+=1
}
else{
    console.log("You Lose !!")
}
}

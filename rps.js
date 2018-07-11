
var readline = require("readline-sync");

var win = 0;
while(win!=3){

var compChoice = Math.random()*3;

var userPick = readline.question("Rock, Paper, or Scissor. USE : r , p , s ");

var uPick =["rock","paper","scissors"];
var cPick =["rock","paper","scissors"];



if(compChoice > 0 && compChoice <=1 ){
    cPick = cPick[0];

}
else if(compChoice > 1 && compChoice <=2 ){
    cPick = cPick[1];
}
else {
    cPick = cPick[2];
}


if(userPick === "r"){
    uPick = uPick[0];
}
else if(userPick === "p"){
    uPick = uPick[1];
}
else {
    uPick = uPick[2];
}



 if(uPick === cPick){
    console.log("The computer chose "+ cPick + " and you chose " + uPick);
    console.log("Its a TIE");
}
 else if ( (uPick === uPick[0]) && (cPick === cPick[2])){
   console.log("The computer chose "+ cPick + " and you chose " + uPick);
   console.log("You win");
   win+=1;
}
else if ( (uPick === uPick[1]) && (cPick === cPick[0]) ) {
   console.log("The computer chose "+ cPick + " and you chose " + uPick);
   console.log("You win");
   win+=1;
}
else if ( (uPick === uPick[2]) && (cPick === cPick[0]) ) {
   console.log("The computer chose "+ cPick + " and you chose " + uPick);
   console.log("You lose");

}
else{
    console.log("The computer chose "+ cPick + " and you chose " + uPick);
    console.log("You Lose");
    }
}

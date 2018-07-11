var readline = require("readline-sync");
var y =5;
// Questions
//  GOT GEOGRAPHY QUESTIONS FROM https://matadornetwork.com/life/can-answer-21-geography-questions-everyone-know-quiz/
var userPick = readline.question("What topic do you want ? Basketball , Geography , or Cities");

if(userPick === "basketball" || "basketball" || "b" ){

    var basketballQright = 0
    var bTeam = readline.question("Which of these are you favorite team ? : Celtics , or Knicks");

        if(bTeam === "knicks" || "Knicks"|| "k" ){
        var knickQues = parseInt(readline.question("How many championships have the knicks won ?"))
            if(knickQues == 2){
                basketballQright+=1;
            }
        }
            var scoreQ = readline.question("Who scored the points in knicks history  ?");
                if( (scoreQ === "ewing")|| (scoreQ ==="patrick ewing")|| (scoreQ ==="Patrick Ewing")||(scoreQ ==="patrick") ){
                    basketballQright+=1;
            }
            var knickstadiumQ = readline.question("What the name of the stadium the celtics play in?");
                if( (knickstadiumQ === "the meccca ")|| (knickstadiumQ ==="Madison Square Garden ")||(knickstadiumQ ==="the garden")||(knickstadiumQ ==="The Garden")||(knickstadiumQ ==="msg")||(knickstadiumQ ==="MSG")||(knickstadiumQ ==="Dolan") ){
                    basketballQright+=1;
            }
        }















        /*
        else if(bTeam === "celtics" || "Celtics"|| "c" ){
            var celtQues = parseInt(readline.question("How many championships have the celtics won ?"))
                if(celtQues == 17){
                    basketballQright+=1;

                }
            }
            var mascotQ = readline.question("What is the mascot for the celtics ?");
                if( (mascotQ === "Lucky the Leprechaun")|| (mascotQ ==="Lucky")|| (mascotQ ==="lucky")||(mascotQ ==="Leprechaun") ){
                basketballQright+=1;
                console.log(mascotQ+"!!!!!!!!!!!!!!!");
            }

            var stadiumQ = readline.question("What the name of the stadium the celtics play in?");
                if( (stadiumQ === "td garden ")|| (stadiumQ ==="TD Garden")||(stadiumQ ==="garden")||(stadiumQ ==="Garden")||(stadiumQ ==="Td Garden")||(stadiumQ ==="Td")||(stadiumQ ==="Td") ){
                basketballQright+=1;
                console.log(stadiumQ+" !!!!!!!!!!!!!!");
            }


            if(basketballQright==3){
                console.log(" Youre a hardcore celtics fan! But good luck taking down the warriors or the lakers this year!");
            }
            else if(basketballQright==2){
                console.log("Good luck taking down the warriors or the lackers this year!");
            }
            else if(basketballQright==1){
                console.log("BANDWAGON !!!!!!!");
            }
            else{
                console.log("Stick to a different sport bro !");
            }
    }



}
*/

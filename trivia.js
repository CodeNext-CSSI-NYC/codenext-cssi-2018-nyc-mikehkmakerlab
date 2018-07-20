var readline = require("readline-sync");
var y = 5;
// Questions
//  GOT GEOGRAPHY QUESTIONS FROM https://matadornetwork.com/life/can-answer-21-geography-questions-everyone-know-quiz/
var userPick = readline.question("What topic do you want ? Basketball , Geography , or Cities ");


// Basketball NAVIGATION
if (userPick == "basketball" || userPick == "basketball" || userPick == "b") {

  var basketballQright = 0
  var bTeam = readline.question("Which of these are you favorite team ? : Celtics , or Knicks ");


  // KNICKS OUTPUT:
  if (bTeam == "knicks" || bTeam == "knicks" || bTeam == "Knicks" || bTeam == "k") {
    var knickQues = parseInt(readline.question("How many championships have the knicks won ? "))
    if (knickQues == 2) {
      basketballQright += 1;
    }
    var scoreQ = readline.question("Who scored the points in knicks history  ? ");
    if ((scoreQ === "ewing") || (scoreQ == "patrick ewing") || (scoreQ == "Patrick Ewing") || (scoreQ == "patrick")) {
      basketballQright += 1;
    }
    var knickstadiumQ = readline.question("What the name of the stadium the knicks play in ? ");
    if ((knickstadiumQ == "the meccca ") || (knickstadiumQ == "Madison Square Garden ") ||
      (knickstadiumQ == "the garden") || (knickstadiumQ == "The Garden") ||
      (knickstadiumQ == "msg") || (knickstadiumQ == "MSG") || (knickstadiumQ == "Dolan")) {

      basketballQright += 1;
    }
    if (basketballQright == 3) {
      console.log(" Youre a hardcore knicks fan! But good luck taking down the raptors  this year!");
    } else if (basketballQright == 2) {
      console.log("LMAO this year!");
    } else if (basketballQright == 1) {
      console.log("BANDWAGON !!!!!!!");
    } else {
      console.log("Stick to a different sport bro !");
    }
  }
  //CELTIC OUTPUT
  else if (bTeam == "celtics" || bTeam == "Celtics" || bTeam == "c") {
    console.log("IM A CELTIC");
    var celtQues = parseInt(readline.question("How many championships have the celtics won ?"))
    if (celtQues == 17) {
      basketballQright += 1;
    }
    var mascotQ = readline.question("What is the mascot for the celtics ?");
    if ((mascotQ === "Lucky the Leprechaun") || (mascotQ === "Lucky") ||
      (mascotQ === "lucky") || (mascotQ === "Leprechaun")) {
      basketballQright += 1;
      console.log(mascotQ + "!!!!!!!!!!!!!!!");
    }
    var coachQ = readline.question("Who is the coach for the celtics ?");
    if ((coachQ === "brad") || (coachQ === "Brad") ||
      (coachQ === "stevens") || (coachQ === "Stevens")) {
      basketballQright += 1;
    }
  }

  console.log("You got " + basketballQright + " out of 3 basketball questions right ");

} // END OF BASKETBALL "CLASS"

if (userPick == "Geography" || userPick == "GEOGRAPHY" || userPick == "G" || userPick == "g") {

  var GquestionsRight = 0;
  console.log("Im in geography !!!!!!!!!!!!!!!!!!!!!!!!!!!");
  var Gquestion1 = readline.question(" Iceland is covered in ice True of false ? :"); // true
  var Gquestion2 = readline.question(" Which ocean lies on the east coast of the United States? :"); // atlantic
  var Gquestion3 = readline.question(" What is the world's highest mountain? :"); // everest
  var Gquestion4 = parseInt(readline.question(" How many Great Lakes are there? :")); // 5
  var Gquestion5 = parseInt(readline.question("The United Kingdom is comprised of how many countries? :")); // 4
  var Gquestion6 = readline.question(" What is the longest river in the world? :"); // nile
  var Gquestion7 = readline.question(" What ocean is the world is the largest body of water? :"); // pacific
  var Gquestion8 = parseInt(readline.question(" What is the approximate size of Earth's equator in km ? :")); //40,000

  if (Gquestion1.toLowerCase() == true) {
    GquestionsRight += 1;
  }
  if (Gquestion2.toLowerCase() == "atlantic") {
    GquestionsRight += 1;
  }
  if (Gquestion3.toLowerCase() == "mount everest" || Gquestion3.toLowerCase() == "everest") {
    GquestionsRight += 1;
  }
  if (Gquestion4 == 5) {
    GquestionsRight += 1;
  }
  if (Gquestion5 == 4) {
    GquestionsRight += 1;
  }
  if (Gquestion6.toLowerCase() == "nile") {
    GquestionsRight += 1;
  }
  if (Gquestion7.toLowerCase() == "pacific") {
    GquestionsRight += 1;
  }
  if (Gquestion8 > 30000 && Gquestion8 < 50000) {
    GquestionsRight += 1;
  }

  console.log("You got " + GquestionsRight + "/8 geography questions right");
}


if (userPick == "cities" || userPick == "Cities" || userPick == "c" || userPick == "city") {
  var cQuestionsRight = 0;

  var cquestion1 = readline.question(" What city was the first Skyscapper built : "); // chicago
  var cquestion2 = readline.question(" What city is well known for its Carnival?  : "); // Rio
  var cquestion3 = readline.question(" At the heart of which city can a commons be found? : "); // Boston
  var cquestion4 = readline.question(" What is the only major world capital named after a religion? : "); // islamabad
  var cquestion5 = readline.question("What is the largest city in Turkey?? :"); // Instanbul
  var cquestion6 = readline.question("What is the citadel of Moscow called? : "); // kremlin
  var cquestion7 = readline.question(" Which Indian city is famed for its clock tower? : "); // mumbai
  var cquestion8 = readline.question(" Where might one find the city of Tunis? : "); //tunisia


  if (cquestion1.toLowerCase() == "chicago") {
    cQuestionsRight += 1;
  }
  if (cquestion2.toLowerCase() == "rio") {
    cQuestionsRight += 1;
  }
  if (cquestion3.toLowerCase() == "boston" || cquestion3.toLowerCase() == "boston") {
    cQuestionsRight += 1;
  }
  if (cquestion4.toLowerCase() == "islamabad") {
    cQuestionsRight += 1;
  }
  if (cquestion5.toLowerCase() == "instanbul") {
    cQuestionsRight += 1;
  }
  if (cquestion6.toLowerCase() == "kremlin") {
    cQuestionsRight += 1;
  }
  if (cquestion7.toLowerCase() == "mumbai") {
    cQuestionsRight += 1;
  }
  if (cquestion8.toLowerCase() == "tunisia") {
    cQuestionsRight += 1;
  }

  console.log("You got " + cQuestionsRight + "/8 cities questions right")

}

/*
  }
  if (bTeam == "celtics" || bTeam == "Celtics" || bTeam == "c") {
    var celtQues = parseInt(readline.question("How many championships have the celtics won ?"))
    if (celtQues == 17) {
      basketballQright += 1;
    }
    var mascotQ = readline.question("What is the mascot for the celtics ?");
    if ((mascotQ === "Lucky the Leprechaun") || (mascotQ === "Lucky") ||
      (mascotQ === "lucky") || (mascotQ === "Leprechaun")) {
      basketballQright += 1;
      console.log(mascotQ + "!!!!!!!!!!!!!!!");
    }




*/




/*

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

*/
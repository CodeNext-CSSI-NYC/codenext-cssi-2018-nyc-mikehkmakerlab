// Author: Michael Okrah

var quarter = 25;
var numOfQ = 0;

var dime = 10;
var numOfD = 0;

var nickel = 5;
var numOfN = 0;

var pennies =1;
var numOfP = 0;

var readline = require("readline-sync");
var userNum = readline.question("Please enter an amount of cents from 0 to 100 cents: ");




if(userNum%25==0){
    numOfQ = (userNum/quarter);
    console.log(numOfQ);
}

numOfQ = Math.floor(userNum/quarter);
var remainder = (userNum%25);

if(remainder < 5 ){
    for int(i = numOfP ; i <=remainder ; i++){
        numOfP++;
    }
}

if(remainder >= dime ){
    numOfD++;
        var secRem = Math.floor(remainder/dime);
            if(secRem >=5 ){
                dime++
            }
            var thirdRem = Math.floor(remainder/dime);
                if(secRem < 5 ){
                    for int(i = numOfP ; i <=remainder ; i++){
                    numOfP++;
                }

            }
        }





    // if(userNum%25< 25){
    //  if(userNum > 5 && usernum){
    //    if(userNum < 5){
    //      for int(i = numOfP ; i<=userNum; i++){
    //          numOfP++;
    //      }
    //
    //        var remainder = userNum%10;
    //     numOfD+=1;
    //
    }

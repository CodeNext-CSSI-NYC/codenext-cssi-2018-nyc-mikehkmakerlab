//Author: Michael Okrah

/******************************************************************************
                                   withoutEnd()

Instructions:
Given a string, return a version without the first and last char, so "Hello"
yields "ell". The string length will be at least 2.

Examples:
withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"

*******************************************************************************/
function withoutEnd(str) {
    var lastLetter = str.charAt(str.length - 1);
    var firstLetter = str.charAt(0);
    var newWord = str.substring(1, str.length - 1);
    return newWord;

}

console.log(withoutEnd("Google"));

function testWithoutEnd() {
    console.log();
    console.log("withoutEnd(\"Hello\") → \"ell\" " + "\"" + withoutEnd("Hello") + "\"");
    console.log("withoutEnd(\"javascript\") → \"avascrip\" " + "\"" + withoutEnd("javascript") + "\"");
    console.log("withoutEnd(\"coding\") → \"odin\" " + "\"" + withoutEnd("coding") + "\"");
    console.log("withoutEnd(\"code\") → \"od\" " + "\"" + withoutEnd("code") + "\"");
    console.log("withoutEnd(\"ab\") → \"\" " + "\"" + withoutEnd("ab") + "\"");
    console.log("withoutEnd(\"Chocolate!\") → \"hocolate\" " + "\"" + withoutEnd("Chocolate!") + "\"");
    console.log("withoutEnd(\"kitten\") → \"itte\" " + "\"" + withoutEnd("kitten") + "\"");
    console.log("withoutEnd(\"woohoo\") → \"ooho\" " + "\"" + withoutEnd("woohoo") + "\"");
}
testWithoutEnd();





function frontAgain(str) {
    if (str.length == 2) {
        return true;
    }
    if ()

}


function makeAbba(a, b) {
    return (a + b + b + a);
}

console.log(makeAbba("mike","yo"));

// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"

function comboString(a, b) {
    var firstLetter = a.length;
    var secondLetter = b.length;
        if(firstLetter > secondLetter){
            return (b + a + b);
        }else{
            return ( a + b + a);
        }

}


console.log(comboString("Yerrrrrr","mikey"));


function swap(word){
    if(word.length > 1){


        var secondTolastLetter = word.charAt(word.length-2); // second to last letter  this is somehow returning an int
        var lastLetter = word.charAt(word.length-1); // last letter
        var newWord = word.substring(0, word.length-2) ;



        console.log(secondTolastLetter);
        console.log(lastLetter);
        console.log(newWord);
        return newWord+lastLetter+secondTolastLetter;



    }else{
        return word;
    }

}

console.log(swap("google"));

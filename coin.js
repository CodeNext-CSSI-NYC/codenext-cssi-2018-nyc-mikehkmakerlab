//Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.
while ((heads + tails) != 100) {
    var coinflip = Math.random() * 2;
    var heads = 0;
    var tails = 0;
    var choice = ["true", "false"];
    if (coinflip < 1) {
        var computerChoice = choice[0];
        heads++;
    } else {
        computerChoice = choice[1];
        tails++;
    }
}
var piggyBank = {
    quarters: 4,
    nickels: 20,
    dimes: 10,
    pennies: 100
}

// how much $ do we have. store in here:
var dollarAmount = 0;

// i want to strip down to the value of each coin
var valueOfEach = {
    quarterValue: .25,
    nickelValue: .05,
    dimeValue: .10,
    pennyValue: .01
}

// multiply number of each coin by value of each coin 

var dollarAmount = (piggyBank.quarters * valueOfEach.quarterValue) + (piggyBank.nickels * valueOfEach.nickelValue) + (piggyBank.dimes * valueOfEach.dimeValue) + (piggyBank.quarters * valueOfEach.pennyValue);

console.log(dollarAmount);

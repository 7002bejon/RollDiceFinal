let numDice = 0;
let frequency = 0;
//Works
function changeVariables() {
    if (document.getElementById("1").checked) {
        numDice = 1;
    } else if (document.getElementById("2").checked) {
        numDice = 2;
    } else if (document.getElementById("3").checked) {
        numDice = 3;
    }
    let input = document.getElementById("frequencyInput");
    frequency = input.value;
}
//Works
function getRandom() {
    return 1 + Math.floor(Math.random() * 6);
}
//Works
function rollDice() {
    let individualResults = [];
    let finalResults = [];
    for (i = 0; i < frequency; i++) {
        let final = 0;
        for (j = 0; j < numDice; j++) {
         let roll = getRandom();
         final+= roll;
         individualResults.push(roll);
        }
        finalResults.push(final);
    }
    console.log(individualResults);
    console.log(finalResults);
}


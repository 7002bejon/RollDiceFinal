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
    let input = document.getElementById("frequencyInput").value;
    if (Number.isInteger(input)) {
        frequency = input;
    }
    console.log(frequency);
}

let numDice = 0;
let frequency = 0;
let individualResults = [];
let finalResults = [];
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
function initializeVariables() {
    individualResults = [];
    finalResults = [];
}
//Works
function rollDice() {
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

function makeTable() {
    let table = document.getElementById("tableBody");

    let Headrow = document.createElement("tr");

    let frequencyHead = document.createElement("th");
    frequencyHead.innerText = "Frequency";
    frequencyHead.colSpan = 2;
    Headrow.appendChild(frequencyHead);
    table.appendChild(Headrow);
    if (numDice == 2) {
    let doublesHead = document.createElement("th");
    doublesHead.innerText = "Doubles Rolled";
    Headrow.appendChild(doublesHead);
    table.appendChild(Headrow);
    } else if (numDice == 3) {
        let triplesHead = document.createElement("th");
        triplesHead.innerText = "Triples Rolled";
        Headrow.appendChild(triplesHead);
        table.appendChild(Headrow);
    }
    let meanHead = document.createElement("th");
    meanHead.innerText = "Mean";
    Headrow.appendChild(meanHead);
    table.appendChild(Headrow);
    let medianHead = document.createElement("th");
    medianHead.innerText = "Median";
    Headrow.appendChild(medianHead);
    table.appendChild(Headrow);
    let modeHead = document.createElement("th");
    modeHead.innerText = "Mode";
    Headrow.appendChild(modeHead);
    table.appendChild(Headrow);
    
    if (numDice == 1) {
      for (i = 1; i < 7; i++) {
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    c1.innerHTML = i;
    let count = 0;
    for (j = 0; j < finalResults.length; j++) {
        if (finalResults[j] == i) {
            count++;
            console.log("work");
        }
    }
    c2.innerHTML = count;
    }
}
// 2 Dice
if (numDice == 2) {
    let doublesRolled = 0;
    for (let k=0; k < individualResults.length; k++) {
        for (let l=1; l < individualResults.length; l++) {
            console.log(individualResults[k]);
            console.log(individualResults[l]);
            if (individualResults[k] == individualResults[l] && k != l) {
                doublesRolled++;
                console.log("yo");
            }
        }
      }
    //Frequency
    for (i = 2; i < 13; i++) {
  let row = table.insertRow(-1);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  if (i == 2) {
    let c3 = row.insertCell(2);
    c3.innerHTML = doublesRolled;
  }
  c1.innerHTML = i;
  let count = 0;
  for (j = 0; j < finalResults.length; j++) {
      if (finalResults[j] == i) {
          count++;
          console.log("work");
      }
  }
  c2.innerHTML = count;
  }
  //DoublesRolled
}

//3 Dice
if (numDice == 3) {
    for (i = 3; i < 19; i++) {
  let row = table.insertRow(-1);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  c1.innerHTML = i;
  let count = 0;
  for (j = 0; j < finalResults.length; j++) {
      if (finalResults[j] == i) {
          count++;
          console.log("work");
      }
  }
  c2.innerHTML = count;
  }
}

}

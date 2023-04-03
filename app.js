const bill = document.getElementById("bill");
const tipOutput = document.querySelector("[data-tip]");
const totalOutput = document.querySelector("[data-total]");
const tipTotalOutput = document.querySelector("[data-tip-total]");

const tipSlider = document.getElementById("tipAmount");
const personSlider = document.getElementById("personAmount");

const personOutput= document.querySelector("[data-persons");

const tipSplit = document.querySelector("[data-tip-split]");
const personSplit = document.querySelector("[data-total-split]");
const calculateButton = document.querySelector(".calculate-button");

let tip = 20;
let persons = 1;


 // displays the default slider value
 tipOutput.innerText = tipSlider.value + "%";
 personOutput.innerText = personSlider.value;


 // setting slider values to user input
tipSlider.oninput = function() {
    tipOutput.innerText = this.value + "%";
    tip = this.value;
}

personSlider.oninput = function() {
    personOutput.innerText = this.value;
    persons = this.value;
}

// validates input
function validateInput(input) {
    let dotInput;
    if (input.includes(",")) {
        dotInput = input.replace(",", ".");
    } else {
        dotInput = input;
    }
    if (!isNaN(dotInput) && (dotInput > 0)) {
        calculateBill(parseFloat(dotInput));
    } else {
        alert("Please insert valid value.");
    }
}

// calculates the tips from validated input
function calculateBill(userInput) {

    const tipTotal = Number((userInput * (parseFloat(tip)*0.01)).toFixed(2));
    const totalToPay = Number((userInput + tipTotal).toFixed(2));
    const tipsPerPerson = tipTotal / persons;
    const totalPerPerson = totalToPay / persons;

    totalOutput.innerText = totalToPay;
    tipTotalOutput.innerText = tipTotal;
    tipSplit.innerText = tipsPerPerson;
    personSplit.innerText = totalPerPerson;
}
 
// calculates the tips
calculateButton.addEventListener("click", () => {
    validateInput(bill.value);
})

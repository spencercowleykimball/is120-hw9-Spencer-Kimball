
// Setting the variable initial_cost to the starting input of the DOM text box, which is currently nothing
// and this value won't change until the addEventListener function happens.
// let initial_cost = document.querySelector("#numInput").value;
let initial_cost = 0;
let final_value = document.getElementById("final_price");

// This is the html p object in the html
let current_tip_p = document.getElementById("selected_tip");

// The initial cost plus the tip total
let total = 0;

// Set an initial default value for the tip value based on the radio button
// that was chosen to be the default
let tip_value = .1;

// This value will be the initial cost multiplied by the tip percentage
let tip_total = 0;

// To have one of the radio buttons selected at the beginning
let initial_radio = document.getElementById('tip1');
initial_radio.checked = true;

// Outputting to the console log the current value of the "Initial Price"
// This function is triggered when the user starts typing inside of the text box
numInput.addEventListener("input", function () {
    initial_cost = Number(numInput.value);
    calculateTotal();
})


function calculateTotal() {
    // The global variables have all been updated at this point
    // just need to calculate the totals
    tip_total = tip_value*initial_cost;
    total = tip_total + initial_cost;

    // Round to two decimal places
    total = total.toFixed(2);

    // Change final_value's innerHTML attribute to be the 
    // final string of Final Price with the total value
    final_value.innerHTML = "Final Price: " + total;
    current_tip_p.innerHTML = "Selected Tip Amount: " + tip_total.toFixed(2);
}


// Set the global variable of tip value to the value inside of 
//  the tip1 input radio button
tip1.addEventListener("input", function () {
    tip_value = tip1.value;
    calculateTotal();
})
tip2.addEventListener("input", function () {
    tip_value = tip2.value;
    calculateTotal();
})
tip3.addEventListener("input", function () {
    tip_value = tip3.value;
    calculateTotal();
})
tip4.addEventListener("input", function () {
    tip_value = tip4.value;
    calculateTotal();
})















// *************************************************************************************************************************************
// ************************************************************ May Be Useful **********************************************************
// *************************************************************************************************************************************
// document.getElementsByName('tip')
//     .forEach(radio => {
//         if (radio.checked) {
//             console.log(radio.value);
//         }
//     });
// 
// 
// These don't output any values because at the beginning of the script they aren't given any values!
// console.log(tip_value);
// console.log(tip_value*numInput.value + numInput.value);
// 
// blah blah is outputted to the web console because it is given a value directly in the script!
// let new_val = "blah blah";
// console.log(new_val);






















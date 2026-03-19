// FIXME!! Currently I have the tip and the initial cost values, but now
// I need to inject them into a p tag in the html
// and make the caculator presentable!


// Setting the variable initial_cost to the starting input of the DOM text box, which is currently nothing
// and this value won't change until the addEventListener function happens.
// let initial_cost = document.querySelector("#numInput").value;
let initial_cost = 0;
let final_value = 0;

// Outputting to the console log the current value of the "Initial Price"
// This function is triggered when the user starts typing inside of the text box
numInput.addEventListener("input", function () {
    initial_cost = Number(numInput.value);
    console.log(numInput.value)
})


function calculateTotal() {
    console.log("Final Tip Value: ", tip_value*initial_cost + initial_cost);
}

let tip_value;

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


// These don't output any values because at the beginning of the script they aren't given any values!
// console.log(tip_value);
// console.log(tip_value*numInput.value + numInput.value);

// blah blah is outputted to the web console because it is given a value directly in the script!
// let new_val = "blah blah";
// console.log(new_val);









// *************************************************************************************************************************************
// ************************************************************ May Be Useful **********************************************************
// *************************************************************************************************************************************
// document.getElementsByName('tip')
//     .forEach(radio => {
//         if (radio.checked) {
//             console.log(radio.value);
//         }
//     });

























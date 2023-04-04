



// let output = document.getElementById("output");

// function insert(value) {
//     output.value += value;
// }

// function clearOutput() {
//     output.value = "";
// }

// function backspace() {
//     output.value = output.value.slice(0, -1);
// }

// function calculate() {
//     output.value = eval(output.value).toLocaleString();
// }
let output = document.getElementById("output");

function insert(value) {
    // Remove commas from existing output value
    let currentValue = output.value.replace(/,/g, '');

    // Add the new value
    currentValue += value;

    // Format the value with commas
    output.value = formatWithCommas(currentValue);
}

function clearOutput() {
    output.value = "";
}

function backspace() {
    let currentValue = output.value.replace(/,/g, '');

    // Remove the last character
    currentValue = currentValue.slice(0, -1);

    // Format the value with commas
    output.value = formatWithCommas(currentValue);
}

function calculate() {
    let currentValue = output.value.replace(/,/g, '');

    // Evaluate the expression
    let result = eval(currentValue);

    // Format the result with commas
    output.value = formatWithCommas(result);
}

function formatWithCommas(number) {
    // Convert the number to a string
    let str = number.toString();

    // Split the string into whole and decimal parts
    let parts = str.split('.');

    // Add commas to the whole part of the number
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Join the whole and decimal parts back together with a dot
    return parts.join('.');
}


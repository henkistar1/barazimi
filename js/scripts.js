function formatAllInputs() {
  // Get the form element
  const form = document.querySelector('form');

  // Get all input fields in the form
  const inputs = form.querySelectorAll('input[type="text"], input[type="number"]');

  // Loop through each input and format it with commas
  inputs.forEach(input => {
    // Get the input value and remove any non-numeric characters
    let value = input.value.toString().replace(/[^\d.]/g, '');

    // Split the value into whole and decimal parts
    const parts = value.split('.');

    // Add commas to the whole part of the number
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Join the whole and decimal parts back together with a dot
    value = parts.join('.');

    // Set the formatted value back in the input field
    input.value = value;
  });
}

function calculatePercentage() {
  var number = parseFloat(document.getElementById("number").value.replaceAll(',', ''));
  var percentage = parseFloat(document.getElementById("percentage").value);
  var percentageAmount = (number * percentage) / 100;
  var amount = number - percentageAmount;

  // Format the numbers with commas before displaying them
  document.getElementById("number").value = number.toLocaleString();
  document.getElementById("percentage-amount").innerText = percentageAmount.toLocaleString();
  document.getElementById("amount").value = amount.toLocaleString();
}

function clearAmount() {
  document.getElementById("number").value = "";
  document.getElementById("percentage").value = 35;
  document.getElementById("percentage-amount").innerText = "";
  document.getElementById("amount").value = "0";
}


//   function calculatePerqindja() {
//     var numri = document.getElementById("numri").value;
//     var perqindja = document.getElementById("perqindja").value;
//     var perqindjaAmount = (numri * perqindja) / 100;
//     document.getElementById("perqindja-amount").textContent = perqindjaAmount;
//   }
// function calculatePerqindje() {
//   var numri = document.getElementById("numri").value;
//   var perqindja = document.getElementById("perqindja").value;
//   var perqindjaAmount = (numri * perqindja) / 100;
//   var shuma = numri - perqindjaAmount;
//   document.getElementById("shuma").value = shuma;
//   document.getElementById("perqindja-amount").textContent = perqindjaAmount;
// }

// function clearShuma() {
//   document.getElementById("numri").value = "";
//   document.getElementById("perqindja").value = "";
//   document.getElementById("shuma").value = "";
//   document.getElementById("perqindja-amount").textContent = "";
// }
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

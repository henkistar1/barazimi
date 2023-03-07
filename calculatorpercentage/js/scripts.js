function calculatePercentage() {
    var number = document.getElementById("number").value;
    var percentage = document.getElementById("percentage").value;
    var percentageAmount = (number * percentage) / 100;
    var amount = number - percentageAmount;
    document.getElementById("amount").value = amount;
    document.getElementById("percentage-amount").textContent = percentageAmount;
  }
  function clearAmount() {
    document.getElementById("number").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("percentage-amount").textContent = "";
  }
  

//   function calculatePerqindja() {
//     var numri = document.getElementById("numri").value;
//     var perqindja = document.getElementById("perqindja").value;
//     var perqindjaAmount = (numri * perqindja) / 100;
//     document.getElementById("perqindja-amount").textContent = perqindjaAmount;
//   }
function calculatePerqindje() {
    var numri = document.getElementById("numri").value;
    var perqindja = document.getElementById("perqindja").value;
    var perqindjaAmount = (numri * perqindja) / 100;
    var shuma = numri - perqindjaAmount;
    document.getElementById("shuma").value = shuma;
    document.getElementById("perqindja-amount").textContent = perqindjaAmount;
  }

  function clearShuma() {
    document.getElementById("numri").value = "";
    document.getElementById("perqindja").value = "";
    document.getElementById("shuma").value = "";
    document.getElementById("perqindja-amount").textContent = "";
  }

  
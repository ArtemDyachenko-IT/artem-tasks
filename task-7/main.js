var firstNumber = prompt("enter you number: ", "");
var power = prompt("enter your power: ", "");

function calc(firstNumber, power) {
  var result = 1;
  for (var i = 0; i < power; i++) {
    result *= firstNumber;
  }
  return result;
  
}

alert(calc(firstNumber, power));





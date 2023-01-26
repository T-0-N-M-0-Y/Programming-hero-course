//convert string to numbers

//int

var number1 = "35";
var number2 = 40;
var total = number1 + number2;
console.log(total);

console.log(number1);
var newNumber1 = parseInt(number1)
console.log(newNumber1);

//float

var number3 = "3.41"
var newNumber2 = parseFloat(number3)
console.log(newNumber2);

//To Fixed
var num1 = 0.1;
var num2 = 0.2;
var result = num1 + num2;
//result = result.toFixed(1)
//result = result.toFixed(2)
result = result.toFixed(4)
result = parseFloat(result)
console.log(result);
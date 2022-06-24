// MÔ HÌNH 3 KHỐI TRÊN FILE HTML

// Exercise 1
function salary() {
  var salaryPerDay = 100000;
  var workingDays = document.getElementById("workingDays");
  var totalSalary = document.getElementById("totalSalary");

  workingDays = parseFloat(workingDays.value);

  totalSalary.value = salaryPerDay * workingDays;
}

// Exercise 2
function average() {
  var number1 = document.getElementById("number1");
  var number2 = document.getElementById("number2");
  var number3 = document.getElementById("number3");
  var number4 = document.getElementById("number4");
  var number5 = document.getElementById("number5");
  var sum = Number;
  var average = document.getElementById("average");

  number1 = parseFloat(number1.value);
  number2 = parseFloat(number2.value);
  number3 = parseFloat(number3.value);
  number4 = parseFloat(number4.value);
  number5 = parseFloat(number5.value);

  sum = number1 + number2 + number3 + number4 + number5;

  average.value = sum / 5;
}

// // Exercise 3
function vnd() {
  var usdPrice = 23500;
  var usdAmount = document.getElementById("usdAmount");
  var vndAmount = document.getElementById("vndAmount");

  usdAmount = parseFloat(usdAmount.value);

  vndAmount.value = usdAmount * 23500;
}

// Exercise 4
function areaperimeter() {
  var length = document.getElementById("length");
  var width = document.getElementById("width");
  var perimeter = document.getElementById("perimeter");
  var area = document.getElementById("area");

  length = parseFloat(length.value);
  width = parseFloat(width.value);

  perimeter.value = (length + width) * 2;
  area.value = length * width;
}

// Exercise 5
function sumunitdozen(){
var twoDigitNumber = document.getElementById("twoDigitNumber");
var unit = Number;
var dozen = Number;
var sumUnitDozen = document.getElementById("sumUnitDozen");

twoDigitNumber = parseFloat(twoDigitNumber.value);
unit = twoDigitNumber % 10;
dozen = Math.floor(twoDigitNumber / 10);

sumUnitDozen.value = unit + dozen;

}

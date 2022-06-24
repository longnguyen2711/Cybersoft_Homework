// MÔ HÌNH 3 KHỐI TRÊN FILE HTML

// Exercise 1
var salaryPerDay = 100000;
var workingDays = 5;
var totalSalary;

totalSalary = salaryPerDay * workingDays;

console.log("Tổng tiền lương là: ", totalSalary);


// Exercise 2
var number1 = 100;
var number2 = 100;
var number3 = 100;
var number4 = 100;
var number5 = 100;
var sum;
var average;

sum = number1 + number2 + number3 + number4 + number5;
average = sum / 5;

console.log("Giá trị trung bình của 5 số là:", average);


// Exercise 3
var usdPrice = 23500;
var usdAmount = 99;
var vndAmount;

vndAmount = usdAmount * 23500;

console.log("Số tiền sau khi quy đổi", usdAmount, "Usd là", vndAmount, "Vnđ");


// Exercise 4
var length = 6;
var width = 4;
var area;
var perimeter;

area = length * width;
perimeter = (length + width) * 2;

console.log("Diện tích hình chữ nhật là:", area);
console.log("Chu vi hình chữ nhật là:", perimeter);


// Exercise 5
var twoDigitNumber = 23;
var unit;
var dozen;
var sumUnitDozen;

unit = twoDigitNumber % 10;
dozen = Math.floor(twoDigitNumber / 10);
sumUnitsDozens = unit + dozen;

console.log("Tổng của hai số hàng chục và hàng đơn vị là:", sumUnitsDozens)


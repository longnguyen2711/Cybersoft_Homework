// Exercise 1
/* - Input: Lương theo ngày; Số ngày làm việc
   - Process (pseudo code): 
      1. Từ input: tạo biến salaryPerDay (Lương theo ngày); workingDays (Số ngày làm việc)
      2. Kiểm tra xem người dùng nhập phải giá trị số và số đó phải >=0, xuất thông báo nếu không phải
      3. Tạo biến để lưu output: totalSalary
      4. Tính tiền lương: totalSalary = workingDays * salaryPerDay
      5. In ra màn hình
   - Output: Tiền lương nhân viên */
document.getElementById("btnTotalSalary").onclick = function () {
  var salaryPerDay = 100000;
  var workingDays = document.getElementById("workingDays").value;
  if (isNaN(workingDays) || workingDays < 0) {
    alert("Vui lòng kiểm tra lại, ngày công phải là số và lớn hơn hoặc bằng 0");
    return false;
  } else {
    workingDays = parseFloat(workingDays);
    var totalSalary = salaryPerDay * workingDays;
    var result = "Tiền lương nhân viên là" + "</br>" + totalSalary;
    document.getElementById("divSalary").innerHTML = result;
    return true;
  }
};

// Exercise 2
/* - Input: Số thứ 1; Số thứ 2; Số thứ 3; Số thứ 4; Số thứ 5
   - Process: 
      1. Từ input: tạo biến number1; number2; number3; number 4; number5; sum (Tổng của 5 số)
      2. Kiểm tra xem người dùng nhập phải giá trị số, xuất thông báo nếu không phải
      3. Tạo biến để lưu output: average
      4. Tính giá trị trung bình: average = sum / 5
      5. In ra màn hình
   - Output: Giá trị trung bình */
document.getElementById("btnAverage").onclick = function () {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = document.getElementById("number3").value;
  var number4 = document.getElementById("number4").value;
  var number5 = document.getElementById("number5").value;
  if (
    isNaN(number1) ||
    isNaN(number2) ||
    isNaN(number3) ||
    isNaN(number4) ||
    isNaN(number5)
  ) {
    alert("Vui lòng kiểm tra lại, các số đã nhập không hợp lệ");
    return false;
  } else {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    number3 = parseFloat(number3);
    number4 = parseFloat(number4);
    number5 = parseFloat(number5);
    var sum = number1 + number2 + number3 + number4 + number5;
    var average = sum / 5;
    var result = "Giá trị trung bình của 5 số là" + "</br>" + average;
    document.getElementById("divAverage").innerHTML = result;
    return true;
  }
};

// Exercise 3
/* - Input: Giá trị 1 Usd khi đổi sang Vnd; Số lượng Usd
   - Process: 
      1. Từ input: tạo biến usdPrice (Giá trị 1 Usd khi đổi sang Vnd); usdAmount (Số lượng Usd)
      2. Kiểm tra xem người dùng nhập phải giá trị số và số đó phải >=0, xuất thông báo nếu không phải
      3. Tạo biến để lưu output: vndAmount
      4. Tính số tiền sau khi quy đổi: vndAmount  = usdPrice * usdAmount
      5. In ra màn hình
   - Output: Giá trị sau khi quy đổi sang Vnd */
document.getElementById("btnVndAmount").onclick = function () {
  var usdPrice = 23500;
  var usdAmount = document.getElementById("usdAmount").value;
  if (isNaN(usdAmount) || usdAmount < 0) {
    alert(
      "Vui lòng kiểm tra lại, số lượng USD phải là số và lớn hơn hoặc bằng 0"
    );
    return false;
  } else {
    usdAmount = parseFloat(usdAmount);
    var vndAmount = usdAmount * 23500;
    var result = "Giá trị sau khi quy đổi là" + "</br>" + vndAmount + " VNĐ";
    document.getElementById("divVndAmount").innerHTML = result;
    return true;
  }
};

// Exercise 4
/* - Input: Chiều dài; Chiều rộng
   - Process: 
      1. Từ input: tạo biến length (Chiều dài); width (Chiều rộng)
      2. Kiểm tra xem người dùng nhập phải giá trị số và số đó phải >=0, xuất thông báo nếu không phải
      3. Tạo biến để lưu output: periemter (Chu vi); area (Diện tích)
      4. Tính  chu vi và diện tích: area = length * width; perimeter = (length + width) * 2
      5. In ra màn hình
   - Output: Chu vi và diện tích */
document.getElementById("btnAreaPerimeter").onclick = function () {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  if (isNaN(length) || isNaN(width) || length < 0 || width < 0) {
    alert(
      "Vui lòng Kiểm tra lại, chiều dài và chiều rộng phải là số và không được âm"
    );
    return false;
  } else {
    length = parseFloat(length);
    width = parseFloat(width);
    var perimeter = (length + width) * 2;
    var area = length * width;
    var result = "Chu vi: " + perimeter + "<br>" + "Diện tích: " + area;
    document.getElementById("divAreaPerimeter").innerHTML = result;
    return true;
  }
};

// Exercise 5
/* - Input: Số tự nhiên có 2 chữ số; Chữ số hàng dơn vị; Chữ số hàng chục
   - Process: 
      1. Từ input: tạo biến twoDigitNumber (Số tự nhiên có 2 chữ số); unit (Số hàng đơn vị); dozen (Số hàng chục)
      2. Kiểm tra xem người dùng có đang nhập giá trị số và số đó chỉ được dao động trong khoảng -99 đến 99, xuất thông báo nếu không phải
      3. Tính:
        - Trường hợp 1: số đã nhập là số dương:
           + Tạo biến để lưu output: sumUnitDoze
           + Dùng parseFloat để đưa về kiểu dữ liệu số
           + Lọc ra chữ số hàng đơn vị bằng cách lấy phần dư của phép tính chia cho 10: unit = twoDigitNumber % 10
           + Lọc ra chữ số hàng chục bằng cách lấy phần nguyên là làm tròn xuống của phép tính chia cho 10: dozen = twoDigitNumber / 10
           + Tính tổng 2 chữ số hàng chục và hàng đơn vị: sumUnitDozen = unit + dozen
        - Trường hợp 2: số đã nhập là số âm:
           + Dùng parseFloat để đưa về kiểu dữ liệu số có thêm dấu trừ đằng trước
           + Làm tương tự trường hợp 1
      4. In ra màn hình
   - Output: Tổng của 2 số hàng chục và hàng đơn vị */
document.getElementById("btnSumUnitDozen").onclick = function () {
  var twoDigitNumber = document.getElementById("twoDigitNumber").value;
  if (
    isNaN(twoDigitNumber) ||
    twoDigitNumber >= 100 ||
    twoDigitNumber <= -100
  ) {
    alert("Nhập vào số tự nhiên có 2 chữ số");
    return false;
  } else {
    if (twoDigitNumber > 0) {
      twoDigitNumber = parseFloat(twoDigitNumber);
      var unit = twoDigitNumber % 10;
      var dozen = Math.floor(twoDigitNumber / 10);
      var sumUnitDozen = unit + dozen;
    } else {
      twoDigitNumber = -parseFloat(twoDigitNumber);
      var unit = twoDigitNumber % 10;
      var dozen = Math.floor(twoDigitNumber / 10);
      var sumUnitDozen = unit + dozen;
    }
  }
  var result =
    "Tổng của 2 số hàng chục và hàng đơn vị là" + "</br>" + sumUnitDozen;
  document.getElementById("divSumUnitDozen").innerHTML = result;
  return true;
};

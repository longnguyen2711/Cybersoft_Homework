// Exercise 1
/* - Input: 3 số nguyên
   - Process: 
      1. Từ input: tạo biến integer1, integer2, integer3 (Số thứ 1, 2, 3)
      2. Chèn hàm kiểm tra số
      3. Sắp xếp các số
          - Tạo biến để lưu output: ascending
          - Nhập hàm sắp xếp thứ tự tăng dần: sort(function(a, b){return a - b};
      4. In ra màn hình
   - Output: Thứ tự tăng dần của 3 số sau khi sắp xếp */
document.getElementById("btnAscending").onclick = function () {
  var integer1 = document.getElementById("integer1").value;
  var integer2 = document.getElementById("integer2").value;
  var integer3 = document.getElementById("integer3").value;
  if (
    checkNumber(integer1) === false ||
    checkNumber(integer2) === false ||
    checkNumber(integer3) === false
  ) {
    return false;
  } else {
    var ascending = [integer1, integer2, integer3];
    ascending.sort(function (a, b) {
      return a - b;
    });
    var result = "Sắp xếp theo thứ tự tăng dần" + "</br>" + ascending;
    document.getElementById("divAscending").innerHTML = result;
    return true;
  }
};
// Exercise 2
/* - Input: ký hiệu các thành viên trong gia đình Bố (B); Mẹ (M); Anh trai (A); Em gái(E)
   - Process:
      1. Từ input: tạo biến user để nhập các thành viên trong gia đình
      2. Kiểm tra xem người dùng có phải thành viên trong gia đình không (Sử dụng cấu trúc switch case)
          - Đưa ra lời chào tương ứng với từng thành viên: Bố (B); Mẹ (M); Anh trai (A); Em gái(E)
          - Đưa ra thông báo "Không phải thành viên trong gia đình" nếu ký tự nhập không khớp
      3. In ra màn hình
   - Output: Xin chào .... / Không phải thành viên trong gia đình */
document.getElementById("btnGreeting").onclick = function () {
  var user = prompt("Nhập tên người dùng");
  var greeting;
  switch (user) {
    case "B": {
      alert("Xin chào bố");
      greeting = "Xin chào bố";
      break;
    }
    case "M": {
      alert("Xin chào mẹ");
      greeting = "Xin chào mẹ";
      break;
    }
    case "A": {
      alert("Xin chào anh trai");
      greeting = "Xin chào anh trai";
      break;
    }
    case "E": {
      alert("Xin chào em gái");
      greeting = "Xin chào em gái";
      break;
    }
    default: {
      alert("Không phải thành viên trong gia đình");
      greeting = "Không phải thành viên trong gia đình";
    }
  }
  document.getElementById("divGreeting").innerHTML = greeting;
};

// Exercise 3
/* - Input: 3 số nguyên
   - Process:
      1. Từ input: tạo biến number1, number2, number3 (Số thứ 1, 2, 3)
      2. Chèn hàm kiểm tra số
      3. Phân loại chẵn lẻ
          - Tạo biến numberEven và numberOdd tương ứng với từng number
          - Dùng hàm if: nếu phép chia lấy phần dư cho 2 bằng 0 thì numberEven sẽ có giá trị là 1, numberOdd sẽ có giá trị là 0; còn lại numberOdd sẽ có giá trị là 1 và numberEven sẽ có giá trị là 0
          - Tạo biến để lưu output: evenTotal (tổng số chẵn) và oddTotal (tổng số lẻ): Giá trị bẳng tổng các numberEven và numberOdd tương ứng đã tính ở trên
      4. In ra màn hình
   - Output: Có ... số chẵn và ... số lẻ */
document.getElementById("btnEvenOdd").onclick = function () {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var number3 = document.getElementById("number3").value;
  if (
    checkNumber(number1) === false ||
    checkNumber(number2) === false ||
    checkNumber(number3) === false
  ) {
    return false;
  } else {
    if (number1 % 2 === 0) {
      var number1Even = 1;
      var number1Odd = 0;
    } else {
      number1Even = 0;
      number1Odd = 1;
    }
    if (number2 % 2 === 0) {
      var number2Even = 1;
      var number2Odd = 0;
    } else {
      number2Even = 0;
      number2Odd = 1;
    }
    if (number3 % 2 === 0) {
      var number3Even = 1;
      var number3Odd = 0;
    } else {
      number3Even = 0;
      number3Odd = 1;
    }
  }
  var evenTotal = number1Even + number2Even + number3Even;
  var oddTotal = number1Odd + number2Odd + number3Odd;
  var result = `Có ${evenTotal} số chẵn và ${oddTotal} số lẻ`;
  document.getElementById("divEvenOdd").innerHTML = result;
  return true;
};

// Exercise 4
/* - Input: 3 cạnh của tam giác
   - Process:
      1. Từ input: tạo biến side1; side 2; side3
      2. Kiểm tra xem người dùng có nhập đủ dữ liệu vào các ô không, xuất thông báo nhắc nhở nếu chưa nhập đử dữ liệu
      3. Kiểm tra xem người dùng nhập phải giá trị số hay không (isNaN), xuất thông báo nhắc nhở nếu không phải
      4. Nếu 3 số đã nhập là số:
          - Chuyển dữ liệu về kiểu số nguyên: parseFloat
          - Kiểm tra xem cạnh đã nhập có phải số dương hay không
          - Xuất thông báo nhắc nhở nếu không phải
          - Nếu 3 cạnh đã nhập là số dương:
             + Kiểm tra xem 3 cạnh đã nhập có cấu thành nên 1 tam giác hay không (tổng 2 cạnh luôn lớn hơn cạnh còn lại), xuất thông bác nhắc nhở nếu không phải
             + Nếu 3 cạnh đã nhập là phù hợp, xét hàm if từ trên xuống:
                 Tam giác thường: có 3 cạnh khác nhau
                 Tam giác cân: có 2 cạnh bằng nhau
                 Tam giác vuông cân: có 2 cạnh bằng nhau và bình phương 1 cạnh bằng tổng bình phương hai cạnh còn lại (tạo biến slideSquare (bình phương cạnh) ứng với mỗi Slide)
                 Tam giác vuông: bình phương 1 cạnh bằng tổng bình phương hai cạnh còn lại
                 Tam giác đều: có 2 cạnh bằng nhau
      5. In ra màn hình
   - Output: Đây là tam giác thường / cân / vuông cân / vuông / đều */
document.getElementById("btnTriangle").onclick = function () {
  var slide1 = document.getElementById("slide1").value;
  var slide2 = document.getElementById("slide2").value;
  var slide3 = document.getElementById("slide3").value;
  var typeTriangle = document.getElementById("divTriangle");
  if (slide1 === "" || slide2 === "" || slide3 === "") {
    alert("Chưa nhập đủ dữ liệu, không được để trống");
    return false;
  } else if (isNaN(slide1) || isNaN(slide2) || isNaN(slide3)) {
    alert("3 cạnh đã nhập phải ở dạng số");
    return false;
  } else if (slide1 <= 0 || slide2 <= 0 || slide3 <= 0) {
    alert("Chiều dài các cạnh phải là số dương");
    return false;
  } else {
    slide1 = parseFloat(slide1);
    slide2 = parseFloat(slide2);
    slide3 = parseFloat(slide3);
    if (
      slide1 + slide2 < slide3 ||
      slide2 + slide3 < slide1 ||
      slide1 + slide3 < slide2
    ) {
      alert("Các cạnh đã nhập không cấu thành nên 1 tam giác");
      return false;
    }
    if (slide1 !== slide2 && slide2 !== slide3 && slide1 !== slide3) {
      typeTriangle = "thường";
    }
    if (slide1 === slide2 || slide2 === slide3 || slide1 === slide3) {
      typeTriangle = "cân";
    }
    var slide1Square = slide1 * slide1;
    var slide2Square = slide2 * slide2;
    var slide3Square = slide3 * slide3;
    if (
      (slide1 === slide2 || slide2 === slide3 || slide1 === slide3) &&
      (slide1Square === slide2Square + slide3Square ||
        slide2Square === slide1Square + slide3Square ||
        slide3Square === slide1Square + slide2Square)
    ) {
      typeTriangle = "vuông cân";
    }
    if (
      slide1Square === slide2Square + slide3Square ||
      slide2Square === slide1Square + slide3Square ||
      slide3Square === slide1Square + slide2Square
    ) {
      typeTriangle = "vuông";
    }
    if (slide1 === slide2 && slide2 === slide3) {
      typeTriangle = "đều";
    }
  }
  var result = `Đây là tam giác ${typeTriangle}`;
  document.getElementById("divTriangle").innerHTML = result;
  return true;
};

/* <----BÀI TẬP THÊM----> */

// Exercise 1
/* - Input: ngày; tháng; năm
   - Process: 
      1. Từ input (input type = number để người dùng chỉ có thể nhập giá trị số): tạo biến day (ngày); month (tháng); year (năm)
      2. Kiểm tra và xuất thông báo nếu không thỏa điều kiện
          - Người dùng chưa nhập đủ dữ liệu vào các ô
          - Người dùng nhập số âm, số tháng lớn hơn 12
          - Người dùng không nhập số nguyên (sử dụng phép chia cho 2 lấy phần dư nếu phần dư khác 0 và 1 thì không phải số nguyên), xuất thông báo nhắc nhở nếu không phải
          - Người dùng nhập ngày 31 vào những tháng chỉ có 28 29 hoặc 30 ngày (2, 4, 6, 9, 11) 
            Kiểm tra số ngày trong tháng đó dayNumberInMonth thông qua month và year, sau đó so sánh với số ngày mà người dùng nhập vào, nếu ngày người dùng nhập vào lớn hơn thì không hợp lệ
      3. Nếu thỏa tất cả điều kiện trên: 
          - Tạo biến addDate: dùng hàm new Date và nhận các giá trị ngày tháng năm từ các biến day, month, year
          - Tạo biến addDayAfter và addDayBefore: +1 và -1 để có được ngày trước và sau
          - Tạo biến dayAfter và dayBefore: trích xuất ngày tháng năm từ biến addDayAfter và addDayBefore đã tạo ở trên 
          - Chú ý: không trích xuất kết quả và cộng trừ ngày trực tiếp từ biến addDate nếu không sẽ xuất hiện ngày 32 (Em đoán đại chứ cũng ko rõ chỗ này -_-) 
          - Chú ý: chỗ tháng phải -1 sau đó +1 bởi vì nhập số 12 sẽ tự động nhảy thành số 0 (Em làm đại chứ cũng ko rõ chỗ này -_-)
      4. In ra màn hình
   - Output: Ngày hôm trước và ngày hôm sau của ngày đã nhập */
document.getElementById("btnDayMonthYear").onclick = function () {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  if (day === "" || month === "" || year === "") {
    alert("Chưa nhập đủ dữ liệu, không được để trống");
    return false;
  } else day = parseFloat(day);
  month = parseFloat(month);
  year = parseFloat(year);
  if (year < 0 || month < 1 || month > 12 || day < 0) {
    alert(
      "Không hợp lệ, ngày tháng năm phải là số dương, tháng phải nằm trong khoảng 1 đến 12"
    );
    return false;
  } else var dayDivisionTwo = day % 2;
  var monthDivisionTwo = month % 2;
  var yearDivisionTwo = year % 2;
  if (
    (dayDivisionTwo !== 0 && dayDivisionTwo !== 1) ||
    (monthDivisionTwo !== 0 && monthDivisionTwo !== 1) ||
    (yearDivisionTwo !== 0 && yearDivisionTwo !== 1)
  ) {
    alert("Không hợp lệ, ngày tháng năm phải là số nguyên");
    return false;
  } else var dayCondition = new Date(year, month, 0);
  var dayNumberInMonth = new Date(dayCondition).getDate();
  if (dayNumberInMonth < day) {
    alert(
      "Ngày không hợp lệ, không có ngày này trong tháng đã nhập, vui lòng kiểm tra lại"
    );
    return false;
  } else {
    var addDate = new Date(year, month - 1, day);
    var addDayAfter = new Date(
      addDate.getFullYear(),
      addDate.getMonth(),
      addDate.getDate() + 1
    );
    var addDayBefore = new Date(
      addDate.getFullYear(),
      addDate.getMonth(),
      addDate.getDate() - 1
    );
    var dayAfter = `Ngày hôm sau: ${addDayAfter.getDate()} / ${
      addDayAfter.getMonth() + 1
    } / ${addDayAfter.getFullYear()}`;
    var dayBefore = `Ngày hôm trước: ${addDayBefore.getDate()} / ${
      addDayBefore.getMonth() + 1
    } / ${addDayBefore.getFullYear()}`;
  }
  var result = `${dayBefore} <br> ${dayAfter}`;
  document.getElementById("divDayMonthYear").innerHTML = result;
  return true;
};

// Exercise 2
/* - Input: ngày; tháng; năm
   - Process: 
      1. Từ input (input type = number để người dùng chỉ có thể nhập giá trị số): tạo biến monthE2 (tháng); yearE2 (năm)
      2. Kiểm tra và xuất thông báo nếu không thỏa điều kiện
          - Người dùng chưa nhập đủ dữ liệu vào các ô
          - Người dùng nhập số âm, số tháng lớn hơn 12
          - Người dùng không nhập số nguyên (sử dụng phép chia cho 2 lấy phần dư nếu phần dư khác 0 và 1 thì không phải số nguyên), xuất thông báo nhắc nhở nếu không phải
      3. Nếu thỏa tất cả điều kiện trên: 
          - Tạo biến dayE2Condition = new Date(yearE2, monthE2, 0) để lấy ngày tháng từ monthE2 và yearE2
          - Tạo biến dayNumberInMonth = new Date(dayE2Condition).getDate() để lấy ngày từ dayE2Condition
      4. In ra màn hình
   - Output: Tháng này có ... ngày */
document.getElementById("btnDayInMonth").onclick = function () {
  var monthE2 = document.getElementById("monthE2").value;
  var yearE2 = document.getElementById("yearE2").value;
  var monthE2DivisionTwo = monthE2 % 2;
  var yearE2DivisionTwo = yearE2 % 2;
  if (monthE2 === "" || yearE2 === "") {
    alert("Chưa nhập đủ dữ liệu, không được để trống");
    return false;
  } else if (yearE2 < 0 || monthE2 < 1 || monthE2 > 12) {
    alert(
      "Không hợp lệ, tháng và năm phải là số dương, tháng không lớn hơn 12"
    );
    return false;
  } else if (
    (monthE2DivisionTwo !== 0 && monthE2DivisionTwo !== 1) ||
    (yearE2DivisionTwo !== 0 && yearE2DivisionTwo !== 1)
  ) {
    alert("Không hợp lệ, tháng và năm phải là số nguyên");
    return false;
  } else {
    var dayE2Condition = new Date(yearE2, monthE2, 0);
    var dayNumberInMonth = new Date(dayE2Condition).getDate();
  }
  var result = `Tháng này có ${dayNumberInMonth} ngày`;
  document.getElementById("divDayInMonth").innerHTML = result;
  return true;
};

// Exercise 3
/* - Input: Số tự nhiên có 3 chữ số
     - Process: 
        1. Từ input: tạo biến threeDigitNumber (Số tự nhiên có 3 chữ số)
        2. - Chèn hàm kiểm tra số
    	     - Số nhập vào phải trong khoảng -999 đến 999 và không tính khoảng -99 đến 99
        3. Tính:
           - Trường hợp 1: số đã nhập phải là số dương và >= 100 (xuất thông báo nếu không thỏa điều kiện):
              + Dùng parseFloat để đưa về kiểu dữ liệu số
              + Tạo biến: hundred; dozen và unit để lọc ra các chữ số hàng trăm, hàng chục và hàng đơn vị
              + Lọc ra chữ số hàng đơn vị bằng cách lấy phần dư của phép tính chia cho 10: unit = threeDigitNumber % 10
              + Lọc ra chữ số hàng chục bằng cách lấy phần dư của phép tính chia cho 100, sau đó lấy phần nguyên làm tròn xuống của phép tính chia cho 10: dozen = Math.floor((threeDigitNumber % 100) / 10)
              + Lọc ra chữ số hàng trăm bằng cách lấy phần nguyên là làm tròn xuống của phép tính chia cho 100: hundred = threeDigitNumber / 100
              + Tạo hàm để đọc các số hàng trăm, hàng chục, hàng đơn vị ứng với các số và chèn vào
           - Trường hợp 2: số đã nhập là số âm và phải <= -100
              + Dùng parseFloat để đưa về kiểu dữ liệu số có thêm dấu trừ đằng trước, chú ý thêm dấu trừ để đọc hàng trăm khi khai báo hàm cho readHundred
              + Làm tương tự trường hợp 1
        5. In ra màn hình: ghép cách đọc 3 số lại (readHundred, readDozen, readUnit) */
document.getElementById("btnSumUnitDozen").onclick = function () {
  var threeDigitNumber = document.getElementById("threeDigitNumber").value;
  if (checkNumber(threeDigitNumber) === false) {
    return false;
  } else if (
    threeDigitNumber >= 1000 ||
    threeDigitNumber <= -1000 ||
    (threeDigitNumber > -100 && threeDigitNumber < 100)
  ) {
    alert("Không hợp lệ, nhập vào số tự nhiên có 3 chữ số");
    return false;
  } else {
    if (threeDigitNumber >= 100) {
      threeDigitNumber = parseFloat(threeDigitNumber);
      var hundred = Math.floor(threeDigitNumber / 100);
      var readHundred = readHundredNumber(hundred);
    } else if (threeDigitNumber <= -100) {
      threeDigitNumber = -parseFloat(threeDigitNumber);
      var hundred = Math.floor(threeDigitNumber / 100);
      var readHundred = readHundredNumber(-hundred);
    }
    var unit = threeDigitNumber % 10;
    var dozen = Math.floor((threeDigitNumber % 100) / 10);
    var readDozen = readDozenNumber(dozen, unit);
    var readUnit = readUnitNumber(unit);
  }
  var result = `${readHundred} ${readDozen} ${readUnit}`;
  document.getElementById("divSumUnitDozen").innerHTML = result;
  return true;
};

function readHundredNumber(hundred) {
  if (hundred === 0) {
    return "";
  } else if (hundred === 1) {
    return "Một trăm";
  } else if (hundred === -1) {
    return "Âm một trăm";
  } else if (hundred === 2) {
    return "Hai trăm";
  } else if (hundred === -2) {
    return "Âm hai trăm";
  } else if (hundred === 3) {
    return "Ba trăm";
  } else if (hundred === -3) {
    return "Âm ba trăm";
  } else if (hundred === 4) {
    return "Bốn trăm";
  } else if (hundred === -4) {
    return "Âm bốn trăm";
  } else if (hundred === 5) {
    return "Năm trăm";
  } else if (hundred === -5) {
    return "Âm năm trăm";
  } else if (hundred === 6) {
    return "Sáu trăm";
  } else if (hundred === -6) {
    return "Âm sáu trăm";
  } else if (hundred === 7) {
    return "Bảy trăm";
  } else if (hundred === -7) {
    return "Âm bảy trăm";
  } else if (hundred === 8) {
    return "Tám trăm";
  } else if (hundred === -8) {
    return "Âm tám trăm";
  } else if (hundred === 9) {
    return "Chín trăm";
  } else if (hundred === -9) {
    return "Âm chín trăm";
  }
}
function readDozenNumber(dozen, unit) {
  if (dozen === 0) {
    if (unit === 0) {
      return "";
    } else {
      return "linh";
    }
  } else if (dozen === 1) {
    return "mười";
  } else if (dozen === 2) {
    return "hai mươi";
  } else if (dozen === 3) {
    return "ba mươi";
  } else if (dozen === 4) {
    return "bốn mươi";
  } else if (dozen === 5) {
    return "năm mươi";
  } else if (dozen === 6) {
    return "sáu mươi";
  } else if (dozen === 7) {
    return "bảy mươi";
  } else if (dozen === 8) {
    return "tám mươi";
  } else if (dozen === 9) {
    return "chín mươi";
  }
}
function readUnitNumber(unit) {
  if (unit === 0) {
    return "";
  } else if (unit === 1) {
    return "một";
  } else if (unit === 2) {
    return "hai";
  } else if (unit === 3) {
    return "ba";
  } else if (unit === 4) {
    return "bốn";
  } else if (unit === 5) {
    return "năm";
  } else if (unit === 6) {
    return "sáu";
  } else if (unit === 7) {
    return "bảy";
  } else if (unit === 8) {
    return "tám";
  } else if (unit === 9) {
    return "chín";
  }
}

// Exercise 4
/* - Input: tọa độ X Y của các sinh viên A; B; C và trường học
   - Process: 
      1. Từ input: coordinatesX coordinatesY ứng với các sinh viên A; B; C và trường học
      2. Kiểm tra xem người dùng có nhập đủ dữ liệu vào các ô không, xuất thông báo nhắc nhở nếu chưa nhập đử dữ liệu
      3. Nếu thỏa điều kiện: 
          - Tạo các biến distanceFromA distanceFromB distanceFromC đại diện cho khoảng cách từ nhà mỗi sinh viên đén trường
          - Dùng công thức toán học để tính khoảng cách từ nhà các sinh viên đến trường (chèn hàm)
              + Math.round: làm tròn 2 chữ số sau dấu thập phân
              + Math.sqrt: căn bậc hai
          - Tạo biến distanceGroup để gom nhóm các khoảng cách đã tính
          - Tạo biến distanceFurthest và dùng hàm Math.max.apply(Math, distanceGroup) để lọc ra khoang cách xa nhất
      4. Xét các trường hợp:
          - Nhà cả 3 sinh viên bằng nhau
          - Nhà 2 trong số 3 sinh viên bằng nhau và xa hơn nhà sinh viên còn lại
          - Nhà 1 sinh viên xa nhất
      5. In ra màn hình
   - Output: Khoảng cách từ nhà mỗi sinh viên đến trường và kết luận nhà sinh viên nào xa trường nhất */
document.getElementById("btnFurthestStudent").onclick = function () {
  var coordinatesAX = document.getElementById("coordinatesAX").value;
  var coordinatesAY = document.getElementById("coordinatesAY").value;
  var coordinatesBX = document.getElementById("coordinatesBX").value;
  var coordinatesBY = document.getElementById("coordinatesBY").value;
  var coordinatesCX = document.getElementById("coordinatesCX").value;
  var coordinatesCY = document.getElementById("coordinatesCY").value;
  var coordinatesSchoolX = document.getElementById("coordinatesSchoolX").value;
  var coordinatesSchoolY = document.getElementById("coordinatesSchoolY").value;
  if (
    coordinatesAX === "" || coordinatesAY === "" ||
    coordinatesBX === "" || coordinatesBY === "" ||
    coordinatesCX === "" || coordinatesCY === "" ||
    coordinatesSchoolX === "" || coordinatesSchoolY === ""
  ) {
    alert("Chưa nhập đủ dữ liệu, không được để trống");
    return false;
  } else {
    var distanceFromA = mathDistance(
      coordinatesAX, coordinatesAY,
      coordinatesSchoolX, coordinatesSchoolY
    );
    var distanceFromB = mathDistance(
      coordinatesBX, coordinatesBY,
      coordinatesSchoolX, coordinatesSchoolY
    );
    var distanceFromC = mathDistance(
      coordinatesCX, coordinatesCY,
      coordinatesSchoolX, coordinatesSchoolY
    );
    var distanceGroup = [distanceFromA, distanceFromB, distanceFromC];
    var distanceFurthest = Math.max.apply(Math, distanceGroup);
    if (distanceFromA === distanceFromB && distanceFromB === distanceFromC) {
      studentFurthest = "nhà cả 3 sinh viên cách trường một khoảng bằng nhau";
    } else if (
      distanceFromA === distanceFromB &&
      distanceFromA > distanceFromC
    ) {
      studentFurthest =
        "nhà sinh viên A và B xa hơn C và cách trường một khoảng bằng nhau";
    } else if (
      distanceFromA === distanceFromC &&
      distanceFromA > distanceFromB
    ) {
      studentFurthest =
        "nhà sinh viên A và C xa hơn B và cách trường một khoảng bằng nhau";
    } else if (
      distanceFromB === distanceFromC &&
      distanceFromB > distanceFromA
    ) {
      studentFurthest =
        "nhà sinh viên B và C xa hơn A và cách trường một khoảng bằng nhau";
    } else if (distanceFurthest === distanceFromA) {
      studentFurthest = "nhà sinh viên A ở xa trường nhất";
    } else if (distanceFurthest === distanceFromB) {
      studentFurthest = "nhà sinh viên B ở xa trường nhất";
    } else if (distanceFurthest === distanceFromC) {
      studentFurthest = "nhà sinh viên C ở xa trường nhất";
    }
  }
  var result = `Từ nhà A đến trường: ${distanceFromA} <br> Từ nhà B đến trường: ${distanceFromB} <br> Từ nhà C đến trường: ${distanceFromC} <br><br> Vậy ${studentFurthest}`;
  document.getElementById("divFurthestStudent").innerHTML = result;
  return true;
};
function mathDistance(studentX, studentY, schoolX, schoolY) {
  return (
    Math.round(Math.sqrt(studentX ** schoolX + studentY ** schoolY) * 100) / 100
  );
}

/* Hàm kiểm tra số nhập vào và xuất thông báo nếu không thỏa điều kiện (Dùng cho Bài 3; Bài 4; Bài 5)
    - Người dùng chưa nhập dữ liệu vào ô
    - Người dùng nhập chữ 
    - Người dùng nhập số không phải số nguyên */
function checkNumber(number) {
  if (number === "") {
    alert("Chưa nhập đủ dữ liệu, không được để trống");
    return false;
  }
  if (isNaN(number)) {
    alert("Chỉ được nhập giá trị số");
    return false;
  }
  if (number % 2 !== 0 && number % 2 !== 1 && number % 2 !== -1) {
    alert("Phải nhập vào số nguyên");
    return false;
  }
}

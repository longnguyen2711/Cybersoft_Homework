// Exercise 1
/* - Input: none
   - Process: 
      1. Tạo biến i = 0; sumFrom1ToN = 0 (tổng các số i từ 1 đến n với n là số cần tìm theo đề bài);
      2. Sử dụng hàm lặp do while:
          - do:
             + Tính tổng cộng dồn các số i từ 1 đến n: sumFrom1ToN += i
             + Tăng i thêm 1 đơn vị sau mỗi lần lặp: i++
          - while: điều kiện lặp sumFrom1ToN < 10000
      3. Ngay khi sumFrom1ToN > 10000 sẽ không thỏa điều kiện, hàm lặp sẽ dừng lại và ta xuất kết quả cuối cùng đó
      4. In ra màn hình
   - Output: Số nguyên nhỏ nhất thỏa điều kiện 1 + 2 + ... + n > 10000 và tổng các số từ 1 đến số nguyên thỏa điều kiện đó */
document.getElementById("btnFindNumber").onclick = function () {
  var i = 0;
  var sumFrom1ToN = 0;
  do {
    sumFrom1ToN += i;
    i++;
  } while (sumFrom1ToN < 10000);
  var finalResult = `Kết quả: ${i} <br> Tổng các số từ 1 đến ${i}: ${sumFrom1ToN}`;
  document.getElementById("divFindNumber").innerHTML = finalResult;
};

// Exercise 2
/* - Input: số x; số n
   - Process: 
      1. Từ input: tạo biến numberX; numberN
      2. Kiểm tra và xuất thông báo nếu không thỏa điều kiện
          - Người dùng chưa nhập đủ dữ liệu vào các ô
          - Người dùng nhập chữ cái
          - Người dùng nhập n không phải số nguyên hoặc n <= 0 (theo đề bài n phải > 0 và là số nguyên)
      3. Tạo biến SumExponential = 0; i = 1
      4. Sử dụng hàm lặp while: (điều kiện i <= numberN)
          - Tính tổng cộng dồn các số theo đề bài: SumExponential += Math.pow(numberX, i);
          - Tăng i lên 1 đơn vị sau mỗi lần lặp: i++
      5. In ra màn hình      
   - Output: số x; số n; tổng S(n) */
document.getElementById("btnSumExponential").onclick = function () {
  var numberX = document.getElementById("numberX").value;
  var numberN = document.getElementById("numberN").value;
  var SumExponential = 0;
  var i = 1;
  if (numberX === "" || numberN === "") {
    alert("Chưa nhập đủ dữ liệu");
    return false;
  } else if (isNaN(numberX) || isNaN(numberN)) {
    alert("Chỉ được nhập số");
    return false;
  } else if (numberN <= 0) {
    alert("n phải lớn hơn 0");
    return false;
  } else if (numberN % 2 !== 0 && numberN % 2 !== 1) {
    alert("n phải là số nguyên");
    return false;
  } else {
    while (i <= numberN) {
      SumExponential += Math.pow(numberX, i);
      i++;
    }
  }
  var finalResult = `x = ${numberX} <br> n = ${numberN} <br> S(${numberN}) = ${SumExponential}`;
  document.getElementById("divSumExponential").innerHTML = finalResult;
};

// Exercise 3
/* - Input: số cần tính giai thừa
   - Process: 
      1. Từ input: tạo biến numberCalcFactorial
      2. Chèn hàm kiểm tra số (js: 168)
      3. Tạo biến Factorial = 1;; i = 1
      4. Sử dụng hàm lặp while: (điều kiện i <= numberCalcFactorial)
          - Tính nhân cộng dồn các số theo đề bài: Factorial *= i;
          - Tăng i lên 1 đơn vị sau mỗi lần lặp: i++
      5. In ra màn hình
   - Output: Số cần tính giai thừa và giai thừa của số đó */
document.getElementById("btnCalcFactorial").onclick = function () {
  var numberCalcFactorial = document.getElementById(
    "numberCalcFactorial"
  ).value;
  var Factorial = 1;
  var i = 1;
  if (conditionInputNumber(numberCalcFactorial) === false) {
    return false;
  } else {
    while (i <= numberCalcFactorial) {
      Factorial *= i;
      i++;
    }
  }
  var finalResult = `Giai thừa của ${numberCalcFactorial} là ${Factorial}`;
  document.getElementById("divCalcFactorial").innerHTML = finalResult;
};

// Exercise 4
/* - Input: số thẻ div muốn tạo
   - Process: 
      1. Từ input: tạo biến numberDiv
      2. Chèn hàm kiểm tra số (js: 168)
      3. Tạo biến tagDiv; i = 1
      4. Sử dụng hàm lặp while: (điều kiện i <= numberDiv / i <=10)
          - Tạo 1 thẻ Div tương ứng với giá trị của i
          - Tăng i lên 1 đơn vị sau mỗi lần lặp: i++
          - Dùng hàm if: lấy i % 2 nếu:
             + Kết quả bằng 0 => Div chẵn => Tô màu đỏ
             + Kết quả khác 0 => Div lẻ => Tô màu xanh
      5. In ra màn hình
   - Output: Các thẻ div được tôm màu và đánh số thứ tự */
// Create n tag Div
document.getElementById("btnCreateDiv").onclick = function () {
  var numberDiv = document.getElementById("numberDiv").value;
  var i = 1;
  if (conditionInputNumber(numberDiv) === false) {
    return false;
  } else {
    while (i <= numberDiv) {
      var tagDiv = document.createElement("div");
      tagDiv.innerHTML = `Thẻ div thứ ${i}`;
      tagDiv.classList.add("div-exercise-4");
      document.getElementById("divCreateDiv").appendChild(tagDiv);
      i++;
      if (i % 2 === 0) {
        tagDiv.style.backgroundColor = "#dc3545";
      } else {
        tagDiv.style.backgroundColor = "#0d6efd";
      }
    }
  }
};
// Create 10 tag Div
document.getElementById("btnCreate10Div").onclick = function () {
  var i = 1;
  while (i <= 10) {
    var tagDiv = document.createElement("div");
    tagDiv.innerHTML = `Thẻ div thứ ${i}`;
    tagDiv.classList.add("div-exercise-4");
    document.getElementById("divCreate10Div").appendChild(tagDiv);
    i++;
    if (i % 2 === 0) {
      tagDiv.style.backgroundColor = "#dc3545";
    } else {
      tagDiv.style.backgroundColor = "#0d6efd";
    }
  }
};

// Exercise 5
/* - Input: số giới hạn muốn in các số nguyên tố nhỏ hơn nó
   - Process: 
      1. Từ input: tạo biến numberE5
      2. Chèn hàm kiểm tra số (js: 168)
      3. Tạo biến numberPrime = 1 (tổ hợp các số nguyên tố); flag (có phải là số nguyên tố hay không); i = 2
      4. Sử dụng hàm lặp for: (điều kiện i <= numberE5)
          - Xét nếu i = 2 thì flag = false (không phải số nguyên tố)
          - Xét thêm 1 hàm lặp for cho biến j
              + j < i; Tăng i lên 1 đơn vị sau mỗi lần lặp: j++
              + Nếu i chia hết chi j thì i không phải số nguyên tố
              + Ngược lại thì i là số nguyên tố
          - Xuất ra tất cả số i
      5. In ra màn hình
   - Output: Các số nguyên tố trong khoảng từ 1 đến numberE5 */
document.getElementById("btnPrintPrime").onclick = function () {
  var numberE5 = document.getElementById("numberE5").value;
  var numberPrime = "";
  if (conditionInputNumber(numberE5) === false) {
    return false;
  } else {
    for (var i = 2; i <= numberE5; i++) {
      var flag = true;
      for (var j = 2; j < i; j++) {
        if (i % j === 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        flag = i;
        numberPrime += `${flag} <br>`;
      }
    }
  }
  var finalResult = `Các số nguyên tố từ ${
    i - 1
  } trở xuống là: <br> ${numberPrime}`;
  document.getElementById("divPrintPrime").innerHTML = finalResult;
};

/* Hàm kiểm tra số nhập vào và xuất thông báo nếu không thỏa điều kiện (Dùng cho Bài 3; Bài 4; Bài 5)
    - Người dùng chưa nhập dữ liệu vào ô
    - Người dùng nhập chữ 
    - Người dùng nhập số âm 
    - Người dùng nhập số không phải số nguyên */
function conditionInputNumber(inputNumber) {
  if (inputNumber === "") {
    alert("Chưa nhập đủ dữ liệu");
    return false;
  } else if (isNaN(inputNumber)) {
    alert("Chỉ được nhập số");
    return false;
  } else if (inputNumber < 1) {
    alert("Số nhập phải lớn hơn 0");
    return false;
  } else if (inputNumber % 2 !== 0 && inputNumber % 2 !== 1) {
    alert("Số nhập phải là số nguyên");
    return false;
  }
}

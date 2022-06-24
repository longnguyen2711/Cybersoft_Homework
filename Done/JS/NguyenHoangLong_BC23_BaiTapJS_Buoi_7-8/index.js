var listNumberAdd = [];
/* Hàm kiểm tra số thực nhập vào (xuất thông báo nếu không thỏa điều kiện)
    - Người dùng chưa nhập dữ liệu vào ô
    - Người dùng nhập chữ */
function conditionInputRealNumber(inputNumber) {
  if (inputNumber === "") {
    alert("Chưa nhập dữ liệu");
    return false;
  } else if (isNaN(inputNumber)) {
    alert("Chỉ được nhập số");
    return false;
  }
}
/* Hàm kiểm tra số nguyên nhập vào (xuất thông báo nếu không thỏa điều kiện)
    - Chèn hàm kiểm tra số thực (chung điều kiện)
    - Người dùng nhập số không phải số nguyên */
function conditionInputIntegerNumber(inputNumber) {
  if (conditionInputRealNumber(inputNumber) === false) {
    return false;
  } else if (
    inputNumber % 2 !== 0 &&
    inputNumber % 2 !== 1 &&
    inputNumber % 2 !== -1
  ) {
    alert("Số nhập phải là số nguyên");
    return false;
  }
}
/* Hàm lưu số đã nhập vào mảng 
    - Nhập hàm kiểm tra số nguyên hoặc số thực 
    - Thêm giá trị của ô input vào mảng bằng push
    - Chuyển mảng thành dạng chuỗi để đưa ra màn hình */
function addNumber(conditionInput, number, listNumberAdd) {
  if (conditionInput(number) === false) {
    return false;
  } else {
    number = parseFloat(number);
    listNumberAdd.push(number);
    var stringListNumberAdd = listNumberAdd.join(" , ");
    return (printListNumber = `Dãy số đã nhập: [ ${stringListNumberAdd} ]`);
  }
}
// <--------------------------------------------------------------------------->

// <- 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 --------- >
/* - Input: các số nguyên
   - Process: 
      1. Từ input: tạo biến numberInteger
      2. Lưu các số nhập từ ô input vào mảng
          - Chèn hàm lưu số đã viết từ trước
          - Dùng push để thêm các số từ input vào mảng
          - Clear ô input sau mỗi lần bấm thêm vào
          - In ra màn hình những số đã nhập
      3. Viết hàm để tính: (Mỗi hàm ứng với một button, không hiển thị kết quả ra màn hình nếu chưa nhận giá trị từ ô input)
          - Tổng các số dương
          - Đếm các số dương
          - Tìm số nhỏ nhất
          - Tìm số dương nhỏ nhất
          - Tìm số chẵn nằm cuối cùng
          - Đổi chỗ 2 giá trị
          - Sắp xếp tăng dần
          - Tìm số nguyên tố đầu tiên
      4. In ra màn hình
   - Output: Các kết quả theo yêu cầu của đề bài */

// Thực hiện lưu các số nguyên nhập vào mảng (1, 2, 3, 4, 5, 6, 7, 8)
function addIntegerNumber() {
  var numberInteger = document.getElementById("numberInteger").value;
  addNumber(conditionInputIntegerNumber, numberInteger, listNumberAdd);
  document.getElementById("numberInteger").value = "";
  document.getElementById("btnAddIntegerNumber").classList.add("text-warning");
  document.getElementById("showList_integerNumberAdd").innerHTML = printListNumber;
}
// 1. Tổng các số dương trong mảng
document.getElementById("btn_sumPositiveNumbers").onclick = function () {
  var sumPositiveNumbers = 0;
  if (listNumberAdd.length === 0) {
    return false;
  } else {
    for (var i = 0; i < listNumberAdd.length; i++) {
      if (listNumberAdd[i] > 0) {
        sumPositiveNumbers += listNumberAdd[i];
      }
    }
  }
  document.getElementById("btn_sumPositiveNumbers").classList.add("btn-success", "text-warning");
  document.getElementById("btn_sumPositiveNumbers").styleclassName = "btn-success";
  document.getElementById("divResult_sumPositiveNumbers").style.display = "block";
  document.getElementById("divResult_sumPositiveNumbers").innerHTML = `Tổng các số dương là ${sumPositiveNumbers}`;
};
// 2. Đếm các số dương trong mảng
document.getElementById("btn_countPositiveNumbers").onclick = function () {
  var count = 0;
  if (listNumberAdd.length === 0) {
    return false;
  } else {
    for (var i = 0; i < listNumberAdd.length; i++) {
      if (listNumberAdd[i] > 0) {
        count++;
      }
    }
  }
  document.getElementById("btn_countPositiveNumbers").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_countPositiveNumbers").style.display = "block";
  document.getElementById("divResult_countPositiveNumbers").innerHTML = `Có ${count} số dương`;
};
// 3.Tìm số nhỏ nhất
document.getElementById("btn_minNumber").onclick = function () {
  if (listNumberAdd.length === 0) {
    return false;
  } else {
    for (var i = 0; i < listNumberAdd.length; i++) {
      var minimumNumber = Math.min.apply(Math, listNumberAdd);
    }
  }
  document.getElementById("btn_minNumber").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_minNumber").style.display = "block";
  document.getElementById("divResult_minNumber").innerHTML = `Số nhỏ nhất là ${minimumNumber}`;
};
// 4. Tìm số dương nhỏ nhất
document.getElementById("btn_minPositiveNumber").onclick = function () {
  if (listNumberAdd.length === 0) {
    return false;
  } else {
    var listPositiveNumbers = listNumberAdd.filter(function (n) {
      return n > 0;
    });
    if (listPositiveNumbers.length === 0) {
      var output_minNumber = "Không có số dương";
    } else {
      var minimumPositiveNumber = Math.min.apply(Math, listPositiveNumbers);
      output_minNumber = `Số dương nhỏ nhất là ${minimumPositiveNumber}`;
    }
  }
  document.getElementById("btn_minPositiveNumber").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_minPositiveNumber").style.display = "block";
  document.getElementById("divResult_minPositiveNumber").innerHTML = output_minNumber;
};
// 5. Tìm số chẵn cuối cùng trong mảng (Nếu mảng không có số chẵn thì trả về -1)
document.getElementById("btn_lastEvenNumber").onclick = function () {
  if (listNumberAdd.length === 0) {
    return false;
  } else {
    var listEvenNumbers = listNumberAdd.filter(function (n) {
      return n % 2 === 0;
    });
    if (listEvenNumbers.length === 0) {
      var output_lastEvenNumber = "Không có số chẵn (-1)";
    } else {
      output_lastEvenNumber = `Số chẵn cuối cùng là ${listEvenNumbers.pop()}`;
    }
  }
  document.getElementById("btn_lastEvenNumber").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_lastEvenNumber").style.display = "block";
  document.getElementById("divResult_lastEvenNumber").innerHTML = output_lastEvenNumber;
};
// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
document.getElementById("btn_swapTwoNumber").onclick = function () {
  var position_1 = document.getElementById("position_1").value;
  var position_2 = document.getElementById("position_2").value;
  if (listNumberAdd.length < 2) {
    alert("Phải có ít nhất 2 số để hoán đổi vị trí");
    return false;
  } else if (
    conditionInputIntegerNumber(position_1) === false ||
    conditionInputIntegerNumber(position_2) === false
  ) {
    return false;
  } else if (position_1 === position_2) {
    alert("Vị trí đổi của 2 số phải khác nhau");
    return false;
  } else if (
    listNumberAdd.length < position_1 ||
    listNumberAdd.length < position_2
  ) {
    alert("Vị trí đổi không thể lớn hơn tổng số phần tử trong mảng");
    return false;
  } else {
    position_1 = parseFloat(position_1);
    position_2 = parseFloat(position_2);
    var a = listNumberAdd[position_1 - 1];
    var b = listNumberAdd[position_2 - 1];
    listNumberAdd[position_1 - 1] = b;
    listNumberAdd[position_2 - 1] = a;
    var stringListNumberAdd = listNumberAdd.join(" , ");
  }
  document.getElementById("btn_swapTwoNumber").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_swapTwoNumber").style.display = "block";
  document.getElementById("divResult_swapTwoNumber").innerHTML = `Đổi chỗ vị trí thứ ${position_1} và thứ ${position_2}: [ ${stringListNumberAdd} ]`;
};
// 7. Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("btn_sortAscending").onclick = function () {
  if (listNumberAdd.length === 0) {
    return false;
  } else {
    var sortAscending = listNumberAdd.sort(function (a, b) {
      return a - b;
    });
  }
  var stringSortAscending = sortAscending.join(" , ");
  document.getElementById("btn_sortAscending").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_sortAscending").style.display = "block";
  document.getElementById("divResult_sortAscending").innerHTML = `Sắp xếp mảng tăng dần [ ${stringSortAscending} ]`;
};
// 8. Tìm số nguyên tố đầu tiên trong mảng (Nếu mảng không có số nguyên tố thì trả về -1)
document.getElementById("btn_firstPrimeNumber").onclick = function () {
  if (listNumberAdd.length === 0) {
    return false;
  } else {
    var listPrimeNumbers = listNumberAdd.filter(function (n) {
      for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
    if (listPrimeNumbers.length === 0) {
      var output_firstPrimeNumber = "Không có số nguyên tố (-1)";
    } else {
      output_firstPrimeNumber = `Số nguyên tố đầu tiên là ${listPrimeNumbers.shift()}`;
    }
  }
  document.getElementById("btn_firstPrimeNumber").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_firstPrimeNumber").style.display = "block";
  document.getElementById("divResult_firstPrimeNumber").innerHTML = output_firstPrimeNumber;
};
// <- 9 - 10 --------- >
/* - Input: các số thực
   - Process: 
      1. Từ input: tạo biến numberReal
      2. Lưu các số nhập từ ô input vào mảng
          - Chèn hàm lưu số đã viết từ trước
          - Dùng push để thêm các số từ input vào mảng
          - Clear ô input sau mỗi lần bấm thêm vào
          - In ra màn hình những số đã nhập
      3. Viết hàm để tính: (Mỗi hàm ứng với một button)
          - Đếm các số nguyên
          - So sánh số lượng số dương và số lượng số âm
      4. In ra màn hình
   - Output: Các kết quả theo yêu cầu của đề bài */

// Lưu các số thực nhập vào mảng (9, 10)
var listRealNumberAdd = [];
function addRealNumber(addNumber) {
  var numberReal = document.getElementById("numberReal").value;
  addNumber(conditionInputRealNumber, numberReal, listRealNumberAdd);
  document.getElementById("numberReal").value = "";
  document.getElementById("btnAddRealNumber").classList.add("text-warning");
  document.getElementById("showList_realNumberAdd").innerHTML = printListNumber;
}
// 9. Đếm số nguyên trong mảng
document.getElementById("btn_countIntegerNumbers").onclick = function () {
  var countInteger = 0;
  if (listRealNumberAdd.length === 0) {
    return false;
  } else {
    for (var i = 0; i < listRealNumberAdd.length; i++) {
      if (
        listRealNumberAdd[i] % 2 === 0 ||
        listRealNumberAdd[i] % 2 === 1 ||
        listRealNumberAdd[i] % 2 === -1
      ) {
        countInteger++;
      }
    }
  }
  document.getElementById("btn_countIntegerNumbers").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_countIntegerNumbers").style.display = "block";
  document.getElementById("divResult_countIntegerNumbers").innerHTML = `Có ${countInteger} số nguyên`;
};
// 10. So sánh số lượng số dương và số lượng số âm
document.getElementById("btn_comparePositiveNegative").onclick = function () {
  var countPoisitiveNumber = 0;
  var countNegativeNumber = 0;
  if (listRealNumberAdd.length === 0) {
    return false;
  } else {
    for (var i = 0; i < listRealNumberAdd.length; i++) {
      if (listRealNumberAdd[i] > 0) {
        countPoisitiveNumber++;
      } else {
        countNegativeNumber++;
      }
    }
    if (countPoisitiveNumber === countNegativeNumber) {
      var comparePositiveNegative = "Vậy số lượng số dương bằng số âm";
    } else if (countPoisitiveNumber > countNegativeNumber) {
      comparePositiveNegative = "Vậy số lượng số dương nhiều hơn số âm";
    } else {
      comparePositiveNegative = "Vậy số lượng số âm nhiều hơn số dương";
    }
  }
  document.getElementById("btn_comparePositiveNegative").classList.add("btn-success", "text-warning");
  document.getElementById("divResult_comparePositiveNegative").style.display = "block";
  document.getElementById("divResult_comparePositiveNegative").innerHTML = `Có ${countPoisitiveNumber} số dương và ${countNegativeNumber} số âm <br> ${comparePositiveNegative}`;
};

// <--------------------------------------------------------------------------->
// CREATE CARD
document.getElementById("btnCreateCard").onclick = function () {
  var numberCard = document.getElementById("numberCard").value; // Lấy giá trị ô input
  if (conditionInputIntegerNumber(numberCard) === false) { // Kiểm tra hợp lệ số nhập vào
    return false;
  } else {
    numberCard = parseFloat(numberCard);
    var divResult = document.getElementById("divResult"); // DOM đến thẻ chứa kết quả
    var cardBox = document.getElementById("content"); // DOM đến thẻ con của thẻ chứa kết quả
    for (i = 0; i < numberCard; i++) { // In kết quả
      cardBox.innerHTML += 
       `<div class="mt-4 ml-4">
          <div class="card text-white bg-dark">
              <img class="card-img-top" src="https://picsum.photos/300" alt="random-img">
              <div class="card-body">
                 <h4 class="card-title">Product name</h4>
                 <p class="card-text">Product price</p>
              </div>
          </div>
        </div>`;
    }
    document.getElementById("numberCard").value = ""; // Clear ô input sau mỗi lần click button
    divResult.style.display = "block"; // Hiển thị ô input khi click button
    cardBox.classList.add("d-flex", "justify-content-center") // Trang trí
    document.getElementById("btnCreateCard").classList.add("text-warning"); // Trang trí
  }
};

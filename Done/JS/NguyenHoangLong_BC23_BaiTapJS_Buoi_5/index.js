// Exercise 1
/* - Input: điểm chuẩn; điểm thi 3 môn; khu vực ưu tiên, đối tượng ưu tiên
   - Process: 
      1. Từ input: benchmark; firstScore; secondScore; thirdScore; regionScore; objectScore
      2. Kiểm tra: (xuất thông báo nhắc nhở nếu không thỏa điều kiện)
          - Nhập đủ dữ liệu vào các ô
          - Điểm nhập phải là giá trị số
          - Điểm thi nằm trong khoảng 0 - 10; Điểm chuẩn nằm trong khoảng 0 - 34.5
          - Giới hạn loại đối tượng dự thi (A, B, C, X) và khu vực ưu tiên (0, 1, 2, 3) được phép nhập
      3. Tính:
          - Điểm ưu tiên khu vực (regionScore) và điểm ưu tiên đối tượng (objectScore): dùng cấu trúc switch case
          - Tổng điểm (tạo biến totalScore) = điểm thi 1 + điểm thi 2 + điểm thi 3 + điểm ưu tiên khu vực + điểm ưu tiên đối tượng
      4. Xét đậu / rớt"
          - Trường hợp 1: trong 3 môn có 1 môn bị điểm 0 => rớt (điểm liệt)
          - Trường hợp 2: tổng điểm lớn hơn điểm chuẩn => đạt
          - Trường hợp 2: còn lại => rớt (không đủ điểm)
      5. In ra màn hình
   - Output: Xét đậu hay rớt và tổng điểm đạt được */

document.getElementById("btnScore").onclick = function () {
  var benchmark = document.getElementById("benchmark").value;
  var firstScore = document.getElementById("firstScore").value;
  var secondScore = document.getElementById("secondScore").value;
  var thirdScore = document.getElementById("thirdScore").value;
  var regionScore = document.getElementById("regionScore").value;
  var objectScore = +document.getElementById("objectScore").value;
  if (
    benchmark === "" ||
    firstScore === "" ||
    secondScore === "" ||
    thirdScore === "" ||
    objectScore === "" ||
    regionScore === ""
  ) {
    alert("Nhập thiếu dữ liệu, không được để trống");
    return false;
  } else if (
    isNaN(benchmark) ||
    isNaN(firstScore) ||
    isNaN(secondScore) ||
    isNaN(thirdScore)
  ) {
    alert("Điểm phải là số");
    return false;
  } else if (
    benchmark < 0 ||
    benchmark > 34.5 ||
    firstScore < 0 ||
    firstScore > 10 ||
    secondScore < 0 ||
    secondScore > 10 ||
    thirdScore < 0 ||
    thirdScore > 10
  ) {
    alert(
      "Điểm thi phải nằm trong khoảng (0 - 10); Điểm chuẩn phải nằm trong khoảng (0 - 34.5)"
    );
    return false;
  } else if (
    objectScore !== 0 &&
    objectScore !== 1 &&
    objectScore !== 2 &&
    objectScore !== 3
  ) {
    alert("Loại đối tượng dự thi không hợp lệ");
    return false;
  } else if (
    regionScore !== "A" &&
    regionScore !== "B" &&
    regionScore !== "C" &&
    regionScore !== "X"
  ) {
    alert("Khu vực không hợp lệ");
    return false;
  } else benchmark = parseFloat(benchmark);
  firstScore = parseFloat(firstScore);
  secondScore = parseFloat(secondScore);
  thirdScore = parseFloat(thirdScore);
  switch (regionScore) {
    case "A":
      regionScore = 2;
      break;
    case "B":
      regionScore = 1;
      break;
    case "C":
      regionScore = 0.5;
      break;
    default:
      regionScore = 0;
  }
  switch (objectScore) {
    case 1:
      objectScore = 2.5;
      break;
    case 2:
      objectScore = 1.5;
      break;
    case 3:
      objectScore = 1;
      break;
    default:
      objectScore = 0;
  }
  var totalScore =
    firstScore + secondScore + thirdScore + regionScore + objectScore;
  if (firstScore === 0 || secondScore === 0 || thirdScore === 0) {
    var result = "Rớt (điểm liệt)";
  } else if (totalScore >= benchmark) {
    result = "Đậu";
  } else {
    result = "Rớt (không đủ điểm)";
  }
  var finalResult = `Tổng điểm: ${totalScore} <br> Kết quả: ${result}`;
  document.getElementById("divScore").innerHTML = finalResult;
  return true;
};

// Exercise 2
/* - Input: tên khách hàng; số Kw điện tiêu thụ
   - Process: 
      1. Từ input: tạo biến electricPayer; electricUse
      2. Kiểm tra người dùng nhập đủ dữ liệu vào các ô, xuất thông báo nhắc nhở nếu có ô còn trống
         Số Kw điện tiêu thụ chỉ cho phép người dùng nhập giá trị số và phải > = 0 (style number và min = 0)
      3. Tính:
          - Tạo biến electricBill
          - Xét công thức tính tiền điện ứng với mỗi định mức khác nhau
      5. In ra màn hình
   - Output: Hóa đơn tiền điện gồm tên khách hàng, số Kw điện tiêu thụ và số tiền phải trả */

document.getElementById("btnElectricPay").onclick = function () {
  var electricPayer = document.getElementById("electricPayer").value;
  var electricUse = document.getElementById("electricUse").value;
  var electricBill = 0;
  if (electricPayer === "" || electricUse === "") {
    alert("Nhập thiếu dữ liệu, không được để trống");
    return false;
  } else if (electricUse <= 50) {
    electricBill += electricUse * 500;
  } else if (electricUse <= 100) {
    electricBill += 50 * 500 + (electricUse - 50) * 650;
  } else if (electricUse <= 200) {
    electricBill += 50 * 500 + 50 * 650 + (electricUse - 100) * 850;
  } else if (electricUse <= 350) {
    electricBill +=
      50 * 500 + 50 * 650 + 100 * 850 + (electricUse - 200) * 1100;
  } else {
    electricBill +=
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (electricUse - 350) * 1300;
  }
  var finalResult = `HÓA ĐƠN TIỀN ĐIỆN <br> Khách hàng: ${electricPayer} <br> Lượng điện tiêu thụ: ${electricUse} Kw <br> <br> Số tiền phải trả: ${electricBill} VNĐ`;
  document.getElementById("divElectricPay").innerHTML = finalResult;
  return true;
};

// Exercise 3
/* - Input: tên khách hàng; số người phụ thuộc; tổng thu nhập trong năm
   - Process: 
      1. Từ input: taxPayer; dependentPersons; totalIncome
      2. Kiểm tra người dùng nhập đủ dữ liệu vào các ô, xuất thông báo nhắc nhở nếu có ô còn trống
         số người phụ thuộc và tổng thu nhập trong năm chỉ cho phép người dùng nhập giá trị số và phải > = 0 (style number và min = 0)
      3. Tính:
          - Tạo biến taxableIncome (thu nhập chịu thuế); taxableIncomeMilion (thu nhập chịu thuế theo đơn vị triệu); taxPercent (thuế suất phải chịu)
          - Xét công thức tính thu nhập chịu thuế và % thuế suât phải chịu theo đề bài
          - Tạo biến taxPayable (thuế phải đóng) = thu nhập chịu thuế * % thuế suất phải chịu
      5. In ra màn hình
   - Output: Thuế phải đóng */

document.getElementById("btnTaxPayable").onclick = function () {
  var taxPayer = document.getElementById("taxPayer").value;
  var dependentPersons = document.getElementById("dependentPersons").value;
  var totalIncome = document.getElementById("totalIncome").value;
  if (taxPayer === "" || dependentPersons === "" || totalIncome === "") {
    alert("Nhập thiếu dữ liệu, không được để trống");
    return false;
  } else dependentPersons = parseFloat(dependentPersons);
  totalIncome = parseFloat(totalIncome);
  var taxableIncome = totalIncome - 4000000 - dependentPersons * 1600000;
  var taxableIncomeMilion = taxableIncome / 1000000;
  var taxPercent = 0;
  if (taxableIncomeMilion < 0) {
    taxPercent += 0;
    taxableIncome = 0;
  } else if (taxableIncomeMilion <= 60) {
    taxPercent += 5;
  } else if (taxableIncomeMilion <= 120) {
    taxPercent += 10;
  } else if (taxableIncomeMilion <= 210) {
    taxPercent += 15;
  } else if (taxableIncomeMilion <= 384) {
    taxPercent += 20;
  } else if (taxableIncomeMilion <= 624) {
    taxPercent += 25;
  } else if (taxableIncomeMilion <= 960) {
    taxPercent += 30;
  } else {
    taxPercent += 35;
  }
  var taxPayable = (taxableIncome * taxPercent) / 100;
  var finalResult = `Họ tên: ${taxPayer} <br> Tổng thu nhập: ${totalIncome} (VNĐ) <br> Số người phụ thuộc: ${dependentPersons} (người) <br> Thu nhập chịu thuế: ${taxableIncome} (VNĐ) <br> Thuế suất phải chịu: ${taxPercent}% <br> <br> Thuế thu nhập cá nhân phải đóng ${taxPayable} (VNĐ)`;
  document.getElementById("divTaxPayable").innerHTML = finalResult;
  return true;
};

// Exercise 4
/* - Input: loại khách hàng (radio); mã khách hàng; số kênh cao cấp; số lượng kết nối (đối với doanh nghiệp); các loại chi phí tương ứng
   - Process: 
      1. Từ input: individualCustomer; individualCustomer; customerCode; channelNumber; conectionNumber; các const tương ứng với từng loại chi phí
      2. Kiểm tra người dùng đã nhập đủ dữ liệu vào các ô chưa (chưa kiểm tra được số lượng kết nối)
         Kiểm tra người dùng đã tích chọn loại khách hàng chưa, xuất thông báo nếu chưa thỏa điều kiện
      3. Viết và chèn hàm khi tích chọn và loại doanh nghiệp sẽ hiển thị ô số lượng kết nối
      4. Tính số tiền cần thanh toán theo từng trường hợp
          - Trường hợp 1: loại khách hàng là cá nhân (nhà dân)
          - Trường hợp 2: loại khách hàng là doanh nghiệp và số lượng kết nối <= 10
          - Trường hợp 3: còn lại (loại khách hàng là doanh nghiệp và số lượng kết nối > 10)
      5. In ra màn hình
   - Output: mã khách hàng, loại khách hàng, số tiền cần thanh toán */
const INDIVIDUAL_PROCESS_FEE = 4.5;
const INDIVIDUAL_SERVICE_FEE = 20.5;
const INDIVIDUAL_CHANNEL_FEE = 7.5;
const BUSINESS_PROCESS_FEE = 15;
const BUSINESS_SERVICE_FEE = 75;
const BUSINESS_CHANNEL_FEE = 50;
document.getElementById("btnCustomerInvoice").onclick = function () {
  var customerCode = document.getElementById("customerCode").value;
  var channelNumber = document.getElementById("channelNumber").value;
  var conectionNumber = document.getElementById("conectionNumber").value;
  var individualCustomer = document.getElementById("individualCustomer");
  var businessCustomer = document.getElementById("businessCustomer");
  if (customerCode === "" || channelNumber === "") {
    alert("Nhập thiếu dữ liệu, không được để trống");
    return false;
  } else if (!individualCustomer.checked && !businessCustomer.checked) {
    alert("Chưa chọn loại khách hàng");
    return false;
  } else if (individualCustomer.checked) {
    var customerInvoice =
      INDIVIDUAL_PROCESS_FEE +
      INDIVIDUAL_SERVICE_FEE +
      INDIVIDUAL_CHANNEL_FEE * channelNumber;
    var customerType = "Cá nhân";
  } else if (businessCustomer.checked && conectionNumber <= 10) {
    customerInvoice =
      BUSINESS_PROCESS_FEE +
      BUSINESS_SERVICE_FEE +
      BUSINESS_CHANNEL_FEE * channelNumber;
    customerType = "Doanh nghiệp";
  } else {
    customerInvoice =
      BUSINESS_PROCESS_FEE +
      BUSINESS_SERVICE_FEE +
      (conectionNumber - 10) * 5 +
      BUSINESS_CHANNEL_FEE * channelNumber;
    customerType = "Doanh nghiệp";
  }
  var finalResult = `HÓA ĐƠN <br> Khách hàng: ${customerCode} <br> Loại hình: ${customerType} <br><br> Số tiền cần thanh toán: ${customerInvoice} $`;
  document.getElementById("divCustomerInvoice").innerHTML = finalResult;
  return true;
};

function showConectionNumber() {
  if (document.getElementById("businessCustomer").checked) {
    document.getElementById("conectionNumber").style.display = "block";
  } else {
    document.getElementById("conectionNumber").style.display = "none";
  }
}

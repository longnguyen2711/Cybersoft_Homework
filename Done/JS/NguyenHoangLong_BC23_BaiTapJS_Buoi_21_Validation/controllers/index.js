var arrayEmployee = [];
var check = new Validation();

/* <---------- Add employee (click)----------> */
document.getElementById("btnAdd").onclick = function () {
  var employee = new Employee();
  // Code
  employee.code = document.getElementById("code").value;
  // Name
  employee.name = document.getElementById("name").value;
  // Basic salary
  employee.basicSalary = document.getElementById("basicSalary").value;
  // Working hours
  employee.workingHours = document.getElementById("workingHours").value;
  // Position
  employee.valuePosition = document.getElementById("position").value;
  var selectPosition = document.getElementById("position");
  employee.position =
    selectPosition.options[selectPosition.selectedIndex].innerHTML;
  // Check validation
  var valid = true;
  valid &= check.checkLength(employee.code, "#error_length_code", 4, 6);
  valid &= check.checkCharacter(employee.name, "#error_character_name");
  valid &= check.checkValue(
    employee.basicSalary,
    "#error_value_basicSalary",
    1000000,
    20000000
  );
  valid &= check.checkValue(
    employee.workingHours,
    "#error_value_workingHours",
    50,
    150
  );
  if (valid != true) {
    return;
  }
  // Add object
  arrayEmployee.push(employee);
  // Call add employee function
  renderTableEmployee(arrayEmployee);
  saveStorage();
  // Clear input
  document.getElementById("code").value = "";
  document.getElementById("name").value = "";
  document.getElementById("basicSalary").value = "";
  document.getElementById("workingHours").value = "";
  document.getElementById("position").value = "";
};

/* <---------- Add employee function ----------> */
function renderTableEmployee(arrayEmployee) {
  var sHTML = "";
  for (var i = 0; i < arrayEmployee.length; i++) {
    var employee = arrayEmployee[i];
    sHTML += `
           <tr class="text-center">
              <td>${employee.code}</td>
              <td>${employee.name}</td>
              <td>${employee.position}</td>
              <td>${employee.basicSalary}</td>
              <td>${employee.workingHours}</td>
              <td>${employee.totalSalary()}</td> 
              <td>${employee.rating()}</td>
              <td>
                <button class="btn btn-danger" onclick="deleteEmployee('${
                  employee.code
                }')">Xóa</button>
                <button class="btn btn-primary" onclick="editEmployee('${
                  employee.code
                }')">Chỉnh sửa</button>
              </td>   
           </tr>`;
  }
  document.getElementById("resultEmployee").innerHTML = sHTML;
}

/* <---------- Delete employee ----------> */
function deleteEmployee(codeClick) {
  for (var i = arrayEmployee.length - 1; i >= 0; i--) {
    var employee = arrayEmployee[i];
    if (employee.code === codeClick) {
      arrayEmployee.splice(i, 1);
    }
  }
  renderTableEmployee(arrayEmployee);
  saveStorage();
}

/* <---------- Edit employee ----------> */
// Put data in input cell
function editEmployee(codeClick) {
  for (var i = arrayEmployee.length - 1; i >= 0; i--) {
    var employee = arrayEmployee[i];
    if (employee.code === codeClick) {
      document.getElementById("code").value = employee.code;
      document.getElementById("name").value = employee.name;
      document.getElementById("position").value = employee.valuePosition;
      document.getElementById("basicSalary").value = employee.basicSalary;
      document.getElementById("workingHours").value = employee.workingHours;
    }
  }
  renderTableEmployee(arrayEmployee);
}
// Update data
document.getElementById("btnUpdate").onclick = function () {
  var employeeUpdate = new Employee();
  employeeUpdate.code = document.getElementById("code").value;
  employeeUpdate.name = document.getElementById("name").value;
  employeeUpdate.valuePosition = document.getElementById("position").value;
  var selectPositionUpdate = document.getElementById("position");
  employeeUpdate.position =
    selectPositionUpdate.options[selectPositionUpdate.selectedIndex].innerHTML;
  employeeUpdate.basicSalary = document.getElementById("basicSalary").value;
  employeeUpdate.workingHours = document.getElementById("workingHours").value;
  for (var i = 0; i < arrayEmployee.length; i++) {
    var employee = arrayEmployee[i];
    if (employee.code === employeeUpdate.code) {
      employee.name = employeeUpdate.name;
      employee.position = employeeUpdate.position;
      employee.valuePosition = employeeUpdate.valuePosition;
      employee.basicSalary = employeeUpdate.basicSalary;
      employee.workingHours = employeeUpdate.workingHours;
    }
  }
  renderTableEmployee(arrayEmployee);
};

/* <---------- Search employee ----------> */
document.getElementById("btnSearch").onclick = function () {
  var keyWord = document.getElementById("keyWord").value;
  keyWord = keyWord.trim().toLowerCase();
  var arrayEmployeeSearch = [];
  for (i = 0; i < arrayEmployee.length; i++) {
    var employee = arrayEmployee[i];
    if (employee.name.trim().toLowerCase().search(keyWord) !== -1) {
      arrayEmployeeSearch.push(employee);
    }
  }
  renderTableEmployee(arrayEmployeeSearch);
};

/* <---------- Save localstorage ----------> */
function saveStorage() {
  var sArrayEmployee = JSON.stringify(arrayEmployee);
  localStorage.setItem("arrayEmployee", sArrayEmployee);
}

/* <---------- Get data from localstorage ----------> */
function getDataFromStorage() {
  if (localStorage.getItem("arrayEmployee")) {
    var sCode = localStorage.getItem("arrayEmployee");
    var newArrayEmployee = JSON.parse(sCode);
    for (var i = 0; i < newArrayEmployee.length; i++) {
      var item = newArrayEmployee[i];
      var newItem = new Employee(
        item.code,
        item.name,
        item.position,
        item.valuePosition,
        item.basicSalary,
        item.workingHours
      );
      arrayEmployee.push(newItem);
    }
    renderTableEmployee(arrayEmployee);
  }
}
getDataFromStorage();

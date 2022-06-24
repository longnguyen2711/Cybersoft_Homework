function Employee(code, name, position, valuePosition, basicSalary, workingHours) {
  this.code = code;
  this.name = name;
  this.position = position;
  this.valuePosition = valuePosition;
  this.basicSalary = basicSalary;
  this.workingHours = workingHours;
  this.totalSalary = function () {
    var sumSalary = this.basicSalary * this.valuePosition;
    return sumSalary;
  };
  this.rating = function () {
    var rating = "";
    if (this.workingHours > 150) {
      rating = "Xuất sắc";
    } else if (this.workingHours > 120) {
      rating = "Giỏi";
    } else if (this.workingHours > 80) {
      rating = "Khá";
    } else if (this.workingHours > 50) {
      rating = "Trung bình";
    } else {
      rating = "Yếu";
    }
    return rating;
  };
}

function Validation() {
  this.checkEmpty = function (value, selectorError) {
    if (value.trim() === "") {
      document.querySelector(selectorError).innerHTML = "Không được bỏ trống";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.checkCharacter = function (value, selectorError) {
    var regexLetter =
    /^[a-zA-Z_ ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
    if (regexLetter.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML = "Tất cả là ký tự!";
    return false;
  };

  this.checkEmail = function (value, selectorError) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML = "Email không hợp lệ!";
    return false;
  };

  this.checkNumber = function (value, selectorError) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML = "Tất cả phải là số";
    return false;
  };

  this.checkLength = function (value, selectorError, minLength, maxLength) {
    if (value.length > maxLength || value.length < minLength) {
      document.querySelector(selectorError).innerHTML =
        "Độ dài từ " + minLength + " - " + maxLength + " ký tự";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.checkValue = function (value, selectorError, minValue, maxValue) {
    if (value > maxValue || value < minValue) {
      document.querySelector(selectorError).innerHTML =
        "Từ " + minValue + " đến " + maxValue;
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
}

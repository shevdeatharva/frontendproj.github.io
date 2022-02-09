var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var upper = document.getElementById("upper");
var digit = document.getElementById("digit");
var length = document.getElementById("length")

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";

}
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        upper.classList.remove("invalid");
        upper.classList.add("valid");
    } else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        digit.classList.remove("invalid");
        digit.classList.add("valid");
    } else {
        digit.classList.remove("valid");
        digit.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 10) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

function compare() {
    var password1 = document.getElementById("psw");
    var password2 = document.getElementById("conpsw");
    var result = password1.localeCompare(password2);
    document.getElementById("matching").innerHTML = result
    result.innerText() = "password matched";
}
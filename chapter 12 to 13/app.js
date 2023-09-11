// question 01
var question1 = +prompt ("write a number.")
if ((question1 >= 65) && (question1 <= 90)) {
    document.write("<h4>uppercase</h4>")
} else if ((question1 >= 90) && (question1 <= 122)) {
    document.write("<h4>lowercase</h4>")
} else {
    document.write("<h4>it is a string</h4>")

}

// question 02
let num1 = 10
let num2 = 25

if (num1 >! num2) {
    alert("number "+ num2 + " is greater the one")
} else if (num1 === num2) {
    alert("both value are equal!")
}

// question 03
let input = prompt("write a number.")

if (input > 0) {
    alert("the value is positive.")
} else if (input == 0 ) {
    alert("the value is zero!")
}    else if (input < 0) {
        alert("the value is negetive.")
}

// question 04
let alphabat = prompt ("write a alphabet.")
if (alphabat.toLowerCase() == "a" || "e" || "i" || "o" || "u") {
    true
} else {
    false
}

// question 05
const password = "developer"
let userPassword = prompt ("write your password.")

if (userPassword.toLowerCase == "") {
    alert("Please enter your password")
} else if (userPassword === password) {
    alert("Correct! The password you entered matches the original password")
} else {
    alert("Incorrect password")
}

// question 06
var greeting = ""
var hour = 13;
if (hour < 18) {
  var greeting = "Good day";
} else {
  var greeting = "Good evening";
}


// question 07
let clock = prompt ("what time is it?")

if (clock >= 1 && clock <= 12) {
    alert("its am.")
} else if (clock >12 && clock <= 24) {
    alert("its pm.")
}
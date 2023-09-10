// question 01
let city = prompt ("write your city name.")

if (city.toLowerCase() === "karachi") {
    document.getElementById("city").innerHTML = "welcome to the city of lights."
} else {
    document.getElementById("city").innerHTML = city + "is a beautiful city."
}

// question 02
let gender = prompt ("write your gender here.")

if (gender.toLowerCase() === "male") {
    document.getElementById("gender").innerHTML = "good morning sir."
} else if (gender.toLowerCase() === "female") {
    document.getElementById("gender").innerHTML = "good morning maa'm."
} else {
    document.getElementById("gender").innerHTML = "write a correct gender."
}

// question 03

let trafficColor = prompt ("write a color from traffic light.");

if (trafficColor.toLowerCase() === "red") {
    document.getElementById("traffic-Color").innerHTML = "it's mean stop the car.";
} else if (trafficColor.toLowerCase() === "yellow") {
    document.getElementById("traffic-Color").innerHTML = "it's mean ready to go.";
} else if (trafficColor.toLowerCase() === "green") {
    document.getElementById("traffic-Color").innerHTML = "it's mean go now.";
}

// question 04

let petrol = prompt ("how many liters petrol has left?");

if (petrol.toLowerCase() <= 0.25) {
    document.getElementById("petrol").innerHTML = "Please refill the fuel in your car.";
} else if (petrol.toLowerCase() > 0.25) {
    document.getElementById("petrol").innerHTML = "it is enough to go to the petrol pump.";
}

// question 05
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
alert("The cost equals");
}

if (true) {
    alert("True");
}

if (!true) {
    alert ("false");
}

if ("car" >! "cat"){
    alert("car is smaller than cat");
    }

// question 06

let subject1 = prompt  ("how many marks you got in english.")
let subject2 = prompt  ("how many marks you got in urdu.")
let subject3 = prompt  ("how many marks you got in maths.")

totalMarks = 300;
obtainedMarks = +subject1 + +subject2 + +subject3; 
percentage = (obtainedMarks / totalMarks * 100);
grade = true; 

if (percentage < 60) {
   document.getElementById("totalMarks").innerHTML = "total-Marks = " + totalMarks;
   document.getElementById("obtainedMarks").innerHTML = "obtained-marks = " + obtainedMarks;
   document.getElementById("percentage").innerHTML = "percentage = " + percentage;
   document.getElementById("grade").innerHTML = "Grade = Fail";
} else if (percentage >= 60) {
    document.getElementById("totalMarks").innerHTML = "total-Marks = " + totalMarks;
    document.getElementById("obtainedMarks").innerHTML = "obtained-marks = " + obtainedMarks;
    document.getElementById("percentage").innerHTML = "percentage = " + percentage;
    document.getElementById("grade").innerHTML = "Grade = B";
} else if (percentage >= 70) {
    document.getElementById("totalMarks").innerHTML = "total-Marks = " + totalMarks;
    document.getElementById("obtainedMarks").innerHTML = "obtained-marks = " + obtainedMarks;
    document.getElementById("percentage").innerHTML = "percentage = " + percentage;
    document.getElementById("grade").innerHTML = "Grade = A";
} else if (percentage >= 80) {
    document.getElementById("totalMarks").innerHTML = "total-Marks = " + totalMarks;
    document.getElementById("obtainedMarks").innerHTML = "obtained-marks = " + obtainedMarks;
    document.getElementById("percentage").innerHTML = "percentage = " + percentage;
    document.getElementById("grade").innerHTML = "Grade = A1";
}

// question 07
const myNumber = 10
const number = prompt ("guess the number.")
if (number == myNumber) {
    alert("Bingo! Correct answer.")
} else if (number == myNumber + 1) {
    alert("Close enough to the correct answer.")
} else {
    alert("sorry,you are wrong!")
}

// question 08
let tempreture = prompt ("what is the tempreture?")

if (tempreture >= 40 ) {
    alert("It is too hot outside.")
} else if (tempreture >= 30 ) {
    alert("The Weather today is Normal.")
} else if (tempreture >= 20 ) {
    alert("Today'’'s Weather is cool.")
} else if (tempreture >= 10 ) {
    alert("“OMG! Today's weather is so Cool.")
} 


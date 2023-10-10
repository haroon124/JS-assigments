// // question 01

// function currentTime() {
//     return new Date()
// }

// console.log(currentTime());


// // question 02

// let fName = prompt("write your first name.")
// let lName = prompt("write your last name.")

// function greetTheUser() {
//     return fullName = `hello ${fName} ${lName}`
// }

// alert(greetTheUser())


// question 03

// let userInputNum1 = +prompt('write a first value')
// let userInputNum2 = +prompt('write a second value')

// function add2Values() {
//     return userInputNum1 + userInputNum2
// }

// console.log(add2Values());


// question 04

// function calculator(num1,num2,opreator) {
//     num1 = +prompt("write a number")
//     num2 = +prompt("write a second number")
//     opreator = prompt("wirte a opreator.")

//     if (opreator == "+") {
//         let calculate = num1 + num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     } else if (opreator == "-") {
//         let calculate = num1 - num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     }  else if (opreator == "*") {
//         let calculate = num1 * num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     } else if (opreator == "/") {
//         let calculate = num1 / num2;
//         alert(`your answer is ${calculate}`)
//         return calculate
//     }
// }

// calculator()


// question 05

// function square() {
//     let num = prompt("write a number.")
//     result = num ** 2
//     console.log(`the square of your ${num} is ${result}`);
//     return result;
// }

// square()


// question 07

// function counter() {
//     let start =  prompt("write a starter number...")
//     let end =  prompt("write a ending number...")

//     if ( isNaN(start) || isNaN(end) ) {
//         return alert("sorry this is not a number.")
//     } else {
//         for (i = start; i <= end ; i++) {
//             console.log(`${i}`);
//         }
//     }
// }

// counter()


// question 09 


// function calculateAreaOfTriangle(width,height) {
//     area_of_a_rectangle = width * height
//     return area_of_a_rectangle;
// }

// let width = prompt("writh a width")
// let height = prompt("writh a height")

// console.log(calculateAreaOfTriangle(width,height));


// question 11

// function capitalizeEachWord(input) {
//     const words = input.split(' ');

//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

//     const resultString = capitalizedWords.join(" ");

//     return resultString;
// }

// const input = prompt("write a text");
// const outputString = capitalizeEachWord(input);
// console.log(outputString);


// question 12

// function calcCircumference(radius) {
//     if (typeof radius !== 'number' || isNaN(radius) || radius <= 0) {
//         return "Invalid radius. Please provide a positive numeric value.";
//     }

//     // Calculate the circumference using the formula C = 2 * π * r
//     const circumference = 2 * Math.PI * radius;

//     return `The circumference is ${circumference.toFixed(2)}`;
// }

// const radius = +prompt("write a radius.");
// const result = calcCircumference(radius);
// console.log(result);

function calcArea(radius) {
    if (typeof radius !== 'number' || isNaN(radius) || radius <= 0) {
        return "Invalid radius. Please provide a positive numeric value.";
    }

    // Calculate the area using the formula A = π * r^2
    const area = Math.PI * Math.pow(radius, 2);

    return `The area is ${area.toFixed(2)}`;
}

const radius = 5;
const result = calcArea(radius);
console.log(result);
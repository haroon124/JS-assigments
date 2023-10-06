// question 01

let q1 = [[],[]]

// question 02

let q2 = [[0,1,2,3 + "<br>"] +[1,0,1,2 + "<br>"] + [2,1,0,1 + "<hr>"]]
document.write(q2 , "")

// question 03

for(var i = 0; i <= 10; i++){
    document.write(i)
}
document.write("<br>")

// question 04

let tableNumber = +prompt ("which table you want to see?")
let tableLength = +prompt ("write a length of table.")
document.write("<hr>")

for(var i = 1; i<= tableLength; i++) {
        document.write("" + tableNumber + " x " + i + " = " + (tableNumber*i) + "<br>")
}
document.write("<hr>")


// question 05

let fruits = ["apple", "banana","mango" , "orange","strawberry"]

for(var i = 0; i <  fruits.length; i++) {
    document.write("element at index " + i + " is " + fruits[i] + "<br>"  )
}
document.write("<hr>")


// question 06

let counting = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]

document.write("counting:")

for( var i = 0; i < counting.length; i++) {
    document.write(counting[i] , ",")
}

let reverse = [9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1]

document.write("<br>reverse:")

for( var i = 0; i < reverse.length; i++) {
    document.write(reverse[i] , ",")
}

let even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

document.write("<br>even:")

for( var i = 0; i < even.length; i++) {
    document.write(even[i] , ",")
}

let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

document.write("<br>odd:")

for( var i = 1; i < odd.length; i++) {
    document.write(odd[i] , ",")
}

let series = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

document.write("<br>series:")

for( var i = 1; i < series.length; i++) {
    document.write(series[i] , "k,")
}
document.write("<hr>")


// questio 07 
let bakery = ["cake","apple pie","cookie","chips","patties"]
let whatYouWant = prompt("what you want?")
foodFound = false;
var itemIndex;
function foodFoundAlert() {
    if (foodFound == true) {
       alert(whatYouWant + " is avalible at index " + itemIndex + " in our bakery. ")
    }
}

for(var i = 0; i < bakery.length; i++) {
    if (whatYouWant == bakery[i]) {
        foodFound = true
        itemIndex = i;
        foodFoundAlert()
    }

}
if (!foodFound) {
    alert("sorry jani " + whatYouWant + " avalible nahi hai.")
}

// quetion 08
let Num = [24, 53, 78, 91, 12];
let maximum = Math.max(...Num)
document.write("the maximum vale in array is " + maximum + "<hr>");



// quetion 09
let minNum = [24, 53, 78, 91, 12];
let minimum = Math.min(...Num)
document.write("the minimum vale in array is " + minimum + "<hr>");

// question 10
// var multipal = 100

// for(var i = 5; i <= multipal; i + 5) {
//     console.log(i);
// }
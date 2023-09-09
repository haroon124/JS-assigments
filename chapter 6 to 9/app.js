// question 01
let num = prompt ("write a number.")
document.write("you write " + num + "<br>")

++num
document.write("++number = " + num + "<br>")

num++
document.write("number++ = " + num + "<br>")

--num
document.write("--number = " + num + "<br>")

num--
document.write("number-- = " + num + "<br><br><br><br>")

// question 02
let a = prompt("write a value of a.");
let b = prompt("write a value of b.");
//            1     0     2    0
let result = --a - --b + ++b + b--

document.write("a = ", a,"<br>")
document.write("b = ", b,"<br>")

document.write("--a =", a, "<br>")
document.write("--b =", b, "<br>")
document.write("++b =", b,"<br>")
document.write("b-- =", b,"<br><br>")

document.write("the answer is ", result,"<br>");

// question 03
let userName = prompt("write your name here.")
alert("welcome,mr ", userName , "to our website.")

// question 04
const tableNumber = prompt("which table you want to see?") 

    document.write(tableNumber +"   x 1 =  "+ (tableNumber * 1) +"<br>");
    document.write(tableNumber +"   x 2 =  "+ (tableNumber*2)  +"<br>");
    document.write(tableNumber +"   x 3 = " + (tableNumber*3)  +"<br>");
    document.write(tableNumber +"   x 4 = " + (tableNumber*4)  +"<br>");
    document.write(tableNumber +"   x 5 = " + (tableNumber*5)  +"<br>");
    document.write(tableNumber +"   x 6 = " + (tableNumber*6)  +"<br>");
    document.write(tableNumber +"   x 7 = " + (tableNumber*7)  +"<br>");
    document.write(tableNumber +"   x 8 = " + (tableNumber*8)  +"<br>");
    document.write(tableNumber +"   x 9 = " + (tableNumber*9)  +"<br>");
    document.write(tableNumber +"  x 10  ="+  (tableNumber*10)+"<br><br><br><br><br>");

// question 05
let subject1 = prompt("subject no:01");
let subject2 = prompt("subject no:02");
let subject3 = prompt("subject no:03");

let totalMarks = 100;

let marks1 = prompt("marks no:01");
let marks2 = prompt("marks no:02");
let marks3 = prompt("marks no:03");

let percent1 = ((marks1 / totalMarks) * 100);
let percent2 = ((marks2 / totalMarks) * 100);
let percent3 = ((marks3 / totalMarks) * 100);



document.write(subject1    +" "+ totalMarks+" "+    marks1+" "+ percent1+"%<br>");
document.write(subject2    +" "+ totalMarks+" "+    marks2+" "+ percent2+"%<br>");
document.write(subject3    +" "+ totalMarks+" "+    marks3+" "+ percent3+"%<br>");






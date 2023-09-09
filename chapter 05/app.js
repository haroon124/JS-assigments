// question 01
const add1 = 10
const add2 = 20
const add = add1 + add2
document.write(add,"<br>")

const subtract1 = 30
const subtract2 = 20
const subtract = subtract1 - subtract2
document.write(subtract,"<br>")

const multiply1 = 10
const multiply2 = 5
const multiply = multiply1 * multiply2
document.write(multiply,"<br>")

const division1 = 10
const division2 = 5
const division = division1 / division2
document.write(division,"<br>")

const moduls1 = 10
const moduls2 = 8
const moduls = moduls1 % moduls2
document.write(moduls,"<br><br><br><br><br>")

// question 02
let declaration_Number = 10
declaration_Number = 10

document.write("after declaration the number is " + declaration_Number,"<br>")

++declaration_Number
document.write("after increment the number is " + declaration_Number,"<br>")

let seven = 7
let addSeven = declaration_Number + seven

document.write("after add the number is " + addSeven,"<br>")

--addSeven
document.write("after dicrement the number is " + addSeven,"<br>")

addSeven / 3
document.write("after divide by 3 value is " + addSeven,"<br><br><br><br>")

// question 04
let ticketCost = 600
let tickets5 = ticketCost * 5
document.write("total cost to buy 5 tickets to a movie is " + tickets5,"<br><br><br><br>")

// question 05
const tableNumber = 8 

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

// question 06
let priceOfItem1 =1000
let priceOfItem2 =2000

let orderedItem1 =10
let orderedItem2 =20
let shippingCharges = 500

let totalPrice = ((+priceOfItem1 * +orderedItem1) +  (+priceOfItem2 * +orderedItem2) + +shippingCharges)

document.write("price Of Item 1 = ", priceOfItem1, "<br>")
document.write("price Of Item 2 = ", priceOfItem2, "<br>")
document.write("ordered Item 1 = ", orderedItem1, "<br>")
document.write("ordered Item 2 = ", orderedItem2, "<br>")
document.write("shipping Charges = ", shippingCharges,"<br><br>")
document.write("total price = " + totalPrice + "<br><br><br><br>")

// question 07
let USDollar = 1
let dollarInPak = 104.80
USDollar = dollarInPak
let weHaveDollar = 10
let convertion1 = weHaveDollar * dollarInPak
document.write("10 dollar = " + convertion1,"<br>" )


let riyal = 1
let riyalInPak = 28
riyal = riyalInPak
let weHaveRiyal = 25
let convertion2 = weHaveRiyal * riyalInPak
document.write("25 dollar = " + convertion2,"<br>")

document.write("total = ", (convertion1 + convertion2, "<br><br><br><br>"))

// question 08
let value = 10
value = 12

let valueCalculate = (((value + 5) * 10) / 2 ) 
document.write("ANSWER IS " + valueCalculate,"<br><br><br><br>")

// question 09 
let currentYear = 2023
let birthYear = 2006
let calculate_birthYear = currentYear - birthYear

document.write("current year = ", currentYear,"<br>")
document.write("birth year = ", birthYear,"<br>")
document.write("my age = ", calculate_birthYear,"<br><br><br><br>")

// question 10
let fav_snacks = "chips"
let age = 17
let max_age = 70
let amount_of_snacks_per_day = 2

let lifeTime = ((max_age - age) * amount_of_snacks_per_day ) 
document.write("fav-snacks = ", fav_snacks,"<br>")
document.write("age = ", age,"<br>")
document.write("max-age = ", max_age,"<br>")
document.write("amount of snacks per day = ", amount_of_snacks_per_day,"<br>")
document.write("need in life = ", lifeTime,"<br>")





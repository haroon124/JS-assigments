// queation 01
let students = []
students = ["haroon","kamil","samad","sami","jamal"]

// question 02
let foodName = []
foodName = ["biryani","pilaow","korma","bbq","fast food"]

// question 03
let stringArray = ["pepsi","7up","sting","pakola"]

// question 04
let numberArray = [1,2,3,4,5,6,7,8,9,10]

// question 05
let booleanArray = [true,false,undefined,null,NaN]

// question 06
let mixArray = [true,"haroon",2,null,"pepsi",6,false,"biryani",10,NaN,"kamil",7,null,"samad",3,undefined]

// question 07
let education = ["<br><br><br><br>SSC<br>" + "HSC<br>" + "BCS<br>" + "BS<br>" + "BCOM<br>" + "MS<br>" + "M.Phil<br>" + "PHD<br>"]
document.write(education, "<br><br><br><br>")

// question 08
let studentsName = ["sami","kamil","haroon"]
let totalScore = 500
let studentsScore = ["200","400","300"]

let calculation0 = studentsScore[0] / 500 * 100;
let calculation1 = studentsScore[1] / 500 * 100;
let calculation2 = studentsScore[2] / 500 * 100;

document.write(studentsName[0] + " got " + studentsScore[0] + ".percentage " + calculation0 +"%" + "<br>")
document.write(studentsName[1] + " got " + studentsScore[1] + ".percentage " + calculation1 +"%" + "<br>")
document.write(studentsName[2] + " got " + studentsScore[2] + ".percentage " + calculation2    +"%" + "<br><br><br><br><br>")

// question 09
let colors = ["red","blue","green","yellow"]
colors.unshift("pink")
document.getElementById("colors").innerHTML = colors

function addInStart() {
let addInBeginning = prompt ("add a color in the  beginning.")
if (addInBeginning !== "" && addInBeginning !== null) {
    colors.unshift(addInBeginning)
    document.getElementById("colors").innerHTML = colors
} else {
    alert("add a value")
}
} 

function deleteInStart() {
    colors.shift()
    document.getElementById("colors").innerHTML = colors
}

let drinks = ["pepsi","7up","sting","pakola"]
drinks.push("soda")
document.getElementById("drinks").innerHTML = drinks

function addInEnd() {
let addInEnd = prompt ("add a drink in the  end.")
if (addInEnd !== "" && addInEnd !== null) {
    drinks.push(addInEnd)
    document.getElementById("drinks").innerHTML = drinks
} else {
    alert("add a value")
}
} 

function deleteInEnd() {
    drinks.pop()
    document.getElementById("drinks").innerHTML = drinks
}

let children = ["haroon," + "kamil,"+"samad," + "sami," + "jamal"]
document.getElementById("childern").innerHTML = (children)

function addInCenter() {
    let whereToStartAdding = prompt ("Where to start adding?")
    let HowManyToRemove = prompt ("How many to remove?")
    let WahtYouWantToAdd = prompt ("what you want to add?")
    children.splice(whereToStartAdding,HowManyToRemove,WahtYouWantToAdd)
    document.getElementById("childern").innerHTML = children
}

// question 10
const boysScore = [50,60,40]
boysScore.sort(function(a, b) {
    return a - b;
});
document.getElementById("boys-score").innerHTML = (boysScore + "");


// question 11 
//     end       1           2           3            4      5          6
//     start     0           1           2            3      4          5
let cities = ["karachi","islamabad","fiaslabad","lahore","quetta","rawalpindi"]
let selectedCities = cities.slice(2,5)

document.write(selectedCities , "<br><br><br><br>")

// question 12
let cat = ["this","is","my","cat"]
let singalString = cat.join(" ")
document.write(cat , "<br>" , singalString)

// question 13
let reverseIsStart = []
reverseIsStart.shift("<br><br><br>hello")
reverseIsStart.shift("everyone")
document.write(reverseIsStart)
// 
reverseIsStart.unshift("<br><br><br>hello")
reverseIsStart.unshift("everyone")
document.write(reverseIsStart)


// question 14
let reverseInEnd = []

reverseInEnd.push("<br><br><br>hello")
reverseInEnd.push("world<br><br><br>")
document.write(reverseInEnd)

reverseInEnd.pop()
reverseInEnd.pop()
document.write(reverseInEnd)

// question 15            0      1         2       3        4
const phone_company = ["nokia","apple","samsung","sony","Motorola"]

document.write("<select><option>" ,phone_company[0] ,"</option>", "<option>", phone_company[1] , "</option>" , "<option>", phone_company[2], "</option>" , "<option>", phone_company[3] , "</option>" , "<option>" , phone_company[4],"</option></select>")
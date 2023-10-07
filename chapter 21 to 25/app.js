// // question 01

// let fName = prompt("write your first name.")
// let lName = prompt("write your last name.")
// let fullName = fName + " " +  lName

// alert("greeting " + fullName
// )

// // question 02 

// let fav_mobile = prompt("write your fav_mobile phone model.")
// alert("your fav_mobile is " + fav_mobile + " and the length is " + fav_mobile.length  )

// // question 03 

// let country = "pakistan"
// alert("the index number of (n) is " + country.indexOf('n'))


// // question 04 

// let greet = "hello world"
// alert("the index number of (l) is " + greet.lastIndexOf('l'))


// // question 05

// let char = "pakistani"
// alert("Character at index 3 = " + char.charAt(3))


// // question 06

// let str1 = "Hello";
// let str2 = "World";

// let result = str1.concat(" " + str2);

// alert(result)


// // question 07

// let city = "hyderabad"
// let change = city.replace("hyder","islam")
// console.log("city = " + city)
// console.log("after changes = " + change)


// // question 08

// let replaceAll = "Ali and Sami are best friends. They play cricket and football together." 
// let changeAll = replaceAll.replace(/and/g ,"&")
// console.log(changeAll)

// // question 09

// let num = prompt("write a number.")
// let convert = +num
// console.log(typeof num + " ==> prompt value")
// console.log(typeof convert  + " ==> convert in to a number")


// // question 10

// var bigLetter = prompt("write some text.").toUpperCase()
// console.log(bigLetter + " ==> text with upper case")


// // question 11

// let fisrt_letter = prompt("write some text to convert into title case.")
// let first = fisrt_letter.slice(0,1).toUpperCase()
// let last = fisrt_letter.slice(1,fisrt_letter.length).toLowerCase()
// let completeName = first + last
// console.log(completeName + " ==> with title case.")  


// // question 12

// let num = 35.77
// let num_convert = 35.77.toString().replace(".", "")
// console.log(typeof num + " " + num + " ==> num ")
// console.log(typeof num_convert + " " + num_convert + " ==> num-convert ")


// // question 13

// let userName = prompt("write a name.")
// let user = false

// for (i = 0; i < userName.length - 1; i++ ) {
//     if (userName[i] ===  "@" || userName[i] === "." || userName[i] === "," || userName[i] === "!") {
//         user = true
//         break;
//     }

// }

// if (!user) {
//     alert("corect")
// } else {
//     alert("enter a valid username.")
// }

// // question 14

// let bakery = [
//     "cookie",
//     "apple pie",
//     "chips",
//     "patties"
// ];
// let itemfound = false

// let user_wants = prompt("what you want?").toLowerCase()

// for (i = 0; i < bakery.length; i++) {
//     if (user_wants === bakery[i]) {
//         itemfound = true
//         alert("yes it is avalible at the index of " + i )
//         break;
//     }
// }

// if (!itemfound) {
//     alert("sorry it is not avalible.")
// } 


// // question 15

// let password = prompt("write a password.")  
// let corect_password_number = false
// let corect_password_string = false
// let password_length = false

// if (password.length < 6) {
//     password_length = true;
//     alert("at least 6 charactar is needed.")
// } else {
//     password_length = false
// }

// for (let i = 0; i < password.length; i++) {
//     if (isNaN(password[i])) {
//         corect_password_number = true;
//         break;
//     } else if (!isNaN(password[i])) {
//         corect_password_string = true;
//         break;
//     } else {
//         corect_password_string = false;
//         corect_password_number = false;
//     }
// }



// if (corect_password_number) {
//     alert("Write a number in your password.");
// } else {
//     corect_password_number = false;
// }

// if (corect_password_string) {
//     alert("Write an alphabet in your password.");
// } else {
//     corect_password_string = false;
// }

// if (corect_password_string === false && corect_password_number === false) {
//     alert("Correct");
// }


// // question 16

// let sentence = "University of Karachi"
// let word = sentence.split(" ")
// console.log(sentence);
// console.log(word);


// // question 17

// let lastChar = "pakistan"
// let last = lastChar.charAt(lastChar.length - 1)
// console.log(last)


// question 18

let sentence = "The quick brown fox jumps over the lazy dog".toLowerCase()
let lower_case = sentence.toLowerCase()
let word = "the"
let count = 0

let lower_case_split = lower_case.split(" ") 

for (i = 0 ; i < lower_case_split.length ; i++) {
    if (lower_case_split[i] == word) {
        count++
    }
}
console.log("word 'the' is " + count + " times in a sentence." )










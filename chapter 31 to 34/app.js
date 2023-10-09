// // question 01

// let current_date = new Date()
// console.log(current_date);


// // question 02

// let current_date = new Date()

// let months = [
//     "jan",
//     "feb",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "aug",
//     "sep",
//     "oct",
//     "nov",
//     "dec"
// ]
// let current_month_index = current_date.getMonth()
// let current_month_name  = months[current_month_index]
    
// console.log(current_month_name);


// question 03

// let date = new Date()

// let days = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
// ]
// let dayIndex = date.getDay()
// let dayName = days[dayIndex]
// let slice_day = dayName.slice(0,3)
// console.log(slice_day);


// question 04

// const myDate = new Date()

// let days = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
// ]

// let dayIndex = myDate.getDay()

// let dayName = days[dayIndex]

// if (dayName == "saturday" || "sunday") {
//     alert("today is fun day.")
// }
// console.log(dayName);


// question 05

// let date = new Date()
// let just_date = date.getDate()

// if (just_date <= 15) {
//     console.log("first fifteen days of the month.");
// }


// question 06

// let change_date = new Date()

// let change_time = change_date.getTime()

// let Minutes = change_time / (1000 * 60) 
// let Seconds = change_time / (1000 * 60) / 60
// console.log("Minutes since midnight, Jan. 1, 1970: " + Minutes);
// console.log("Seconds since midnight, Jan. 1, 1970: " + Seconds);



// // question 07

// let date = new Date()
// console.log(date);

// if (date.getTime() >= "0:00:00" && date.getTime() <= "11:59:59" ) {
//     log("am")
// } else {
//     console.log("pm");
// }


// question 08

// let laterDate = new Date("dec, 31 , 2020")
// console.log(laterDate);


// question 09

// let ramzanDate = new Date("june,18,2015") 
// let current_date = new Date()
// let calculate = current_date - ramzanDate
// const days_since_ramadan = Math.floor(calculate / (1000 * 60 * 60 * 24));
// console.log(days_since_ramadan);


// question 10

// let current_date = new Date()
// let refrenceDate = new Date('january,1,2023')
// let elapsedSeconds = Math.floor((current_date - refrenceDate) / 1000);
// console.log(elapsedSeconds);


// question 11

// let date = new Date()
// let current_hour = date.getHours()
// date.setHours(current_hour - 1);
// console.log("its 1 hour ago " + date);
// console.log(new Date());


// question 12

// let date = new Date()
// date.setFullYear(date.getFullYear() - 100) 
// alert(date);


// question 13

// let userAge = prompt("write your age here....")
// userAge = parseInt(userAge)

// let currentYear = new Date().getFullYear()
// let birthYear = currentYear - userAge
// console.log(birthYear);


// question 14

// let userName = prompt("writh your name..")
// let month = prompt("writh month..")
// let numOfUnits = prompt("write your units here....")
// let chargesPerUnits = 10
// let NetAmountPayable = chargesPerUnits * numOfUnits;
// let latePayment = NetAmountPayable + 100;
// let GrossAmountPayable = latePayment + latePayment;

// console.log("name = " + userName);
// console.log("month = " + month);
// console.log("number Of Units = " + numOfUnits);
// console.log("charges Per Units = " + chargesPerUnits);
// console.log("Net Amount Payable = " + NetAmountPayable);
// console.log("late Payment = " + latePayment);
// console.log("Gross Amount Payable = " + GrossAmountPayable);
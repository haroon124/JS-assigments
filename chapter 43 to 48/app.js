// //  question 01 
// let body = document.querySelector('body')
// let a = document.createElement('a')
// a.textContent = "click me"
// console.log(a);
// a.setAttribute('href' , '#')
// a.setAttribute('onclick' , 'modal()')
// body.appendChild(a)
//  function modal() {
//      alert("jani prank ho gaya hai camera me haat hi la do.")
// }

// // question 02
// function buyAPhone() {
//     alert("jani phone ap ka hoa. payment kese karo ge cash ya check?")
// }

// // question 03

// let students = [
//     {
//         name:"ali",
//         class:"10"
//     },
//     {
//         name:"ahmad",
//         class:"10"
//     },
//     {
//         name:"kamil",
//         class:"10"
//     }
// ]

// let studentTable = document.querySelector('.studentTable')

// function studentData() {
//     students.forEach(function (student) {
//         let className = student.name
//         studentTable.innerHTML += `
//                 <tr id="${className}">
//                     <td>${student.name}</td>
//                     <td>${student.class}</td>
//                     <td><button onclick="removeHandler('${className}')">delete</button></td>
//                 </tr>`
//     });
// }
// studentData()

// function removeHandler(className) {
//     let tr = document.getElementById(className)
//     tr.remove()
// }


// // question 04
// let image = document.querySelector('.image');
// let originalImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTioJVjCqldT41dm1pcgWCaHsNM21-C8QdVg&usqp=CAU";
// let newImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaL9inan9jJNXCm8WTxtY2MjShIMXAc-8TNg&usqp=CAU";
    
// function imgChanger() {
//     image.src = newImageSrc;
// }
// function imgChanger2() {
//     image.src = originalImageSrc;
// }


// question 05

let number = 0
let counter = document.querySelector("#counter")
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")
let increase = document.querySelector("#increase")

function increaseNum() {
    ++number
    counter.innerHTML = number
    counter.style.color = "green"
}

function decreaseNum() {
    if (number >  0) {
        --number
        counter.innerHTML = number
        counter.style.color = "red"
    } 
    
}

function resetNum() {
    number = 0
    counter.innerHTML = number
    counter.style.color = "black"
}



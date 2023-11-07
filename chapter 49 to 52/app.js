// // question 01

// let nameOfUser = document.querySelector('#name')

// function submitHandler() {
//     let nameInput = document.querySelector('#name');
//     let addressInput = document.querySelector('#address');
//     let phoneInput = document.querySelector('#phone');

//     let nameDisplay = document.querySelector('#nameDisplay');
//     let addressDisplay = document.querySelector('#addressDisplay');
//     let phoneDisplay = document.querySelector('#phoneDisplay');

//     nameDisplay.textContent = 'Name: ' + nameInput.value;
//     addressDisplay.textContent = 'address: ' + addressInput.value;
//     phoneDisplay.textContent = 'Phone: ' + phoneInput.value;
// }


// question 02

// let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ratione nemo cum! Cum, consectetur maxime ut animi tempore, error quas, possimus quibusdam pariatur veritatis quos."
// let para = document.querySelector('#para')
// let myBtn = document.querySelector('#mybtn')
// myBtn.textContent = "see more"

// para.textContent = text.slice(0, 15) + "..."
// myBtn.addEventListener("click" , () => {
//     if (myBtn.textContent == "see more") {
//         para.textContent = text
//         myBtn.textContent = "see less"
//     } else {
//         para.textContent = text.slice(0, 15) + "..."
//         myBtn.textContent = "see more"
//     }
// })


// question 03

let userName = document.querySelector('#name')
let grade = document.querySelector('#grade') 
let marks = document.querySelector('#marks')
let submit = document.querySelector('#submit')
let myUl = document.querySelector('.myUl')

submit.addEventListener("click", () => {
    if (userName.value === "" || grade.value    === "" ||
     isNaN(parseFloat(grade.value)) || marks.value    === "" || 
     isNaN(parseFloat(marks.value))) {
        alert("Please fill the form correctly!")
    } else {
        let idForLi = userName.value
        myUl.innerHTML += `
        <li id="${idForLi}">Name: ${String(userName.value)} <br>
        Grade: ${parseFloat(grade.value)} <br>
        Marks: ${parseFloat(marks.value)} <br>
        <button id="edit">edit</button> <button onclick="deleteHandler(${idForLi})" id="delete">delete</button></li>
        `
    }
})

let editBtn = document.querySelector('#edit')
let deleteBtn = document.querySelector('#delete')

function deleteHandler(idForLi) {
    let li = document.getElementById(idForLi)
    li.remove();
}


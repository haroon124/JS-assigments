let nameOfUser = document.querySelector('#name')
function submitHandler() {
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let phoneInput = document.querySelector('#phone');

    let nameDisplay = document.querySelector('#nameDisplay');
    let emailDisplay = document.querySelector('#emailDisplay');
    let phoneDisplay = document.querySelector('#phoneDisplay');

    nameDisplay.textContent = 'Name: ' + nameInput.value;
    emailDisplay.textContent = 'Email: ' + emailInput.value;
    phoneDisplay.textContent = 'Phone: ' + phoneInput.value;

    // Prevent the form from submitting to "submit_form.php" for this example
    // return false;
}
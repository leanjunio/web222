var provinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador'];

function clear() {
    var inputs = document.querySelectorAll('input');
    inputs.innerHMTL = "";
}

// Initiated when submit is clicked
// 
function validate() {
    console.log(`Validate clicked`);
    var firstName = document.getElementById('fName').value.trim();
    var lastName = document.getElementById('lName').value.trim();
    var unitNumber = document.getElementById('unit').value.trim();
    var province = document.getElementById('province').value.trim();
    var streetNumber = document.getElementById('streetNum').value.trim();
    var email = document.getElementById('email').value.trim();

    // Validate
    var userName = document.getElementById('username').value.trim();
    var passWord = document.getElementById('password').value.trim();
    var streetName = document.getElementById('street').value.trim();
    var city = document.getElementById('city').value.trim();
    var postalCode = document.getElementById('postalCode').value.trim();
    var phoneNumber = document.getElementById('phone').value.trim();

    console.log(`Username validation: ${passWordValidation(passWord)}`);
    console.log(`Phone Number validation: ${phoneValidation(phoneNumber)}`);


}

function displayError(msg) {
    console.log(msg);
}

// Creates the select elements from the provinces array
// 
function createDropdownProvince() {
    console.log('Creating provinces dropdown');
    var select = document.getElementById('province');
    for (var i = 0; i < provinces.length; ++i) {
        var option = document.createElement('option');
        if (provinces[i] == 'Ontario')
            option.setAttribute('selected', 'selected');
        option.setAttribute('value', provinces[i].toLowerCase());
        option.innerHTML = provinces[i].toUpperCase();
        select.appendChild(option);
    }
}

// Tests the validation for phone number format
// 
function phoneValidation(phoneNumber) {
    return (phoneNumber.charAt(3) == '-' && phoneNumber.charAt(7) == '-');
}

// Tests the validation for postal code
// 
function zipCodeValidation(postalCode) {
    var pattern = new RegExp('/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/');
    if (!pattern.test(postalCode)) {
        displayError(`The postal code must be in the following format: C1A1A7`);
    } else return pattern.test(postalCode);
}

// Test the validation for city
// 
function cityValidation(city) {
    var pattern = new RegExp('/^[a-zA-Z]+$/');
    if (!pattern.test(city))
        displayError(`The city must only contain letters`);
    else return pattern.test(city);
}

function streetNameValidation(streetName) {
    var pattern = new RegExp('/^[a-zA-Z]+$/');
    if (!pattern.test(streetName))
        displayError(`The street name cannot contain digits`);
    else return pattern.test(streetName);
}

// Test the validation for the username
// 
function userNameValidation(userName) {
    var pattern = new RegExp('^[A-Z][a-zA-Z]{3,}$');
    if (!pattern.test(userName))
        displayError(`Username is greater than 6 characters or does not start with a capital letter`);
    else return pattern.test(userName);
}

// password validation - must start with letter, at least 6 characters
// 
function passWordValidation(passWord) {
    if (passWord.length >= 6) {
        if ((passWord.charCodeAt(0) >= 65 && passWord.charCodeAt(0) <= 90) || (passWord.charCodeAt(0) >= 97 && passWord.charCodeAt(0) <= 122))
            return true;
    } else return false;
}

window.onload = function() {
    createDropdownProvince();
}
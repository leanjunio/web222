var provinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador'];

function clear() {
    // Get all inptus
    var inputs = document.querySelectorAll('input');
    inputs.innerHMTL = "";
}

// Initiated when submit is clicked
// 
function validate() {
    console.log(`Validate clicked`);
    var firstName = document.getElementById('fName').value;
    var lastName = document.getElementById('lName').value;
    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;
    var unitNumber = document.getElementById('unit').value;
    var streetNumber = document.getElementById('streetNum').value;
    var streetName = document.getElementById('street').value;
    var city = document.getElementById('city').value;
    var postalCode = document.getElementById('postalCode').value;
    var province = document.getElementById('province').value;
    var phoneNumber = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone').value;
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
    var pattern = new RegExp("^[2-9]\d{2}-\d{3}-\d{4}$");
    if (!pattern.test(phoneNumber)) {
        displayError(`The Phone Number must be in the following format: XXX-XXX-XXXX`);
    } else return pattern.test(phoneNumber);
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

// password validation
// 
function passWordValidation(passWord) {
    var pattern = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,8}$');
    if (!pattern.test(passWord))
        displayError(`Pasword must be 8 characters, contain at least 1 digit and 1 uppercase`);
    else return passWordValidation(passWord);
}

window.onload = function() {
    createDropdownProvince();
}
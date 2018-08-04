var provinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function clear() {
    var inputs = document.querySelectorAll('input');
    inputs.innerHMTL = "";
}

// Initiated when submit is clicked
// 
function validate() {
    console.log(`Validate called`);
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

    console.log(`Username validation: ${userNameValidation(userName)}`);
    console.log(`Password validation: ${passWordValidation(passWord)}`);
    console.log(`Phone Number validation: ${phoneValidation(phoneNumber)}`);
    console.log(`Zip Code validation: ${zipCodeValidation(postalCode)}`);
    console.log(`City validation: ${cityValidation(city)}`);
    console.log(`Street Name validation: ${streetNameValidation(streetName)}`);
    
    return false;
}

function displayError(msg) {
    console.log('displayError() called');
    var side = document.getElementById('side');
    var pElem = document.createElement('p');
    pElem.appendChild(msg);
    side.appendChild(pElem);
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
    var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    if (!pattern.test(phoneNumber)) {
        displayError(`The Phone Number must be in the following format: XXX-XXX-XXXX`);
    } else return pattern.test(phoneNumber);
}

// Tests the validation for postal code
// 
function zipCodeValidation(postalCode) {
    var pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!pattern.test(postalCode)) {
        displayError(`The postal code must be in the following format: C1A1A7`);
    } else return pattern.test(postalCode);
}

// Test the validation for city
// 
function cityValidation(city) {
    var pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(city))
        displayError(`The city must only contain letters`);
    else return pattern.test(city);
}

// Street Name validation
// 
function streetNameValidation(streetName) {
    var pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(streetName))
        displayError(`The street name cannot contain digits`);
    else return pattern.test(streetName);
}

// Test the validation for the username
// 
function userNameValidation(userName) {
    var pattern = /^[a-zA-Z]{6,}$/;
    if (!pattern.test(userName))
        displayError(`Username is greater than 6 characters or does not start with a capital letter`);
    else return pattern.test(userName);
}

// password validation - at least 8 characters
// 
function passWordValidation(passWord) {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,8}$/;
    if (!pattern.test(passWord))
        displayError(`Pasword must be 8 characters, contain at least 1 digit and 1 uppercase`);
    else return passWordValidation(passWord);
}

window.onload = function() {
    createDropdownProvince();
}
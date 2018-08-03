var provinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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

    console.log(`Username validation: ${userNameValidation(userName)}`);
    console.log(`Password validation: ${passWordValidation(passWord)}`);
    console.log(`Phone Number validation: ${phoneValidation(phoneNumber)}`);
    console.log(`Zip Code validation: ${zipCodeValidation(postalCode)}`);
    console.log(`City validation: ${cityValidation(city)}`);
    console.log(`Street Name validation: ${streetNameValidation(streetName)}`);
    
    if(!userNameValidation(userName) || !passWordValidation(passWord) || !phoneValidation(phoneNumber) || !zipCodeValidation(postalCode) || !cityValidation(city) || !streetNameValidation(streetName)) return false;
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
<<<<<<< HEAD
    var pattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    if (!pattern.test(phoneNumber)) {
        displayError(`The Phone Number must be in the following format: XXX-XXX-XXXX`);
    } else return pattern.test(phoneNumber);
=======
    return (phoneNumber.charAt(3) == '-' && phoneNumber.charAt(7) == '-');
>>>>>>> b00deba856fb9d3388cb4baac6619d269a96742e
}

// Tests the validation for postal code
// 
function zipCodeValidation(postalCode) {
<<<<<<< HEAD
    var pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!pattern.test(postalCode)) {
        displayError(`The postal code must be in the following format: C1A1A7`);
    } else return pattern.test(postalCode);
=======
    var letter, num;
    if (postalCode.length == 6) {
        // check if letter
        if ((postalCode.charCodeAt(0) >= 65 && postalCode.charCodeAt(0) <= 90) && (postalCode.charCodeAt(2) >= 65 && postalCode.charCodeAt(2) <= 90) && (postalCode.charCodeAt(4) >= 65 && postalCode.charCodeAt(4) <= 90)) {
            letter = true;
        }

        if ((postalCode.charCodeAt(1) >= 48 && postalCode.charCodeAt(1) <= 57) && (postalCode.charCodeAt(3) >= 48 && postalCode.charCodeAt(3) <= 57) && (postalCode.charCodeAt(5) >= 48 && postalCode.charCodeAt(5) <= 57)) {
            num = true;
        }

        if (letter && num) 
            return true;
        else {
            displayError('Postal Code must only include letters and numbers');
            return false;
        }

    } else {
        displayError('Postal code must not exceed 6 characters');
        return false;
    }
>>>>>>> b00deba856fb9d3388cb4baac6619d269a96742e
}

// Test the validation for city
// 
function cityValidation(city) {
<<<<<<< HEAD
    var pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(city))
        displayError(`The city must only contain letters`);
    else return pattern.test(city);
=======
    if (city.length > 0) {
        for (var i = 0; i < city.length; ++i) {
            if ((city.charCodeAt(i) >= 65 && city.charCodeAt(i) <= 90) || (city.charCodeAt(i) >= 97 && city.charCodeAt(i) <= 122)) {
                return true;
            }
            else return false;
        }
    } else return false;
>>>>>>> b00deba856fb9d3388cb4baac6619d269a96742e
}

// Street Name validation
// 
function streetNameValidation(streetName) {
<<<<<<< HEAD
    var pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(streetName))
        displayError(`The street name cannot contain digits`);
    else return pattern.test(streetName);
=======
    var pattern = /^[a-zA-Z~@#$^*()_+=[\]{}|\\,.?: -]*$/; 
    return pattern.test(streetName); 
>>>>>>> b00deba856fb9d3388cb4baac6619d269a96742e
}

// Test the validation for the username
// 
function userNameValidation(userName) {
<<<<<<< HEAD
    var pattern = /^[a-zA-Z]{6,}$/;
    if (!pattern.test(userName))
        displayError(`Username is greater than 6 characters or does not start with a capital letter`);
    else return pattern.test(userName);
=======
    if (userName.length >= 6) {
        if ((userName.charCodeAt(0) >= 65 && userName.charCodeAt(0) <= 90) || (userName.charCodeAt(0) >= 97 && userName.charCodeAt(0) <= 122))
            return true;
    } else return false;
>>>>>>> b00deba856fb9d3388cb4baac6619d269a96742e
}

// password validation - at least 8 characters
// 
function passWordValidation(passWord) {
<<<<<<< HEAD
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,8}$/;
    if (!pattern.test(passWord))
        displayError(`Pasword must be 8 characters, contain at least 1 digit and 1 uppercase`);
    else return passWordValidation(passWord);
=======
    var caps, lower, num;
    if (passWord.length >= 8) {
        for (var i = 0; i < passWord.length; i++) {
            if (passWord.charCodeAt(i) >= 65 && passWord.charCodeAt(i) <= 90) { caps = true; }
            if (passWord.charCodeAt(i) >= 97 && passWord.charCodeAt(i) <= 122) { lower = true; }
            if (passWord.charCodeAt(i) >= 48 && passWord.charCodeAt(i) <= 57) { num = true; }
        }
        if (caps && num)
            return true;
        else return false;
    } else return false;
>>>>>>> b00deba856fb9d3388cb4baac6619d269a96742e
}

window.onload = function() {
    createDropdownProvince();
}
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
    return (phoneNumber.charAt(3) == '-' && phoneNumber.charAt(7) == '-');
}

// Tests the validation for postal code
// 
function zipCodeValidation(postalCode) {
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
}

// Test the validation for city
// 
function cityValidation(city) {
    if (city.length > 0) {
        for (var i = 0; i < city.length; ++i) {
            if ((city.charCodeAt(i) >= 65 && city.charCodeAt(i) <= 90) || (city.charCodeAt(i) >= 97 && city.charCodeAt(i) <= 122)) {
                return true;
            }
            else return false;
        }
    } else return false;
}

// Street Name validation
// 
function streetNameValidation(streetName) {
    var pattern = /^[a-zA-Z~@#$^*()_+=[\]{}|\\,.?: -]*$/; 
    return pattern.test(streetName); 
}

// Test the validation for the username
// 
function userNameValidation(userName) {
    if (userName.length >= 6) {
        if ((userName.charCodeAt(0) >= 65 && userName.charCodeAt(0) <= 90) || (userName.charCodeAt(0) >= 97 && userName.charCodeAt(0) <= 122))
            return true;
    } else return false;
}

// password validation - at least 8 characters
// 
function passWordValidation(passWord) {
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
}

window.onload = function() {
    createDropdownProvince();
}
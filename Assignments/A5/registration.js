var provinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador'];

function clear() {
    // Get all inptus
    var inputs = document.querySelectorAll('input');
    inputs.innerHMTL = "";
}

// Initiated when submit is clicked
// 
function validate() {
    passWordValidation(passWord)

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
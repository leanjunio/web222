// Task 1
// Write a function getMonthName() that for a given string, returns the month name of that date

const mName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];

function getMonthName(date) {
    let nDate;

    if (date instanceof Date == false)
        nDate = new Date(date);
    else nDate = date;
    return mName[nDate.getMonth()];
}
console.log(getMonthName("10 / 11 / 2009")); // returns “October”   
console.log(getMonthName(new Date("11 / 13 / 2014"))); // returns “November”

// Task 2
// Write a function getAgeFromBirth that given a person’s birthdate return their age

function getAgeFromBirth(date) { 
    return (new Date()).getFullYear() - new Date(date).getFullYear();
}   
console.log(getAgeFromBirth("12/02/2000")); // returns 18

// Task 4 
// Write a function getGCD that given an array of two whole numbers, returns the greatest common divisor of that set of numbers

function getGCD(num1, num2) { // insert code here  
    if (!num2) {
        return num1;
    }

    return gcd(b, a % b);
}

// Task 5
const dog1 = {
    name: Bulma,
    feet: 3
}

const Krypto = Object.create(dog1);
const Marks = Object.create(dog1);
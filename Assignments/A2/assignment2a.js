/*******************************************************************************
*
WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Lean Junio Student ID: 019-109-123 Date: 2018/05/30
*
******************************************************************************/

/*****************************
* Step 1
*****************************/

// Global variables
let e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
* Step 2
*****************************/
function capFirstLetter(str) {
    return str[0].toUpperCase() + str.substr(1, str.length).toLowerCase();;
}

e1 = prompt("Please enter your name", "Lean");
e1 = capFirstLetter(e1);

/*****************************
* Step 3
*****************************/
let getAge = function(year) {
    return (new Date().getFullYear() - year);
}

e2 = prompt("Please enter your birth year", 1993);
e2 = getAge(e2);


/*****************************
* Step 4
*****************************/
e3 = prompt("Please enter the name of your current college", "Seneca College");
e3 = e3.split(' ');
e3 = e3.map((x) => capFirstLetter(x));


/*****************************
* Step 5
*****************************/
e4 = prompt("Please enter enter 5 of your favorite sports (in lower case separated by comma)", "hockey,football,basketball,tennis,golf");
e4 = e4.replace(/football/i, 'soccer');
e4 = e4.split(',');

e5 = prompt("enter an extra favorite sport", "formula 1");
e4.push(e5);

/*****************************
* Step 6
*****************************/
e4 = e4.map((x) => x.toUpperCase());
e4.sort();


/*****************************
* Step 7
*****************************/
e6 = new Date();
var getDateString = function(dt) {
    return dt.getFullYear() + '-' + (dt.getMonth() < 10 ? '0' + dt.getMonth() : dt.getMonth) + '-' + (dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate());
};

e7 = getDateString(e6);

/*****************************
* Step 8
*****************************/
str = `
User Info:

name (e1): ${e1}
age (e2): ${e2}
School (e3): ${e3}
favorite sports (e4):
${'\t' + e4.join('\n\t')}
current date (e7): ${e7}
`
console.log(str);
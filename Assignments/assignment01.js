/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of 
* this assignment has been copied manually or electronically from any other source (including web sites) 
* or distributed to other students.
*
* Name: Lean Junio Student  ID: 019-109-123 Date:   Thursday, May 10, 2018
*
********************************************************************************/


/*****************************
* Task 1
*****************************/
// OVERVIEW
// Task 1: Student Info (use your information)
// a) Store the following information in variables: student name, number of courses (currently taking), program, having a part‐time job (true/false).
// b) Output your student info to the browser console as: "My name is ??? and I’m in ??? program. I’m taking ??? course in this semester." (NOTE: The “???”s should be replaced with variable or calculated values ‐ this also applies to all other outputs containing ??? listed in this assignment).
// c) Store the string “have” or “don’t" have” into a variable based on the value of the variable storing whether or not you have a part‐time job (true/false).
// d) Output your updated student info to the console as: "My name is ??? and I’m in ??? program. I’m taking ??? course in this semester and I ??? a part‐time job now."

const studentName = "Lean Junio";
const numOfCourses = 4;
const program = "CPA";
const partTimeJob = false;
console.log(`My name is ${studentName} and I’m in ${program} program. I’m taking ${numOfCourses} courses in this semester.`);

const job = function(a) {
    return (a) ? "have" : "don't have";
};

console.log(`My name is ${studentName} and I’m in ${program} program. I’m taking ${numOfCourses} course in this semester and I ${job()} a part‐time job now.`);

/*****************************
* Task 2
*****************************/
// OVERVIEW
// a) Store the current year in a variable.
// b) Prompt to user “Please enter your age:” and store the input value in a variable.
// c) Output the birth year to the console as: "You were born in the year of ???."
// d) Prompt to user “Enter the number of years you expect to study in the college:” and store the input value in a variable.
// e) Output the graduate year to the console as: "You will graduate from Seneca college in the year of ???."
// Note: you may need to do some research on JS prompt() method to find out how it works.

const currentYear = 2018;
const age = prompt('Please enter your age: ');
console.log(`You were born in the year of ${currentYear - age}`);
const yearsCollege = prompt('Enter the number of years you expect to study in the college: ');
console.log(`You will graduate from Seneca college in the year of ${currentYear + parseInt(yearsCollege)}.`);

/*****************************
* Task 3
*****************************/
// OVERVIEW
// a) Store a Celsius temperature in a variable.
// b) Convert it to Fahrenheit and output: "???°C is ???°F".
// c) Store a Fahrenheit temperature into a variable.
// d) Convert it to Celsius and output: "???°F is ???°C."
// Note: visit www.manuelsweb.com/temp.htm for temperature conversion formula.

const cTemp = 10;
console.log(`${cTemp}°C is ${(cTemp * 9 / 5 + 32).toFixed(1)}°F`);
const fTemp = 85;
console.log(`${cTemp}°C is ${((fTemp - 32) * 5 / 9).toFixed(1)}°F`);


/*****************************
* Task 4
*****************************/
// OVERVIEW
// a) Write a for loop that will iterate from 0 to 10. For each iteration, your code should check if the current number is even or odd, and output that information to the browser console (e.g. "5 is odd").

for (let i=0; i < 10; ++i) {
    if (i % 2) {
        console.log(`${i} is odd`);
    } else console.log(`${i} is even`);
}


/*****************************
* Task 5
*****************************/
// OVERVIEW
// a) Write a function named largerNum using the declaration approach, the function:
// • takes 2 arguments, both numbers,
// • returns the larger (greater) one of the 2 numbers.
// b) Write a function named greaterNum using the expression approach, the function:
// • takes 2 arguments, both numbers,
// • returns the greater (larger) one of the 2 numbers.
// c) Call these functions twice with different number parameters, and log the output to the web console with descriptive outputs each time (e.g. "The larger number of 5 and 12 is 12.").

function largerNum(a, b) {
    let larger;
    if (a > b) { 
        larger = a;
    } else larger = b;

    console.log(`The larger number of ${a} and ${b} is ${larger}.`);
}

var greaterNum = function(a, b) {
    let larger;
    if (a > b) { 
        larger = a;
    } else larger = b;

    console.log(`The larger number of ${a} and ${b} is ${larger}.`);
}

largerNum(10, 20);
largerNum(100, 200);
greaterNum(40, 50);
greaterNum(400, 500);


/*****************************
* Task 6
*****************************/
// OVERVIEW
// a) Write a function named Evaluator using the declaration approach, the function:
// • takes unknown number of arguments which are all number scores,
// • returns true if the average of these number scores is greater than or equal to 50. Otherwise return false.
// b) Call this function 3 times with different number parameters, and log the output to the web console with descriptive outputs each time (e.g. “Average grater than or equal to 50: false”); 

function Evaluator() {
    let total = 0;
    for (let i = 0; i < arguments.length; ++i) {
        total += arguments[i];
    }
    const avg = total / arguments.length;
    console.log(`Average (${avg.toFixed(1)}) greater than or equal to 50: ${(avg > 50)}`);
}

Evaluator(100, 100, 200);
Evaluator(100, 50);
Evaluator(25, 25, 25);

/*****************************
* Task 7
*****************************/
// OVERVIEW
// a) Write a function named Grader using the expression approach, the function:
// • takes a single argument which is a number score,
// • returns a grade for the score ‐ "A", "B", "C", "D", or "F". (refer to course outline for grading memo)
// b) Call these functions 3 times with different number score, and log the output to the web console with descriptive outputs each time.

let Grader = function (a) {
    let letter;
    if (a < 50) {
        letter = 'F';
    }
    if (a >= 50 && a <= 59) {
        letter = 'D';
    }
    if (a >= 60 && a <= 69) {
        letter = 'C';
    }
    if (a >= 70 && a <= 79) {
        letter = 'B';
    }
    if (a >= 80 && a <= 100) {
        letter = 'A';
    }
    console.log(`The letter grade for ${a} is ${letter}`);
};

Grader(70);
Grader(80);
Grader(90);

/*****************************
* Task 8
*****************************/
// OVERVIEW
// a) Write a function called showMultiples using the declaration approach, the function:
// • Takes 2 numeric arguments (num, numMultiples) – assume the user is entering valid (positive) whole
// numbers
// • Outputs all of the multiples of the num argument from 1 to numMultiples: for example:
// if num = 5 and numMultiples = 4, the function would output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// b) Call this function 3 times with different number parameters, and log the output to the web console with descriptive outputs each time.

function showMultiples(num, numMultiples) {
    for (let i = 0; i < numMultiples; i++) {
        console.log(`${num} x ${i + 1} = ${num * (i + 1)}`);
    }
}

showMultiples(5, 4);
showMultiples(10, 5);
showMultiples(2, 5);

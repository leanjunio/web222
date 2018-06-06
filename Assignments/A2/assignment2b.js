/*******************************************************************************
*
WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Lean Junio Student ID: 019-109-123 Date: 6/4/2018
*
******************************************************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
console.log("\n*** Task 1 ***\n\n");
var lastCourse = courses.pop();
console.log(`Course ${lastCourse.code} was deleted from the array (courses)`);
console.log(`Adding new course object into the the array (courses)\n\n`);

var ibc233 = { code: 'IBC233', name:'iSERIES Business Computing', hours: 4, url: 'https://cs.senecac.on.ca/~ibc233/'};
var oop244 = { code: 'OOP244', name:'Introduction to Object Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/index.html'};
var web222 = { code: 'WEB222', name:'Internet I - Internet Fundamentals', hours: 4, url: 'https://cs.senecac.on.ca/~wei.song/web222/web222.html'};
var dbs201 = { code: 'DBS201', name:'Introduction to Database Design and SQL', hours: 4, url: 'https://cs.senecac.on.ca/~dbs201/'};

courses.push(ibc233);
courses.push(oop244);
courses.push(web222);
courses.push(dbs201);

console.log('Course objects in the array (courses):');

for (let i = 0; i < courses.length; i++) {
    console.log(`${courses[i].code}, ${courses[i].name}, ${courses[i].hours} hours/week, website: ${courses[i].url}`);
}

// task 2
console.log("\n*** Task 2 ***\n\n");

var students = [];

var johnSmith = Object.create(student);

johnSmith.name = 'John Smith';
johnSmith.sid = '010456101'
johnSmith.dob = new Date('1999-9-10');
johnSmith.program = 'CPA';
johnSmith.gpa = 4;

var jimCarrery = Object.create(student);
jimCarrery.name = 'Jim Carrey';
jimCarrery.sid = '012345678'
jimCarrery.dob = new Date('1992-1-17');
jimCarrery.program = 'CPD';
jimCarrery.gpa = 3.5;

var justinBieber = Object.create(student);
justinBieber.name = 'Justin Bieber';
justinBieber.sid = '0987654321'
justinBieber.dob = new Date('1994-3-1');
justinBieber.program = 'CAN';
justinBieber.gpa = 3;

var justinTrudeau = Object.create(student);
justinTrudeau.name = 'Justin Trudeau';
justinTrudeau.sid = '123456789'
justinTrudeau.dob = new Date('1992-1-12');
justinTrudeau.program = 'CAN';
justinTrudeau.gpa = 4;

students.push(johnSmith, jimCarrery, justinBieber, justinTrudeau)

console.log('Student objects in the array (students):\n');

students.forEach((x, index) => console.log(`${index}: ${x.toString()}`));
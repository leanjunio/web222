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
console.log("*** Task 1 ***\n");
var lastCourse = courses.pop();
console.log(`Course ${lastCourse.code} was deleted from the array (courses)`);
console.log(`Adding new course object into the the array (courses)\n`);

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
    console.log(`${courses[i].code}, ${courses[i].name}, ${courses[i].hours}/week website: ${courses[i].url}`);
}

// task 2
console.log("\n*** Task 2 ***\n");

var students = [];


student.name = 'John Smith';
student.dob = '9','10','1999';
student.sid = '010456101'
student.program = 'CPA';
student.gpa = 4;

students.push(student);

student.name = 'Jim Carrey';
student.dob = '1/17/1992';
student.sid = '012345678'
student.program = 'CPD';
student.gpa = 3.5;

students.push(student);

student.name = 'Justin Bieber';
student.dob = '3/1/1994';
student.sid = '0987654321'
student.program = 'CAN';
student.gpa = 3;

students.push(student);

student.name = 'Justin Trudeau';
student.dob = '1/12/1992';
student.sid = '123456789'
student.program = 'CAN';
student.gpa = 4;

students.push(student);

console.log('Student objects in the array (students):\n');

students.forEach((x, index) => `${index}: ${x.toString()}`);
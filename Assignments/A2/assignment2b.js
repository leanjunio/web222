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

var lastCourse = courses.pop();
console.log(lastCourse);

var Course = (code, name, hours, url) => {
    this.code = code;
    this.name = name;
    this.hours = hours;
    this.url = url;
}

var ibc233 = new Course('IBC233', 'System i Business Computing', 4, 'https://ict.senecacollege.ca/course/int222?q=course/ibc233');
var oop244 = new Course('OOP244', 'Introduction to Object Oriented Programming in C++', 4, 'https://ict.senecacollege.ca/course/int222?q=course/ibc233');
var ibc233 = new Course('IBC233', 'System i Business Computing', 4, 'https://ict.senecacollege.ca/course/int222?q=course/ibc233');
var ibc233 = new Course('IBC233', 'System i Business Computing', 4, 'https://ict.senecacollege.ca/course/int222?q=course/ibc233');





// task 2


// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
    var one = document.getElementById('one');
    var ol = document.createElement('ol');

    for (var i = 0; i < fruits.length; i++) {
        var t = document.createTextNode(`${fruits[i]}`);
        var li = document.createElement('LI');
        li.appendChild(t)
        ol.appendChild(li);
    }

    one.appendChild(ol);

    var two = document.getElementById('two');
    var ul = document.createElement('UL');

    var files = [];
    var dir = [];

    // Separate files and directory
    for (var i = 0; i < directory.length; i++) {
        // just make them an li
        var t = document.createTextNode(`${directory[i].name}`);
        var li = document.createElement('LI');
        li.appendChild(t);
        ul.appendChild(li);

        // Create an inner UL
        if (directory[i].files) {
            var ul_ = document.createElement('UL');
            
            for (var x = 0; x < directory[i].files.length; x++) {
                var li_ = document.createElement('LI');
                var t = document.createTextNode(`${directory[i].files[x].name}`);
                li_.appendChild(t);
                ul_.appendChild(li_);
            }
            
            li.appendChild(ul_);
        }

        two.appendChild(ul);
    }
}
// get div 1
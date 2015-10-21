newbutton = function() {

var ed
var edd
var eddie

ed = document.querySelector("#todolist");
edd = document.querySelector("#task");

t = document.querySelector("#timetable");
li = document.createElement("li");

contents = document.createTextNode(edd);
li.appendChild(contents);

ed.appendChild(li);

}

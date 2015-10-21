newButton = function() {

var ed
var edd
var eddie
var li

ed = document.querySelector("#todolist");
edd = document.querySelector("#task");

li = document.createElement("li");

contents = document.createTextNode(edd);
li.appendChild(contents);

ed.appendChild(li);



}
//localSave(id of your UL as a string)

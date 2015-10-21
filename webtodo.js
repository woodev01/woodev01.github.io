newButton = function() {

var ed
var edd
var eddie
var li
var contents

ed = document.querySelector("#todolist");
edd = document.querySelector("#task").value;
eddie = document.querySelector("#priority").value;

li = document.createElement("li");

contents = document.createTextNode(edd);
li.appendChild(contents);

ed.appendChild(li);



}
//localSave(id of your UL as a string)
//doneTask = function(){
  //if (this.checked) {
    //this.parentNode.classList.add("done");
  //} else {
      //this.parentNode.classList.remove("done");
//}
//}

newButton = function() {

var ed;
var edd;
var eddie;
var li;
var contents;
var checker;

ed = document.querySelector("#todolist");
edd = document.querySelector("#task").value;
eddie = document.querySelector("#priority").value;

checker = document.createElement("input");
li = document.createElement("li");

checker.type = "checkbox";
checker.onclick = doneTask;

contents = document.createTextNode(edd);
li.classList.add(eddie);
li.appendChild(checker);
li.appendChild(contents);

ed.appendChild(li);
edd = 'Enter A New To Do';
localSave("todolist");


}

doneTask = function() {
  if (this.checked) {
    this.parentNode.classList.add("done");
  } else {
    this.parentNode.classList.remove("done");
  }
  localSave("todolist");
}

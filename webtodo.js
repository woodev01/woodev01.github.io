newButton = function() {

var ed
var edd
var eddie
var li
var contents

ed = document.querySelector("#todolist");
edd = document.querySelector("#task").value;
eddie = document.querySelector("#priority").value;

checker = document.createElement("input");
li = document.createElement("li");

checker.type = "checkbox";
checker.setAttribute("onClick","doneTask();");

contents = document.createTextNode(edd);
li.classList.add(eddie);
li.appendChild(checker);
li.appendChild(contents);

ed.appendChild(li);
localSave(ed);


}

doneTask = function() {
  if (this.checked) {
    system.out.println(this);
    this.parentNode.classList.add("done");
  } else {
      system.out.println(this);
      this.parentNode.classList.remove("done");
}
}

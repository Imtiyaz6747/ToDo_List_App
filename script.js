const taskList = document.getElementById("taskList");
const taskContainer = document.getElementsByClassName("taskContainer");
const inputBox = document.getElementById("textField");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write Something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#128465;"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();
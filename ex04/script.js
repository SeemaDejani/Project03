const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

function updateCounter() {
    taskCounter.textContent = "Total Tasks: " + taskList.children.length;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;
    taskLabel.className = "task-text";

    taskLabel.addEventListener("click", function () {
        taskLabel.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateCounter();
    });

    li.appendChild(taskLabel);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updateCounter();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateCounter();
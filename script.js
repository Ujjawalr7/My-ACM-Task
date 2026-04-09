let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${task.name}
            <div>
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">❌</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Task cannot be empty");
        return;
    }

    if (tasks.length >= 15) {
        alert("Maximum 15 tasks allowed");
        return;
    }

    tasks.push({ name: taskName, completed: false });
    input.value = "";
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

renderTasks();
